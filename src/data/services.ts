/**
 * Content model for the reusable service-page system. One shape, eight pages.
 * Components stay dumb; page-specific differences live here. No invented
 * metrics, testimonials, or client names — only real capabilities and facts.
 */

export type Capability = { index: string; title: string; body: string };
export type TechGroup = { label: string; items: string[] };
export type Deliverable = { index: string; title: string; note?: string };
export type Audience = { title: string; qualifier: string; engagement: string };
export type ProcessStep = { index: string; title: string; body: string };
export type Principle = { title: string; body: string };
export type LocationContent = { area: string; body: string[] };
export type RelatedService = { label: string; href: string };
export type ServiceVisual = "web" | "mobile" | "ecommerce" | "business";

export type ServicePageContent = {
  slug: string;
  eyebrow: string;
  titleLines: string[];
  lede: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual: ServiceVisual;
  capabilities: Capability[];
  technologies: TechGroup[];
  deliverables: Deliverable[];
  audiences: Audience[];
  process: ProcessStep[];
  principles: Principle[];
  featuredProjectSlug: string;
  location?: LocationContent;
  related: RelatedService[];
  closing: { titleLines: string[]; body: string; cta: { label: string; href: string } };
};

// ── Shared building blocks ───────────────────────────────────────
const PRIMARY_CTA = { label: "Discuss a project", href: "/contact" };
const WORK_CTA = { label: "View related work", href: "/portfolio" };

const PROCESS: ProcessStep[] = [
  { index: "01", title: "Discover", body: "Clarify users, workflows, constraints and what success actually means." },
  { index: "02", title: "Architect", body: "Define boundaries, data ownership, integrations and the real delivery risks." },
  { index: "03", title: "Build", body: "Ship tested features in reviewable, production-ready increments." },
  { index: "04", title: "Launch & evolve", body: "Deploy, measure, document and improve the system over time." },
];

const PRINCIPLES: Principle[] = [
  { title: "Clear scope", body: "Every engagement starts with written scope and priorities — no ambiguous moving targets." },
  { title: "Visible progress", body: "Work ships in reviewable increments you can see and try, not one big reveal at the end." },
  { title: "Production-minded decisions", body: "Choices are made for reliability, access control and maintenance — not just the demo." },
  { title: "Documentation & handoff", body: "You get readable code, notes and a system your team can own after launch." },
];

const CLOSING = (body: string) => ({
  titleLines: ["Have a system", "to build?"],
  body,
  cta: { label: "Start a conversation", href: "/contact" },
});

const AUD_STARTUP: Audience = {
  title: "Startups & founders",
  qualifier: "You have a product idea and need it built right the first time.",
  engagement: "MVP to production, hands-on technical partner.",
};
const AUD_SME: Audience = {
  title: "SMEs & operational businesses",
  qualifier: "You run real operations and need software that fits how you work.",
  engagement: "Custom systems, dashboards and automation.",
};
const AUD_AGENCY: Audience = {
  title: "Product teams & agencies",
  qualifier: "You need extra senior capacity or a reliable white-label build partner.",
  engagement: "Async-friendly, fits into your existing process.",
};
const AUD_INTL: Audience = {
  title: "International clients",
  qualifier: "You want senior full-stack delivery at a competitive rate.",
  engagement: "Remote, timezone-flexible, strong written English.",
};
const AUD_DAVAO: Audience = {
  title: "Davao & Mindanao businesses",
  qualifier: "You'd rather work with a developer you can meet in person.",
  engagement: "On-site discovery, same-timezone delivery.",
};

