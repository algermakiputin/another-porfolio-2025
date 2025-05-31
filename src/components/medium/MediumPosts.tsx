import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import BlogCard from '../cards/BlogCard';

function urlify(text: string) {
    const match = text?.match(/https?:\/\/[^"]+/);
    const firstLink = match ? match[0] : null;
    return firstLink;
}

function getContentTags(post: any) {
    var tagsFound: any = [];
    post?.content?.replace(/<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g, function(m: any,m1: any,m2: any){
        // write data to result objcect
        tagsFound.push({
            "tagName": m1,
            "value": m2
        })
        // replace with original = do nothing with string
        return m;
    });
    // Displaying the results
    return tagsFound;
}

function formatReadableDate(raw: string) {
    const date = new Date(raw.replace(" ", "T")); // Ensure it's ISO-compliant
    const options: any = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };
    return date.toLocaleString("en-US", options);
}

type Props = {
    limit: number;
    size: number;
    featured?: boolean;
}
const MediumPosts = ({limit, size, featured} : Props) => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@algerwrites'
        );
        const data = await response.json();
        if (featured) {
            setPosts([
              data?.items?.[0],
              data?.items?.[6],
              data?.items?.[7],
            ]);
        } else {
          setPosts(data.items.slice(0, limit));
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <div className="medium-feed">
      <Grid container spacing={2} sx={{flexGrow: 1}}>
        {posts.map((post: any) => {
            const tags = getContentTags(post);
            const figureTagValue = tags?.[0]?.tagName === "figure" ? tags?.[0]?.value : tags?.[1]?.value;
            const content = tags?.[1]?.tagName === "p" ? tags?.[1]?.value : tags?.[2]?.value;
            const url = urlify(figureTagValue);
            return (
                <Grid size={{lg: size, md: 12}} key={post.title}>
                    <BlogCard 
                        title={post.title}
                        description={content?.slice(0, 220) + '...'}
                        image={url ?? ''}
                        publishedDate={formatReadableDate(post.pubDate)}
                        link={post.link}
                        />
                </Grid>
            )
        })}
        </Grid>
    </div>
  );
};

export default MediumPosts;
