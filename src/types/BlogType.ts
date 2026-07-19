export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
  noIndex?: boolean;
};

export type BlogMeta = Omit<BlogPost, "content">;
