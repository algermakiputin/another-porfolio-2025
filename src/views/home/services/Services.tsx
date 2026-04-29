"use client";

import { Box, Typography } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import WebIcon from "@mui/icons-material/Web";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { useRouter } from "nextjs-toploader/app";
import "./services.css";

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 22 }} />,
    title: "Build scalable web platforms",
    proof: "Used in POS systems and e-commerce applications",
    description:
      "Fast, secure, and designed to grow with your business — from MVPs to full production systems handling real transactions daily.",
    featured: true,
    badge: "Most Requested",
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 22 }} />,
    title: "Ship mobile apps for iOS & Android",
    proof: "Cross-platform with React Native",
    description:
      "One codebase, two platforms. Modern UX your users will actually enjoy — built for performance and maintainability.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 22 }} />,
    title: "Connect and automate your systems",
    proof: "Payments, inventory, and third-party APIs",
    description:
      "Integrate external services into one reliable workflow — so your team stops switching tabs and doing things manually.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 22 }} />,
    title: "Deploy and scale reliably",
    proof: "AWS & GCP with CI/CD pipelines",
    description:
      "Set up cloud infrastructure so your application handles traffic spikes and deploys with zero downtime.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 22 }} />,
    title: "Automate workflows with AI",
    proof: "Reduce manual tasks, extract actionable insights",
    description:
      "Embed AI into your product to eliminate repetitive work and surface insights your team can actually act on.",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 22 }} />,
    title: "Grow organic traffic with SEO & analytics",
    proof: "Google Analytics, Search Console, structured data",
    description:
      "Optimize your site to rank, track what's working, and make data-driven decisions — so your traffic grows while you sleep.",
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <Box id="skills" className="services-section page-section">
      <Box className="section-inner">
        <SectionHeader
          title="How I Help Businesses"
          subtitle="From idea to launch and beyond."
        />
        <Box className="services-grid">
          {services.map((s) => (
            <Box key={s.title} className={`service-card${s.featured ? " service-card--featured" : ""}`}>
              {s.badge && (
                <span className="service-badge">{s.badge}</span>
              )}
              <Box className="service-icon">{s.icon}</Box>
              <Box className="service-text">
                <Typography className="service-title">{s.title}</Typography>
                <Typography className="service-proof">{s.proof}</Typography>
                <Typography className="service-desc">{s.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="services-cta-row">
          <Button
            onClick={() => router.push("/contact")}
            className="services-cta-btn"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
          >
            Discuss Your Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};


export default Services;
