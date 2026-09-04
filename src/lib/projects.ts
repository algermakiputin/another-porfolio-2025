import type {
  Project,
  ProjectSummary,
  ArchiveCategory,
} from "../types/ProjectType";

/** Ordered archive taxonomy. Labels are shown in the filter rail. */
export const ARCHIVE_CATEGORIES: { key: ArchiveCategory; label: string }[] = [
  { key: "web", label: "Web Systems" },
  { key: "mobile", label: "Mobile Products" },
  { key: "cross", label: "Cross-Platform" },
];

export const CATEGORY_LABEL: Record<ArchiveCategory, string> = {
  web: "Web Systems",
  mobile: "Mobile Products",
  cross: "Cross-Platform",
};

/** A build shipping to both web and native reads as cross-platform; otherwise
 *  the platform list decides. Derived from real platform data — never invented. */
function deriveCategory(platforms: string[]): ArchiveCategory {
  const hasWeb = platforms.some((p) => /web/i.test(p));
  const hasMobile = platforms.some((p) => /ios|android/i.test(p));
  if (hasWeb && hasMobile) return "cross";
  if (hasWeb) return "web";
  return "mobile";
}

/** Status is a fact derived from the kind of public link the project has:
 *  a store/product URL ⇒ Live, a video URL ⇒ Demo, none ⇒ omitted. */
function deriveStatus(link?: string): string | undefined {
  if (!link) return undefined;
  if (/youtube|youtu\.be|vimeo/i.test(link)) return "Demo";
  return "Live";
}

export function toProjectSummary(p: Project): ProjectSummary {
  const platforms =
    p.platforms ?? (p.platform === "mobile" ? ["iOS", "Android"] : ["Web"]);
  const category = deriveCategory(platforms);
  const shortTitle = p.shortTitle ?? p.title;

  return {
    slug: p.slug,
    title: p.title,
    shortTitle,
    summary: p.shortDescription ?? p.metaDescription ?? "",
    category,
    categoryLabel: CATEGORY_LABEL[category],
    platforms,
    role: p.role,
    status: p.status ?? deriveStatus((p as Project & { meta?: { link?: string } }).meta?.link),
    year: p.year,
    stack: p.techStack ?? [],
    image: p.image,
    imageAlt: p.imageAlt ?? `${shortTitle} — project artwork`,
    imagePosition: p.imagePosition,
    featuredOnArchive: p.featuredOnArchive ?? false,
    evidence: p.evidence,
  };
}
