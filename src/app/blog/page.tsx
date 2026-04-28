import type { Metadata } from "next";
import BlogPage from "../../views/blog/BlogPage";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on full stack development, system architecture, performance optimization, and building scalable applications for real businesses.",
  openGraph: {
    title: "Blog | Alger Makiputin",
    description:
      "Insights on full stack development, system architecture, performance optimization, and building scalable applications for real businesses.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Alger Makiputin — Blog" }],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Alger Makiputin — Blog",
  description:
    "Insights on full stack development, system architecture, performance optimization, and building scalable applications.",
  url: `${BASE_URL}/blog`,
  author: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPage />
    </>
  );
}
