import type { Project } from "../../../types/ProjectType";

/* ============================================================================
   Case-study normalization — turns a raw Project into a safe view model.
   Every optional field is guarded so missing data never renders empty UI, an
   "NA" cell, or unresolved {{template}} syntax.
   ========================================================================== */

export type LedgerItem = { label: string; value: string; href?: string };
export type EvidenceCell = { value: string; label: string; detail?: string };
export type TechGroup = { label: string; items: string[] };
export type ArchLayer = { key: string; label: string; techs: string[]; accent?: boolean };
export type Chapter = { id: string; num: string; label: string };
export type NextCase = {
  slug: string;
  number: string;
  shortTitle: string;
  teaser: string;
  image?: string;
};

export type CaseView = {
  slug: string;
  projectNumber: string;
  shortTitle: string;
  title: string;
  category: string;
  thesis: string;
  ledger: LedgerItem[];
  hasRealImage: boolean;
  heroImage?: string;
  heroImageAlt: string;
  evidence: EvidenceCell[];
  brief?: string[];
  challenge?: string[];
  scope?: string[];
  approach?: string[];
  outcome?: string[];
  archLayers: ArchLayer[];
  platformTargets: string[];
  techGroups: TechGroup[];
  chapters: Chapter[];
  nextCase?: NextCase;
};

/** Treats any {{PLACEHOLDER}} value as missing so template syntax never renders. */
const clean = (v?: string): string | undefined => {
  if (!v) return undefined;
  const t = v.trim();
  if (!t || /\{\{[\s\S]*\}\}/.test(t) || t.toUpperCase() === "NA" || t.toUpperCase() === "N/A")
    return undefined;
  return t;
};

/** Splits prose written with literal "\n" breaks into paragraphs. */
const paragraphs = (text?: string): string[] | undefined => {
  const t = clean(text);
  if (!t) return undefined;
  const parts = t
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.length ? parts : undefined;
};

const pad2 = (n: number) => String(n).padStart(2, "0");

const isRealImage = (img?: string): boolean =>
  !!img && !img.includes("placehold.co") && !img.includes("placeholder");

/* ---- Technology → architecture layer / functional group ---- */
const LAYER: Record<string, "interface" | "logic" | "data" | "delivery"> = {
  React: "interface",
  "React Native": "interface",
  TypeScript: "interface",
  JavaScript: "interface",
  Vite: "interface",
  "Tailwind CSS": "interface",
  Bootstrap: "interface",
  jQuery: "interface",
  "Chart.js": "interface",
  Expo: "interface",
  "TanStack Query": "interface",
  Laravel: "logic",
  CodeIgniter: "logic",
  PHP: "logic",
  "Node.js": "logic",
  Deno: "logic",
  Java: "logic",
  Python: "logic",
  Supabase: "data",
  PostgreSQL: "data",
  MySQL: "data",
  SQLite: "data",
  Firebase: "data",
  Capacitor: "delivery",
  iOS: "delivery",
  Android: "delivery",
  Web: "delivery",
  AWS: "delivery",
  Docker: "delivery",
  "Google Play": "delivery",
  PayMongo: "delivery",
};

const platformTargets = (p: Project): string[] => {
  const stack = p.techStack ?? [];
  if (stack.includes("Capacitor")) return ["Web", "iOS", "Android"];
  if (p.platform === "mobile") {
    const label = p.meta?.platform ?? "";
    if (/ios/i.test(label) && /android/i.test(label)) return ["iOS", "Android"];
    if (/android/i.test(label)) return ["Android"];
    if (/ios/i.test(label)) return ["iOS"];
    return ["Mobile"];
  }
  return ["Web"];
};

/** Layered system stack built only from technologies the project actually uses. */
const buildArchLayers = (p: Project): ArchLayer[] => {
  const stack = p.techStack ?? [];
  const pick = (l: string) => stack.filter((t) => LAYER[t] === l);
  const iface = pick("interface");
  const logic = pick("logic");
  const data = pick("data");
  const layers: ArchLayer[] = [];
  if (iface.length) layers.push({ key: "interface", label: "Interface", techs: iface });
  if (logic.length) layers.push({ key: "logic", label: "Application logic", techs: logic });
  if (data.length)
    layers.push({ key: "data", label: "Data & persistence", techs: data, accent: true });
  return layers;
};

