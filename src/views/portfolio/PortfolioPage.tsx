import Link from "next/link";
import Image from "next/image";
import type { ProjectSummary, ArchiveCategory } from "../../types/ProjectType";
import { ARCHIVE_CATEGORIES } from "../../lib/projects";
import ArchiveFilters from "./ArchiveFilters";
import "./portfolio.css";

const CAT_CLASS: Record<ArchiveCategory, string> = {
  web: "cat-web",
  mobile: "cat-mobile",
  cross: "cat-cross",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/* One framing for every project image — cover, no letterboxing. */
function ProjectVisual({
  project,
  priority,
}: {
  project: ProjectSummary;
  priority?: boolean;
}) {
  return (
    <span
      className="project-visual"
      style={
        project.imagePosition
          ? ({ ["--project-object-position"]: project.imagePosition } as React.CSSProperties)
          : undefined
      }
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={
          priority
            ? "(min-width: 900px) 56vw, 100vw"
            : "(min-width: 1100px) 380px, 100vw"
        }
        className="project-visual__img"
      />
    </span>
  );
}

function StackLine({ stack, limit }: { stack: string[]; limit: number }) {
  if (!stack.length) return null;
  return <p className="archive-stack">{stack.slice(0, limit).join("  ·  ")}</p>;
}

function MetaLine({ project }: { project: ProjectSummary }) {
  return (
    <div className="project-ledger-row__meta">
      <span>{project.platforms.join("  ·  ")}</span>
      {project.status && (
        <span
          className={`status${project.status === "Demo" ? " status--demo" : ""}`}
        >
          {project.status}
        </span>
      )}
      {project.evidence && (
        <span className="evidence-inline">
          <strong>{project.evidence.value}</strong>{" "}
          {project.evidence.label.toLowerCase()}
        </span>
      )}
    </div>
  );
}

type Props = { projects: ProjectSummary[] };

export default function PortfolioPage({ projects }: Props) {
  const counts: Record<string, number> = { all: projects.length };
  for (const p of projects) counts[p.category] = (counts[p.category] ?? 0) + 1;

  const visibleCategories = ARCHIVE_CATEGORIES.filter(
    (c) => (counts[c.key] ?? 0) > 0
  );

  const flagship = projects.find((p) => p.featuredOnArchive) ?? null;
  const rows = flagship
    ? projects.filter((p) => p.slug !== flagship.slug)
    : projects;

  return (
    <div className="project-archive" id="project-archive" data-filter="all">
      {/* ── Hero ── */}
      <header className="project-archive-hero">
        <div className="pf-container project-archive-hero__inner">
          <div className="project-archive-hero__copy">
            <p className="project-archive-hero__eyebrow"><span aria-hidden="true">—</span> Portfolio / Selected work</p>
            <h1 className="project-archive-hero__title">
              Selected
              <br />
              Work
            </h1>
            <div className="project-archive-hero__intro">
              <p>
                Web, mobile, and product systems built across retail, finance,
                operations, and culture.
              </p>
              <span className="project-archive-hero__count">
                Archive <b>/</b> {projects.length} documented projects
              </span>
            </div>
          </div>
          {flagship && (
            <Link
              href={`/project/${flagship.slug}`}
              className="project-archive-hero__quest"
              aria-label={`Open featured project: ${flagship.title}`}
            >
              <span className="project-archive-hero__quest-label">Featured / Project 01</span>
              <strong>{flagship.shortTitle}</strong>
              <p>{flagship.summary}</p>
              <span className="project-archive-hero__quest-meta">
                <span>{flagship.categoryLabel}</span>
                <span>{flagship.platforms.join(" · ")}</span>
                {flagship.status && <span>{flagship.status}</span>}
              </span>
              <span className="project-archive-hero__quest-action" aria-hidden="true">OPEN CASE STUDY ↗</span>
            </Link>
          )}
        </div>
        <span className="project-archive-hero__scene-label" aria-hidden="true">PROJECT ARCHIVE / SELECTED WORK</span>
      </header>

      {/* ── Filter rail (client island over server content) ── */}
      <nav
        className="archive-filters-wrap"
        aria-label="Filter projects by category"
      >
        <div className="pf-container">
          <ArchiveFilters counts={counts} categories={visibleCategories} />
        </div>
      </nav>

      {/* ── Body ── */}
      <div className="pf-container archive-body" id="project-list">
        {/* Flagship */}
        {flagship && (
          <article
            className={`archive-feature js-cat ${CAT_CLASS[flagship.category]}`}
            data-category={flagship.category}
          >
            <Link
              href={`/project/${flagship.slug}`}
              className="archive-feature__link"
            >
              <span className="archive-feature__visual">
                <ProjectVisual project={flagship} priority />
              </span>
              <div className="archive-feature__content">
                <p className="archive-index">Project 01 / Featured</p>
                <p className="archive-category">{flagship.categoryLabel}</p>
                <h2>{flagship.shortTitle}</h2>
                <p className="archive-feature__summary">{flagship.summary}</p>
                {flagship.evidence && (
                  <div className="archive-evidence">
                    <span className="archive-evidence__value">
                      {flagship.evidence.value}
                    </span>
                    <span className="archive-evidence__label">
                      {flagship.evidence.label}
                    </span>
                  </div>
                )}
                <StackLine stack={flagship.stack} limit={5} />
                <span className="archive-feature__cta">
                  Explore case study →
                </span>
              </div>
            </Link>
          </article>
        )}

        {/* Ledger */}
        <section className="archive-ledger" aria-label="All projects">
          <header className="archive-ledger__head">
            <h2>{flagship ? "More builds" : "Projects"}</h2>
            <span>In archive order</span>
          </header>
          <div className="archive-ledger__list">
            {rows.map((p, i) => (
              <article
                key={p.slug}
                className={`project-ledger-row js-cat ${CAT_CLASS[p.category]}`}
                data-category={p.category}
              >
                <Link
                  href={`/project/${p.slug}`}
                  className="project-ledger-row__link"
                >
                  <div className="project-ledger-row__index">
                    <span>Project {pad(flagship ? i + 2 : i + 1)}</span>
                    {p.year && <span>{p.year}</span>}
                  </div>
                  <div className="project-ledger-row__body">
                    <p className="archive-category">{p.categoryLabel}</p>
                    <h2>{p.shortTitle}</h2>
                    <p className="project-ledger-row__summary">{p.summary}</p>
                    <MetaLine project={p} />
                    <StackLine stack={p.stack} limit={4} />
                  </div>
                  <span className="project-ledger-row__visual">
                    <ProjectVisual project={p} />
                  </span>
                  <span
                    className="project-ledger-row__action"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                  <span className="sr-only">View {p.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Empty state — CSS shows this only when the active filter hides all rows */}
        <div className="archive-empty" role="status">
          <p>No projects in this category yet.</p>
          <Link href="/portfolio">View all projects →</Link>
        </div>
      </div>
    </div>
  );
}
