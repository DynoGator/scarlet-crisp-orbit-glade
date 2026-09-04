import type { DemodMode, SdrConfig, WaterfallMode } from "./types";

export type ScanBankId =
  | "all"
  | "fm"
  | "am"
  | "noaa"
  | "fire"
  | "law"
  | "svc"
  | "rail"
  | "air"
  | "ham"
  | "gmrs"
  | "marine"
  | "cb";

export interface ScanChannel {
  id: string;
  bank: Exclude<ScanBankId, "all">;
  hz: number;
  demod: DemodMode;
  spanHz: number;
  label: string;
  call: string;
  service: string;
  lockSnr: number;
  squelch: number;
  dwellMs: number;
}

export interface ScanState {
  running: boolean;
  held: boolean;
  locked: boolean;
  bank: ScanBankId;
  index: number;
  lastAdvance: number;
  hangUntil: number;
  dwellMs: number;
  hangMs: number;
}

export const DEFAULT_SCAN: ScanState = {
  running: false,
  held: false,
  locked: false,
  bank: "all",
  index: 0,
  lastAdvance: 0,
  hangUntil: 0,
  dwellMs: 1100,
  hangMs: 2200,
};

export const SCAN_BANKS: { id: ScanBankId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fm", label: "FM" },
  { id: "am", label: "AM" },
  { id: "noaa", label: "NOAA" },
  { id: "fire", label: "Fire" },
  { id: "law", label: "Law" },
  { id: "svc", label: "Svc" },
  { id: "rail", label: "Rail" },
  { id: "air", label: "Air" },
  { id: "ham", label: "Ham" },
  { id: "gmrs", label: "GMRS" },
  { id: "marine", label: "Marine" },
  { id: "cb", label: "CB" },
];

function fmtCh(mhz: number) {
  if (mhz < 2) return String(Math.round(mhz * 1000));
  return String(Number(mhz.toFixed(3)));
}

function ch(
  bank: ScanChannel["bank"],
  mhz: number,
  demod: DemodMode,
  call: string,
  service: string,
  extra?: Partial<ScanChannel>,
): ScanChannel {
  const wfm = demod === "WFM";
  const hz = Math.round(mhz * 1e6);
  const idMhz = Number(mhz.toFixed(4));
  return {
    id: `${bank}-${idMhz}`,
    bank,
    hz,
    demod,
    spanHz: wfm ? 2_048_000 : 400_000,
    label: `${call} ${fmtCh(mhz)}`,
    call,
    service,
    lockSnr: wfm ? 14 : demod === "AM" ? 10 : 10,
    squelch: wfm ? 0.04 : demod === "AM" ? 0.1 : 0.12,
    dwellMs: wfm ? 900 : 1200,
    ...extra,
  };
}

/**
 * Analog listen-only banks for Penrose / Fremont County, Colorado.
 * Open carriers the HackRF can demod (WFM / NFM / AM). No P25 DTRS, no ATSC, no encrypted TGs.
 * HackRF One floor is 1 MHz — MW below that is omitted (needs an upconverter).
 */
