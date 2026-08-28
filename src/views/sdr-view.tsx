import { Panel, Pill, Row } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Waterfall } from "@/components/waterfall";
import { isNativeApk } from "@/lib/native";
import { useApp } from "@/lib/store";
import { DEVICE_LABEL, LNA_STEPS, PRESETS, VGA_STEPS, type DemodMode, type WaterfallMode } from "@/lib/types";
import { formatHz } from "@/lib/utils";
import { useState } from "react";

const DEMODS: DemodMode[] = ["WFM", "NFM", "AM", "USB", "LSB", "CW", "RAW"];
const MODES: WaterfallMode[] = ["SWEEP", "NARROW", "SCOPE"];

export function SdrView() {
  const sdr = useApp((s) => s.sdr);
  const tel = useApp((s) => s.tel);
  const usb = useApp((s) => s.usb);
  const bins = useApp((s) => s.bins);
  const history = useApp((s) => s.history);
  const peakHold = useApp((s) => s.peakHold);
  const setCenterHz = useApp((s) => s.setCenterHz);
  const nudgeCenter = useApp((s) => s.nudgeCenter);
  const setSpanMode = useApp((s) => s.setSpanMode);
  const zoom = useApp((s) => s.zoom);
  const setGain = useApp((s) => s.setGain);
  const setDemod = useApp((s) => s.setDemod);
  const setDevice = useApp((s) => s.setDevice);
  const setFloorCeil = useApp((s) => s.setFloorCeil);
  const cyclePalette = useApp((s) => s.cyclePalette);
  const applyPreset = useApp((s) => s.applyPreset);
  const toggleAudio = useApp((s) => s.toggleAudio);
  const togglePause = useApp((s) => s.togglePause);
  const usbScan = useApp((s) => s.usbScan);
  const usbOpen = useApp((s) => s.usbOpen);
  const usbClose = useApp((s) => s.usbClose);
  const usbRx = useApp((s) => s.usbRx);
  const [mhz, setMhz] = useState("");
  const native = isNativeApk();
  const liveUsb = usb.rx && usb.source === "usb";

  return (
    <div className="flex flex-col gap-3">
      <Panel
        title="USB OTG · HackRF / AD9363"
        action={
          <Pill tone={liveUsb ? "ok" : usb.open ? "warn" : "default"}>
            {liveUsb ? "RX" : usb.open ? "OPEN" : native ? "IDLE" : "PWA"}
          </Pill>
        }
      >
        <p className="mb-3 text-xs leading-relaxed text-muted">
          {native
            ? "Pixel USB-C host. HackRF is vendor-protocol on this handset. HamGeek AD9363 needs ECM (not RNDIS) then IIO at 192.168.2.1. RF from this radio is clock_source=internal → SECONDARY, never Tier-1 PRIMARY."
            : "OTG control is in the signed Pixel APK. This preview runs the same UI against the Front Range simulator."}
        </p>
        <Row label="Kind" value={usb.kind === "none" ? "—" : usb.kind.toUpperCase()} tone={usb.open ? "primary" : "default"} />
        <Row label="Board" value={usb.board || usb.version || "—"} />
        <Row label="Rate" value={`${(usb.sampleRateHz / 1e6).toFixed(3)} Msps`} />
        <Row label="IIO" value={usb.iio ? "up" : "down"} tone={usb.iio ? "ok" : "default"} />
        {usb.error ? <p className="mt-2 font-mono text-xs text-danger">{usb.error}</p> : null}
        {usb.devices.length > 0 ? (
          <ul className="mt-2 flex flex-col gap-1">
            {usb.devices.map((d) => (
              <li key={d.deviceId} className="font-mono text-xs text-muted">
                {d.vid}:{d.pid} · {d.kind} · {d.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 font-mono text-xs text-muted">No USB SDR enumerated.</p>
        )}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button variant="outline" onClick={() => usbScan()} disabled={!native}>
            Scan OTG
          </Button>
          <Button variant="outline" onClick={() => usbOpen()} disabled={!native}>
            Open radio
          </Button>
          <Button variant={usb.rx ? "primary" : "outline"} onClick={() => usbRx(!usb.rx)} disabled={!native}>
            {usb.rx ? "Hold RX" : "Start RX"}
          </Button>
          <Button variant="outline" onClick={() => usbClose()} disabled={!native}>
            Close
          </Button>
        </div>
      </Panel>

      <Panel
        title="Waterfall"
        action={
          <div className="flex gap-1.5">
            <Pill tone="primary">{sdr.waterfallMode}</Pill>
            <Pill tone={liveUsb ? "ok" : "default"}>{liveUsb ? "USB" : DEVICE_LABEL[sdr.device].split(" ")[0]}</Pill>
          </div>
        }
      >
        <Waterfall
          history={history}
          bins={bins}
          peakHold={peakHold}
          centerHz={sdr.centerHz}
          spanHz={sdr.spanHz}
          floorDbm={sdr.floorDbm}
          ceilDbm={sdr.ceilDbm}
          palette={sdr.palette}
          onTune={setCenterHz}
        />
        <p className="mt-2 text-xs text-muted">
          {liveUsb ? "Live USB bins · tap to retune the OTG radio." : "Tap the waterfall to retune. Dashed trace is peak-hold."}
        </p>
        <div className="mt-2 grid grid-cols-2 gap-x-3">
          <Row label="Peak" value={`${tel.peakDbm.toFixed(1)} dBm`} />
          <Row label="Floor" value={`${tel.noiseFloorDbm.toFixed(1)} dBm`} />
          <Row label="SNR" value={`${tel.snrDb.toFixed(1)} dB`} tone={tel.snrDb > 20 ? "ok" : "warn"} />
          <Row label="At" value={formatHz(tel.peakHz)} tone="primary" />
        </div>
      </Panel>

      <Panel title="Tune">
        <div className="mb-3 flex items-end justify-between">
          <div>
            <div className="text-[0.6875rem] uppercase tracking-[0.14em] text-muted">Center</div>
            <div className="font-mono text-3xl font-medium tabular-nums leading-none text-foreground">
              {(sdr.centerHz / 1e6).toFixed(4)}
              <span className="ml-2 text-sm font-normal text-muted">MHz</span>
            </div>
          </div>
          <div className="font-mono text-xs text-muted">span {(sdr.spanHz / 1e6).toFixed(2)} MHz</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" size="sm" onClick={() => nudgeCenter(-0.1)}>
            −10%
          </Button>
          <Button variant="outline" size="sm" onClick={() => nudgeCenter(-0.01)}>
            −1%
          </Button>
          <Button variant="outline" size="sm" onClick={() => nudgeCenter(0.01)}>
            +1%
          </Button>
          <Button variant="outline" size="sm" onClick={() => nudgeCenter(0.1)}>
            +10%
          </Button>
          <Button variant="outline" size="sm" onClick={() => zoom(1)}>
            Zoom in
          </Button>
          <Button variant="outline" size="sm" onClick={() => zoom(-1)}>
            Zoom out
          </Button>
          <Button variant="outline" size="sm" onClick={togglePause}>
            {sdr.paused ? "Resume" : "Pause"}
          </Button>
          <Button variant={sdr.audio ? "primary" : "outline"} size="sm" onClick={toggleAudio}>
            {sdr.audio ? "Audio on" : "Audio"}
          </Button>
        </div>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const v = parseFloat(mhz);
            if (!Number.isFinite(v)) return;
            setCenterHz(v * 1e6);
            setMhz("");
          }}
        >
          <input
            inputMode="decimal"
            value={mhz}
            onChange={(e) => setMhz(e.target.value)}
            placeholder="MHz"
            className="h-11 min-w-0 flex-1 rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring"
          />
          <Button type="submit" variant="primary">
            Tune
          </Button>
        </form>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {MODES.map((m) => (
            <Button
              key={m}
              size="sm"
              variant={sdr.waterfallMode === m ? "primary" : "outline"}
              onClick={() => setSpanMode(m)}
            >
              {m}
            </Button>
          ))}
        </div>
      </Panel>

      <Panel title="Presets">
        <div className="grid grid-cols-2 gap-2">
          {PRESETS.map((p) => (
            <Button
              key={p.id}
              variant={sdr.preset === p.id ? "primary" : "outline"}
              size="sm"
              onClick={() => applyPreset(p.id)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      </Panel>

      <Panel title="Front end">
        <label className="mb-3 block">
          <div className="mb-1 flex justify-between font-mono text-xs text-muted">
            <span>LNA</span>
            <span className="tabular-nums text-foreground">{sdr.lnaGain} dB</span>
          </div>
          <input
            type="range"
            min={0}
            max={LNA_STEPS.length - 1}
            value={Math.max(0, LNA_STEPS.indexOf(sdr.lnaGain))}
            onChange={(e) => setGain("lna", LNA_STEPS[Number(e.target.value)] ?? 24)}
            className="w-full"
          />
        </label>
        <label className="mb-3 block">
          <div className="mb-1 flex justify-between font-mono text-xs text-muted">
            <span>VGA</span>
            <span className="tabular-nums text-foreground">{sdr.vgaGain} dB</span>
          </div>
          <input
            type="range"
            min={0}
            max={VGA_STEPS.length - 1}
            value={Math.max(0, VGA_STEPS.indexOf(sdr.vgaGain))}
            onChange={(e) => setGain("vga", VGA_STEPS[Number(e.target.value)] ?? 32)}
            className="w-full"
          />
        </label>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {DEMODS.map((d) => (
            <Button key={d} size="sm" variant={sdr.demod === d ? "primary" : "ghost"} onClick={() => setDemod(d)}>
              {d}
            </Button>
          ))}
        </div>
        <Row label="Device" value="" />
        <select
          value={sdr.device}
          onChange={(e) => setDevice(e.target.value as typeof sdr.device)}
          className="mt-1 h-11 w-full rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none"
        >
          <option value="pluto_iio">PlutoSDR+ / HamGeek AD9363</option>
          <option value="libresdr">LibreSDR</option>
          <option value="hackrf1">HackRF One</option>
        </select>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button size="sm" variant="outline" onClick={() => setFloorCeil(sdr.floorDbm - 5, undefined)}>
            Floor −5
          </Button>
          <Button size="sm" variant="outline" onClick={() => setFloorCeil(sdr.floorDbm + 5, undefined)}>
            Floor +5
          </Button>
          <Button size="sm" variant="outline" onClick={() => setFloorCeil(undefined, sdr.ceilDbm - 5)}>
            Ceil −5
          </Button>
          <Button size="sm" variant="outline" onClick={() => setFloorCeil(undefined, sdr.ceilDbm + 5)}>
            Ceil +5
          </Button>
        </div>
        <Button className="mt-2 w-full" variant="ghost" size="sm" onClick={cyclePalette}>
          Palette {sdr.palette + 1} / 3
        </Button>
      </Panel>
    </div>
  );
}
