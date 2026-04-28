"use client";

import { Grid, Skeleton, Box } from "@mui/material";
import { useEffect, useState } from "react";
import BlogCard from "../cards/BlogCard";
import type { BlogPost } from "../../app/blog/page";

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
  initialPosts?: BlogPost[];
};

const MediumPosts = ({ limit = 4, columns = 3, initialPosts }: Props) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts ?? []);
  const [loading, setLoading] = useState(!initialPosts);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    if (initialPosts) return;

    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@algerwrites",
        );
        const data = await response.json();
        const items: any[] = data.items.slice(0, limit);
        setPosts(
          items
            .filter((p) => p?.title && p?.pubDate && p?.link)
            .map((post, _i) => {
              const tags = getContentTags(post);
              const figureValue = tags?.[0]?.tagName === "figure" ? tags?.[0]?.value : tags?.[1]?.value;
              const descTag = tags?.[1]?.tagName === "p" ? tags?.[1]?.value : tags?.[2]?.value;
              return {
                title: post.title,
                description: descTag ? descTag.slice(0, 200) + "..." : "",
                image: urlify(figureValue ?? "") ?? "",
                publishedDate: formatReadableDate(post.pubDate),
                link: post.link,
                category: post?.categories?.[0] ?? "",
              };
            }),
        );
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
        : posts.map((post, i) => (
            <Grid size={{ lg: columns, md: 6, sm: 6, xs: 12 }} key={post.title} sx={{ display: 'flex' }}>
              <BlogCard
                title={post.title}
                description={post.description}
                image={post.image}
                publishedDate={post.publishedDate}
                link={post.link}
                category={post.category}
                index={i}
              />
            </Grid>
          ))}
    </Grid>
  );
};

export default MediumPosts;
