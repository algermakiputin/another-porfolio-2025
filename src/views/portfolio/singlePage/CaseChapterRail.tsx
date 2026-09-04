"use client";

import { useEffect, useState } from "react";
import type { Chapter } from "./caseHelpers";

/** Secondary sticky chapter index. Highlights the chapter in view and
 *  smooth-scrolls on click. Sticky behavior is disabled under 1024px in CSS. */
export default function CaseChapterRail({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const els = chapters
      .map((c) => document.getElementById(`chap-${c.id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id.replace("chap-", ""));
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [chapters]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(`chap-${id}`);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="pf-case-rail" aria-label="Chapters">
      <ol>
        {chapters.map((c) => (
          <li key={c.id}>
            <a
              href={`#chap-${c.id}`}
              onClick={(e) => onClick(e, c.id)}
              className={`pf-case-rail__link ${active === c.id ? "is-active" : ""}`.trim()}
              aria-current={active === c.id ? "true" : undefined}
            >
              <span className="pf-case-rail__num">{c.num}</span>
              <span className="pf-case-rail__label">{c.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
