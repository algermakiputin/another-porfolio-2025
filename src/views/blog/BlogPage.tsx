"use client";

import { Box, Typography } from "@mui/material";
import MediumPosts from "../../components/medium/MediumPosts";
import useGetTheme from "../../hooks/useGetTheme";
import type { BlogPost } from "../../app/blog/page";
import "./blog.css";

type Props = { posts?: BlogPost[] };

const BlogPage = ({ posts }: Props) => {
    const { isDark } = useGetTheme();
    return (
        <>
            {/* Page header */}
            <Box
                className="blog-hero"
                sx={{
                    background: isDark
                        ? "linear-gradient(160deg, #0b1220 0%, #111827 100%)"
                        : "#ffffff",
                }}
            >
                <Box aria-hidden="true" className="blog-hero-bg">
                    <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
                        <defs>
                            <pattern id="blog-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
                            </pattern>
                            <radialGradient id="blog-glow" cx="80%" cy="40%" r="45%">
                                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <rect width="1440" height="400" fill="url(#blog-grid)" opacity="0.5" />
                        <circle cx="1150" cy="180" r="260" fill="url(#blog-glow)" />
                    </svg>
                </Box>

                <Box className="blog-hero-inner">
                    <Box className="hero-badge">
                        <span className="hero-badge-dot" />
                        LIVE FROM MEDIUM
                    </Box>
                    <Typography variant="h1" className="blog-hero-title">
                        From My Blog
                    </Typography>
                    <Typography className="blog-hero-sub">
                        I write about software development, the stock market, and lessons
                        from building products across retail, e-commerce, and banking.
                    </Typography>
                    <Box className="blog-hero-chips">
                        <span className="portfolio-chip">Software</span>
                        <span className="portfolio-chip">Finance</span>
                        <span className="portfolio-chip">Product</span>
                    </Box>
                </Box>
            </Box>

            {/* Articles grid */}
            <Box className="blog-grid-wrap">
                <MediumPosts limit={9} columns={4} initialPosts={posts} />
            </Box>
        </>
    );
};

export default BlogPage;
