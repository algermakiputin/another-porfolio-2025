"use client";

import { Box } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import MediumPosts from "../../../components/medium/MediumPosts";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();

  return (
    <Box className="page-section">
      <Box className="section-inner">
        <SectionHeader
          title="Latest Insights"
          subtitle="Thoughts on development, architecture, and building better products."
          action={{ label: "View all posts", onClick: () => router.push("/blog") }}
        />
        <MediumPosts limit={4} columns={3} />
      </Box>
    </Box>
  );
};

export default Blog;
