import { Panel, Pill, Row } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { SCAN_BANKS, SCAN_LEGAL, channelsFor, formatScanMhz, scanChannelAt } from "@/lib/scanner";
import { useApp } from "@/lib/store";
import { formatHz } from "@/lib/utils";

export function ScannerPanel() {
  const scan = useApp((s) => s.scan);
  const sdr = useApp((s) => s.sdr);
  const tel = useApp((s) => s.tel);
  const usb = useApp((s) => s.usb);
  const scanStart = useApp((s) => s.scanStart);
  const scanStop = useApp((s) => s.scanStop);
  const scanHold = useApp((s) => s.scanHold);
  const scanSkip = useApp((s) => s.scanSkip);
  const scanSetBank = useApp((s) => s.scanSetBank);
  const list = channelsFor(scan.bank);
  const ch = scanChannelAt(scan.bank, scan.index);
  const upcoming = [1, 2, 3, 4]
    .map((off) => scanChannelAt(scan.bank, scan.index + off))
    .filter((n): n is NonNullable<typeof n> => !!n)
    .filter((n) => n.id !== ch?.id);
  const liveUsb = usb.rx && usb.source === "usb";
  const tone = !scan.running ? "default" : scan.held ? "warn" : scan.locked ? "ok" : "primary";
  const status = !scan.running ? "IDLE" : scan.held ? "HOLD" : scan.locked ? "LOCK" : "SEARCH";

  return (
    <Panel
      title="Scanner · Fremont analog"
      action={<Pill tone={tone}>{status}</Pill>}
    >
      <p className="mb-3 text-xs leading-relaxed text-muted">
        Penrose / Fremont County listen-only. SCAN hops, locks on RF, and applies demod + span so the channel actually comes in.
        SKIP next. HOLD stays. Encrypted P25 / ATSC left out.
      </p>

      {ch ? (
        <div className="mb-3">
          <div className="text-[0.6875rem] uppercase tracking-[0.14em] text-muted">{ch.service}</div>
          <div className="font-mono text-3xl font-medium tabular-nums leading-none text-foreground">
            {formatScanMhz(ch.hz)}
            <span className="ml-2 text-sm font-normal text-muted">{ch.hz >= 2e6 ? "MHz" : "kHz"}</span>
          </div>
          <div className="mt-1 font-mono text-xs text-primary">
            {ch.label} · {ch.demod} · {(ch.spanHz / 1e3).toFixed(0)} kHz
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-4 gap-2">
        <Button variant={scan.running && !scan.held ? "primary" : "outline"} onClick={scanStart}>
          Scan
        </Button>
        <Button variant={scan.held ? "primary" : "outline"} onClick={scanHold} disabled={!scan.running && !ch}>
          Hold
        </Button>
        <Button variant="outline" onClick={scanSkip}>
          Skip
        </Button>
        <Button variant="outline" onClick={scanStop} disabled={!scan.running}>
          Stop
        </Button>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {SCAN_BANKS.map((b) => (
          <Button
            key={b.id}
            size="sm"
            variant={scan.bank === b.id ? "primary" : "ghost"}
            onClick={() => scanSetBank(b.id)}
          >
            {b.label}
          </Button>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-x-3">
        <Row label="Bank" value={`${scan.bank} · ${list.length}`} />
        <Row
          label="SNR"
          value={`${tel.snrDb.toFixed(1)} dB`}
          tone={scan.locked ? "ok" : tel.snrDb > 12 ? "warn" : "default"}
        />
        <Row label="Peak" value={formatHz(tel.peakHz)} tone="primary" />
        <Row label="RF" value={liveUsb ? "HackRF" : "sim"} tone={liveUsb ? "ok" : "default"} />
        <Row label="Tune" value={`${(sdr.centerHz / 1e6).toFixed(3)} ${sdr.demod}`} />
        <Row label="Lock ≥" value={ch ? `${ch.lockSnr} dB` : "—"} />
      </div>

      {upcoming.length ? (
        <ul className="mt-3 space-y-1 border-t border-border pt-3">
          {upcoming.map((n) => (
            <li key={n.id} className="flex justify-between gap-3 font-mono text-xs text-muted">
              <span className="truncate">{n.label}</span>
              <span>
                {n.demod} · {formatScanMhz(n.hz)}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <p className="mt-3 text-[0.625rem] leading-relaxed text-subtle">{SCAN_LEGAL}</p>
    </Panel>
  );
}
