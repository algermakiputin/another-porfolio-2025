"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BrushIcon from "@mui/icons-material/Brush";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ApiIcon from "@mui/icons-material/Api";
import PublishIcon from "@mui/icons-material/Publish";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
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
    icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />,
    title: "iOS & Android from One Codebase",
    desc: "React Native apps that run natively on both platforms — reach all your Davao customers on iOS and Android at half the cost.",
  },
  {
    icon: <BrushIcon sx={{ fontSize: 20 }} />,
    title: "Native-Feeling UI/UX",
    desc: "Smooth animations and intuitive interfaces — designed so users actually enjoy using your app every day.",
  },
  {
    icon: <WifiOffIcon sx={{ fontSize: 20 }} />,
    title: "Offline Support",
    desc: "Apps that keep working without internet — critical for field teams and users in areas with inconsistent connectivity.",
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 20 }} />,
    title: "Push Notifications",
    desc: "Keep customers engaged with real-time alerts, order updates, reminders, and promotions via Firebase or OneSignal.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 20 }} />,
    title: "Backend & API Integration",
    desc: "Connect your app to payment gateways, inventory systems, GCash, Maya, or any third-party service your business uses.",
  },
  {
    icon: <PublishIcon sx={{ fontSize: 20 }} />,
    title: "App Store Publishing",
    desc: "Full submission support for Google Play and the Apple App Store — I handle everything so you don't have to.",
  },
];

const appTypes = [
  "Food Delivery & Ordering Apps",
  "Booking & Appointment Apps",
  "E-commerce Mobile Apps",
  "Business Operations Tools",
  "Customer Loyalty Apps",
  "Field Service Management Apps",
  "On-Demand Service Apps",
  "Healthcare & Clinic Apps",
  "MVP & Prototype Apps",
];

const whyLocal = [
  {
    icon: <PlaceIcon sx={{ fontSize: 20 }} />,
    title: "Available On-Site in Davao City",
    sub: "Meet in person for discovery, planning, and progress reviews. On-site collaboration means faster decisions and zero miscommunication.",
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
    title: "Same Timezone, No Delays",
    sub: "Based in Davao — same working hours as you. Real-time communication, fast responses, no waiting overnight for answers.",
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 20 }} />,
    title: "Local Market Understanding",
    sub: "I know how Davao businesses operate and what local users expect. That context gets built into the app from day one.",
  },
  {
    icon: <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />,
    title: "Direct Access to the Developer",
    sub: "You talk directly to me — not a project coordinator relaying messages. What you need is what gets built.",
  },
];

const processSteps = [
  {
    icon: <SearchIcon sx={{ fontSize: 20 }} />,
    title: "1. Discovery & Scoping",
    sub: "We define your app's goals, core features, and target users. You get a clear project scope and cost estimate before any work starts.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 20 }} />,
    title: "2. UI Design & Prototyping",
    sub: "Wireframes or interactive prototypes before development. You see how the app works and approve it — no surprises mid-build.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 20 }} />,
    title: "3. Development & Testing",
    sub: "Iterative builds with regular updates. Every feature is tested on both iOS and Android before it ships to you.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 20 }} />,
    title: "4. Launch & Handover",
    sub: "App Store and Google Play submission, documentation, and a handover walkthrough so you own and understand what was built.",
  },
];

const faqs = [
  {
    q: "How much does mobile app development cost in Davao?",
    a: "An MVP app in Davao typically starts from ₱50,000–₱120,000 depending on features and complexity. Full-featured apps with custom backends range from ₱120,000–₱300,000+. Rates are significantly lower than Manila agencies while maintaining senior-level quality. Contact me for a free scoped estimate.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "A focused MVP takes 6–12 weeks. Full-featured apps with complex integrations typically run 3–5 months. Timelines and milestones are defined and agreed before development starts.",
  },
  {
    q: "Do you publish to the App Store and Google Play?",
    a: "Yes — I handle the complete submission process for both platforms, including screenshots, metadata, privacy policy compliance, and guideline reviews. You just need a developer account.",
  },
  {
    q: "Can we meet in person in Davao City?",
    a: "Absolutely. I'm based in Davao City and available for in-person discovery sessions, planning workshops, and project reviews. This is one of the key advantages of working with a local developer.",
  },
  {
    q: "Do you maintain and update the app after launch?",
    a: "Yes. I offer ongoing maintenance, bug fixes, OS compatibility updates, and new feature development after launch. Many clients keep me on retainer for continuous improvement.",
  },
];

const MobileAppDavaoPage = () => {
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
            Custom Mobile App Developer in Davao City – iOS &amp; Android Apps
            for Businesses
          </Typography>
          <Typography className="sp-hero-sub">
            I help businesses in Davao build mobile apps that streamline
            operations, reach more customers, and grow revenue. React Native
            development — from concept to App Store, on time and on budget.
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

      {/* ── What I Deliver ── */}
      <Box className="page-section">
        <Box className="section-inner">
          <SectionHeader
            title="Mobile App Development Services in Davao City"
            subtitle="Full-cycle app development — from UI design to backend, App Store publishing, and ongoing support."
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

      {/* ── App Types ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Types of Apps I Build for Davao Businesses"
              subtitle="From delivery platforms to internal tools — if your business needs an app, I can build it."
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

      {/* ── Why local ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Why Hire a Mobile App Developer in Davao City?"
              subtitle="Local availability means faster collaboration — and better results for your business."
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

      {/* ── Pricing ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <Box className="sp-prose-section">
              <Typography className="sp-prose-label">Pricing</Typography>
              <Typography className="sp-prose-headline">
                How Much Does Mobile App Development Cost in Davao?
              </Typography>
              <Typography className="sp-prose-text">
                Mobile app development in Davao City is significantly more
                affordable than hiring developers in Manila or abroad — without
                any compromise on quality or communication. An MVP app starts
                from ₱50,000 depending on features and scope. Full-featured apps
                with custom backends, integrations, and e-commerce typically
                range from ₱120,000 to ₱300,000+. Every project is quoted after
                a free discovery session with a clear milestone breakdown — you
                know the full cost before we start. Post-launch maintenance
                packages are available for ongoing updates and support.
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
              title="My App Development Process"
              subtitle="A clear, predictable process from first call to App Store — no surprises."
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

      {/* ── FAQ ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Common questions from Davao businesses considering a mobile app."
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
                Based in Davao City — available for local and remote projects
                across the Philippines and worldwide. Also offering{" "}
                <Link href="/mobile-app-development" className="sp-local-link">
                  mobile app development services
                </Link>{" "}
                for clients outside Davao,{" "}
                <Link href="/web-developer-davao" className="sp-local-link">
                  web development in Davao City
                </Link>
                {", and "}
                <Link
                  href="/hire-web-developer-philippines"
                  className="sp-local-link"
                >
                  developer hiring for teams across the Philippines
                </Link>
                . Also see{" "}
                <Link
                  href="/website-design-davao-city"
                  className="sp-local-link"
                >
                  website design in Davao City
                </Link>{" "}
                and{" "}
                <Link
                  href="/small-business-web-design-philippines"
                  className="sp-local-link"
                >
                  small business web design across the Philippines
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

export default MobileAppDavaoPage;
