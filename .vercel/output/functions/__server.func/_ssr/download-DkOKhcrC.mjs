import { n as APK_HREF, r as RELEASE, t as AAB_HREF } from "./native-Cuy9Sebh.mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-DkOKhcrC.js
var import_jsx_runtime = require_jsx_runtime();
function fmtBytes(n) {
	if (!n) return "—";
	if (n < 1048576) return `${(n / 1024).toFixed(0)} KB`;
	return `${(n / 1048576).toFixed(2)} MB`;
}
function DownloadPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-dvh w-full max-w-lg px-4 py-8 pb-16 text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
				children: "DynoGator Labs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-2 text-2xl font-semibold tracking-tight",
				children: ["DSLV-ZPDI ", RELEASE.version]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: [
					"Signed Pixel 9 Pro XL package for GrapheneOS. Sideload the APK — independent HackRF One / PortaPack over USB-C OTG, real WFM/NFM/AM/SSB demod through the speaker, onboard GNSS, sensors, SPEC-007 HDF5, C2 master, and a Termux / proot Debian ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-foreground",
						children: "dslv"
					}),
					" CLI for agents. Alpha is optional. The AAB is a Play Console artifact and will not install from Files."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: APK_HREF,
					download: RELEASE.apk,
					className: "inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground",
					children: ["Download APK · ", fmtBytes(RELEASE.apkBytes)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: AAB_HREF,
					download: RELEASE.aab,
					className: "inline-flex h-12 items-center justify-center rounded-md bg-transparent px-4 text-sm font-medium text-foreground shadow-[var(--shadow-border)]",
					children: ["Download AAB · ", fmtBytes(RELEASE.aabBytes)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-2 font-mono text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Package" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-foreground",
							children: RELEASE.packageId
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Version" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "text-foreground",
							children: [
								RELEASE.version,
								" / ",
								RELEASE.versionCode
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[0.6875rem] uppercase tracking-[0.14em]",
						children: "APK SHA-256"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 break-all text-foreground",
						children: RELEASE.apkSha256
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[0.6875rem] uppercase tracking-[0.14em]",
						children: "Signer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 break-all text-foreground",
						children: RELEASE.signerSha256
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-6 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Settings → Apps → Vanadium (or Files) → Install unknown apps → Allow." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open the APK. Install anyway if GrapheneOS warns about an unknown developer." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "App info → Network → Allow. Grant Location when DSLV-ZPDI asks." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "RF → FM 98.1 → Listen. Speaker demod. Alpha is optional — Link → Handset if the Pi is dark." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"CLI → Bridge → Install Termux aliases (or Debian). Agents: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-foreground",
							children: "dslv help"
						}),
						"."
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-block text-sm text-primary",
				children: "Open dashboard"
			})
		]
	});
}
//#endregion
export { DownloadPage as component };
