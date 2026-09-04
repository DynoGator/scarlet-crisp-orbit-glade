export const RELEASE = {
  version: "5.9.0",
  versionCode: 590,
  packageId: "labs.dynogator.dslvzpdi",
  apk: "DynoGatorLabs-DSLV-ZPDI-5.9.0.apk",
  aab: "DynoGatorLabs-DSLV-ZPDI-5.9.0.aab",
  apkAlias: "DSLV-ZPDI.apk",
  aabAlias: "DSLV-ZPDI.aab",
  apkSha256: "b7f95517a9b2553511b922285eff6581a51f58a8018b792cc0fb019b476573c9",
  aabSha256: "0b8b2bcc17fc7efbe885390f0f272b195dde949398dcc59e7833284bcda684a3",
  apkBytes: 1741425,
  aabBytes: 1692220,
  signerSha256: "6779d030844096386e02dff6480b836903716fbb3658164515a56831b52f7f6b",
  signerDn: "CN=DynoGator Labs, OU=DSLV-ZPDI, O=Resonant Genesis LLC, L=Penrose, ST=Colorado, C=US",
} as const;

export type ReleaseMeta = typeof RELEASE;
