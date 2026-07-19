"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { trackEvent } from "../../../lib/analytics";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";

const navLinks = [
  { label: "Home", route: "/", section: "about" },
  { label: "Projects", route: "/portfolio/", section: "projects" },
  { label: "Blog", route: "/blog/", section: "blog" },
  { label: "Contact", route: "/contact/", section: "contact" },
];

const resourceLinks = [
  { label: "Blog", route: "/blog" },
  { label: "Case Studies", route: "/portfolio" },
  { label: "FAQs", route: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", route: "/web-development-services" },
  { label: "Mobile App Development", route: "/mobile-app-development" },
  { label: "E-commerce Development", route: "/ecommerce-development" },
  { label: "Hire Me (Philippines)", route: "/hire-web-developer-philippines" },
  { label: "Web Developer – Davao", route: "/web-developer-davao" },
  { label: "Website Design – Davao", route: "/website-design-davao-city" },
  {
    label: "Small Business Web Design",
    route: "/small-business-web-design-philippines",
  },
  {
    label: "Mobile App Developer – Davao",
    route: "/mobile-app-developer-davao",
  },
];

const socials = [
  {
    icon: <LinkedInIcon sx={{ fontSize: 17 }} />,
    href: "https://ph.linkedin.com/in/alger-makiputin",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 17 }} />,
    href: "https://github.com/algermakiputin",
    label: "GitHub",
  },
  {
    icon: <YouTubeIcon sx={{ fontSize: 17 }} />,
    href: "https://www.youtube.com/c/AlgerMakiputin",
    label: "YouTube",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 17 }} />,
    href: "mailto:algerapudmakiputin@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const router = useRouter();

  const scrollToSection = (section: string) => {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const linkHandler = (route: string, section?: string) => {
    router.push(route);
    if (section) scrollToSection(section);
  };

  return (
    <footer className="site-footer">
      <Box className="footer-inner">
        {/* Top grid */}
        <Box className="footer-grid">
          {/* Brand */}
          <Box className="footer-brand">
            <Box className="footer-logo" onClick={() => router.push("/")}>
              <img
                src="/app-logo.png"
                alt="Alger Makiputin Full Stack Engineer Logo"
                className="footer-logo-img"
                width={44}
                height={44}
                loading="lazy"
              />
              <Box>
                <div className="footer-logo-name">Alger Makiputin</div>
                <div className="footer-logo-role">Full Stack Engineer</div>
              </Box>
            </Box>
            <Typography className="footer-brand-tagline">
              Building scalable systems that drive real business impact.
            </Typography>
            <Box className="footer-avail">
              <span className="footer-avail-dot" />
              Available for freelance &amp; full-time opportunities
            </Box>
            <Typography className="footer-seo-line">
              Affordable web design and app development services in Davao City
              and across the Philippines — for small businesses, startups, and
              global clients.
            </Typography>
          </Box>

          {/* Explore */}
          <Box className="footer-col">
            <Typography className="footer-col-heading">Explore</Typography>
            <Box className="footer-link-list">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="footer-link"
                  onClick={() => linkHandler(link.route, link.section)}
                >
                  {link.label}
                </button>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box className="footer-col">
            <Typography className="footer-col-heading">Services</Typography>
            <Box className="footer-link-list">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.route}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Insights */}
          <Box className="footer-col">
            <Typography className="footer-col-heading">Insights</Typography>
            <Box className="footer-link-list">
              {resourceLinks.map((link) => (
                <button
                  key={link.label}
                  className="footer-link"
                  onClick={() => router.push(link.route)}
                >
                  {link.label}
                </button>
              ))}
            </Box>
          </Box>

          {/* Let's Connect */}
          <Box className="footer-col">
            <Typography className="footer-col-heading">
              Let&apos;s Connect
            </Typography>
            <Box className="footer-socials">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label={s.label}
                  onClick={() =>
                    trackEvent("social_click", {
                      link_type: s.label.toLowerCase(),
                    })
                  }
                >
                  <span className="footer-social-icon">{s.icon}</span>
                  <span className="footer-social-label">{s.label}</span>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box className="footer-divider" />

        {/* Bottom bar */}
        <Box className="footer-bottom">
          <Typography className="footer-copyright">
            © 2026 Alger Makiputin. All rights reserved.
          </Typography>
          <Typography className="footer-tagline">
            Built with a focus on performance, scalability, and clean
            architecture.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
