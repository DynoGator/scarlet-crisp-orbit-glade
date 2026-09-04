//#region node_modules/.nitro/vite/services/ssr/assets/native-CVOnj4sL.js
var RELEASE = {
	version: "5.9.0",
	versionCode: 590,
	packageId: "labs.dynogator.dslvzpdi",
	apk: "DynoGatorLabs-DSLV-ZPDI-5.9.0.apk",
	aab: "DynoGatorLabs-DSLV-ZPDI-5.9.0.aab",
	apkAlias: "DSLV-ZPDI.apk",
	aabAlias: "DSLV-ZPDI.aab",
	apkSha256: "8a666448f961887d9c28acbb601bb96e3675aa335c38b21d8e13fd538fc79b12",
	aabSha256: "4d2efc60fcbcdbf651b856187c42f5440ecb28ba5fbff2149dfd886096f5e613",
	apkBytes: 1741325,
	aabBytes: 1692125,
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
