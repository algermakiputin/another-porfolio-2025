import type { Metadata } from "next";
import EcommercePage from "../../views/services/EcommercePage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/ecommerce-development`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "Custom E-commerce Development for Businesses | Alger Makiputin";
const DESCRIPTION =
  "Custom e-commerce development — Shopify, WooCommerce, and headless React/Next.js stores built to convert. Payments, inventory, and order management included.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ecommerce development",
    "custom ecommerce website",
    "Shopify development",
    "WooCommerce development",
    "ecommerce developer for startups",
    "online store development",
    "headless ecommerce",
    "Next.js ecommerce",
    "ecommerce developer Philippines",
    "hire ecommerce developer",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Custom E-commerce Development Services" }],
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
  name: "Custom E-commerce Development for Businesses & Startups",
  description: DESCRIPTION,
  url: PAGE_URL,
  serviceType: "E-commerce Development",
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
      <EcommercePage />
    </>
  );
}
