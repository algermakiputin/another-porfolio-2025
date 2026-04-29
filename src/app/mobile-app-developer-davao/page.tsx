import type { Metadata } from "next";
import MobileAppDavaoPage from "../../views/services/MobileAppDavaoPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/mobile-app-developer-davao`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Custom Mobile App Developer in Davao City | Alger Makiputin";
const DESCRIPTION =
  "Custom iOS & Android app developer in Davao City — React Native for local businesses. Automate operations, reach more customers, grow faster.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "mobile app developer Davao",
    "mobile app developer Davao City",
    "Davao app developer",
    "app development Davao",
    "mobile app development Davao City",
    "custom app developer Davao",
    "iOS Android developer Davao",
    "hire app developer Davao",
    "React Native developer Davao",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Custom Mobile App Developer Davao City iOS Android" }],
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
  name: "Custom Mobile App Development in Davao City",
  description: DESCRIPTION,
  url: PAGE_URL,
  serviceType: "Mobile App Development",
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
      <MobileAppDavaoPage />
    </>
  );
}