export const SCAN_CHANNELS: ScanChannel[] = [
  // NOAA — KJY81 Twin Mountain is the Fremont primary
  ch("noaa", 162.5, "NFM", "KJY81", "NWS Twin Mountain", { lockSnr: 12, dwellMs: 800 }),
  ch("noaa", 162.55, "NFM", "KEC76", "NWS Pueblo", { lockSnr: 12, dwellMs: 800 }),
  ch("noaa", 162.475, "NFM", "WXM54", "NWS Colorado Springs", { lockSnr: 12, dwellMs: 800 }),
  ch("noaa", 162.4, "NFM", "WX", "NOAA 162.400", { lockSnr: 12, dwellMs: 800 }),
  ch("noaa", 162.425, "NFM", "WX", "NOAA 162.425", { lockSnr: 12, dwellMs: 800 }),
  ch("noaa", 162.45, "NFM", "WX", "NOAA 162.450", { lockSnr: 12, dwellMs: 800 }),
  ch("noaa", 162.525, "NFM", "WX", "NOAA 162.525", { lockSnr: 12, dwellMs: 800 }),

  // FM broadcast — Canon City / Front Range that actually lights Penrose
  ch("fm", 104.5, "WFM", "KSTY", "Canon City country"),
  ch("fm", 89.1, "WFM", "KTLC", "Canon City"),
  ch("fm", 88.7, "WFM", "KCME", "Colorado Springs classical"),
  ch("fm", 91.1, "WFM", "KCME", "KCME translator"),
  ch("fm", 91.5, "WFM", "KRCC", "Colorado College"),
  ch("fm", 92.9, "WFM", "KKPK", "Colorado Springs"),
  ch("fm", 94.3, "WFM", "KILO", "Colorado Springs rock"),
  ch("fm", 95.1, "WFM", "KATC", "Pueblo"),
  ch("fm", 96.1, "WFM", "KIBT", "Colorado Springs"),
  ch("fm", 96.9, "WFM", "KCCY", "Pueblo"),
  ch("fm", 98.1, "WFM", "KKFM", "Colorado Springs"),
  ch("fm", 98.9, "WFM", "KKMG", "Colorado Springs"),
  ch("fm", 99.9, "WFM", "KVUU", "Colorado Springs"),
  ch("fm", 102.7, "WFM", "KBIQ", "Colorado Springs"),
  ch("fm", 103.9, "WFM", "KRXP", "Pueblo"),
  ch("fm", 106.3, "WFM", "KKLI", "Colorado Springs"),
  ch("fm", 107.3, "WFM", "FM", "107.3 Front Range"),
  ch("fm", 107.9, "WFM", "KBPL", "Pueblo"),

  // Fire / EMS analog VHF — Fremont corridor. County DTRS is P25: not listed.
  ch("fire", 154.31, "NFM", "CC Fire", "Canon City Fire", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 155.88, "NFM", "Penrose", "Florence / Penrose pagers", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 154.01, "NFM", "Cotopaxi", "Cotopaxi Fire", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 154.235, "NFM", "Deer Mtn", "Deer Mountain Fire", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 154.4, "NFM", "Florence", "Florence Fire / PD analog", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 154.37, "NFM", "Tallahassee", "Tallahassee Fire", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 154.43, "NFM", "Fire tac", "VHF fire tac", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 154.57, "NFM", "Fire tac", "VHF fire tac 2", { lockSnr: 10, dwellMs: 1400 }),
  ch("fire", 155.28, "NFM", "EMS tac", "EMS / fire tac", { lockSnr: 10, dwellMs: 1400 }),

  // Law analog — Fremont SO 154.845 PL 123.0 is the open analog. 800 MHz DTRS omitted.
  ch("law", 154.845, "NFM", "Sheriff", "Fremont County Sheriff analog", { lockSnr: 10, dwellMs: 1400 }),

  ch("svc", 155.76, "NFM", "Canon City", "City services", { lockSnr: 10, dwellMs: 1400 }),
  ch("svc", 155.955, "NFM", "PubWorks", "Public works", { lockSnr: 10, dwellMs: 1400 }),

  // Union Pacific Royal Gorge / Tennessee Pass analog
  ch("rail", 161.49, "NFM", "UP road", "UP Royal Gorge road", { lockSnr: 10, dwellMs: 1300 }),
  ch("rail", 161.115, "NFM", "UP", "UP dispatcher", { lockSnr: 10, dwellMs: 1300 }),
  ch("rail", 160.425, "NFM", "UP", "UP analog", { lockSnr: 10, dwellMs: 1300 }),
  ch("rail", 452.9, "NFM", "UP UHF", "UP 452.900", { lockSnr: 10, dwellMs: 1300 }),

  // Fremont County Airport 1V6 + Front Range approach / guard
  ch("air", 122.8, "AM", "1V6 CTAF", "Canon City / Fremont UNICOM", { lockSnr: 8, dwellMs: 1400, squelch: 0.08 }),
  ch("air", 120.025, "AM", "1V6 AWOS", "Fremont County AWOS", { lockSnr: 8, dwellMs: 1400, squelch: 0.08 }),
  ch("air", 128.375, "AM", "Approach", "Colorado Springs approach", { lockSnr: 8, dwellMs: 1400, squelch: 0.08 }),
  ch("air", 121.5, "AM", "Guard", "121.5 emergency", { lockSnr: 8, dwellMs: 1400, squelch: 0.08 }),

  ch("ham", 146.52, "NFM", "2m", "2m FM calling", { lockSnr: 10, dwellMs: 1100 }),
  ch("ham", 446.0, "NFM", "70cm", "70cm FM calling", { lockSnr: 10, dwellMs: 1100 }),
  ch("ham", 52.525, "NFM", "6m", "6m FM calling", { lockSnr: 10, dwellMs: 1100 }),

  ch("gmrs", 462.675, "NFM", "GMRS 20", "GMRS ch 20 / 550", { lockSnr: 10, dwellMs: 1100 }),
  ch("gmrs", 151.82, "NFM", "MURS 1", "MURS 151.820", { lockSnr: 10, dwellMs: 1100 }),
  ch("gmrs", 151.88, "NFM", "MURS 2", "MURS 151.880", { lockSnr: 10, dwellMs: 1100 }),
  ch("gmrs", 151.94, "NFM", "MURS 3", "MURS 151.940", { lockSnr: 10, dwellMs: 1100 }),
  ch("gmrs", 154.6, "NFM", "MURS 5", "MURS 154.600", { lockSnr: 10, dwellMs: 1100 }),

  ch("marine", 156.8, "NFM", "Ch 16", "VHF marine distress", { lockSnr: 10, dwellMs: 1100 }),

  ch("cb", 27.185, "AM", "CB 19", "CB channel 19", { lockSnr: 8, dwellMs: 1200 }),

  // AM ≥ 1 MHz only (HackRF floor). 590/740/970 omitted.
  ch("am", 1.4, "AM", "KRLN", "Canon City 1400 (may be dark)", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.24, "AM", "KRDO", "Colorado Springs 1240", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.23, "AM", "AM", "1230 kHz", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.3, "AM", "AM", "1300 kHz", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.35, "AM", "KUBE", "Pueblo 1350", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.46, "AM", "AM", "1460 kHz", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.48, "AM", "AM", "1480 kHz", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.49, "AM", "KDZA", "Pueblo 1490", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.53, "AM", "AM", "1530 kHz", { lockSnr: 10, dwellMs: 1100 }),
  ch("am", 1.58, "AM", "AM", "1580 kHz", { lockSnr: 10, dwellMs: 1100 }),
];

