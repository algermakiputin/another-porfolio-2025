import Image from "next/image";
import Link from "next/link";
import { hero } from "../../../data/portfolio";
import PortfolioButton from "../ui/PortfolioButton";

export default function HeroSection() {
  return (
    <section className="pf-section pf-hero" aria-labelledby="hero-name">
      {/* Section-wide background (grain only) */}
      <div className="pf-hero__bg" aria-hidden="true">
        <span className="pf-hero__grain" />
      </div>

      {/* Geometric polygon background — positioned relative to the full-width
          section so it always reaches the right viewport edge regardless of any
          constrained inner containers (grid columns, padded wrappers, etc.). */}
      <div className="pf-hero__art-background" aria-hidden="true">
        <img className="pf-hero__art-shards" src="/portfolio/motifs/accent-shards.svg" alt="" />
      </div>

      <div className="pf-hero__inner">
        <div className="pf-hero__copy pf-rise pf-rise-1">

          <h1 id="hero-name" className="pf-hero__name pf-display">
            {hero.nameLines.map((line) => (
              <span key={line} className="pf-hero__name-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="pf-hero__role">{hero.role}</p>
          <p className="pf-hero__stack">{hero.stack}</p>
          <p className="pf-hero__intro">{hero.intro}</p>

          {/* Desktop + tablet CTAs — hidden on mobile */}
          <div className="pf-hero__ctas pf-hero__ctas--desktop">
            <PortfolioButton href={hero.primaryCta.href} variant="primary" trailing="arrow">
              {hero.primaryCta.label}
            </PortfolioButton>
            <PortfolioButton href={hero.secondaryCta.href} variant="ghost" trailing="dot">
              {hero.secondaryCta.label}
            </PortfolioButton>
          </div>

          {/* Mobile CTAs — hidden above 767px */}
          <div className="pf-hero__ctas--mobile">
            <a href={hero.primaryCta.href} className="pf-hero__cta-mob-primary">
              <span>{hero.primaryCta.label}</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link href={hero.secondaryCta.href} className="pf-hero__cta-mob-secondary">
              <span>{hero.secondaryCta.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Mobile-only compact availability — hidden above 767px */}
          <div className="pf-hero__availability">
            <span className="pf-hero__avail-dot" aria-hidden="true" />
            <span className="pf-hero__avail-text">Available for select projects</span>
          </div>

        </div>

        {/* Bounded art viewport — coordinate system starts below the header. */}
        <div className="pf-hero__art-viewport" aria-hidden="true">

          {/* Art stage: every foreground asset is positioned relative to this */}
          <div className="pf-hero__art-stage">
            <img className="pf-hero__compass" src="/portfolio/motifs/compass-star.svg" alt="" />
            <img
              className="pf-panel pf-panel--database"
              src="/portfolio/panels/database.svg"
              alt=""
              width={170}
              height={176}
            />
            <img
              className="pf-panel pf-panel--status"
              src="/portfolio/panels/status.svg"
              alt=""
              width={180}
              height={150}
            />
            <img
              className="pf-panel pf-panel--system"
              src="/portfolio/panels/system-architecture.svg"
              alt=""
              width={460}
              height={290}
            />
            <img
              className="pf-panel pf-panel--components"
              src="/portfolio/panels/component-tree.svg"
              alt=""
              width={380}
              height={250}
            />
            <div className="pf-hero__workstation-wrap">
              <Image
                className="pf-hero__workstation"
                src={hero.workstation.src}
                alt=""
                width={hero.workstation.width}
                height={hero.workstation.height}
                priority
                sizes="(max-width: 900px) 92vw, (max-width: 1099px) 56vw, 68vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
