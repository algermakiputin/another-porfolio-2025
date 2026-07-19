/**
 * Generates on-brand blog cover images.
 *
 * Draws each cover as an SVG in one shared design system (dark gradient,
 * accent glow, grid texture, category pill, wrapped title, brand mark, and a
 * topic-specific geometric motif), then rasterizes to PNG at 1200x630 via sharp.
 *
 *   node scripts/gen-blog-covers.mjs           # generate all
 *   node scripts/gen-blog-covers.mjs <slug>    # generate one
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, "content/blog");
const OUT_DIR = path.join(ROOT, "public/images/blog/covers");

const W = 1200;
const H = 630;
const PAD = 84;

const ACCENTS = {
  React: { key: "#22c55e", soft: "#4ade80", glow: "#16a34a" },
  SEO: { key: "#38bdf8", soft: "#7dd3fc", glow: "#0ea5e9" },
  default: { key: "#22c55e", soft: "#4ade80", glow: "#16a34a" },
};

// slug -> { motif, coverTitle? }
const CONFIG = {
  "react-application-architecture": { motif: "architecture", coverTitle: "Production React Architecture" },
  "react-folder-structure": { motif: "folders", coverTitle: "React Folder Structure for Scale" },
  "react-state-management": { motif: "graph", coverTitle: "Choosing React State Management" },
  "react-context-vs-zustand-vs-server-state": { motif: "columns", coverTitle: "Context vs Zustand vs Server State" },
  "react-performance-problems": { motif: "gauge", coverTitle: "Common React Performance Problems" },
  "find-unnecessary-react-re-renders": { motif: "rerenders", coverTitle: "Finding Unnecessary React Re-renders" },
  "react-forms-validation-large-apps": { motif: "forms", coverTitle: "Forms & Validation in Large React Apps" },
  "react-testing-strategy": { motif: "testing", coverTitle: "React Testing Strategy" },
  "offline-first-react-dexie-indexeddb": { motif: "database", coverTitle: "Offline-First React with Dexie & IndexedDB" },
  "react-web-app-to-ios-android-capacitor": { motif: "devices", coverTitle: "React Web App to iOS & Android" },
  "seo-new-website-30-day-results": { motif: "seo", coverTitle: "30 Days of SEO on a New Site" },
};

/* ---------- text wrapping ---------- */
function wrapTitle(title, maxChars) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- motifs (drawn in a 360x360 local box, translated to the right) ---------- */
const MX = 760; // motif box left
const MY = 135; // motif box top
function motifGroup(inner) {
  return `<g transform="translate(${MX},${MY})" opacity="0.96">${inner}</g>`;
}

