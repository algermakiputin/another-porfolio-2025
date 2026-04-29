"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WebIcon from "@mui/icons-material/Web";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Reviews from "../home/reviews/Reviews";
import HireMeSection from "../../components/hireMeSection/HireMeSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import RevealSection from "../../components/ui/RevealSection";
import useGetTheme from "../../hooks/useGetTheme";
import { useRouter } from "nextjs-toploader/app";
import "./service-page.css";

const solutions = [
  {
    icon: <WebIcon sx={{ fontSize: 20 }} />,
    title: "Custom Web Applications",
    desc: "React and Next.js frontends paired with Node.js or Laravel backends — built for performance from day one.",
  },
  {
    icon: <DashboardIcon sx={{ fontSize: 20 }} />,
    title: "SaaS & Admin Dashboards",
    desc: "Multi-tenant platforms, role-based access, and data-rich dashboards that scale with your users.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 20 }} />,
    title: "REST & GraphQL APIs",
    desc: "Secure, versioned APIs designed for third-party integrations, mobile clients, and internal services.",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 20 }} />,
    title: "Database Architecture",
    desc: "PostgreSQL, MySQL, or MongoDB — schema design, indexing, and query optimization for real workloads.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 20 }} />,
    title: "Cloud Deployment & CI/CD",
    desc: "AWS or GCP infrastructure with automated pipelines so every deploy is fast, tested, and zero-downtime.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
    title: "Performance Optimization",
    desc: "Core Web Vitals, lazy loading, caching strategies — measurable speed improvements for existing apps.",
  },
];

const buildItems = [
  "SaaS Platforms & Subscription Apps",
  "E-commerce & Online Stores",
  "Admin Dashboards & Internal Tools",
  "Booking & Reservation Systems",
  "Job Boards & Marketplaces",
  "CMS & Content Platforms",
  "Customer Portals & CRMs",
  "Business Automation Tools",
  "MVP Prototypes to Production",
];

const audience = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 18 }} />,
    title: "Startups & Founders",
    desc: "You have a product idea and need a technical partner to build it right — fast.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 18 }} />,
    title: "SMEs & Local Businesses",
    desc: "You want a professional web presence or custom tool to streamline your operations.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 18 }} />,
    title: "Agencies & Studios",
    desc: "You need a reliable developer to white-label projects or extend your team capacity.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 18 }} />,
    title: "International Clients",
    desc: "You want offshore-quality development at a competitive rate, fully async-friendly.",
  },
];

