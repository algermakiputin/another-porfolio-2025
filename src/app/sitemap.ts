import { readFileSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";
import { getBlogs } from "../lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://algermakiputin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const file = readFileSync(
    join(process.cwd(), "public/contents/projects.json"),
    "utf-8"
  );
  const { projects } = JSON.parse(file) as {
    projects: Array<{ slug: string }>;
  };

  const blogs = getBlogs();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/web-development-services/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mobile-app-development/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hire-web-developer-philippines/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ecommerce-development/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/web-developer-davao/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/website-design-davao-city/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/small-business-web-design-philippines/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/mobile-app-developer-davao/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/project/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs
    .filter((b) => !b.noIndex)
    .map((b) => ({
      url: `${BASE_URL}/blog/${b.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
