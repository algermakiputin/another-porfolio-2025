"use client";

import { Box, Typography, Chip } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import useGetTheme from "../../../hooks/useGetTheme";
import type { BlogPost } from "../../../types/BlogType";
import "./blog-single.css";

type Props = { post: BlogPost | null };

const BlogSinglePage = ({ post }: Props) => {
  const { isDark } = useGetTheme();

  if (!post) {
    return (
      <Box className="blog-single-wrap" sx={{ textAlign: "center", py: 12 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Post not found</Typography>
        <Link href="/blog" className="blog-single-back">
          <ArrowBackIcon fontSize="small" /> Back to blog
        </Link>
      </Box>
    );
  }

  return (
    <Box
      className="blog-single-root"
      sx={{ background: isDark ? "linear-gradient(160deg, #0b1220 0%, #0d1117 100%)" : "#ffffff" }}
    >
      {/* Back nav */}
      <Box className="blog-single-nav">
        <Link href="/blog" className="blog-single-back">
          <ArrowBackIcon fontSize="small" />
          <span>All posts</span>
        </Link>
      </Box>

      {/* Header */}
      <Box className="blog-single-header">
        <span className="blog-category-tag">{post.category.toUpperCase()}</span>

        <Typography variant="h1" className="blog-single-title">
          {post.title}
        </Typography>

        <Typography className="blog-single-desc">{post.description}</Typography>

        <Box className="blog-single-meta">
          <Box className="blog-meta-item">
            <CalendarTodayIcon fontSize="inherit" />
            <span>{post.publishedDate}</span>
          </Box>
          <Box className="blog-meta-item">
            <AccessTimeIcon fontSize="inherit" />
            <span>{post.readTime}</span>
          </Box>
        </Box>

        <Box className="blog-single-tags">
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              className={`blog-tag-chip ${isDark ? "dark" : "light"}`}
            />
          ))}
        </Box>
      </Box>

      {/* Hero image */}
      <Box className="blog-single-image-wrap">
        <img src={post.image} alt={post.title} className="blog-single-image" />
      </Box>

      {/* Content */}
      <Box
        className={`blog-single-content ${isDark ? "dark" : "light"}`}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer nav */}
      <Box className="blog-single-footer">
        <Link href="/blog" className="blog-single-back">
          <ArrowBackIcon fontSize="small" />
          <span>Back to all posts</span>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogSinglePage;
