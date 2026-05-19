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
