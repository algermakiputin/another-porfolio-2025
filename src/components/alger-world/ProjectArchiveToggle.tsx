"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "../../types/ProjectType";

export default function ProjectArchiveToggle({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="archive-banner">
        <div className="archive-banner-icon" aria-hidden="true">✦</div>
        <div>
          <span className="world-archive-kicker">FULL ARCHIVE · BEYOND THE HIGHLIGHTS</span>
          <h3>There&apos;s more to explore.</h3>
          <p>
            Seven additional builds across retail, mobile, payroll, education and web templates.
          </p>
        </div>
        <button
          type="button"
          className="game-btn game-btn--gold"
          aria-controls="project-archive"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "HIDE ARCHIVE" : `SHOW ${projects.length} MORE PROJECTS`}{" "}
          <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
        </button>
      </div>

      <div className="archive-grid" id="project-archive" hidden={!expanded}>
        {projects.map((project) => (
          <Link key={project.slug} href={`/project/${project.slug}`}>
            <span>{project.platforms?.join(" · ") ?? (project.platform === "mobile" ? "MOBILE" : "WEB")}</span>
            <strong>{project.shortTitle ?? project.title}</strong>
            <small>{project.techStack?.slice(0, 3).join(" · ")}</small>
            <b aria-hidden="true">↗</b>
          </Link>
        ))}
      </div>
    </>
  );
}

