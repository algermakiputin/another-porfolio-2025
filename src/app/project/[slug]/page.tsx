import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import PortfolioSinglePage from "../../../views/portfolio/singlePage/PortfolioSinglePage";

const BASE_URL = "https://algermakiputin.com";

type ProjectEntry = {
  slug: string;
  title: string;
  metaDescription: string;
  image?: string;
  platform?: string;
  techStack?: string[];
};

function getProjects(): ProjectEntry[] {
  const file = readFileSync(
    join(process.cwd(), "public/contents/projects.json"),
    "utf-8"
  );
  return JSON.parse(file).projects;
}

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);

  if (!project) return {};

  const url = `${BASE_URL}/project/${slug}/`;
  const ogImage = project.image
    ? { url: project.image, width: 1200, height: 630, alt: project.title }
    : { url: "/images/og-cover.jpg", width: 1200, height: 630, alt: project.title };

  return {
    title: project.title,
    description: project.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Alger Makiputin`,
      description: project.metaDescription,
      url,
      type: "article",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Alger Makiputin`,
      description: project.metaDescription,
      images: [ogImage.url],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);

  const jsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": project.platform === "mobile" ? "MobileApplication" : "WebApplication",
        name: project.title,
        description: project.metaDescription,
        url: `${BASE_URL}/project/${slug}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: project.platform === "mobile" ? "Android, iOS" : "Web",
        author: {
          "@type": "Person",
          name: "Alger Makiputin",
          url: BASE_URL,
        },
        ...(project.techStack && { keywords: project.techStack.join(", ") }),
        ...(project.image && { image: project.image }),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <PortfolioSinglePage />
    </>
  );
}
