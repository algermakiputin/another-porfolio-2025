import { readFileSync } from "fs";
import { join } from "path";
import type { Project } from "../types/ProjectType";

/** Server-only: the canonical project list (read at build time). */
export function getRawProjects(): Project[] {
  const file = readFileSync(
    join(process.cwd(), "public/contents/projects.json"),
    "utf-8"
  );
  return JSON.parse(file).projects as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getRawProjects().find((p) => p.slug === slug);
}
