import Link from "next/link";
import type { BlogMeta } from "../../../types/BlogType";
import BlueprintBackground from "../decorative/BlueprintBackground";
import SectionMarker from "../decorative/SectionMarker";

/** Category → accent class + display label (mirrors the Field Notes archive). */
const CATEGORY_CLASS: Record<string, string> = {
  AI: "cat-ai",
  React: "cat-react",
  SEO: "cat-seo",
};
const CATEGORY_LABEL: Record<string, string> = {
  AI: "AI & Agents",
  React: "React",
  SEO: "Product & Growth",
};

function toIsoDate(date: string): string {
  const d = new Date(date);
  return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

/**
 * Homepage "Field Notes" band — an editorial ledger (no thumbnails/cards). It
 * preserves the recentPosts → article internal links (SEO) and gives the
 * homepage a calm, text-first pause after the visually heavy builds section.
 */
export default function WritingSection({ posts }: { posts: BlogMeta[] }) {
  if (!posts?.length) return null;
  const items = posts.slice(0, 3);

  return (
    <section
      id="writing"
      className="pf-section pf-writing"
      aria-labelledby="field-notes-heading"
    >
      <BlueprintBackground tone="dark" />
      <div className="pf-container pf-writing__inner">
        <div className="field-notes__header">
          <div className="field-notes__heading">
            <p className="field-notes__eyebrow">Writing / Latest Notes</p>
            <SectionMarker title="Field Notes" id="field-notes-heading" />
          </div>
          <Link href="/blog" className="field-notes__all">
            View all notes <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="field-notes__list">
          {items.map((p, i) => {
            const iso = toIsoDate(p.publishedDate);
            const catClass = CATEGORY_CLASS[p.category] ?? "cat-default";
            const catLabel = CATEGORY_LABEL[p.category] ?? p.category;
            const isLead = i === 0;
            return (
              <article
                key={p.slug}
                className={`field-note-row ${catClass}${isLead ? " field-note-row--lead" : ""}`}
              >
                <span className="field-note-row__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="field-note-row__category">
                  {isLead && (
                    <span className="field-note-row__leadlabel">Latest note</span>
                  )}
                  <span className="field-note-row__cat">{catLabel}</span>
                </span>

                <div className="field-note-row__content">
                  <h3>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="field-note-row__link"
                    >
                      {p.shortTitle ?? p.title}
                    </Link>
                  </h3>
                  <p className="field-note-row__summary">{p.description}</p>
                </div>

                <div className="field-note-row__meta">
                  {iso && <time dateTime={iso}>{p.publishedDate}</time>}
                  <span>{p.readTime}</span>
                </div>

                <span className="field-note-row__arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
