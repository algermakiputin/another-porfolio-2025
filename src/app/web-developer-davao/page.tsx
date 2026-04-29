import type { Metadata } from "next";
import WebDeveloperDavaoPage from "../../views/services/WebDeveloperDavaoPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/web-developer-davao/`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Senior Web Developer in Davao City | Alger Makiputin";
const DESCRIPTION =
  "Senior freelance web developer in Davao City — custom web apps, business systems & websites. On-site available. 8+ years experience. Free quote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "web developer Davao",
    "web developer Davao City",
    "web development Davao City",
    "Davao web developer",
    "freelance web developer Davao",
    "custom website Davao",
    "senior web developer Davao",
    "hire web developer Davao",
    "React developer Davao City",
    "web development Davao Philippines",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Senior Web Developer Davao City Philippines" }],
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
  jobTitle: "Senior Full Stack Web Developer",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Davao City",
    addressRegion: "Davao del Sur",
    addressCountry: "PH",
  },
  areaServed: {
    "@type": "City",
    name: "Davao City",
    "@id": "https://www.wikidata.org/wiki/Q1405285",
  },
  knowsAbout: [
    "React", "Next.js", "Node.js", "TypeScript", "Laravel",
    "AWS", "PostgreSQL", "Docker", "REST APIs", "React Native",
    "Web Application Development", "Business Systems", "E-commerce",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Web Development Services in Davao City",
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
      <WebDeveloperDavaoPage />
    </>
  );
}
