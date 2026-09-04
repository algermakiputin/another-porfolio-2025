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

  /* Highlight the current TOC section. */
  useEffect(() => {
    if (toc.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    toc.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

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
  const kicker = `Engineering Notes / ${post.category}`;

  return (
    <div className="article-shell">
      <ReadingProgress target={articleRef} />

      <article ref={articleRef} className="article">
        {/* ── Header (cream editorial surface) ── */}
        <header className="article-header">
          <div className="article-header__inner">
            <Link href="/blog" className="article-back">
              ← All writing
            </Link>

            <p className="article-kicker">{kicker}</p>

            <h1 className="article-title">{post.title}</h1>

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
        </header>

        {/* ── Hero (only when a real asset exists) ── */}
        {hasHero ? (
          <figure className="article-hero">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              width={1120}
              height={630}
              loading="eager"
            />
          </figure>
        ) : (
          <div className="article-rule" aria-hidden="true">
            <span className="article-rule__mark" />
          </div>
        )}

        {/* ── Body ── */}
        <div className="article-body">
          {toc.length > 0 && (
            <nav className="article-toc" aria-label="In this article">
              <p className="article-toc__title">In this article</p>
              <ul>
                {toc.map((h) => (
                  <li
                    key={h.id}
                    className={`article-toc__item lvl-${h.level} ${
                      activeId === h.id ? "is-active" : ""
                    }`}
                  >
                    <a href={`#${h.id}`}>{h.text}</a>
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
