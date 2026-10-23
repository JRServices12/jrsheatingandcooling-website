// Sitemap for Google: lists every page on the site automatically.
// Old redirect pages are left out. Town pages come from src/data/towns.js.
// lastmod is the date of the latest site build, which helps Google decide when to recrawl.
import { business } from "../data/business.js";
import { towns } from "../data/towns.js";

const skip = ["/guides/", "/services/air-conditioning-installation/", "/404/"];

export async function GET() {
  const files = Object.keys(import.meta.glob("./**/*.{astro,md}"));
  const fromFiles = files
    .map((f) => f.replace(/^\.\//, "/").replace(/\.(astro|md)$/, "").replace(/\/index$/, "/").replace(/^\/index$/, "/"))
    .map((p) => (p.endsWith("/") ? p : p + "/"))
    .filter((p) => !p.includes("[") && !skip.includes(p));
  const urls = [...new Set([...fromFiles, ...towns.map((t) => `/areas/${t.slug}/`)])].sort();
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${new URL(p, business.url).href}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
