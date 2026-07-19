"use client";

import { Box, Grid } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import BlogCard from "../../../components/cards/BlogCard";
import { useRouter } from "nextjs-toploader/app";
import type { BlogMeta } from "../../../types/BlogType";

type Props = { posts: BlogMeta[] };

const Blog = ({ posts }: Props) => {
  const router = useRouter();

  return (
    <Box className="page-section">
      <Box className="section-inner">
        <SectionHeader
          title="Latest Insights"
          subtitle="Thoughts on development, architecture, and building better products."
          action={{ label: "View all posts", onClick: () => router.push("/blog") }}
        />
        <Grid container spacing={2.5} sx={{ flexGrow: 1, alignItems: "stretch" }}>
          {posts.map((post, i) => (
            <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }} key={post.slug} sx={{ display: "flex" }}>
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
    </Box>
  );
};

export default Blog;
