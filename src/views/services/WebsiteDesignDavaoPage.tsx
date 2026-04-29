"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BrushIcon from "@mui/icons-material/Brush";
import SpeedIcon from "@mui/icons-material/Speed";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
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
    icon: <BrushIcon sx={{ fontSize: 20 }} />,
    title: "Professional Custom Design",
    desc: "Clean, modern designs that reflect your brand — built to make a strong first impression and keep visitors on your site longer.",
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />,
    title: "Mobile-Responsive Layouts",
    desc: "Your website looks and works perfectly on every device — phones, tablets, and desktops. Essential for Davao customers browsing on mobile.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
    title: "Fast-Loading Pages",
    desc: "Optimized images, clean code, and smart caching so your site loads in under 2 seconds — because slow sites lose customers.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 20 }} />,
    title: "SEO-Optimized Structure",
    desc: "Proper headings, meta tags, schema markup, and clean URLs that help Google find your business and rank your pages.",
  },
  {
    icon: <TuneIcon sx={{ fontSize: 20 }} />,
    title: "CMS Integration",
    desc: "Update your own pages, blog posts, and products without needing a developer every time — full control in your hands.",
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 20 }} />,
    title: "E-commerce Ready",
    desc: "Add an online store to your website — product listings, cart, and payment gateway to start selling to Davao customers online.",
  },
];

const results = [
  {
    icon: <ContactMailIcon sx={{ fontSize: 20 }} />,
    title: "Brings in New Inquiries from Google",
    sub: "An SEO-optimized website puts you in front of customers actively searching for your services in Davao City — without paying for ads.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 20 }} />,
    title: "Builds Credibility Before Customers Call",
    sub: "First impressions happen online. A professional website signals that you're a legitimate, trustworthy business worth contacting.",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 20 }} />,
    title: "Converts Visitors into Paying Customers",
    sub: "Clear calls-to-action, fast load times, and intuitive design turn website visitors into leads — and leads into revenue.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
    title: "Works as Your 24/7 Salesperson",
    sub: "Your website is always on — answering questions, showcasing your work, and capturing inquiries even when you're closed.",
  },
];

const industries = [
  "Restaurants & Cafes",
  "Clinics & Healthcare",
  "Real Estate Agencies",
  "Law Firms & Professional Services",
  "Construction & Contractors",
  "Retail Stores",
  "Schools & Training Centers",
  "Hotels & Tourism Businesses",
  "Home Services & Repairs",
];

const whyMe = [
  {
    icon: <PlaceIcon sx={{ fontSize: 20 }} />,
    title: "Davao-Based, On-Site Available",
    sub: "I'm local. We can meet in person for consultations, reviews, and presentations — no Zoom calls required unless you prefer it.",
  },
  {
    icon: <StarIcon sx={{ fontSize: 20 }} />,
    title: "Custom Design, Never Templates",
    sub: "Every website I build is designed specifically for your business and your customers — not reskinned from a generic theme.",
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />,
    title: "Direct Communication, No Middleman",
    sub: "You talk directly to the developer who's building your site. What you say is what gets built — no translation layer.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 20 }} />,
    title: "Fast Turnaround",
    sub: "Most business websites are ready in 2–4 weeks. I set clear milestones upfront so you always know what's happening and when.",
  },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most business websites are completed in 2–4 weeks. More complex sites with custom features or large content libraries may take 4–8 weeks. Timelines and milestones are agreed before we start.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. Full redesigns and partial refreshes are both available. I can modernize an outdated site while keeping your existing content and domain.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Yes — every site I build includes on-page SEO: proper heading structure, meta descriptions, schema markup, fast loading, and mobile optimization. Getting found on Google starts from day one.",
  },
  {
    q: "Do you provide hosting and domain setup?",
    a: "I'll recommend reliable hosting options for your budget and handle the full setup — domain, SSL certificate, and deployment. You own everything.",
  },
  {
    q: "Can we meet in person in Davao City?",
    a: "Absolutely. I'm based in Davao City and available for face-to-face meetings for discovery, progress reviews, and launch walkthroughs.",
  },
];

