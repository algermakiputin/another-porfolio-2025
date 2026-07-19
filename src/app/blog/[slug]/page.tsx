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
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Alger Makiputin`,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.image?.startsWith("http") ? post.image : `${BASE_URL}${post.image}`,
        datePublished: post.publishedDate,
        url: `${BASE_URL}/blog/${slug}`,
        author: {
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
      <BlogSinglePage post={post} />
    </>
  );
}
