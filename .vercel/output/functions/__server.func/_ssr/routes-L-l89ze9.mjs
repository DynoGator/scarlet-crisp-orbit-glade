import { i as __toESM } from "../_runtime.mjs";
import { a as nativeHost, i as isNativeApk, n as APK_HREF, o as nativeJson, r as RELEASE, s as nativeRequest, t as AAB_HREF } from "./native-CVOnj4sL.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Radio, c as GripVertical, i as Terminal, l as Gauge, n as Waypoints, o as Menu, s as LayoutGrid, t as X, u as Cable } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-L-l89ze9.js
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
function HotSlider({ label, value, min, max, onChange, display }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex justify-between font-mono text-xs text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums text-foreground",
				children: display
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min,
			max,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "w-full"
		})]
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
function shortHash(s, n = 12) {
	return s.slice(0, n);
}
var tapScale = "active:not-disabled:scale-[0.96]";
var buttonVariants = cva("relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hot min-h-11 px-4", {
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
function Button({ className, variant, size, asChild, static: isStatic, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), !isStatic && tapScale, className),
		"data-static": isStatic ? "" : void 0,
		...props
	});
}
function Switch({ checked, onCheckedChange, disabled, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "switch",
		"aria-label": label,
		"aria-checked": checked,
		disabled,
		onClick: () => onCheckedChange(!checked),
		className: "flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-1 text-left transition-[opacity,transform] duration-150 ease-out active:scale-[0.96] disabled:opacity-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative h-7 w-12 shrink-0 rounded-full transition-[background-color] duration-150 ease-out", checked ? "bg-hot" : "bg-elevated shadow-[var(--shadow-border)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 size-6 rounded-full bg-foreground transition-transform duration-150 ease-out", checked ? "translate-x-5" : "translate-x-0.5") })
		})]
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
		label: "FM 98.1",
		hz: 981e5,
		demod: "WFM",
		span: 2048e3,
		hint: "WFM broadcast"
	},
	{
		id: "ksty",
		label: "KSTY 104.5",
		hz: 1045e5,
		demod: "WFM",
		span: 2048e3,
		hint: "Canon City"
	},
	{
		id: "fm_887",
		label: "FM 88.7",
		hz: 887e5,
		demod: "WFM",
		span: 2048e3
	},
	{
		id: "fm_1073",
		label: "FM 107.3",
		hz: 1073e5,
		demod: "WFM",
		span: 2048e3
	},
	{
		id: "nws",
		label: "NOAA Wx",
		hz: 1625e5,
		demod: "NFM",
		span: 4e5,
		hint: "KJY81 Twin Mtn"
	},
	{
		id: "kjy81",
		label: "NOAA 162.5",
		hz: 1625e5,
		demod: "NFM",
		span: 4e5,
		hint: "KJY81"
	},
	{
		id: "sheriff",
		label: "Sheriff",
		hz: 154845e3,
		demod: "NFM",
		span: 4e5,
		hint: "Fremont SO analog"
	},
	{
		id: "airband",
		label: "VHF Air",
		hz: 1228e5,
		demod: "AM",
		span: 4e5,
		hint: "1V6 CTAF"
	},
	{
		id: "marine",
		label: "Marine 16",
		hz: 1568e5,
		demod: "NFM",
		span: 4e5
	},
	{
		id: "2m_call",
		label: "2m calling",
		hz: 14652e4,
		demod: "NFM",
		span: 4e5
	},
	{
		id: "70cm",
		label: "70cm",
		hz: 446e6,
		demod: "NFM",
		span: 4e5
	},
	{
		id: "gmrs",
		label: "GMRS 20",
		hz: 462675e3,
		demod: "NFM",
		span: 4e5
	},
	{
		id: "am_broadcast",
		label: "AM 1.0",
		hz: 1e6,
		demod: "AM",
		span: 4e5
	},
	{
		id: "cb",
		label: "CB 19",
		hz: 27185e3,
		demod: "AM",
		span: 4e5
	},
	{
		id: "20m_usb",
		label: "20m USB",
		hz: 142e5,
		demod: "USB",
		span: 1e5
	},
	{
		id: "40m_lsb",
		label: "40m LSB",
		hz: 72e5,
		demod: "LSB",
		span: 1e5
	},
	{
		id: "40m_cw",
		label: "40m CW",
		hz: 703e4,
		demod: "CW",
		span: 5e4
	},
	{
		id: "adsb",
		label: "ADS-B",
		hz: 109e7,
		demod: "RAW",
		span: 2048e3
	}
];
var SPAN_FOR_MODE = {
	SWEEP: 2048e3,
	NARROW: 4e5,
	SCOPE: 1e5
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
var STEP_HZ = {
	WFM: [
		-2e5,
		-1e5,
		1e5,
		2e5
	],
	NFM: [
		-25e3,
		-5e3,
		5e3,
		25e3
	],
	AM: [
		-1e4,
		-1e3,
		1e3,
		1e4
	],
	USB: [
		-500,
		-100,
		100,
		500
	],
	LSB: [
		-500,
		-100,
		100,
		500
	],
	CW: [
		-100,
		-20,
		20,
		100
	],
	RAW: [
		-1e6,
		-1e5,
		1e5,
		1e6
	]
};
var DEFAULT_SDR = {
	device: "hackrf1",
	centerHz: 981e5,
	spanHz: 2048e3,
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
	preset: "fm_broadcast",
	volume: .7,
	squelch: .08
};
var DEFAULT_USB = {
	available: false,
	devices: [],
	open: false,
	kind: "none",
	rx: false,
	listen: false,
	version: "",
	board: "",
	error: "",
	source: "sim",
	sampleRateHz: 2048e3,
	pending: false,
	iio: false,
	muted: false
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
	hackrf1: "HackRF One / PortaPack",
	pluto_iio: "PlutoSDR+ AD9363",
	libresdr: "LibreSDR / HamGeek"
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
	},
	{
		freq: 124e4,
		bw: 16e3,
		amp: 18,
		drift: 2
	},
	{
		freq: 14e5,
		bw: 16e3,
		amp: 16,
		drift: 1
	},
	{
		freq: 135e4,
		bw: 14e3,
		amp: 15,
		drift: -2
	},
	{
		freq: 149e4,
		bw: 14e3,
		amp: 14,
		drift: 3
	},
	{
		freq: 27185e3,
		bw: 8e3,
		amp: 18,
		drift: 4
	},
	{
		freq: 52525e3,
		bw: 12e3,
		amp: 16,
		drift: 2
	},
	{
		freq: 891e5,
		bw: 22e4,
		amp: 30,
		drift: 8
	},
	{
		freq: 120025e3,
		bw: 16e3,
		amp: 20,
		drift: 30
	},
	{
		freq: 1215e5,
		bw: 12e3,
		amp: 14,
		drift: -12
	},
	{
		freq: 1228e5,
		bw: 16e3,
		amp: 22,
		drift: 18
	},
	{
		freq: 128375e3,
		bw: 16e3,
		amp: 18,
		drift: 10
	},
	{
		freq: 14652e4,
		bw: 12e3,
		amp: 20,
		drift: 3
	},
	{
		freq: 15182e4,
		bw: 1e4,
		amp: 14,
		drift: 2
	},
	{
		freq: 15188e4,
		bw: 1e4,
		amp: 13,
		drift: -2
	},
	{
		freq: 15431e4,
		bw: 12e3,
		amp: 24,
		drift: 2
	},
	{
		freq: 1544e5,
		bw: 12e3,
		amp: 18,
		drift: 1
	},
	{
		freq: 154845e3,
		bw: 12e3,
		amp: 26,
		drift: 2
	},
	{
		freq: 15576e4,
		bw: 12e3,
		amp: 16,
		drift: 1
	},
	{
		freq: 15588e4,
		bw: 12e3,
		amp: 22,
		drift: 2
	},
	{
		freq: 160425e3,
		bw: 12e3,
		amp: 18,
		drift: 1
	},
	{
		freq: 161115e3,
		bw: 12e3,
		amp: 17,
		drift: -1
	},
	{
		freq: 16149e4,
		bw: 12e3,
		amp: 22,
		drift: 2
	},
	{
		freq: 162425e3,
		bw: 22e3,
		amp: 24,
		drift: 2
	},
	{
		freq: 16245e4,
		bw: 22e3,
		amp: 22,
		drift: -3
	},
	{
		freq: 1625e5,
		bw: 22e3,
		amp: 44,
		drift: 2
	},
	{
		freq: 162525e3,
		bw: 22e3,
		amp: 20,
		drift: 1
	},
	{
		freq: 446e6,
		bw: 14e3,
		amp: 18,
		drift: 1
	},
	{
		freq: 4529e5,
		bw: 12e3,
		amp: 16,
		drift: 2
	},
	{
		freq: 462675e3,
		bw: 14e3,
		amp: 20,
		drift: 1
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
var DEFAULT_SCAN = {
	running: false,
	held: false,
	locked: false,
	bank: "all",
	index: 0,
	lastAdvance: 0,
	hangUntil: 0,
	dwellMs: 1100,
	hangMs: 2200
};
var SCAN_BANKS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "fm",
		label: "FM"
	},
	{
		id: "am",
		label: "AM"
	},
	{
		id: "noaa",
		label: "NOAA"
	},
	{
		id: "fire",
		label: "Fire"
	},
	{
		id: "law",
		label: "Law"
	},
	{
		id: "svc",
		label: "Svc"
	},
	{
		id: "rail",
		label: "Rail"
	},
	{
		id: "air",
		label: "Air"
	},
	{
		id: "ham",
		label: "Ham"
	},
	{
		id: "gmrs",
		label: "GMRS"
	},
	{
		id: "marine",
		label: "Marine"
	},
	{
		id: "cb",
		label: "CB"
	}
];
function fmtCh(mhz) {
	if (mhz < 2) return String(Math.round(mhz * 1e3));
	return String(Number(mhz.toFixed(3)));
}
function ch(bank, mhz, demod, call, service, extra) {
	const wfm = demod === "WFM";
	const hz = Math.round(mhz * 1e6);
	return {
		id: `${bank}-${Number(mhz.toFixed(4))}`,
		bank,
		hz,
		demod,
		spanHz: wfm ? 2048e3 : 4e5,
		label: `${call} ${fmtCh(mhz)}`,
		call,
		service,
		lockSnr: wfm ? 14 : demod === "AM" ? 10 : 10,
		squelch: wfm ? .04 : demod === "AM" ? .1 : .12,
		dwellMs: wfm ? 900 : 1200,
		...extra
	};
}
/**
* Analog listen-only banks for Penrose / Fremont County, Colorado.
* Open carriers the HackRF can demod (WFM / NFM / AM). No P25 DTRS, no ATSC, no encrypted TGs.
* HackRF One floor is 1 MHz — MW below that is omitted (needs an upconverter).
*/
var SCAN_CHANNELS = [
	ch("noaa", 162.5, "NFM", "KJY81", "NWS Twin Mountain", {
		lockSnr: 12,
		dwellMs: 800
	}),
	ch("noaa", 162.55, "NFM", "KEC76", "NWS Pueblo", {
		lockSnr: 12,
		dwellMs: 800
	}),
	ch("noaa", 162.475, "NFM", "WXM54", "NWS Colorado Springs", {
		lockSnr: 12,
		dwellMs: 800
	}),
	ch("noaa", 162.4, "NFM", "WX", "NOAA 162.400", {
		lockSnr: 12,
		dwellMs: 800
	}),
	ch("noaa", 162.425, "NFM", "WX", "NOAA 162.425", {
		lockSnr: 12,
		dwellMs: 800
	}),
	ch("noaa", 162.45, "NFM", "WX", "NOAA 162.450", {
		lockSnr: 12,
		dwellMs: 800
	}),
	ch("noaa", 162.525, "NFM", "WX", "NOAA 162.525", {
		lockSnr: 12,
		dwellMs: 800
	}),
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
	ch("fire", 154.31, "NFM", "CC Fire", "Canon City Fire", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 155.88, "NFM", "Penrose", "Florence / Penrose pagers", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 154.01, "NFM", "Cotopaxi", "Cotopaxi Fire", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 154.235, "NFM", "Deer Mtn", "Deer Mountain Fire", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 154.4, "NFM", "Florence", "Florence Fire / PD analog", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 154.37, "NFM", "Tallahassee", "Tallahassee Fire", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 154.43, "NFM", "Fire tac", "VHF fire tac", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 154.57, "NFM", "Fire tac", "VHF fire tac 2", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("fire", 155.28, "NFM", "EMS tac", "EMS / fire tac", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("law", 154.845, "NFM", "Sheriff", "Fremont County Sheriff analog", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("svc", 155.76, "NFM", "Canon City", "City services", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("svc", 155.955, "NFM", "PubWorks", "Public works", {
		lockSnr: 10,
		dwellMs: 1400
	}),
	ch("rail", 161.49, "NFM", "UP road", "UP Royal Gorge road", {
		lockSnr: 10,
		dwellMs: 1300
	}),
	ch("rail", 161.115, "NFM", "UP", "UP dispatcher", {
		lockSnr: 10,
		dwellMs: 1300
	}),
	ch("rail", 160.425, "NFM", "UP", "UP analog", {
		lockSnr: 10,
		dwellMs: 1300
	}),
	ch("rail", 452.9, "NFM", "UP UHF", "UP 452.900", {
		lockSnr: 10,
		dwellMs: 1300
	}),
	ch("air", 122.8, "AM", "1V6 CTAF", "Canon City / Fremont UNICOM", {
		lockSnr: 8,
		dwellMs: 1400,
		squelch: .08
	}),
	ch("air", 120.025, "AM", "1V6 AWOS", "Fremont County AWOS", {
		lockSnr: 8,
		dwellMs: 1400,
		squelch: .08
	}),
	ch("air", 128.375, "AM", "Approach", "Colorado Springs approach", {
		lockSnr: 8,
		dwellMs: 1400,
		squelch: .08
	}),
	ch("air", 121.5, "AM", "Guard", "121.5 emergency", {
		lockSnr: 8,
		dwellMs: 1400,
		squelch: .08
	}),
	ch("ham", 146.52, "NFM", "2m", "2m FM calling", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("ham", 446, "NFM", "70cm", "70cm FM calling", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("ham", 52.525, "NFM", "6m", "6m FM calling", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("gmrs", 462.675, "NFM", "GMRS 20", "GMRS ch 20 / 550", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("gmrs", 151.82, "NFM", "MURS 1", "MURS 151.820", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("gmrs", 151.88, "NFM", "MURS 2", "MURS 151.880", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("gmrs", 151.94, "NFM", "MURS 3", "MURS 151.940", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("gmrs", 154.6, "NFM", "MURS 5", "MURS 154.600", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("marine", 156.8, "NFM", "Ch 16", "VHF marine distress", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("cb", 27.185, "AM", "CB 19", "CB channel 19", {
		lockSnr: 8,
		dwellMs: 1200
	}),
	ch("am", 1.4, "AM", "KRLN", "Canon City 1400 (may be dark)", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.24, "AM", "KRDO", "Colorado Springs 1240", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.23, "AM", "AM", "1230 kHz", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.3, "AM", "AM", "1300 kHz", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.35, "AM", "KUBE", "Pueblo 1350", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.46, "AM", "AM", "1460 kHz", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.48, "AM", "AM", "1480 kHz", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.49, "AM", "KDZA", "Pueblo 1490", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.53, "AM", "AM", "1530 kHz", {
		lockSnr: 10,
		dwellMs: 1100
	}),
	ch("am", 1.58, "AM", "AM", "1580 kHz", {
		lockSnr: 10,
		dwellMs: 1100
	})
];
function channelsFor(bank) {
	if (bank === "all") return SCAN_CHANNELS;
	return SCAN_CHANNELS.filter((c) => c.bank === bank);
}
function scanChannelAt(bank, index) {
	const list = channelsFor(bank);
	if (!list.length) return void 0;
	return list[(index % list.length + list.length) % list.length];
}
function nextScanIndex(bank, index, dir = 1) {
	const n = channelsFor(bank).length;
	if (n <= 0) return 0;
	return ((index + dir) % n + n) % n;
}
function bankOf(id) {
	return SCAN_BANKS.find((b) => b.id === id || b.label.toLowerCase() === id.toLowerCase())?.id ?? "all";
}
function applyChannelToSdr(sdr, ch) {
	const waterfallMode = ch.spanHz >= 15e5 ? "SWEEP" : ch.spanHz >= 25e4 ? "NARROW" : "SCOPE";
	return {
		...sdr,
		centerHz: ch.hz,
		demod: ch.demod,
		spanHz: ch.spanHz,
		waterfallMode,
		squelch: ch.squelch,
		preset: `scan:${ch.id}`,
		paused: false
	};
}
function scanShouldLock(ch, stats, bins, sdr, usbMuted, liveUsb) {
	const n = bins.length;
	if (n < 2) return false;
	const lo = sdr.centerHz - sdr.spanHz / 2;
	const binHz = sdr.spanHz / (n - 1);
	const i = Math.round((ch.hz - lo) / binHz);
	if (i < 0 || i >= n) return false;
	const half = ch.demod === "WFM" ? Math.max(1, Math.round(8e4 / binHz)) : 1;
	let peak = -200;
	const a = Math.max(0, i - half);
	const b = Math.min(n - 1, i + half);
	for (let k = a; k <= b; k++) if (bins[k] > peak) peak = bins[k];
	const snr = peak - stats.noiseFloorDbm;
	if (liveUsb) return !usbMuted && snr >= ch.lockSnr;
	return snr >= ch.lockSnr;
}
function formatScanMhz(hz) {
	if (hz >= 2e6) return (hz / 1e6).toFixed(3);
	return (hz / 1e3).toFixed(0);
}
var SCAN_LEGAL = "Listen-only analog · Penrose / Fremont County. Open carriers the HackRF can demod. No P25 DTRS, no ATSC digital TV, no encrypted talkgroups. Floor 1 MHz — MW below that needs an upconverter.";
var bins = /* @__PURE__ */ new Float32Array(192);
var peakHold = (/* @__PURE__ */ new Float32Array(192)).fill(-120);
var history = Array.from({ length: 64 }, () => (/* @__PURE__ */ new Float32Array(192)).fill(-110));
var head = 0;
var frame = 0;
var listeners = /* @__PURE__ */ new Set();
function notify() {
	listeners.forEach((fn) => fn());
}
var rfBus = {
	bins,
	peakHold,
	frame: () => frame,
	row(i) {
		return history[(head + i) % 64];
	},
	push(src) {
		bins.set(src);
		head = (head + 64 - 1) % 64;
		history[head].set(src);
		for (let i = 0; i < 192; i++) peakHold[i] = Math.max(src[i], peakHold[i] * .985 + src[i] * .015);
		frame++;
		notify();
	},
	reset(floor = -120) {
		bins.fill(floor);
		peakHold.fill(floor);
		for (const row of history) row.fill(floor);
		frame++;
		notify();
	},
	subscribe(fn) {
		listeners.add(fn);
		return () => listeners.delete(fn);
	}
};
var SETTINGS_KEY = "dslv-zpdi-mobile-v2";
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
		mode: isNativeApk() ? "standalone" : "simulated",
		nodeUrl: "http://10.42.0.1:8080",
		c2Token: "",
		operatorUnlocked: false,
		hotZones: true
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
			vgaGain: sdr.vgaGain,
			demod: sdr.demod,
			volume: sdr.volume,
			squelch: sdr.squelch
		}));
	} catch {}
}
function armListen(sdr) {
	const host = nativeHost();
	if (!host?.listen) return;
	try {
		host.listen(JSON.stringify({
			on: true,
			demod: sdr.demod,
			volume: sdr.volume,
			squelch: sdr.squelch,
			centerHz: sdr.centerHz
		}));
	} catch {}
}
function applyScanTune(get, set, index, bank, extra) {
	const ch = scanChannelAt(bank, index);
	if (!ch) return;
	const sdr = applyChannelToSdr(get().sdr, ch);
	const audio = true;
	const nextSdr = {
		...sdr,
		audio
	};
	set({
		sdr: nextSdr,
		usb: {
			...get().usb,
			listen: true
		},
		scan: {
			...get().scan,
			bank,
			index,
			locked: false,
			lastAdvance: performance.now(),
			hangUntil: 0,
			...extra
		},
		tel: {
			...get().tel,
			lastEvent: `SCAN ${ch.label} · ${ch.demod}`
		},
		commands: [command("sdr.center_frequency.set", {
			hz: ch.hz,
			demod: ch.demod
		}, `scan ${ch.id}`), ...get().commands].slice(0, 40)
	});
	pushUsbConfig(nextSdr);
	armListen(nextSdr);
	if (isNativeApk() && !get().usb.rx) try {
		const host = nativeHost();
		if (host?.usbRx) {
			if (!get().usb.open) host.usbOpen?.(hintFor(nextSdr.device));
			host.usbRx("on");
			set({ usb: {
				...get().usb,
				rx: true,
				listen: true,
				source: "usb"
			} });
		}
	} catch {}
}
function hintFor(device) {
	if (device === "hackrf1") return "hackrf";
	if (device === "libresdr") return "libresdr";
	return "pluto";
}
function cropToSpan(src, sampleRate, spanHz, dest) {
	const n = dest.length;
	const sr = Math.max(1, sampleRate);
	if (spanHz >= sr * .95) {
		dest.set(src.subarray(0, n));
		return;
	}
	const frac = Math.max(.04, spanHz / sr);
	const half = src.length * frac / 2;
	const mid = (src.length - 1) / 2;
	for (let i = 0; i < n; i++) {
		const t = n === 1 ? .5 : i / (n - 1);
		const srcIdx = mid - half + t * 2 * half;
		const i0 = Math.max(0, Math.min(src.length - 1, Math.floor(srcIdx)));
		const i1 = Math.min(src.length - 1, i0 + 1);
		const f = srcIdx - Math.floor(srcIdx);
		dest[i] = src[i0] * (1 - f) + src[i1] * f;
	}
}
var lastTick = 0;
var liveTimer = 0;
var nativeTimer = 0;
var scanTimer = 0;
var scratch = /* @__PURE__ */ new Float32Array(192);
var usbFull = (/* @__PURE__ */ new Float32Array(192)).fill(-110);
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
function pullNative(get, set, scan) {
	const host = nativeHost();
	if (!host) return;
	const spec = nativeJson(() => host.usbSpectrum?.());
	const sns = nativeJson(() => host.sensors?.());
	const st = scan ? nativeJson(() => host.usbScan?.()) : null;
	const pipe = nativeJson(() => host.pipeline?.("stats"));
	const usbStatus = st?.status ?? st ?? spec ?? {};
	const devices = Array.isArray(st?.devices) ? st.devices : Array.isArray(usbStatus.devices) ? usbStatus.devices : get().usb.devices;
	const usb = {
		...get().usb,
		available: true,
		devices,
		open: Boolean(usbStatus.open ?? spec?.open),
		kind: usbStatus.kind ?? spec?.kind ?? get().usb.kind,
		rx: Boolean(spec?.rx ?? usbStatus.rx),
		listen: Boolean(spec?.listen ?? usbStatus.listen),
		muted: Boolean(spec?.muted),
		version: String(spec?.version ?? usbStatus.version ?? get().usb.version ?? ""),
		board: String(spec?.board ?? usbStatus.board ?? get().usb.board ?? ""),
		error: String(spec?.error ?? usbStatus.error ?? ""),
		source: spec?.rx ? "usb" : get().usb.source,
		sampleRateHz: Number(spec?.sampleRateHz ?? usbStatus.sampleRateHz ?? get().usb.sampleRateHz),
		pending: Boolean(usbStatus.pending),
		iio: Boolean(usbStatus.iio)
	};
	const next = { usb };
	if (spec?.rx && Array.isArray(spec.bins) && spec.bins.length === 192) {
		for (let i = 0; i < 192; i++) usbFull[i] = Number(spec.bins[i]) || -120;
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
	hotZones: true,
	sdr: { ...DEFAULT_SDR },
	tel: seedTelemetry(),
	commands: [],
	captures: [],
	usb: { ...DEFAULT_USB },
	pipe: { ...DEFAULT_PIPE },
	scan: { ...DEFAULT_SCAN },
	setView: (view) => set({ view }),
	hydrate: () => {
		if (get().hydrated) return;
		const s = loadSettings();
		const native = isNativeApk();
		const mode = s.mode;
		set({
			...s,
			mode,
			hydrated: true,
			sdr: {
				...DEFAULT_SDR,
				...get().sdr,
				device: "hackrf1"
			},
			tel: {
				...get().tel,
				halMode: mode === "simulated" ? "SIMULATOR" : "HARDWARE",
				hostname: mode === "live" ? get().tel.hostname : "pixel-9-pro-xl",
				lastEvent: native ? "Handset independent · waiting HackRF OTG" : "Simulator · Front Range"
			}
		});
		if (native) {
			try {
				nativeHost()?.usbAuto?.();
			} catch {}
			get().usbScan();
		}
	},
	tick: () => {
		const now = performance.now();
		const dt = lastTick ? clamp((now - lastTick) / 1e3, .08, .5) : .4;
		lastTick = now;
		const { sdr, tel, mode } = get();
		nativeTimer += dt;
		scanTimer += dt;
		if (isNativeApk() && nativeTimer > .7) {
			nativeTimer = 0;
			const doScan = scanTimer > 6;
			if (doScan) scanTimer = 0;
			pullNative(get, set, doScan);
		}
		if (sdr.paused) return;
		if (!(get().usb.rx && get().usb.source === "usb")) generateSpectrum(sdr, tel.t + dt, scratch);
		else cropToSpan(usbFull, get().usb.sampleRateHz || sdr.sampleRateHz, sdr.spanHz, scratch);
		const stats = spectrumStats(scratch, sdr);
		rfBus.push(scratch);
		const nextTel = tickTelemetry(tel, sdr, stats, dt);
		const pipe = get().pipe;
		if (pipe.running) {
			nextTel.primaryWritten = pipe.primaryWritten || nextTel.primaryWritten;
			nextTel.secondaryWritten = pipe.secondaryWritten || nextTel.secondaryWritten;
			nextTel.integrityFailed = pipe.integrityFailed;
			nextTel.pipelineActive = true;
		}
		let scan = get().scan;
		let sdrOut = sdr;
		if (scan.running && !scan.held) {
			const list = channelsFor(scan.bank);
			if (list.length) {
				const idx = (scan.index % list.length + list.length) % list.length;
				const ch = list[idx];
				const liveUsb = get().usb.rx && get().usb.source === "usb";
				const nowMs = now;
				const dwell = ch.dwellMs || scan.dwellMs;
				if (scanShouldLock(ch, stats, scratch, sdrOut, get().usb.muted, liveUsb)) scan = {
					...scan,
					locked: true,
					hangUntil: nowMs + scan.hangMs
				};
				else if (scan.locked && nowMs >= scan.hangUntil) {
					const next = nextScanIndex(scan.bank, idx, 1);
					const nch = list[next];
					sdrOut = {
						...applyChannelToSdr(sdrOut, nch),
						audio: true
					};
					scan = {
						...scan,
						locked: false,
						index: next,
						lastAdvance: nowMs,
						hangUntil: 0
					};
					pushUsbConfig(sdrOut);
					armListen(sdrOut);
				} else if (!scan.locked && nowMs - scan.lastAdvance >= dwell) {
					const next = nextScanIndex(scan.bank, idx, 1);
					const nch = list[next];
					sdrOut = {
						...applyChannelToSdr(sdrOut, nch),
						audio: true
					};
					scan = {
						...scan,
						index: next,
						lastAdvance: nowMs,
						locked: false
					};
					pushUsbConfig(sdrOut);
					armListen(sdrOut);
				}
				const show = list[(scan.index % list.length + list.length) % list.length];
				if (show) nextTel.lastEvent = scan.locked ? `SCAN LOCK ${show.label} · ${show.demod}` : `SCAN ${show.label} · ${show.demod}`;
			}
		}
		if (get().usb.rx) {
			nextTel.halMode = "HARDWARE";
			nextTel.gpsLock = nextTel.pixel.lat != null;
			nextTel.timingHealthy = nextTel.gpsLock;
			if (!scan.running) nextTel.lastEvent = get().usb.listen ? `LISTEN ${sdrOut.demod} · ${(sdrOut.centerHz / 1e6).toFixed(3)} MHz` : `USB ${get().usb.kind.toUpperCase()} RX`;
		} else if (mode === "standalone") {
			nextTel.halMode = "HARDWARE";
			nextTel.gpsLock = nextTel.pixel.lat != null;
			nextTel.timingHealthy = nextTel.gpsLock;
		}
		set(sdrOut === sdr ? {
			tel: nextTel,
			scan
		} : {
			tel: nextTel,
			scan,
			sdr: sdrOut
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
			waterfallMode: p.span >= 15e5 ? "SWEEP" : p.span >= 25e4 ? "NARROW" : "SCOPE"
		};
		set({
			sdr,
			scan: {
				...get().scan,
				running: false,
				held: false,
				locked: false
			},
			commands: [command("sdr.center_frequency.set", { hz: p.hz }, `preset ${id}`), ...get().commands].slice(0, 40)
		});
		pushUsbConfig(sdr);
		if (get().sdr.audio) try {
			nativeHost()?.listen?.(JSON.stringify({
				on: true,
				demod: p.demod,
				centerHz: p.hz
			}));
		} catch {}
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
		set({ sdr: {
			...get().sdr,
			waterfallMode: m,
			spanHz: SPAN_FOR_MODE[m]
		} });
	},
	zoom: (dir) => {
		const { sdr } = get();
		const spanHz = clamp(dir === 1 ? sdr.spanHz / 2 : sdr.spanHz * 2, 5e4, 2048e3);
		const waterfallMode = spanHz >= 15e5 ? "SWEEP" : spanHz >= 25e4 ? "NARROW" : "SCOPE";
		set({ sdr: {
			...sdr,
			spanHz,
			waterfallMode
		} });
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
		const sdr = {
			...get().sdr,
			demod
		};
		set({ sdr });
		pushUsbConfig(sdr);
		if (sdr.audio) try {
			nativeHost()?.listen?.(JSON.stringify({
				on: true,
				demod
			}));
		} catch {}
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
	toggleAudio: () => {
		const on = !get().sdr.audio;
		const sdr = {
			...get().sdr,
			audio: on
		};
		set({
			sdr,
			usb: {
				...get().usb,
				listen: on
			},
			tel: {
				...get().tel,
				lastEvent: on ? `LISTEN ${sdr.demod}` : "Speaker muted"
			}
		});
		const host = nativeHost();
		if (host?.listen) try {
			host.listen(JSON.stringify({
				on,
				demod: sdr.demod,
				volume: sdr.volume,
				squelch: sdr.squelch,
				centerHz: sdr.centerHz
			}));
		} catch {}
	},
	setVolume: (v) => {
		const sdr = {
			...get().sdr,
			volume: clamp(v, 0, 1)
		};
		set({ sdr });
		pushUsbConfig(sdr);
		if (sdr.audio) try {
			nativeHost()?.listen?.(JSON.stringify({
				on: true,
				volume: sdr.volume
			}));
		} catch {}
	},
	setSquelch: (v) => {
		const sdr = {
			...get().sdr,
			squelch: clamp(v, 0, 1)
		};
		set({ sdr });
		pushUsbConfig(sdr);
	},
	stepHz: (hz) => {
		get().setCenterHz(get().sdr.centerHz + hz);
	},
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
			operatorUnlocked: get().operatorUnlocked,
			hotZones: get().hotZones
		});
		set({
			mode,
			liveError: null,
			tel: {
				...get().tel,
				halMode: mode === "simulated" ? "SIMULATOR" : "HARDWARE",
				lastEvent: mode === "standalone" ? "Independent handset · no Alpha required" : mode === "live" ? "Alpha live" : "Simulator"
			}
		});
		if (mode === "live") pullLive(get, set);
		if (mode === "standalone" && isNativeApk()) try {
			nativeHost()?.usbAuto?.();
		} catch {}
	},
	setHotZones: (hotZones) => {
		saveSettings({
			mode: get().mode,
			nodeUrl: get().nodeUrl,
			c2Token: get().c2Token,
			operatorUnlocked: get().operatorUnlocked,
			hotZones
		});
		set({ hotZones });
	},
	setNodeUrl: (nodeUrl) => {
		saveSettings({
			mode: get().mode,
			nodeUrl,
			c2Token: get().c2Token,
			operatorUnlocked: get().operatorUnlocked,
			hotZones: get().hotZones
		});
		set({ nodeUrl });
	},
	setToken: (c2Token) => {
		saveSettings({
			mode: get().mode,
			nodeUrl: get().nodeUrl,
			c2Token,
			operatorUnlocked: get().operatorUnlocked,
			hotZones: get().hotZones
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
				operatorUnlocked: true,
				hotZones: get().hotZones
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
		pullNative(get, set, true);
	},
	usbOpen: (hint) => {
		const host = nativeHost();
		if (!host?.usbOpen) return;
		try {
			host.usbOpen(hint ?? hintFor(get().sdr.device));
			pushUsbConfig(get().sdr);
			pullNative(get, set, true);
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
	},
	scanStart: () => {
		const scan = get().scan;
		const bank = scan.bank;
		if (scan.running && (scan.held || scan.locked)) {
			applyScanTune(get, set, nextScanIndex(bank, scan.index, 1), bank, {
				running: true,
				held: false,
				locked: false
			});
			return;
		}
		applyScanTune(get, set, scan.index, bank, {
			running: true,
			held: false,
			locked: false
		});
	},
	scanStop: () => {
		set({
			scan: {
				...get().scan,
				running: false,
				held: false,
				locked: false
			},
			tel: {
				...get().tel,
				lastEvent: "SCAN stop"
			}
		});
	},
	scanHold: () => {
		const scan = get().scan;
		if (!scan.running) {
			applyScanTune(get, set, scan.index, scan.bank, {
				running: true,
				held: true,
				locked: true
			});
			return;
		}
		set({
			scan: {
				...scan,
				held: true,
				locked: true
			},
			tel: {
				...get().tel,
				lastEvent: "SCAN HOLD"
			}
		});
	},
	scanSkip: () => {
		const scan = get().scan;
		applyScanTune(get, set, nextScanIndex(scan.bank, scan.index, 1), scan.bank, {
			running: scan.running || true,
			held: false,
			locked: false
		});
	},
	scanSetBank: (id) => {
		const bank = bankOf(String(id));
		applyScanTune(get, set, 0, bank, {
			running: get().scan.running,
			held: false,
			locked: false,
			bank
		});
	}
}));
function QuickMenu() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const panel = (0, import_react.useRef)(null);
	const native = isNativeApk();
	const listen = useApp((s) => s.sdr.audio || s.usb.listen);
	const usbRx = useApp((s) => s.usb.rx);
	const pipeline = useApp((s) => s.tel.pipelineActive);
	const paused = useApp((s) => s.sdr.paused);
	const hotZones = useApp((s) => s.hotZones);
	const mode = useApp((s) => s.mode);
	const volume = useApp((s) => s.sdr.volume);
	const squelch = useApp((s) => s.sdr.squelch);
	const preset = useApp((s) => s.sdr.preset);
	const toggleAudio = useApp((s) => s.toggleAudio);
	const setUsbRx = useApp((s) => s.usbRx);
	const setPipeline = useApp((s) => s.setPipeline);
	const togglePause = useApp((s) => s.togglePause);
	const setHotZones = useApp((s) => s.setHotZones);
	const setMode = useApp((s) => s.setMode);
	const setVolume = useApp((s) => s.setVolume);
	const setSquelch = useApp((s) => s.setSquelch);
	const capture = useApp((s) => s.capture);
	const usbScan = useApp((s) => s.usbScan);
	const usbOpen = useApp((s) => s.usbOpen);
	const applyPreset = useApp((s) => s.applyPreset);
	const setView = useApp((s) => s.setView);
	const scan = useApp((s) => s.scan);
	const scanStart = useApp((s) => s.scanStart);
	const scanHold = useApp((s) => s.scanHold);
	const scanSkip = useApp((s) => s.scanSkip);
	const scanStop = useApp((s) => s.scanStop);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		const onDown = (e) => {
			if (panel.current && !panel.current.contains(e.target)) setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		const id = window.setTimeout(() => window.addEventListener("pointerdown", onDown), 0);
		return () => {
			window.clearTimeout(id);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("pointerdown", onDown);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: panel,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			size: "icon",
			variant: "outline",
			"aria-label": open ? "Close quick settings" : "Open quick settings",
			"aria-expanded": open,
			onClick: () => setOpen((v) => !v),
			className: "size-11 shrink-0",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				className: "size-5",
				strokeWidth: 2
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
				className: "size-5",
				strokeWidth: 2
			})
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "menu-enter absolute left-0 top-[calc(100%+0.5rem)] z-40 max-h-[min(70dvh,36rem)] w-[min(20.5rem,calc(100vw-2rem))] overflow-y-auto rounded-xl bg-card p-3 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted",
					children: "Quick settings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					label: "Listen",
					checked: listen,
					onCheckedChange: () => toggleAudio()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					label: "USB RX",
					checked: usbRx,
					disabled: !native,
					onCheckedChange: (on) => setUsbRx(on)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					label: "Pipeline",
					checked: pipeline,
					onCheckedChange: (on) => setPipeline(on)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					label: "Pause RF",
					checked: paused,
					onCheckedChange: () => togglePause()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					label: "Hot zones",
					checked: hotZones,
					onCheckedChange: setHotZones
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					label: "Scanner",
					checked: scan.running && !scan.held,
					onCheckedChange: (on) => on ? scanStart() : scanStop()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 space-y-2 border-t border-border pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotSlider, {
						label: "Volume",
						min: 0,
						max: 100,
						value: Math.round(volume * 100),
						display: `${Math.round(volume * 100)}%`,
						onChange: (n) => setVolume(n / 100)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotSlider, {
						label: "Squelch",
						min: 0,
						max: 100,
						value: Math.round(squelch * 100),
						display: String(Math.round(squelch * 100)),
						onChange: (n) => setSquelch(n / 100)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-3 gap-1.5 border-t border-border pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: mode === "standalone" ? "primary" : "outline",
							onClick: () => setMode("standalone"),
							children: "Handset"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: mode === "simulated" ? "primary" : "outline",
							onClick: () => setMode("simulated"),
							children: "Sim"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: mode === "live" ? "primary" : "outline",
							onClick: () => setMode("live"),
							children: "Alpha"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-2 gap-1.5",
					children: PRESETS.filter((p) => [
						"ksty",
						"nws",
						"sheriff",
						"airband"
					].includes(p.id)).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: preset === p.id ? "primary" : "outline",
						onClick: () => applyPreset(p.id),
						children: p.label
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-4 gap-1.5 border-t border-border pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: scan.running && !scan.held ? "primary" : "outline",
							onClick: scanStart,
							children: "Scan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: scan.held ? "primary" : "outline",
							onClick: scanHold,
							children: "Hold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: "outline",
							onClick: scanSkip,
							children: "Skip"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "px-1 text-[0.6875rem]",
							variant: "outline",
							onClick: scanStop,
							children: "Stop"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-2 gap-1.5 border-t border-border pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: capture,
							children: "Seal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: usbScan,
							disabled: !native,
							children: "Scan OTG"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => usbOpen("hackrf"),
							disabled: !native,
							children: "Open RF"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => {
								setView("cli");
								setOpen(false);
							},
							children: "CLI"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.625rem] leading-relaxed text-subtle",
					children: "Red pulse = you can tap it. GPU compositor on this Pixel — GrapheneOS has no TPU/JNI path."
				})
			]
		}) : null]
	});
}
function Panel({ title, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("panel-cv rounded-xl bg-card p-4 shadow-[var(--shadow-border)]", className),
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
	const setView = useApp((s) => s.setView);
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
					tone: mode === "live" ? liveOk ? "ok" : "warn" : mode === "standalone" ? "ok" : "default",
					children: mode === "live" ? liveOk ? "LIVE" : "LIVE · retry" : mode === "standalone" ? "HANDSET" : "SIMULATED"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm leading-relaxed text-muted",
						children: "This Pixel is a full SDR control stack. Handset mode runs HackRF One / PortaPack over USB-C OTG with onboard GNSS — Alpha is optional. Simulator is the Front Range offline twin. Live mode polls the Pi 5."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "px-2 text-xs",
								variant: mode === "standalone" ? "primary" : "outline",
								onClick: () => setMode("standalone"),
								children: "Handset"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "px-2 text-xs",
								variant: mode === "simulated" ? "primary" : "outline",
								onClick: () => setMode("simulated"),
								children: "Simulator"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "px-2 text-xs",
								variant: mode === "live" ? "primary" : "outline",
								onClick: () => setMode("live"),
								children: "Alpha"
							})
						]
					}),
					liveError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-danger",
						children: liveError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: native ? "This signed APK owns a LAN bridge. Join PiRepo, then Save and probe — HTTP to 10.42.0.1 is allowed from the handset." : "Hosted HTTPS cannot reach an HTTP LAN address. Sideload the Pixel APK on GrapheneOS for LIVE Alpha. Mixed-content blocks are expected from a public host."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3 w-full",
						variant: "outline",
						onClick: () => setView("cli"),
						children: "CLI · Termux / Debian aliases"
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
						children: "Pixel 9 Pro XL is USB-C host. No JNI — HackRF talks vendor requests. PortaPack is an SPI hat; USB is still 1d50:6089. Plug in and the radio auto-connects."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "USB-C OTG adapter. Unlock the phone. GrapheneOS → USB controlled by this device." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plug HackRF One / PortaPack. Grant USB once. RX arms itself. RF → FM 98.1 → Listen. WFM comes out the speaker." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No GPSDO? Pixel GNSS stamps captures. Pi 5 LBE-1421 stays Tier-1 when Alpha is live." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "HamGeek AD9363 / PlutoSDR+: firmware usb_ether=ecm (RNDIS will not enumerate IIO). Then 192.168.2.1:30431." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "App info → Network → Allow. Location for GNSS stamps. No extra native libraries; 16 KB pages are a non-issue." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "HackRF / PortaPack",
						value: "1d50:6089"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Pluto / AD9363",
						value: "0456:b673"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Default rate",
						value: "2.048 Msps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Demod",
						value: "WFM · NFM · AM · USB · LSB · CW"
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
								". USB host, HackRF demod, Pixel GNSS, HDF5 chain, and C2 listener are in-process. Grant location and USB when prompted. Alpha is optional."
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Join PiRepo (10.42.0.0/24) only if you want Alpha. Otherwise Link → Handset. RF → FM 98.1 → Listen." })
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
	const mode = useApp((s) => s.mode);
	const commands = useApp((s) => s.commands);
	const captures = useApp((s) => s.captures);
	const resetBaseline = useApp((s) => s.resetBaseline);
	const setHalMode = useApp((s) => s.setHalMode);
	const setPipeline = useApp((s) => s.setPipeline);
	const sealPipeline = useApp((s) => s.sealPipeline);
	const rotatePipeline = useApp((s) => s.rotatePipeline);
	const native = isNativeApk();
	const gnss = tel.pixel.lat != null;
	const alpha = mode === "live";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: alpha ? "Timing authority · LBE-1421" : "Timing · Pixel GNSS",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: alpha ? tel.timingHealthy ? "ok" : "danger" : gnss ? "ok" : "warn",
					children: alpha ? tel.timingHealthy ? "LOCKED" : "DEGRADED" : gnss ? "GNSS" : "SEARCH"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: alpha ? "GPSDO" : "Pixel GNSS",
						value: alpha ? tel.gpsLock ? "3D" : "NONE" : gnss ? "3D" : "NONE",
						tone: (alpha ? tel.gpsLock : gnss) ? "ok" : "danger"
					}),
					gnss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Fix",
						value: `${tel.pixel.lat.toFixed(5)}, ${tel.pixel.lon.toFixed(5)}`,
						tone: "primary"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Acc",
						value: tel.pixel.accM != null ? `${tel.pixel.accM.toFixed(1)} m` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Alt",
						value: tel.pixel.alt != null ? `${tel.pixel.alt.toFixed(0)} m` : "—"
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
						value: alpha ? "PPS · pin 24 / GPIO8" : "handset · no PPS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "REF",
						value: alpha ? "10 MHz → EXT_REF_CLK" : "TCXO internal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: alpha ? "Pi 5 remains Tier-1 timing/SDR/HDF5 authority. This Pixel cannot override GPSDO or promote USB IQ to institutional PRIMARY." : "No GPSDO required. Pixel GNSS stamps this independent node. When Alpha is live, LBE-1421 on the Pi 5 is still the only timing authority that can promote PRIMARY."
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
var CoherenceDial = (0, import_react.memo)(function CoherenceDial({ r, phases, className }) {
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
});
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
function Waterfall({ centerHz, spanHz, floorDbm, ceilDbm, palette, compact = false, onTune }) {
	const wf = (0, import_react.useRef)(null);
	const sp = (0, import_react.useRef)(null);
	const lastFrame = (0, import_react.useRef)(-1);
	const [cursor, setCursor] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let row = null;
		let hidden = document.hidden;
		const onVis = () => {
			hidden = document.hidden;
		};
		document.addEventListener("visibilitychange", onVis);
		const paint = () => {
			raf = requestAnimationFrame(paint);
			if (hidden) return;
			const frame = rfBus.frame();
			if (frame === lastFrame.current) return;
			lastFrame.current = frame;
			const wfc = wf.current;
			const spc = sp.current;
			if (!wfc || !spc) return;
			const wctx = wfc.getContext("2d", {
				alpha: false,
				desynchronized: true
			});
			const sctx = spc.getContext("2d", {
				alpha: true,
				desynchronized: true
			});
			if (!wctx || !sctx) return;
			if (wfc.width !== 192 || wfc.height !== 64) {
				wfc.width = 192;
				wfc.height = 64;
			}
			const range = Math.max(5, ceilDbm - floorDbm);
			if (!row || row.width !== 192) row = wctx.createImageData(192, 1);
			const bins = rfBus.bins;
			const data = row.data;
			for (let x = 0; x < 192; x++) {
				const [r, g, b] = sampleMap(lift((bins[x] - floorDbm) / range), palette);
				const i = x * 4;
				data[i] = r;
				data[i + 1] = g;
				data[i + 2] = b;
				data[i + 3] = 255;
			}
			wctx.drawImage(wfc, 0, 0, 192, 63, 0, 1, 192, 63);
			wctx.putImageData(row, 0, 0);
			const dpr = Math.min(1.25, window.devicePixelRatio || 1);
			const cssW = spc.clientWidth || 320;
			const cssH = spc.clientHeight || 88;
			const tw = Math.floor(cssW * dpr);
			const th = Math.floor(cssH * dpr);
			if (spc.width !== tw || spc.height !== th) {
				spc.width = tw;
				spc.height = th;
			}
			sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			sctx.clearRect(0, 0, cssW, cssH);
			const ny = (v) => cssH - (v - floorDbm) / range * cssH;
			sctx.strokeStyle = "rgba(236, 238, 241, 0.06)";
			sctx.lineWidth = 1;
			for (const db of [
				-90,
				-70,
				-50,
				-30
			]) {
				if (db <= floorDbm || db >= ceilDbm) continue;
				const y = ny(db);
				sctx.beginPath();
				sctx.moveTo(0, y);
				sctx.lineTo(cssW, y);
				sctx.stroke();
			}
			sctx.beginPath();
			sctx.moveTo(cssW / 2, 0);
			sctx.lineTo(cssW / 2, cssH);
			sctx.strokeStyle = "rgba(142, 180, 173, 0.28)";
			sctx.stroke();
			sctx.beginPath();
			for (let i = 0; i < 192; i++) {
				const x = i / 191 * cssW;
				const y = ny(bins[i] ?? floorDbm);
				if (i === 0) sctx.moveTo(x, y);
				else sctx.lineTo(x, y);
			}
			if (!compact) {
				sctx.lineTo(cssW, cssH);
				sctx.lineTo(0, cssH);
				sctx.closePath();
				sctx.fillStyle = "rgba(142, 180, 173, 0.18)";
				sctx.fill();
				sctx.beginPath();
				for (let i = 0; i < 192; i++) {
					const x = i / 191 * cssW;
					const y = ny(bins[i] ?? floorDbm);
					if (i === 0) sctx.moveTo(x, y);
					else sctx.lineTo(x, y);
				}
			}
			sctx.strokeStyle = "rgba(142, 180, 173, 0.95)";
			sctx.lineWidth = 1.5;
			sctx.stroke();
			const peak = rfBus.peakHold;
			sctx.beginPath();
			for (let i = 0; i < 192; i++) {
				const x = i / 191 * cssW;
				const y = ny(peak[i] ?? floorDbm);
				if (i === 0) sctx.moveTo(x, y);
				else sctx.lineTo(x, y);
			}
			sctx.strokeStyle = "rgba(200, 204, 210, 0.45)";
			sctx.setLineDash([3, 4]);
			sctx.lineWidth = 1;
			sctx.stroke();
			sctx.setLineDash([]);
		};
		raf = requestAnimationFrame(paint);
		return () => {
			cancelAnimationFrame(raf);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, [
		floorDbm,
		ceilDbm,
		palette,
		compact
	]);
	const lo = centerHz - spanHz / 2;
	const hi = centerHz + spanHz / 2;
	const hzAt = (clientX, target) => {
		const rect = target.getBoundingClientRect();
		const t = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
		return lo + t * spanHz;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rf-scope overflow-hidden rounded-lg bg-background",
		"data-hot": true,
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
	const toggleAudio = useApp((s) => s.toggleAudio);
	const liveError = useApp((s) => s.liveError);
	const setCenterHz = useApp((s) => s.setCenterHz);
	const setView = useApp((s) => s.setView);
	const scan = useApp((s) => s.scan);
	const scanStart = useApp((s) => s.scanStart);
	const scanStop = useApp((s) => s.scanStop);
	const native = isNativeApk();
	const liveUsb = usb.rx && usb.source === "usb";
	const listening = sdr.audio || usb.listen;
	const gnss = tel.pixel.lat != null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			!native ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: APK_HREF,
				download: RELEASE.apk,
				"data-hot": true,
				className: "flex min-h-11 items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "Install Pixel APK · HackRF Listen"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: gnss || tel.gpsLock ? "ok" : "danger",
							children: mode === "live" ? tel.gpsLock ? "GPSDO lock" : "GPSDO search" : gnss ? "Pixel GNSS" : "GNSS search"
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
							tone: listening ? "ok" : liveUsb ? "ok" : mode === "live" ? "primary" : "default",
							children: listening ? "LISTEN" : liveUsb ? "USB RX" : mode === "live" ? "LIVE" : mode === "standalone" ? "HANDSET" : "SIM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							tone: scan.running ? scan.locked ? "ok" : scan.held ? "warn" : "primary" : "default",
							children: scan.running ? scan.held ? "HOLD" : scan.locked ? "SCAN LOCK" : "SCAN" : "SCANNER"
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
				title: liveUsb ? "HackRF RF" : mode === "standalone" ? "Handset RF" : mode === "live" ? "Alpha RF" : "Sim RF",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => setView("sdr"),
					children: "Open RF"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, {
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
							label: "GNSS",
							value: gnss ? `${tel.pixel.lat.toFixed(4)}, ${tel.pixel.lon.toFixed(4)}` : "no fix",
							tone: gnss ? "ok" : "warn"
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
								variant: listening ? "primary" : "outline",
								onClick: toggleAudio,
								children: listening ? "Mute" : "Listen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: usb.rx ? "primary" : "outline",
								onClick: () => usbRx(!usb.rx),
								disabled: !native,
								children: usb.rx ? "USB RX on" : "USB RX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: scan.running ? "primary" : "outline",
								onClick: () => scan.running ? scanStop() : scanStart(),
								children: scan.running ? scan.locked ? "Scanner lock" : "Scanner on" : "Start scanner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => setView("cli"),
								children: "CLI"
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
function ScannerPanel() {
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
	const upcoming = [
		1,
		2,
		3,
		4
	].map((off) => scanChannelAt(scan.bank, scan.index + off)).filter((n) => !!n).filter((n) => n.id !== ch?.id);
	const liveUsb = usb.rx && usb.source === "usb";
	const tone = !scan.running ? "default" : scan.held ? "warn" : scan.locked ? "ok" : "primary";
	const status = !scan.running ? "IDLE" : scan.held ? "HOLD" : scan.locked ? "LOCK" : "SEARCH";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Scanner · Fremont analog",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
			tone,
			children: status
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs leading-relaxed text-muted",
				children: "Penrose / Fremont County listen-only. SCAN hops, locks on RF, and applies demod + span so the channel actually comes in. SKIP next. HOLD stays. Encrypted P25 / ATSC left out."
			}),
			ch ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
						children: ch.service
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-3xl font-medium tabular-nums leading-none text-foreground",
						children: [formatScanMhz(ch.hz), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-sm font-normal text-muted",
							children: ch.hz >= 2e6 ? "MHz" : "kHz"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 font-mono text-xs text-primary",
						children: [
							ch.label,
							" · ",
							ch.demod,
							" · ",
							(ch.spanHz / 1e3).toFixed(0),
							" kHz"
						]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: scan.running && !scan.held ? "primary" : "outline",
						onClick: scanStart,
						children: "Scan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: scan.held ? "primary" : "outline",
						onClick: scanHold,
						disabled: !scan.running && !ch,
						children: "Hold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: scanSkip,
						children: "Skip"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: scanStop,
						disabled: !scan.running,
						children: "Stop"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: SCAN_BANKS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: scan.bank === b.id ? "primary" : "ghost",
					onClick: () => scanSetBank(b.id),
					children: b.label
				}, b.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-x-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Bank",
						value: `${scan.bank} · ${list.length}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "SNR",
						value: `${tel.snrDb.toFixed(1)} dB`,
						tone: scan.locked ? "ok" : tel.snrDb > 12 ? "warn" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Peak",
						value: formatHz(tel.peakHz),
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "RF",
						value: liveUsb ? "HackRF" : "sim",
						tone: liveUsb ? "ok" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Tune",
						value: `${(sdr.centerHz / 1e6).toFixed(3)} ${sdr.demod}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Lock ≥",
						value: ch ? `${ch.lockSnr} dB` : "—"
					})
				]
			}),
			upcoming.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-1 border-t border-border pt-3",
				children: upcoming.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-3 font-mono text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: n.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						n.demod,
						" · ",
						formatScanMhz(n.hz)
					] })]
				}, n.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[0.625rem] leading-relaxed text-subtle",
				children: SCAN_LEGAL
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
var PRESET_GROUPS = [
	{
		label: "Broadcast",
		ids: [
			"fm_broadcast",
			"ksty",
			"fm_887",
			"fm_1073",
			"am_broadcast"
		]
	},
	{
		label: "VHF / UHF",
		ids: [
			"nws",
			"sheriff",
			"airband",
			"marine",
			"2m_call",
			"70cm",
			"gmrs"
		]
	},
	{
		label: "HF",
		ids: [
			"cb",
			"20m_usb",
			"40m_lsb",
			"40m_cw"
		]
	},
	{
		label: "Data",
		ids: ["adsb"]
	}
];
function fmtStep(hz) {
	const sign = hz < 0 ? "−" : "+";
	const a = Math.abs(hz);
	if (a >= 1e6) return `${sign}${a / 1e6}M`;
	if (a >= 1e3) return `${sign}${a / 1e3}k`;
	return `${sign}${a}`;
}
function SdrView() {
	const sdr = useApp((s) => s.sdr);
	const tel = useApp((s) => s.tel);
	const usb = useApp((s) => s.usb);
	const mode = useApp((s) => s.mode);
	const setCenterHz = useApp((s) => s.setCenterHz);
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
	const setVolume = useApp((s) => s.setVolume);
	const setSquelch = useApp((s) => s.setSquelch);
	const stepHz = useApp((s) => s.stepHz);
	const usbScan = useApp((s) => s.usbScan);
	const usbOpen = useApp((s) => s.usbOpen);
	const usbClose = useApp((s) => s.usbClose);
	const usbRx = useApp((s) => s.usbRx);
	const [mhz, setMhz] = (0, import_react.useState)("");
	const native = isNativeApk();
	const liveUsb = usb.rx && usb.source === "usb";
	const listening = sdr.audio || usb.listen;
	const squelched = Boolean(liveUsb && usb.muted);
	const steps = STEP_HZ[sdr.demod];
	const grouped = (0, import_react.useMemo)(() => PRESET_GROUPS.map((g) => ({
		...g,
		items: g.ids.map((id) => PRESETS.find((p) => p.id === id)).filter(Boolean)
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "HackRF · PortaPack",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: listening ? "ok" : liveUsb ? "ok" : usb.open ? "warn" : "default",
					children: listening ? "LISTEN" : liveUsb ? "RX" : usb.open ? "OPEN" : native ? "OTG" : "PWA"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs leading-relaxed text-muted",
						children: native ? "USB-C OTG auto-connects. Listen demodulates through the Pixel speaker. No Alpha required." : "Same instrument as the APK. Sideload on GrapheneOS for real HackRF IQ and speaker demod."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Radio",
						value: usb.board || DEVICE_LABEL[sdr.device],
						tone: usb.open ? "primary" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Audio",
						value: squelched ? "squelched" : listening ? `${sdr.demod} · speaker` : "muted",
						tone: squelched ? "warn" : listening ? "ok" : "default"
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
								d.name,
								d.hasPermission === false ? " · need grant" : ""
							]
						}, d.deviceId))
					}) : null,
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
								onClick: () => usbOpen("hackrf"),
								disabled: !native,
								children: "Open HackRF"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScannerPanel, {}),
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
							className: "text-right font-mono text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								sdr.demod,
								" · ",
								(sdr.spanHz / 1e6).toFixed(2),
								" MHz"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-primary",
								children: DEVICE_LABEL.hackrf1.split(" / ")[0]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mb-3 h-12 w-full text-base",
						variant: listening ? "primary" : "outline",
						onClick: toggleAudio,
						children: listening ? squelched ? "Listening · squelched" : `Listening · ${sdr.demod}` : `Listen · ${sdr.demod}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-2",
						children: steps.map((hz) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => stepHz(hz),
							children: fmtStep(hz)
						}, hz))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-4 gap-2",
						children: [
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: cyclePalette,
								children: ["Pal ", sdr.palette + 1]
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotSlider, {
						label: "Volume",
						min: 0,
						max: 100,
						value: Math.round(sdr.volume * 100),
						display: `${Math.round(sdr.volume * 100)}%`,
						onChange: (n) => setVolume(n / 100)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotSlider, {
							label: "Squelch",
							min: 0,
							max: 100,
							value: Math.round(sdr.squelch * 100),
							display: String(Math.round(sdr.squelch * 100)),
							onChange: (n) => setSquelch(n / 100)
						})
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
						children: liveUsb ? "USB" : mode === "standalone" ? "HANDSET" : "SIM"
					})]
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waterfall, {
						centerHz: sdr.centerHz,
						spanHz: sdr.spanHz,
						floorDbm: sdr.floorDbm,
						ceilDbm: sdr.ceilDbm,
						palette: sdr.palette,
						onTune: setCenterHz
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: liveUsb ? "Live HackRF bins · tap to retune. Dashed trace is peak-hold." : "Tap the waterfall to retune. Dashed trace is peak-hold."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Presets",
				children: grouped.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 last:mb-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1.5 text-[0.6875rem] uppercase tracking-[0.14em] text-muted",
						children: g.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: g.items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: sdr.preset === p.id ? "primary" : "outline",
							size: "sm",
							onClick: () => applyPreset(p.id),
							children: [p.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.625rem] opacity-70",
								children: p.demod
							})]
						}, p.id))
					})]
				}, g.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Front end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex flex-wrap gap-1.5",
						children: DEMODS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: sdr.demod === d ? "primary" : "ghost",
							onClick: () => setDemod(d),
							children: d
						}, d))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotSlider, {
						label: "LNA",
						min: 0,
						max: LNA_STEPS.length - 1,
						value: Math.max(0, LNA_STEPS.indexOf(sdr.lnaGain)),
						display: `${sdr.lnaGain} dB`,
						onChange: (n) => setGain("lna", LNA_STEPS[n] ?? 24)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotSlider, {
							label: "VGA",
							min: 0,
							max: VGA_STEPS.length - 1,
							value: Math.max(0, VGA_STEPS.indexOf(sdr.vgaGain)),
							display: `${sdr.vgaGain} dB`,
							onChange: (n) => setGain("vga", VGA_STEPS[n] ?? 32)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Device",
						value: ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-1 rounded-md",
						"data-hot": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sdr.device,
							onChange: (e) => setDevice(e.target.value),
							className: "h-11 w-full rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "hackrf1",
									children: "HackRF One / PortaPack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pluto_iio",
									children: "PlutoSDR+ / HamGeek AD9363"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "libresdr",
									children: "LibreSDR"
								})
							]
						})
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
						children: "This handset issues capability envelopes and can run without Alpha. Local USB SDR executes here. Alpha timing, GPSDO, and institutional PRIMARY stay on the Pi 5 when that node is live."
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
						children: native ? "SensorHub at UI rate (~16 Hz). Pixel GNSS stamps this node when the GPSDO is absent. Alpha may poll /telemetry — it is not required." : "On GrapheneOS, grant location. Magnetometer uses the Generic Sensor API when the OS allows it; the APK reads ICM45631 / MMC5616 / ICP20100 natively."
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
var CLI_HELP = `dslv — DSLV-ZPDI CLI ${RELEASE.version}
status                 node / sdr / pipeline
sensors                Pixel GNSS mag IMU baro
sdr scan|open|close|auto|rx on|off
sdr tune <mhz>         e.g. 98.1  146.52  7.2
sdr demod WFM|NFM|AM|USB|LSB|CW|RAW
sdr gain lna|vga <db>
sdr listen on|off      speaker demod
sdr preset <id>        fm_broadcast ksty nws sheriff airband marine 2m 70cm gmrs am cb 20m_usb 40m_lsb 40m_cw adsb
sdr spectrum
scan start|stop|next|hold|bank|list
listen on|off
capture [note]
pipeline start|stop|seal|rotate|stats
script list|show|run|save|delete
termux status|install|debian|run <cmd>
tools                  JSON function defs for agents
doctor
Aliases: dslv-status dslv-listen dslv-mute dslv-tune dslv-capture dslv-sensors dslv-spectrum dslv-scan
Prefix ! to send a line to Termux (APK). Add --json for machine output.
USB IQ is SECONDARY. Pi 5 remains Tier-1. Analog scanner is RX-only.`;
var INSTALL_TERMUX = "curl -fsS http://127.0.0.1:8444/cli/install.sh | sh";
var INSTALL_DEBIAN = "curl -fsS http://127.0.0.1:8444/cli/install.sh | DEST=/usr/local/bin sh";
var INSTALL_FILE = `/dslv-termux-install.sh`;
var ALIASES = {
	"dslv-status": "status",
	"dslv-listen": "listen",
	"dslv-mute": "mute",
	"dslv-tune": "sdr tune",
	"dslv-capture": "capture",
	"dslv-sensors": "sensors",
	"dslv-spectrum": "sdr spectrum",
	"dslv-help": "help",
	"dslv-scan": "scan start"
};
var DEFAULT_SCRIPTS = [
	{
		name: "fm-watch",
		steps: [
			{
				id: "1",
				op: "preset",
				arg: "fm_broadcast"
			},
			{
				id: "2",
				op: "listen",
				arg: "on"
			},
			{
				id: "3",
				op: "wait",
				ms: 8e3
			},
			{
				id: "4",
				op: "capture",
				arg: "fm-watch"
			},
			{
				id: "5",
				op: "mute"
			}
		]
	},
	{
		name: "wx-net",
		steps: [{
			id: "1",
			op: "preset",
			arg: "nws"
		}, {
			id: "2",
			op: "listen",
			arg: "on"
		}]
	},
	{
		name: "otg-arm",
		steps: [{
			id: "1",
			op: "scan"
		}, {
			id: "2",
			op: "rx",
			arg: "on"
		}]
	},
	{
		name: "fremont-scan",
		steps: [{
			id: "1",
			op: "scan-bank",
			arg: "all"
		}, {
			id: "2",
			op: "scan-start"
		}]
	},
	{
		name: "wx-scan",
		steps: [{
			id: "1",
			op: "scan-bank",
			arg: "noaa"
		}, {
			id: "2",
			op: "scan-start"
		}]
	}
];
var PALETTE = [
	{
		op: "preset",
		label: "Preset",
		arg: "fm_broadcast"
	},
	{
		op: "tune",
		label: "Tune",
		arg: "98.1"
	},
	{
		op: "demod",
		label: "Demod",
		arg: "WFM"
	},
	{
		op: "listen",
		label: "Listen"
	},
	{
		op: "mute",
		label: "Mute"
	},
	{
		op: "rx",
		label: "RX on",
		arg: "on"
	},
	{
		op: "scan",
		label: "OTG scan"
	},
	{
		op: "scan-start",
		label: "Scan start"
	},
	{
		op: "scan-skip",
		label: "Scan skip"
	},
	{
		op: "wait",
		label: "Wait",
		ms: 2e3
	},
	{
		op: "capture",
		label: "Capture"
	},
	{
		op: "pipeline",
		label: "Pipeline",
		arg: "start"
	}
];
function tokenize(line) {
	const out = [];
	let cur = "";
	let quote = false;
	for (const c of line) {
		if (c === "\"") {
			quote = !quote;
			continue;
		}
		if (!quote && /\s/.test(c)) {
			if (cur) out.push(cur);
			cur = "";
			continue;
		}
		cur += c;
	}
	if (cur) out.push(cur);
	return out;
}
function parseHz(s) {
	let t = s.trim().toLowerCase().replace(/_/g, "");
	let mul = 1;
	if (t.endsWith("ghz")) {
		mul = 1e9;
		t = t.slice(0, -3);
	} else if (t.endsWith("mhz")) {
		mul = 1e6;
		t = t.slice(0, -3);
	} else if (t.endsWith("khz")) {
		mul = 1e3;
		t = t.slice(0, -3);
	} else if (t.endsWith("hz")) t = t.slice(0, -2);
	else if (t.endsWith("m")) {
		mul = 1e6;
		t = t.slice(0, -1);
	} else if (t.endsWith("k")) {
		mul = 1e3;
		t = t.slice(0, -1);
	}
	const v = Number(t);
	if (!Number.isFinite(v)) throw new Error("bad frequency " + s);
	if (mul === 1 && v < 1e4) mul = 1e6;
	return Math.round(v * mul);
}
function stepToLine(step) {
	if (step.cmd) return step.cmd.replace(/^dslv\s+/, "");
	switch (step.op) {
		case "preset": return `sdr preset ${step.arg ?? "fm_broadcast"}`;
		case "tune": return `sdr tune ${step.mhz ?? step.arg ?? 98.1}`;
		case "demod": return `sdr demod ${step.arg ?? "WFM"}`;
		case "listen": return `listen ${step.arg ?? "on"}`;
		case "mute": return "listen off";
		case "rx": return `sdr rx ${step.arg ?? "on"}`;
		case "scan": return "sdr scan";
		case "scan-start": return "scan start";
		case "scan-stop": return "scan stop";
		case "scan-skip": return "scan next";
		case "scan-hold": return "scan hold";
		case "scan-bank": return `scan bank ${step.arg ?? "all"}`;
		case "wait": return `wait ${step.ms ?? 1e3}`;
		case "capture": return `capture ${step.arg ?? "script"}`;
		case "pipeline": return `pipeline ${step.arg ?? "stats"}`;
		case "gain": return `sdr gain ${step.stage ?? "lna"} ${step.db ?? 24}`;
		default: return step.op;
	}
}
function scriptToShell(doc) {
	const lines = [
		"#!/bin/sh",
		`# ${doc.name} — DSLV-ZPDI`,
		"set -e",
		"dslv doctor >/dev/null"
	];
	for (const s of doc.steps) if (s.op === "wait") lines.push(`sleep ${((s.ms ?? 1e3) / 1e3).toFixed(3)}`);
	else lines.push(`dslv ${stepToLine(s)}`);
	return lines.join("\n") + "\n";
}
function ok(text, data) {
	return {
		ok: true,
		text,
		data
	};
}
function bad(text) {
	return {
		ok: false,
		text
	};
}
function ensureListen(ctx, on) {
	if (ctx.sdr().audio !== on) ctx.toggleAudio();
}
function runCli(line, ctx) {
	const argv = tokenize(line.trim()).filter((a) => a !== "--json" && a !== "-j");
	if (argv[0] === "dslv") argv.shift();
	if (argv.length === 0) return ok(CLI_HELP);
	if (argv[0].startsWith("!")) return termuxRun((argv[0].slice(1) + " " + argv.slice(1).join(" ")).trim());
	const c0 = argv[0].toLowerCase();
	if (ALIASES[c0]) return runCli(`${ALIASES[c0]} ${argv.slice(1).join(" ")}`.trim(), ctx);
	try {
		switch (c0) {
			case "help":
			case "-h":
			case "--help": return ok(CLI_HELP);
			case "version": return ok(`DSLV-ZPDI CLI ${RELEASE.version}`, {
				version: RELEASE.version,
				node: "pixel-9-pro-xl"
			});
			case "status": return ok(JSON.stringify({
				sdr: ctx.sdr(),
				usb: ctx.usb(),
				tel: summarizeTel(ctx.tel()),
				pipe: ctx.pipe()
			}, null, 2));
			case "sensors": return ok(JSON.stringify(ctx.tel().pixel, null, 2));
			case "doctor": return doctor(ctx);
			case "tools": return ok(JSON.stringify(TOOLS, null, 2), TOOLS);
			case "commands": return ok(CLI_HELP);
			case "listen":
				ensureListen(ctx, argv[1] !== "off" && argv[1] !== "0");
				return ok(argv[1] === "off" ? "muted" : `LISTEN ${ctx.sdr().demod}`);
			case "mute":
				ensureListen(ctx, false);
				return ok("muted");
			case "preset": return doPreset(ctx, argv[1] ?? "");
			case "capture":
				ctx.capture();
				return ok("capture sealed");
			case "sdr": return sdr(ctx, argv.slice(1));
			case "scan": return scanCmd(ctx, argv.slice(1));
			case "pipeline": return pipeline(ctx, argv[1] ?? "stats");
			case "script": return scriptCmd(ctx, argv.slice(1));
			case "termux": return termuxCmd(argv.slice(1));
			case "wait": return ok(`wait ${argv[1] ?? 1e3} (use script run for delay)`);
			default: return bad(`unknown command: ${c0}  (dslv help)`);
		}
	} catch (e) {
		return bad(e instanceof Error ? e.message : String(e));
	}
}
function summarizeTel(t) {
	return {
		peakDbm: t.peakDbm,
		snrDb: t.snrDb,
		gpsLock: t.gpsLock,
		lastEvent: t.lastEvent,
		pixel: t.pixel
	};
}
function doPreset(ctx, id) {
	const p = PRESETS.find((x) => x.id === id || x.id.replace(/_/g, "") === id.replace(/[-_]/g, ""));
	if (!p) return bad("unknown preset. " + PRESETS.map((x) => x.id).join(" "));
	ctx.applyPreset(p.id);
	return ok(`preset ${p.id} ${(p.hz / 1e6).toFixed(3)} MHz ${p.demod}`);
}
function sdr(ctx, a) {
	if (!a.length) return ok(JSON.stringify(ctx.usb(), null, 2), ctx.usb());
	switch (a[0].toLowerCase()) {
		case "scan":
			ctx.usbScan();
			return ok(ctx.usb().devices.length ? JSON.stringify(ctx.usb().devices, null, 2) : "scan issued");
		case "open":
			ctx.usbOpen(a[1] ?? "hackrf");
			return ok("open " + (a[1] ?? "hackrf"));
		case "close":
			ctx.usbClose();
			return ok("closed");
		case "auto":
			try {
				nativeHost()?.usbAuto?.();
			} catch {}
			ctx.usbOpen("hackrf");
			return ok("auto");
		case "rx":
			ctx.usbRx(a[1] !== "off" && a[1] !== "0");
			return ok(a[1] === "off" ? "RX idle" : "RX");
		case "tune":
		case "freq":
		case "center": {
			if (!a[1]) return bad("usage: dslv sdr tune <mhz>");
			const hz = parseHz(a[1]);
			ctx.setCenterHz(hz);
			return ok(`tuned ${(hz / 1e6).toFixed(4)} MHz`);
		}
		case "demod": {
			const d = (a[1] ?? "").toUpperCase();
			if (![
				"WFM",
				"NFM",
				"AM",
				"USB",
				"LSB",
				"CW",
				"RAW"
			].includes(d)) return bad("demod WFM|NFM|AM|USB|LSB|CW|RAW");
			ctx.setDemod(d);
			return ok("demod " + d);
		}
		case "gain":
			if (!a[2]) return bad("usage: dslv sdr gain lna|vga <db>");
			ctx.setGain(a[1] === "vga" ? "vga" : "lna", Number(a[2]));
			return ok(`${a[1]} ${a[2]} dB`);
		case "volume":
			ctx.setVolume(Number(a[1]));
			return ok("volume " + a[1]);
		case "squelch":
			ctx.setSquelch(Number(a[1]));
			return ok("squelch " + a[1]);
		case "listen":
			ensureListen(ctx, a[1] !== "off");
			return ok(a[1] === "off" ? "muted" : "LISTEN");
		case "preset": return doPreset(ctx, a[1] ?? "");
		case "spectrum":
		case "status": return ok(JSON.stringify({
			centerHz: ctx.sdr().centerHz,
			demod: ctx.sdr().demod,
			usb: ctx.usb(),
			peakDbm: ctx.tel().peakDbm,
			snrDb: ctx.tel().snrDb
		}, null, 2));
		default: return bad("sdr ops: scan open close auto rx tune demod gain listen preset spectrum");
	}
}
function scanCmd(ctx, a) {
	const op = (a[0] ?? "status").toLowerCase();
	if (op === "list" || op === "ls") {
		const bank = bankOf(a[1] ?? ctx.scan().bank);
		const list = channelsFor(bank);
		const lines = list.map((c) => `${c.bank.padEnd(7)} ${(c.hz / 1e6).toFixed(4).padStart(10)}  ${c.demod.padEnd(4)}  ${c.label}`);
		return ok(`${list.length} analog channels · ${bank}\n${lines.join("\n")}\nlisten-only. no P25 DTRS / ATSC / encrypted.`, list);
	}
	if (op === "bank") {
		const bank = bankOf(a[1] ?? "all");
		ctx.scanSetBank(bank);
		return ok(`scan bank ${bank} · ${channelsFor(bank).length} channels`);
	}
	if (op === "start" || op === "on" || op === "run") {
		ctx.scanStart();
		return scanStatus(ctx, "SCAN start");
	}
	if (op === "stop" || op === "off") {
		ctx.scanStop();
		return scanStatus(ctx, "SCAN stop");
	}
	if (op === "next" || op === "skip" || op === "+") {
		ctx.scanSkip();
		return scanStatus(ctx, "SCAN skip");
	}
	if (op === "hold") {
		ctx.scanHold();
		return scanStatus(ctx, "SCAN hold");
	}
	if (op === "status" || op === "show") return scanStatus(ctx);
	return bad("scan ops: start stop next hold bank list status");
}
function scanStatus(ctx, prefix) {
	const s = ctx.scan();
	const ch = scanChannelAt(s.bank, s.index);
	return ok([
		prefix,
		`scan ${s.running ? s.held ? "HOLD" : s.locked ? "LOCK" : "SEARCH" : "IDLE"}`,
		`bank ${s.bank} #${s.index}`,
		ch ? `${ch.label} ${(ch.hz / 1e6).toFixed(4)} MHz ${ch.demod}` : ""
	].filter(Boolean).join(" · "), {
		scan: s,
		channel: ch
	});
}
function pipeline(ctx, op) {
	if (op === "start") ctx.setPipeline(true);
	else if (op === "stop") ctx.setPipeline(false);
	else if (op === "seal") ctx.sealPipeline();
	else if (op === "rotate") ctx.rotatePipeline();
	return ok(JSON.stringify(ctx.pipe(), null, 2), ctx.pipe());
}
function scriptCmd(ctx, a) {
	const scripts = ctx.scripts();
	if (!a.length || a[0] === "list") {
		const names = scripts.map((s) => s.name);
		return ok(names.length ? names.join("\n") : "no scripts", names);
	}
	if (a[0] === "show" && a[1]) {
		const s = scripts.find((x) => x.name === a[1]);
		return s ? ok(JSON.stringify(s, null, 2), s) : bad("no script " + a[1]);
	}
	if (a[0] === "delete" && a[1]) {
		ctx.deleteScript(a[1]);
		return ok("deleted " + a[1]);
	}
	if ((a[0] === "save" || a[0] === "put") && a[1]) return bad("save scripts from the Scripts panel");
	if (a[0] === "run" && a[1]) return {
		ok: true,
		text: `RUN ${a[1]}`,
		data: { run: a[1] }
	};
	return bad("script ops: list show run delete");
}
function termuxRun(cmd) {
	if (!isNativeApk()) return ok(`[termux] ${cmd}\nAPK-only. Sideload, then CLI → Install aliases.`);
	const r = nativeJson(() => nativeHost()?.termux?.(`run:${cmd}`));
	if (!r) return bad("Termux bridge failed");
	return {
		ok: Boolean(r.ok ?? true),
		text: String(r.text ?? r.stdout ?? JSON.stringify(r, null, 2)),
		data: r
	};
}
function termuxCmd(a) {
	const op = a[0] ?? "status";
	if (!isNativeApk()) {
		if (op === "install" || op === "debian") return ok(`On the Pixel APK:\nTermux: ${INSTALL_TERMUX}\nDebian: ${INSTALL_DEBIAN}`);
		return ok("Termux bridge is in the signed APK. Preview shell still runs dslv against the simulator.");
	}
	const arg = op === "run" ? `run:${a.slice(1).join(" ")}` : op;
	const r = nativeJson(() => nativeHost()?.termux?.(arg));
	if (!r) return bad("Termux bridge failed");
	return {
		ok: Boolean(r.ok ?? true),
		text: String(r.text ?? JSON.stringify(r, null, 2)),
		data: r
	};
}
function doctor(ctx) {
	const native = isNativeApk();
	const t = native ? nativeJson(() => nativeHost()?.termux?.("status")) : null;
	return ok([
		`native ${native ? "apk" : "pwa"}`,
		`version ${RELEASE.version}`,
		`demod ${ctx.sdr().demod} @ ${(ctx.sdr().centerHz / 1e6).toFixed(3)} MHz`,
		`usb ${ctx.usb().open ? ctx.usb().kind : "idle"}`,
		`scan ${ctx.scan().running ? ctx.scan().bank : "idle"}`,
		`termux ${t?.termux ? "yes" : native ? "not seen" : "apk-only"}`,
		`install ${INSTALL_TERMUX}`
	].join("\n"), t);
}
async function runScript(doc, ctx, onLine) {
	const log = [];
	for (const step of doc.steps) {
		if (step.op === "wait") {
			const ms = Math.min(6e4, Math.max(0, step.ms ?? 1e3));
			onLine?.(`wait ${ms}ms`);
			log.push(`wait ${ms}ms`);
			await new Promise((r) => setTimeout(r, ms));
			continue;
		}
		const line = stepToLine(step);
		const r = runCli(line, ctx);
		log.push(`$ ${line}`, r.text);
		onLine?.(`$ ${line}`);
		onLine?.(r.text);
		if (!r.ok) return {
			ok: false,
			text: log.join("\n")
		};
	}
	return {
		ok: true,
		text: log.join("\n")
	};
}
function tool(name, description, parameters) {
	return {
		type: "function",
		function: {
			name,
			description,
			parameters
		}
	};
}
var TOOLS = [
	tool("dslv_status", "DSLV-ZPDI node / SDR / pipeline snapshot", {
		type: "object",
		properties: {}
	}),
	tool("dslv_sensors", "Pixel GNSS magnetometer IMU baro", {
		type: "object",
		properties: {}
	}),
	tool("dslv_sdr_tune", "Tune HackRF center frequency in MHz", {
		type: "object",
		properties: { mhz: { type: "number" } },
		required: ["mhz"]
	}),
	tool("dslv_sdr_listen", "Start or stop speaker demod", {
		type: "object",
		properties: { on: { type: "boolean" } },
		required: ["on"]
	}),
	tool("dslv_sdr_preset", "Apply a named RF preset", {
		type: "object",
		properties: { id: { type: "string" } },
		required: ["id"]
	}),
	tool("dslv_sdr_demod", "Set demodulator", {
		type: "object",
		properties: { demod: {
			type: "string",
			enum: [
				"WFM",
				"NFM",
				"AM",
				"USB",
				"LSB",
				"CW",
				"RAW"
			]
		} },
		required: ["demod"]
	}),
	tool("dslv_capture", "Seal a capture into the HDF5 chain", {
		type: "object",
		properties: { note: { type: "string" } }
	}),
	tool("dslv_pipeline", "HDF5 pipeline control", {
		type: "object",
		properties: { op: {
			type: "string",
			enum: [
				"start",
				"stop",
				"seal",
				"rotate",
				"stats"
			]
		} },
		required: ["op"]
	}),
	tool("dslv_script_run", "Run a saved visual/CLI script", {
		type: "object",
		properties: { name: { type: "string" } },
		required: ["name"]
	}),
	tool("dslv_scan", "Fremont analog listen-only scanner", {
		type: "object",
		properties: {
			op: {
				type: "string",
				enum: [
					"start",
					"stop",
					"next",
					"hold",
					"list",
					"status"
				]
			},
			bank: {
				type: "string",
				enum: SCAN_BANKS.map((b) => b.id)
			}
		},
		required: ["op"]
	})
];
var SCRIPTS_KEY = "dslv-zpdi-scripts-v1";
var HIST_KEY = "dslv-zpdi-cli-hist-v1";
function loadScripts() {
	try {
		const raw = localStorage.getItem(SCRIPTS_KEY);
		if (!raw) return DEFAULT_SCRIPTS.map((s) => ({
			...s,
			steps: s.steps.map((x) => ({ ...x }))
		}));
		const parsed = JSON.parse(raw);
		return parsed.length ? parsed : DEFAULT_SCRIPTS;
	} catch {
		return DEFAULT_SCRIPTS;
	}
}
function saveScripts(docs) {
	try {
		localStorage.setItem(SCRIPTS_KEY, JSON.stringify(docs));
	} catch {}
	if (isNativeApk()) {
		const host = nativeHost();
		for (const d of docs) try {
			host?.cli?.(`script put ${d.name} ${JSON.stringify({
				name: d.name,
				steps: d.steps
			})}`);
		} catch {}
	}
}
function uid() {
	return Math.random().toString(36).slice(2, 8);
}
function CliView() {
	const native = isNativeApk();
	const [tab, setTab] = (0, import_react.useState)("shell");
	const [input, setInput] = (0, import_react.useState)("");
	const [lines, setLines] = (0, import_react.useState)([{
		k: "out",
		t: native ? "DSLV CLI · APK host. Type help." : "DSLV CLI · simulator. Sideload APK for Termux aliases."
	}]);
	const [hist, setHist] = (0, import_react.useState)(() => {
		try {
			return JSON.parse(localStorage.getItem("dslv-zpdi-cli-hist-v1") || "[]");
		} catch {
			return [];
		}
	});
	const [histI, setHistI] = (0, import_react.useState)(-1);
	const [scripts, setScripts] = (0, import_react.useState)(loadScripts);
	const [current, setCurrent] = (0, import_react.useState)(0);
	const [running, setRunning] = (0, import_react.useState)(false);
	const [drag, setDrag] = (0, import_react.useState)(null);
	const [installer, setInstaller] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(null);
	const logRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const get = useApp.getState;
	const ctx = (0, import_react.useMemo)(() => ({
		sdr: () => get().sdr,
		usb: () => get().usb,
		tel: () => get().tel,
		pipe: () => get().pipe,
		scan: () => get().scan,
		applyPreset: (id) => get().applyPreset(id),
		setCenterHz: (hz) => get().setCenterHz(hz),
		setDemod: (d) => get().setDemod(d),
		setGain: (w, db) => get().setGain(w, db),
		setVolume: (v) => get().setVolume(v),
		setSquelch: (v) => get().setSquelch(v),
		toggleAudio: () => get().toggleAudio(),
		usbScan: () => get().usbScan(),
		usbOpen: (h) => get().usbOpen(h),
		usbClose: () => get().usbClose(),
		usbRx: (on) => get().usbRx(on),
		capture: () => get().capture(),
		setPipeline: (on) => get().setPipeline(on),
		sealPipeline: () => get().sealPipeline(),
		rotatePipeline: () => get().rotatePipeline(),
		scanStart: () => get().scanStart(),
		scanStop: () => get().scanStop(),
		scanHold: () => get().scanHold(),
		scanSkip: () => get().scanSkip(),
		scanSetBank: (b) => get().scanSetBank(b),
		scripts: () => scripts,
		saveScript: (doc) => {
			setScripts((prev) => {
				const next = [...prev.filter((s) => s.name !== doc.name), doc];
				saveScripts(next);
				return next;
			});
		},
		deleteScript: (name) => {
			setScripts((prev) => {
				const next = prev.filter((s) => s.name !== name);
				saveScripts(next);
				return next;
			});
		}
	}), [get, scripts]);
	(0, import_react.useEffect)(() => {
		logRef.current?.scrollTo(0, logRef.current.scrollHeight);
	}, [lines]);
	(0, import_react.useEffect)(() => {
		fetch(INSTALL_FILE).then((r) => r.ok ? r.text() : Promise.reject(/* @__PURE__ */ new Error("missing installer"))).then(setInstaller).catch(() => setInstaller(""));
	}, []);
	const copyText = async (kind) => {
		const text = kind === "full" && installer ? installer : INSTALL_TERMUX;
		try {
			await navigator.clipboard.writeText(text);
		} catch {}
		setCopied(kind);
		window.setTimeout(() => setCopied(null), 2500);
	};
	const push = (k, t) => setLines((xs) => [...xs.slice(-200), {
		k,
		t
	}]);
	const exec = (raw) => {
		const line = raw.trim();
		if (!line) return;
		if (line.toLowerCase() === "clear") {
			setLines([]);
			setInput("");
			return;
		}
		push("in", `› ${line}`);
		const nextHist = [line, ...hist.filter((h) => h !== line)].slice(0, 40);
		setHist(nextHist);
		try {
			localStorage.setItem(HIST_KEY, JSON.stringify(nextHist));
		} catch {}
		setHistI(-1);
		const runMatch = line.replace(/^dslv\s+/i, "").trim().match(/^script\s+run\s+(.+)$/i);
		if (runMatch) {
			const name = runMatch[1].replace(/^["']|["']$/g, "").trim();
			const doc = scripts.find((s) => s.name === name);
			if (!doc) {
				push("err", "no script " + name);
				return;
			}
			runNamed(doc);
			return;
		}
		const r = runCli(line, ctx);
		const runName = r.data && typeof r.data === "object" && "run" in r.data ? String(r.data.run ?? "") : "";
		if (runName) {
			const doc = scripts.find((s) => s.name === runName);
			if (!doc) {
				push("err", "no script " + runName);
				return;
			}
			runNamed(doc);
			return;
		}
		push(r.ok ? "out" : "err", r.text);
	};
	const runNamed = async (doc) => {
		setRunning(true);
		push("out", `run ${doc.name} · ${doc.steps.length} steps`);
		if (!(await runScript(doc, ctx, (s) => push("out", s))).ok) push("err", "aborted");
		setRunning(false);
	};
	const doc = scripts[current] ?? scripts[0];
	const patchSteps = (steps) => {
		if (!doc) return;
		const next = scripts.map((s, i) => i === current ? {
			...s,
			steps
		} : s);
		setScripts(next);
		saveScripts(next);
	};
	const addStep = (op, arg, ms) => {
		if (!doc) {
			const created = {
				name: `script-${scripts.length + 1}`,
				steps: [{
					id: uid(),
					op,
					arg,
					ms
				}]
			};
			const next = [...scripts, created];
			setScripts(next);
			saveScripts(next);
			setCurrent(next.length - 1);
			return;
		}
		const step = {
			id: uid(),
			op,
			arg,
			ms
		};
		patchSteps([...doc.steps, step]);
	};
	const move = (i, dir) => {
		if (!doc) return;
		const j = i + dir;
		if (j < 0 || j >= doc.steps.length) return;
		const steps = [...doc.steps];
		const [x] = steps.splice(i, 1);
		steps.splice(j, 0, x);
		patchSteps(steps);
	};
	const drop = (i) => {
		if (drag == null || drag === i || !doc) return;
		const steps = [...doc.steps];
		const [x] = steps.splice(drag, 1);
		steps.splice(i, 0, x);
		patchSteps(steps);
		setDrag(null);
	};
	const termuxSt = native ? nativeJson(() => nativeHost()?.termux?.("status")) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "DSLV CLI",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: native ? "ok" : "default",
					children: native ? "HOST" : "SIM"
				}),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 text-sm leading-relaxed text-muted",
					children: [
						"Same command surface as Termux and proot Debian. CLI agents call ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-foreground",
							children: "dslv"
						}),
						" after aliases are installed. The app must be running."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						"shell",
						"scripts",
						"bridge"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: tab === t ? "primary" : "outline",
						onClick: () => setTab(t),
						children: t === "shell" ? "Shell" : t === "scripts" ? "Scripts" : "Bridge"
					}, t))
				})]
			}),
			tab === "shell" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Shell",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-4 text-primary" }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: logRef,
						className: "mb-3 h-56 overflow-auto rounded-lg bg-background px-3 py-2 font-mono text-xs leading-relaxed shadow-[var(--shadow-border)]",
						children: lines.map((ln, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: ln.k === "in" ? "text-primary" : ln.k === "err" ? "text-danger" : "text-foreground whitespace-pre-wrap",
							children: ln.t
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 flex flex-wrap gap-1.5",
						children: [
							"help",
							"status",
							"doctor",
							"sdr scan",
							"listen on",
							"listen off",
							"capture"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => exec(c),
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							exec(input);
							setInput("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "ArrowUp") {
									e.preventDefault();
									const i = Math.min(hist.length - 1, histI + 1);
									if (hist[i]) {
										setHistI(i);
										setInput(hist[i]);
									}
								}
								if (e.key === "ArrowDown") {
									e.preventDefault();
									const i = histI - 1;
									if (i < 0) {
										setHistI(-1);
										setInput("");
									} else {
										setHistI(i);
										setInput(hist[i] ?? "");
									}
								}
							},
							placeholder: "dslv status --json",
							autoCapitalize: "none",
							autoCorrect: "off",
							spellCheck: false,
							className: "h-11 min-w-0 flex-1 rounded-md bg-elevated px-3 font-mono text-sm text-foreground shadow-[var(--shadow-border)] outline-none placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "primary",
							children: "Run"
						})]
					})
				]
			}) : null,
			tab === "scripts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Palette",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs text-muted",
					children: "Tap to append. Drag rows or use arrows to reorder."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: PALETTE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => addStep(p.op, p.arg, p.ms),
						children: p.label
					}, p.op + (p.arg ?? "")))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: doc?.name ?? "Script",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: running ? "warn" : "default",
					children: running ? "RUN" : `${doc?.steps.length ?? 0} steps`
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap gap-1.5",
						children: [scripts.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: i === current ? "primary" : "outline",
							onClick: () => setCurrent(i),
							children: s.name
						}, s.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => {
								const name = `script-${scripts.length + 1}`;
								const next = [...scripts, {
									name,
									steps: []
								}];
								setScripts(next);
								saveScripts(next);
								setCurrent(next.length - 1);
							},
							children: "New"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "primary",
							disabled: running || !doc,
							onClick: () => doc && void runNamed(doc),
							children: "Run script"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								if (!doc) return;
								const sh = scriptToShell(doc);
								navigator.clipboard?.writeText(sh);
								push("out", sh);
								setTab("shell");
							},
							children: "Copy shell"
						})]
					}),
					(doc?.steps ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm text-muted",
						children: "Empty. Tap a palette op to add a step."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-1.5",
						children: (doc?.steps ?? []).map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							draggable: true,
							onDragStart: () => setDrag(i),
							onDragOver: (e) => e.preventDefault(),
							onDrop: () => drop(i),
							className: "flex items-center gap-2 rounded-lg bg-elevated px-2 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "size-4 shrink-0 text-subtle" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-16 shrink-0 font-mono text-xs text-primary",
									children: step.op
								}),
								step.op === "preset" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: step.arg,
									onChange: (e) => {
										const steps = doc.steps.map((s, n) => n === i ? {
											...s,
											arg: e.target.value
										} : s);
										patchSteps(steps);
									},
									className: "h-9 min-w-0 flex-1 rounded-md bg-background px-2 font-mono text-xs text-foreground",
									children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: p.id,
										children: p.label
									}, p.id))
								}) : step.op === "wait" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									inputMode: "numeric",
									value: step.ms ?? 1e3,
									onChange: (e) => {
										const steps = doc.steps.map((s, n) => n === i ? {
											...s,
											ms: Number(e.target.value) || 0
										} : s);
										patchSteps(steps);
									},
									className: "h-9 min-w-0 flex-1 rounded-md bg-background px-2 font-mono text-xs text-foreground"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: step.arg ?? step.cmd ?? "",
									onChange: (e) => {
										const steps = doc.steps.map((s, n) => n === i ? {
											...s,
											arg: e.target.value
										} : s);
										patchSteps(steps);
									},
									placeholder: stepToLine(step),
									className: "h-9 min-w-0 flex-1 rounded-md bg-background px-2 font-mono text-xs text-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => move(i, -1),
									children: "↑"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => move(i, 1),
									children: "↓"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => patchSteps(doc.steps.filter((_, n) => n !== i)),
									children: "×"
								})
							]
						}, step.id))
					})
				]
			})] }) : null,
			tab === "bridge" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Termux · Debian",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
					tone: termuxSt?.termux ? "ok" : "default",
					children: termuxSt?.termux ? "TERMUX" : native ? "NO APP" : "PWA"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-sm leading-relaxed text-muted",
						children: [
							"Drop this installer in Termux and press Enter. It writes ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-foreground",
								children: "dslv"
							}),
							" + aliases even if the app is closed, then wakes DSLV-ZPDI and Debian proot if you have it."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mb-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Copy installer (or download the .sh)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open Termux → paste → Enter." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Termux → Settings → Allow external apps." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Termux",
						value: termuxSt?.termux ? "present" : native ? "not installed" : "APK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Debian",
						value: "proot-distro login debian"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Content",
						value: "content://labs.dynogator.dslvzpdi.cli"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						readOnly: true,
						value: installer || "Loading installer…",
						onFocus: (e) => e.currentTarget.select(),
						spellCheck: false,
						className: "mt-3 h-40 w-full resize-none rounded-lg bg-background px-3 py-2 font-mono text-xs leading-relaxed text-foreground shadow-[var(--shadow-border)] outline-none focus-visible:ring-2 focus-visible:ring-ring",
						"aria-label": "Termux installer script"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-1 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "primary",
								disabled: !installer,
								onClick: () => void copyText("full"),
								children: copied === "full" ? "Copied — paste in Termux" : "Copy installer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: INSTALL_FILE,
								download: "dslv-termux-install.sh",
								className: "inline-flex h-11 items-center justify-center rounded-md bg-transparent px-4 text-sm font-medium text-foreground shadow-[var(--shadow-border)]",
								children: "Download dslv-termux-install.sh"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								disabled: !native,
								onClick: () => {
									const r = nativeJson(() => nativeHost()?.termux?.("install"));
									push("out", String(r?.text ?? "install issued"));
									setTab("shell");
								},
								children: "Run installer via Termux"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								disabled: !native,
								onClick: () => {
									const r = nativeJson(() => nativeHost()?.termux?.("debian"));
									push("out", String(r?.text ?? "debian install issued"));
									setTab("shell");
								},
								children: "Install into Debian proot"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								onClick: () => void copyText("one"),
								children: copied === "one" ? "Copied one-liner" : "Copy curl one-liner"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-xs leading-relaxed text-muted",
						children: [
							INSTALL_TERMUX,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							INSTALL_DEBIAN
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted",
						children: [
							"GrapheneOS will ask for RUN_COMMAND. Aliases: dslv-status, dslv-listen, dslv-mute, dslv-tune, dslv-capture, dslv-sensors, dslv-spectrum. Agents: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "dslv tools"
							}),
							" and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: "/cli/AGENTS.md"
							}),
							"."
						]
					}),
					termuxSt?.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-warn",
						children: termuxSt.hint
					}) : null
				]
			}) : null,
			tab !== "shell" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-subtle",
				children: ["help · ", CLI_HELP.split("\n")[1]]
			}) : null
		]
	});
}
/** Preview-only demod stand-in. Native APK plays real HackRF PCM via AudioTrack. */
function startSimListen(sdr) {
	const ctx = new AudioContext();
	const master = ctx.createGain();
	master.gain.value = (sdr.volume ?? .7) * .22;
	master.connect(ctx.destination);
	const noise = ctx.createBufferSource();
	const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
	const data = buf.getChannelData(0);
	let pink = 0;
	for (let i = 0; i < data.length; i++) {
		pink = .97 * pink + Math.random() * .06;
		data[i] = (Math.random() * 2 - 1) * .18 + pink;
	}
	noise.buffer = buf;
	noise.loop = true;
	const lp = ctx.createBiquadFilter();
	const hp = ctx.createBiquadFilter();
	hp.type = "highpass";
	lp.type = "lowpass";
	noise.connect(hp);
	hp.connect(lp);
	const osc = ctx.createOscillator();
	const oscGain = ctx.createGain();
	osc.connect(oscGain);
	oscGain.connect(master);
	if (sdr.demod === "WFM") {
		lp.frequency.value = 15e3;
		hp.frequency.value = 30;
		osc.type = "sine";
		osc.frequency.value = 440 + sdr.centerHz % 200;
		oscGain.gain.value = .09;
		const lfo = ctx.createOscillator();
		const lfoG = ctx.createGain();
		lfo.frequency.value = 5.2;
		lfoG.gain.value = 18;
		lfo.connect(lfoG);
		lfoG.connect(osc.frequency);
		lfo.start();
	} else if (sdr.demod === "NFM") {
		lp.frequency.value = 3400;
		hp.frequency.value = 300;
		osc.type = "sine";
		osc.frequency.value = 880;
		oscGain.gain.value = .05;
	} else if (sdr.demod === "AM") {
		lp.frequency.value = 4500;
		hp.frequency.value = 80;
		osc.type = "sine";
		osc.frequency.value = 1e3;
		oscGain.gain.value = .12;
	} else if (sdr.demod === "CW") {
		lp.frequency.value = 900;
		hp.frequency.value = 500;
		osc.type = "sine";
		osc.frequency.value = 700;
		oscGain.gain.value = .16;
		master.gain.value = (sdr.volume ?? .7) * .12;
	} else if (sdr.demod === "USB" || sdr.demod === "LSB") {
		lp.frequency.value = 2700;
		hp.frequency.value = 300;
		osc.type = "sawtooth";
		osc.frequency.value = 700;
		oscGain.gain.value = .03;
	} else {
		lp.frequency.value = 200;
		hp.frequency.value = 20;
		oscGain.gain.value = 0;
	}
	lp.connect(master);
	noise.start();
	osc.start();
	return () => {
		try {
			noise.stop();
			osc.stop();
		} catch {}
		ctx.close();
	};
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
		id: "cli",
		label: "CLI",
		icon: Terminal
	},
	{
		id: "link",
		label: "Link",
		icon: Cable
	}
];
function clockStamp() {
	const d = /* @__PURE__ */ new Date();
	return `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}:${pad2(d.getUTCSeconds())}Z`;
}
var clockCache = clockStamp();
function subscribeClock(cb) {
	clockCache = clockStamp();
	const id = window.setInterval(() => {
		clockCache = clockStamp();
		cb();
	}, 1e3);
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
	const halMode = useApp((s) => s.tel.halMode);
	const timingHealthy = useApp((s) => s.tel.timingHealthy);
	const mode = useApp((s) => s.mode);
	const sdrAudio = useApp((s) => s.sdr.audio);
	const sdrDemod = useApp((s) => s.sdr.demod);
	const sdrCenter = useApp((s) => s.sdr.centerHz);
	const sdrVolume = useApp((s) => s.sdr.volume);
	const usbRx = useApp((s) => s.usb.rx);
	const usbListen = useApp((s) => s.usb.listen);
	const scanRunning = useApp((s) => s.scan.running);
	const scanLocked = useApp((s) => s.scan.locked);
	const scanHeld = useApp((s) => s.scan.held);
	const hotZones = useApp((s) => s.hotZones);
	const clock = useClock();
	const [armed, setArmed] = (0, import_react.useState)(false);
	const linkTag = scanRunning ? scanHeld ? "HOLD" : scanLocked ? "SCAN LOCK" : "SCAN" : usbListen || sdrAudio ? "LISTEN" : usbRx ? "USB RX" : mode === "live" ? "LIVE" : mode === "standalone" ? "HANDSET" : "SIM";
	(0, import_react.useEffect)(() => {
		hydrate();
		setArmed(true);
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.hotzones = hotZones ? "on" : "off";
	}, [hotZones]);
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
		const id = window.setInterval(tick, 400);
		return () => window.clearInterval(id);
	}, [tick, armed]);
	(0, import_react.useEffect)(() => {
		if (!sdrAudio) return;
		if (isNativeApk()) return;
		return startSimListen({
			demod: sdrDemod,
			centerHz: sdrCenter,
			volume: sdrVolume
		});
	}, [
		sdrAudio,
		sdrDemod,
		sdrCenter,
		sdrVolume
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-grid flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-background/95 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickMenu, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8 shrink-0 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
									children: "DynoGator Labs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-semibold tracking-tight text-foreground",
									children: "DSLV-ZPDI"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-xs tabular-nums text-muted",
							children: clock
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-xs uppercase tracking-wide text-primary",
							children: [
								linkTag,
								" · ",
								halMode
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
						className: timingHealthy ? "text-ok" : "text-warn",
						children: timingHealthy ? "TIMING LOCK" : "TIMING DEGRADED"
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
					view === "cli" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CliView, {}) : null,
					view === "link" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkView, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 pb-[max(0.5rem,env(safe-area-inset-bottom))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-3xl grid-cols-6",
					children: NAV.map((item) => {
						const active = view === item.id;
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView(item.id),
							className: `flex h-14 w-full flex-col items-center justify-center gap-0.5 rounded-md text-xs transition-[color,transform] duration-150 ease-out active:scale-[0.96] ${active ? "text-primary" : "text-muted"}`,
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
