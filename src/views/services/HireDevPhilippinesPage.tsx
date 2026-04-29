"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatIcon from "@mui/icons-material/Chat";
import LayersIcon from "@mui/icons-material/Layers";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from "@mui/icons-material/Business";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import Reviews from "../home/reviews/Reviews";
import HireMeSection from "../../components/hireMeSection/HireMeSection";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import RevealSection from "../../components/ui/RevealSection";
import useGetTheme from "../../hooks/useGetTheme";
import { useRouter } from "nextjs-toploader/app";
import "./service-page.css";

const whyPhilippines = [
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 20 }} />,
    title: "Significant Cost Advantage",
    sub: "Hire a senior Filipino developer at rates far below US, AU, or EU markets — without sacrificing quality, architecture, or communication.",
  },
  {
    icon: <ChatIcon sx={{ fontSize: 20 }} />,
    title: "Fluent English Communication",
    sub: "The Philippines is one of the world's largest English-speaking countries. No miscommunication tax on your project.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
    title: "Flexible Timezone (UTC+8)",
    sub: "Overlaps with AU, SG, EU mornings, and US evenings. I adapt to your team's schedule for real collaboration.",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 20 }} />,
    title: "8+ Years of Production Experience",
    sub: "Built systems for retail, e-commerce, and banking — not just tutorials and side projects.",
  },
  {
    icon: <LayersIcon sx={{ fontSize: 20 }} />,
    title: "Full Stack, End to End",
    sub: "React, Node.js, Laravel, AWS — I handle frontend, backend, and cloud so you don't need multiple contractors.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 20 }} />,
    title: "Remote-Ready Since Day One",
    sub: "Async-friendly workflow with the tools your team already uses — Slack, Linear, Jira, GitHub, Notion.",
  },
];

const whatYouGet = [
  "Direct communication — no project manager middlemen",
  "Senior-level decisions on architecture from day one",
  "Faster turnaround than agency timelines",
  "Scalable code built for your next 3 years, not just v1",
  "Full code ownership — no vendor lock-in",
  "Transparent pricing with no surprise invoices",
  "Async updates and clear progress reporting",
  "Long-term availability for maintenance and scaling",
  "One developer accountable for the whole delivery",
];

const audience = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 18 }} />,
    title: "Startups & Founders",
    desc: "You need a senior technical co-pilot who can build your product, advise on architecture, and move fast without waste.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 18 }} />,
    title: "Agencies (White-label)",
    desc: "You need a reliable overflow developer for client projects — same quality you'd bill for, at a cost that keeps margins healthy.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 18 }} />,
    title: "SaaS Companies",
    desc: "You need a senior developer to build features, fix bottlenecks, or scale infrastructure without growing your full-time headcount.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 18 }} />,
    title: "SMEs & Growing Businesses",
    desc: "You want professional software that solves real business problems — without paying enterprise agency rates.",
  },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js",
  "Laravel", "PostgreSQL", "MySQL", "AWS",
  "Docker", "React Native", "REST APIs", "CI/CD",
];

const faqs = [
  {
    q: "Why hire a web developer from the Philippines?",
    a: "Filipino developers combine strong technical education, fluent English, and rates significantly lower than Western markets. The Philippines is one of the top outsourcing destinations globally — specifically because of communication quality and timezone flexibility for AU, US, and EU clients.",
  },
  {
    q: "How much does it cost to hire a Filipino developer?",
    a: "Project-based work typically starts from $2,000 depending on scope. Hourly consulting is available for ongoing engagements. Rates are significantly below US or AU market rates without any compromise on code quality or communication.",
  },
  {
    q: "Can you work in my timezone?",
    a: "Yes. Based in UTC+8, I overlap with AU/SG business hours and EU/US evenings. I'm flexible with sync call scheduling and maintain async updates so you always know what's happening.",
  },
  {
    q: "Do you work with agencies or only direct clients?",
    a: "Both. I do white-label development for agencies that need reliable overflow capacity, and direct engagements for startups and businesses. All work is done professionally regardless of arrangement.",
  },
  {
    q: "How do we start working together?",
    a: "Send me a message through the contact page with a brief description of your project. I'll reply within 24 hours to schedule a free discovery call — no commitment, just a conversation.",
  },
];

