import Link from "next/link";
import type { Build } from "../../../data/portfolio";
import DeviceFrame from "./DeviceFrame";

function buildSrcSet(src: string, widths: number[]): string {
  const dot = src.lastIndexOf(".");
  const base = src.slice(0, dot);
  const ext = src.slice(dot);
  return widths.map((w) => `${base}-${w}${ext} ${w}w`).join(", ");
}

/** The single flagship build — media beside content on desktop, stacked on
 *  mobile. Height is capped so it reads as a header, not an oversized hero. */
export default function FeaturedProject({ build }: { build: Build }) {
  const href = `/project/${build.slug}`;
  return (
    <article className="pf-featured">
      <div className="pf-featured__media">
        <span className="pf-featured__ribbon">Featured</span>
        {build.frame === "screenshot" && build.image ? (
          <img
            src={build.image}
            srcSet={buildSrcSet(build.image, [480, 800])}
            sizes="(max-width: 767px) 100vw, 900px"
            alt={build.imageAlt ?? `${build.name} screenshot`}
            width={900}
            height={560}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <DeviceFrame name={build.name} />
        )}
      </div>

      <div className="pf-featured__content">
        <span className={`pf-build__tag pf-build__tag--${build.categoryTone}`}>
          {build.category}
        </span>
        <h3 className="pf-featured__name">{build.name}</h3>
        <p className="pf-featured__summary">{build.summary}</p>

        <ul className="pf-build__tech" aria-label="Technologies">
          {build.tech.slice(0, 4).map((t) => (
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
