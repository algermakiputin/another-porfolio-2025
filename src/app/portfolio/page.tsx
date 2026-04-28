import { readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import PortfolioPage from "../../views/portfolio/PortfolioPage";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies and projects across retail, e-commerce, and banking — web apps, mobile apps, and cloud-deployed systems built for real businesses.",
  openGraph: {
    title: "Portfolio | Alger Makiputin",
    description:
      "Case studies and projects across retail, e-commerce, and banking — web apps, mobile apps, and cloud-deployed systems built for real businesses.",
    url: `${BASE_URL}/portfolio`,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Alger Makiputin — Portfolio" }],
  },
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
};

export default function Page() {
  const file = readFileSync(join(process.cwd(), "public/contents/projects.json"), "utf-8");
  const projects = JSON.parse(file).projects as Array<{
    slug: string;
    title: string;
    metaDescription: string;
  }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio | Alger Makiputin",
    description: "Case studies and projects across retail, e-commerce, and banking.",
    url: `${BASE_URL}/portfolio`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `${BASE_URL}/project/${p.slug}`,
        description: p.metaDescription,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioPage />
    </>
  );
}
