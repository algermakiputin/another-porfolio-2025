"use client";

import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import PortfolioLayout from "./PortfolioLayout";
import useGetTheme from "../../hooks/useGetTheme";
import "./portfolio.css";

const PortfolioPage = () => {
  const { isDark } = useGetTheme();
  return (
    <Fragment>
      <Box
        className="portfolio-hero"
        sx={{
          background: isDark
            ? "linear-gradient(160deg, #0b1220 0%, #111827 100%)"
            : "#ffffff",
        }}
      >
        <Box className="portfolio-hero-inner">
          <Box className="hero-badge">
            <span className="hero-badge-dot" />
            SELECTED WORK
          </Box>
          <Typography variant="h1" className="portfolio-hero-title">
            My Portfolio
          </Typography>
          <Typography className="portfolio-hero-sub">
            A collection of web and mobile projects across retail, e-commerce,
            and banking — built with React, Laravel, Node.js, React Native, and
            more.
          </Typography>
          <Box className="portfolio-hero-chips">
            <span className="portfolio-chip">Web Applications</span>
            <span className="portfolio-chip">Mobile Apps</span>
            <span className="portfolio-chip">8+ Years Experience</span>
          </Box>
        </Box>
      </Box>

      <PortfolioLayout />
    </Fragment>
  );
};

export default PortfolioPage;
