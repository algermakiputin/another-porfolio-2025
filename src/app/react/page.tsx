import type { Metadata } from "next";
import ReactHubPage from "../../views/react/ReactHubPage";

const BASE_URL = "https://algermakiputin.com";
const PAGE_URL = `${BASE_URL}/react/`;
const OG_IMAGE = `${BASE_URL}/images/og-cover.jpg`;
const TITLE = "React Architecture, Performance & Production Lessons | Alger Makiputin";
const DESCRIPTION =
  "Production React lessons from a team lead who ships real web and mobile apps—architecture, state, performance, testing, offline-first and Capacitor.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "react development",
    "react architecture",
    "react performance",
    "production react apps",
    "react state management",
    "react testing",
    "offline first react",
    "capacitor react",
    "react team lead",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alger Makiputin",
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Alger Makiputin — production React architecture, performance and mobile",
      },
    ],
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
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#collection`,
  name: "React Architecture, Performance & Production Lessons",
  description: DESCRIPTION,
  url: PAGE_URL,
  author: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
    jobTitle: "Software Engineering Team Lead",
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
      <ReactHubPage />
    </>
  );
}
