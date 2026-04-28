"use client";

import { Grid, Skeleton, Box } from "@mui/material";
import { useEffect, useState } from "react";
import BlogCard from "../cards/BlogCard";

function urlify(text: string) {
  const match = text?.match(/https?:\/\/[^"]+/);
  return match ? match[0] : null;
}

function getContentTags(post: any) {
  const tagsFound: any[] = [];
  post?.content?.replace(
    /<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g,
    function (m: any, m1: any, m2: any) {
      tagsFound.push({ tagName: m1, value: m2 });
      return m;
    },
  );
  return tagsFound;
}

function formatReadableDate(raw: string) {
  const date = new Date(raw.replace(" ", "T"));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

type Props = {
  limit?: number;
  columns?: number;
};

const MediumPosts = ({ limit = 4, columns = 3 }: Props) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@algerwrites",
        );
        const data = await response.json();
        setPosts(data.items.slice(0, limit));
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
        setFetchFailed(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchFailed) return (
    <Box sx={{ opacity: 0.5, py: 2, fontSize: '0.875rem' }}>
      Could not load articles right now. Visit my{' '}
      <a href="https://algerwrites.medium.com/" target="_blank" rel="noreferrer" style={{ color: '#16a34a' }}>
        Medium profile
      </a>{' '}to read them directly.
    </Box>
  );

  return (
    <Grid container spacing={2.5} sx={{ flexGrow: 1, alignItems: 'stretch' }}>
      {loading
        ? Array.from({ length: limit }).map((_, i) => (
            <Grid size={{ lg: columns, md: 6, sm: 6, xs: 12 }} key={i}>
              <Box>
                <Skeleton variant="rectangular" height={180} sx={{ borderRadius: '14px 14px 0 0', mb: 0 }} />
                <Skeleton variant="rectangular" height={160} sx={{ borderRadius: '0 0 14px 14px' }} />
              </Box>
            </Grid>
          ))
        : posts.map((post: any, i: number) => {
            const tags = getContentTags(post);
            const figureTagValue =
              tags?.[0]?.tagName === "figure"
                ? tags?.[0]?.value
                : tags?.[1]?.value;
            const content =
              tags?.[1]?.tagName === "p" ? tags?.[1]?.value : tags?.[2]?.value;
            const url = urlify(figureTagValue);
            const category = post?.categories?.[0] ?? "";
            if (!post?.title || !post?.pubDate || !post?.link) return null;
            return (
              <Grid size={{ lg: columns, md: 6, sm: 6, xs: 12 }} key={post.title} sx={{ display: 'flex' }}>
                <BlogCard
                  title={post.title}
                  description={content?.slice(0, 200) + "..."}
                  image={url ?? ""}
                  publishedDate={formatReadableDate(post.pubDate)}
                  link={post.link}
                  category={category}
                  index={i}
                />
              </Grid>
            );
          })}
    </Grid>
  );
};

export default MediumPosts;
