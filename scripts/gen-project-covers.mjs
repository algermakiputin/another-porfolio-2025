/**
 * Generates uniform project cover images.
 *
 * One shared design system (dark gradient, grid texture, category pill,
 * title, platform chips, tech row, brand mark, per-category geometric motif),
 * rasterized to WebP at 1200x750 (16:10, matches the archive cards, case
 * hero and next-case teaser) via sharp. Per-project accent, title, platforms
 * and tech all come from public/contents/projects.json, and output overwrites
 * each project's existing `image` path in place.
 *
 *   node scripts/gen-project-covers.mjs          # generate all
 *   node scripts/gen-project-covers.mjs <slug>   # generate one
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = process.cwd();
const PROJECTS_FILE = path.join(ROOT, "public/contents/projects.json");
const PUBLIC_DIR = path.join(ROOT, "public");

const W = 1200;
const H = 750; // 16:10 to match .project-visual / case hero
const PAD = 84;

const CATEGORY_LABEL = {
  "web-app": "WEB APP",
  "mobile-app": "MOBILE APP",
  "web-template": "WEB TEMPLATE",
};

const CATEGORY_MOTIF = {
  "web-app": "webapp",
  "mobile-app": "mobile",
  "web-template": "template",
};

/* ---------- helpers ---------- */
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

/** Mix a hex color toward white by t (0..1) for soft text variants. */
function lighten(hex, t) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * (1 - t) + 255 * t);
  const g = Math.round(((n >> 8) & 255) * (1 - t) + 255 * t);
  const b = Math.round((n & 255) * (1 - t) + 255 * t);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/* ---------- motifs (drawn in a 360x360 local box, translated right) ---------- */
const MX = 770;
const MY = 195;
function motifGroup(inner) {
  return `<g transform="translate(${MX},${MY})" opacity="0.96">${inner}</g>`;
}

function motifs(name, k, soft) {
  const slate = "#334155";
  const slate2 = "#475569";
  const dark = "#0b1220";

  switch (name) {
    case "mobile": {
      const phone = `<rect x="110" y="30" width="140" height="300" rx="26" fill="${dark}" stroke="${k}" stroke-width="3"/>
        <rect x="152" y="46" width="56" height="10" rx="5" fill="${slate2}"/>
        <rect x="130" y="76" width="100" height="12" rx="6" fill="${slate2}"/>
        <rect x="130" y="100" width="70" height="12" rx="6" fill="${slate}"/>
        <rect x="130" y="132" width="100" height="52" rx="10" fill="none" stroke="${k}" stroke-width="2.5"/>
        <rect x="130" y="198" width="100" height="52" rx="10" fill="none" stroke="${slate}" stroke-width="2.5"/>
        <rect x="130" y="264" width="100" height="16" rx="8" fill="${k}"/>`;
      const spark1 = `<path d="M52 120 l10 22 22 10 -22 10 -10 22 -10 -22 -22 -10 22 -10 z" fill="${soft}" opacity="0.85"/>`;
      const spark2 = `<path d="M282 220 l7 16 16 7 -16 7 -7 16 -7 -16 -16 -7 16 -7 z" fill="${soft}" opacity="0.7"/>`;
      const ring = `<circle cx="180" cy="180" r="168" fill="none" stroke="${slate}" stroke-width="2" stroke-dasharray="4 10" opacity="0.8"/>`;
      return motifGroup(`${ring}${spark1}${spark2}${phone}`);
    }
    case "webapp": {
      const win = `<rect x="20" y="60" width="320" height="240" rx="16" fill="${dark}" stroke="${slate}" stroke-width="2.5"/>`;
      const barLine = `<path d="M20 100 h320" stroke="${slate}" stroke-width="2"/>`;
      const dots = `<circle cx="44" cy="80" r="5" fill="${k}"/><circle cx="64" cy="80" r="5" fill="${slate2}"/><circle cx="84" cy="80" r="5" fill="${slate2}"/>`;
      const url = `<rect x="108" y="71" width="180" height="18" rx="9" fill="${slate}" opacity="0.6"/>`;
      const bars = [0, 1, 2, 3, 4, 5]
        .map((i) => {
          const h = [52, 88, 66, 110, 80, 104][i];
          const hl = i === 5;
          return `<rect x="${52 + i * 44}" y="${272 - h}" width="28" height="${h}" rx="6" fill="${hl ? k : slate2}"/>`;
        })
        .join("");
      const baseline = `<path d="M44 272 h272" stroke="${slate}" stroke-width="2"/>`;
      const chip = `<rect x="238" y="128" width="86" height="34" rx="17" fill="${k}"/><text x="281" y="151" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="800" fill="#04140b">LIVE</text>`;
      return motifGroup(`${win}${barLine}${dots}${url}${bars}${baseline}${chip}`);
    }
    case "template": {
      const header = `<rect x="40" y="44" width="280" height="44" rx="10" fill="${dark}" stroke="${k}" stroke-width="2.5"/>
        <circle cx="66" cy="66" r="7" fill="${k}"/><rect x="84" y="61" width="110" height="10" rx="5" fill="${slate2}"/>`;
      const cell = (x, y, hl) =>
        `<rect x="${x}" y="${y}" width="132" height="104" rx="10" fill="${dark}" stroke="${hl ? k : slate}" stroke-width="${hl ? 3 : 2.5}"/>
         <rect x="${x + 16}" y="${y + 20}" width="${hl ? 70 : 56}" height="10" rx="5" fill="${hl ? k : slate2}"/>
         <rect x="${x + 16}" y="${y + 42}" width="100" height="8" rx="4" fill="${slate}"/>
         <rect x="${x + 16}" y="${y + 58}" width="84" height="8" rx="4" fill="${slate}"/>`;
      const side = `<rect x="40" y="108" width="0" height="0" fill="none"/>`;
      return motifGroup(
        `${header}${cell(40, 108, true)}${cell(188, 108, false)}${cell(40, 228, false)}${cell(188, 228, true)}${side}`
      );
    }
    default:
      return "";
  }
}

