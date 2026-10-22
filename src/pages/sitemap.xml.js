// Sitemap for Google: lists every page on the site automatically.
// Old redirect pages are left out.
import { business } from "../data/business.js";

const skip = ["/guides/", "/services/air-conditioning-installation/", "/404/"];

export async function GET() {
  const files = Object.keys(import.meta.glob("./**/*.{astro,md}"));
  const urls = files
    .map((f) => f.replace(/^\.\//, "/").replace(/\.(astro|md)$/, "").replace(/\/index$/, "/").replace(/^\/index$/, "/"))
    .map((p) => (p.endsWith("/") ? p : p + "/"))
    .filter((p) => !p.includes("[") && !skip.includes(p))
    .sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${new URL(p, business.url).href}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
