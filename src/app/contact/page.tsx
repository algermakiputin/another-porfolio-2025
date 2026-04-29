import type { Metadata } from "next";
import ContactPage from "../../views/contact/ContactPage";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Available for freelance projects and full-time opportunities. Let's talk about your next web app, mobile app, or system integration.",
  openGraph: {
    title: "Contact | Alger Makiputin",
    description:
      "Available for freelance projects and full-time opportunities. Let's talk about your next web app, mobile app, or system integration.",
    url: `${BASE_URL}/contact`,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Contact Alger Makiputin" }],
  },
  alternates: {
    canonical: `${BASE_URL}/contact/`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact | Alger Makiputin",
  description: "Available for freelance projects and full-time opportunities.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
    image: `${BASE_URL}/images/profile.webp`,
    jobTitle: "Full Stack Engineer",
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
      <ContactPage />
    </>
  );
}