// ── Reusable tech groups ─────────────────────────────────────────
const TECH_WEB: TechGroup[] = [
  { label: "Interface", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Application", items: ["Node.js", "Laravel", "CodeIgniter"] },
  { label: "Data", items: ["PostgreSQL", "Supabase", "MySQL"] },
  { label: "Platforms", items: ["AWS", "Vercel", "Docker"] },
];
const TECH_MOBILE: TechGroup[] = [
  { label: "Client", items: ["React Native", "Expo", "TypeScript"] },
  { label: "Native", items: ["iOS", "Android", "Capacitor"] },
  { label: "Data", items: ["SQLite", "Firebase", "Supabase"] },
  { label: "Services", items: ["Node.js", "REST APIs", "AWS"] },
];
const TECH_ECOM: TechGroup[] = [
  { label: "Storefront", items: ["React", "Next.js", "TypeScript"] },
  { label: "Commerce", items: ["Laravel", "WordPress", "WooCommerce"] },
  { label: "Payments", items: ["PayMongo", "Card & e-wallet gateways"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "Supabase"] },
];
const TECH_SITE: TechGroup[] = [
  { label: "Build", items: ["React", "Next.js", "WordPress"] },
  { label: "Styling", items: ["Tailwind CSS", "Responsive design"] },
  { label: "Data", items: ["MySQL", "Firebase"] },
  { label: "Platforms", items: ["Vercel", "AWS"] },
];

const RELATED_ALL: RelatedService[] = [
  { label: "Web product development", href: "/web-development-services" },
  { label: "Cross-platform mobile apps", href: "/mobile-app-development" },
  { label: "E-commerce systems", href: "/ecommerce-development" },
  { label: "Small-business websites", href: "/small-business-web-design-philippines" },
];
const related = (except: string) =>
  RELATED_ALL.filter((r) => r.href !== except).slice(0, 3);

// ── Pages ────────────────────────────────────────────────────────
export const SERVICES: Record<string, ServicePageContent> = {
  "web-development-services": {
    slug: "web-development-services",
    eyebrow: "Service 01 / Web Systems",
    titleLines: ["Build scalable", "web systems."],
    lede: "Production-ready applications built around clear architecture, dependable interfaces, and business workflows that scale — with 8+ years of full-stack delivery behind them.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "web",
    capabilities: [
      { index: "01", title: "Application engineering", body: "React and Next.js applications built around maintainable feature boundaries." },
      { index: "02", title: "Backend & API systems", body: "Node.js, Laravel and versioned APIs for real business workflows and integrations." },
      { index: "03", title: "Data architecture", body: "PostgreSQL, Supabase and MySQL schemas designed for reliability and access control." },
      { index: "04", title: "Delivery & operations", body: "Testing, deployment pipelines, monitoring and production support." },
    ],
    technologies: TECH_WEB,
    deliverables: [
      { index: "01", title: "SaaS & subscription products" },
      { index: "02", title: "Operations dashboards" },
      { index: "03", title: "Booking & reservation systems" },
      { index: "04", title: "Customer portals & CRMs" },
      { index: "05", title: "Internal tools & automation" },
      { index: "06", title: "MVP prototypes to production" },
    ],
    audiences: [AUD_STARTUP, AUD_SME, AUD_AGENCY, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "zendtri-pos",
    related: related("/web-development-services"),
    closing: CLOSING(
      "Tell me what's slowing the business down. I'll help turn it into a clear, maintainable product."
    ),
  },

  "ecommerce-development": {
    slug: "ecommerce-development",
    eyebrow: "Service 02 / E-commerce Systems",
    titleLines: ["Commerce that", "actually converts."],
    lede: "Online stores and retail systems built around real checkout, inventory and fulfilment flows — from storefront to server-authoritative stock.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "ecommerce",
    capabilities: [
      { index: "01", title: "Storefront engineering", body: "Fast React/Next.js and WordPress storefronts built for browsing and checkout." },
      { index: "02", title: "Checkout & payments", body: "Reliable cart, checkout and payment flows with PayMongo and gateway integrations." },
      { index: "03", title: "Inventory & orders", body: "Server-authoritative stock, orders and fulfilment that stay consistent under load." },
      { index: "04", title: "Operations & reporting", body: "Admin tooling, roles and reporting so the team can run the store day to day." },
    ],
    technologies: TECH_ECOM,
    deliverables: [
      { index: "01", title: "Custom online stores" },
      { index: "02", title: "Headless commerce frontends" },
      { index: "03", title: "Checkout & payment integration" },
      { index: "04", title: "Inventory & order management" },
      { index: "05", title: "Point-of-sale & retail systems" },
      { index: "06", title: "Store migrations & replatforming" },
    ],
    audiences: [AUD_STARTUP, AUD_SME, AUD_AGENCY, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "poslite-inventory-software",
    related: related("/ecommerce-development"),
    closing: CLOSING(
      "Tell me how customers buy from you today. I'll help turn it into a store that's reliable to run."
    ),
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    eyebrow: "Service 03 / Mobile Products",
    titleLines: ["Native apps from", "one codebase."],
    lede: "iOS and Android products built with React Native — offline-first storage, background sync, and clean API boundaries, shipped to both stores from one codebase.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "mobile",
    capabilities: [
      { index: "01", title: "Cross-platform apps", body: "React Native and Expo apps that ship to iOS and Android from a single codebase." },
      { index: "02", title: "Offline-first data", body: "Local SQLite storage and reactive queries so the app works without a connection." },
      { index: "03", title: "Sync & APIs", body: "Background synchronization and versioned APIs that keep devices and server consistent." },
      { index: "04", title: "Store delivery", body: "Builds, review submission and release management for the App Store and Google Play." },
    ],
    technologies: TECH_MOBILE,
    deliverables: [
      { index: "01", title: "Consumer mobile apps" },
      { index: "02", title: "Offline-first field tools" },
      { index: "03", title: "Inventory & operations apps" },
      { index: "04", title: "Learning & content apps" },
      { index: "05", title: "Web-to-native with Capacitor" },
      { index: "06", title: "MVP to store launch" },
    ],
    audiences: [AUD_STARTUP, AUD_SME, AUD_AGENCY, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "hunter-vault",
    related: related("/mobile-app-development"),
    closing: CLOSING(
      "Tell me what your users need on the go. I'll help turn it into an app that's dependable on both platforms."
    ),
  },

  "small-business-web-design-philippines": {
    slug: "small-business-web-design-philippines",
    eyebrow: "Service 04 / Small-Business Web",
    titleLines: ["Websites that", "win customers."],
    lede: "Fast, mobile-first websites for Philippine small businesses — built to load quickly, read well on a phone, and turn visitors into enquiries.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "web",
    capabilities: [
      { index: "01", title: "Business websites", body: "Clean, responsive sites that present the business clearly and load fast on mobile." },
      { index: "02", title: "Content & CMS", body: "WordPress or headless content so you can update pages without a developer." },
      { index: "03", title: "Search foundations", body: "Sensible structure, metadata and performance so pages can be found on Google." },
      { index: "04", title: "Bookings & enquiries", body: "Contact, booking and enquiry flows wired to where the business already works." },
    ],
    technologies: TECH_SITE,
    deliverables: [
      { index: "01", title: "Business & landing sites" },
      { index: "02", title: "Service & booking pages" },
      { index: "03", title: "Content-managed sites" },
      { index: "04", title: "Menu & catalog pages" },
      { index: "05", title: "Site refreshes & rebuilds" },
      { index: "06", title: "Simple online storefronts" },
    ],
    audiences: [AUD_STARTUP, AUD_SME, AUD_DAVAO, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "poslite-inventory-software",
    location: {
      area: "Philippines · remote-friendly",
      body: [
        "Based in Davao City and working with small businesses across the Philippines, remotely and — around Davao — in person.",
        "Most of the country browses on a phone, so every build is mobile-first, quick to load, and easy for a small team to keep updated after launch.",
      ],
    },
    related: related("/small-business-web-design-philippines"),
    closing: CLOSING(
      "Tell me what your business does. I'll help turn it into a site that brings in the right customers."
    ),
  },

  "hire-web-developer-philippines": {
    slug: "hire-web-developer-philippines",
    eyebrow: "Service 05 / Engineering Partner",
    titleLines: ["An engineer you can", "rely on."],
    lede: "A Filipino product engineer with 8+ years across e-commerce, finance and operations software — available for remote projects worldwide.",
    primaryCta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: WORK_CTA,
    visual: "business",
    capabilities: [
      { index: "01", title: "Full-stack delivery", body: "Frontend, backend, database and deployment — owned end to end, not handed off." },
      { index: "02", title: "Engineering judgement", body: "Architecture and trade-off decisions made early, before they get expensive to change." },
      { index: "03", title: "Async collaboration", body: "Clear written updates, reviewable increments and timezone-flexible working." },
      { index: "04", title: "Ownership & handoff", body: "Documented, maintainable systems your team can take over with confidence." },
    ],
    technologies: [
      { label: "Interface", items: ["React", "Next.js", "TypeScript"] },
      { label: "Backend", items: ["Node.js", "Laravel", "PostgreSQL"] },
      { label: "Mobile", items: ["React Native", "Expo"] },
      { label: "Platforms", items: ["AWS", "Docker", "Vercel"] },
    ],
    deliverables: [
      { index: "01", title: "Web & SaaS applications" },
      { index: "02", title: "APIs & integrations" },
      { index: "03", title: "Mobile apps (iOS & Android)" },
      { index: "04", title: "Team augmentation" },
      { index: "05", title: "Technical discovery & architecture" },
      { index: "06", title: "Rescue & maintenance work" },
    ],
    audiences: [AUD_STARTUP, AUD_SME, AUD_AGENCY, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "zendtri-pos",
    location: {
      area: "Philippines · remote worldwide",
      body: [
        "Based in Davao City, Philippines, working remotely with clients and teams worldwide.",
        "Engagements are project-based or ongoing, with clear scope, written updates and strong English throughout — the working style suits agencies and founders who need dependable senior capacity.",
      ],
    },
    related: related("/hire-web-developer-philippines"),
    closing: CLOSING(
      "Tell me what you're building and where you're stuck. I'll tell you honestly how I can help."
    ),
  },

  "web-developer-davao": {
    slug: "web-developer-davao",
    eyebrow: "Service 06 / Davao · Web",
    titleLines: ["A web developer", "in Davao City."],
    lede: "A senior web developer based in Davao City — custom web apps, business systems and websites, with the option to meet in person and work in the same timezone.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "web",
    capabilities: [
      { index: "01", title: "Custom web apps", body: "React and Node.js applications tailored to how a Davao business actually operates." },
      { index: "02", title: "Business systems", body: "Inventory, dashboards and internal tools that replace spreadsheets and manual work." },
      { index: "03", title: "Websites that perform", body: "Fast, mobile-first sites built to be found and to convert local customers." },
      { index: "04", title: "Support & iteration", body: "Ongoing improvements, fixes and features once the system is live." },
    ],
    technologies: TECH_WEB,
    deliverables: [
      { index: "01", title: "Custom web applications" },
      { index: "02", title: "Business & operations systems" },
      { index: "03", title: "Company & service websites" },
      { index: "04", title: "Booking & enquiry systems" },
      { index: "05", title: "Dashboards & internal tools" },
      { index: "06", title: "Maintenance & upgrades" },
    ],
    audiences: [AUD_DAVAO, AUD_SME, AUD_STARTUP, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "hero-journals",
    location: {
      area: "Davao City · on-site or remote",
      body: [
        "Based in Davao City, so discovery and planning can happen in person when that's easier — same timezone, direct line, no agency layers.",
        "Work covers Davao and the rest of Mindanao, and continues remotely for clients elsewhere in the Philippines and abroad.",
      ],
    },
    related: [
      { label: "Website Design in Davao City", href: "/website-design-davao-city" },
      { label: "Mobile App Developer in Davao", href: "/mobile-app-developer-davao" },
      { label: "Hire a Developer in the Philippines", href: "/hire-web-developer-philippines" },
    ],
    closing: CLOSING(
      "Tell me what the business needs. We can sit down in Davao or start remotely — whatever's easier."
    ),
  },

  "mobile-app-developer-davao": {
    slug: "mobile-app-developer-davao",
    eyebrow: "Service 07 / Davao · Mobile",
    titleLines: ["A mobile developer", "in Davao City."],
    lede: "iOS and Android apps for Davao businesses — built with React Native so one codebase reaches customers on both platforms, with the option to meet in person.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "mobile",
    capabilities: [
      { index: "01", title: "iOS & Android apps", body: "One React Native codebase reaching customers on both platforms." },
      { index: "02", title: "Operations apps", body: "Inventory, field and staff tools that work offline and sync when connected." },
      { index: "03", title: "Customer apps", body: "Booking, loyalty and content apps that keep a local business close to its customers." },
      { index: "04", title: "Store launch", body: "App Store and Google Play submission, review and release handled for you." },
    ],
    technologies: TECH_MOBILE,
    deliverables: [
      { index: "01", title: "Customer-facing apps" },
      { index: "02", title: "Inventory & field apps" },
      { index: "03", title: "Booking & loyalty apps" },
      { index: "04", title: "Offline-first tools" },
      { index: "05", title: "Web-to-native builds" },
      { index: "06", title: "MVP to store launch" },
    ],
    audiences: [AUD_DAVAO, AUD_SME, AUD_STARTUP, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "filipino-alamat",
    location: {
      area: "Davao City · on-site or remote",
      body: [
        "Based in Davao City — planning and demos can happen in person, in the same timezone, without going through an agency.",
        "Apps are built for Davao and Mindanao businesses first, and delivery continues remotely for clients elsewhere.",
      ],
    },
    related: [
      { label: "Web Developer in Davao", href: "/web-developer-davao" },
      { label: "Website Design in Davao City", href: "/website-design-davao-city" },
      { label: "Mobile App Development", href: "/mobile-app-development" },
    ],
    closing: CLOSING(
      "Tell me how customers reach you now. I'll help turn it into an app that runs well on both platforms."
    ),
  },

  "website-design-davao-city": {
    slug: "website-design-davao-city",
    eyebrow: "Service 08 / Davao · Web Design",
    titleLines: ["Website design", "in Davao City."],
    lede: "Professional website design for Davao businesses — fast, mobile-first, and built to be found on Google and convert visitors into customers.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: WORK_CTA,
    visual: "web",
    capabilities: [
      { index: "01", title: "Business websites", body: "Clear, responsive sites that present a Davao business well on any device." },
      { index: "02", title: "Content management", body: "Update pages, menus and offers yourself with a simple CMS." },
      { index: "03", title: "Found on Google", body: "Solid structure, metadata and speed so local customers can find you." },
      { index: "04", title: "Enquiries & bookings", body: "Contact, booking and messaging wired to the tools you already use." },
    ],
    technologies: TECH_SITE,
    deliverables: [
      { index: "01", title: "Business & landing sites" },
      { index: "02", title: "Service & booking pages" },
      { index: "03", title: "Content-managed sites" },
      { index: "04", title: "Menu & catalog pages" },
      { index: "05", title: "Redesigns & rebuilds" },
      { index: "06", title: "Simple storefronts" },
    ],
    audiences: [AUD_DAVAO, AUD_SME, AUD_STARTUP, AUD_INTL],
    process: PROCESS,
    principles: PRINCIPLES,
    featuredProjectSlug: "hero-journals",
    location: {
      area: "Davao City · on-site or remote",
      body: [
        "Based in Davao City, so we can meet in person to plan the site and review it together — same timezone, direct communication.",
        "Serving Davao and Mindanao businesses, with remote delivery available anywhere else in the country.",
      ],
    },
    related: [
      { label: "Web Developer in Davao", href: "/web-developer-davao" },
      { label: "Mobile App Developer in Davao", href: "/mobile-app-developer-davao" },
      { label: "Small-Business Web Design", href: "/small-business-web-design-philippines" },
    ],
    closing: CLOSING(
      "Tell me about your business. I'll help turn it into a site that looks right and gets found."
    ),
  },
};

export function getServiceContent(slug: string): ServicePageContent | undefined {
  return SERVICES[slug];
}
