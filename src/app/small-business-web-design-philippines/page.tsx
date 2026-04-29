import type { Metadata } from "next";
import SmallBusinessWebDesignPage from "../../views/services/SmallBusinessWebDesignPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/small-business-web-design-philippines`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Affordable Small Business Web Design Philippines | Alger Makiputin";
const DESCRIPTION =
  "Affordable professional websites for small businesses across the Philippines — mobile-friendly, SEO-optimized, built to bring in more customers from Google.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "small business web design Philippines",
    "affordable web design Philippines",
    "budget website small business Philippines",
    "website for small business Philippines",
    "cheap web design Philippines",
    "web design for startups Philippines",
    "professional website small business",
    "local business website Philippines",
    "web designer for small business",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Affordable Small Business Web Design Philippines" }],
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
  name: "Affordable Small Business Web Design Philippines",
  description: DESCRIPTION,
  url: PAGE_URL,
  serviceType: "Web Design",
  areaServed: [
    { "@type": "Country", name: "Philippines" },
    { "@type": "City", name: "Metro Manila" },
    { "@type": "City", name: "Cebu City" },
    { "@type": "City", name: "Davao City", "@id": "https://www.wikidata.org/wiki/Q1405285" },
  ],
  offers: {
    "@type": "Offer",
    price: "Contact for pricing",
    priceCurrency: "PHP",
  },
  provider: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
    image: `${BASE_URL}/images/profile.webp`,
    jobTitle: "Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davao City",
      addressCountry: "PH",
    },
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
      <SmallBusinessWebDesignPage />
    </>
  );
}
