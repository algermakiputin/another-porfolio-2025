import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ClientShell from "./ClientShell";
import "../index.css";
import "../App.css";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alger Makiputin — Full Stack Engineer",
    template: "%s | Alger Makiputin",
  },
  description:
    "Full Stack Engineer helping startups and businesses turn ideas into reliable, high-performance applications. From MVPs to production systems — performance, scalability, and clean architecture.",
  keywords: [
    "Full Stack Engineer",
    "React developer",
    "Node.js developer",
    "Laravel developer",
    "AWS",
    "TypeScript",
    "web application development",
    "e-commerce",
    "retail software",
    "Philippines developer",
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
    siteName: "Alger Makiputin — Full Stack Engineer",
    title: "Alger Makiputin — Full Stack Engineer",
    description:
      "Full Stack Engineer helping startups and businesses turn ideas into reliable, high-performance applications.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alger Makiputin — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alger Makiputin — Full Stack Engineer",
    description:
      "Full Stack Engineer helping startups and businesses turn ideas into reliable, high-performance applications.",
    images: ["/images/og-cover.jpg"],
    creator: "@algermakiputin",
  },
  alternates: {
    canonical: BASE_URL,
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
