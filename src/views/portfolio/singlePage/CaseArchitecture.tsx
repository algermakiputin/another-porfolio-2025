import type { ArchLayer } from "./caseHelpers";

/** One connected system diagram assembled from verified technologies only.
 *  Layers flow top-to-bottom (client → logic → data) with a delivery branch. */
export default function CaseArchitecture({
  layers,
  targets,
  shortTitle,
  caption: captionOverride,
}: {
  layers: ArchLayer[];
  targets: string[];
  shortTitle: string;
  caption?: string;
}) {
  const iface = layers.find((l) => l.key === "interface")?.techs ?? [];
  const data = layers.find((l) => l.key === "data")?.techs ?? [];
  const caption =
    captionOverride ??
    `${shortTitle} runs a ${iface.slice(0, 2).join(" · ") || "client"} interface` +
    (data.length ? `, persisted in ${data.join(" · ")}` : "") +
    `, delivered to ${targets.join(" · ")}.`;

  return (
    <figure className="pf-arch">
      <div className="pf-arch__panel">
        <span className="pf-arch__gridlines" aria-hidden="true" />
        <span className="pf-arch__corner pf-arch__corner--tl" aria-hidden="true" />
        <span className="pf-arch__corner pf-arch__corner--br" aria-hidden="true" />
        <span className="pf-arch__plate" aria-hidden="true">
          SYS / {targets.length} TARGET{targets.length === 1 ? "" : "S"}
        </span>

        <div className="pf-arch__flow">
          {layers.map((layer, i) => (
            <div className="pf-arch__step" key={layer.key}>
              <div
                className={`pf-arch__node ${layer.accent ? "pf-arch__node--data" : ""}`.trim()}
              >
                <span className="pf-arch__node-label">{layer.label}</span>
                <ul className="pf-arch__node-techs">
                  {layer.techs.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              {i < layers.length - 1 && (
                <span className="pf-arch__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 40" fill="none">
                    <path
                      d="M12 2v30m0 0l-6-7m6 7l6-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="pf-arch__delivery">
          <span className="pf-arch__delivery-label">Delivery</span>
          <div className="pf-arch__branches">
            {targets.map((t) => (
              <span className="pf-arch__branch" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="pf-arch__cap">{caption}</figcaption>
    </figure>
  );
}
