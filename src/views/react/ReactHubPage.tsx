"use client";

import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import HireMeSection from "../../components/hireMeSection/HireMeSection";
import RevealSection from "../../components/ui/RevealSection";
import "./react-hub.css";

type Article = {
  title: string;
  href?: string;
  desc: string;
  comingSoon?: boolean;
};

type Section = {
  id: string;
  label: string;
  subtitle: string;
  articles: Article[];
};

const projects = [
  {
    name: "Hunter Vault",
    type: "Personal Finance App",
    desc: "An offline-first personal finance app shipped to web, iOS and Android from a single React codebase. Local-first on Dexie and IndexedDB, syncing to Supabase and Firebase, packaged with Capacitor, and subscriptions via RevenueCat, with an AI assistant and Smart Import on Supabase Edge Functions. Launched on both app stores in April 2026 and now has 2,500+ users.",
    href: "/project/hunter-vault/",
  },
  {
    name: "Zendtri POS",
    type: "Multi-Tenant POS Platform",
    desc: "A multi-tenant point-of-sale and inventory platform on React, Vite and Supabase, where many businesses share one deployment and are kept isolated by Row Level Security. Covers POS checkout, inventory, purchasing, receiving, stock transfers, cash management, reporting and role-based access.",
    href: "/project/zendtri-pos/",
  },
];

const sections: Section[] = [
  {
    id: "architecture",
    label: "React architecture",
    subtitle: "How I organize React apps so they stay changeable as they grow.",
    articles: [
      {
        title: "How I Structure Production React Applications in 2026",
        href: "/blog/react-application-architecture",
        desc: "My feature-based architecture, state ownership, services and deployment, and what changes as an app scales.",
      },
      {
        title: "React Folder Structure for Scalable Applications",
        href: "/blog/react-folder-structure",
        desc: "The exact feature-based folder structure I use, and why it beats organizing by file type.",
      },
    ],
  },
  {
    id: "state",
    label: "State and data management",
    subtitle: "Putting each kind of state in the right place.",
    articles: [
      {
        title: "How to Choose State Management for a React App",
        href: "/blog/react-state-management",
        desc: "A decision framework for local, shared, server, URL, form and offline state.",
      },
      {
        title: "React Context vs Zustand vs Server State",
        href: "/blog/react-context-vs-zustand-vs-server-state",
        desc: "Where each one fails, and why in my apps most state belongs to none of them.",
      },
    ],
  },
  {
    id: "performance",
    label: "Performance and debugging",
    subtitle: "Finding and fixing what's actually slow.",
    articles: [
      {
        title: "Common React Performance Problems I Find in Production Apps",
        href: "/blog/react-performance-problems",
        desc: "The repeat offenders behind 'slow React,' with before-and-after fixes.",
      },
      {
        title: "How to Find Unnecessary React Re-renders",
        href: "/blog/find-unnecessary-react-re-renders",
        desc: "A repeatable DevTools workflow: measure, find the cause, fix the narrowest thing, re-measure.",
      },
    ],
  },
  {
    id: "testing",
    label: "Testing and maintainability",
    subtitle: "Testing for confidence, not coverage.",
    articles: [
      {
        title: "Testing React Applications Without Testing Every Implementation Detail",
        href: "/blog/react-testing-strategy",
        desc: "A risk-based testing strategy that tests behavior, not internals.",
      },
      {
        title: "How I Handle Forms and Validation in Large React Applications",
        href: "/blog/react-forms-validation-large-apps",
        desc: "Matching the form approach to the interaction, from controlled state to schema validation.",
      },
    ],
  },
  {
    id: "mobile",
    label: "React for mobile and real-world products",
    subtitle: "Shipping React beyond the browser.",
    articles: [
      {
        title: "Building an Offline-First React App with Dexie and IndexedDB",
        href: "/blog/offline-first-react-dexie-indexeddb",
        desc: "How I built a local-first finance app with Dexie, reactive queries and background cloud sync.",
      },
      {
        title: "Turning a React Web App into iOS and Android Apps with Capacitor",
        href: "/blog/react-web-app-to-ios-android-capacitor",
        desc: "Shipping one React codebase to both app stores, and when React Native is the better call.",
      },
      {
        title: "React Native vs Capacitor: How I Choose for a New Mobile App",
        href: "/blog/react-native-vs-capacitor",
        desc: "The rendering models, the honest costs of each, and the decision framework I use to pick.",
      },
      {
        title: "Synchronizing an Offline-First Dexie Database with Supabase",
        href: "/blog/synchronizing-indexeddb-with-supabase",
        desc: "Dual-key identity, tombstone deletes, last-write-wins conflicts, and merging cloud changes back.",
      },
      {
        title: "React and Supabase Architecture for Multi-Tenant Applications",
        desc: "Tenant isolation with Row Level Security, roles and branches.",
        comingSoon: true,
      },
    ],
  },
  {
    id: "leadership",
    label: "Leading React projects",
    subtitle: "Lessons from working as a frontend lead, beyond the code.",
    articles: [
      {
        title: "Lessons I Learned Leading a React Frontend Project",
        desc: "Managing scope, communicating tradeoffs, and keeping a team moving on a complex product.",
        comingSoon: true,
      },
    ],
  },
];

