import type { Metadata } from "next";
import ServicePage from "../../views/services/ServicePage";
import { SERVICES } from "../../data/services";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/hire-web-developer-philippines/`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Hire a Web Developer in the Philippines | Alger Makiputin";
const DESCRIPTION =
  "Filipino product engineer — 8+ years across web and mobile with React, React Native, TypeScript and Node.js. Strong English, competitive rates. Available for remote projects worldwide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "hire web developer Philippines",
    "hire Filipino web developer",
    "freelance web developer Philippines",
    "outsource web development Philippines",
    "remote developer Philippines",
    "full stack developer Philippines",
    "hire React developer Philippines",
    "senior developer Philippines",
    "Filipino developer for hire",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Hire a Web Developer in the Philippines" }],
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
  "@type": "Person",
  "@id": `${BASE_URL}#person`,
  name: "Alger Makiputin",
  url: BASE_URL,
  image: `${BASE_URL}/images/profile.webp`,
  jobTitle: "Product Engineer",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Davao City",
    addressRegion: "Davao del Sur",
    addressCountry: "PH",
  },
  knowsAbout: [
    "React", "Next.js", "Node.js", "TypeScript", "Laravel",
    "AWS", "PostgreSQL", "Docker", "REST APIs", "React Native",
    "E-commerce Development", "SaaS Development", "Mobile App Development",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Full Stack Web Development Services",
      url: `${BASE_URL}/web-development-services`,
    },
  },
  sameAs: [
    "https://ph.linkedin.com/in/alger-makiputin",
    "https://github.com/algermakiputin",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePage content={SERVICES["hire-web-developer-philippines"]} />
    </>
  );
}
