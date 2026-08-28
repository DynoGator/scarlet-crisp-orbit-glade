export type ViewId = "ops" | "sdr" | "swarm" | "metro" | "link";

export type LinkMode = "simulated" | "live";

export type SdrDevice = "pluto_iio" | "libresdr" | "hackrf1";

export type WaterfallMode = "SWEEP" | "NARROW" | "SCOPE";

export type DemodMode = "WFM" | "NFM" | "AM" | "USB" | "LSB" | "CW" | "RAW";

export type BaselineState = "NOT_STARTED" | "LEARNING" | "LOCKED";

export type HalMode = "HARDWARE" | "SIMULATOR" | "OFFLINE";

export type CommandState =
  | "REQUESTED"
  | "AUTHENTICATED"
  | "ACCEPTED"
  | "EXECUTING"
  | "COMPLETED"
  | "FAILED"
  | "UNAUTHORIZED";

export type PaletteId = 0 | 1 | 2;

export type UsbKind = "hackrf" | "pluto" | "libresdr" | "unknown" | "none";

export interface SdrConfig {
  device: SdrDevice;
  centerHz: number;
  spanHz: number;
  sampleRateHz: number;
  waterfallMode: WaterfallMode;
  demod: DemodMode;
  lnaGain: number;
  vgaGain: number;
  floorDbm: number;
  ceilDbm: number;
  palette: PaletteId;
  audio: boolean;
  paused: boolean;
  preset: string;
}

export interface NodeHealth {
  id: string;
  role: string;
  platform: string;
  online: boolean;
  latencyMs: number | null;
  detail: string;
}

export interface PixelSensors {
  available: boolean;
  magUt: [number, number, number];
  magAbs: number;
  headingDeg: number;
  lat: number | null;
  lon: number | null;
  alt: number | null;
  accM: number | null;
  baroHpa: number | null;
  cameraHash: string;
  accMs2: [number, number, number];
  gyroRads: [number, number, number];
  lightLux: number | null;
  tempC: number | null;
  trustScore: number;
  hardwareTier: 2;
}

export interface UsbDeviceInfo {
  deviceId: number;
  vid: string;
  pid: string;
  kind: UsbKind;
  name: string;
  hasPermission?: boolean;
}

export interface UsbState {
  available: boolean;
  devices: UsbDeviceInfo[];
  open: boolean;
  kind: UsbKind;
  rx: boolean;
  version: string;
  board: string;
  error: string;
  source: "usb" | "sim" | "none";
  sampleRateHz: number;
  pending: boolean;
  iio: boolean;
}

export interface PipelineNative {
  running: boolean;
  hardwareTier: 2;
  clockSource: "internal";
  route: string;
  primaryWritten: number;
  secondaryWritten: number;
  integrityFailed: number;
  lastFile: string;
  chainHead: string;
  genesis: string;
  hmacReady: boolean;
  lastSha256: string;
  lastHmac: string;
  fileVersion: string;
  buffered: number;
}

export interface Telemetry {
  t: number;
  hostname: string;
  piIp: string;
  cpuPct: number;
  ramPct: number;
  cpuTemp: number;
  uptimeS: number;
  pipelineActive: boolean;
  halMode: HalMode;
  baseline: BaselineState;
  baselineHours: number;
  timingHealthy: boolean;
  gpsLock: boolean;
  ppsJitterNs: number;
  chronyOffsetUs: number;
  chronyStratum: number;
  rLocal: number;
  rSmooth: number;
  rGlobal: number;
  phases: number[];
  peakDbm: number;
  peakHz: number;
  noiseFloorDbm: number;
  snrDb: number;
  anomalyBins: number;
  primaryWritten: number;
  secondaryWritten: number;
  integrityFailed: number;
  ingestHz: number;
  kp: number;
  sfi: number;
  auroraPct: number;
  storm: string;
  radonPci: number;
  upsHealth: "healthy" | "degraded" | "critical" | "absent";
  upsPct: number;
  upsVolt: number;
  acPresent: boolean;
  nodes: NodeHealth[];
  pixel: PixelSensors;
  lastEvent: string;
}

export interface CommandRecord {
  commandId: string;
  capability: string;
  state: CommandState;
  issuedAt: string;
  parameters: Record<string, unknown>;
  result: string;
}

export interface CaptureEvent {
  id: string;
  ts: string;
  centerHz: number;
  peakDbm: number;
  peakHz: number;
  rGlobal: number;
  snrDb: number;
  note: string;
}

export const BINS = 192;
export const HISTORY = 72;

export const GENESIS_SHA256 =
  "89129408c9090ce97207b3f27690f0628fee4c53d3d603799ebb3dd3d4fc0108";

export const PRESETS: {
  id: string;
  label: string;
  hz: number;
  demod: DemodMode;
  span: number;
}[] = [
  { id: "fm_broadcast", label: "FM Broadcast", hz: 98_100_000, demod: "WFM", span: 20_000_000 },
  { id: "airband", label: "VHF Airband", hz: 120_000_000, demod: "AM", span: 5_000_000 },
  { id: "marine", label: "Marine VHF", hz: 156_800_000, demod: "NFM", span: 5_000_000 },
  { id: "weather", label: "NOAA Wx", hz: 162_400_000, demod: "NFM", span: 2_000_000 },
  { id: "adsb", label: "ADS-B", hz: 1_090_000_000, demod: "RAW", span: 5_000_000 },
  { id: "am_broadcast", label: "AM Broadcast", hz: 1_000_000, demod: "AM", span: 2_000_000 },
];

export const SPAN_FOR_MODE: Record<WaterfallMode, number> = {
  SWEEP: 20_000_000,
  NARROW: 5_000_000,
  SCOPE: 2_000_000,
};

export const LNA_STEPS = [0, 8, 16, 24, 32, 40];
export const VGA_STEPS = [0, 8, 16, 24, 32, 40, 48, 56, 62];

export const DEFAULT_SDR: SdrConfig = {
  device: "pluto_iio",
  centerHz: 98_100_000,
  spanHz: 20_000_000,
  sampleRateHz: 2_048_000,
  waterfallMode: "SWEEP",
  demod: "WFM",
  lnaGain: 24,
  vgaGain: 32,
  floorDbm: -102,
  ceilDbm: -28,
  palette: 0,
  audio: false,
  paused: false,
  preset: "fm_broadcast",
};

export const DEFAULT_USB: UsbState = {
  available: false,
  devices: [],
  open: false,
  kind: "none",
  rx: false,
  version: "",
  board: "",
  error: "",
  source: "sim",
  sampleRateHz: 2_048_000,
  pending: false,
  iio: false,
};

export const DEFAULT_PIPE: PipelineNative = {
  running: false,
  hardwareTier: 2,
  clockSource: "internal",
  route: "LOCAL_PRIMARY",
  primaryWritten: 0,
  secondaryWritten: 0,
  integrityFailed: 0,
  lastFile: "",
  chainHead: GENESIS_SHA256,
  genesis: GENESIS_SHA256,
  hmacReady: false,
  lastSha256: "",
  lastHmac: "",
  fileVersion: "3.3",
  buffered: 0,
};

export const DEVICE_LABEL: Record<SdrDevice, string> = {
  pluto_iio: "PlutoSDR+ AD9363",
  libresdr: "LibreSDR / HamGeek",
  hackrf1: "HackRF One",
};