const buildTechGroups = (p: Project): TechGroup[] => {
  const stack = p.techStack ?? [];
  const groups: Array<{ label: string; match: Array<string> }> = [
    { label: "Interface", match: ["interface"] },
    { label: "Data & backend", match: ["logic", "data"] },
    { label: "Platforms & delivery", match: ["delivery"] },
  ];
  return groups
    .map((g) => ({
      label: g.label,
      items: stack.filter((t) => g.match.includes(LAYER[t] ?? "delivery")),
    }))
    .filter((g) => g.items.length);
};

const firstSentence = (text?: string): string => {
  const t = clean(text);
  if (!t) return "";
  const m = t.split(/(?<=[.!?])\s+/)[0];
  return m ?? t;
};

export function buildCaseView(project: Project, all: Project[]): CaseView {
  const index = all.findIndex((p) => p.slug === project.slug);
  const projectNumber = pad2(index >= 0 ? index + 1 : 1);

  const shortTitle = clean(project.shortTitle) ?? project.title.split(" - ")[0].trim();
  const category =
    clean(project.meta?.industry) ??
    clean(project.meta?.category) ??
    (project.platform === "web" ? "Web platform" : "Mobile application");

  /* Metadata ledger — technical facts only, each conditionally included */
  const targets = platformTargets(project);
  const ledger: LedgerItem[] = [];
  const role = clean(project.role);
  if (role) ledger.push({ label: "Role", value: role });
  const metaScope = clean(project.meta?.scope);
  if (metaScope) ledger.push({ label: "Scope", value: metaScope });
  const timeline = clean(project.meta?.timeline);
  if (timeline) ledger.push({ label: "Timeline", value: timeline });
  ledger.push({ label: "Platforms", value: targets.join(" · ") });
  const builtFor = clean(project.meta?.builtFor);
  if (builtFor) ledger.push({ label: "Built For", value: builtFor });
  else {
    const client = clean(project.meta?.client);
    if (client) ledger.push({ label: "Client", value: client });
  }
  const link = clean(project.meta?.link);
  if (link)
    ledger.push({
      label: clean(project.meta?.linkLabel) ?? "Link",
      value: clean(project.meta?.website) ?? "View",
      href: link,
    });

  /* Evidence strip — filtered figures, never "NA" */
  const evidence: EvidenceCell[] = (project.results ?? [])
    .filter((r) => clean(r.metric) && clean(r.title))
    .map((r) => ({
      value: r.metric.trim(),
      label: r.title.trim(),
      detail: clean(r.description),
    }));

  const hasRealImage = isRealImage(project.image);

  /* Chapters — only those with real content */
  const brief = paragraphs(project.overview) ?? paragraphs(project.shortDescription);
  const challenge = paragraphs(project.challenge);
  const scope = (project.requirements ?? []).map((r) => r.trim()).filter(Boolean);
  const approach = paragraphs(project.approach);
  const outcome = paragraphs(project.conclusion);
  const archLayers = buildArchLayers(project);

  const chapters: Chapter[] = [];
  const add = (id: string, label: string) =>
    chapters.push({ id, num: pad2(chapters.length + 1), label });
  if (brief) add("brief", "Brief");
  if (challenge) add("challenge", "Challenge");
  if (scope.length) add("scope", "Scope");
  if (archLayers.length) add("architecture", "Architecture");
  if (approach) add("approach", "Approach");
  if (outcome) add("outcome", "Outcome");

  /* Continuous tour — always a next project (wraps to the first) */
  let nextCase: NextCase | undefined;
  if (all.length > 1 && index >= 0) {
    const nextIndex = (index + 1) % all.length;
    const n = all[nextIndex];
    nextCase = {
      slug: n.slug,
      number: pad2(nextIndex + 1),
      shortTitle: clean(n.shortTitle) ?? n.title.split(" - ")[0].trim(),
      teaser: firstSentence(n.metaDescription) || firstSentence(n.shortDescription),
      image: isRealImage(n.image) ? n.image : undefined,
    };
  }

  return {
    slug: project.slug,
    projectNumber,
    shortTitle,
    title: project.title,
    category,
    thesis: clean(project.metaDescription) ?? "",
    ledger,
    hasRealImage,
    heroImage: hasRealImage ? project.image : undefined,
    heroImageAlt: `${shortTitle} — product interface`,
    evidence,
    brief,
    challenge,
    scope,
    approach,
    outcome,
    archLayers,
    platformTargets: targets,
    techGroups: buildTechGroups(project),
    chapters,
    nextCase,
  };
}
