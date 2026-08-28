import { Mark } from "@/components/mark";
import { LinkView } from "@/views/link-view";
import { MetroView } from "@/views/metro-view";
import { OpsView } from "@/views/ops-view";
import { SdrView } from "@/views/sdr-view";
import { SwarmView } from "@/views/swarm-view";
import { useApp } from "@/lib/store";
import { isNativeApk } from "@/lib/native";
import { RELEASE } from "@/lib/release-meta";
import type { ViewId } from "@/lib/types";
import { utcStamp } from "@/lib/utils";
import { Cable, Gauge, LayoutGrid, Radio, Waypoints } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

const NAV: { id: ViewId; label: string; icon: typeof LayoutGrid }[] = [
  { id: "ops", label: "Ops", icon: LayoutGrid },
  { id: "sdr", label: "RF", icon: Radio },
  { id: "swarm", label: "Swarm", icon: Waypoints },
  { id: "metro", label: "Metro", icon: Gauge },
  { id: "link", label: "Link", icon: Cable },
];

let clockCache = "—";

function subscribeClock(cb: () => void) {
  clockCache = utcStamp();
  const id = window.setInterval(() => {
    clockCache = utcStamp();
    cb();
  }, 250);
  return () => window.clearInterval(id);
}

function useClock() {
  return useSyncExternalStore(subscribeClock, () => clockCache, () => "—");
}

export function AppShell() {
  const view = useApp((s) => s.view);
  const setView = useApp((s) => s.setView);
  const hydrate = useApp((s) => s.hydrate);
  const tick = useApp((s) => s.tick);
  const applyPixelFix = useApp((s) => s.applyPixelFix);
  const tel = useApp((s) => s.tel);
  const mode = useApp((s) => s.mode);
  const sdr = useApp((s) => s.sdr);
  const usb = useApp((s) => s.usb);
  const clock = useClock();
  const [armed, setArmed] = useState(false);
  const sdrUsb = usb.rx ? "USB RX" : mode === "live" ? "LIVE" : "SIM";

  useEffect(() => {
    hydrate();
    setArmed(true);
  }, [hydrate]);

  useEffect(() => {
    if (!isNativeApk() || !("geolocation" in navigator)) return;
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        applyPixelFix(
          pos.coords.latitude,
          pos.coords.longitude,
          pos.coords.accuracy,
          pos.coords.altitude ?? undefined,
        );
      },
      () => {
        /* denied or unavailable */
      },
      { enableHighAccuracy: true, maximumAge: 4000, timeout: 12000 },
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [applyPixelFix]);

  useEffect(() => {
    if (!armed) return;
    const id = window.setInterval(tick, 100);
    return () => window.clearInterval(id);
  }, [tick, armed]);

  useEffect(() => {
    if (!sdr.audio) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    osc.type = sdr.demod === "AM" ? "sine" : "triangle";
    osc.frequency.value = 220 + (sdr.centerHz % 400);
    lfo.frequency.value = 4.5;
    lfoGain.gain.value = 18;
    gain.gain.value = 0.03;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    lfo.start();
    return () => {
      osc.stop();
      lfo.stop();
      void ctx.close();
    };
  }, [sdr.audio, sdr.demod, sdr.centerHz]);

  return (
    <div className="app-grid flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Mark className="size-8 text-primary" />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                DynoGator Labs
              </div>
              <div className="text-base font-semibold tracking-tight text-foreground">DSLV-ZPDI</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs tabular-nums text-muted">{clock}</div>
            <div className="font-mono text-xs uppercase tracking-wide text-primary">
              {sdrUsb} · {tel.halMode}
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between font-mono text-xs text-muted">
          <span>Rev {RELEASE.version} · Pixel C2</span>
          <span className={tel.timingHealthy ? "text-ok" : "text-warn"}>
            {tel.timingHealthy ? "TIMING LOCK" : "TIMING DEGRADED"}
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-4 pb-28">
        {view === "ops" ? <OpsView /> : null}
        {view === "sdr" ? <SdrView /> : null}
        {view === "swarm" ? <SwarmView /> : null}
        {view === "metro" ? <MetroView /> : null}
        {view === "link" ? <LinkView /> : null}
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-sm">
        <ul className="mx-auto grid max-w-3xl grid-cols-5">
          {NAV.map((item) => {
            const active = view === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setView(item.id)}
                  className={`flex h-14 w-full flex-col items-center justify-center gap-0.5 text-xs ${
                    active ? "text-primary" : "text-muted"
                  }`}
                >
                  <Icon className="size-5" strokeWidth={active ? 2.2 : 1.7} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
