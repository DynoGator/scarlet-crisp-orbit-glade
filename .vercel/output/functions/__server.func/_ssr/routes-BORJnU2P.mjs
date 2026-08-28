import { i as __toESM } from "../_runtime.mjs";
import { a as nativeHost, i as isNativeApk, n as APK_HREF, o as nativeJson, r as RELEASE, s as nativeRequest, t as AAB_HREF } from "./native-YXUqJOpZ.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Gauge, i as LayoutGrid, o as Cable, r as Radio, t as Waypoints } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BORJnU2P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1",
				y: "1",
				width: "30",
				height: "30",
				rx: "6",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "16",
				r: "2.2",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 6.5 A9.5 9.5 0 0 1 25.5 16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 9.2 A6.8 6.8 0 0 1 22.8 16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				opacity: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 25.5 A9.5 9.5 0 0 1 6.5 16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinecap: "round",
				opacity: "0.55"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function formatMhz(hz, digits = 3) {
	return `${(hz / 1e6).toFixed(digits)}`;
}
function formatHz(hz) {
	if (hz >= 1e9) return `${(hz / 1e9).toFixed(3)} GHz`;
	if (hz >= 1e6) return `${(hz / 1e6).toFixed(3)} MHz`;
	if (hz >= 1e3) return `${(hz / 1e3).toFixed(1)} kHz`;
	return `${hz.toFixed(0)} Hz`;
}
function formatNs(ns) {
	if (ns >= 1e3) return `${(ns / 1e3).toFixed(2)} µs`;
	return `${ns.toFixed(1)} ns`;
}
function pad2(n) {
	return n.toString().padStart(2, "0");
}
function utcStamp(ms = Date.now()) {
	const d = new Date(ms);
	return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())} ${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}:${pad2(d.getUTCSeconds())}.${Math.floor(d.getUTCMilliseconds() / 10).toString().padStart(2, "0")}Z`;
}
function shortHash(s, n = 12) {
	return s.slice(0, n);
}
function Panel({ title, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl bg-card p-4 shadow-[var(--shadow-border)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-3 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: title
			}), action]
		}), children]
	});
}
function Row({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-mono text-sm tabular-nums", tone === "ok" ? "text-ok" : tone === "warn" ? "text-warn" : tone === "danger" ? "text-danger" : tone === "primary" ? "text-primary" : "text-foreground"),
			children: value
		})]
	});
}
function Pill({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-full px-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-wide", tone === "ok" ? "text-ok bg-ok/10" : tone === "warn" ? "text-warn bg-warn/10" : tone === "danger" ? "text-danger bg-danger/10" : tone === "primary" ? "text-primary bg-primary/10" : "text-muted bg-elevated"),
		children
	});
}
function Metric({ label, value, unit, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-elevated px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mt-1 font-mono text-xl font-medium tabular-nums leading-none", tone === "ok" ? "text-ok" : tone === "warn" ? "text-warn" : tone === "danger" ? "text-danger" : tone === "primary" ? "text-primary" : "text-foreground"),
			children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-xs font-normal text-muted",
				children: unit
			}) : null]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-11 px-4", {
	variants: {
		variant: {
			default: "bg-accent text-accent-foreground",
			primary: "bg-primary text-primary-foreground",
			outline: "bg-transparent text-foreground shadow-[var(--shadow-border)]",
			ghost: "bg-transparent text-muted hover:text-foreground hover:bg-elevated",
			danger: "bg-danger/15 text-danger"
		},
		size: {
			default: "h-11",
			sm: "h-9 min-h-9 px-3 text-xs",
			icon: "size-11 p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var PROTOCOL = "dslv-zpdi-c2/1";
var ISSUER = "pixel-9-pro-xl";
var TARGET = "alpha-pi-tier1";
function uuidv4() {
	const b = /* @__PURE__ */ new Uint8Array(16);
	crypto.getRandomValues(b);
	b[6] = b[6] & 15 | 64;
	b[8] = b[8] & 63 | 128;
	const h = Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
	return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}
function nonce() {
	const b = /* @__PURE__ */ new Uint8Array(16);
	crypto.getRandomValues(b);
	let s = "";
	for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
	return btoa(s);
}
function makeEnvelope(capability, parameters) {
	const now = /* @__PURE__ */ new Date();
	const exp = new Date(now.getTime() + 6e4);
	return {
		protocol: PROTOCOL,
		command_id: uuidv4(),
		idempotency_key: uuidv4(),
		issuer_node_id: ISSUER,
		target_node_id: TARGET,
		capability,
		issued_at: now.toISOString().replace(/\.\d{3}Z$/, "Z"),
		expires_at: exp.toISOString().replace(/\.\d{3}Z$/, "Z"),
		nonce: nonce(),
		parameters
	};
}
function toRecord(envelope, state, result) {
	return {
		commandId: envelope.command_id,
		capability: envelope.capability,
		state,
		issuedAt: envelope.issued_at,
		parameters: envelope.parameters,
		result
	};
}
var GENESIS_SHA256 = "89129408c9090ce97207b3f27690f0628fee4c53d3d603799ebb3dd3d4fc0108";
var PRESETS = [
	{
		id: "fm_broadcast",
		label: "FM Broadcast",
		hz: 981e5,
		demod: "WFM",
		span: 2e7
	},
	{
		id: "airband",
		label: "VHF Airband",
		hz: 12e7,
		demod: "AM",
		span: 5e6
	},
	{
		id: "marine",
		label: "Marine VHF",
		hz: 1568e5,
		demod: "NFM",
		span: 5e6
	},
	{
		id: "weather",
		label: "NOAA Wx",
		hz: 1624e5,
		demod: "NFM",
		span: 2e6
	},
	{
		id: "adsb",
		label: "ADS-B",
		hz: 109e7,
		demod: "RAW",
		span: 5e6
	},
	{
		id: "am_broadcast",
		label: "AM Broadcast",
		hz: 1e6,
		demod: "AM",
		span: 2e6
	}
];
var SPAN_FOR_MODE = {
	SWEEP: 2e7,
	NARROW: 5e6,
	SCOPE: 2e6
};
var LNA_STEPS = [
	0,
	8,
	16,
	24,
	32,
	40
];
var VGA_STEPS = [
	0,
	8,
	16,
	24,
	32,
	40,
	48,
	56,
	62
];
var DEFAULT_SDR = {
	device: "pluto_iio",
	centerHz: 981e5,
	spanHz: 2e7,
	sampleRateHz: 2048e3,
	waterfallMode: "SWEEP",
	demod: "WFM",
	lnaGain: 24,
	vgaGain: 32,
	floorDbm: -102,
	ceilDbm: -28,
	palette: 0,
	audio: false,
	paused: false,
	preset: "fm_broadcast"
};
var DEFAULT_USB = {
	available: false,
	devices: [],
	open: false,
	kind: "none",
	rx: false,
	version: "",
	board: "",
	error: "",
	source: "sim",
	sampleRateHz: 2048e3,
	pending: false,
	iio: false
};
var DEFAULT_PIPE = {
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
	buffered: 0
};
var DEVICE_LABEL = {
	pluto_iio: "PlutoSDR+ AD9363",
	libresdr: "LibreSDR / HamGeek",
	hackrf1: "HackRF One"
};
function hash32(n) {
	let x = n | 0;
	x ^= x << 13;
	x ^= x >>> 17;
	x ^= x << 5;
	return (x >>> 0) / 4294967296;
}
function noise(t, seed) {
	const a = hash32(Math.floor(t * 17 + seed * 91));
	const b = hash32(Math.floor(t * 17 + seed * 91) + 1);
	const f = t * 17 % 1;
	return a * (1 - f) + b * f - .5;
}
/** Front Range + Fremont corridor emitters the Alpha Pluto actually hears. */
var FIELD_CARRIERS = [
	{
		freq: 881e5,
		bw: 22e4,
		amp: 22,
		drift: 18
	},
	{
		freq: 889e5,
		bw: 24e4,
		amp: 34,
		drift: 40
	},
	{
		freq: 897e5,
		bw: 2e5,
		amp: 18,
		drift: -12
	},
	{
		freq: 915e5,
		bw: 22e4,
		amp: 26,
		drift: 8
	},
	{
		freq: 929e5,
		bw: 26e4,
		amp: 38,
		drift: -16
	},
	{
		freq: 943e5,
		bw: 28e4,
		amp: 44,
		drift: 10
	},
	{
		freq: 951e5,
		bw: 24e4,
		amp: 31,
		drift: 22
	},
	{
		freq: 961e5,
		bw: 22e4,
		amp: 24,
		drift: -8
	},
	{
		freq: 969e5,
		bw: 26e4,
		amp: 36,
		drift: 14
	},
	{
		freq: 977e5,
		bw: 2e5,
		amp: 21,
		drift: 6
	},
	{
		freq: 981e5,
		bw: 3e5,
		amp: 48,
		drift: 12
	},
	{
		freq: 989e5,
		bw: 22e4,
		amp: 28,
		drift: -20
	},
	{
		freq: 999e5,
		bw: 28e4,
		amp: 41,
		drift: 9
	},
	{
		freq: 1015e5,
		bw: 26e4,
		amp: 33,
		drift: -22
	},
	{
		freq: 1027e5,
		bw: 24e4,
		amp: 29,
		drift: 15
	},
	{
		freq: 1039e5,
		bw: 22e4,
		amp: 23,
		drift: -11
	},
	{
		freq: 1045e5,
		bw: 26e4,
		amp: 35,
		drift: 7
	},
	{
		freq: 1055e5,
		bw: 24e4,
		amp: 30,
		drift: -14
	},
	{
		freq: 1063e5,
		bw: 26e4,
		amp: 32,
		drift: 19
	},
	{
		freq: 1073e5,
		bw: 22e4,
		amp: 20,
		drift: -6
	},
	{
		freq: 1187e5,
		bw: 18e3,
		amp: 16,
		drift: 40
	},
	{
		freq: 12015e4,
		bw: 16e3,
		amp: 22,
		drift: 80
	},
	{
		freq: 1219e5,
		bw: 14e3,
		amp: 14,
		drift: -30
	},
	{
		freq: 1568e5,
		bw: 2e4,
		amp: 26,
		drift: 8
	},
	{
		freq: 1571e5,
		bw: 16e3,
		amp: 15,
		drift: 4
	},
	{
		freq: 1624e5,
		bw: 22e3,
		amp: 38,
		drift: 3
	},
	{
		freq: 162475e3,
		bw: 22e3,
		amp: 28,
		drift: -4
	},
	{
		freq: 16255e4,
		bw: 22e3,
		amp: 24,
		drift: -6
	},
	{
		freq: 109e7,
		bw: 12e4,
		amp: 28,
		drift: 0
	},
	{
		freq: 1e6,
		bw: 18e3,
		amp: 20,
		drift: 2
	}
];
function generateSpectrum(sdr, t, out) {
	const lo = sdr.centerHz - sdr.spanHz / 2;
	const gainBoost = sdr.lnaGain / 40 * 10 + sdr.vgaGain / 62 * 7;
	const floor = -92 + (40 - sdr.lnaGain) * .16 + noise(t, 3) * 1.1;
	const binHz = sdr.spanHz / Math.max(1, 191);
	for (let i = 0; i < 192; i++) {
		const f = lo + i * binHz;
		let p = floor + (hash32(i * 997 + Math.floor(t * 40)) - .5) * 5.4 + noise(t + i * .01, 9) * 1.8;
		for (let c = 0; c < FIELD_CARRIERS.length; c++) {
			const car = FIELD_CARRIERS[c];
			const freq = car.freq + Math.sin(t * .15 + c) * car.drift;
			const visBw = Math.max(car.bw, binHz * 2.4);
			const df = (f - freq) / visBw;
			const fade = .82 + .18 * Math.sin(t * (.7 + c * .03) + c);
			p += (car.amp + gainBoost * .4) * fade * Math.exp(-.5 * df * df);
		}
		const hdf = (f - (981e5 + Math.sin(t * .55) * 6e6)) / Math.max(5e4, binHz * 1.6);
		p += 18 * Math.exp(-.5 * hdf * hdf) * (.5 + .5 * Math.sin(t * 2.3));
		const dc = (f - sdr.centerHz) / Math.max(12e3, binHz);
		p += (7 + gainBoost * .15) * Math.exp(-.5 * dc * dc);
		out[i] = p;
	}
}
function spectrumStats(bins, sdr) {
	const lo = sdr.centerHz - sdr.spanHz / 2;
	let peak = -200;
	let peakI = 0;
	const sorted = Array.from(bins).sort((a, b) => a - b);
	const floor = sorted[Math.floor(sorted.length * .5)] ?? -90;
	let anomalies = 0;
	for (let i = 0; i < bins.length; i++) {
		const v = bins[i];
		if (v > peak) {
			peak = v;
			peakI = i;
		}
		if (v > floor + 10) anomalies += 1;
	}
	const peakHz = lo + peakI / (bins.length - 1) * sdr.spanHz;
	return {
		peakDbm: peak,
		peakHz,
		noiseFloorDbm: floor,
		snrDb: peak - floor,
		anomalyBins: anomalies
	};
}
function tickTelemetry(prev, sdr, stats, dt, liveOverride) {
	const t = prev.t + dt;
	const lock = prev.halMode !== "OFFLINE";
	const gps = lock;
	const jitter = gps ? 48 + noise(t, 11) * 36 + Math.abs(Math.sin(t * .2)) * 22 : 4200;
	const rTarget = lock ? .86 + noise(t, 7) * .08 + (stats.snrDb > 25 ? .04 : 0) : .18;
	const rGlobal = clamp(prev.rGlobal + (rTarget - prev.rGlobal) * .12, .05, .99);
	const rLocal = clamp(rGlobal + noise(t, 19) * .04, .05, .99);
	const rSmooth = clamp(prev.rSmooth + (rGlobal - prev.rSmooth) * .06, .05, .99);
	const phases = prev.phases.map((p, i) => p + dt * (.7 + i * .11) * (.4 + rGlobal));
	const cpu = clamp(18 + sdr.lnaGain * .35 + stats.anomalyBins * .08 + noise(t, 4) * 8, 6, 96);
	const ram = clamp(41 + noise(t, 5) * 4, 28, 88);
	const temp = clamp(46 + cpu * .18 + noise(t, 6) * 1.4, 38, 82);
	const ingest = sdr.paused ? 0 : 9.4 + noise(t, 8) * 1.2;
	const writes = sdr.paused ? 0 : Math.max(0, ingest * dt);
	const magX = 12.4 + Math.sin(t * .31) * 1.6 + noise(t, 21) * .8;
	const magY = -38.2 + Math.cos(t * .27) * 1.1 + noise(t, 22) * .7;
	const magZ = 31.6 + Math.sin(t * .19) * .9 + noise(t, 23) * .6;
	const magAbs = Math.hypot(magX, magY, magZ);
	const heading = Math.atan2(magY, magX) * 180 / Math.PI;
	const radon = clamp(9.4 + Math.sin(t * .04) * 1.8 + noise(t, 31) * .6, 4.2, 16);
	const kp = clamp(2.8 + Math.sin(t * .01) * 1.4 + noise(t, 41) * .5, 0, 8);
	const next = {
		...prev,
		t,
		cpuPct: cpu,
		ramPct: ram,
		cpuTemp: temp,
		uptimeS: prev.uptimeS + dt,
		pipelineActive: !sdr.paused && prev.halMode !== "OFFLINE",
		timingHealthy: jitter < 500,
		gpsLock: gps,
		ppsJitterNs: Math.max(8, jitter),
		chronyOffsetUs: gps ? .62 + noise(t, 12) * .35 : 48,
		chronyStratum: gps ? 1 : 8,
		rLocal,
		rSmooth,
		rGlobal,
		phases,
		peakDbm: stats.peakDbm,
		peakHz: stats.peakHz,
		noiseFloorDbm: stats.noiseFloorDbm,
		snrDb: stats.snrDb,
		anomalyBins: stats.anomalyBins,
		primaryWritten: prev.baseline === "LOCKED" ? prev.primaryWritten + writes : prev.primaryWritten,
		secondaryWritten: prev.secondaryWritten + writes,
		ingestHz: ingest,
		kp,
		sfi: 142 + Math.sin(t * .008) * 8,
		auroraPct: clamp(kp * 9.5, 0, 90),
		storm: kp > 5 ? "G2 watch — Fremont corridor" : kp > 4 ? "Unsettled geomagnetic" : "Quiet",
		radonPci: radon,
		upsPct: clamp(96.4 - (prev.acPresent ? 0 : dt * .02) + noise(t, 51) * .2, 8, 100),
		upsVolt: 4.08 + noise(t, 52) * .04,
		lastEvent: stats.anomalyBins > 28 ? `RF excursion ${stats.anomalyBins} bins @ ${(stats.peakHz / 1e6).toFixed(3)} MHz` : prev.lastEvent,
		nodes: prev.nodes.map((n) => n.id === "alpha-pi-tier1" ? {
			...n,
			online: true,
			latencyMs: 4 + Math.abs(noise(t, 61)) * 10
		} : n.id === "pixel-9-pro-xl" ? {
			...n,
			online: true,
			latencyMs: 1
		} : n),
		pixel: prev.pixel.available ? prev.pixel : {
			...prev.pixel,
			magUt: [
				magX,
				magY,
				magZ
			],
			magAbs,
			headingDeg: (heading + 360) % 360,
			lat: 38.4286 + noise(t, 71) * 4e-4,
			lon: -105.227 + noise(t, 72) * 4e-4,
			alt: 1628 + noise(t, 73) * 3,
			accM: 4.8,
			baroHpa: 834.2 + Math.sin(t * .05) * .6
		}
	};
	if (liveOverride) Object.assign(next, liveOverride);
	return next;
}
function seedTelemetry() {
	return {
		t: 0,
		hostname: "alpha-pi",
		piIp: "10.42.0.1",
		cpuPct: 22,
		ramPct: 41,
		cpuTemp: 51,
		uptimeS: 62411,
		pipelineActive: true,
		halMode: "SIMULATOR",
		baseline: "LOCKED",
		baselineHours: 74.2,
		timingHealthy: true,
		gpsLock: true,
		ppsJitterNs: 86,
		chronyOffsetUs: .7,
		chronyStratum: 1,
		rLocal: .84,
		rSmooth: .86,
		rGlobal: .88,
		phases: Array.from({ length: 12 }, (_, i) => i / 12 * Math.PI * 2),
		peakDbm: -42,
		peakHz: 981e5,
		noiseFloorDbm: -91,
		snrDb: 49,
		anomalyBins: 6,
		primaryWritten: 184220,
		secondaryWritten: 211903,
		integrityFailed: 0,
		ingestHz: 9.6,
		kp: 3.1,
		sfi: 142,
		auroraPct: 28,
		storm: "Quiet",
		radonPci: 9.6,
		upsHealth: "healthy",
		upsPct: 97.2,
		upsVolt: 4.11,
		acPresent: true,
		lastEvent: "Baseline LOCKED — PRIMARY stream armed",
		nodes: [{
			id: "alpha-pi-tier1",
			role: "Tier-1 anchor",
			platform: "Pi 5 16GB · PlutoSDR+ · LBE-1421",
			online: true,
			latencyMs: 6,
			detail: "GPSDO 10 MHz + PPS GPIO8"
		}, {
			id: "pixel-9-pro-xl",
			role: "Tier-2 C2 / mobile",
			platform: "GrapheneOS · Termux · Debian proot",
			online: true,
			latencyMs: 1,
			detail: "This handset · USB SDR · HDF5 · C2 :8444"
		}],
		pixel: {
			available: false,
			magUt: [
				12.4,
				-38.2,
				31.6
			],
			magAbs: 51.2,
			headingDeg: 288,
			lat: 38.4286,
			lon: -105.227,
			alt: 1628,
			accM: 5,
			baroHpa: 834.1,
			cameraHash: "7c3e91a0b4d2",
			accMs2: [
				.12,
				.04,
				9.71
			],
			gyroRads: [
				.001,
				-.002,
				0
			],
			lightLux: 120,
			tempC: 31.4,
			trustScore: .72,
			hardwareTier: 2
		}
	};
}
var SETTINGS_KEY = "dslv-zpdi-mobile-v1";
function loadSettings() {
	try {
		const raw = localStorage.getItem(SETTINGS_KEY);
		if (!raw) throw new Error("empty");
		return {
			...defaultSettings(),
			...JSON.parse(raw)
		};
	} catch {
		return defaultSettings();
	}
}
function defaultSettings() {
	return {
		mode: "simulated",
		nodeUrl: "http://10.42.0.1:8080",
		c2Token: "",
		operatorUnlocked: false
	};
}
function saveSettings(s) {
	try {
		localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
	} catch {}
}
function command(capability, parameters, result) {
	const env = makeEnvelope(capability, parameters);
	const host = nativeHost();
	if (host?.c2) try {
		const r = JSON.parse(host.c2(JSON.stringify(env)));
		return toRecord(env, r.state ?? "COMPLETED", r.result ?? result);
	} catch {}
	return toRecord(env, "COMPLETED", result);
}
function pushUsbConfig(sdr) {
	const host = nativeHost();
	if (!host?.usbConfig) return;
	try {
		host.usbConfig(JSON.stringify({
			centerHz: sdr.centerHz,
			sampleRateHz: sdr.sampleRateHz,
			lnaGain: sdr.lnaGain,
			vgaGain: sdr.vgaGain
		}));
	} catch {}
}
function hintFor(device) {
	if (device === "hackrf1") return "hackrf";
	if (device === "libresdr") return "libresdr";
	return "pluto";
}
var lastTick = 0;
var liveTimer = 0;
var nativeTimer = 0;
var scratch = /* @__PURE__ */ new Float32Array(192);
async function liveGetJson(url, token) {
	if (isNativeApk()) {
		const r = nativeRequest("GET", url, "", token);
		if (!r.ok) throw new Error(r.error || `HTTP ${r.status}`);
		return r.data;
	}
	const headers = {};
	if (token) headers.Authorization = `Bearer ${token}`;
	const res = await fetch(url, {
		signal: AbortSignal.timeout(2500),
		headers
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return res.json();
}
async function pullLive(get, set) {
	const { nodeUrl, mode, c2Token } = get();
	if (mode !== "live") return;
	try {
		const d = await liveGetJson(`${nodeUrl.replace(/\/$/, "")}/api/status`, c2Token);
		const s = d.system ?? {};
		const p = d.pipeline ?? {};
		const sdr = d.sdr ?? {};
		const u = d.ups ?? {};
		const nodes = (d.nodes?.registered_nodes ?? []).map((n) => ({
			id: n.node_id,
			role: "enrolled",
			platform: "remote",
			online: n.online,
			latencyMs: n.probe_ms ?? null,
			detail: ""
		}));
		const tel = get().tel;
		set({
			liveOk: true,
			liveError: null,
			tel: {
				...tel,
				hostname: s.hostname ?? tel.hostname,
				piIp: s.pi_ip ?? tel.piIp,
				cpuPct: s.cpu_pct ?? tel.cpuPct,
				ramPct: s.ram_pct ?? tel.ramPct,
				cpuTemp: s.cpu_temp ?? tel.cpuTemp,
				pipelineActive: Boolean(p.active),
				timingHealthy: Boolean(p.timing_healthy ?? true),
				primaryWritten: p.primary_written ?? tel.primaryWritten,
				integrityFailed: p.integrity_failed ?? tel.integrityFailed,
				halMode: "HARDWARE",
				upsHealth: u.health ?? tel.upsHealth,
				upsPct: u.battery_percent ?? tel.upsPct,
				upsVolt: u.battery_voltage_v ?? tel.upsVolt,
				acPresent: u.ac_present ?? tel.acPresent,
				nodes: nodes.length ? nodes : tel.nodes
			},
			sdr: sdr.center_hz != null ? {
				...get().sdr,
				centerHz: sdr.center_hz,
				device: sdr.active_device ?? get().sdr.device
			} : get().sdr
		});
	} catch (err) {
		set({
			liveOk: false,
			liveError: err instanceof Error ? err.message : "link failed"
		});
	}
}
async function postLive(nodeUrl, path, body, token = "") {
	const url = `${nodeUrl.replace(/\/$/, "")}${path}`;
	if (isNativeApk()) {
		const r = nativeRequest("POST", url, JSON.stringify(body), token);
		if (!r.ok) throw new Error(r.error || `HTTP ${r.status}`);
		return;
	}
	await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...token ? { Authorization: `Bearer ${token}` } : {}
		},
		body: JSON.stringify(body),
		signal: AbortSignal.timeout(2500)
	});
}
function num3(v, fallback) {
	if (Array.isArray(v) && v.length >= 3) return [
		Number(v[0]) || 0,
		Number(v[1]) || 0,
		Number(v[2]) || 0
	];
	return [
		fallback,
		fallback,
		fallback
	];
}
function pullNative(get, set) {
	const host = nativeHost();
	if (!host) return;
	const spec = nativeJson(() => host.usbSpectrum?.());
	const sns = nativeJson(() => host.sensors?.());
	const st = nativeJson(() => host.usbScan?.());
	const pipe = nativeJson(() => host.pipeline?.("stats"));
	const usbStatus = st?.status ?? st ?? {};
	const devices = Array.isArray(st?.devices) ? st.devices : Array.isArray(usbStatus.devices) ? usbStatus.devices : get().usb.devices;
	const usb = {
		...get().usb,
		available: true,
		devices,
		open: Boolean(usbStatus.open ?? spec?.open),
		kind: usbStatus.kind ?? spec?.kind ?? get().usb.kind,
		rx: Boolean(spec?.rx ?? usbStatus.rx),
		version: String(usbStatus.version ?? get().usb.version ?? ""),
		board: String(usbStatus.board ?? get().usb.board ?? ""),
		error: String(usbStatus.error ?? ""),
		source: spec?.rx ? "usb" : get().usb.source,
		sampleRateHz: Number(spec?.sampleRateHz ?? usbStatus.sampleRateHz ?? get().usb.sampleRateHz),
		pending: Boolean(usbStatus.pending),
		iio: Boolean(usbStatus.iio)
	};
	const next = { usb };
	if (spec?.rx && Array.isArray(spec.bins) && spec.bins.length === 192) {
		for (let i = 0; i < 192; i++) scratch[i] = Number(spec.bins[i]) || -120;
		next.usb = {
			...usb,
			source: "usb"
		};
	}
	if (sns) {
		const mag = num3(sns.magUt, 0);
		const pixel = {
			...get().tel.pixel,
			available: Boolean(sns.available),
			magUt: mag,
			magAbs: Number(sns.magAbs) || Math.hypot(mag[0], mag[1], mag[2]),
			headingDeg: Number(sns.headingDeg) || 0,
			lat: sns.lat == null ? get().tel.pixel.lat : Number(sns.lat),
			lon: sns.lon == null ? get().tel.pixel.lon : Number(sns.lon),
			alt: sns.alt == null ? get().tel.pixel.alt : Number(sns.alt),
			accM: sns.accM == null ? get().tel.pixel.accM : Number(sns.accM),
			baroHpa: sns.baroHpa == null ? get().tel.pixel.baroHpa : Number(sns.baroHpa),
			cameraHash: String(sns.cameraHash ?? get().tel.pixel.cameraHash),
			accMs2: num3(sns.accMs2, 0),
			gyroRads: num3(sns.gyroRads, 0),
			lightLux: sns.lightLux == null ? get().tel.pixel.lightLux : Number(sns.lightLux),
			tempC: sns.tempC == null ? get().tel.pixel.tempC : Number(sns.tempC),
			trustScore: Number(sns.trustScore ?? get().tel.pixel.trustScore),
			hardwareTier: 2
		};
		next.tel = {
			...next.tel ?? get().tel,
			pixel
		};
	}
	if (pipe) next.pipe = {
		...get().pipe,
		running: Boolean(pipe.running),
		primaryWritten: Number(pipe.primaryWritten ?? 0),
		secondaryWritten: Number(pipe.secondaryWritten ?? 0),
		integrityFailed: Number(pipe.integrityFailed ?? 0),
		lastFile: String(pipe.lastFile ?? ""),
		chainHead: String(pipe.chainHead ?? get().pipe.chainHead),
		genesis: String(pipe.genesis ?? get().pipe.genesis),
		hmacReady: Boolean(pipe.hmacReady),
		lastSha256: String(pipe.lastSha256 ?? ""),
		lastHmac: String(pipe.lastHmac ?? ""),
		fileVersion: String(pipe.fileVersion ?? "3.3"),
		buffered: Number(pipe.buffered ?? 0),
		route: String(pipe.route ?? "LOCAL_PRIMARY"),
		hardwareTier: 2,
		clockSource: "internal"
	};
	set(next);
}
var useApp = create((set, get) => ({
	view: "ops",
	mode: "simulated",
	nodeUrl: "http://10.42.0.1:8080",
	c2Token: "",
	liveOk: false,
	liveError: null,
	operatorUnlocked: false,
	hydrated: false,
	sdr: { ...DEFAULT_SDR },
	tel: seedTelemetry(),
	bins: /* @__PURE__ */ new Float32Array(192),
	history: [],
	peakHold: (/* @__PURE__ */ new Float32Array(192)).fill(-120),
	commands: [],
	captures: [],
	usb: { ...DEFAULT_USB },
	pipe: { ...DEFAULT_PIPE },
	setView: (view) => set({ view }),
	hydrate: () => {
		if (get().hydrated) return;
		const s = loadSettings();
		set({
			...s,
			hydrated: true,
			tel: {
				...get().tel,
				halMode: s.mode === "live" ? "HARDWARE" : "SIMULATOR"
			}
		});
		if (isNativeApk()) get().usbScan();
	},
	tick: () => {
		const now = performance.now();
		const dt = lastTick ? clamp((now - lastTick) / 1e3, .05, .4) : .1;
		lastTick = now;
		const { sdr, tel, peakHold, history, mode } = get();
		if (sdr.paused) return;
		nativeTimer += dt;
		if (isNativeApk() && nativeTimer > .25) {
			nativeTimer = 0;
			pullNative(get, set);
		}
		const usbRx = get().usb.rx && get().usb.source === "usb";
		if (!usbRx) generateSpectrum(sdr, tel.t + dt, scratch);
		const stats = spectrumStats(scratch, sdr);
		const nextHold = /* @__PURE__ */ new Float32Array(192);
		for (let i = 0; i < 192; i++) nextHold[i] = Math.max(scratch[i], peakHold[i] * .98 + scratch[i] * .02);
		const row = Float32Array.from(scratch);
		const base = history.length < 72 ? [] : history;
		const seedNeeded = history.length < 72 && !usbRx;
		let histBase = history;
		if (seedNeeded) {
			const seedHist = [];
			for (let i = 71; i >= 0; i--) {
				const r = /* @__PURE__ */ new Float32Array(192);
				generateSpectrum(sdr, Math.max(0, tel.t - i * .1), r);
				seedHist.push(r);
			}
			histBase = seedHist;
		} else if (base.length) histBase = base;
		const nextHist = [row, ...histBase].slice(0, 72);
		const nextTel = tickTelemetry(tel, sdr, stats, dt);
		const pipe = get().pipe;
		if (pipe.running) {
			nextTel.primaryWritten = pipe.primaryWritten || nextTel.primaryWritten;
			nextTel.secondaryWritten = pipe.secondaryWritten || nextTel.secondaryWritten;
			nextTel.integrityFailed = pipe.integrityFailed;
			nextTel.pipelineActive = true;
		}
		if (get().usb.rx) {
			nextTel.halMode = "HARDWARE";
			nextTel.lastEvent = `USB ${get().usb.kind.toUpperCase()} RX · internal clock · SECONDARY`;
		}
		set({
			bins: Float32Array.from(scratch),
			peakHold: nextHold,
			history: nextHist,
			tel: nextTel
		});
		liveTimer += dt;
		if (mode === "live" && liveTimer > 2) {
			liveTimer = 0;
			pullLive(get, set);
		}
	},
	applyPreset: (id) => {
		const p = PRESETS.find((x) => x.id === id);
		if (!p) return;
		const sdr = {
			...get().sdr,
			preset: id,
			centerHz: p.hz,
			demod: p.demod,
			spanHz: p.span,
			waterfallMode: p.span >= 15e6 ? "SWEEP" : p.span >= 4e6 ? "NARROW" : "SCOPE"
		};
		set({
			sdr,
			history: [],
			peakHold: (/* @__PURE__ */ new Float32Array(192)).fill(-120),
			commands: [command("sdr.center_frequency.set", { hz: p.hz }, `preset ${id}`), ...get().commands].slice(0, 40)
		});
		pushUsbConfig(sdr);
		if (get().mode === "live") postLive(get().nodeUrl, "/api/sdr/preset", { preset: id }, get().c2Token);
	},
	setCenterHz: (hz) => {
		const v = clamp(Math.round(hz), 1e6, 6e9);
		const sdr = {
			...get().sdr,
			centerHz: v
		};
		set({
			sdr,
			history: [],
			peakHold: (/* @__PURE__ */ new Float32Array(192)).fill(-120),
			commands: [command("sdr.center_frequency.set", { hz: v }, `${(v / 1e6).toFixed(3)} MHz`), ...get().commands].slice(0, 40)
		});
		pushUsbConfig(sdr);
		if (get().mode === "live") postLive(get().nodeUrl, "/api/sdr/config", {
			center_hz: v,
			demod_mode: get().sdr.demod
		}, get().c2Token);
	},
	nudgeCenter: (frac) => {
		const { sdr } = get();
		get().setCenterHz(sdr.centerHz + sdr.spanHz * frac);
	},
	setSpanMode: (m) => {
		set({
			sdr: {
				...get().sdr,
				waterfallMode: m,
				spanHz: SPAN_FOR_MODE[m]
			},
			history: [],
			peakHold: (/* @__PURE__ */ new Float32Array(192)).fill(-120)
		});
	},
	zoom: (dir) => {
		const { sdr } = get();
		const spanHz = clamp(dir === 1 ? sdr.spanHz / 2 : sdr.spanHz * 2, 1e5, 5e8);
		const waterfallMode = spanHz >= 12e6 ? "SWEEP" : spanHz >= 3e6 ? "NARROW" : "SCOPE";
		set({
			sdr: {
				...sdr,
				spanHz,
				waterfallMode
			},
			history: [],
			peakHold: (/* @__PURE__ */ new Float32Array(192)).fill(-120)
		});
	},
	setGain: (which, db) => {
		const sdr = {
			...get().sdr,
			[which === "lna" ? "lnaGain" : "vgaGain"]: db
		};
		set({
			sdr,
			commands: [command("sdr.gain.set", {
				gain_db: db,
				stage: which
			}, `${which} ${db} dB`), ...get().commands].slice(0, 40)
		});
		pushUsbConfig(sdr);
	},
	setDemod: (demod) => {
		set({ sdr: {
			...get().sdr,
			demod
		} });
		if (get().mode === "live") postLive(get().nodeUrl, "/api/sdr/config", {
			demod_mode: demod,
			center_hz: get().sdr.centerHz
		}, get().c2Token);
	},
	setDevice: (device) => {
		set({
			sdr: {
				...get().sdr,
				device
			},
			commands: [command("sdr.mode.set", { device }, device), ...get().commands].slice(0, 40)
		});
		if (isNativeApk()) get().usbOpen(hintFor(device));
		if (get().mode === "live") postLive(get().nodeUrl, "/api/sdr/config", { active_device: device }, get().c2Token);
	},
	setFloorCeil: (floor, ceil) => {
		const s = get().sdr;
		const floorDbm = floor ?? s.floorDbm;
		const ceilDbm = ceil ?? s.ceilDbm;
		set({ sdr: {
			...s,
			floorDbm: Math.min(floorDbm, ceilDbm - 5),
			ceilDbm: Math.max(ceilDbm, floorDbm + 5)
		} });
	},
	cyclePalette: () => {
		const p = (get().sdr.palette + 1) % 3;
		set({ sdr: {
			...get().sdr,
			palette: p
		} });
	},
	toggleAudio: () => set({ sdr: {
		...get().sdr,
		audio: !get().sdr.audio
	} }),
	togglePause: () => set({ sdr: {
		...get().sdr,
		paused: !get().sdr.paused
	} }),
	setHalMode: (halMode) => {
		set({
			tel: {
				...get().tel,
				halMode
			},
			commands: [command("sdr.mode.set", { mode: halMode.toLowerCase() }, halMode), ...get().commands].slice(0, 40)
		});
	},
	setPipeline: (running) => {
		const host = nativeHost();
		if (host?.pipeline) try {
			host.pipeline(running ? "start" : "stop");
		} catch {}
		set({
			sdr: {
				...get().sdr,
				paused: !running
			},
			tel: {
				...get().tel,
				pipelineActive: running
			},
			pipe: {
				...get().pipe,
				running
			},
			commands: [command(running ? "pipeline.start" : "pipeline.stop", {}, running ? "started" : "stopped"), ...get().commands].slice(0, 40)
		});
	},
	resetBaseline: (hard) => {
		set({
			tel: {
				...get().tel,
				baseline: "LEARNING",
				baselineHours: 0,
				primaryWritten: hard ? 0 : get().tel.primaryWritten,
				lastEvent: hard ? "Hard baseline reset" : "Soft baseline reset"
			},
			commands: [command("baseline.reset", { mode: hard ? "hard" : "soft" }, "LEARNING"), ...get().commands].slice(0, 40)
		});
		if (get().mode === "live") postLive(get().nodeUrl, "/api/baseline/reset", { mode: hard ? "hard" : "soft" }, get().c2Token);
	},
	setMode: (mode) => {
		saveSettings({
			mode,
			nodeUrl: get().nodeUrl,
			c2Token: get().c2Token,
			operatorUnlocked: get().operatorUnlocked
		});
		set({
			mode,
			liveError: null,
			tel: {
				...get().tel,
				halMode: mode === "live" ? "HARDWARE" : "SIMULATOR"
			}
		});
		if (mode === "live") pullLive(get, set);
	},
	setNodeUrl: (nodeUrl) => {
		saveSettings({
			mode: get().mode,
			nodeUrl,
			c2Token: get().c2Token,
			operatorUnlocked: get().operatorUnlocked
		});
		set({ nodeUrl });
	},
	setToken: (c2Token) => {
		saveSettings({
			mode: get().mode,
			nodeUrl: get().nodeUrl,
			c2Token,
			operatorUnlocked: get().operatorUnlocked
		});
		set({ c2Token });
	},
	unlockOperator: (pin) => {
		const ok = pin === "1988";
		if (ok) {
			saveSettings({
				mode: get().mode,
				nodeUrl: get().nodeUrl,
				c2Token: get().c2Token,
				operatorUnlocked: true
			});
			set({ operatorUnlocked: true });
		}
		return ok;
	},
	capture: () => {
		const { tel, sdr } = get();
		const ev = {
			id: `${Date.now()}`,
			ts: (/* @__PURE__ */ new Date()).toISOString(),
			centerHz: sdr.centerHz,
			peakDbm: tel.peakDbm,
			peakHz: tel.peakHz,
			rGlobal: tel.rGlobal,
			snrDb: tel.snrDb,
			note: tel.lastEvent
		};
		const host = nativeHost();
		if (host?.ingest) try {
			host.ingest(JSON.stringify({
				...ev,
				hardware_tier: 2,
				modality: "capture"
			}));
		} catch {}
		if (host?.pipeline) try {
			host.pipeline("seal");
		} catch {}
		set({
			captures: [ev, ...get().captures].slice(0, 24),
			tel: {
				...tel,
				lastEvent: `Capture ${ev.id.slice(-6)} sealed`
			}
		});
	},
	applyPixelFix: (lat, lon, acc, alt) => {
		set({ tel: {
			...get().tel,
			pixel: {
				...get().tel.pixel,
				available: true,
				lat,
				lon,
				accM: acc,
				alt: alt ?? get().tel.pixel.alt
			}
		} });
	},
	applyMag: (x, y, z) => {
		const magAbs = Math.hypot(x, y, z);
		const headingDeg = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
		set({ tel: {
			...get().tel,
			pixel: {
				...get().tel.pixel,
				available: true,
				magUt: [
					x,
					y,
					z
				],
				magAbs,
				headingDeg
			}
		} });
	},
	usbScan: () => {
		if (!nativeHost()?.usbScan) return;
		pullNative(get, set);
	},
	usbOpen: (hint) => {
		const host = nativeHost();
		if (!host?.usbOpen) return;
		try {
			host.usbOpen(hint ?? hintFor(get().sdr.device));
			pushUsbConfig(get().sdr);
			pullNative(get, set);
			set({ commands: [command("sdr.mode.set", { device: hint ?? get().sdr.device }, "USB open"), ...get().commands].slice(0, 40) });
		} catch {}
	},
	usbClose: () => {
		const host = nativeHost();
		if (!host?.usbClose) return;
		try {
			host.usbClose();
			set({ usb: {
				...get().usb,
				open: false,
				rx: false,
				source: "none"
			} });
		} catch {}
	},
	usbRx: (on) => {
		const host = nativeHost();
		if (!host?.usbRx) return;
		try {
			if (on && !get().usb.open) host.usbOpen?.(hintFor(get().sdr.device));
			host.usbRx(on ? "on" : "off");
			set({
				usb: {
					...get().usb,
					rx: on,
					source: on ? "usb" : "none"
				},
				tel: {
					...get().tel,
					halMode: on ? "HARDWARE" : get().tel.halMode,
					lastEvent: on ? "USB RX armed · clock_source=internal · SECONDARY" : "USB RX idle"
				},
				commands: [command("sdr.mode.set", { mode: on ? "real" : "simulated" }, on ? "USB RX" : "USB idle"), ...get().commands].slice(0, 40)
			});
		} catch {}
	},
	sealPipeline: () => {
		const host = nativeHost();
		if (host?.pipeline) try {
			host.pipeline("seal");
		} catch {}
		set({
			commands: [command("hdf5.summary.read", {}, "seal"), ...get().commands].slice(0, 40),
			tel: {
				...get().tel,
				lastEvent: "HDF5 sealed · SHA-256 sidecar written"
			}
		});
	},
	rotatePipeline: () => {
		const host = nativeHost();
		if (host?.pipeline) try {
			host.pipeline("rotate");
		} catch {}
		set({ commands: [command("pipeline.rotate_output", {}, "rotated"), ...get().commands].slice(0, 40) });
	}
}));
function fmtBytes(n) {
	if (!n) return "—";
	if (n < 1024) return `${n} B`;
	if (n < 1048576) return `${(n / 1024).toFixed(0)} KB`;
	return `${(n / 1048576).toFixed(2)} MB`;
}
function LinkView() {
	const mode = useApp((s) => s.mode);
	const nodeUrl = useApp((s) => s.nodeUrl);
	const c2Token = useApp((s) => s.c2Token);
	const liveOk = useApp((s) => s.liveOk);
	const liveError = useApp((s) => s.liveError);
	const operatorUnlocked = useApp((s) => s.operatorUnlocked);
	const setMode = useApp((s) => s.setMode);
	const setNodeUrl = useApp((s) => s.setNodeUrl);
	const setToken = useApp((s) => s.setToken);
	const unlockOperator = useApp((s) => s.unlockOperator);
	const [url, setUrl] = (0, import_react.useState)(nodeUrl);
	const [token, setTok] = (0, import_react.useState)(c2Token);
	const [pin, setPin] = (0, import_react.useState)("");
	const [pinErr, setPinErr] = (0, import_react.useState)(false);
	const native = isNativeApk();
	(0, import_react.useEffect)(() => {
		setUrl(nodeUrl);
		setTok(c2Token);
	}, [nodeUrl, c2Token]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Uplink",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: mode === "live" ? liveOk ? "ok" : "warn" : "default",
					children: mode === "live" ? liveOk ? "LIVE" : "LIVE · retry" : "SIMULATED"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm leading-relaxed text-muted",
						children: "This handset is the Tier-2 C2 master and a standalone metrology node. Simulated mode runs the Front Range stack offline. Live mode polls Alpha. USB OTG HackRF / HamGeek AD9363 is native in the Pixel APK."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: mode === "simulated" ? "primary" : "outline",
							onClick: () => setMode("simulated"),
							children: "Simulator"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: mode === "live" ? "primary" : "outline",
							onClick: () => setMode("live"),
							children: "Alpha live"
						})]
					}),
					liveError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-danger",
						children: liveError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: native ? "This signed APK owns a LAN bridge. Join PiRepo, then Save and probe — HTTP to 10.42.0.1 is allowed from the handset." : "Hosted HTTPS cannot reach an HTTP LAN address. Sideload the Pixel APK on GrapheneOS for LIVE Alpha. Mixed-content blocks are expected from a public host."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Alpha endpoint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
							children: "Node URL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: url,
							onChange: (e) => setUrl(e.target.value),
							className: "h-11 w-full rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none focus-visible:ring-2 focus-visible:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
							children: "C2 bearer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: token,
							onChange: (e) => setTok(e.target.value),
							placeholder: "optional",
							className: "h-11 w-full rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3 w-full",
						onClick: () => {
							setNodeUrl(url.trim());
							setToken(token.trim());
							setMode("live");
						},
						children: "Save and probe"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Protocol",
								value: PROTOCOL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Issuer",
								value: ISSUER
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Target",
								value: TARGET
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Status API",
								value: "/api/status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "SDR API",
								value: "/api/sdr/config"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Pixel C2",
								value: ":8444 dslv-zpdi-c2/1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Telemetry",
								value: ":8777 /telemetry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Transport",
								value: native ? "NativeHost · USB + LAN" : "fetch · browser CORS"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "GrapheneOS · USB OTG",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm leading-relaxed text-muted",
						children: "Pixel 9 Pro XL is USB-C host. No JNI — HackRF talks vendor requests, Pluto talks libiio over ECM ethernet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "USB-C OTG adapter. Unlock the phone. GrapheneOS → USB controlled by this device." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HackRF One: plug in, grant USB permission when prompted, RF → Scan OTG → Open → Start RX." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HamGeek AD9363 / PlutoSDR+: firmware usb_ether=ecm (RNDIS will not enumerate a useful IIO path). Then 192.168.2.1:30431." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "App info → Network → Allow. Location for GPS stamps. No extra native libraries; 16 KB pages are a non-issue." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Alpha on PiRepo can poll this node at :8777/telemetry. C2 envelopes land on :8444." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "HackRF",
						value: "1d50:6089"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Pluto / AD9363",
						value: "0456:b673"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Default rate",
						value: "2.048 Msps"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-xl bg-card shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/lab-banner.jpg",
					alt: "DynoGator Labs circuit galleon and bootloader watch",
					className: "h-40 w-full object-cover object-right sm:h-48"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mb-3 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
								children: "Identity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/lab-crest.jpg",
								alt: "",
								className: "size-10 rounded-md object-cover shadow-[var(--shadow-border)]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Lab",
							value: "DynoGator Labs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Stack",
							value: `DSLV-ZPDI Rev ${RELEASE.version}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Role",
							value: "Tier-2 C2 master"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Handset",
							value: "Pixel 9 Pro XL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "OS",
							value: "GrapheneOS · Termux · Debian"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Mesh",
							value: "PiRepo 10.42.0.0/24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Package",
							value: RELEASE.packageId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-xs leading-relaxed text-muted",
							children: "Lab plate · circuit galleon · bootloader watch"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Restricted capabilities",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: operatorUnlocked ? "ok" : "default",
					children: operatorUnlocked ? "OPEN" : "SEALED"
				}),
				children: [operatorUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "MIMO TX, fox-hunt TDOA, and hop monitor are unsealed on this handset. Transmit remains RX-only in this build — the C2 plane will not emit RF from the Pixel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "MIMO TX",
						value: "authorized · not armed",
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Vector / TDOA",
						value: "ready",
						tone: "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Hop monitor",
						value: "ready",
						tone: "ok"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						const ok = unlockOperator(pin);
						setPinErr(!ok);
						if (ok) setPin("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "numeric",
						value: pin,
						onChange: (e) => setPin(e.target.value),
						placeholder: "Operator PIN",
						className: "h-11 min-w-0 flex-1 rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-subtle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "outline",
						children: "Unseal"
					})]
				}), pinErr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-danger",
					children: "PIN rejected."
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Install",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: native ? "ok" : "default",
					children: native ? "APK" : "PWA"
				}),
				children: native ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: [
								"Signed Pixel build ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-foreground",
									children: RELEASE.packageId
								}),
								" ·",
								" ",
								RELEASE.version,
								". USB host, sensors, HDF5 chain, and C2 listener are in-process. Grant location and USB when prompted."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Build",
							value: `${RELEASE.version} / ${RELEASE.versionCode}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Target",
							value: "API 34 · min 29 · arm64 · Pixel 9 Pro XL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Cleartext",
							value: "permitted",
							tone: "ok"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Signer",
							value: RELEASE.signerSha256.slice(0, 16) + "…"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: "Sideload the signed APK on GrapheneOS Pixel 9 Pro XL. That package is the usable instrument — LIVE Alpha over HTTP only works from it. The AAB is for Play Console upload only and will not install from Files."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: APK_HREF,
							download: RELEASE.apk,
							className: "inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground",
							children: "Download APK · GrapheneOS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: AAB_HREF,
							download: RELEASE.aab,
							className: "inline-flex h-11 items-center justify-center rounded-md bg-transparent px-4 text-sm font-medium text-foreground shadow-[var(--shadow-border)]",
							children: "Download AAB · Play upload"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-elevated px-3 py-2 font-mono text-[0.6875rem] leading-relaxed text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["APK ", fmtBytes(RELEASE.apkBytes)] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "break-all",
									children: ["SHA256 ", RELEASE.apkSha256]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1",
									children: ["AAB ", fmtBytes(RELEASE.aabBytes)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "break-all",
									children: ["SHA256 ", RELEASE.aabSha256]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal space-y-1 pl-5 text-xs leading-relaxed text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Vanadium → three-dot → Downloads, or Files. Settings → Apps → Vanadium → Install unknown apps → Allow." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Open ",
									RELEASE.apk,
									". GrapheneOS may warn about an unknown developer — Install anyway."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "App info → Network → Allow (GrapheneOS INTERNET toggle). Grant Location for GPS stamps." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Join PiRepo (10.42.0.0/24). Open DSLV-ZPDI → Link → Alpha live. RF → Scan OTG for HackRF / AD9363." })
							]
						})
					]
				})
			})
		]
	});
}
function MetroView() {
	const tel = useApp((s) => s.tel);
	const pipe = useApp((s) => s.pipe);
	const usb = useApp((s) => s.usb);
	const commands = useApp((s) => s.commands);
	const captures = useApp((s) => s.captures);
	const resetBaseline = useApp((s) => s.resetBaseline);
	const setHalMode = useApp((s) => s.setHalMode);
	const setPipeline = useApp((s) => s.setPipeline);
	const sealPipeline = useApp((s) => s.sealPipeline);
	const rotatePipeline = useApp((s) => s.rotatePipeline);
	const native = isNativeApk();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Timing authority · LBE-1421",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: tel.timingHealthy ? "ok" : "danger",
					children: tel.timingHealthy ? "LOCKED" : "DEGRADED"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "GPS fix",
						value: tel.gpsLock ? "3D" : "NONE",
						tone: tel.gpsLock ? "ok" : "danger"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "PPS jitter",
						value: formatNs(tel.ppsJitterNs),
						tone: tel.ppsJitterNs < 500 ? "ok" : "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "chrony RMS",
						value: `${tel.chronyOffsetUs.toFixed(2)} µs`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Stratum",
						value: String(tel.chronyStratum)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "GPIO",
						value: "PPS · pin 24 / GPIO8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "REF",
						value: "10 MHz → EXT_REF_CLK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "Pi 5 remains Tier-1 timing/SDR/HDF5 authority. This Pixel cannot override GPSDO or promote USB IQ to institutional PRIMARY."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "SPEC-007 HDF5 · tier-2",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: pipe.running ? "ok" : "warn",
					children: pipe.running ? "ARMED" : "HELD"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Route",
						value: usb.rx ? "SECONDARY_QUARANTINED" : pipe.route,
						tone: usb.rx ? "warn" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Tier",
						value: "2 · pixel-9-pro-xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Clock",
						value: "internal",
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "LOCAL PRIMARY",
						value: String(pipe.primaryWritten || Math.floor(tel.primaryWritten)),
						tone: "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "SECONDARY",
						value: String(pipe.secondaryWritten || Math.floor(tel.secondaryWritten))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Integrity",
						value: pipe.integrityFailed || tel.integrityFailed ? String(pipe.integrityFailed || tel.integrityFailed) : "CLEAN",
						tone: pipe.integrityFailed || tel.integrityFailed ? "danger" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "HMAC",
						value: pipe.hmacReady || !native ? "filesDir/hmac.key" : "pending",
						tone: pipe.hmacReady || !native ? "ok" : "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "File ver",
						value: pipe.fileVersion
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Buffered",
						value: String(pipe.buffered)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-md bg-elevated px-3 py-2 font-mono text-[0.6875rem] leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"genesis ",
								shortHash(GENESIS_SHA256, 16),
								"…"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "break-all",
								children: [
									"chain ",
									shortHash(pipe.chainHead, 24),
									"…"
								]
							}),
							pipe.lastSha256 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 break-all",
								children: ["file ", pipe.lastSha256]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "SHA-256 sidecar + HMAC-SHA256 attestation + atomic .h5.partial rename. USB RF is quarantined JSONL. Sensor archive is local PRIMARY labeled hardware_tier=2."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: pipe.running ? "outline" : "primary",
								onClick: () => setPipeline(!tel.pipelineActive),
								children: tel.pipelineActive ? "Hold" : "Start ingest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: sealPipeline,
								children: "Seal file"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: rotatePipeline,
								children: "Rotate"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "SPEC-009 baseline FSM",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: tel.baseline === "LOCKED" ? "ok" : "warn",
					children: tel.baseline
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Hours",
						value: tel.baselineHours.toFixed(1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Gate",
						value: "72 h · 240 samples"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "PRIMARY",
						value: tel.baseline === "LOCKED" ? "armed" : "held"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "LEARNING writes SECONDARY only. A hard reset on Alpha is a C2 forward — the Pixel will not stamp Tier-1 baseline itself."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => resetBaseline(false),
							children: "Soft reset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "danger",
							onClick: () => resetBaseline(true),
							children: "Hard reset"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "HAL",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Mode",
						value: tel.halMode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "USB",
						value: usb.open ? usb.kind : "idle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setHalMode("SIMULATOR"),
								children: "Simulator"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setHalMode("HARDWARE"),
								children: "Hardware"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setHalMode("OFFLINE"),
								children: "Offline"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Captures",
				children: captures.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No sealed captures this session."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: captures.slice(0, 8).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-elevated px-3 py-2 font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [c.ts.slice(11, 19), "Z"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [(c.centerHz / 1e6).toFixed(3), " MHz"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-foreground",
							children: [
								"peak ",
								c.peakDbm.toFixed(1),
								" dBm · SNR ",
								c.snrDb.toFixed(1),
								" · r ",
								c.rGlobal.toFixed(3)
							]
						})]
					}, c.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "C2 audit · SPEC-022",
				children: commands.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No commands issued. Tune, gain, USB, and pipeline actions land here."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: commands.slice(0, 12).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-elevated px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-primary",
								children: c.capability
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								tone: c.state === "COMPLETED" ? "ok" : "warn",
								children: c.state
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 font-mono text-[0.6875rem] text-muted",
							children: [
								shortHash(c.commandId),
								" · ",
								c.result
							]
						})]
					}, c.commandId))
				})
			})
		]
	});
}
function CoherenceDial({ r, phases, className }) {
	const cx = 80;
	const cy = 80;
	const rad = 54;
	const order = Math.max(0, Math.min(1, r));
	const sweep = order * 360;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 160 160",
			className: "h-full w-full text-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: rad,
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.18",
					strokeWidth: "8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: rad,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "8",
					strokeLinecap: "round",
					strokeDasharray: `${sweep / 360 * 2 * Math.PI * rad} ${2 * Math.PI * rad}`,
					transform: `rotate(-90 ${cx} ${cy})`
				}),
				phases.map((p, i) => {
					const x = Math.round((cx + Math.cos(p) * rad) * 100) / 100;
					const y = Math.round((cy + Math.sin(p) * rad) * 100) / 100;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: x,
						cy: y,
						r: "3.2",
						fill: "currentColor",
						opacity: Math.round((.35 + order * .65) * 100) / 100
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: "3",
					fill: "currentColor"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-2xl font-medium tabular-nums leading-none text-foreground",
				children: order.toFixed(3)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[0.6875rem] uppercase tracking-[0.16em] text-muted",
				children: "Γ r_global"
			})]
		})]
	});
}
var MAPS = [
	[
		[
			12,
			16,
			20
		],
		[
			22,
			48,
			52
		],
		[
			48,
			118,
			108
		],
		[
			148,
			196,
			184
		],
		[
			236,
			240,
			236
		]
	],
	[
		[
			14,
			12,
			18
		],
		[
			48,
			32,
			62
		],
		[
			102,
			70,
			48
		],
		[
			196,
			164,
			112
		],
		[
			242,
			236,
			220
		]
	],
	[
		[
			10,
			14,
			16
		],
		[
			24,
			52,
			66
		],
		[
			42,
			104,
			86
		],
		[
			168,
			196,
			92
		],
		[
			234,
			238,
			214
		]
	]
];
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function sampleMap(t, pal) {
	const stops = MAPS[pal];
	const x = Math.max(0, Math.min(.999, t)) * (stops.length - 1);
	const i = Math.floor(x);
	const f = x - i;
	const a = stops[i];
	const b = stops[i + 1] ?? a;
	return [
		lerp(a[0], b[0], f),
		lerp(a[1], b[1], f),
		lerp(a[2], b[2], f)
	];
}
function lift(t) {
	return Math.pow(Math.max(0, Math.min(1, t)), .42);
}
function Waterfall({ history, bins, peakHold, centerHz, spanHz, floorDbm, ceilDbm, palette, compact = false, onTune }) {
	const wf = (0, import_react.useRef)(null);
	const sp = (0, import_react.useRef)(null);
	const [cursor, setCursor] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const canvas = wf.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: false });
		if (!ctx) return;
		const w = 192;
		const h = 72;
		if (canvas.width !== w || canvas.height !== h) {
			canvas.width = w;
			canvas.height = h;
		}
		const img = ctx.createImageData(w, h);
		const data = img.data;
		const range = Math.max(5, ceilDbm - floorDbm);
		for (let y = 0; y < h; y++) {
			const row = history[y];
			for (let x = 0; x < w; x++) {
				const [r, g, b] = sampleMap(lift(((row ? row[x] : floorDbm) - floorDbm) / range), palette);
				const i = (y * w + x) * 4;
				data[i] = r;
				data[i + 1] = g;
				data[i + 2] = b;
				data[i + 3] = 255;
			}
		}
		ctx.putImageData(img, 0, 0);
	}, [
		history,
		floorDbm,
		ceilDbm,
		palette
	]);
	(0, import_react.useEffect)(() => {
		const canvas = sp.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const dpr = Math.min(2, window.devicePixelRatio || 1);
		const cssW = canvas.clientWidth || 320;
		const cssH = canvas.clientHeight || 88;
		canvas.width = Math.floor(cssW * dpr);
		canvas.height = Math.floor(cssH * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, cssW, cssH);
		const range = Math.max(5, ceilDbm - floorDbm);
		const ny = (v) => cssH - (v - floorDbm) / range * cssH;
		ctx.strokeStyle = "rgba(236, 238, 241, 0.06)";
		ctx.lineWidth = 1;
		for (const db of [
			-90,
			-70,
			-50,
			-30
		]) {
			if (db <= floorDbm || db >= ceilDbm) continue;
			const y = ny(db);
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(cssW, y);
			ctx.stroke();
		}
		ctx.beginPath();
		ctx.moveTo(cssW / 2, 0);
		ctx.lineTo(cssW / 2, cssH);
		ctx.strokeStyle = "rgba(142, 180, 173, 0.28)";
		ctx.stroke();
		ctx.beginPath();
		for (let i = 0; i < 192; i++) {
			const x = i / 191 * cssW;
			const y = ny(bins[i] ?? floorDbm);
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.lineTo(cssW, cssH);
		ctx.lineTo(0, cssH);
		ctx.closePath();
		ctx.fillStyle = "rgba(142, 180, 173, 0.18)";
		ctx.fill();
		ctx.beginPath();
		for (let i = 0; i < 192; i++) {
			const x = i / 191 * cssW;
			const y = ny(bins[i] ?? floorDbm);
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.strokeStyle = "rgba(142, 180, 173, 0.95)";
		ctx.lineWidth = 1.5;
		ctx.stroke();
		ctx.beginPath();
		for (let i = 0; i < 192; i++) {
			const x = i / 191 * cssW;
			const y = ny(peakHold[i] ?? floorDbm);
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.strokeStyle = "rgba(200, 204, 210, 0.45)";
		ctx.setLineDash([3, 4]);
		ctx.lineWidth = 1;
		ctx.stroke();
		ctx.setLineDash([]);
		if (cursor != null) {
			const x = (cursor - (centerHz - spanHz / 2)) / spanHz * cssW;
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, cssH);
			ctx.strokeStyle = "rgba(236, 238, 241, 0.55)";
			ctx.stroke();
		}
	}, [
		bins,
		peakHold,
		floorDbm,
		ceilDbm,
		cursor,
		centerHz,
		spanHz
	]);
	const lo = centerHz - spanHz / 2;
	const hi = centerHz + spanHz / 2;
	const hzAt = (clientX, target) => {
		const rect = target.getBoundingClientRect();
		const t = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
		return lo + t * spanHz;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-lg bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: sp,
				className: compact ? "block h-16 w-full" : "block h-28 w-full"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: wf,
				className: compact ? "block h-28 w-full" : "block h-52 w-full",
				style: { imageRendering: "pixelated" },
				onPointerDown: (e) => {
					const hz = hzAt(e.clientX, e.currentTarget);
					setCursor(hz);
					onTune?.(hz);
				},
				onPointerMove: (e) => {
					if (e.buttons === 0 && e.pointerType !== "touch") setCursor(hzAt(e.clientX, e.currentTarget));
				},
				onPointerLeave: () => setCursor(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between px-2 py-1.5 font-mono text-xs tabular-nums text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatMhz(lo, 2) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-primary",
						children: [
							formatMhz(cursor ?? centerHz, 3),
							" MHz",
							cursor != null ? " · tap" : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatMhz(hi, 2) })
				]
			})
		]
	});
}
function fmtUptime(s) {
	return `${Math.floor(s / 3600)}h ${Math.floor(s % 3600 / 60)}m`;
}
function OpsView() {
	const tel = useApp((s) => s.tel);
	const sdr = useApp((s) => s.sdr);
	const usb = useApp((s) => s.usb);
	const pipe = useApp((s) => s.pipe);
	const mode = useApp((s) => s.mode);
	const capture = useApp((s) => s.capture);
	const setPipeline = useApp((s) => s.setPipeline);
	const usbRx = useApp((s) => s.usbRx);
	const liveError = useApp((s) => s.liveError);
	const bins = useApp((s) => s.bins);
	const history = useApp((s) => s.history);
	const peakHold = useApp((s) => s.peakHold);
	const setCenterHz = useApp((s) => s.setCenterHz);
	const setView = useApp((s) => s.setView);
	const native = isNativeApk();
	const liveUsb = usb.rx && usb.source === "usb";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			!native ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: APK_HREF,
				download: RELEASE.apk,
				className: "flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "Install Pixel APK · USB SDR + HDF5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs",
					children: RELEASE.version
				})]
			}) : null,
			liveError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-danger/10 px-3 py-2 font-mono text-xs text-danger",
				children: [
					"Alpha link: ",
					liveError,
					". Local suite continues."
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Lock chain",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: tel.pipelineActive ? "ok" : "warn",
					children: tel.pipelineActive ? "ARMED" : "HELD"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
							tone: tel.gpsLock ? "ok" : "danger",
							children: ["GPSDO ", tel.gpsLock ? "lock" : "search"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
							tone: tel.timingHealthy ? "ok" : "warn",
							children: ["PPS ", formatNs(tel.ppsJitterNs)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: tel.halMode === "OFFLINE" ? "danger" : "primary",
							children: tel.halMode
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
							tone: tel.baseline === "LOCKED" ? "ok" : "warn",
							children: ["FSM ", tel.baseline]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: liveUsb ? "ok" : mode === "live" ? "primary" : "default",
							children: liveUsb ? "USB RX" : mode === "live" ? "LIVE" : "SIM"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Center",
							value: (sdr.centerHz / 1e6).toFixed(3),
							unit: "MHz",
							tone: "primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "SNR",
							value: tel.snrDb.toFixed(1),
							unit: "dB",
							tone: tel.snrDb > 20 ? "ok" : "warn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Peak",
							value: tel.peakDbm.toFixed(1),
							unit: "dBm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "Anomaly",
							value: String(tel.anomalyBins),
							unit: "bins",
							tone: tel.anomalyBins > 24 ? "warn" : "default"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: liveUsb ? "Pixel USB RF" : "Alpha RF",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => setView("sdr"),
					children: "Open RF"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, {
					history,
					bins,
					peakHold,
					centerHz: sdr.centerHz,
					spanHz: sdr.spanHz,
					floorDbm: sdr.floorDbm,
					ceilDbm: sdr.ceilDbm,
					palette: sdr.palette,
					compact: true,
					onTune: (hz) => {
						setCenterHz(hz);
						setView("sdr");
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "KCET-ATLAS",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoherenceDial, {
							r: tel.rGlobal,
							phases: tel.phases,
							className: "mx-auto h-44 w-44"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "r_local",
							value: tel.rLocal.toFixed(3)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "r_smooth",
							value: tel.rSmooth.toFixed(3)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Peak bin",
							value: formatHz(tel.peakHz),
							tone: "primary"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: "Tier-2 node",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Host",
							value: native ? "pixel-9-pro-xl" : tel.hostname
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "USB",
							value: usb.open ? usb.kind : "idle",
							tone: usb.open ? "ok" : "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "|B|",
							value: `${tel.pixel.magAbs.toFixed(1)} µT`,
							tone: "primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Trust",
							value: tel.pixel.trustScore.toFixed(2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "CPU",
							value: `${tel.cpuPct.toFixed(0)}%`,
							tone: tel.cpuPct > 80 ? "danger" : "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Uptime",
							value: fmtUptime(tel.uptimeS)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: "Ingest",
							value: `${tel.ingestHz.toFixed(1)} Hz`
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Pipeline · SPEC-007",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Service",
						value: tel.pipelineActive ? "ACTIVE" : "HELD",
						tone: tel.pipelineActive ? "ok" : "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "LOCAL PRIMARY",
						value: String(pipe.primaryWritten || Math.floor(tel.primaryWritten)),
						tone: "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "SECONDARY",
						value: String(pipe.secondaryWritten || Math.floor(tel.secondaryWritten))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Integrity",
						value: (pipe.integrityFailed || tel.integrityFailed) === 0 ? "CLEAN" : String(pipe.integrityFailed || tel.integrityFailed),
						tone: pipe.integrityFailed || tel.integrityFailed ? "danger" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Chain",
						value: `${pipe.chainHead.slice(0, 12)}…`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Last event",
						value: tel.lastEvent
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: tel.pipelineActive ? "outline" : "primary",
								onClick: () => setPipeline(!tel.pipelineActive),
								children: tel.pipelineActive ? "Hold pipeline" : "Start pipeline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: capture,
								children: "Seal capture"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: usb.rx ? "primary" : "outline",
								onClick: () => usbRx(!usb.rx),
								disabled: !native,
								children: usb.rx ? "USB RX on" : "USB RX"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Environment",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Kp",
						value: tel.kp.toFixed(1),
						tone: tel.kp >= 5 ? "warn" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "SFI",
						value: tel.sfi.toFixed(0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Aurora",
						value: `${tel.auroraPct.toFixed(0)}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Wx",
						value: tel.storm
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Rn",
						value: `${tel.radonPci.toFixed(1)} pCi/L`,
						tone: tel.radonPci > 8 ? "warn" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "UPS",
						value: `${tel.upsPct.toFixed(0)}% · ${tel.upsVolt.toFixed(2)} V`,
						tone: tel.acPresent ? "ok" : "warn"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setView("link"),
				className: "flex items-center gap-3 overflow-hidden rounded-xl bg-card p-3 text-left shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/lab-crest.jpg",
						alt: "",
						className: "size-14 shrink-0 rounded-lg object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
							children: "DynoGator Labs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 truncate font-mono text-sm text-primary",
							children: "Circuit galleon · bootloader watch"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/lab-banner.jpg",
						alt: "",
						className: "hidden h-14 w-32 shrink-0 rounded-md object-cover object-right sm:block"
					})
				]
			})
		]
	});
}
var DEMODS = [
	"WFM",
	"NFM",
	"AM",
	"USB",
	"LSB",
	"CW",
	"RAW"
];
var MODES = [
	"SWEEP",
	"NARROW",
	"SCOPE"
];
function SdrView() {
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
	const [mhz, setMhz] = (0, import_react.useState)("");
	const native = isNativeApk();
	const liveUsb = usb.rx && usb.source === "usb";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "USB OTG · HackRF / AD9363",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: liveUsb ? "ok" : usb.open ? "warn" : "default",
					children: liveUsb ? "RX" : usb.open ? "OPEN" : native ? "IDLE" : "PWA"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs leading-relaxed text-muted",
						children: native ? "Pixel USB-C host. HackRF is vendor-protocol on this handset. HamGeek AD9363 needs ECM (not RNDIS) then IIO at 192.168.2.1. RF from this radio is clock_source=internal → SECONDARY, never Tier-1 PRIMARY." : "OTG control is in the signed Pixel APK. This preview runs the same UI against the Front Range simulator."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Kind",
						value: usb.kind === "none" ? "—" : usb.kind.toUpperCase(),
						tone: usb.open ? "primary" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Board",
						value: usb.board || usb.version || "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Rate",
						value: `${(usb.sampleRateHz / 1e6).toFixed(3)} Msps`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "IIO",
						value: usb.iio ? "up" : "down",
						tone: usb.iio ? "ok" : "default"
					}),
					usb.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-danger",
						children: usb.error
					}) : null,
					usb.devices.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 flex flex-col gap-1",
						children: usb.devices.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "font-mono text-xs text-muted",
							children: [
								d.vid,
								":",
								d.pid,
								" · ",
								d.kind,
								" · ",
								d.name
							]
						}, d.deviceId))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-muted",
						children: "No USB SDR enumerated."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => usbScan(),
								disabled: !native,
								children: "Scan OTG"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => usbOpen(),
								disabled: !native,
								children: "Open radio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: usb.rx ? "primary" : "outline",
								onClick: () => usbRx(!usb.rx),
								disabled: !native,
								children: usb.rx ? "Hold RX" : "Start RX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => usbClose(),
								disabled: !native,
								children: "Close"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Waterfall",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: "primary",
						children: sdr.waterfallMode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
						tone: liveUsb ? "ok" : "default",
						children: liveUsb ? "USB" : DEVICE_LABEL[sdr.device].split(" ")[0]
					})]
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, {
						history,
						bins,
						peakHold,
						centerHz: sdr.centerHz,
						spanHz: sdr.spanHz,
						floorDbm: sdr.floorDbm,
						ceilDbm: sdr.ceilDbm,
						palette: sdr.palette,
						onTune: setCenterHz
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: liveUsb ? "Live USB bins · tap to retune the OTG radio." : "Tap the waterfall to retune. Dashed trace is peak-hold."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-x-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Peak",
								value: `${tel.peakDbm.toFixed(1)} dBm`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Floor",
								value: `${tel.noiseFloorDbm.toFixed(1)} dBm`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "SNR",
								value: `${tel.snrDb.toFixed(1)} dB`,
								tone: tel.snrDb > 20 ? "ok" : "warn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "At",
								value: formatHz(tel.peakHz),
								tone: "primary"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Tune",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
							children: "Center"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-3xl font-medium tabular-nums leading-none text-foreground",
							children: [(sdr.centerHz / 1e6).toFixed(4), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-sm font-normal text-muted",
								children: "MHz"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-xs text-muted",
							children: [
								"span ",
								(sdr.spanHz / 1e6).toFixed(2),
								" MHz"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => nudgeCenter(-.1),
								children: "−10%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => nudgeCenter(-.01),
								children: "−1%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => nudgeCenter(.01),
								children: "+1%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => nudgeCenter(.1),
								children: "+10%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => zoom(1),
								children: "Zoom in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => zoom(-1),
								children: "Zoom out"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: togglePause,
								children: sdr.paused ? "Resume" : "Pause"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: sdr.audio ? "primary" : "outline",
								size: "sm",
								onClick: toggleAudio,
								children: sdr.audio ? "Audio on" : "Audio"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							const v = parseFloat(mhz);
							if (!Number.isFinite(v)) return;
							setCenterHz(v * 1e6);
							setMhz("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							inputMode: "decimal",
							value: mhz,
							onChange: (e) => setMhz(e.target.value),
							placeholder: "MHz",
							className: "h-11 min-w-0 flex-1 rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "primary",
							children: "Tune"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-1.5",
						children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: sdr.waterfallMode === m ? "primary" : "outline",
							onClick: () => setSpanMode(m),
							children: m
						}, m))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Presets",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: sdr.preset === p.id ? "primary" : "outline",
						size: "sm",
						onClick: () => applyPreset(p.id),
						children: p.label
					}, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Front end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mb-3 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex justify-between font-mono text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LNA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-foreground",
								children: [sdr.lnaGain, " dB"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: LNA_STEPS.length - 1,
							value: Math.max(0, LNA_STEPS.indexOf(sdr.lnaGain)),
							onChange: (e) => setGain("lna", LNA_STEPS[Number(e.target.value)] ?? 24),
							className: "w-full"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mb-3 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex justify-between font-mono text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VGA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-foreground",
								children: [sdr.vgaGain, " dB"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: VGA_STEPS.length - 1,
							value: Math.max(0, VGA_STEPS.indexOf(sdr.vgaGain)),
							onChange: (e) => setGain("vga", VGA_STEPS[Number(e.target.value)] ?? 32),
							className: "w-full"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex flex-wrap gap-1.5",
						children: DEMODS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: sdr.demod === d ? "primary" : "ghost",
							onClick: () => setDemod(d),
							children: d
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Device",
						value: ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: sdr.device,
						onChange: (e) => setDevice(e.target.value),
						className: "mt-1 h-11 w-full rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "pluto_iio",
								children: "PlutoSDR+ / HamGeek AD9363"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "libresdr",
								children: "LibreSDR"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "hackrf1",
								children: "HackRF One"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setFloorCeil(sdr.floorDbm - 5, void 0),
								children: "Floor −5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setFloorCeil(sdr.floorDbm + 5, void 0),
								children: "Floor +5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setFloorCeil(void 0, sdr.ceilDbm - 5),
								children: "Ceil −5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => setFloorCeil(void 0, sdr.ceilDbm + 5),
								children: "Ceil +5"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-2 w-full",
						variant: "ghost",
						size: "sm",
						onClick: cyclePalette,
						children: [
							"Palette ",
							sdr.palette + 1,
							" / 3"
						]
					})
				]
			})
		]
	});
}
function SwarmView() {
	const tel = useApp((s) => s.tel);
	const usb = useApp((s) => s.usb);
	const pipe = useApp((s) => s.pipe);
	const applyPixelFix = useApp((s) => s.applyPixelFix);
	const applyMag = useApp((s) => s.applyMag);
	const native = isNativeApk();
	const requestFix = () => {
		if (!navigator.geolocation) return;
		navigator.geolocation.getCurrentPosition((pos) => {
			applyPixelFix(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy, pos.coords.altitude ?? void 0);
		}, () => {}, {
			enableHighAccuracy: true,
			timeout: 8e3
		});
	};
	const requestMag = async () => {
		const Mag = window.Magnetometer;
		if (!Mag) return;
		try {
			const m = new Mag({ frequency: 10 });
			m.addEventListener("reading", () => applyMag(m.x, m.y, m.z));
			m.start();
		} catch {}
	};
	const px = tel.pixel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "C2 MASTER · SPEC-022",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: "primary",
					children: "ISSUER"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Protocol",
						value: PROTOCOL
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Issuer",
						value: ISSUER,
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Target",
						value: TARGET
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Listen",
						value: ":8444 /api/v1/command"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Telemetry",
						value: ":8777 /telemetry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "USB",
						value: usb.open ? `${usb.kind} ${usb.rx ? "RX" : "open"}` : "idle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Ingest",
						value: pipe.running ? "ARMED" : "held",
						tone: pipe.running ? "ok" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "This handset issues capability envelopes. Local USB SDR executes here. Alpha timing, GPSDO, and institutional PRIMARY stay on the Pi 5."
					})
				]
			}),
			tel.nodes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: n.role,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: n.online ? "ok" : "danger",
					children: n.online ? "ONLINE" : "DOWN"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "ID",
						value: n.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Platform",
						value: n.platform
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Detail",
						value: n.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "RTT",
						value: n.latencyMs != null ? `${n.latencyMs.toFixed(0)} ms` : "—",
						tone: n.latencyMs != null && n.latencyMs < 50 ? "ok" : "warn"
					})
				]
			}, n.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Pixel 9 Pro XL sensors",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: px.available || native ? "ok" : "default",
					children: px.available || native ? "DEVICE" : "SIM"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "|B|",
						value: `${px.magAbs.toFixed(2)} µT`,
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Bx By Bz",
						value: `${px.magUt[0].toFixed(1)}  ${px.magUt[1].toFixed(1)}  ${px.magUt[2].toFixed(1)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Heading",
						value: `${px.headingDeg.toFixed(1)}°`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Accel",
						value: `${px.accMs2[0].toFixed(2)}  ${px.accMs2[1].toFixed(2)}  ${px.accMs2[2].toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Gyro",
						value: `${px.gyroRads[0].toFixed(3)}  ${px.gyroRads[1].toFixed(3)}  ${px.gyroRads[2].toFixed(3)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Fix",
						value: px.lat != null && px.lon != null ? `${px.lat.toFixed(5)}, ${px.lon.toFixed(5)}` : "no fix"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Alt",
						value: px.alt != null ? `${px.alt.toFixed(0)} m` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Acc",
						value: px.accM != null ? `${px.accM.toFixed(1)} m` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Baro",
						value: px.baroHpa != null ? `${px.baroHpa.toFixed(1)} hPa` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Light",
						value: px.lightLux != null ? `${px.lightLux.toFixed(0)} lx` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "SoC T",
						value: px.tempC != null ? `${px.tempC.toFixed(1)} °C` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Trust",
						value: px.trustScore.toFixed(2),
						tone: px.trustScore >= .5 ? "ok" : "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Frame SHA",
						value: px.cameraHash
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Tier",
						value: "2 · never PRIMARY",
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: native ? "SensorHub at GAME rate (~50 Hz). No high-rate sampling. Alpha polls /telemetry on this node the same way it polls Termux." : "On GrapheneOS, grant location. Magnetometer uses the Generic Sensor API when the OS allows it; the APK reads ICM45631 / MMC5616 / ICP20100 natively."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "primary",
							onClick: requestFix,
							children: "Request GPS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => void requestMag(),
							children: "Mag sensor"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Radon · SPEC-015",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Site",
						value: "Fremont corridor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Rn",
						value: `${tel.radonPci.toFixed(2)} pCi/L`,
						tone: tel.radonPci > 4 ? "warn" : "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Route",
						value: "SECONDARY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Session",
						value: "staging · not PRIMARY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: "RadonEye stays quarantined on the secondary HDF5 branch until promotion gates pass. Mobile C2 can watch the staging endpoint; it cannot force PRIMARY."
					})
				]
			})
		]
	});
}
var NAV = [
	{
		id: "ops",
		label: "Ops",
		icon: LayoutGrid
	},
	{
		id: "sdr",
		label: "RF",
		icon: Radio
	},
	{
		id: "swarm",
		label: "Swarm",
		icon: Waypoints
	},
	{
		id: "metro",
		label: "Metro",
		icon: Gauge
	},
	{
		id: "link",
		label: "Link",
		icon: Cable
	}
];
var clockCache = "—";
function subscribeClock(cb) {
	clockCache = utcStamp();
	const id = window.setInterval(() => {
		clockCache = utcStamp();
		cb();
	}, 250);
	return () => window.clearInterval(id);
}
function useClock() {
	return (0, import_react.useSyncExternalStore)(subscribeClock, () => clockCache, () => "—");
}
function AppShell() {
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
	const [armed, setArmed] = (0, import_react.useState)(false);
	const sdrUsb = usb.rx ? "USB RX" : mode === "live" ? "LIVE" : "SIM";
	(0, import_react.useEffect)(() => {
		hydrate();
		setArmed(true);
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (!isNativeApk() || !("geolocation" in navigator)) return;
		const id = navigator.geolocation.watchPosition((pos) => {
			applyPixelFix(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy, pos.coords.altitude ?? void 0);
		}, () => {}, {
			enableHighAccuracy: true,
			maximumAge: 4e3,
			timeout: 12e3
		});
		return () => navigator.geolocation.clearWatch(id);
	}, [applyPixelFix]);
	(0, import_react.useEffect)(() => {
		if (!armed) return;
		const id = window.setInterval(tick, 100);
		return () => window.clearInterval(id);
	}, [tick, armed]);
	(0, import_react.useEffect)(() => {
		if (!sdr.audio) return;
		const ctx = new AudioContext();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		const lfo = ctx.createOscillator();
		const lfoGain = ctx.createGain();
		osc.type = sdr.demod === "AM" ? "sine" : "triangle";
		osc.frequency.value = 220 + sdr.centerHz % 400;
		lfo.frequency.value = 4.5;
		lfoGain.gain.value = 18;
		gain.gain.value = .03;
		lfo.connect(lfoGain);
		lfoGain.connect(osc.frequency);
		osc.connect(gain);
		gain.connect(ctx.destination);
		osc.start();
		lfo.start();
		return () => {
			osc.stop();
			lfo.stop();
			ctx.close();
		};
	}, [
		sdr.audio,
		sdr.demod,
		sdr.centerHz
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-grid flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-background/95 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
							children: "DynoGator Labs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-semibold tracking-tight text-foreground",
							children: "DSLV-ZPDI"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-xs tabular-nums text-muted",
							children: clock
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-xs uppercase tracking-wide text-primary",
							children: [
								sdrUsb,
								" · ",
								tel.halMode
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between font-mono text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Rev ",
						RELEASE.version,
						" · Pixel C2"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: tel.timingHealthy ? "text-ok" : "text-warn",
						children: tel.timingHealthy ? "TIMING LOCK" : "TIMING DEGRADED"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-3xl flex-1 px-4 py-4 pb-28",
				children: [
					view === "ops" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpsView, {}) : null,
					view === "sdr" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SdrView, {}) : null,
					view === "swarm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwarmView, {}) : null,
					view === "metro" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetroView, {}) : null,
					view === "link" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkView, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-3xl grid-cols-5",
					children: NAV.map((item) => {
						const active = view === item.id;
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(item.id),
							className: `flex h-14 w-full flex-col items-center justify-center gap-0.5 text-xs ${active ? "text-primary" : "text-muted"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: active ? 2.2 : 1.7
							}), item.label]
						}) }, item.id);
					})
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
