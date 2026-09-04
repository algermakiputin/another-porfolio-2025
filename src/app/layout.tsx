import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Script from "next/script";
import { Bebas_Neue } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import ClientShell from "./ClientShell";
import "../index.css";
import "../App.css";
import "../styles/portfolio.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const GA_ID = "G-XGKHB8ZDZJ";

const BASE_URL = "https://algermakiputin.com";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alger Makiputin",
  url: BASE_URL,
  author: { "@type": "Person", name: "Alger Makiputin", url: BASE_URL },
};

export const viewport: Viewport = {
  themeColor: "#09131f",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  // AM Northmark compass marker as the SVG favicon. The apple-touch icon still
  // comes from the app/apple-icon.png convention (different rel, no duplicate).
  icons: {
    icon: [{ url: "/logo/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/logo/favicon.svg",
    // Preserve the existing PNG apple-touch icon (config here disables the
    // app/apple-icon.png file convention, so it must be declared explicitly).
    apple: [{ url: "/apple-icon.png" }],
  },
  title: {
    default: "Alger Makiputin — Product Engineer | React, React Native & TypeScript",
    template: "%s | Alger Makiputin",
  },
  description:
    "Product Engineer with 8+ years of experience shipping production software across web, iOS, Android, APIs, and data using React, React Native, TypeScript, and Node.js.",
  keywords: [
    "product engineer",
    "React developer",
    "React Native developer",
    "TypeScript developer",
    "Node.js developer",
    "Next.js developer",
    "mobile app developer",
    "web application developer",
    "API development",
    "PostgreSQL developer",
    "software architecture",
    "engineering leadership",
    "cross-platform mobile development",
    "product engineer Philippines",
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
    siteName: "Alger Makiputin — Product Engineer | React, React Native & TypeScript",
    title: "Alger Makiputin — Product Engineer | React, React Native & TypeScript",
    description:
      "Product Engineer with 8+ years of experience shipping production software across web, iOS, Android, APIs, and data using React, React Native, TypeScript, and Node.js.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alger Makiputin — Product Engineer, Web & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alger Makiputin — Product Engineer | React, React Native & TypeScript",
    description:
      "Product Engineer with 8+ years of experience shipping production software across web, iOS, Android, APIs, and data using React, React Native, TypeScript, and Node.js.",
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
    // suppressHydrationWarning: browser extensions / preview tools inject
    // attributes (e.g. data-mdv-preview-bridge) onto <html> before React
    // hydrates. This is one-level only and does not mask app-level mismatches.
    <html lang="en" className={bebas.variable} suppressHydrationWarning>
      <body>
        {/* Single global route-change progress bar. z-index sits above the fixed
            header (--pf-z-header: 100) and overlays (200) so the thin orange line
            is always visible. showForHashAnchor=false keeps it off same-page
            hash links (#builds, skip link, TOC). Color is the portfolio accent
            token (--portfolio-orange) rather than a one-off hex. */}
        <NextTopLoader
          color="#e7652d"
          height={2}
          initialPosition={0.08}
          crawl
          crawlSpeed={200}
          speed={200}
          showSpinner={false}
          shadow={false}
          zIndex={9999}
          showAtBottom={false}
          showForHashAnchor={false}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <AppRouterCacheProvider>
          <ClientShell>{children}</ClientShell>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
