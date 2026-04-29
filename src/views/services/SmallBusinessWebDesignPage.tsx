"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SpeedIcon from "@mui/icons-material/Speed";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BlockIcon from "@mui/icons-material/Block";
import FacebookIcon from "@mui/icons-material/Facebook";
import BoltIcon from "@mui/icons-material/Bolt";
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

const features = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 20 }} />,
    title: "Professional Business Website",
    desc: "A clean, credible online presence with your services, about, and contact — everything customers need to choose you over a competitor.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 20 }} />,
    title: "Local SEO Optimization",
    desc: "Structured data, on-page SEO, and Google Business Profile tips so local customers across the Philippines find you first.",
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />,
    title: "Mobile-First Design",
    desc: "Most Filipino customers browse on their phone — your website will look great and work perfectly on every screen size.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
    title: "Fast Load Times",
    desc: "Slow websites lose customers. Every page is optimized to load in under 2 seconds — keeping visitors engaged and reducing bounce.",
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 20 }} />,
    title: "Online Store Option",
    desc: "Sell products or services online with a simple, secure checkout — accessible to customers across the Philippines.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 20 }} />,
    title: "Ongoing Support",
    desc: "I don't disappear after launch. Updates, fixes, and improvements are always just a message away — no retainer required.",
  },
];

const painPoints = [
  {
    icon: <BlockIcon sx={{ fontSize: 20 }} />,
    title: "No Website = No Credibility",
    sub: "If your business isn't online, many customers will choose a competitor who is — even if your product or service is better. In 2026, a website is your most important business card.",
  },
  {
    icon: <FacebookIcon sx={{ fontSize: 20 }} />,
    title: "Relying Only on Facebook",
    sub: "Facebook is great for engagement. But customers who search on Google won't find you. A website captures search traffic that social media simply can't reach.",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 20 }} />,
    title: "Slow or Broken Websites",
    sub: "A site that loads slowly or breaks on mobile loses customers instantly. Over half of web traffic in the Philippines is on mobile — your site has to work.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 20 }} />,
    title: "Competitors Are Already Online",
    sub: "While you wait, your competitors are capturing the customers actively searching for what you offer. A well-designed website turns that search traffic into your business.",
  },
];

const packages = [
  {
    name: "Starter Website",
    tag: "New Businesses",
    desc: "A clean, professional 3–5 page website: Home, About, Services, and Contact. Perfect for getting online fast with a polished brand presence.",
  },
  {
    name: "Business Website",
    tag: "Growing Businesses",
    desc: "Multi-page site with CMS, blog, lead capture forms, and full on-page SEO setup. Built to grow your online presence over time.",
  },
  {
    name: "Custom Website",
    tag: "Specific Requirements",
    desc: "E-commerce, booking systems, membership portals, or any custom feature. Scoped to your exact requirements — no more, no less.",
  },
];

const cities = [
  "Metro Manila",
  "Cebu City",
  "Davao City",
  "Quezon City",
  "Makati",
  "Cagayan de Oro",
  "Iloilo City",
  "Bacolod City",
  "General Santos City",
];

const faqs = [
  {
    q: "How much does a small business website cost in the Philippines?",
    a: "A starter website for a small business starts from ₱15,000–₱30,000. Business websites with CMS and multiple pages range from ₱35,000–₱80,000. Custom features, e-commerce, and booking systems start from ₱80,000. All quotes are provided upfront after a free consultation.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most small business websites are ready in 2–4 weeks. Sites with more pages, custom features, or large content libraries take 4–8 weeks. Timelines and milestones are agreed before we start.",
  },
  {
    q: "Do I need to buy hosting and a domain separately?",
    a: "Yes — you'll need hosting and a domain, but I handle the full setup. I'll recommend affordable options for Philippine businesses, configure everything, and hand it over to you with full ownership.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. Full redesigns and partial refreshes are both available. I can modernize an outdated site while keeping your content and domain history intact.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Every website I build includes on-page SEO: proper heading structure, meta descriptions, schema markup, fast loading, and mobile optimization. Ranking takes time, but the technical foundation is there from day one.",
  },
];

