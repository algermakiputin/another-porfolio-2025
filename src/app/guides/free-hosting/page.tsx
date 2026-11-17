import type { Metadata } from "next";
import FreeHostingGuide from "../../../views/guides/free-hosting/FreeHostingGuide";

const BASE_URL = "https://algermakiputin.com";
const GUIDE_URL = `${BASE_URL}/guides/free-hosting/`;

const TITLE = "Paano Mag-host ng Website nang Libre (2027 Guide for Beginners)";
const DESCRIPTION =
  "Libreng step-by-step Taglish guide: i-publish ang una mong website gamit ang GitHub Pages, Cloudflare Pages, Vercel, o Netlify. May pictures, quiz, sample project, at troubleshooting — kahit cellphone lang.";

export const metadata: Metadata = {
  title: "Libreng Website Hosting Guide for Beginners (2027)",
  description: DESCRIPTION,
  keywords: [
    "free website hosting 2026",
    "how to host a website for free",
    "free hosting Philippines",
    "deploy HTML website free",
    "host React website free",
    "GitHub Pages tutorial for beginners",
    "libreng hosting",
    "Cloudflare Pages tutorial",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: GUIDE_URL,
    siteName: "Alger Makiputin",
    locale: "tl_PH",
    type: "article",
    images: [{ url: "/images/free-hosting-og.png", width: 1200, height: 630, alt: "Libreng website hosting guide — Alger Makiputin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@algermakiputin",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/free-hosting-og.png"],
  },
  alternates: {
    canonical: GUIDE_URL,
  },
};

const graphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${GUIDE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: "tl",
      datePublished: "2026-11-17",
      dateModified: "2026-11-17",
      author: { "@id": `${GUIDE_URL}#author` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      image: { "@id": `${GUIDE_URL}#primaryimage` },
      mainEntityOfPage: { "@type": "WebPage", "@id": GUIDE_URL },
      wordCount: 2400,
      articleBody:
        "Para sa Filipino beginners: walang coding experience na kailangan. Sundan lang ang pictures, at sa Chapter 3 may live website ka na — kahit cellphone lang ang gamit mo.",
    },
    {
      "@type": "Person",
      "@id": `${GUIDE_URL}#author`,
      name: "Alger Makiputin",
      jobTitle: "Product Engineer",
      url: BASE_URL,
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Alger Makiputin",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/alger-world/favicon.svg`,
        width: 64,
        height: 64,
      },
    },
    {
      "@type": "ImageObject",
      "@id": `${GUIDE_URL}#primaryimage`,
      url: `${BASE_URL}/images/free-hosting-og.png`,
      width: 1200,
      height: 630,
      caption: "Libreng website hosting guide — Alger Makiputin",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${GUIDE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Libreng Website Hosting Guide",
          item: GUIDE_URL,
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": `${GUIDE_URL}#howto`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "tl",
      author: { "@id": `${GUIDE_URL}#author` },
      datePublished: "2026-11-17",
      dateModified: "2026-11-17",
      totalTime: "PT90M",
      estimatedCost: { "@type": "MonetaryAmount", currency: "PHP", value: "0" },
      tool: [{ "@type": "HowToTool", name: "Phone o laptop na may internet" }],
      step: [
        { "@type": "HowToStep", position: 1, name: "I-download ang sample website" },
        { "@type": "HowToStep", position: 2, name: "Gumawa ng GitHub account" },
        { "@type": "HowToStep", position: 3, name: "Gumawa ng repository" },
        { "@type": "HowToStep", position: 4, name: "I-upload ang files" },
        { "@type": "HowToStep", position: 5, name: "Buksan ang Settings → Pages" },
        { "@type": "HowToStep", position: 6, name: "I-set ang Deploy from a branch at i-Save" },
        { "@type": "HowToStep", position: 7, name: "Buksan ang live URL" },
        { "@type": "HowToStep", position: 8, name: "Mag-update ng content" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${GUIDE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Libre ba talaga ang mag-host ng website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oo — ang GitHub Pages, Cloudflare Pages, Vercel Hobby, at Netlify Free ay $0 para magsimula, pero may limits sa bandwidth, builds, at commercial use.",
          },
        },
        {
          "@type": "Question",
          name: "Alin ang pinaka-madali sa beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ang GitHub Pages: lahat gagawin sa browser (upload ng files, pindot ng Save) at puwede kahit sa phone.",
          },
        },
        {
          "@type": "Question",
          name: "Puwede ba ang libreng hosting sa business website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depende sa platform: bawal ang online business sa GitHub Pages at non-commercial lang ang Vercel Hobby; walang commercial ban ang Cloudflare Pages sa docs nila.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }} />
      <FreeHostingGuide />
    </>
  );
}
