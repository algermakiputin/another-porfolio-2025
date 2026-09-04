import { experience, coreStack, additionalStack } from "../../../data/portfolio";
import TechIcon from "../ui/TechIcon";

export default function ExperienceSection() {
  return (
    <section id="experience" className="pf-exp">
      {/* Full-bleed blueprint decoration — independent of content alignment */}
      <div className="pf-exp__decoration" aria-hidden="true">
        <span className="pf-exp__grid-lines" />
        <span className="pf-exp__frame-line" />
        <span className="pf-exp__cross pf-exp__cross--tl" />
        <span className="pf-exp__cross pf-exp__cross--tr" />
        <span className="pf-exp__cross pf-exp__cross--bl" />
        <span className="pf-exp__cross pf-exp__cross--br" />
        <span className="pf-exp__coord pf-exp__coord--1">A·01</span>
        <span className="pf-exp__coord pf-exp__coord--2">R·07</span>
        <span className="pf-exp__grain" />
        <span className="pf-exp__vignette" />
      </div>

      {/* Content — aligned to the same container as the hero + navigation */}
      <div className="pf-exp__inner">
        <div className="pf-exp__column">
          <h2 className="pf-exp__heading pf-display">
            <span className="pf-exp__chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 5l9 7-9 7"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Experience &amp; Stack
          </h2>

          <ol className="pf-timeline">
            {experience.map((entry, i) => (
              <li key={entry.period} className="pf-timeline__item">
                <div className="pf-timeline__meta">
                  <span className="pf-timeline__marker" aria-hidden="true" />
                  <span className="pf-timeline__period">{entry.period}</span>
                </div>
                <div className="pf-timeline__content">
                  <h3 className="pf-timeline__role">{entry.role}</h3>
                  <ul className="pf-timeline__points">
                    {entry.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                  {i === 0 && <span className="pf-timeline__divider" aria-hidden="true" />}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="pf-exp__stack">
          <div className="pf-exp__stack-heading">
            <span>Core Stack</span>
            <span className="pf-exp__stack-line" />
          </div>

          <div className="pf-core-grid">
            {coreStack.map((t) => (
              <div key={t.name} className="pf-core-card">
                <span className="pf-core-card__icon">
                  <TechIcon name={t.icon} size={44} />
                </span>
                <span className="pf-core-card__name">{t.name}</span>
              </div>
            ))}
          </div>

          <div className="pf-additional">
            <h3 className="pf-additional__title">Capabilities</h3>
            {additionalStack.map((group) => (
              <div className="pf-ledger-row" key={group.category}>
                <h4 className="pf-ledger-row__cat">{group.category}</h4>
                <ul className="pf-ledger-row__items">
                  {group.items.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
