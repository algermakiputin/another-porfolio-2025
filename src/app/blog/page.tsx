import type { Metadata } from "next";
import BlogPage from "../../views/blog/BlogPage";

const BASE_URL = "https://algermakiputin.com";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on full stack development, system architecture, performance optimization, and building scalable applications for real businesses.",
  openGraph: {
    title: "Blog | Alger Makiputin",
    description:
      "Insights on full stack development, system architecture, performance optimization, and building scalable applications for real businesses.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Alger Makiputin — Blog" }],
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Alger Makiputin — Blog",
  description:
    "Insights on full stack development, system architecture, performance optimization, and building scalable applications.",
  url: `${BASE_URL}/blog`,
  author: {
    "@type": "Person",
    name: "Alger Makiputin",
    url: BASE_URL,
  },
};

export type BlogPost = {
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  link: string;
  category: string;
};

function urlify(text: string): string | null {
  const match = text?.match(/https?:\/\/[^"]+/);
  return match ? match[0] : null;
}

function getContentTags(content: string) {
  const tags: { tagName: string; value: string }[] = [];
  content?.replace(
    /<([a-zA-Z][a-zA-Z0-9_-]*)\b[^>]*>(.*?)<\/\1>/g,
    (_m, tagName, value) => {
      tags.push({ tagName, value });
      return _m;
    },
  );
  return tags;
}

function formatReadableDate(raw: string) {
  const date = new Date(raw.replace(" ", "T"));
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@algerwrites",
    );
    const data = await res.json();
    const items: any[] = data.items?.slice(0, 9) ?? [];

    return items
      .filter((p) => p?.title && p?.pubDate && p?.link)
      .map((post) => {
        const tags = getContentTags(post.content ?? "");
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
      });
  } catch {
    return [];
  }
}

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPage posts={posts} />
    </>
  );
}
