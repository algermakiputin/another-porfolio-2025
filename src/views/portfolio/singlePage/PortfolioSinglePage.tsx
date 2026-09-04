import Link from "next/link";
import type { Project } from "../../../types/ProjectType";
import { contact, socials } from "../../../data/portfolio";
import { buildCaseView } from "./caseHelpers";
import CaseChapterRail from "./CaseChapterRail";
import CaseArchitecture from "./CaseArchitecture";
import "./portfolioSinglePage.css";

const HEADINGS: Record<string, string> = {
  brief: "The brief",
  challenge: "The challenge",
  scope: "System scope",
  architecture: "Architecture",
  approach: "Approach & decisions",
  outcome: "Outcome",
};

/** Splits a requirement like "Inventory: items, stock, transfers" into an
 *  annotated label + detail for the blueprint scope list. */
function splitScope(line: string): { label?: string; detail: string } {
  const i = line.indexOf(":");
  if (i > 0 && i < 40) {
    return { label: line.slice(0, i).trim(), detail: line.slice(i + 1).trim() };
  }
  return { detail: line.trim() };
}

export default function PortfolioSinglePage({
  project,
  projects,
}: {
  project?: Project;
  projects: Project[];
}) {
  if (!project) {
    return (
      <article className="pf-case portfolio-root">
        <div className="pf-case-missing pf-container">
          <h1 className="pf-display">Project not found</h1>
          <Link href="/portfolio" className="pf-case-back">
            ← Back to projects
          </Link>
        </div>
      </article>
    );
  }

  const v = buildCaseView(project, projects);
  const archInHero = !v.hasRealImage && v.archLayers.length > 0;
  const delivered = (project.responsibilities ?? []).map((r) => r.trim()).filter(Boolean);
  const social = socials.filter((s) => s.label === "GitHub" || s.label === "LinkedIn");

  const renderProse = (paras: string[]) =>
    paras.map((p, i) => (
      <p key={i} className="pf-case-p">
        {p}
      </p>
    ));

  const chapterBody = (id: string) => {
    switch (id) {
      case "brief":
        return v.brief ? renderProse(v.brief) : null;
      case "challenge":
        return v.challenge ? renderProse(v.challenge) : null;
      case "scope":
        return (
          <ol className="pf-scope">
            {v.scope!.map((line, i) => {
              const { label, detail } = splitScope(line);
              return (
                <li className="pf-scope__item" key={i}>
                  <span className="pf-scope__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pf-scope__text">
                    {label && <span className="pf-scope__label">{label}</span>}
                    <span className="pf-scope__detail">{detail}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        );
      case "architecture":
        return (
          <>
            {archInHero ? (
              <p className="pf-case-lead">
                {v.archLayers.find((l) => l.key === "interface")?.techs[0] ?? "One"} interface,{" "}
                {v.archLayers.find((l) => l.key === "data")?.techs.join(" · ") ?? "local"} data,
                delivered to {v.platformTargets.join(" · ")}.
              </p>
            ) : (
              <CaseArchitecture
                layers={v.archLayers}
                targets={v.platformTargets}
                shortTitle={v.shortTitle}
                caption={project.archCaption}
              />
            )}
            {v.techGroups.length > 0 && (
              <dl className="pf-stackspec" aria-label="Technology stack">
                {v.techGroups.map((g) => (
                  <div className="pf-stackspec__row" key={g.label}>
                    <dt className="pf-stackspec__cat">{g.label}</dt>
                    <dd className="pf-stackspec__items">{g.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            )}
          </>
        );
      case "approach":
        return v.approach ? renderProse(v.approach) : null;
      case "outcome":
        return (
          <>
            {v.outcome && renderProse(v.outcome)}
            {delivered.length > 0 && (
              <ul className="pf-delivered" aria-label="Delivered">
                {delivered.map((d, i) => (
                  <li key={i}>
                    <span className="pf-delivered__mark" aria-hidden="true">
                      ✓
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <article className="pf-case portfolio-root">
      {/* ── Hero ── */}
      <header
        className="pf-case-hero"
        style={{ "--project-accent": project.accentColor ?? "#2457e6" } as React.CSSProperties}
      >
        <div className="pf-container pf-case-hero__inner">
          <div className="pf-case-hero__copy">
            <Link href="/portfolio" className="pf-case-back">
              <span aria-hidden="true">←</span> Back to projects
            </Link>
            <p className="pf-case-index">
              <span className="pf-case-index__mark" aria-hidden="true" />
              Project {v.projectNumber} <span aria-hidden="true">/</span> {v.category}
            </p>
            <h1 className="pf-case-title pf-display">{v.shortTitle}</h1>
            {v.thesis && <p className="pf-case-thesis">{v.thesis}</p>}
            {v.ledger.length > 0 && (
              <dl className="pf-case-meta">
                {v.ledger.map((item) => (
                  <div className="pf-case-meta__row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.value} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <figure className="pf-case-hero__visual">
            {v.hasRealImage ? (
              <div className="pf-case-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="pf-case-frame__img"
                  src={v.heroImage}
                  alt={v.heroImageAlt}
                  width={900}
                  height={560}
                  sizes="(max-width: 900px) 92vw, 640px"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            ) : (
              <CaseArchitecture
                layers={v.archLayers}
                targets={v.platformTargets}
                shortTitle={v.shortTitle}
                caption={project.archCaption}
              />
            )}
          </figure>
        </div>
      </header>

      {/* ── Evidence strip ── */}
      {v.evidence.length > 0 && (
        <section className="pf-case-evidence" aria-label="Project signals">
          <div className="pf-container pf-case-evidence__grid">
            {v.evidence.map((e, i) => (
              <div className="pf-case-ev" key={i}>
                <span className="pf-case-ev__value">{e.value}</span>
                {e.label !== e.value && (
                  <span className="pf-case-ev__label">{e.label}</span>
                )}
                {e.detail && <span className="pf-case-ev__detail">{e.detail}</span>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Chapters ── */}
      <div className="pf-case-body">
        <div className="pf-container pf-case-body__grid">
          <aside className="pf-case-body__rail">
            <CaseChapterRail chapters={v.chapters} />
          </aside>
          <div className="pf-case-body__chapters">
            {v.chapters.map((ch) => (
              <section id={`chap-${ch.id}`} className="pf-chap" key={ch.id}>
                <div className="pf-chap__head">
                  <span className="pf-chap__num">{ch.num}</span>
                  <h2 className="pf-chap__title pf-display">{HEADINGS[ch.id]}</h2>
                </div>
                <div className="pf-chap__content">{chapterBody(ch.id)}</div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* ── Next project ── */}
      {v.nextCase && (
        <Link
          href={`/project/${v.nextCase.slug}`}
          className={`pf-nextcase ${v.nextCase.image ? "" : "pf-nextcase--plain"}`.trim()}
        >
          <div className="pf-container pf-nextcase__inner">
            <div className="pf-nextcase__copy">
              <span className="pf-nextcase__eyebrow">Next project / {v.nextCase.number}</span>
              <h2 className="pf-nextcase__title pf-display">{v.nextCase.shortTitle}</h2>
              {v.nextCase.teaser && <p className="pf-nextcase__teaser">{v.nextCase.teaser}</p>}
              <span className="pf-nextcase__cta">
                View case study <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className="pf-nextcase__visual" aria-hidden="true">
              {v.nextCase.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={v.nextCase.image} alt="" width={640} height={400} loading="lazy" />
              ) : (
                <span className="pf-nextcase__mark">{v.nextCase.number}</span>
              )}
            </div>
          </div>
        </Link>
      )}

      {/* ── Contact transition (dark, blueprint) ── */}
      <section className="pf-case-contact" aria-label="Contact">
        <div className="pf-container pf-case-contact__inner">
          <p className="pf-case-contact__lead">
            {contact.headline}{" "}
            <Link href={contact.href} className="pf-case-contact__cta">
              {contact.cta} <span aria-hidden="true">→</span>
            </Link>
          </p>
          <div className="pf-case-contact__meta">
            <a href={`mailto:${contact.email}`} className="pf-case-contact__email">
              {contact.email}
            </a>
            <span className="pf-case-contact__sep" aria-hidden="true" />
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="pf-case-contact__social"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
