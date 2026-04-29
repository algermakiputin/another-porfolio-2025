import type { Metadata } from "next";
import MobileAppPage from "../../views/services/MobileAppPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/mobile-app-development/`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Custom Mobile App Development (iOS & Android) | Alger Makiputin";
const DESCRIPTION =
  "Custom iOS & Android app development services for startups and businesses. React Native apps built for performance, scalability, and App Store publishing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "mobile app development services",
    "custom mobile app development",
    "iOS app development",
    "Android app development",
    "React Native developer",
    "app developers for startups",
    "cross-platform mobile app",
    "hire mobile app developer",
    "mobile app developer Philippines",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Custom Mobile App Development iOS Android" }],
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
  name: "Custom Mobile App Development (iOS & Android)",
  description: DESCRIPTION,
  url: PAGE_URL,
  serviceType: "Mobile App Development",
  areaServed: [
    { "@type": "Place", "name": "Worldwide" },
    { "@type": "Country", "name": "Philippines" },
  ],
  offers: {
    "@type": "Offer",
    price: "Contact for pricing",
    priceCurrency: "USD",
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
      <MobileAppPage />
    </>
  );
}
