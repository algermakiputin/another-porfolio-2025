import { about } from "../../../data/portfolio";
import BlueprintBackground from "../decorative/BlueprintBackground";
import SectionMarker from "../decorative/SectionMarker";
import StatModule from "../ui/StatModule";

export default function AboutSection() {
  return (
    <section id="about" className="pf-section pf-about">
      <BlueprintBackground tone="bone" />
      <div className="pf-container pf-about__inner">
        <div className="pf-about__copy">
          <SectionMarker title="About me" />
          <p className="pf-about__tagline">{about.tagline}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="pf-about__para">
              {p}
            </p>
          ))}

          <div className="pf-about__stats" role="list">
            {about.stats.map((s) => (
              <div role="listitem" key={s.label}>
                <StatModule icon={s.icon} value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </div>

        <div className="pf-about__visual">
          <img
            className="pf-about__map"
            src={about.map.src}
            alt="System map showing how my work connects Product, Frontend, Architecture, and Mobile."
            width={about.map.width}
            height={about.map.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
