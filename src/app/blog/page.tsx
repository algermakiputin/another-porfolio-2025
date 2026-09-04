import { Suspense } from "react";
import type { Metadata } from "next";
import BlogPage from "../../views/blog/BlogPage";
import { getBlogs } from "../../lib/blog";
import type { BlogMeta } from "../../types/BlogType";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on product engineering, React, mobile architecture, AI-assisted development, and the lessons behind shipping real software.",
  openGraph: {
    title: "Blog | Alger Makiputin",
    description:
      "Practical notes on product engineering, React, mobile architecture, AI-assisted development, and the lessons behind shipping real software.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Alger Makiputin — Blog" }],
  },
  alternates: {
    canonical: `${BASE_URL}/blog/`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Alger Makiputin — Blog",
  description:
    "Practical notes on product engineering, React, mobile architecture, AI-assisted development, and shipping real software.",
  url: `${BASE_URL}/blog`,
  author: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
  },
};

export default function Page() {
  const posts: BlogMeta[] = getBlogs();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={null}>
        <BlogPage posts={posts} />
      </Suspense>
    </>
  );
}
