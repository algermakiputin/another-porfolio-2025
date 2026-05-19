"use client";

import { Fragment } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import Reviews from "./reviews/Reviews";
import Blog from "./blog/Blog";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Industries from "./industries/Industries";
import Process from "./process/Process";
import HireMeSection from "../../components/hireMeSection/HireMeSection";
import RevealSection from "../../components/ui/RevealSection";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./homepage.css";
import { useRouter } from "nextjs-toploader/app";
import useGetTheme from "../../hooks/useGetTheme";
import useGetWindowsDimension from "../../hooks/useGetWindowsDimension";

const YEARS_EXP = "8+";
const PROJECTS = "40+";
const CLIENTS = "25+";
const PERFORMANCE = "40%+";

const featuredTools = [
  { label: "React", category: "Frontend", icon: "/icons/react.png" },
  { label: "Node.js", category: "Backend", icon: "/icons/node.js.png" },
  { label: "AWS", category: "Cloud", icon: "/icons/AWS.png" },
  {
    label: "TypeScript",
    category: "Type Safety",
    icon: "/icons/typeScript.png",
  },
];

const trustLogos = [
  { label: "AWS", icon: "/icons/AWS.png" },
  { label: "Google Cloud", icon: "/icons/GoogleCloud.png" },
  { label: "Docker", icon: "/icons/Docker.png" },
  { label: "MySQL", icon: null },
  { label: "OpenAI", icon: null },
  { label: "Stripe", icon: null },
];

const stats = [
  {
    metric: YEARS_EXP,
    label: "Years Experience",
    sub: "Building reliable software",
  },
  { metric: PROJECTS, label: "Projects Delivered", sub: "Across 3 industries" },
  { metric: CLIENTS, label: "Happy Clients", sub: "Long-term partnerships" },
  {
    metric: PERFORMANCE,
    label: "Performance Improvement",
    sub: "Average client results",
  },
];

const TechStrip = () => (
  <Box className="hero-tech-strip">
    <Typography className="hero-tech-label">
      Technologies I use in production
    </Typography>
    <Box className="hero-tech-icons">
      {featuredTools.map((tech) => (
        <Box
          key={tech.label}
          className="hero-tech-item hero-tech-item--featured"
        >
          <img
            src={tech.icon}
            alt={tech.label}
            width={24}
            height={24}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <Box className="hero-tech-item-text">
            <span className="hero-tech-item-name">{tech.label}</span>
            <span className="hero-tech-item-category">{tech.category}</span>
          </Box>
        </Box>
      ))}
      <Box className="hero-tech-more-pill">+ More</Box>
    </Box>
  </Box>
);

