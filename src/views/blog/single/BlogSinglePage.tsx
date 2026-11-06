"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { BlogMeta, BlogPost } from "../../../types/BlogType";
import "./blog-single.css";

type Heading = { id: string; text: string; level: 2 | 3 };

type Props = {
  post: BlogPost | null;
  isoDate?: string;
  prev?: BlogMeta | null; // older article
  next?: BlogMeta | null; // newer article
};

const AUTHOR = "Alger Makiputin";
const AUTHOR_ROLE = "Product Engineer — Web & Mobile";

/* ───────────────────────── Reading progress ─────────────────────────
   Bound to the <article> only (not the footer). A single 2px orange line
   below the fixed navigation. Uses rAF-throttled scroll and a scaleX
   transform so it stays cheap; reduced-motion is handled in CSS. */
function ReadingProgress({
  target,
}: {
  target: React.RefObject<HTMLElement | null>;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = target.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const scrolled = window.scrollY - el.offsetTop + window.innerHeight;
      const ratio = Math.min(1, Math.max(0, scrolled / el.offsetHeight));
      bar.style.transform = `scaleX(${ratio})`;
      bar.parentElement?.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div
      className="article-progress"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    >
      <div className="article-progress__bar" ref={barRef} />
    </div>
  );
}

const BlogSinglePage = ({ post, isoDate, prev, next }: Props) => {
  const articleRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLElement>(null);
  const [toc, setToc] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const topics = useMemo(() => (post?.tags ?? []).slice(0, 3), [post]);

  /* Read the server-baked headings for the table of contents, and delegate
     code-frame copy clicks. The prose markup (ids, code frames) is generated
     at build time, so this effect only observes it — it never mutates nodes
     React owns, which avoids re-render reverts and keeps the page usable
     without JavaScript. */
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const heads = Array.from(root.querySelectorAll("h2, h3")) as HTMLHeadingElement[];
    const collected: Heading[] = heads
      .filter((h) => h.id)
      .map((h) => ({
        id: h.id,
        text: h.textContent || "",
        level: h.tagName === "H3" ? 3 : 2,
      }));
    setToc(collected.length >= 4 ? collected : []);

    const onCopy = (e: Event) => {
      const btn = (e.target as HTMLElement)?.closest<HTMLButtonElement>(
        ".code-frame__copy"
      );
      if (!btn) return;
      const code = btn.closest(".code-frame")?.querySelector("pre code");
      const text = code?.textContent ?? "";
      navigator.clipboard?.writeText(text).then(() => {
        btn.textContent = "Copied";
        btn.classList.add("is-copied");
        window.setTimeout(() => {
          btn.textContent = "Copy";
          btn.classList.remove("is-copied");
        }, 1800);
      });
    };
    root.addEventListener("click", onCopy);
    return () => root.removeEventListener("click", onCopy);
  }, [post?.slug]);

  /* Track the section nearest the reading line with IntersectionObserver.
     The observer owns the middle of the article; rAF edge guards own the
     very top (first heading) and bottom (last heading), so short sections,
     fast scrolls, reloads and anchor landings never flicker or stick. */
  useEffect(() => {
    if (toc.length === 0) return;
    const headings = toc
      .map((heading) => document.getElementById(heading.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    if (headings.length === 0) return;

    const firstId = headings[0].id;
    const lastId = headings[headings.length - 1].id;
    const setIfDifferent = (id: string) =>
      setActiveId((previous) => (previous === id ? previous : id));
    const isNearBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 140;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        // Empty band (fast scroll gaps): keep the previous item, no flicker.
        // Near bottom: the edge guard below owns the last heading.
        if (visible.length > 0 && !isNearBottom()) {
          setIfDifferent(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: 0 }
    );
    headings.forEach((heading) => observer.observe(heading));

    let frame = 0;
    const updateEdges = () => {
      frame = 0;
      if (isNearBottom()) {
        setIfDifferent(lastId);
        return;
      }
      // Document-relative top (offsetTop breaks under positioned ancestors).
      const firstTop =
        headings[0].getBoundingClientRect().top + window.scrollY;
      if (window.scrollY < firstTop - 160) {
        setIfDifferent(firstId);
      }
    };
    const scheduleEdges = () => {
      if (!frame) frame = requestAnimationFrame(updateEdges);
    };

    updateEdges();
    window.addEventListener("scroll", scheduleEdges, { passive: true });
    window.addEventListener("resize", scheduleEdges);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleEdges);
      window.removeEventListener("resize", scheduleEdges);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [toc]);

  /* A long contents list has its own scrollbar (the title stays pinned).
     Follow the active item inside that list without moving the document. */
  useEffect(() => {
    const list = tocRef.current?.querySelector<HTMLElement>("ul");
    const active = list?.querySelector<HTMLElement>(".article-toc__item.is-active");
    if (!list || !active) return;

    const listRect = list.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const inset = 12;
    if (activeRect.top < listRect.top + inset) {
      list.scrollTop -= listRect.top + inset - activeRect.top;
    } else if (activeRect.bottom > listRect.bottom - inset) {
      list.scrollTop += activeRect.bottom - (listRect.bottom - inset);
    }
  }, [activeId]);

  const collapseMobileToc = (event: { target: EventTarget | null }) => {
    const target = event.target as HTMLElement | null;
    const details = target?.closest("details");
    if (details) details.open = false;
  };

  const copyLink = useCallback(() => {
    if (typeof window === "undefined") return;
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  if (!post) {
    return (
      <div className="article-shell">
        <div className="article-notfound">
          <h1>Post not found</h1>
          <Link href="/blog" className="article-back">
            ← All writing
          </Link>
        </div>
      </div>
    );
  }

  const hasHero = Boolean(post.image);
  const kicker = `Blog / ${post.category}`;
  const titleLengthClass =
    post.title.length > 58 ? " is-long" : post.title.length > 38 ? " is-medium" : "";

  return (
    <div className="article-shell">
      <ReadingProgress target={articleRef} />

      <article ref={articleRef} className="article">
        {/* ── Article header ── */}
        <header className={`article-header${hasHero ? " has-media" : ""}`}>
          <div className="article-header__inner">
            <div className="article-header__content">
              <Link href="/blog" className="article-back">
                ← All articles
              </Link>

              <p className="article-kicker"><span aria-hidden="true">—</span> {kicker}</p>

              <h1 className={`article-title${titleLengthClass}`}>{post.title}</h1>

              <p className="article-dek">{post.description}</p>

              <div className="article-byline">
                <div className="article-author-mark" aria-hidden="true">
                  AM
                </div>

                <div className="article-author-id">
                  <strong>{AUTHOR}</strong>
                  <span>{AUTHOR_ROLE}</span>
                </div>

                <div className="article-publication">
                  <time dateTime={isoDate || undefined}>{post.publishedDate}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                  {post.lastUpdated && post.lastUpdated !== post.publishedDate && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>Updated {post.lastUpdated}</span>
                    </>
                  )}
                </div>

                <div className="article-actions">
                  <button
                    type="button"
                    className="article-copy-link"
                    onClick={copyLink}
                  >
                    {copied ? "Link copied" : "Copy link"}
                  </button>
                  <span className="visually-hidden" role="status" aria-live="polite">
                    {copied ? "Link copied to clipboard" : ""}
                  </span>
                </div>
              </div>
            </div>

            {hasHero && (
              <figure className="article-hero">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={630}
                  loading="eager"
                  fetchPriority="high"
                />
              </figure>
            )}
          </div>
          <span className="article-header__scene-label" aria-hidden="true">BLOG / READING MODE</span>
        </header>

        <div className="article-reading">
          {/* ── Body ── */}
          <div className={`article-body${toc.length > 0 ? " has-toc" : ""}`}>
            {toc.length > 0 && (
              <details className="article-toc-mobile">
                <summary>In this article</summary>
                <ul>
                  {toc.map((h) => (
                    <li
                      key={h.id}
                      className={`article-toc__item lvl-${h.level} ${
                        activeId === h.id ? "is-active" : ""
                      }`}
                    >
                      <a
                        href={`#${h.id}`}
                        onClick={(event) => {
                          setActiveId(h.id);
                          collapseMobileToc(event);
                        }}
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
            {toc.length > 0 && (
              <nav ref={tocRef} className="article-toc" aria-label="In this article">
                <p className="article-toc__title">In this article</p>
                <ul>
                  {toc.map((h) => (
                    <li
                      key={h.id}
                      className={`article-toc__item lvl-${h.level} ${
                        activeId === h.id ? "is-active" : ""
                      }`}
                    >
                      <a href={`#${h.id}`} onClick={() => setActiveId(h.id)}>
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div
              ref={contentRef}
              className="article-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* ── Ending ── */}
          <footer className="article-end">
            <div className="article-rule" aria-hidden="true">
              <span className="article-rule__mark" />
            </div>

          {topics.length > 0 && (
            <ul className="article-topics" aria-label="Topics">
              {topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}

          <div className="article-authorcard">
            <div className="article-author-mark lg" aria-hidden="true">
              AM
            </div>
            <div>
              <strong>{AUTHOR}</strong>
              <p>
                Product engineer from the Philippines, building production web
                and mobile applications with React, React Native, Node.js and
                PostgreSQL.
              </p>
              <Link href="/contact" className="article-authorcard__link">
                Work with me →
              </Link>
            </div>
          </div>

          {(prev || next) && (
            <nav className="article-adjacent" aria-label="More writing">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="article-adjacent__link prev">
                  <span className="article-adjacent__dir">← Previous</span>
                  <span className="article-adjacent__cat">{prev.category}</span>
                  <span className="article-adjacent__title">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="article-adjacent__link next">
                  <span className="article-adjacent__dir">Next →</span>
                  <span className="article-adjacent__cat">{next.category}</span>
                  <span className="article-adjacent__title">{next.title}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
          </footer>
        </div>
      </article>

      {/* ── Compact contact transition ── */}
      <aside className="article-cta">
        <p>Have a system to build?</p>
        <Link href="/contact" className="article-cta__link">
          LET&rsquo;S TALK →
        </Link>
      </aside>
    </div>
  );
};

export default BlogSinglePage;
