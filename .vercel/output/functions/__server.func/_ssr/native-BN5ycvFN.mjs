//#region node_modules/.nitro/vite/services/ssr/assets/native-BN5ycvFN.js
var RELEASE = {
	version: "5.8.0",
	versionCode: 580,
	packageId: "labs.dynogator.dslvzpdi",
	apk: "DynoGatorLabs-DSLV-ZPDI-5.8.0.apk",
	aab: "DynoGatorLabs-DSLV-ZPDI-5.8.0.aab",
	apkAlias: "DSLV-ZPDI.apk",
	aabAlias: "DSLV-ZPDI.aab",
	apkSha256: "b688fbd37843b1317d72e8e77800008b0c6a00df7ae65f0865d014a8f9d8bd41",
	aabSha256: "189e86f21fa01ee57f49d620e4b5d521342a19141fc978961ac1a2c114c99a0c",
	apkBytes: 1725769,
	aabBytes: 1682782,
	signerSha256: "6779d030844096386e02dff6480b836903716fbb3658164515a56831b52f7f6b",
	signerDn: "CN=DynoGator Labs, OU=DSLV-ZPDI, O=Resonant Genesis LLC, L=Penrose, ST=Colorado, C=US"
};
function nativeHost() {
	try {
		if (typeof window === "undefined") return void 0;
		return window.NativeHost ?? window.AlphaBridge;
	} catch {
		return;
	}
}
function isNativeApk() {
	try {
		return Boolean(nativeHost()?.isNative?.());
	} catch {
		return false;
	}
}
function nativeRequest(method, url, body = "", bearer = "") {
	try {
		const raw = nativeHost().request(method, url, body, bearer);
		return JSON.parse(raw);
	} catch (err) {
		return {
			ok: false,
			status: 0,
			data: null,
			error: err instanceof Error ? err.message : "native bridge failed"
		};
	}
}
function nativeJson(fn) {
	try {
		const raw = fn();
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
var APK_HREF = `/releases/${RELEASE.apk}`;
var AAB_HREF = `/releases/${RELEASE.aab}`;
`${RELEASE.apkAlias}`;
`${RELEASE.aabAlias}`;
//#endregion
export { nativeHost as a, isNativeApk as i, APK_HREF as n, nativeJson as o, RELEASE as r, nativeRequest as s, AAB_HREF as t };