const SmallBusinessWebDesignPage = () => {
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
              <pattern id="sb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
              </pattern>
              <radialGradient id="sb-glow" cx="85%" cy="35%" r="45%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="420" fill="url(#sb-grid)" opacity="0.5" />
            <circle cx="1200" cy="160" r="280" fill="url(#sb-glow)" />
          </svg>
        </Box>

        <Box className="sp-hero-inner">
          <Box className="sp-badge">
            <span className="sp-badge-dot" />
            SMALL BUSINESS WEB DESIGN · PHILIPPINES
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Affordable Small Business Web Design in the Philippines – Websites That Convert Visitors into Clients
          </Typography>
          <Typography className="sp-hero-sub">
            I help small businesses across the Philippines get online with affordable, professional websites — fast, mobile-friendly, and built to bring in more customers from Google. No agency overhead. No template shortcuts.
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

      {/* ── Features ── */}
      <Box className="page-section">
        <Box className="section-inner">
          <SectionHeader
            title="What You Get"
            subtitle="Everything a small business needs to succeed online — built in and included."
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

      {/* ── Pain Points ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Common Problems Small Businesses Face Online"
              subtitle="If any of these sound familiar, a properly built website is the fix."
            />
            <Box className="sp-why-grid">
              {painPoints.map((p) => (
                <Box className="sp-why-item" key={p.title}>
                  <Box className="sp-why-icon">{p.icon}</Box>
                  <Box>
                    <Typography className="sp-why-title">{p.title}</Typography>
                    <Typography className="sp-why-sub">{p.sub}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Packages ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Simple Website Packages for Small Businesses"
              subtitle="No confusing pricing. Pick the tier that fits your stage and budget."
            />
            <Box className="sp-platform-grid">
              {packages.map((p) => (
                <Box className="sp-platform-card" key={p.name}>
                  <Typography className="sp-platform-name">{p.name}</Typography>
                  <span className="sp-platform-tag">{p.tag}</span>
                  <Typography className="sp-platform-desc">{p.desc}</Typography>
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
              <Typography className="sp-prose-label">Why It Matters</Typography>
              <Typography className="sp-prose-headline">
                Why Every Small Business in the Philippines Needs a Website in 2026
              </Typography>
              <Typography className="sp-prose-text">
                Filipino consumers Google before they buy — whether they&apos;re looking for a plumber in Cebu, a restaurant in Davao, or a clothing shop in Manila. If your business isn&apos;t on Google, you&apos;re invisible to that search. A well-designed website doesn&apos;t just look professional — it works as a 24/7 salesperson, builds credibility before a customer ever calls, and captures leads from people actively looking for what you offer. For small businesses, it&apos;s not a luxury — it&apos;s the most cost-effective marketing investment you can make.
              </Typography>
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Cities ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Serving Small Businesses Across the Philippines"
              subtitle="Based in Davao City — working with businesses in every major city, fully remote."
            />
            <Box className="sp-build-grid">
              {cities.map((city) => (
                <Box className="sp-build-item" key={city}>
                  <span className="sp-build-dot" />
                  {city}
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
                How Much Does a Small Business Website Cost in the Philippines?
              </Typography>
              <Typography className="sp-prose-text">
                Affordable web design doesn&apos;t mean cheap quality — it means no agency overhead. A starter website for a small business starts from ₱15,000. Business websites with multiple pages, CMS integration, and SEO setup range from ₱35,000 to ₱80,000. Custom builds with e-commerce or booking systems start from ₱80,000. Every project is quoted after a free consultation with a clear scope — no hidden fees, no surprise invoices. Maintenance packages are available for businesses that want ongoing support after launch.
              </Typography>
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
              subtitle="Everything small business owners ask before starting their website."
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
              <LocationOnIcon sx={{ fontSize: 18, color: "var(--green-600)", flexShrink: 0, mt: "2px" }} />
              <Typography className="sp-local-text">
                Based in Davao City and serving clients nationwide.{" "}
                If you&apos;re in Davao, check out my{" "}
                <Link href="/website-design-davao-city" className="sp-local-link">
                  website design services in Davao City
                </Link>
                {" "}for local pricing and on-site availability. Need something more advanced? See my{" "}
                <Link href="/web-development-services" className="sp-local-link">
                  custom web development services
                </Link>
                {", "}
                <Link href="/ecommerce-development" className="sp-local-link">
                  e-commerce development
                </Link>
                {", or "}
                <Link href="/mobile-app-development" className="sp-local-link">
                  mobile app development
                </Link>
                . Looking to{" "}
                <Link href="/hire-web-developer-philippines" className="sp-local-link">
                  hire a developer in the Philippines
                </Link>
                ? Also see{" "}
                <Link href="/mobile-app-developer-davao" className="sp-local-link">
                  mobile app development in Davao
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

export default SmallBusinessWebDesignPage;
