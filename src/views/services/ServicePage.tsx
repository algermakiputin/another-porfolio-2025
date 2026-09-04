import Link from "next/link";
import Image from "next/image";
import type { ServicePageContent } from "../../data/services";
import { getProjectBySlug } from "../../lib/projects.server";
import { toProjectSummary } from "../../lib/projects";
import ServiceTechnicalVisual from "./ServiceTechnicalVisual";
import "./service.css";

function excerpt(text: string | undefined, max = 210): string {
  if (!text) return "";
  const clean = text.replace(/\s*\n+\s*/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const end = cut.lastIndexOf(". ");
  return (end > 80 ? cut.slice(0, end + 1) : cut.trimEnd() + "…");
}

/* ── Featured project dossier (real data from projects.json) ── */
function FeaturedServiceProject({ slug }: { slug: string }) {
  const raw = getProjectBySlug(slug);
  if (!raw) return null;
  const p = toProjectSummary(raw);
  const href = `/project/${p.slug}`;

  return (
    <section className="service-section service-feature-wrap" aria-labelledby="feat-h">
      <div className="pf-container">
        <p className="service-kicker">Featured work</p>
        <article className={`service-feature cat-${p.category}`}>
          <Link href={href} className="service-feature__visual" tabIndex={-1} aria-hidden="true">
            <span className="service-figure">
              <Image
                src={p.image}
                alt=""
                fill
                sizes="(min-width: 900px) 52vw, 100vw"
                loading="lazy"
                className="service-figure__img"
              />
            </span>
          </Link>
          <div className="service-feature__content">
            <p className="service-index">
              Case study / {p.categoryLabel}
            </p>
            <h3 id="feat-h">{p.shortTitle}</h3>
            <p className="service-feature__challenge">{excerpt(raw.challenge)}</p>

            <dl className="service-feature__meta">
              {p.role && (
                <div>
                  <dt>Role</dt>
                  <dd>{p.role}</dd>
                </div>
              )}
              <div>
                <dt>Stack</dt>
                <dd>{p.stack.slice(0, 5).join("  ·  ")}</dd>
              </div>
            </dl>

            {p.evidence && (
              <div className="service-evidence">
                <span className="service-evidence__value">{p.evidence.value}</span>
                <span className="service-evidence__label">{p.evidence.label}</span>
              </div>
            )}

            <Link href={href} className="service-textlink">
              Read case study →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function ServicePage({ content }: { content: ServicePageContent }) {
  const {
    eyebrow,
    titleLines,
    lede,
    primaryCta,
    secondaryCta,
    visual,
    capabilities,
    technologies,
    deliverables,
    audiences,
    process,
    principles,
    featuredProjectSlug,
    location,
    related,
    closing,
  } = content;

  return (
    <main className="service-page" id="main-content">
      {/* ── Hero ── */}
      <header className="service-hero">
        <span className="service-hero__grid" aria-hidden="true" />
        <span className="service-hero__plane" aria-hidden="true" />
        <div className="pf-container service-hero__inner">
          <div className="service-hero__copy">
            <p className="service-eyebrow">{eyebrow}</p>
            <h1 className="service-hero__title">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="service-hero__lede">{lede}</p>
            <div className="service-hero__actions">
              <Link href={primaryCta.href} className="service-btn service-btn--primary">
                {primaryCta.label} <span aria-hidden="true">→</span>
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="service-btn service-btn--ghost">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
          <ServiceTechnicalVisual variant={visual} />
        </div>
      </header>

      {/* ── Capability matrix ── */}
      <section className="service-section" aria-labelledby="cap-h">
        <div className="pf-container">
          <div className="service-section__head">
            <p className="service-kicker">Capabilities</p>
            <h2 id="cap-h">What I build</h2>
          </div>
          <div className="capability-matrix">
            {capabilities.map((c) => (
              <div className="capability" key={c.index}>
                <p className="capability__index">
                  Capability {c.index}
                </p>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Relevant stack ── */}
      <section className="service-section" aria-labelledby="stack-h">
        <div className="pf-container">
          <div className="service-section__head">
            <p className="service-kicker">Technology</p>
            <h2 id="stack-h">Grouped by role</h2>
          </div>
          <div className="stack-grid">
            {technologies.map((g) => (
              <div className="stack-group" key={g.label}>
                <p className="stack-group__label">{g.label}</p>
                <p className="stack-group__items">{g.items.join("  ·  ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables rail ── */}
      <section className="service-section" aria-labelledby="del-h">
        <div className="pf-container">
          <div className="service-section__head">
            <p className="service-kicker">Deliverables</p>
            <h2 id="del-h">What you can build</h2>
          </div>
          <ul className="deliverables">
            {deliverables.map((d) => (
              <li className="deliverable" key={d.index}>
                <span className="deliverable__index">{d.index}</span>
                <span className="deliverable__title">{d.title}</span>
                <span className="deliverable__mark" aria-hidden="true">→</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Audience band ── */}
      <section className="service-band" aria-labelledby="aud-h">
        <div className="pf-container">
          <div className="service-section__head service-section__head--onband">
            <p className="service-kicker service-kicker--onband">Who I work with</p>
            <h2 id="aud-h">Built for four kinds of teams</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((a) => (
              <div className="audience" key={a.title}>
                <h3>{a.title}</h3>
                <p className="audience__qualifier">{a.qualifier}</p>
                <p className="audience__engagement">{a.engagement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="service-section" aria-labelledby="proc-h">
        <div className="pf-container">
          <div className="service-section__head">
            <p className="service-kicker">Process</p>
            <h2 id="proc-h">How the work runs</h2>
          </div>
          <ol className="process">
            {process.map((s) => (
              <li className="process-step" key={s.index}>
                <span className="process-step__index">{s.index}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Featured project ── */}
      <FeaturedServiceProject slug={featuredProjectSlug} />

      {/* ── Delivery principles (replaces unverified testimonials) ── */}
      <section className="service-section" aria-labelledby="prin-h">
        <div className="pf-container">
          <div className="service-section__head">
            <p className="service-kicker">How I work</p>
            <h2 id="prin-h">Delivery principles</h2>
          </div>
          <div className="principles">
            {principles.map((pr) => (
              <div className="principle" key={pr.title}>
                <h3>{pr.title}</h3>
                <p>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location (location pages only) ── */}
      {location && (
        <section className="service-section service-location" aria-labelledby="loc-h">
          <div className="pf-container service-location__inner">
            <div className="service-section__head">
              <p className="service-kicker">Availability</p>
              <h2 id="loc-h">{location.area}</h2>
            </div>
            <div className="service-location__body">
              {location.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services ── */}
      {related.length > 0 && (
        <section className="service-section" aria-labelledby="rel-h">
          <div className="pf-container">
            <p className="service-kicker" id="rel-h">Related services</p>
            <ul className="related-services">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>
                    {r.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Closing CTA ── */}
      <section className="service-cta" aria-labelledby="cta-h">
        <span className="service-cta__dots" aria-hidden="true" />
        <div className="pf-container service-cta__inner">
          <h2 id="cta-h" className="service-cta__title">
            {closing.titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < closing.titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="service-cta__body">{closing.body}</p>
          <Link href={closing.cta.href} className="service-btn service-btn--primary service-btn--lg">
            {closing.cta.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
