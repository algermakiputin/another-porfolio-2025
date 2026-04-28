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
                {/* Reuse hero SVG pattern */}
                <Box aria-hidden="true" className="portfolio-hero-bg">
                    <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
                        <defs>
                            <pattern id="port-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
                            </pattern>
                            <radialGradient id="port-glow" cx="80%" cy="40%" r="45%">
                                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width="1440" height="400" fill="url(#port-grid)" opacity="0.5" />
                        <circle cx="1150" cy="180" r="260" fill="url(#port-glow)" />
                    </svg>
                </Box>

                <Box className="portfolio-hero-inner">
                    <Box className="hero-badge">
                        <span className="hero-badge-dot" />
                        SELECTED WORK
                    </Box>
                    <Typography variant="h1" className="portfolio-hero-title">
                        My Portfolio
                    </Typography>
                    <Typography className="portfolio-hero-sub">
                        A collection of web and mobile projects across retail, e-commerce, and
                        banking — built with React, Laravel, Node.js, React Native, and more.
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
