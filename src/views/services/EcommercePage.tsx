"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PaymentIcon from "@mui/icons-material/Payment";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BusinessIcon from "@mui/icons-material/Business";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BuildIcon from "@mui/icons-material/Build";
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
    title: "Custom Storefront",
    desc: "React and Next.js storefronts designed to convert — fast, SEO-optimized, and branded to your business, not a generic template.",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 20 }} />,
    title: "Payment Gateway Integration",
    desc: "Stripe, PayPal, GCash, Maya, and local PH payment methods — secure checkout with subscription and one-time billing.",
  },
  {
    icon: <SearchIcon sx={{ fontSize: 20 }} />,
    title: "Product Catalog & Search",
    desc: "Filterable listings, variants, categories, and fast search that helps customers find what they need and buy faster.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 20 }} />,
    title: "Order & Fulfillment Management",
    desc: "End-to-end order tracking, status updates, and fulfillment workflows visible to both admins and customers.",
  },
  {
    icon: <InventoryIcon sx={{ fontSize: 20 }} />,
    title: "Inventory Management",
    desc: "Real-time stock tracking, low-stock alerts, and multi-warehouse support for businesses with physical products.",
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 20 }} />,
    title: "Mobile-Optimized Checkout",
    desc: "Responsive design and streamlined mobile checkout that reduces cart abandonment on any screen size.",
  },
];

const platforms = [
  {
    name: "Shopify / Shopify Plus",
    tag: "Fastest to Launch",
    desc: "The best path for product-led businesses that want a proven platform, rich app ecosystem, and minimal infrastructure overhead.",
  },
  {
    name: "WooCommerce",
    tag: "Full WordPress Control",
    desc: "Ideal for content-rich stores or businesses already on WordPress. Full customization with the world's most widely used CMS.",
  },
  {
    name: "Custom / Headless",
    tag: "Maximum Performance",
    desc: "React and Next.js headless commerce for businesses that need unique UX, complex integrations, or performance beyond platform limits.",
  },
];

const storeTypes = [
  "Clothing & Fashion Stores",
  "Digital Products & Downloads",
  "Subscription Box Businesses",
  "Local Delivery & Food Stores",
  "Electronics & Tech Stores",
  "Handmade & Artisan Shops",
  "B2B Wholesale Stores",
  "Multi-vendor Marketplaces",
  "Services with Online Booking",
];

const audience = [
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 18 }} />,
    title: "Startups & New Brands",
    desc: "You're launching your first online store and want it built right — fast, scalable, and conversion-focused.",
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 18 }} />,
    title: "Retail Businesses Going Online",
    desc: "You have a physical store and want a professional online channel that actually drives sales.",
  },
  {
    icon: <AutorenewIcon sx={{ fontSize: 18 }} />,
    title: "Stores Needing a Rebuild",
    desc: "Your current store is slow, outdated, or on a platform that limits you. Let's rebuild it the right way.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 18 }} />,
    title: "Businesses Adding E-commerce",
    desc: "You offer services or products offline and want to add a clean, reliable online buying experience.",
  },
];

const faqs = [
  {
    q: "How much does an e-commerce website cost?",
    a: "Shopify setups start from $2,000–$5,000. Custom builds typically range from $5,000–$15,000+ depending on features, integrations, and design complexity. Contact me for a free scoped estimate.",
  },
  {
    q: "How long does it take to build an online store?",
    a: "A focused Shopify or WooCommerce store takes 3–6 weeks. Custom headless builds with complex requirements typically run 2–4 months. Timelines are agreed upfront.",
  },
  {
    q: "Do you work with Shopify or only custom builds?",
    a: "Both — I work with Shopify, WooCommerce, and fully custom React/Next.js headless stores. The right choice depends on your budget, growth goals, and technical requirements.",
  },
  {
    q: "Can you integrate local payment methods in the Philippines?",
    a: "Yes. Beyond Stripe and PayPal, I can integrate GCash, Maya (PayMaya), and other local Philippine payment gateways so your customers can pay how they prefer.",
  },
];

const EcommercePage = () => {
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
            E-COMMERCE DEVELOPMENT
          </Box>
          <Typography variant="h1" className="sp-hero-title">
            Custom E-commerce Development for Businesses &amp; Startups
          </Typography>
          <Typography className="sp-hero-sub">
            Build an online store that doesn&apos;t just look good — it converts
            visitors into paying customers. Custom storefronts, Shopify,
            WooCommerce, and headless commerce built for performance and growth.
          </Typography>
          <Box className="sp-hero-ctas">
            <Button
              onClick={() => router.push("/contact")}
              variant="contained"
              className="sp-hero-cta-primary"
              endIcon={<ArrowForwardIcon />}
            >
              Build My Store
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

      {/* ── What's Included ── */}
      <Box className="page-section">
        <Box className="section-inner">
          <SectionHeader
            title="What's Included in Every Store"
            subtitle="Everything your e-commerce business needs to launch, sell, and scale."
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

      {/* ── Platforms ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="E-commerce Platforms I Work With"
              subtitle="Shopify, WooCommerce, or fully custom — I'll recommend the right fit for your goals and budget."
            />
            <Box className="sp-platform-grid">
              {platforms.map((p) => (
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

      {/* ── Store Types ── */}
      <RevealSection>
        <Box className="page-section">
          <Box className="section-inner">
            <SectionHeader
              title="Types of E-commerce Stores I Build"
              subtitle="From clothing brands to digital products to local delivery — if you sell it, I can build the store."
            />
            <Box className="sp-build-grid">
              {storeTypes.map((item) => (
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
              title="E-commerce Development for Startups &amp; Retail Businesses"
              subtitle="Whether you're launching your first store or rebuilding an outdated one, I've got you covered."
            />
            <Box className="sp-audience-grid">
              {audience.map((a) => (
                <Box className="sp-audience-card" key={a.title}>
                  <Box className="sp-audience-icon">{a.icon}</Box>
                  <Typography className="sp-audience-title">
                    {a.title}
                  </Typography>
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
                How I Build High-Converting Online Stores
              </Typography>
              <Typography className="sp-prose-text">
                Most e-commerce failures aren&apos;t about the product —
                they&apos;re about the store. Slow load times kill conversions
                before a customer even sees your catalog. Confusing checkout
                flows send buyers to your competitors. I build stores with
                performance and UX as first-class concerns: sub-2-second load
                times, frictionless checkout, and mobile-first design. With
                experience across retail, banking, and enterprise systems, I
                bring the technical depth to build stores that don&apos;t just
                launch — they grow.
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
              subtitle="Common questions about e-commerce development services."
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
                Based in Davao City, Philippines — building e-commerce stores
                for local businesses and global brands. Also offering{" "}
                <Link
                  href="/web-development-services"
                  className="sp-local-link"
                >
                  custom web development
                </Link>
                {", "}
                <Link href="/mobile-app-development" className="sp-local-link">
                  mobile app development
                </Link>
                {", and "}
                <Link
                  href="/small-business-web-design-philippines"
                  className="sp-local-link"
                >
                  affordable websites for small businesses in the Philippines
                </Link>
                . Looking to{" "}
                <Link
                  href="/hire-web-developer-philippines"
                  className="sp-local-link"
                >
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

export default EcommercePage;
