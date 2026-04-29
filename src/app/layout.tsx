import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ClientShell from "./ClientShell";
import "../index.css";
import "../App.css";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alger Makiputin | Full Stack Developer for Startups & MVPs",
    template: "%s | Alger Makiputin",
  },
  description:
    "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems using React, Node.js, TypeScript, and AWS.",
  keywords: [
    "full stack developer Philippines",
    "React developer for startups",
    "MVP developer SaaS",
    "AWS full stack freelancer",
    "hire full stack developer",
    "freelance web developer Philippines",
    "Node.js developer for hire",
    "Laravel developer Philippines",
    "e-commerce developer for hire",
    "full stack engineer remote",
    "web app developer retail",
    "TypeScript developer freelance",
    "cloud developer AWS Philippines",
    "scalable web application developer",
  ],
  authors: [{ name: "Alger Makiputin", url: BASE_URL }],
  creator: "Alger Makiputin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Alger Makiputin | Full Stack Developer for Startups & MVPs",
    title: "Alger Makiputin | Full Stack Developer for Startups & MVPs",
    description:
      "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems using React, Node.js, TypeScript, and AWS.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alger Makiputin | Full Stack Developer for Startups and MVPs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alger Makiputin | Full Stack Developer for Startups & MVPs",
    description:
      "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems using React, Node.js, TypeScript, and AWS.",
    images: ["/images/og-cover.jpg"],
    creator: "@algermakiputin",
  },
  alternates: {
    canonical: `${BASE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ClientShell>{children}</ClientShell>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
