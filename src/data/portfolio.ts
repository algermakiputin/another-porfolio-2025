/**
 * Structured content for the redesigned homepage.
 * All copy is real or lightly edited from the existing site / resume.
 * No employers, clients, or metrics are invented; enterprise client names are
 * sanitized here (see Selected Builds).
 */

export type NavItem = {
  label: string;
  /** In-page anchor id on the homepage (used for scroll-spy). */
  section?: string;
  /** Route to navigate to (used when off the homepage, or for real routes). */
  href: string;
  /** Two-digit display index shown beside the label. */
  index: string;
  /** Renders the Contact border-and-arrow treatment. */
  isContact?: boolean;
};

export const navItems: NavItem[] = [
  // Primary nav = dedicated pages. About/Experience remain homepage sections
  // (reachable by scrolling the homepage and via the footer). Contact stays as
  // the separate CTA button.
  { label: "Home",     href: "/",          index: "01" },
  { label: "Projects", href: "/portfolio", index: "02" },
  { label: "Blog",     href: "/blog",      index: "03" },
  { label: "Contact",  href: "/contact",   index: "04", isContact: true },
];

export const hero = {
  nameLines: ["Alger", "Makiputin"],
  role: "Product Engineer — Web & Mobile",
  stack: "React · React Native · TypeScript · Node.js",
  intro:
    "I lead and ship production software across web, iOS, Android, APIs, and data—turning complex business workflows into reliable products used by real customers.",
  primaryCta: { label: "View case studies", href: "#builds" },
  secondaryCta: { label: "Discuss an opportunity", href: "/contact" },
  workstation: {
    src: "/portfolio/characters/faceless-workstation.webp",
    width: 1640,
    height: 959,
  },
};

export const about = {
  title: "About me",
  tagline: "Product engineering, from architecture to release.",
  paragraphs: [
    "I'm a product engineer with 8+ years building web and mobile products across retail, finance, operations and enterprise workflows. I work the full delivery lifecycle—requirements, architecture, APIs, data, release, and the maintenance that keeps a product reliable in production.",
    "I currently lead frontend and mobile as a Software Engineering Team Lead, making the architecture and technical decisions while staying hands-on in the code. The work I take on tends to be the hard part: complex operational workflows, cross-platform delivery, offline and mobile constraints, authentication and third-party integrations, multi-tenant systems, financial and transactional logic, legacy-system modernization, and production reliability.",
  ],
  stats: [
    { icon: "calendar", value: "8+", label: "Years" },
    { icon: "devices", value: "Web +", label: "Mobile" },
    { icon: "pin", value: "Cebu,", label: "PH" },
  ],
  map: {
    src: "/portfolio/panels/about-system-map.svg",
    width: 760,
    height: 560,
  },
};

/**
 * Experience timeline — real roles + dates from the resume, presented role-only
 * (no employer names) per the approved design and to avoid exposing employers.
 * Descriptions are sanitized (no client names or client-specific figures).
 */
export type TimelineEntry = {
  period: string;
  role: string;
  points: string[];
};

export const experience: TimelineEntry[] = [
  {
    period: "2022 – Present",
    role: "Software Engineering Team Lead",
    points: [
      "Lead and mentor a cross-functional team delivering high-impact web and mobile products.",
      "Drive architecture decisions, code quality, and engineering best practices.",
      "Ship and maintain iOS/Android apps and RESTful APIs; refactor legacy systems for maintainability.",
    ],
  },
  {
    period: "2018 – 2022",
    role: "Full Stack Developer",
    points: [
      "Built and shipped inventory, POS, and mobile products used by real businesses.",
      "Worked directly with clients to extend and support production systems.",
      "Focused on performance, reliability, and a great developer experience.",
    ],
  },
];

export type TechItem = { name: string; icon: string };

