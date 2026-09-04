import type { Metadata } from "next";
import BlogSinglePage from "../../../views/blog/single/BlogSinglePage";
import { getBlogs, getBlogBySlug } from "../../../lib/blog";

const BASE_URL = "https://algermakiputin.com";

export async function generateStaticParams() {
  return getBlogs().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogs().find((b) => b.slug === slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${slug}/`;
  const hasImage = Boolean(post.image);
  return {
    title: post.title,
    description: post.description,
    ...(post.noIndex && { robots: { index: false, follow: true } }),
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Alger Makiputin`,
      description: post.description,
      url,
      type: "article",
      ...(hasImage && {
        images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: hasImage ? "summary_large_image" : "summary",
      title: `${post.title} | Alger Makiputin`,
      description: post.description,
      ...(hasImage && { images: [post.image] }),
    },
  };
}

/** Best-effort ISO date for <time datetime> / JSON-LD; empty when unparseable. */
function toIsoDate(value: string): string {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  // Adjacent posts (list is sorted newest-first) for prev/next navigation.
  const all = getBlogs();
  const idx = all.findIndex((b) => b.slug === slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;

  const url = `${BASE_URL}/blog/${slug}/`;
  const isoDate = post ? toIsoDate(post.publishedDate) : "";

  const jsonLd =
    post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          ...(post.image && {
            image: post.image.startsWith("http")
              ? post.image
              : `${BASE_URL}${post.image}`,
          }),
          ...(isoDate && { datePublished: isoDate, dateModified: isoDate }),
          url,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          author: {
            "@type": "Person",
            name: "Alger Makiputin",
            url: BASE_URL,
          },
          publisher: {
            "@type": "Person",
            name: "Alger Makiputin",
            url: BASE_URL,
          },
          keywords: post.tags.join(", "),
        }
      : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogSinglePage
        post={post}
        isoDate={isoDate}
        prev={older}
        next={newer}
      />
    </>
  );
}
