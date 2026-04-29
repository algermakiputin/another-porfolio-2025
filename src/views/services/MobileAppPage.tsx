"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ApiIcon from "@mui/icons-material/Api";
import PublishIcon from "@mui/icons-material/Publish";
import BrushIcon from "@mui/icons-material/Brush";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from "@mui/icons-material/Business";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
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
    icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />,
    title: "iOS & Android from One Codebase",
    desc: "React Native apps that feel native on both platforms — reach iOS and Android users while cutting your development cost in half.",
  },
  {
    icon: <BrushIcon sx={{ fontSize: 20 }} />,
    title: "Native-Feeling UI/UX",
    desc: "Smooth animations, platform-appropriate components, and intuitive flows that make users forget they're using a cross-platform app.",
  },
  {
    icon: <WifiOffIcon sx={{ fontSize: 20 }} />,
    title: "Offline-First Support",
    desc: "Apps that work without internet, sync when connected, and never lose user data — critical for field teams and low-signal environments.",
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 20 }} />,
    title: "Push Notifications",
    desc: "Firebase or OneSignal integration for real-time alerts, reminders, and re-engagement — keeping your users coming back.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 20 }} />,
    title: "API & Backend Integration",
    desc: "Connect your app to any REST or GraphQL backend — payments, auth, third-party services, and custom business logic.",
  },
  {
    icon: <PublishIcon sx={{ fontSize: 20 }} />,
    title: "App Store Publishing",
    desc: "End-to-end support for Google Play and Apple App Store submission, review guidelines, and release management.",
  },
];

const appTypes = [
  "Food Delivery & Ordering Apps",
  "Booking & Appointment Apps",
  "E-commerce Mobile Apps",
  "Field Service & Logistics Apps",
  "Healthcare & Wellness Apps",
  "On-Demand Service Apps",
  "Social & Community Apps",
  "Business Tools & CRMs",
  "MVP & Prototype Apps",
];

const audience = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 18 }} />,
    title: "Startups & Founders",
    desc: "You need an MVP fast — built right, with room to scale as your user base grows.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 18 }} />,
    title: "SMEs & Local Businesses",
    desc: "You want a mobile presence that automates operations and keeps customers engaged.",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: 18 }} />,
    title: "E-commerce Brands",
    desc: "You want a dedicated shopping app that drives higher conversions than mobile web.",
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 18 }} />,
    title: "Service Businesses",
    desc: "You need an app for bookings, dispatch, or field team management — custom to your workflow.",
  },
];

const growthPoints = [
  {
    icon: <TrendingUpIcon sx={{ fontSize: 20 }} />,
    title: "Increase Customer Engagement",
    desc: "Push notifications, loyalty features, and personalized content keep users active and returning to your app.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 20 }} />,
    title: "Automate Business Processes",
    desc: "Replace manual workflows with mobile-first tools your team uses in the field — saving hours every day.",
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 20 }} />,
    title: "Improve Customer Retention",
    desc: "A branded mobile app builds loyalty and keeps your business top-of-mind in a way a website can't.",
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 20 }} />,
    title: "Open New Revenue Channels",
    desc: "Launch in-app purchases, subscriptions, or service tiers — mobile apps unlock monetization that web alone can't offer.",
  },
];

const faqs = [
  {
    q: "How much does it cost to build a mobile app?",
    a: "A focused MVP typically starts from $3,000–$8,000 depending on features. Full-featured apps with custom backends are quoted per scope. Contact me for a free estimate tailored to your requirements.",
  },
  {
    q: "How long does mobile app development take?",
    a: "A well-scoped MVP takes 6–12 weeks. Full-featured apps with complex integrations typically run 3–5 months. Timelines are always agreed upfront — no surprises.",
  },
  {
    q: "Do you publish to the App Store and Google Play?",
    a: "Yes — I handle the full submission process for both platforms, including app store screenshots, metadata, privacy policy requirements, and guideline compliance.",
  },
  {
    q: "Can I get both an iOS and Android app?",
    a: "Absolutely. I build with React Native, which delivers native-quality apps for both platforms from a single codebase — significantly cutting development cost compared to building two separate apps.",
  },
];

const MobileAppPage = () => {
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
              <pattern id="ma-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
              </pattern>
              <radialGradient id="ma-glow" cx="85%" cy="35%" r="45%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="420" fill="url(#ma-grid)" opacity="0.5" />
            <circle cx="1200" cy="160" r="280" fill="url(#ma-glow)" />
          </svg>
        </Box>

        <Box className="sp-hero-inner">
          <Box className="sp-badge">
            <span className="sp-badge-dot" />
            iOS & ANDROID APP DEVELOPMENT
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Custom Mobile App Development for iOS &amp; Android
          </Typography>
          <Typography className="sp-hero-sub">
            Help your business grow with a mobile app built for real users. Cross-platform iOS and Android development using React Native — one codebase, two platforms, native performance. From MVP to App Store in weeks.
          </Typography>
          <Box className="sp-hero-ctas">
            <Button
              onClick={() => router.push("/contact")}
              variant="contained"
              className="sp-hero-cta-primary"
              endIcon={<ArrowForwardIcon />}
            >
              Start Your App
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
            subtitle="Custom mobile app development services — from UI to backend integration and store publishing."
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

      {/* ── Apps I Can Build ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Apps I Can Build for Your Business"
              subtitle="If you can describe what your app needs to do, I can build it. Here are the most common types I deliver."
            />
            <Box className="sp-build-grid">
              {appTypes.map((item) => (
                <Box className="sp-build-item" key={item}>
                  <span className="sp-build-dot" />
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </RevealSection>

      {/* ── Who It's For ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Mobile App Development for Startups &amp; Businesses"
              subtitle="I work with teams at every stage — from first-time founders to established businesses ready to go mobile."
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

      {/* ── How Apps Help Businesses Grow ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="How a Mobile App Grows Your Business"
              subtitle="A mobile app isn't just a product — it's a growth channel. Here's what it can do for you."
            />
            <Box className="sp-why-grid">
              {growthPoints.map((g) => (
                <Box className="sp-why-item" key={g.title}>
                  <Box className="sp-why-icon">{g.icon}</Box>
                  <Box>
                    <Typography className="sp-why-title">{g.title}</Typography>
                    <Typography className="sp-why-sub">{g.desc}</Typography>
                  </Box>
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
                I Help Businesses Launch Mobile Apps Faster and Grow With Them
              </Typography>
              <Typography className="sp-prose-text">
                Most app projects fail because they try to build everything at once. I work differently — starting with a tight MVP that validates your core idea, then iterating based on real user feedback. With 8+ years building software across e-commerce, retail, and enterprise systems, I know which shortcuts lead to technical debt and which trade-offs actually matter for a v1. You get a production-ready app you can ship, not a prototype that needs rebuilding in six months.
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
              subtitle="Common questions about mobile app development services."
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
                Based in Davao City, Philippines — available for local and remote projects worldwide.{" "}
                <Link href="/mobile-app-developer-davao" className="sp-local-link">
                  Looking for a mobile app developer in Davao?
                </Link>
                {" "}Also offering{" "}
                <Link href="/web-development-services" className="sp-local-link">
                  full stack web development services
                </Link>
                {" "}and{" "}
                <Link href="/ecommerce-development" className="sp-local-link">
                  e-commerce development
                </Link>
                . Need to{" "}
                <Link href="/hire-web-developer-philippines" className="sp-local-link">
                  hire a developer in the Philippines
                </Link>
                ? Also see{" "}
                <Link href="/small-business-web-design-philippines" className="sp-local-link">
                  website packages for small businesses
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

export default MobileAppPage;
