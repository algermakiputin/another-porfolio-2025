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
    <main className="project-archive" id="project-archive" data-filter="all">
      {/* ── Hero ── */}
      <header className="project-archive-hero">
        {/* Editorial contact sheet — three real project images, absolutely positioned
            on the right so the composition can reach the viewport edge */}
        <div className="portfolio-hero__media" aria-hidden="true">
          <div className="portfolio-hero__media-primary">
            <Image
              src="/images/projects/hunter-vault.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 900px) 28vw, 0px"
              className="portfolio-hero__media-img"
            />
          </div>
          <div className="portfolio-hero__media-secondary">
            <Image
              src="/images/projects/filipino-alamat.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 900px) 16vw, 0px"
              className="portfolio-hero__media-img"
            />
          </div>
          <div className="portfolio-hero__media-tertiary">
            <Image
              src="/images/projects/trading-journal.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 900px) 12vw, 0px"
              className="portfolio-hero__media-img"
            />
          </div>
          <div className="portfolio-hero__media-index">
            Project Archive&nbsp;&nbsp;/&nbsp;&nbsp;01—{String(projects.length).padStart(2, "0")}
          </div>
        </div>

        <div className="pf-container project-archive-hero__inner">
          <div className="project-archive-hero__copy">
            <p className="project-archive-hero__eyebrow">Work / Project Archive</p>
            <h1 className="project-archive-hero__title">
              Built
              <br />
              Systems
            </h1>
            <div className="project-archive-hero__intro">
              <p>
                Web, mobile, and product systems built across retail, finance,
                operations, and culture.
              </p>
              <span className="project-archive-hero__count">
                {projects.length} documented builds
              </span>
            </div>
          </div>
        </div>
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
      <div className="pf-container archive-body" id="main-content">
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
    </main>
  );
}