const HireDevPhilippinesPage = () => {
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
              <pattern id="ph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
              </pattern>
              <radialGradient id="ph-glow" cx="85%" cy="35%" r="45%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="420" fill="url(#ph-grid)" opacity="0.5" />
            <circle cx="1200" cy="160" r="280" fill="url(#ph-glow)" />
          </svg>
        </Box>

        <Box className="sp-hero-inner">
          <Box className="sp-badge">
            <span className="sp-badge-dot" />
            BASED IN THE PHILIPPINES · AVAILABLE WORLDWIDE
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Hire a Senior Web Developer in the Philippines (8+ Years Experience)
          </Typography>
          <Typography className="sp-hero-sub">
            Hire a Filipino full stack developer who helps you ship faster, reduce costs, and scale confidently — without the overhead of an agency or a full-time hire. Available for remote freelance projects worldwide.
          </Typography>
          <Box className="sp-hero-ctas">
            <Button
              onClick={() => router.push("/contact")}
              variant="contained"
              className="sp-hero-cta-primary"
              endIcon={<ArrowForwardIcon />}
            >
              Hire Me Now
            </Button>
            <Button
              onClick={() => router.push("/portfolio")}
              variant="outlined"
              className="sp-hero-cta-secondary"
            >
              See My Portfolio
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── Why hire from the Philippines ── */}
      <Box className="page-section">
        <Box className="section-inner">
          <SectionHeader
            title="Why Hire a Web Developer from the Philippines?"
            subtitle="Cost advantage, English fluency, timezone flexibility — and the technical depth to back it all up."
          />
          <Box className="sp-why-grid">
            {whyPhilippines.map((item) => (
              <Box className="sp-why-item" key={item.title}>
                <Box className="sp-why-icon">{item.icon}</Box>
                <Box>
                  <Typography className="sp-why-title">{item.title}</Typography>
                  <Typography className="sp-why-sub">{item.sub}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── What You Get Working With Me ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="What You Get Working With Me"
              subtitle="When you outsource web development to a senior freelancer, this is what that actually means."
            />
            <Box className="sp-build-grid">
              {whatYouGet.map((item) => (
                <Box className="sp-build-item" key={item}>
                  <span className="sp-build-dot" />
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Pricing prose ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-prose-section">
              <Typography className="sp-prose-label">Pricing</Typography>
              <Typography className="sp-prose-headline">
                How Much Does It Cost to Hire a Web Developer in the Philippines?
              </Typography>
              <Typography className="sp-prose-text">
                Filipino web developers offer some of the best value in the global market. Project-based work starts from $2,000 depending on scope and complexity. Hourly consulting is available for ongoing engagements — at rates significantly below the US, AU, or EU market without any compromise on quality. Unlike agencies, you pay for the work — not the overhead, the account manager, or the brand name. Every quote is scoped transparently: you know what you&apos;re getting before we start.
              </Typography>
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
              subtitle="Startups, agencies, SaaS companies, and growing businesses across the Philippines and worldwide."
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

      {/* ── Tech Stack ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Tech Stack"
              subtitle="Tools I use in production, not just on a resume."
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
                    borderColor: isDark ? "rgba(255,255,255,0.12)" : "var(--border)",
                    background: isDark ? "rgba(255,255,255,0.04)" : "var(--bg-card)",
                    fontSize: "0.83rem",
                    fontWeight: 500,
                    color: isDark ? "rgba(255,255,255,0.75)" : "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ fontSize: 14, color: "var(--green-600)" }} />
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
              subtitle="Everything you need to know before hiring a remote web developer from the Philippines."
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

      {/* ── Local SEO + Internal Links ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-local-callout">
              <LocationOnIcon sx={{ fontSize: 18, color: "var(--green-600)", flexShrink: 0, mt: "2px" }} />
              <Typography className="sp-local-text">
                Serving clients in Davao City, Manila, and worldwide — remote-first from day one.{" "}
                Also available for{" "}
                <Link href="/web-development-services" className="sp-local-link">
                  custom web development
                </Link>
                {", "}
                <Link href="/mobile-app-development" className="sp-local-link">
                  mobile app development
                </Link>
                {", and "}
                <Link href="/ecommerce-development" className="sp-local-link">
                  e-commerce development
                </Link>
                . Based in Davao?{" "}
                <Link href="/web-developer-davao" className="sp-local-link">
                  View my local web developer page
                </Link>
                {" "}or see{" "}
                <Link href="/small-business-web-design-philippines" className="sp-local-link">
                  affordable website options for small businesses
                </Link>
                .
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

export default HireDevPhilippinesPage;
