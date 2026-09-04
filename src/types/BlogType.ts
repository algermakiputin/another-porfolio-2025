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
  featured?: boolean;
  shortTitle?: string;
  featuredOnHomepage?: boolean;
  homepageOrder?: number;
  noIndex?: boolean;
};

export type BlogMeta = Omit<BlogPost, "content">;
