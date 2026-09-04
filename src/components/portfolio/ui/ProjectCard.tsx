import Link from "next/link";
import type { Build } from "../../../data/portfolio";
import DeviceFrame from "./DeviceFrame";

/** Supporting build card: 16/9 media on top, compact body below.
 *  The flagship build is rendered separately by FeaturedProject. */
export default function ProjectCard({ build }: { build: Build }) {
  const href = `/project/${build.slug}`;
  return (
    <article className="pf-build">
      <div className="pf-build__media">
        {build.frame === "screenshot" && build.image ? (
          <img
            src={build.image}
            alt={build.imageAlt ?? `${build.name} screenshot`}
            className="pf-build__img"
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <DeviceFrame name={build.name} />
        )}
      </div>

      <div className="pf-build__body">
        <span className={`pf-build__tag pf-build__tag--${build.categoryTone}`}>
          {build.category}
        </span>
        <h3 className="pf-build__name">{build.name}</h3>
        <p className="pf-build__summary">{build.summary}</p>

        <ul className="pf-build__tech" aria-label="Technologies">
          {build.tech.slice(0, 3).map((t) => (
            <li key={t} className="pf-build__chip">
              {t}
            </li>
          ))}
        </ul>

        <Link href={href} className="pf-build__link">
          View case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
