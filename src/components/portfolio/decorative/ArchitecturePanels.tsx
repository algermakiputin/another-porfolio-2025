/**
 * Floating architecture panels for the hero. Kept as separate layers from the
 * workstation so they can be repositioned / hidden at breakpoints (never
 * overlapping the headline or CTAs). Fully decorative.
 */
const panels = [
  { key: "system", src: "/portfolio/panels/system-architecture.svg", w: 460, h: 290 },
  { key: "components", src: "/portfolio/panels/component-tree.svg", w: 380, h: 250 },
  { key: "database", src: "/portfolio/panels/database.svg", w: 170, h: 176 },
  { key: "status", src: "/portfolio/panels/status.svg", w: 180, h: 150 },
] as const;

export default function ArchitecturePanels() {
  return (
    <div className="pf-panels" aria-hidden="true">
      {panels.map((p) => (
        <img
          key={p.key}
          src={p.src}
          alt=""
          width={p.w}
          height={p.h}
          className={`pf-panel pf-panel--${p.key}`}
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
}
