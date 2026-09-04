package labs.dynogator.dslvzpdi;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * Analog listen-only Fremont / Penrose banks. Mirrors src/lib/scanner.ts.
 * No P25 DTRS, no ATSC, no encrypted TGs. HackRF floor 1 MHz.
 */
final class ScanBank {
    static final class Ch {
        final String id;
        final String bank;
        final String label;
        final String demod;
        final String service;
        final long hz;
        final int spanHz;
        final double lockSnr;
        final double squelch;

        Ch(String bank, double mhz, String demod, String call, String service) {
            this.bank = bank;
            this.hz = Math.round(mhz * 1e6);
            this.demod = demod;
            this.service = service;
            this.spanHz = "WFM".equals(demod) ? 2_048_000 : 400_000;
            this.lockSnr = "WFM".equals(demod) ? 14 : 10;
            this.squelch = "WFM".equals(demod) ? 0.04 : "AM".equals(demod) ? 0.10 : 0.12;
            this.id = bank + "-" + mhz;
            String mhzTxt = mhz < 2 ? String.valueOf(Math.round(mhz * 1000)) : trimMhz(mhz);
            this.label = call + " " + mhzTxt;
        }
    }

    static final Ch[] ALL = {
            n("noaa", 162.5, "NFM", "KJY81", "NWS Twin Mountain"),
            n("noaa", 162.55, "NFM", "KEC76", "NWS Pueblo"),
            n("noaa", 162.475, "NFM", "WXM54", "NWS Colorado Springs"),
            n("noaa", 162.4, "NFM", "WX", "NOAA 162.400"),
            n("noaa", 162.425, "NFM", "WX", "NOAA 162.425"),
            n("noaa", 162.45, "NFM", "WX", "NOAA 162.450"),
            n("noaa", 162.525, "NFM", "WX", "NOAA 162.525"),
            n("fm", 104.5, "WFM", "KSTY", "Canon City country"),
            n("fm", 89.1, "WFM", "KTLC", "Canon City"),
            n("fm", 88.7, "WFM", "KCME", "Colorado Springs classical"),
            n("fm", 91.1, "WFM", "KCME", "KCME translator"),
            n("fm", 91.5, "WFM", "KRCC", "Colorado College"),
            n("fm", 92.9, "WFM", "KKPK", "Colorado Springs"),
            n("fm", 94.3, "WFM", "KILO", "Colorado Springs rock"),
            n("fm", 95.1, "WFM", "KATC", "Pueblo"),
            n("fm", 96.1, "WFM", "KIBT", "Colorado Springs"),
            n("fm", 96.9, "WFM", "KCCY", "Pueblo"),
            n("fm", 98.1, "WFM", "KKFM", "Colorado Springs"),
            n("fm", 98.9, "WFM", "KKMG", "Colorado Springs"),
            n("fm", 99.9, "WFM", "KVUU", "Colorado Springs"),
            n("fm", 102.7, "WFM", "KBIQ", "Colorado Springs"),
            n("fm", 103.9, "WFM", "KRXP", "Pueblo"),
            n("fm", 106.3, "WFM", "KKLI", "Colorado Springs"),
            n("fm", 107.3, "WFM", "FM", "107.3 Front Range"),
            n("fm", 107.9, "WFM", "KBPL", "Pueblo"),
            n("fire", 154.31, "NFM", "CC Fire", "Canon City Fire"),
            n("fire", 155.88, "NFM", "Penrose", "Florence / Penrose pagers"),
            n("fire", 154.01, "NFM", "Cotopaxi", "Cotopaxi Fire"),
            n("fire", 154.235, "NFM", "Deer Mtn", "Deer Mountain Fire"),
            n("fire", 154.4, "NFM", "Florence", "Florence Fire / PD analog"),
            n("fire", 154.37, "NFM", "Tallahassee", "Tallahassee Fire"),
            n("fire", 154.43, "NFM", "Fire tac", "VHF fire tac"),
            n("fire", 154.57, "NFM", "Fire tac", "VHF fire tac 2"),
            n("fire", 155.28, "NFM", "EMS tac", "EMS / fire tac"),
            n("law", 154.845, "NFM", "Sheriff", "Fremont County Sheriff analog"),
            n("svc", 155.76, "NFM", "Canon City", "City services"),
            n("svc", 155.955, "NFM", "PubWorks", "Public works"),
            n("rail", 161.49, "NFM", "UP road", "UP Royal Gorge road"),
            n("rail", 161.115, "NFM", "UP", "UP dispatcher"),
            n("rail", 160.425, "NFM", "UP", "UP analog"),
            n("rail", 452.9, "NFM", "UP UHF", "UP 452.900"),
            n("air", 122.8, "AM", "1V6 CTAF", "Canon City / Fremont UNICOM"),
            n("air", 120.025, "AM", "1V6 AWOS", "Fremont County AWOS"),
            n("air", 128.375, "AM", "Approach", "Colorado Springs approach"),
            n("air", 121.5, "AM", "Guard", "121.5 emergency"),
            n("ham", 146.52, "NFM", "2m", "2m FM calling"),
            n("ham", 446.0, "NFM", "70cm", "70cm FM calling"),
            n("ham", 52.525, "NFM", "6m", "6m FM calling"),
            n("gmrs", 462.675, "NFM", "GMRS 20", "GMRS ch 20 / 550"),
            n("gmrs", 151.82, "NFM", "MURS 1", "MURS 151.820"),
            n("gmrs", 151.88, "NFM", "MURS 2", "MURS 151.880"),
            n("gmrs", 151.94, "NFM", "MURS 3", "MURS 151.940"),
            n("gmrs", 154.6, "NFM", "MURS 5", "MURS 154.600"),
            n("marine", 156.8, "NFM", "Ch 16", "VHF marine distress"),
            n("cb", 27.185, "AM", "CB 19", "CB channel 19"),
            n("am", 1.4, "AM", "KRLN", "Canon City 1400"),
            n("am", 1.24, "AM", "KRDO", "Colorado Springs 1240"),
            n("am", 1.23, "AM", "AM", "1230 kHz"),
            n("am", 1.3, "AM", "AM", "1300 kHz"),
            n("am", 1.35, "AM", "KUBE", "Pueblo 1350"),
            n("am", 1.46, "AM", "AM", "1460 kHz"),
            n("am", 1.48, "AM", "AM", "1480 kHz"),
            n("am", 1.49, "AM", "KDZA", "Pueblo 1490"),
            n("am", 1.53, "AM", "AM", "1530 kHz"),
            n("am", 1.58, "AM", "AM", "1580 kHz"),
    };

