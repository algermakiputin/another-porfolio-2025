"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlaceIcon from "@mui/icons-material/Place";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Reviews from "../home/reviews/Reviews";
import HireMeSection from "../../components/hireMeSection/HireMeSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import RevealSection from "../../components/ui/RevealSection";
import useGetTheme from "../../hooks/useGetTheme";
import { useRouter } from "nextjs-toploader/app";
import "./service-page.css";

const features = [
  {
    icon: <WebIcon sx={{ fontSize: 20 }} />,
    title: "Custom Web Applications",
    desc: "React and Next.js frontends with Node.js or Laravel backends — built for Davao businesses that need more than a template.",
  },
  {
    icon: <DashboardIcon sx={{ fontSize: 20 }} />,
    title: "Business Portals & Dashboards",
    desc: "Admin panels, reporting dashboards, and internal tools tailored to how your team actually operates.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 20 }} />,
    title: "API Development & Integration",
    desc: "Connect your systems — payment gateways, local PH services, third-party platforms, and internal tools.",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 20 }} />,
    title: "Database Design",
    desc: "PostgreSQL, MySQL, or MongoDB — structured for growth and optimized for your real data volumes.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 20 }} />,
    title: "Cloud Deployment",
    desc: "AWS or GCP hosting with CI/CD pipelines — infrastructure that doesn't go down during your peak business hours.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
    title: "Performance & SEO Optimization",
    desc: "Fast-loading pages, Core Web Vitals, and technical SEO so your Davao business gets found on Google.",
  },
];

const whyLocal = [
  {
    icon: <PlaceIcon sx={{ fontSize: 20 }} />,
    title: "Available On-Site in Davao City",
    sub: "Meet face-to-face for discovery sessions, project reviews, and presentations. No coordination overhead — just real collaboration.",
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 20 }} />,
    title: "Local Market Understanding",
    sub: "I've built systems for PH businesses. I know the local market, payment landscape, and what Davao customers actually need.",
  },
  {
    icon: <ScheduleIcon sx={{ fontSize: 20 }} />,
    title: "Same Timezone, No Delays",
    sub: "Based in Davao City — same working hours as you. Faster decisions, real-time collaboration, no overnight wait for answers.",
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />,
    title: "Direct Line to the Developer",
    sub: "You work directly with me — not a project manager who relays information. What you say is what gets built.",
  },
];

const industries = [
  "Restaurants & Food Businesses",
  "Real Estate & Property",
  "Logistics & Delivery Services",
  "Retail & E-commerce Stores",
  "Healthcare & Clinics",
  "Education & Training Centers",
  "Hotels & Tourism",
  "Professional Services & Law",
  "Construction & Engineering",
];

