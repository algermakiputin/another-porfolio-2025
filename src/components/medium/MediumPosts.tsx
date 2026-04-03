import { Grid, Skeleton, Box } from "@mui/material";
import { useEffect, useState } from "react";
import BlogCard from "../cards/BlogCard";
import SectionHeader from "../sectionHeader/SectionHeader";

function urlify(text: string) {
  const match = text?.match(/https?:\/\/[^"]+/);
  const firstLink = match ? match[0] : null;
  return firstLink;
}

function getContentTags(post: any) {
  var tagsFound: any = [];
  post?.content?.replace(
    /<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g,
    function (m: any, m1: any, m2: any) {
      // write data to result objcect
      tagsFound.push({
        tagName: m1,
        value: m2,
      });
      // replace with original = do nothing with string
      return m;
    },
  );
  // Displaying the results
  return tagsFound;
}

function formatReadableDate(raw: string) {
  const date = new Date(raw.replace(" ", "T"));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

type Props = {
  limit: number;
  size: number;
  featured?: boolean;
};
const MediumPosts = ({ limit, size, featured }: Props) => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@algerwrites",
        );
        const data = await response.json();
        if (featured) {
          setPosts([data?.items?.[0], data?.items?.[6], data?.items?.[7]]);
        } else {
          setPosts(data.items.slice(0, limit));
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
        setFetchFailed(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  const skeletonCount = featured ? 3 : limit;

  if (fetchFailed) return (
    <Box sx={{ opacity: 0.5, py: 2, fontSize: '0.875rem' }}>
      Could not load articles right now. Visit my{' '}
      <a href="https://algerwrites.medium.com/" target="_blank" rel="noreferrer" style={{ color: '#0ea47a' }}>
        Medium profile
      </a>{' '}to read them directly.
    </Box>
  );

  return (
    <>
      <SectionHeader title="Latest Articles" />
      <div className="medium-feed">
        <Grid container spacing={3} sx={{ flexGrow: 1, alignItems: 'stretch' }}>
          {loading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <Grid size={{ lg: size, md: 12 }} key={i}>
                  <Box sx={{ p: 2 }}>
                    <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2, mb: 1.5 }} />
                    <Skeleton variant="text" height={28} width="80%" sx={{ mb: 0.75 }} />
                    <Skeleton variant="text" height={16} />
                    <Skeleton variant="text" height={16} />
                    <Skeleton variant="text" height={16} width="60%" />
                  </Box>
                </Grid>
              ))
            : posts.map((post: any) => {
                const tags = getContentTags(post);
                const figureTagValue =
                  tags?.[0]?.tagName === "figure"
                    ? tags?.[0]?.value
                    : tags?.[1]?.value;
                const content =
                  tags?.[1]?.tagName === "p" ? tags?.[1]?.value : tags?.[2]?.value;
                const url = urlify(figureTagValue);
                if (!post?.title || !post?.pubDate || !post?.link) return null;
                return (
                  <Grid size={{ lg: size, md: 12 }} key={post.title} sx={{ display: 'flex' }}>
                    <BlogCard
                      title={post?.title}
                      description={content?.slice(0, 220) + "..."}
                      image={url ?? ""}
                      publishedDate={formatReadableDate(post.pubDate)}
                      link={post.link}
                    />
                  </Grid>
                );
              })}
        </Grid>
      </div>
    </>
  );
};

export default MediumPosts;
