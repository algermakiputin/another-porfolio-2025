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

function getMdxFiles(): string[] {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
}

function parseFrontmatter(file: string): Omit<BlogPost, "content"> {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data } = matter(raw);
  return {
    slug: file.replace(".mdx", ""),
    title: data.title,
    description: data.description,
    publishedDate: data.publishedDate,
    readTime: data.readTime,
    category: data.category,
    tags: data.tags ?? [],
    image: data.image,
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
    readTime: data.readTime,
    category: data.category,
    tags: data.tags ?? [],
    image: data.image,
    content: String(processed),
    ...(data.noIndex ? { noIndex: true } : {}),
  };
}