function motifs(name, a) {
  const slate = "#334155";
  const slate2 = "#475569";
  const dark = "#0b1220";
  const k = a.key;
  const s = a.soft;

  switch (name) {
    case "architecture": {
      const card = (y, hl) =>
        `<rect x="40" y="${y}" width="280" height="78" rx="14" fill="${dark}" stroke="${hl ? k : slate}" stroke-width="${hl ? 3 : 2.5}"/>
         <circle cx="72" cy="${y + 39}" r="9" fill="none" stroke="${hl ? s : slate2}" stroke-width="2.5"/>
         <rect x="96" y="${y + 30}" width="140" height="7" rx="3.5" fill="${slate2}"/>
         <rect x="96" y="${y + 46}" width="90" height="7" rx="3.5" fill="${slate}"/>`;
      return motifGroup(`${card(24, false)}${card(126, false)}${card(228, true)}`);
    }
    case "folders": {
      const folder = `<path d="M40 40 h60 l16 20 h120 a12 12 0 0 1 12 12 v96 a12 12 0 0 1 -12 12 H52 a12 12 0 0 1 -12 -12 V52 a12 12 0 0 1 12 -12 z" fill="${dark}" stroke="${k}" stroke-width="3"/>`;
      const row = (y, w, hl) =>
        `<rect x="150" y="${y}" width="${w}" height="10" rx="5" fill="${hl ? k : slate2}"/>
         <path d="M132 ${y + 5} h14" stroke="${slate}" stroke-width="2.5"/>`;
      const spine = `<path d="M118 200 V300" stroke="${slate}" stroke-width="2.5"/>`;
      return motifGroup(
        `${folder}${spine}${row(210, 150, false)}${row(244, 110, true)}${row(278, 170, false)}`
      );
    }
    case "graph": {
      const cx = 180, cy = 180;
      const sat = [[60, 70], [300, 70], [60, 300], [300, 300]];
      const lines = sat
        .map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="${slate}" stroke-width="2.5"/>`)
        .join("");
      const nodes = sat
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="24" fill="${dark}" stroke="${slate2}" stroke-width="3"/><circle cx="${x}" cy="${y}" r="7" fill="${slate2}"/>`)
        .join("");
      const center = `<circle cx="${cx}" cy="${cy}" r="42" fill="${dark}" stroke="${k}" stroke-width="3.5"/><circle cx="${cx}" cy="${cy}" r="14" fill="${k}"/>`;
      return motifGroup(`${lines}${nodes}${center}`);
    }
    case "columns": {
      const base = 320;
      const bar = (x, h, hl) =>
        `<rect x="${x}" y="${base - h}" width="56" height="${h}" rx="12" fill="${hl ? dark : dark}" stroke="${hl ? k : slate}" stroke-width="${hl ? 3 : 2.5}"/>
         <circle cx="${x + 28}" cy="${base - h - 22}" r="12" fill="${hl ? k : slate2}"/>`;
      const baseline = `<line x1="40" y1="${base}" x2="330" y2="${base}" stroke="${slate}" stroke-width="2.5"/>`;
      return motifGroup(`${bar(56, 120, false)}${bar(152, 190, true)}${bar(248, 90, false)}${baseline}`);
    }
    case "gauge": {
      const cx = 185, cy = 240, r = 130;
      const pol = (deg) => [cx + r * Math.cos((Math.PI * deg) / 180), cy + r * Math.sin((Math.PI * deg) / 180)];
      const [bx, by] = pol(180);
      const [ex, ey] = pol(0);
      // value arc to ~ -35 deg (i.e. 145 deg sweep => 200 total? keep simple: 180->35)
      const [vx, vy] = pol(35);
      const bg = `<path d="M${bx} ${by} A${r} ${r} 0 0 1 ${ex} ${ey}" fill="none" stroke="${slate}" stroke-width="16" stroke-linecap="round"/>`;
      const val = `<path d="M${bx} ${by} A${r} ${r} 0 0 1 ${vx} ${vy}" fill="none" stroke="${k}" stroke-width="16" stroke-linecap="round"/>`;
      const [nx, ny] = pol(45);
      const needle = `<line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="${s}" stroke-width="5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="12" fill="${dark}" stroke="${k}" stroke-width="3"/>`;
      return motifGroup(`${bg}${val}${needle}`);
    }
    case "rerenders": {
      const cx = 180, cy = 180;
      const rings = [130, 96, 62]
        .map((r, i) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${k}" stroke-width="${3 - i * 0.4}" opacity="${0.25 + i * 0.22}"/>`)
        .join("");
      // circular refresh arrows
      const refresh = `<path d="M${cx} ${cy - 34} a34 34 0 1 1 -30 18" fill="none" stroke="${s}" stroke-width="5" stroke-linecap="round"/>
        <path d="M${cx} ${cy - 46} l4 20 l-20 -4 z" fill="${s}"/>`;
      return motifGroup(`${rings}${refresh}`);
    }
    case "forms": {
      const card = `<rect x="40" y="36" width="280" height="288" rx="18" fill="${dark}" stroke="${slate}" stroke-width="2.5"/>`;
      const field = (y) =>
        `<rect x="68" y="${y + 14}" width="70" height="8" rx="4" fill="${slate2}"/>
         <rect x="68" y="${y + 30}" width="224" height="34" rx="9" fill="none" stroke="${slate2}" stroke-width="2"/>`;
      const button = `<rect x="68" y="256" width="224" height="42" rx="10" fill="${k}"/>`;
      const check = `<circle cx="300" cy="52" r="26" fill="${dark}" stroke="${k}" stroke-width="3"/><path d="M289 52 l8 9 l14 -18" fill="none" stroke="${k}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
      return motifGroup(`${card}${field(66)}${field(150)}${button}${check}`);
    }
    case "testing": {
      const shield = `<path d="M180 34 l120 42 v92 c0 78 -54 118 -120 150 c-66 -32 -120 -72 -120 -150 v-92 z" fill="${dark}" stroke="${slate}" stroke-width="2.5"/>`;
      const glow = `<path d="M180 34 l120 42 v92 c0 78 -54 118 -120 150 c-66 -32 -120 -72 -120 -150 v-92 z" fill="none" stroke="${k}" stroke-width="3" opacity="0.5"/>`;
      const check = `<path d="M120 178 l40 42 l82 -104" fill="none" stroke="${k}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`;
      return motifGroup(`${shield}${glow}${check}`);
    }
    case "database": {
      const cyl = (cx, cy, hl) => {
        const rx = 70, ry = 18, bh = 66;
        const col = hl ? k : slate2;
        return `<path d="M${cx - rx} ${cy} v${bh} a${rx} ${ry} 0 0 0 ${rx * 2} 0 v${-bh}" fill="${dark}" stroke="${col}" stroke-width="3"/>
          <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${dark}" stroke="${col}" stroke-width="3"/>
          <ellipse cx="${cx}" cy="${cy + 22}" rx="${rx}" ry="${ry}" fill="none" stroke="${col}" stroke-width="2" opacity="0.6"/>`;
      };
      const cloud = `<path d="M232 70 a34 34 0 0 1 66 8 a26 26 0 0 1 -6 51 h-70 a30 30 0 0 1 -6 -59 a34 34 0 0 1 16 0 z" fill="${dark}" stroke="${slate}" stroke-width="2.5"/>`;
      const sync = `<path d="M150 150 a44 44 0 0 1 84 -14" fill="none" stroke="${a.soft}" stroke-width="4" stroke-linecap="round"/><path d="M232 122 l6 20 l-20 -2 z" fill="${a.soft}"/>`;
      return motifGroup(`${cloud}${cyl(120, 208, true)}${cyl(120, 288, false)}${sync}`);
    }
    case "devices": {
      const browser = `<rect x="40" y="70" width="220" height="180" rx="14" fill="${dark}" stroke="${slate}" stroke-width="2.5"/>
        <path d="M40 100 h220" stroke="${slate}" stroke-width="2"/>
        <circle cx="60" cy="85" r="4" fill="${slate2}"/><circle cx="76" cy="85" r="4" fill="${slate2}"/><circle cx="92" cy="85" r="4" fill="${slate2}"/>
        <rect x="70" y="140" width="120" height="10" rx="5" fill="${slate2}"/><rect x="70" y="164" width="80" height="10" rx="5" fill="${slate}"/>`;
      const phone = `<rect x="222" y="118" width="110" height="200" rx="22" fill="${dark}" stroke="${k}" stroke-width="3"/>
        <rect x="246" y="128" width="62" height="7" rx="3.5" fill="${slate}"/>
        <circle cx="277" cy="220" r="30" fill="none" stroke="${k}" stroke-width="3"/>
        <ellipse cx="277" cy="220" rx="30" ry="11" fill="none" stroke="${a.soft}" stroke-width="2.5"/>
        <circle cx="277" cy="220" r="6" fill="${k}"/>`;
      return motifGroup(`${browser}${phone}`);
    }
    case "seo": {
      const baseline = `<line x1="40" y1="300" x2="330" y2="300" stroke="${slate}" stroke-width="2.5"/>`;
      const bars = [[70, 70], [130, 120], [190, 170], [250, 250]]
        .map(([x, h], i) => `<rect x="${x}" y="${300 - h}" width="34" height="${h}" rx="7" fill="${i === 3 ? k : slate2}" opacity="${i === 3 ? 1 : 0.7}"/>`)
        .join("");
      const trend = `<path d="M70 250 L130 210 L190 150 L280 60" fill="none" stroke="${a.soft}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M258 56 l24 -4 l-4 24 z" fill="${a.soft}"/>`;
      const glass = `<circle cx="150" cy="140" r="46" fill="none" stroke="${k}" stroke-width="5"/><line x1="184" y1="174" x2="220" y2="210" stroke="${k}" stroke-width="7" stroke-linecap="round"/>`;
      return motifGroup(`${baseline}${bars}${trend}${glass}`);
    }
    default:
      return "";
  }
}

