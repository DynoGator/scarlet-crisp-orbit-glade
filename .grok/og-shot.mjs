import { chromium } from "playwright";
import { writeFileSync } from "node:fs";

const browser = await chromium.launch({ args: ["--disable-web-security"] });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.goto("file:///workspace/.grok/og-card.html", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const buf = await page.screenshot({ type: "png", omitBackground: false });
writeFileSync("/workspace/.grok/og-raw.png", buf);
await browser.close();
console.log("wrote /workspace/.grok/og-raw.png", buf.length);
