package labs.dynogator.dslvzpdi;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Pixel telemetry publisher :8777 (SPEC-016) and C2 listener :8444 (SPEC-C2-001).
 * Alpha PixelNodeBridge polls GET /telemetry the same way it polls Termux.
 */
public final class NodeHttpServer {
    static final int TELEMETRY_PORT = 8777;
    static final int C2_PORT = 8444;

    private final NativeHost host;
    private final ExecutorService pool = Executors.newCachedThreadPool();
    private volatile boolean running;
    private ServerSocket telSock;
    private ServerSocket c2Sock;
    private volatile String telBind = "";
    private volatile String c2Bind = "";
    private volatile String lastErr = "";

    NodeHttpServer(NativeHost host) {
        this.host = host;
    }

    void start() {
        running = true;
        pool.execute(() -> bind("telemetry", TELEMETRY_PORT, true));
        pool.execute(() -> bind("c2", C2_PORT, false));
    }

    void stop() {
        running = false;
        closeQuiet(telSock);
        closeQuiet(c2Sock);
        pool.shutdownNow();
    }

    JSONObject status() {
        JSONObject o = new JSONObject();
        try {
            o.put("telemetry", TELEMETRY_PORT);
            o.put("c2", C2_PORT);
            o.put("telemetryBind", telBind);
            o.put("c2Bind", c2Bind);
            o.put("error", lastErr);
            o.put("running", running);
        } catch (Exception ignored) {
        }
        return o;
    }

    private void bind(String name, int port, boolean telemetry) {
        try {
            ServerSocket ss = new ServerSocket();
            ss.setReuseAddress(true);
            ss.bind(new InetSocketAddress("0.0.0.0", port));
            if (telemetry) {
                telSock = ss;
                telBind = "0.0.0.0:" + port;
            } else {
                c2Sock = ss;
                c2Bind = "0.0.0.0:" + port;
            }
            while (running) {
                Socket s = ss.accept();
                pool.execute(() -> serve(s, telemetry));
            }
        } catch (Exception e) {
            lastErr = name + " " + e.getMessage();
        }
    }

    private void serve(Socket s, boolean telemetry) {
        try {
            s.setSoTimeout(2500);
            BufferedReader br = new BufferedReader(new InputStreamReader(s.getInputStream(), StandardCharsets.UTF_8));
            String line = br.readLine();
            if (line == null) return;
            String[] parts = line.split(" ");
            String method = parts.length > 0 ? parts[0] : "GET";
            String path = parts.length > 1 ? parts[1] : "/";
            int contentLen = 0;
            String header;
            while ((header = br.readLine()) != null && !header.isEmpty()) {
                if (header.toLowerCase().startsWith("content-length:")) {
                    try {
                        contentLen = Integer.parseInt(header.substring(15).trim());
                    } catch (Exception ignored) {
                    }
                }
            }
            char[] bodyBuf = new char[Math.max(0, Math.min(contentLen, 200_000))];
            int got = 0;
            while (got < bodyBuf.length) {
                int n = br.read(bodyBuf, got, bodyBuf.length - got);
                if (n < 0) break;
                got += n;
            }
            String body = new String(bodyBuf, 0, got);
            String resp;
            int code = 200;
            if (path.startsWith("/health")) {
                resp = "{\"ok\":true,\"node\":\"pixel-9-pro-xl\",\"tier\":2}";
            } else if (telemetry && (path.startsWith("/telemetry") || path.startsWith("/mobile_node_tier2") || path.equals("/"))) {
                resp = host.telemetryPayload();
            } else if (!telemetry && path.startsWith("/api/v1/status")) {
                resp = host.nodeStatus();
            } else if (!telemetry && path.startsWith("/api/v1/command") && "POST".equals(method)) {
                resp = host.c2(body);
                code = 202;
            } else if (path.startsWith("/api/status")) {
                resp = host.nodeStatus();
            } else {
                code = 404;
                resp = "{\"ok\":false,\"error\":\"not found\"}";
            }
            byte[] bytes = resp.getBytes(StandardCharsets.UTF_8);
            OutputStream os = s.getOutputStream();
            String hdr = "HTTP/1.1 " + code + (code == 202 ? " Accepted" : code == 404 ? " Not Found" : " OK")
                    + "\r\nContent-Type: application/json\r\nAccess-Control-Allow-Origin: *\r\n"
                    + "Content-Length: " + bytes.length + "\r\nConnection: close\r\n\r\n";
            os.write(hdr.getBytes(StandardCharsets.UTF_8));
            os.write(bytes);
            os.flush();
        } catch (Exception ignored) {
        } finally {
            try {
                s.close();
            } catch (Exception ignored) {
            }
        }
    }

    private static void closeQuiet(ServerSocket ss) {
        try {
            if (ss != null) ss.close();
        } catch (Exception ignored) {
        }
    }
}
