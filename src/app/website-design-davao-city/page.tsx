import type { Metadata } from "next";
import WebsiteDesignDavaoPage from "../../views/services/WebsiteDesignDavaoPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/website-design-davao-city`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Professional Website Design Davao City | Alger Makiputin";
const DESCRIPTION =
  "Professional website design in Davao City — fast, mobile-friendly, SEO-optimized. Help your business get found on Google and convert visitors into customers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "website design Davao City",
    "web design Davao",
    "website designer Davao City",
    "Davao website designer",
    "affordable website design Davao",
    "professional website Davao",
    "website design Davao Philippines",
    "web designer Davao",
    "business website Davao City",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Professional Website Design Davao City" }],
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
  name: "Professional Website Design in Davao City",
  description: DESCRIPTION,
  url: PAGE_URL,
  serviceType: "Website Design",
  areaServed: {
    "@type": "City",
    name: "Davao City",
    "@id": "https://www.wikidata.org/wiki/Q1405285",
  },
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
      addressRegion: "Davao del Sur",
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
      <WebsiteDesignDavaoPage />
    </>
  );
}