export function channelsFor(bank: ScanBankId): ScanChannel[] {
  if (bank === "all") return SCAN_CHANNELS;
  return SCAN_CHANNELS.filter((c) => c.bank === bank);
}

export function scanChannelAt(bank: ScanBankId, index: number): ScanChannel | undefined {
  const list = channelsFor(bank);
  if (!list.length) return undefined;
  const i = ((index % list.length) + list.length) % list.length;
  return list[i];
}

export function nextScanIndex(bank: ScanBankId, index: number, dir = 1): number {
  const n = channelsFor(bank).length;
  if (n <= 0) return 0;
  return (((index + dir) % n) + n) % n;
}

export function bankOf(id: string): ScanBankId {
  const hit = SCAN_BANKS.find((b) => b.id === id || b.label.toLowerCase() === id.toLowerCase());
  return hit?.id ?? "all";
}

export function applyChannelToSdr(sdr: SdrConfig, ch: ScanChannel): SdrConfig {
  const waterfallMode: WaterfallMode = ch.spanHz >= 1.5e6 ? "SWEEP" : ch.spanHz >= 250e3 ? "NARROW" : "SCOPE";
  return {
    ...sdr,
    centerHz: ch.hz,
    demod: ch.demod,
    spanHz: ch.spanHz,
    waterfallMode,
    squelch: ch.squelch,
    preset: `scan:${ch.id}`,
    paused: false,
  };
}

export function scanShouldLock(
  ch: ScanChannel,
  stats: { snrDb: number; peakHz: number; noiseFloorDbm: number },
  bins: Float32Array,
  sdr: { centerHz: number; spanHz: number },
  usbMuted: boolean,
  liveUsb: boolean,
): boolean {
  const n = bins.length;
  if (n < 2) return false;
  const lo = sdr.centerHz - sdr.spanHz / 2;
  const binHz = sdr.spanHz / (n - 1);
  const i = Math.round((ch.hz - lo) / binHz);
  if (i < 0 || i >= n) return false;
  const half = ch.demod === "WFM" ? Math.max(1, Math.round(80_000 / binHz)) : 1;
  let peak = -200;
  const a = Math.max(0, i - half);
  const b = Math.min(n - 1, i + half);
  for (let k = a; k <= b; k++) {
    if (bins[k] > peak) peak = bins[k];
  }
  const snr = peak - stats.noiseFloorDbm;
  if (liveUsb) return !usbMuted && snr >= ch.lockSnr;
  return snr >= ch.lockSnr;
}

export function formatScanMhz(hz: number) {
  if (hz >= 2e6) return (hz / 1e6).toFixed(3);
  return (hz / 1e3).toFixed(0);
}

export const SCAN_LEGAL =
  "Listen-only analog · Penrose / Fremont County. Open carriers the HackRF can demod. No P25 DTRS, no ATSC digital TV, no encrypted talkgroups. Floor 1 MHz — MW below that needs an upconverter.";
