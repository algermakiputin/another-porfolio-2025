/**
 * Generates the Zendtri POS archive visual — a purposeful technical
 * architecture diagram (NOT a fake product screenshot), built only from
 * verified facts in public/contents/projects.json:
 *   one React/TS/Vite/Tailwind codebase → web + iOS + Android via Capacitor,
 *   over Supabase/PostgreSQL with Row-Level Security tenant isolation,
 *   server-authoritative inventory via SQL RPC, JSONB plan gating, PayMongo.
 *
 *   node scripts/gen-zendtri-visual.mjs
 */
import path from "path";
import sharp from "sharp";

const W = 1200;
const H = 750; // 16:10 to match .project-visual
const OUT = path.join(process.cwd(), "public/images/projects/zendtri-architecture.png");

const ink = "#09131f";
const ink2 = "#0b1524";
const cream = "#f2ebdd";
const dim = "rgba(242,235,221,0.62)";
const faint = "rgba(242,235,221,0.4)";
const line = "rgba(242,235,221,0.16)";
const orange = "#e7652d";
const cobalt = "#4f74ea";
const lime = "#b7f34a";
const panel = "#0e1c2e";
const mono = "ui-monospace, 'JetBrains Mono', Menlo, monospace";
const sans = "Helvetica, Arial, sans-serif";

function chip(x, y, w, label, accent) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="52" rx="6" fill="${panel}" stroke="${accent}" stroke-width="1.5"/>
    <circle cx="${x + 22}" cy="${y + 26}" r="5" fill="${accent}"/>
    <text x="${x + 40}" y="${y + 33}" font-family="${sans}" font-size="19" font-weight="700" fill="${cream}">${label}</text>`;
}

function layerLabel(x, y, n, label) {
  return `
    <text x="${x}" y="${y}" font-family="${mono}" font-size="13" letter-spacing="2" fill="${faint}">${n}</text>
    <text x="${x}" y="${y + 22}" font-family="${sans}" font-size="15" font-weight="700" letter-spacing="1.5" fill="${dim}">${label}</text>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${ink2}"/>
      <stop offset="1" stop-color="${ink}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.7">
      <stop offset="0" stop-color="${orange}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${orange}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0 H0 V48" fill="none" stroke="#1b3049" stroke-width="1" opacity="0.5"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <!-- registration marks -->
  <path d="M40 40 h16 M40 40 v16" stroke="${orange}" stroke-width="1.5"/>
  <path d="M${W - 40} ${H - 40} h-16 M${W - 40} ${H - 40} v-16" stroke="${orange}" stroke-width="1.5"/>

  <!-- header -->
  <text x="72" y="86" font-family="${mono}" font-size="14" letter-spacing="3" fill="${orange}">ZENDTRI / SYSTEM MAP</text>
  <text x="72" y="140" font-family="${sans}" font-size="52" font-weight="800" letter-spacing="-1" fill="${cream}">Zendtri POS</text>
  <text x="72" y="172" font-family="${sans}" font-size="18" fill="${dim}">Multi-tenant point-of-sale &amp; inventory — one codebase, every form factor</text>

  <!-- vertical connectors -->
  <path d="M600 250 V300 M600 430 V486" stroke="${line}" stroke-width="1.5"/>

  <!-- Layer 1: clients -->
  ${layerLabel(72, 214, "01", "CLIENTS")}
  ${chip(300, 198, 170, "Web", lime)}
  ${chip(500, 198, 170, "iOS", lime)}
  ${chip(700, 198, 170, "Android", lime)}
  <text x="895" y="230" font-family="${mono}" font-size="14" fill="${faint}">one Capacitor</text>
  <text x="895" y="250" font-family="${mono}" font-size="14" fill="${faint}">codebase</text>

  <!-- Layer 2: application -->
  ${layerLabel(72, 344, "02", "APPLICATION")}
  <rect x="300" y="300" width="570" height="130" rx="8" fill="${panel}" stroke="${cobalt}" stroke-width="1.5"/>
  <text x="324" y="340" font-family="${sans}" font-size="21" font-weight="700" fill="${cream}">React · TypeScript · Vite · Tailwind</text>
  <text x="324" y="372" font-family="${mono}" font-size="15" fill="${dim}">TanStack Query · MVVM desktop + mobile views</text>
  <text x="324" y="402" font-family="${mono}" font-size="15" fill="${dim}">~20 route-level feature areas · plan-gated UI</text>

  <!-- Layer 3: data + server -->
  ${layerLabel(72, 524, "03", "DATA &amp; SERVER")}
  <rect x="300" y="486" width="570" height="150" rx="8" fill="${panel}" stroke="${line}" stroke-width="1.5"/>
  <text x="324" y="524" font-family="${sans}" font-size="21" font-weight="700" fill="${cream}">Supabase · PostgreSQL</text>
  <rect x="324" y="540" width="522" height="34" rx="5" fill="rgba(231,101,45,0.10)" stroke="${orange}" stroke-width="1.2"/>
  <text x="340" y="562" font-family="${mono}" font-size="14" fill="${cream}">RLS — tenant isolation enforced at the database</text>
  <text x="324" y="600" font-family="${mono}" font-size="14" fill="${dim}">SQL RPC — server-authoritative inventory math</text>
  <text x="324" y="622" font-family="${mono}" font-size="14" fill="${dim}">JSONB plan gating · HTTP 402 · PayMongo checkout</text>

  <!-- footer strip -->
  <line x1="72" y1="678" x2="${W - 72}" y2="678" stroke="${line}" stroke-width="1"/>
  <rect x="72" y="702" width="22" height="22" rx="5" fill="${orange}"/>
  <text x="79" y="718" font-family="${sans}" font-size="14" font-weight="800" fill="${ink}">A</text>
  <text x="106" y="718" font-family="${sans}" font-size="15" font-weight="700" fill="${dim}">algermakiputin.com</text>
  <text x="${W - 72}" y="718" text-anchor="end" font-family="${mono}" font-size="14" fill="${faint}">~75,000 LOC · 264 files · Web · iOS · Android</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(OUT);
console.log(`✓ ${OUT}`);
