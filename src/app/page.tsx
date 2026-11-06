import type { Metadata } from "next";
import HomePage from "../views/home/HomePage";
import { getBlogs } from "../lib/blog";
import type { BlogMeta } from "../types/BlogType";

export const metadata: Metadata = {
  title: "Alger Makiputin — Product Engineer | React, React Native & TypeScript",
  description:
    "Portfolio of product engineer and technical lead Alger Makiputin. Explore shipped apps, SaaS products, mobile engineering, and case studies.",
  alternates: {
    canonical: "https://algermakiputin.com/",
  },
  openGraph: {
    type: "website",
    url: "https://algermakiputin.com/",
    title: "Alger Makiputin — Product Engineer",
    description:
      "Product engineering across web and mobile. Explore Alger Makiputin's projects, experience, and technical writing.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alger Makiputin — Product Engineer, Web & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alger Makiputin — Product Engineer",
    description:
      "Product engineering across web and mobile. Explore Alger Makiputin's projects, experience, and technical writing.",
    images: ["/images/og-cover.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alger Makiputin",
  url: "https://algermakiputin.com",
  image: "https://algermakiputin.com/images/profile.webp",
  jobTitle: "Product Engineer and Software Engineering Team Lead",
  description:
    "Product engineer and technical lead building production software across web, iOS, Android, APIs, and data.",
  sameAs: [
    "https://ph.linkedin.com/in/alger-makiputin",
    "https://github.com/algermakiputin",
    "https://www.youtube.com/c/AlgerMakiputin",
    "https://www.facebook.com/hitme321/",
    "https://algerwrites.medium.com/",
  ],
  knowsAbout: [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Mobile Application Development",
    "Product Engineering",
    "API Development",
    "PostgreSQL",
    "Software Architecture",
    "Engineering Leadership",
    "Multi-Tenant Systems",
    "Offline-First Applications",
    "Cross-Platform Delivery",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Available for hire",
  },
};

export default function Page() {
  // Homepage "Field Notes" is curated independently of the blog archive order:
  // explicitly-flagged posts (by homepageOrder) win; otherwise fall back to the
  // real newest three so the section is never empty.
  const allPosts = getBlogs();
  const curated = allPosts
    .filter((p) => p.featuredOnHomepage)
    .sort((a, b) => (a.homepageOrder ?? 99) - (b.homepageOrder ?? 99));
  const recentPosts: BlogMeta[] = (curated.length ? curated : allPosts).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage recentPosts={recentPosts} />
    </>
  );
}
