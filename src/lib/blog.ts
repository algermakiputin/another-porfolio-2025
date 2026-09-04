import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import type { BlogPost } from "../types/BlogType";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const PUBLIC_DIR = path.join(process.cwd(), "public");

function getMdxFiles(): string[] {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

/**
 * Only surface a hero image when the referenced asset actually exists on disk.
 * Several posts point at cover files that were never added; rendering those
 * produces a broken <img> that exposes its alt text. Resolving here means the
 * template can simply omit the hero when the value is empty.
 */
function resolveHero(image?: string): string {
  if (!image) return "";
  if (/^https?:\/\//.test(image)) return image;
  const abs = path.join(PUBLIC_DIR, image.replace(/^\//, ""));
  return fs.existsSync(abs) ? image : "";
}

/** Estimate reading time from raw markdown when frontmatter omits it. */
function estimateReadTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 225))} min read`;
}

function slugifyHeading(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/gi, " ")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

/**
 * Bake article enhancements into the rendered HTML at build time so they are
 * part of the content string itself. Doing this on the server (rather than
 * mutating the DOM after mount) means React never reverts the injected nodes
 * on re-render, and the markup works without JavaScript.
 *  - h2/h3 receive stable, unique ids for deep links and the table of contents.
 *  - each <pre> is wrapped in a labelled, copyable code frame.
 */
function enhanceHtml(html: string): string {
  const usedIds = new Set<string>();

  // Heading ids
  html = html.replace(/<(h[23])>([\s\S]*?)<\/\1>/g, (_m, tag, inner) => {
    let id = slugifyHeading(inner) || "section";
    let n = 1;
    while (usedIds.has(id)) id = `${id}-${n++}`;
    usedIds.add(id);
    return `<${tag} id="${id}">${inner}</${tag}>`;
  });

  // Code frames
  html = html.replace(/<pre>([\s\S]*?)<\/pre>/g, (_m, inner) => {
    const langMatch = inner.match(/class="language-([a-z0-9]+)"/i);
    const lang = langMatch ? langMatch[1].toUpperCase() : "CODE";
    return (
      `<figure class="code-frame">` +
      `<figcaption class="code-frame__header">` +
      `<span class="code-frame__lang">${lang}</span>` +
      `<button type="button" class="code-frame__copy" aria-label="Copy code to clipboard">Copy</button>` +
      `</figcaption>` +
      `<pre>${inner}</pre>` +
      `</figure>`
    );
  });

  return html;
}

function parseFrontmatter(file: string): Omit<BlogPost, "content"> {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: file.replace(".mdx", ""),
    title: data.title,
    description: data.description,
    publishedDate: data.publishedDate,
    readTime: data.readTime || estimateReadTime(content),
    category: data.category,
    tags: data.tags ?? [],
    image: resolveHero(data.image),
    ...(data.featured ? { featured: true } : {}),
    ...(data.shortTitle ? { shortTitle: data.shortTitle } : {}),
    ...(data.featuredOnHomepage ? { featuredOnHomepage: true } : {}),
    ...(typeof data.homepageOrder === "number" ? { homepageOrder: data.homepageOrder } : {}),
    ...(data.noIndex ? { noIndex: true } : {}),
  };
}

export function getBlogs(): Omit<BlogPost, "content">[] {
  return getMdxFiles()
    .map(parseFrontmatter)
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedDate: data.publishedDate,
    readTime: data.readTime || estimateReadTime(content),
    category: data.category,
    tags: data.tags ?? [],
    image: resolveHero(data.image),
    content: enhanceHtml(String(processed)),
    ...(data.noIndex ? { noIndex: true } : {}),
  };
}
