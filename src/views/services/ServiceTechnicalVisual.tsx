import type { ServiceVisual } from "../../data/services";

type Node = { n: string; t: string; s: string };

const DIAGRAMS: Record<ServiceVisual, { title: string; nodes: Node[] }> = {
  web: {
    title: "Web system",
    nodes: [
      { n: "01", t: "Interface", s: "React · Next.js" },
      { n: "02", t: "API layer", s: "Node.js · Laravel" },
      { n: "03", t: "Database", s: "PostgreSQL · Supabase" },
      { n: "04", t: "Deployment", s: "AWS · Vercel · CI/CD" },
    ],
  },
  mobile: {
    title: "Mobile system",
    nodes: [
      { n: "01", t: "Mobile client", s: "React Native · Expo" },
      { n: "02", t: "Offline store", s: "SQLite · local-first" },
      { n: "03", t: "Sync engine", s: "background sync" },
      { n: "04", t: "API & services", s: "REST · cloud" },
    ],
  },
  ecommerce: {
    title: "Commerce flow",
    nodes: [
      { n: "01", t: "Storefront", s: "React · Next.js" },
      { n: "02", t: "Checkout", s: "cart · orders" },
      { n: "03", t: "Payments", s: "PayMongo · gateways" },
      { n: "04", t: "Inventory & fulfilment", s: "server-authoritative" },
    ],
  },
  business: {
    title: "Business system",
    nodes: [
      { n: "01", t: "Roles & access", s: "permissions" },
      { n: "02", t: "Workflow states", s: "operations" },
      { n: "03", t: "Reporting", s: "dashboards · export" },
      { n: "04", t: "Integrations", s: "APIs · sync" },
    ],
  },
};

/**
 * Decorative technical diagram for the hero. Built from real capabilities, but
 * the same information is available in text (capability matrix + stack), so the
 * SVG is aria-hidden rather than carrying an accessible equivalent.
 */
export default function ServiceTechnicalVisual({
  variant,
}: {
  variant: ServiceVisual;
}) {
  const { title, nodes } = DIAGRAMS[variant];
  const top = 120;
  const gap = 96;

  return (
    <div className="service-visual" aria-hidden="true">
      <svg viewBox="0 0 560 560" role="presentation" focusable="false">
        <defs>
          <pattern
            id="svc-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0 H0 V40"
              fill="none"
              stroke="#1b3049"
              strokeWidth="1"
              opacity="0.55"
            />
          </pattern>
        </defs>

        <rect
          x="1"
          y="1"
          width="558"
          height="558"
          fill="#0b1524"
          stroke="rgba(242,235,221,0.12)"
        />
        <rect x="1" y="1" width="558" height="558" fill="url(#svc-grid)" />

        {/* registration marks */}
        <path d="M22 22 h14 M22 22 v14" stroke="#e7652d" strokeWidth="1.5" />
        <path
          d="M538 538 h-14 M538 538 v-14"
          stroke="#e7652d"
          strokeWidth="1.5"
        />

        <text
          x="40"
          y="58"
          fontFamily="var(--pf-font-mono, monospace)"
          fontSize="12"
          letterSpacing="3"
          fill="#e7652d"
        >
          SYSTEM MAP
        </text>
        <text
          x="40"
          y="90"
          fontFamily="var(--pf-font-display, sans-serif)"
          fontSize="30"
          fill="#f2ebdd"
        >
          {title}
        </text>

        {/* connecting spine */}
        <line
          x1="58"
          y1={top + 18}
          x2="58"
          y2={top + gap * 3 + 18}
          stroke="rgba(242,235,221,0.18)"
          strokeWidth="1.5"
        />

        {nodes.map((node, i) => {
          const y = top + i * gap;
          const accent =
            i === 0 ? "#b7f34a" : i === 3 ? "#e7652d" : "#4f74ea";
          return (
            <g key={node.n}>
              <circle cx="58" cy={y + 18} r="6" fill={accent} />
              <rect
                x="92"
                y={y}
                width="428"
                height="60"
                fill="#0e1c2e"
                stroke="rgba(242,235,221,0.12)"
              />
              <text
                x="112"
                y={y + 26}
                fontFamily="var(--pf-font-mono, monospace)"
                fontSize="12"
                letterSpacing="2"
                fill={accent}
              >
                {node.n}
              </text>
              <text
                x="112"
                y={y + 44}
                fontFamily="var(--pf-font-body, sans-serif)"
                fontSize="17"
                fontWeight="600"
                fill="#f2ebdd"
              >
                {node.t}
              </text>
              <text
                x="500"
                y={y + 36}
                textAnchor="end"
                fontFamily="var(--pf-font-mono, monospace)"
                fontSize="12"
                fill="rgba(242,235,221,0.55)"
              >
                {node.s}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