const ReactHubPage = () => {
  return (
    <div className="react-hub-page">
      {/* Hero */}
      <Box className="rh-hero">
        <Box className="rh-hero-inner">
          <Box className="rh-world-label">
            <span aria-hidden="true">✦</span>
            Blog / React articles
          </Box>
          <Typography variant="h1" className="rh-hero-title">
            React Development: Architecture, Performance and Production Lessons
          </Typography>
          <Typography className="rh-hero-sub">
            I&apos;m Alger Makiputin, a software engineering team lead and React
            developer from the Philippines. This is where I write about React
            the way I actually work with it — building, shipping, debugging and
            maintaining real web and mobile applications, not walking through
            beginner tutorials.
          </Typography>
          <Typography className="rh-hero-sub">
            Everything here comes out of production. The architecture decisions,
            the state-management tradeoffs, the performance fixes, the
            offline-first data layer, the mobile releases to both app stores —
            they&apos;re lessons from apps I&apos;ve built and continue to
            maintain, with the mistakes left in, because the mistakes are
            usually the useful part.
          </Typography>
        </Box>
      </Box>

      {/* What I build */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="rh-section-header">
              <Typography variant="h2" className="rh-section-label">
                What I build
              </Typography>
            </Box>
            <Box className="rh-projects-grid">
              {projects.map((p) => (
                <Box key={p.name} className="rh-project-card">
                  <Typography className="rh-project-type">{p.type}</Typography>
                  <Typography className="rh-project-name">{p.name}</Typography>
                  <Typography className="rh-project-desc">{p.desc}</Typography>
                  <Link href={p.href} className="rh-project-link">
                    Case study <ArrowForwardIcon sx={{ fontSize: 13 }} />
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* Start here */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="rh-start-here">
              <Typography className="rh-start-label">START HERE</Typography>
              <Typography className="rh-start-title">
                <Link
                  href="/blog/react-application-architecture"
                  className="rh-start-link"
                >
                  How I Structure Production React Applications in 2026
                  <ArrowForwardIcon
                    className="rh-start-arrow"
                    sx={{ fontSize: 18 }}
                  />
                </Link>
              </Typography>
              <Typography className="rh-start-desc">
                The flagship piece that lays out the feature-based architecture
                the rest of this writing builds on.
              </Typography>
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* Article sections */}
      {sections.map((section) => (
        <RevealSection key={section.id}>
          <Box className="page-section">
            <Box className="section-inner">
              <Box className="rh-section-header">
                <Typography variant="h2" className="rh-section-label">
                  {section.label}
                </Typography>
                <Typography className="rh-section-subtitle">
                  {section.subtitle}
                </Typography>
              </Box>
              <Box className="rh-article-list">
                {section.articles.map((article) =>
                  article.comingSoon ? (
                    <Box key={article.title} className="rh-article rh-article--soon">
                      <Box className="rh-article-body">
                        <Typography className="rh-article-title">
                          {article.title}
                        </Typography>
                        <Typography className="rh-article-desc">
                          {article.desc}
                        </Typography>
                      </Box>
                      <span className="rh-coming-soon-chip">Coming soon</span>
                    </Box>
                  ) : (
                    <Link
                      key={article.title}
                      href={article.href!}
                      className="rh-article"
                    >
                      <Box className="rh-article-body">
                        <Typography className="rh-article-title">
                          {article.title}
                        </Typography>
                        <Typography className="rh-article-desc">
                          {article.desc}
                        </Typography>
                      </Box>
                      <ArrowForwardIcon
                        className="rh-article-arrow"
                        sx={{ fontSize: 16 }}
                      />
                    </Link>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </RevealSection>
      ))}

      <Box className="rh-closing-cta">
        <HireMeSection />
      </Box>
    </div>
  );
};

export default ReactHubPage;
