"use client";

import { useCallback, useEffect, useState } from "react";
import type { ArchiveCategory } from "../../types/ProjectType";

type Cat = "all" | ArchiveCategory;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * Small client island. The archive itself is server-rendered (crawlable); this
 * only drives category filtering as progressive enhancement — it reflects the
 * active category onto #project-archive[data-filter] (CSS hides non-matches)
 * and keeps it URL-addressable via the History API (back/forward supported).
 */
export default function ArchiveFilters({
  counts,
  categories,
}: {
  counts: Record<string, number>;
  categories: { key: ArchiveCategory; label: string }[];
}) {
  const [active, setActive] = useState<Cat>("all");

  // Sync from the URL on mount and on browser back/forward.
  useEffect(() => {
    const read = () => {
      const c = (new URLSearchParams(window.location.search).get("category") ??
        "all") as Cat;
      setActive(c);
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  // Reflect the active category onto the server-rendered root for CSS filtering.
  useEffect(() => {
    document
      .getElementById("project-archive")
      ?.setAttribute("data-filter", active);
  }, [active]);

  const choose = useCallback((key: Cat) => {
    setActive(key);
    const params = new URLSearchParams(window.location.search);
    if (key === "all") params.delete("category");
    else params.set("category", key);
    const qs = params.toString();
    window.history.pushState(null, "", `/portfolio${qs ? `?${qs}` : ""}`);
  }, []);

  return (
    <div className="archive-filters">
      <button
        className="archive-filter"
        aria-pressed={active === "all"}
        onClick={() => choose("all")}
      >
        All <span className="archive-filter__count">{pad(counts.all)}</span>
      </button>
      {categories.map((c) => (
        <button
          key={c.key}
          className="archive-filter"
          aria-pressed={active === c.key}
          onClick={() => choose(c.key)}
        >
          {c.label}{" "}
          <span className="archive-filter__count">{pad(counts[c.key] ?? 0)}</span>
        </button>
      ))}
    </div>
  );
}
