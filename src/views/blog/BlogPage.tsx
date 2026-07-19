"use client";

import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "../../components/cards/BlogCard";
import useGetTheme from "../../hooks/useGetTheme";
import type { BlogMeta } from "../../types/BlogType";
import "./blog.css";

type Props = { posts: BlogMeta[] };

const BlogPage = ({ posts }: Props) => {
  const { isDark } = useGetTheme();
  return (
    <>
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
            WRITING
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

      <Box className="blog-grid-wrap">
        <Grid container spacing={2.5} sx={{ flexGrow: 1, alignItems: "stretch" }}>
          {posts.map((post, i) => (
            <Grid size={{ lg: 4, md: 6, sm: 6, xs: 12 }} key={post.slug} sx={{ display: "flex" }}>
              <BlogCard
                title={post.title}
                description={post.description}
                image={post.image}
                publishedDate={post.publishedDate}
                readTime={post.readTime}
                link={`/blog/${post.slug}`}
                category={post.category}
                index={i}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BlogPage;