const HomePage = () => {
  const { isDark } = useGetTheme();
  const [width] = useGetWindowsDimension();
  const router = useRouter();
  const isMobile = width <= 640;

  return (
    <Fragment>
      {/* ── Hero ── */}
      <Box
        id="about"
        className="hero-section"
        sx={{
          background: isDark
            ? "linear-gradient(160deg, #0b1220 0%, #111827 100%)"
            : "#ffffff",
        }}
      >
        <Box
          aria-hidden="true"
          className="hero-bg-svg"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        ></Box>

        <Box className="hero-glow-blob" aria-hidden="true" />

        <Box className="hero-inner">
          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
            <Grid size={{ md: 6, sm: 12, xs: 12 }} className="hero-content">
              <Box className="hero-badge">
                <span className="hero-badge-dot" />
                8+ YEARS BUILDING SCALABLE SYSTEMS
              </Box>

              <Typography variant="h1" className="hero-headline">
                High&#8209;performance systems that stay fast and reliable{" "}
                <span className="hero-headline-accent">at scale.</span>
              </Typography>

              <Typography variant="body1" className="hero-subtext">
                {
                  "I design and build production-ready applications that handle real users, real data, and real growth."
                }
              </Typography>

              {isMobile ? (
                <Box className="hero-stat-chips">
                  <span className="hero-stat-chip">{YEARS_EXP} yrs</span>
                  <span className="hero-stat-chip">{PROJECTS} projects</span>
                  <span className="hero-stat-chip">{CLIENTS} clients</span>
                </Box>
              ) : (
                <Typography className="hero-trust-line">
                  From MVPs to production systems, I focus on performance,
                  scalability, and clean architecture.
                </Typography>
              )}

              <Box className="hero-ctas">
                <Button
                  onClick={() => router.push("/portfolio")}
                  startIcon={<ArrowCircleRightIcon />}
                  className="hero-btn-primary"
                  variant="contained"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => router.push("/contact")}
                  startIcon={<MailOutlineIcon />}
                  className="hero-btn-secondary"
                  variant="outlined"
                >
                  Get In Touch
                </Button>
              </Box>

              <Box className="hero-tech-desktop">
                <TechStrip />
              </Box>
            </Grid>

            {!isMobile && (
              <Grid size={{ md: 6, sm: 12, xs: 12 }} className="hero-image-col">
                <Box className="hero-image-wrap">
                  <Box className="hero-photo-frame">
                    <img
                      src="/images/profile.jpg"
                      alt="Alger Makiputin"
                      className="hero-photo"
                      width={481}
                      height={368}
                      loading="lazy"
                    />
                    <Box className="hero-photo-overlay" aria-hidden="true" />
                  </Box>
                  <Box className="aws-cert-card">
                    <img
                      src="/icons/AWS.png"
                      alt="AWS"
                      width={28}
                      height={28}
                      loading="lazy"
                    />
                    <Box>
                      <Typography className="aws-cert-title">
                        AWS Certified
                      </Typography>
                      <Typography className="aws-cert-sub">
                        Cloud Practitioner
                      </Typography>
                      <Typography className="aws-cert-valid">
                        Issued by Amazon
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )}

            {!isMobile && (
              <Grid size={{ xs: 12 }} className="hero-tech-tablet-row">
                <TechStrip />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>

      {/* ── Trust bar ── */}
      <Box
        className="trust-bar"
        sx={{
          background: isDark ? "rgba(255,255,255,0.015)" : "#f8fafc",
          borderTop: isDark
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid #e2e8f0",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid #e2e8f0",
        }}
      >
        <Box className="trust-bar-inner">
          <Typography className="trust-bar-label">
            TRUSTED BY BUSINESSES IN:
          </Typography>
          <Box className="trust-logos">
            {trustLogos.map((logo) => (
              <Box key={logo.label} className="trust-logo-item">
                {logo.icon ? (
                  <img
                    src={logo.icon}
                    alt={logo.label}
                    className="trust-logo-img"
                    width={32}
                    height={21}
                    loading="lazy"
                  />
                ) : (
                  <span className="trust-logo-text">{logo.label}</span>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Stats bar ── */}
      <Box className="stats-bar">
        <Box className="stats-inner">
          {stats.map((stat, i) => (
            <Box
              key={stat.label}
              className="stat-item"
              sx={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <Typography className="stat-metric">{stat.metric}</Typography>
              <Typography className="stat-label">{stat.label}</Typography>
              <Typography className="stat-sub">{stat.sub}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── POV ── */}
      <Box className="pov-section">
        <Box className="pov-inner">
          <Typography component="h2" className="pov-headline">
            Most applications work until they need to scale.{" "}
            <span className="pov-headline-accent">
              That&rsquo;s where things break.
            </span>
          </Typography>
          <Box className="pov-points">
            {[
              "Fast under load, not just in demos",
              "Easy to maintain as your team grows",
              "Ready for real users from day one",
            ].map((point) => (
              <Box key={point} className="pov-point">
                <CheckCircleOutlineIcon className="pov-check-icon" />
                <Typography className="pov-point-text">{point}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <RevealSection>
        <div id="projects">
          <Projects />
        </div>
      </RevealSection>
      <RevealSection delay={80}>
        <div id="skills">
          <Services />
        </div>
      </RevealSection>
      <RevealSection delay={80}>
        <div id="industries">
          <Industries />
        </div>
      </RevealSection>
      <RevealSection delay={80}>
        <Process />
      </RevealSection>
      <RevealSection delay={80}>
        <Reviews />
      </RevealSection>
      <RevealSection delay={80}>
        <div id="blog">
          <Blog />
        </div>
      </RevealSection>
      <Box id="contact" sx={{ mt: { xs: 2, md: 4 } }}>
        <HireMeSection />
      </Box>
    </Fragment>
  );
};

export default HomePage;
