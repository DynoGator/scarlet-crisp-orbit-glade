//#region node_modules/.nitro/vite/services/ssr/assets/native-YXUqJOpZ.js
var RELEASE = {
	version: "5.5.0",
	versionCode: 550,
	packageId: "labs.dynogator.dslvzpdi",
	apk: "DynoGatorLabs-DSLV-ZPDI-5.5.0.apk",
	aab: "DynoGatorLabs-DSLV-ZPDI-5.5.0.aab",
	apkAlias: "DSLV-ZPDI.apk",
	aabAlias: "DSLV-ZPDI.aab",
	apkSha256: "260de6acd09a6c7cff54b1f0469b9f08c02914721d54c37040b3c826d7d9be63",
	aabSha256: "9cad3ada8e6ce2097e33d273d1ebb8ba450803a80628ae56939a872f94cbc99f",
	apkBytes: 1665192,
	aabBytes: 1644610,
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
