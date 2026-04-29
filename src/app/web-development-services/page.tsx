import type { Metadata } from "next";
import WebDevelopmentPage from "../../views/services/WebDevelopmentPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/web-development-services`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Web Development Services | Alger Makiputin";
const DESCRIPTION =
  "Custom web apps, SaaS platforms, and production-ready systems — React, Node.js, TypeScript, AWS. Full stack developer for startups and businesses.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "web development services",
    "custom web application developer",
    "React developer for hire",
    "full stack web developer",
    "SaaS developer",
    "Node.js developer",
    "Next.js developer",
    "hire web developer",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Web Development Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@algermakiputin",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Web Development Services",
  description: DESCRIPTION,
  url: PAGE_URL,
  serviceType: "Web Development",
  areaServed: "Worldwide",
  provider: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
    image: `${BASE_URL}/images/profile.webp`,
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://ph.linkedin.com/in/alger-makiputin",
      "https://github.com/algermakiputin",
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebDevelopmentPage />
    </>
  );
}
