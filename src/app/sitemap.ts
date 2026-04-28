import { readFileSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";

const BASE_URL = "https://algermakiputin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const file = readFileSync(
    join(process.cwd(), "public/contents/projects.json"),
    "utf-8"
  );
  const { projects } = JSON.parse(file) as {
    projects: Array<{ slug: string }>;
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/project/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
