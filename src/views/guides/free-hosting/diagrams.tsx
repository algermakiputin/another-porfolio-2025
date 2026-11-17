/* Instructional SVG diagrams for the free-hosting guide.
   Every diagram teaches one idea; all text stays readable at 360px wide. */

const BLUE = "#2457e6";
const PURPLE = "#7c3aed";
const INK = "#0f172a";
const MUTED = "#475569";
const WASH = "#eef2ff";
const WASH2 = "#f5f0ff";

function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  fill = WASH,
  stroke = BLUE,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  fill?: string;
  stroke?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={12} fill={fill} stroke={stroke} strokeWidth={2.5} />
      <text x={x + w / 2} y={y + (sub ? 30 : h / 2 + 6)} textAnchor="middle" fontSize={15} fontWeight={800} fill={INK}>
        {title}
      </text>
      {sub ? (
        <text x={x + w / 2} y={y + 52} textAnchor="middle" fontSize={12.5} fill={MUTED}>
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({ x1, y, x2, label }: { x1: number; y: number; x2: number; label?: string }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={PURPLE} strokeWidth={3} />
      <polygon points={`${x2},${y} ${x2 - 10},${y - 6} ${x2 - 10},${y + 6}`} fill={PURPLE} />
      {label ? (
        <text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" fontSize={11.5} fill={MUTED}>
          {label}
        </text>
      ) : null}
    </g>
  );
}

/** Your Website Files → Hosting Provider → Internet → Visitors */
export function HostingFlowDiagram() {
  return (
    <svg viewBox="0 0 660 150" role="img" aria-label="Diagram: website files go to a hosting provider, then to the internet, then to visitors">
      <Node x={4} y={40} w={140} h={70} title="📁 Files mo" sub="index.html, CSS" />
      <Arrow x1={148} y={75} x2={186} label="upload" />
      <Node x={190} y={40} w={150} h={70} title="🏠 Hosting" sub="GitHub / Cloudflare" />
      <Arrow x1={344} y={75} x2={382} label="publish" />
      <Node x={386} y={40} w={120} h={70} title="🌐 Internet" sub="may URL ka na" />
      <Arrow x1={510} y={75} x2={548} label="bukas" />
      <Node x={552} y={40} w={104} h={70} title="👀 Bisita" sub="kahit sino" fill={WASH2} stroke={PURPLE} />
    </svg>
  );
}

/** Local Code → GitHub → Build → Hosting → Live Website */
export function DeployPipelineDiagram() {
  return (
    <svg viewBox="0 0 660 170" role="img" aria-label="Diagram: local code to GitHub to build to hosting to live website">
      <Node x={4} y={55} w={112} h={66} title="💻 Local" sub="code mo" />
      <Arrow x1={118} y={88} x2={142} label="push" />
      <Node x={144} y={55} w={112} h={66} title="🐙 GitHub" sub="repository" />
      <Arrow x1={258} y={88} x2={282} label="auto" />
      <Node x={284} y={55} w={112} h={66} title="🔨 Build" sub="npm run build" />
      <Arrow x1={398} y={88} x2={422} label="deploy" />
      <Node x={424} y={55} w={112} h={66} title="🏠 Hosting" sub="Vercel / CF" />
      <Arrow x1={538} y={88} x2={562} label="live!" />
      <Node x={564} y={55} w={92} h={66} title="🚀 Live" sub="may URL" fill={WASH2} stroke={PURPLE} />
      <text x={330} y={150} textAnchor="middle" fontSize={12.5} fill={MUTED}>
        Bawat push mo sa GitHub = automatic na bagong deploy
      </text>
    </svg>
  );
}

/** Static vs dynamic websites */
export function StaticVsDynamicDiagram() {
  return (
    <svg viewBox="0 0 660 210" role="img" aria-label="Comparison: static websites serve fixed files, dynamic websites run code on a server">
      <rect x={4} y={4} width={320} height={202} rx={14} fill={WASH} stroke={BLUE} strokeWidth={2.5} />
      <text x={164} y={36} textAnchor="middle" fontSize={16} fontWeight={800} fill={INK}>
        📄 Static website
      </text>
      <text x={24} y={68} fontSize={13.5} fill={INK}>• Parehong file sa lahat</text>
      <text x={24} y={94} fontSize={13.5} fill={INK}>• Portfolio, blog, landing</text>
      <text x={24} y={120} fontSize={13.5} fill={INK}>• HTML + CSS + JS lang</text>
      <text x={24} y={152} fontSize={13.5} fontWeight={800} fill={BLUE}>• LIBRENG hosting ✓</text>
      <text x={24} y={180} fontSize={12.5} fill={MUTED}>Hal: itong sample site</text>
      <rect x={336} y={4} width={320} height={202} rx={14} fill={WASH2} stroke={PURPLE} strokeWidth={2.5} />
      <text x={496} y={36} textAnchor="middle" fontSize={16} fontWeight={800} fill={INK}>
        ⚙️ Dynamic website
      </text>
      <text x={356} y={68} fontSize={13.5} fill={INK}>• May login, database, API</text>
      <text x={356} y={94} fontSize={13.5} fill={INK}>• Kailangang mag-run ng code</text>
      <text x={356} y={120} fontSize={13.5} fill={INK}>• Online shop, social app</text>
      <text x={356} y={152} fontSize={13.5} fontWeight={800} fill={PURPLE}>• May limit sa libre!</text>
      <text x={356} y={180} fontSize={12.5} fill={MUTED}>Basahin ang Chapter 6</text>
    </svg>
  );
}

/** What HTTPS/SSL does */
export function HttpsDiagram() {
  return (
    <svg viewBox="0 0 660 150" role="img" aria-label="Diagram: HTTPS encrypts the connection between visitor and website, shown by a padlock">
      <Node x={4} y={40} w={130} h={70} title="👀 Bisita" sub="browser" />
      <Arrow x1={138} y={75} x2={252} label="naka-lock 🔒" />
      <Node x={256} y={40} w={148} h={70} title="🔒 HTTPS" sub="encrypted" fill={WASH2} stroke={PURPLE} />
      <Arrow x1={408} y={75} x2={522} label="ligtas" />
      <Node x={526} y={40} w={130} h={70} title="🏠 Website" sub="hosting server" />
    </svg>
  );
}

/** Deployment difficulty per platform (1–5, lower is easier) */
export function DifficultyDiagram() {
  const rows = [
    { name: "GitHub Pages", level: 1, note: "upload sa browser" },
    { name: "Cloudflare Pages", level: 2, note: "drag & drop / Git" },
    { name: "Netlify", level: 2, note: "drag & drop / Git" },
    { name: "Vercel", level: 3, note: "Git o CLI" },
  ];
  return (
    <svg viewBox="0 0 660 190" role="img" aria-label="Bar chart: GitHub Pages is easiest at level 1, Cloudflare and Netlify level 2, Vercel level 3">
      <text x={4} y={20} fontSize={13} fontWeight={800} fill={INK}>
        Gaano kadali i-deploy? (mas maikli = mas madali)
      </text>
      {rows.map((r, i) => {
        const y = 36 + i * 38;
        return (
          <g key={r.name}>
            <text x={4} y={y + 17} fontSize={13.5} fontWeight={700} fill={INK}>
              {r.name}
            </text>
            <rect x={180} y={y} width={r.level * 90} height={24} rx={12} fill={r.level === 1 ? BLUE : PURPLE} opacity={r.level === 1 ? 1 : 0.75} />
            <text x={186 + r.level * 90} y={y + 17} fontSize={12.5} fill={MUTED}>
              {r.note}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** GitHub Pages address shapes */
export function UrlShapesDiagram() {
  return (
    <svg viewBox="0 0 660 170" role="img" aria-label="Diagram: GitHub Pages URL shapes for project sites and user sites">
      <rect x={4} y={4} width={652} height={72} rx={12} fill={WASH} stroke={BLUE} strokeWidth={2} />
      <text x={24} y={34} fontSize={13} fontWeight={800} fill={INK}>Project site (gagawin mo sa Chapter 3):</text>
      <text x={24} y={60} fontSize={15} fontFamily="monospace" fill={BLUE}>username.github.io/my-site/</text>
      <rect x={4} y={88} width={652} height={72} rx={12} fill={WASH2} stroke={PURPLE} strokeWidth={2} />
      <text x={24} y={118} fontSize={13} fontWeight={800} fill={INK}>User site (optional, isang beses lang):</text>
      <text x={24} y={144} fontSize={15} fontFamily="monospace" fill={PURPLE}>username.github.io/</text>
    </svg>
  );
}
