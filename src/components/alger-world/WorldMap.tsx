"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { worldDestinations, type WorldKey } from "../../data/algerWorld";

export default function WorldMap() {
  const [selectedKey, setSelectedKey] = useState<WorldKey>("projects");
  const selected = worldDestinations.find((world) => world.key === selectedKey) ?? worldDestinations[1];
  const previewRef = useRef<HTMLDivElement>(null);

  // On stacked layouts the preview sits below the fold; bring it into view
  // when a node is picked. `nearest` is a no-op when already visible
  // (side-by-side layout), so this is safe to run unconditionally.
  const selectWorld = (key: WorldKey) => {
    setSelectedKey(key);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    previewRef.current?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "nearest",
    });
  };

  return (
    <>
      <div className="map-layout">
      <div className="map-frame">
        <div className="map-topbar">
          <span>
            <span className="mini-cross">✦</span> ALGER MAKIPUTIN{" "}
            <span className="map-topbar-muted">/ SITE MAP</span>
          </span>
          <span className="map-hint">SELECT A LOCATION TO PREVIEW <span aria-hidden="true">↘</span></span>
        </div>
        <div
          className="map-scroll"
          tabIndex={0}
          aria-label="Site map; scroll horizontally on small screens to see all sections"
        >
          <div className="map-surface">
            <img src="/alger-world/overworld-land.svg" className="map-art" alt="" loading="lazy" />
            <span className="map-compass" aria-hidden="true">N ↑<br />W ✧ E<br />S ↓</span>
            {worldDestinations.map((world) => {
              const active = selected.key === world.key;
              return (
                <button
                  key={world.key}
                  className={`world-node world-node--${world.key}${active ? " active" : ""}`}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectWorld(world.key)}
                >
                  <span className={`node-num${world.bonus ? " bonus-num" : ""}`}>{world.number}</span>
                  <span className="node-image"><img src={world.icon} alt="" loading="lazy" /></span>
                  <span className="node-name">{world.mapLabel[0]}<br />{world.mapLabel[1]}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="map-bottom-bar">
          <span><span className="legend-mark legend-mark--gold" /> SELECTED SECTION</span>
          <span><span className="legend-mark legend-mark--mint" /> CLICK TO EXPLORE</span>
          <span className="map-scroll-help">← SWIPE MAP TO SEE MORE →</span>
        </div>
      </div>

      <div className="world-preview" id="world-preview" ref={previewRef} aria-live="polite">
        <div className="preview-icon"><img src={selected.icon} alt="" loading="lazy" /></div>
        <div className="world-preview-copy">
          <span className="preview-meta">{selected.previewMeta}</span>
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
          <div className="preview-tags">
            {selected.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <Link className="game-btn game-btn--red preview-btn" href={selected.href}>
          {selected.action} <span aria-hidden="true">↗</span>
        </Link>
      </div>
      </div>
      <div className="map-under">
        <span><span className="map-faq-icon">i</span> Every section is open — jump to whatever interests you.</span>
        <a href="#projects">Just show me the work <span aria-hidden="true">↗</span></a>
      </div>
    </>
  );
}