    private static Ch n(String bank, double mhz, String demod, String call, String service) {
        return new Ch(bank, mhz, demod, call, service);
    }

    static List<Ch> ofBank(String bank) {
        String b = bank == null ? "all" : bank.toLowerCase(Locale.US);
        List<Ch> out = new ArrayList<>();
        for (Ch c : ALL) {
            if ("all".equals(b) || c.bank.equals(b)) out.add(c);
        }
        return out;
    }

    static String listText(String bank) {
        List<Ch> list = ofBank(bank);
        StringBuilder b = new StringBuilder();
        b.append(list.size()).append(" analog channels · ").append(bank).append('\n');
        for (Ch c : list) {
            b.append(String.format(Locale.US, "%-8s %10.4f  %-4s  %s\n",
                    c.bank, c.hz / 1e6, c.demod, c.label));
        }
        b.append("listen-only analog. no P25 DTRS / ATSC / encrypted.");
        return b.toString();
    }

    static JSONObject apply(UsbSdrEngine sdr, Ch ch) throws Exception {
        JSONObject cfg = new JSONObject()
                .put("centerHz", ch.hz)
                .put("demod", ch.demod)
                .put("squelch", ch.squelch);
        sdr.config(cfg);
        sdr.setRx(true);
        JSONObject listen = new JSONObject().put("on", true).put("demod", ch.demod).put("centerHz", ch.hz);
        sdr.setListen(true);
        sdr.config(listen);
        JSONObject o = new JSONObject();
        o.put("id", ch.id);
        o.put("bank", ch.bank);
        o.put("hz", ch.hz);
        o.put("demod", ch.demod);
        o.put("label", ch.label);
        o.put("service", ch.service);
        o.put("spanHz", ch.spanHz);
        return o;
    }

    static JSONArray jsonList(String bank) throws Exception {
        JSONArray a = new JSONArray();
        for (Ch c : ofBank(bank)) {
            a.put(new JSONObject()
                    .put("id", c.id)
                    .put("bank", c.bank)
                    .put("hz", c.hz)
                    .put("demod", c.demod)
                    .put("label", c.label)
                    .put("service", c.service));
        }
        return a;
    }

    private static String trimMhz(double mhz) {
        String s = String.format(Locale.US, "%.4f", mhz);
        while (s.contains(".") && (s.endsWith("0") || s.endsWith("."))) {
            s = s.substring(0, s.length() - 1);
            if (s.endsWith(".")) {
                s = s.substring(0, s.length() - 1);
                break;
            }
        }
        return s;
    }
}