/* ---------- compose full SVG ---------- */
function buildSVG({ title, category, platforms, tech, accent }) {
  const k = accent || "#22c55e";
  const soft = lighten(k, 0.35);
  const label = CATEGORY_LABEL[category] || category.toUpperCase();
  const motif = CATEGORY_MOTIF[category] || "webapp";

  const lines = wrapTitle(title, 20);
  const fontSize = lines.length >= 3 ? 56 : lines.length === 2 ? 72 : 84;
  const lineH = Math.round(fontSize * 1.16);
  const blockH = lines.length * lineH;
  const titleTop = Math.round(300 - blockH / 2) + fontSize - 10;

  const titleTspans = lines
    .map(
      (l, i) =>
        `<text x="${PAD}" y="${titleTop + i * lineH}" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="#f8fafc" letter-spacing="-1">${esc(l)}</text>`
    )
    .join("");
  const blockBottom = titleTop + (lines.length - 1) * lineH;

  const pill = `
    <g transform="translate(${PAD},64)">
      <rect x="0" y="0" width="${58 + label.length * 15}" height="42" rx="21" fill="rgba(255,255,255,0.03)" stroke="${k}" stroke-width="1.5"/>
      <circle cx="26" cy="21" r="5" fill="${k}"/>
      <text x="44" y="28" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="2" fill="${soft}">${esc(label)}</text>
    </g>`;

  const accentBar = `<rect x="${PAD}" y="${blockBottom + 26}" width="72" height="6" rx="3" fill="${k}"/>`;

  // Platform chips row
  let chipX = PAD;
  const chips = platforms
    .map((p) => {
      const w = 34 + p.length * 12;
      const el = `<g transform="translate(${chipX},${blockBottom + 52})">
        <rect x="0" y="0" width="${w}" height="38" rx="19" fill="rgba(255,255,255,0.04)" stroke="${k}" stroke-width="1.5"/>
        <text x="${w / 2}" y="25" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" fill="#e2e8f0">${esc(p)}</text>
      </g>`;
      chipX += w + 12;
      return el;
    })
    .join("");

  const techLine = `<text x="${PAD}" y="${blockBottom + 132}" font-family="Helvetica, Arial, sans-serif" font-size="21" fill="#94a3b8">${esc(tech.join("  ·  "))}</text>`;

  const brand = `
    <g transform="translate(${PAD},${H - 70})">
      <rect x="0" y="0" width="26" height="26" rx="7" fill="${k}"/>
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
      <stop offset="0" stop-color="${k}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${k}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0 H0 V44" fill="none" stroke="#1e293b" stroke-width="1" opacity="0.5"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${motifs(motif, k, soft)}
  ${pill}
  ${titleTspans}
  ${accentBar}
  ${chips}
  ${techLine}
  ${brand}
  <rect x="0" y="${H - 7}" width="${W}" height="7" fill="${k}"/>
</svg>`;
}

/* ---------- run ---------- */
const only = process.argv[2];
const { projects } = JSON.parse(fs.readFileSync(PROJECTS_FILE, "utf-8"));

for (const p of projects) {
  if (only && only !== p.slug) continue;
  const svg = buildSVG({
    title: p.shortTitle || p.title,
    category: p.category,
    platforms: p.platforms || [p.platform],
    tech: (p.techStack || []).slice(0, 3),
    accent: p.accentColor,
  });
  const out = path.join(PUBLIC_DIR, p.image.replace(/^\//, ""));
  await sharp(Buffer.from(svg)).webp({ quality: 80 }).toFile(out);
  console.log(`✓ ${p.image}  (${p.category} / ${p.accentColor})`);
}