/** Six prominent technologies — current senior frontend + mobile specialization */
export const coreStack: TechItem[] = [
  { name: "React", icon: "react" },
  { name: "React Native", icon: "react-native" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Capacitor", icon: "capacitor" },
];

/** Capabilities ledger — leads with ownership, not an undifferentiated list of
 *  logos. Grouped by what I own end-to-end; specific tech stays visible but
 *  secondary. All claims are supported by the résumé + shipped project work. */
export const additionalStack: { category: string; items: string[] }[] = [
  { category: "Product engineering", items: ["Requirements → production", "End-to-end feature ownership", "Release, maintenance & iteration"] },
  { category: "Web & mobile", items: ["Responsive, accessible UIs", "iOS & Android delivery", "Expo · Capacitor"] },
  { category: "Systems & backend", items: ["REST APIs", "PostgreSQL · Supabase · Firebase", "Authentication", "Offline sync", "External integrations"] },
  { category: "Technical leadership", items: ["Architecture decisions", "Code review & standards", "Mentoring", "Testing & CI/CD", "Refactoring"] },
];

/**
 * Selected Builds — real projects only. Each links to the existing
 * /project/[slug] route. "featured" gets the wide card.
 * `frame` = "screenshot" uses a real image; "device" renders an abstract frame
 * where no shippable screenshot exists.
 */
export type Build = {
  slug: string;
  name: string;
  category: string;
  categoryTone: "product" | "mobile" | "web";
  summary: string;
  tech: string[];
  featured?: boolean; // the single large flagship card
  /** Homepage curation — the homepage renders only featuredOnHomepage builds,
   *  ordered by homepageOrder. Hidden builds stay in the data + on /portfolio. */
  featuredOnHomepage?: boolean;
  homepageOrder?: number;
  frame: "screenshot" | "device";
  image?: string;
  imageAlt?: string;
};

export const selectedBuilds: Build[] = [
  {
    slug: "hunter-vault",
    name: "Hunter Vault",
    category: "Product",
    categoryTone: "product",
    summary:
      "A gamified personal-finance app that turns budgeting, debt, and savings into an RPG progression loop — 100% offline, zero data collection.",
    tech: ["React Native", "TypeScript", "SQLite", "Expo"],
    featured: true,
    featuredOnHomepage: true,
    homepageOrder: 1,
    frame: "screenshot",
    image: "/images/projects/hunter-vault.webp",
    imageAlt: "Hunter Vault app showing a portfolio value dashboard and daily quests",
  },
  {
    slug: "zendtri-pos",
    name: "Zendtri POS",
    category: "SaaS Platform",
    categoryTone: "product",
    summary:
      "Multi-tenant POS and inventory platform built for web and mobile, with tenant isolation and server-authoritative stock workflows.",
    tech: ["React", "TypeScript", "Supabase"],
    featuredOnHomepage: true,
    homepageOrder: 2,
    frame: "device",
    imageAlt: "Zendtri POS multi-platform point-of-sale and inventory platform",
  },
  {
    slug: "hero-journals",
    name: "Hero Journals",
    category: "Web Experience",
    categoryTone: "web",
    summary:
      "A trading journal that imports activity and turns it into useful performance, risk and drawdown analytics.",
    tech: ["React", "Laravel", "MySQL"],
    featuredOnHomepage: true,
    homepageOrder: 3,
    frame: "screenshot",
    image: "/images/projects/trading-journal.webp",
    imageAlt: "Hero Journals trading analytics dashboard with performance charts",
  },
  {
    slug: "face-recognition-based-payroll-and-attendance-software",
    name: "Face-Recognition Payroll",
    category: "Enterprise Web",
    categoryTone: "web",
    summary:
      "An attendance and payroll platform for a multi-branch retail business, using AI face recognition and geo-fencing to eliminate buddy-punching and automate payroll.",
    tech: ["React", "Laravel", "Python", "AWS"],
    featuredOnHomepage: false, // retained in data + on /portfolio; hidden from the homepage
    frame: "screenshot",
    image: "/images/projects/payroll.webp",
    imageAlt: "Face-recognition based payroll and attendance dashboard",
  },
  {
    slug: "filipino-alamat",
    name: "Filipino Alamat",
    category: "Mobile App",
    categoryTone: "mobile",
    summary:
      "A cross-platform folklore app delivering Filipino stories in text and audio, with more than 50,000 downloads.",
    tech: ["React Native", "Firebase", "Expo"],
    featuredOnHomepage: true,
    homepageOrder: 4,
    frame: "screenshot",
    image: "/images/projects/filipino-alamat.webp",
    imageAlt: "Filipino Alamat app showing a library of illustrated folk stories",
  },
  {
    slug: "fashion-ecommerce-template",
    name: "Fashion E-commerce",
    category: "Web Template",
    categoryTone: "web",
    summary:
      "A fashion storefront template with editorial layout, product listings, and clean category pages — built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    featuredOnHomepage: false,
    frame: "device",
    imageAlt: "Fashion e-commerce website template — editorial storefront built with Next.js",
  },
  {
    slug: "lunara-bay",
    name: "Lunara Bay",
    category: "Web Template",
    categoryTone: "web",
    summary:
      "A resort and hospitality website template with a coastal aesthetic, rooms showcase, and booking-ready layout — built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    featuredOnHomepage: false,
    frame: "device",
    imageAlt: "Lunara Bay resort website template — hospitality layout built with Next.js",
  },
  {
    slug: "multipurpose-marketplace-template",
    name: "Multipurpose Marketplace",
    category: "Web Template",
    categoryTone: "web",
    summary:
      "A flexible marketplace template with category browsing, product listing grids, and vendor pages — adaptable to any niche, built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    featuredOnHomepage: false,
    frame: "device",
    imageAlt: "Multipurpose marketplace website template — category and listing layout built with Next.js",
  },
];

export const contact = {
  headline: "Building a product across web and mobile?",
  cta: "Discuss an opportunity",
  href: "/contact",
  email: "hello@algermakiputin.com",
  /* Single source of truth for the contact/intake surfaces. */
  availability: "Available for new projects",
  responseTime: "Within 24 hours",
  focus: "Web · Mobile · Product systems",
};

/** Social + service links reused by the footer (kept from the existing site). */
export const socials = [
  { label: "LinkedIn", href: "https://ph.linkedin.com/in/alger-makiputin" },
  { label: "GitHub", href: "https://github.com/algermakiputin" },
  { label: "YouTube", href: "https://www.youtube.com/c/AlgerMakiputin" },
  { label: "Email", href: "mailto:hello@algermakiputin.com" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/portfolio" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Primary footer services: category pages only. Location-specific landing
   pages (Davao, Philippines) stay discoverable via those pages + sitemap, not
   the main footer nav. */
export const serviceLinks = [
  { label: "Web product development", href: "/web-development-services" },
  { label: "Cross-platform mobile apps", href: "/mobile-app-development" },
  { label: "E-commerce systems", href: "/ecommerce-development" },
];