const processSteps = [
  {
    icon: <SearchIcon sx={{ fontSize: 20 }} />,
    title: "1. Discovery & Planning",
    sub: "We talk about your goals, users, and constraints. I scope the project, identify risks early, and give you a clear plan before writing a single line of code.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 20 }} />,
    title: "2. Design & Prototyping",
    sub: "Wireframes or clickable prototypes before full development. You see what you're getting and approve it — no surprises.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 20 }} />,
    title: "3. Development & Testing",
    sub: "Iterative development with regular updates. Code is tested, reviewed, and staged before it ever touches production.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 20 }} />,
    title: "4. Deployment & Handover",
    sub: "Live deployment, documentation, and a handover session so your team knows how to use and maintain what we built.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "AWS",
  "Docker",
  "React Native",
  "REST APIs",
  "CI/CD",
  "MySQL",
];

const faqs = [
  {
    q: "How much does web development cost in Davao?",
    a: "Simple business websites start from ₱30,000–₱80,000. Custom web applications and systems are scoped per project and quoted after a free discovery call. Rates are competitive for the Davao market — with senior-level quality.",
  },
  {
    q: "Do you work with small businesses in Davao?",
    a: "Yes. Small and medium businesses in Davao are a big part of who I work with. Whether you need a simple website or a full business system, I scope the work to fit your actual budget and requirements.",
  },
  {
    q: "Can we meet in person?",
    a: "Absolutely. I'm based in Davao City and available for on-site meetings, discovery sessions, and project reviews. This is one of the key advantages of hiring a local developer over a remote agency.",
  },
  {
    q: "How long does a web development project take?",
    a: "A business website typically takes 2–4 weeks. Custom web applications run 1–4 months depending on scope. All timelines are agreed upfront with a clear milestone plan.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. I offer ongoing maintenance, updates, and support after launch. Many clients keep me on retainer for regular updates, performance monitoring, and new feature development.",
  },
];

const WebDeveloperDavaoPage = () => {
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
        <Box className="sp-hero-inner">
          <Box className="sp-badge">
            <span className="sp-badge-dot" />
            DAVAO CITY · PHILIPPINES · ON-SITE AVAILABLE
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Senior Web Developer in Davao City – Custom Web Apps &amp; Business
            Systems
          </Typography>
          <Typography className="sp-hero-sub">
            The go-to freelance web developer in Davao for businesses that need
            reliable, scalable systems — not just a website. 8+ years building
            production software. Available for on-site meetings, local projects,
            and remote work worldwide.
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

      {/* ── Services ── */}
      <Box className="page-section">
        <Box className="section-inner">
          <SectionHeader
            title="Web Development Services in Davao City"
            subtitle="Full stack development for Davao businesses — from landing pages to complex business systems."
          />
          <Box className="sp-features-grid">
            {features.map((f) => (
              <Box className="sp-feature-card" key={f.title}>
                <Box className="sp-feature-icon">{f.icon}</Box>
                <Typography className="sp-feature-title">{f.title}</Typography>
                <Typography className="sp-feature-desc">{f.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Why hire local ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Why Hire a Local Web Developer in Davao City?"
              subtitle="Working with a Davao-based developer is different — and for local businesses, it matters."
            />
            <Box className="sp-why-grid">
              {whyLocal.map((item) => (
                <Box className="sp-why-item" key={item.title}>
                  <Box className="sp-why-icon">{item.icon}</Box>
                  <Box>
                    <Typography className="sp-why-title">
                      {item.title}
                    </Typography>
                    <Typography className="sp-why-sub">{item.sub}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Industries ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Working with Businesses in Davao City"
              subtitle="I build web solutions for Davao businesses across every major industry — from small shops to growing enterprises."
            />
            <Box className="sp-build-grid">
              {industries.map((item) => (
                <Box className="sp-build-item" key={item}>
                  <span className="sp-build-dot" />
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Pricing ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-prose-section">
              <Typography className="sp-prose-label">Pricing</Typography>
              <Typography className="sp-prose-headline">
                How Much Does Web Development Cost in Davao?
              </Typography>
              <Typography className="sp-prose-text">
                Web development in Davao City is more affordable than hiring
                agencies in Manila or abroad — and you don&apos;t sacrifice
                quality. A business website starts from ₱30,000. Custom web
                applications and business systems are scoped per project after a
                free discovery session. There are no hidden fees, no surprise
                invoices, and no project manager markup — you pay for the
                development work, nothing else. Maintenance packages are
                available after launch for businesses that want ongoing support.
              </Typography>
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Process ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="My Development Process"
              subtitle="Predictable process, no surprises — from the first call to launch day."
            />
            <Box className="sp-why-grid">
              {processSteps.map((step) => (
                <Box className="sp-why-item" key={step.title}>
                  <Box className="sp-why-icon">{step.icon}</Box>
                  <Box>
                    <Typography className="sp-why-title">
                      {step.title}
                    </Typography>
                    <Typography className="sp-why-sub">{step.sub}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Tech Stack ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Technologies I Use"
              subtitle="Modern, battle-tested tools — chosen for performance and long-term maintainability."
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {stack.map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: "100px",
                    border: "1px solid",
                    borderColor: isDark
                      ? "rgba(255,255,255,0.12)"
                      : "var(--border)",
                    background: isDark
                      ? "rgba(255,255,255,0.04)"
                      : "var(--bg-card)",
                    fontSize: "0.83rem",
                    fontWeight: 500,
                    color: isDark
                      ? "rgba(255,255,255,0.75)"
                      : "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 14, color: "var(--green-600)" }}
                  />
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── FAQ ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Common questions from Davao businesses looking for a web developer."
            />
            <Box className="sp-faq-list">
              {faqs.map((faq) => (
                <Box className="sp-faq-item" key={faq.q}>
                  <Typography className="sp-faq-q">{faq.q}</Typography>
                  <Typography className="sp-faq-a">{faq.a}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Internal Links ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-local-callout">
              <LocationOnIcon
                sx={{
                  fontSize: 18,
                  color: "var(--green-600)",
                  flexShrink: 0,
                  mt: "2px",
                }}
              />
              <Typography className="sp-local-text">
                Also serving clients across the Philippines and worldwide. Need
                to{" "}
                <Link
                  href="/hire-web-developer-philippines"
                  className="sp-local-link"
                >
                  hire a web developer in the Philippines
                </Link>
                ? Looking for{" "}
                <Link
                  href="/website-design-davao-city"
                  className="sp-local-link"
                >
                  website design in Davao City
                </Link>
                {", "}
                <Link
                  href="/mobile-app-developer-davao"
                  className="sp-local-link"
                >
                  mobile app development in Davao
                </Link>
                {", "}
                <Link
                  href="/small-business-web-design-philippines"
                  className="sp-local-link"
                >
                  small business web design across the Philippines
                </Link>
                {", or "}
                <Link href="/ecommerce-development" className="sp-local-link">
                  e-commerce development
                </Link>
                ? I&apos;ve got you covered.
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

export default WebDeveloperDavaoPage;