const WebsiteDesignDavaoPage = () => {
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
              <pattern id="wsd-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
              </pattern>
              <radialGradient id="wsd-glow" cx="85%" cy="35%" r="45%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="420" fill="url(#wsd-grid)" opacity="0.5" />
            <circle cx="1200" cy="160" r="280" fill="url(#wsd-glow)" />
          </svg>
        </Box>

        <Box className="sp-hero-inner">
          <Box className="sp-badge">
            <span className="sp-badge-dot" />
            WEBSITE DESIGN · DAVAO CITY · PHILIPPINES
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Professional Website Design in Davao City for Businesses That Want More Customers
          </Typography>
          <Typography className="sp-hero-sub">
            Affordable website design for Davao businesses — fast, mobile-friendly, and SEO-optimized to help you get found on Google. From simple landing pages to full business websites, I help local brands win online.
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
            title="What&apos;s Included in Every Website"
            subtitle="Every website I design for Davao businesses covers all the essentials — no add-ons required."
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

      {/* ── What a good website does ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="What a Good Website Actually Does for Your Business"
              subtitle="Design is the surface. What it delivers underneath is what matters."
            />
            <Box className="sp-why-grid">
              {results.map((r) => (
                <Box className="sp-why-item" key={r.title}>
                  <Box className="sp-why-icon">{r.icon}</Box>
                  <Box>
                    <Typography className="sp-why-title">{r.title}</Typography>
                    <Typography className="sp-why-sub">{r.sub}</Typography>
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
              title="Website Design for Davao Businesses"
              subtitle="I design websites for businesses across every major industry in Davao City."
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

      {/* ── SEO prose ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-prose-section">
              <Typography className="sp-prose-label">SEO-Optimized by Design</Typography>
              <Typography className="sp-prose-headline">
                Your Website Should Rank on Google from Day One
              </Typography>
              <Typography className="sp-prose-text">
                Most Davao businesses have websites that Google can&apos;t read properly — no structured headings, missing meta descriptions, slow load times, and no mobile optimization. I build every website with on-page SEO as a foundation, not an afterthought: proper H1–H3 hierarchy, descriptive meta tags, schema markup for local businesses, optimized images, and fast load times that meet Google&apos;s Core Web Vitals. You get a website that looks great AND gets found — without needing to hire an SEO agency on top.
              </Typography>
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
                How Much Does Website Design Cost in Davao City?
              </Typography>
              <Typography className="sp-prose-text">
                Website design in Davao is more affordable than hiring Manila agencies — and you get direct access to the developer, not a middleman. A simple informational website starts from ₱15,000. Business websites with multiple pages, CMS, and contact forms typically range from ₱40,000–₱100,000. Custom designs with e-commerce start from ₱80,000. All quotes are scoped upfront after a free consultation — you know the full cost before any work begins. Maintenance packages are available after launch.
              </Typography>
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Why Work With Me ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Why Work With Me as Your Davao Website Designer"
              subtitle="Not just another web design service — a local developer who's invested in your results."
            />
            <Box className="sp-why-grid">
              {whyMe.map((item) => (
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
      </RevealSection>

      {/* ── FAQ ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Common questions from Davao businesses looking for a website designer."
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
                Need more than a website? I also offer{" "}
                <Link href="/web-development-services" className="sp-local-link">
                  custom web application development
                </Link>
                {", "}
                <Link href="/ecommerce-development" className="sp-local-link">
                  e-commerce development
                </Link>
                {", and "}
                <Link href="/mobile-app-developer-davao" className="sp-local-link">
                  mobile app development in Davao
                </Link>
                . Or{" "}
                <Link href="/web-developer-davao" className="sp-local-link">
                  view my full web developer profile
                </Link>
                {" "}to see everything I build. Also see{" "}
                <Link href="/small-business-web-design-philippines" className="sp-local-link">
                  small business web design across the Philippines
                </Link>
                {" "}and need to{" "}
                <Link href="/hire-web-developer-philippines" className="sp-local-link">
                  hire a developer in the Philippines
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

export default WebsiteDesignDavaoPage;
