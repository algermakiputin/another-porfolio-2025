"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { BlogMeta } from "../../types/BlogType";
import "./blog.css";

// ── Category normalisation ───────────────────────────────────────
const RAW_TO_LABEL: Record<string, string> = {
  AI: "AI & Agents",
  React: "React",
  SEO: "Product & Growth",
};

const LABEL_TO_SLUG: Record<string, string> = {
  "AI & Agents": "ai-agents",
  React: "react",
  "Product & Growth": "product",
  Shipping: "shipping",
};

const LABEL_COLOR: Record<string, string> = {
  "AI & Agents": "var(--portfolio-orange, #e7652d)",
  React: "var(--portfolio-lime, #b7f34a)",
  "Product & Growth": "rgba(242, 235, 221, 0.65)",
  Shipping: "#a78bfa",
};

const TOPIC_ORDER = ["AI & Agents", "React", "Product & Growth", "Shipping"];

function normalizeCategory(raw: string): string {
  return RAW_TO_LABEL[raw] ?? raw;
}

function toIsoDate(date: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

function getYear(date: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? "" : String(d.getFullYear());
}

function padIndex(n: number): string {
  return String(n).padStart(2, "0");
}

// ── Types ────────────────────────────────────────────────────────
type NormalisedPost = BlogMeta & { category: string };

// ── NoteRow ──────────────────────────────────────────────────────
type NoteRowProps = {
  post: NormalisedPost;
  rowNum: number;
  catColor: string;
};

function NoteRow({ post, rowNum, catColor }: NoteRowProps) {
  const iso = toIsoDate(post.publishedDate);
  return (
    <article className="note-row">
      <Link href={`/blog/${post.slug}`} className="note-row__link">
        <div className="note-row__index" aria-hidden="true">
          <span>NOTE</span>
          <span>{padIndex(rowNum)}</span>
        </div>

        <div className="note-row__content">
          <p
            className="note-row__category"
            style={{ "--cat-color": catColor } as React.CSSProperties}
          >
            {post.category}
          </p>
          <h3 className="note-row__title">{post.title}</h3>
          <p className="note-row__description">{post.description}</p>
          <div className="note-meta">
            {iso && <time dateTime={iso}>{post.publishedDate}</time>}
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {post.image ? (
          <figure className="note-row__visual" aria-hidden="true">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 220px, 160px"
              className="note-row__img"
              loading="lazy"
            />
          </figure>
        ) : (
          <div className="note-row__visual note-row__visual--empty" aria-hidden="true" />
        )}

        <span className="note-row__arrow" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

// ── TopicFromUrl ─────────────────────────────────────────────────
// Reads ?topic= inside a suspended island so the rest of the page can
// prerender statically. Reports the URL topic once it resolves.
function TopicFromUrl({ onTopic }: { onTopic: (slug: string) => void }) {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") ?? "all";
  useEffect(() => {
    onTopic(topic);
  }, [topic, onTopic]);
  return null;
}

// ── BlogPage ─────────────────────────────────────────────────────
type Props = { posts: BlogMeta[] };

const VALID_SLUGS = ["all", ...Object.values(LABEL_TO_SLUG)];

export default function BlogPage({ posts }: Props) {
  // Filter state lives here (SSR-safe); the URL is read by TopicFromUrl
  // after hydration and applied on top of the prerendered full list.
  const [urlTopic, setUrlTopic] = useState("all");

  // Keep the filter in sync with browser back/forward navigation.
  useEffect(() => {
    const onPopState = () => {
      setUrlTopic(new URLSearchParams(window.location.search).get("topic") ?? "all");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Normalise categories once
  const allPosts: NormalisedPost[] = useMemo(
    () => posts.map(p => ({ ...p, category: normalizeCategory(p.category) })),
    [posts]
  );

  // Counts per topic
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of allPosts) {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    }
    return counts;
  }, [allPosts]);

  // Ordered labels that actually have posts
  const topicLabels = useMemo(
    () => TOPIC_ORDER.filter(t => (topicCounts[t] ?? 0) > 0),
    [topicCounts]
  );

  // Active filter slug from URL (unknown values fall back to "all")
  const activeSlug = VALID_SLUGS.includes(urlTopic) ? urlTopic : "all";

  // Filtered posts
  const filteredPosts = useMemo(() => {
    if (activeSlug === "all") return allPosts;
    const label = topicLabels.find(l => LABEL_TO_SLUG[l] === activeSlug);
    return label ? allPosts.filter(p => p.category === label) : allPosts;
  }, [allPosts, activeSlug, topicLabels]);

  // Featured: explicit flag wins, otherwise newest in filtered set
  const featuredPost = useMemo(
    () => filteredPosts.find(p => p.featured) ?? filteredPosts[0] ?? null,
    [filteredPosts]
  );

  // Remaining list (excludes featured)
  const listPosts = useMemo(
    () => filteredPosts.filter(p => p.slug !== featuredPost?.slug),
    [filteredPosts, featuredPost]
  );

  // O(1) index lookup for row numbers
  const listIndexMap = useMemo(
    () => new Map(listPosts.map((p, i) => [p.slug, i + 1])),
    [listPosts]
  );

  // Year grouping — only when posts span multiple years
  const years = useMemo(() => {
    const ys = [...new Set(listPosts.map(p => getYear(p.publishedDate)).filter(Boolean))];
    return ys.sort((a, b) => Number(b) - Number(a));
  }, [listPosts]);

  const showYearGroups = years.length > 1;

  function setTopic(slug: string) {
    setUrlTopic(slug);
    // Static export: update the URL without a navigation.
    const params = new URLSearchParams(window.location.search);
    if (slug === "all") params.delete("topic");
    else params.set("topic", slug);
    const qs = params.toString();
    window.history.pushState(null, "", `/blog${qs ? `?${qs}` : ""}`);
  }

  const catColor = (label: string) => LABEL_COLOR[label] ?? "var(--portfolio-orange)";

  const latestPost = allPosts[0] ?? null;
  return (
    <div className="archive-page">
      <Suspense fallback={null}>
        <TopicFromUrl onTopic={setUrlTopic} />
      </Suspense>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <header className="archive-hero">
        <div className="pf-container archive-hero__inner">
          <div className="archive-hero__title-col">
            <p className="archive-kicker"><span aria-hidden="true">—</span> Blog / Technical articles</p>
            <h1 className="archive-title">Latest<br />Articles</h1>
            <p className="archive-hero__edition">
              Index <span>/</span> {allPosts.length} published articles
            </p>
          </div>
          <div className="archive-hero__desc-col">
            <p className="archive-intro">
              Practical notes on product engineering, React, mobile architecture,
              AI-assisted development, and the lessons behind shipping real
              software.
            </p>
            {latestPost && (
              <Link
                href={`/blog/${latestPost.slug}`}
                className="blog-hero__latest"
                aria-label={`Read latest entry: ${latestPost.title}`}
              >
                <span className="blog-hero__latest-label">
                  LATEST ARTICLE / {String(allPosts.length).padStart(3, "0")}
                </span>
                <strong>{latestPost.shortTitle ?? latestPost.title}</strong>
                <span className="blog-hero__latest-summary">{latestPost.description}</span>
                <span className="blog-hero__latest-meta">
                  <span className="blog-hero__latest-cat">
                    {normalizeCategory(latestPost.category).toUpperCase()}
                  </span>
                  <span>{latestPost.readTime?.toUpperCase()}</span>
                  <time dateTime={toIsoDate(latestPost.publishedDate)}>
                    {latestPost.publishedDate?.toUpperCase()}
                  </time>
                </span>
                <span className="blog-hero__latest-action" aria-hidden="true">READ ARTICLE ↗</span>
              </Link>
            )}
          </div>
        </div>
        <span className="blog-hero__scene-label" aria-hidden="true">BLOG / ARTICLE INDEX</span>
      </header>

      {/* ── Topic navigation ────────────────────────────────────── */}
      <nav className="archive-topics-wrap" aria-label="Filter by topic">
        <div className="pf-container">
          <div className="archive-topics">
            <button
              className="archive-topic"
              aria-pressed={activeSlug === "all"}
              onClick={() => setTopic("all")}
            >
              ALL <span className="archive-topic__count">{allPosts.length}</span>
            </button>
            {topicLabels.map(label => {
              const slug = LABEL_TO_SLUG[label];
              return (
                <button
                  key={slug}
                  className="archive-topic"
                  aria-pressed={activeSlug === slug}
                  onClick={() => setTopic(slug)}
                >
                  {label.toUpperCase()}{" "}
                  <span className="archive-topic__count">{topicCounts[label]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Main body ───────────────────────────────────────────── */}
      <div className="archive-body pf-container">

        {/* Empty filtered state */}
        {filteredPosts.length === 0 && (
          <div className="archive-empty" role="status">
            <p>No articles in this topic yet.</p>
            <Link href="/blog" className="archive-empty__link">View all articles →</Link>
          </div>
        )}

        {/* Featured article */}
        {featuredPost && (
          <article className="featured-note">
            <Link href={`/blog/${featuredPost.slug}`} className="featured-note__link">
              <figure className="featured-note__visual">
                {featuredPost.image ? (
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="featured-note__img"
                  />
                ) : (
                  <div className="featured-note__fallback" aria-hidden="true">
                    <span className="featured-note__fallback-num">
                      {String(
                        (allPosts.findIndex(p => p.slug === featuredPost.slug) + 1) || 1
                      ).padStart(3, "0")}
                    </span>
                    <span className="featured-note__fallback-cat">
                      {featuredPost.category}
                    </span>
                    <span className="featured-note__fallback-title">
                      {featuredPost.shortTitle ?? featuredPost.title}
                    </span>
                    <span className="featured-note__fallback-desc">
                      {featuredPost.description}
                    </span>
                    <span className="featured-note__fallback-mark">AM</span>
                  </div>
                )}
                <span
                  className="featured-note__accent"
                  style={{ "--cat-color": catColor(featuredPost.category) } as React.CSSProperties}
                  aria-hidden="true"
                />
              </figure>
              <div className="featured-note__content">
                <p className="note-label">Featured / {featuredPost.category}</p>
                <h2 className="featured-note__title">{featuredPost.title}</h2>
                <p className="featured-note__desc">{featuredPost.description}</p>
                <div className="note-meta">
                  {toIsoDate(featuredPost.publishedDate) && (
                    <time dateTime={toIsoDate(featuredPost.publishedDate)}>
                      {featuredPost.publishedDate}
                    </time>
                  )}
                  <span aria-hidden="true">·</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="note-action" aria-hidden="true">Read article →</span>
              </div>
            </Link>
          </article>
        )}

        {/* Notes index */}
        {listPosts.length > 0 && (
          <section className="notes-index" aria-label="All field notes">
            <header className="notes-index__header">
              <div>
                <span className="notes-index__eyebrow">Article index</span>
                <h2>All articles</h2>
              </div>
              <span>{listPosts.length} entries / newest first</span>
            </header>
            <div className="notes-index__list">
              {showYearGroups
                ? years.map(year => (
                    <div key={year} className="notes-group">
                      <div className="notes-year" aria-label={`Notes from ${year}`}>
                        <span>{year}</span>
                      </div>
                      {listPosts
                        .filter(p => getYear(p.publishedDate) === year)
                        .map(post => (
                          <NoteRow
                            key={post.slug}
                            post={post}
                            rowNum={listIndexMap.get(post.slug) ?? 0}
                            catColor={catColor(post.category)}
                          />
                        ))}
                    </div>
                  ))
                : listPosts.map(post => (
                    <NoteRow
                      key={post.slug}
                      post={post}
                      rowNum={listIndexMap.get(post.slug) ?? 0}
                      catColor={catColor(post.category)}
                    />
                  ))}
            </div>
          </section>
        )}

        {/* Static CTA */}
        <div className="archive-cta">
          <p className="archive-cta__label"><span>NEXT STEP</span> Building something complex?</p>
          <Link href="/contact" className="archive-cta__link">LET&apos;S TALK →</Link>
        </div>

      </div>
    </div>
  );
}