const WebDevelopmentPage = () => {
  const { isDark } = useGetTheme();
  const router = useRouter();

  return (
    <>
      {/* ── Hero ── */}
      <Box
        className="sp-hero"
        sx={{
          background: isDark
            ? "linear-gradient(160deg, #0b1220 0%, #111827 100%)"
            : "#ffffff",
        }}
      >
        <Box aria-hidden="true" className="sp-hero-bg">
          <svg width="100%" height="100%" viewBox="0 0 1440 420" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <pattern id="wd-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
              </pattern>
              <radialGradient id="wd-glow" cx="85%" cy="35%" r="45%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="420" fill="url(#wd-grid)" opacity="0.5" />
            <circle cx="1200" cy="160" r="280" fill="url(#wd-glow)" />
          </svg>
        </Box>

        <Box className="sp-hero-inner">
          <Box className="sp-badge">
            <span className="sp-badge-dot" />
            FULL STACK WEB DEVELOPMENT
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Build Scalable Web Applications That Power Your Business
          </Typography>
          <Typography className="sp-hero-sub">
            From SaaS platforms to custom business tools — production-ready systems built with React, Node.js, TypeScript, and AWS. 8+ years delivering software that scales.
          </Typography>
          <Box className="sp-hero-ctas">
            <Button
              onClick={() => router.push("/contact")}
              variant="contained"
              className="sp-hero-cta-primary"
              endIcon={<ArrowForwardIcon />}
            >
              Get a Free Quote
            </Button>
            <Button
              onClick={() => router.push("/portfolio")}
              variant="outlined"
              className="sp-hero-cta-secondary"
            >
              View My Work
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── Solutions I Deliver ── */}
      <Box className="page-section">
        <Box className="section-inner">
          <SectionHeader
            title="Solutions I Deliver"
            subtitle="End-to-end development — frontend, backend, and cloud infrastructure."
          />
          <Box className="sp-features-grid">
            {solutions.map((s) => (
              <Box className="sp-feature-card" key={s.title}>
                <Box className="sp-feature-icon">{s.icon}</Box>
                <Typography className="sp-feature-title">{s.title}</Typography>
                <Typography className="sp-feature-desc">{s.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── What You Can Build With Me ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="What You Can Build With Me"
              subtitle="If you can describe it, we can build it. Here are the most common projects I take on."
            />
            <Box className="sp-build-grid">
              {buildItems.map((item) => (
                <Box className="sp-build-item" key={item}>
                  <span className="sp-build-dot" />
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Who I Work With ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Who I Work With"
              subtitle="I partner with teams at every stage — from day-one MVPs to scaling production systems."
            />
            <Box className="sp-audience-grid">
              {audience.map((a) => (
                <Box className="sp-audience-card" key={a.title}>
                  <Box className="sp-audience-icon">{a.icon}</Box>
                  <Typography className="sp-audience-title">{a.title}</Typography>
                  <Typography className="sp-audience-desc">{a.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Authority Prose ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-prose-section">
              <Typography className="sp-prose-label">My Approach</Typography>
              <Typography className="sp-prose-headline">
                From Idea to Scalable Product
              </Typography>
              <Typography className="sp-prose-text">
                Most web projects fail not because of bad code — but because of unclear architecture, missed requirements, and shortcuts that compound into technical debt. I start every engagement with a discovery phase: understanding your users, your growth goals, and the constraints that matter. Then I design systems meant to last — not just ship. With 8+ years across e-commerce, banking, and enterprise software, I bring the judgment to make the right call early, before it becomes expensive to change.
              </Typography>
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Case Study Teaser + Davao Local Link ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-case-study">
              <Typography className="sp-case-label">Featured Work</Typography>
              <Typography className="sp-case-text">
                Built a multi-tenant SaaS platform for a retail chain managing 50+ stores — real-time inventory sync, role-based access for store managers, and a reporting dashboard that replaced 3 spreadsheet workflows. Deployed on AWS with zero-downtime releases and 99.9% uptime.
              </Typography>
              <Link href="/portfolio" className="sp-case-link">
                See full portfolio <ArrowForwardIcon sx={{ fontSize: 14 }} />
              </Link>
            </Box>

            <Box className="sp-local-callout">
              <LocationOnIcon sx={{ fontSize: 18, color: "var(--green-600)", flexShrink: 0, mt: "2px" }} />
              <Typography className="sp-local-text">
                Based in Davao City, Philippines — available for local projects and remote engagements worldwide.{" "}
                Also offering{" "}
                <Link href="/mobile-app-development" className="sp-local-link">
                  mobile app development
                </Link>
                {", "}
                <Link href="/ecommerce-development" className="sp-local-link">
                  e-commerce development
                </Link>
                {", and "}
                <Link href="/small-business-web-design-philippines" className="sp-local-link">
                  website design for small businesses in the Philippines
                </Link>
                . Looking to{" "}
                <Link href="/hire-web-developer-philippines" className="sp-local-link">
                  hire a developer in the Philippines
                </Link>
                {" "}or need a{" "}
                <Link href="/web-developer-davao" className="sp-local-link">
                  local web developer in Davao
                </Link>
                ?
              </Typography>
            </Box>
          </Box>
        </Box>
      </RevealSection>

      <RevealSection>
        <Reviews />
      </RevealSection>
      <Box sx={{ mt: { xs: 2, md: 4 } }}>
        <HireMeSection />
      </Box>
    </>
  );
};

export default WebDevelopmentPage;