/* ---------- compose full SVG ---------- */
function buildSVG({ category, coverTitle, motif }) {
  const a = ACCENTS[category] || ACCENTS.default;
  const lines = wrapTitle(coverTitle, 20);
  const fontSize = lines.length >= 4 ? 52 : lines.length === 3 ? 60 : 68;
  const lineH = Math.round(fontSize * 1.18);
  const blockH = lines.length * lineH;
  const titleTop = Math.round(H / 2 - blockH / 2) + fontSize - 10;

  const titleTspans = lines
    .map((l, i) => `<text x="${PAD}" y="${titleTop + i * lineH}" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="#f8fafc" letter-spacing="-1">${esc(l)}</text>`)
    .join("");

  const pill = `
    <g transform="translate(${PAD},72)">
      <rect x="0" y="0" width="${58 + category.length * 15}" height="42" rx="21" fill="rgba(255,255,255,0.03)" stroke="${a.key}" stroke-width="1.5"/>
      <circle cx="26" cy="21" r="5" fill="${a.key}"/>
      <text x="44" y="28" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2" fill="${a.soft}">${esc(category.toUpperCase())}</text>
    </g>`;

  const accentBar = `<rect x="${PAD}" y="${titleTop + blockH - fontSize + 22}" width="72" height="6" rx="3" fill="${a.key}"/>`;

  const brand = `
    <g transform="translate(${PAD},${H - 74})">
      <rect x="0" y="0" width="26" height="26" rx="7" fill="${a.key}"/>
      <text x="6" y="19" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="800" fill="#04140b">A</text>
      <text x="40" y="19" font-family="Helvetica, Arial, sans-serif" font-size="19" font-weight="700" fill="#cbd5e1">algermakiputin.com</text>
    </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.18" r="0.6">
      <stop offset="0" stop-color="${a.glow}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${a.glow}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0 H0 V44" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.5"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${motifs(motif, a)}
  ${pill}
  ${titleTspans}
  ${accentBar}
  ${brand}
  <rect x="0" y="${H - 7}" width="${W}" height="7" fill="${a.key}"/>
</svg>`;
}

/* ---------- run ---------- */
const only = process.argv[2];
const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

for (const file of files) {
  const slug = file.replace(".mdx", "");
  if (only && only !== slug) continue;
  const cfg = CONFIG[slug];
  if (!cfg) {
    console.warn(`! no config for ${slug}, skipping`);
    continue;
  }
  const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), "utf-8"));
  const category = data.category || "React";
  const coverTitle = cfg.coverTitle || data.title;

  const svg = buildSVG({ category, coverTitle, motif: cfg.motif });
  const out = path.join(OUT_DIR, `${slug}.png`);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log(`✓ ${slug}.png  (${category} / ${cfg.motif})`);
}
