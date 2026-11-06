export type WorldKey =
  | "starter"
  | "projects"
  | "skills"
  | "boss"
  | "career"
  | "library"
  | "contact"
  | "services";

export type WorldDestination = {
  key: WorldKey;
  number: string;
  previewMeta: string;
  name: string;
  mapLabel: [string, string];
  description: string;
  tags: string[];
  icon: string;
  href: string;
  action: string;
  bonus?: boolean;
};

export const worldDestinations: WorldDestination[] = [
  {
    key: "starter",
    number: "01",
    previewMeta: "01 · PROFILE",
    name: "About",
    mapLabel: ["ABOUT", "ME"],
    description:
      "Product engineer and team lead: my background, how I work, and the path from shipping features to leading teams.",
    tags: ["ABOUT ME", "PRODUCT ENGINEERING", "CAREER"],
    icon: "/alger-world/starter.svg",
    href: "#about",
    action: "MORE ABOUT ME",
  },
  {
    key: "projects",
    number: "02",
    previewMeta: "02 · SELECTED WORK",
    name: "Projects",
    mapLabel: ["SELECTED", "PROJECTS"],
    description:
      "Hunter Vault, Zendtri POS, Filipino Alamat, Hero Journals and seven more documented builds across web and mobile.",
    tags: ["11 PROJECTS", "WEB + MOBILE", "CASE STUDIES"],
    icon: "/alger-world/projects.svg",
    href: "#projects",
    action: "VIEW PROJECTS",
  },
  {
    key: "skills",
    number: "03",
    previewMeta: "03 · CAPABILITIES",
    name: "Skills",
    mapLabel: ["SKILLS", "& TOOLS"],
    description:
      "The working stack: frontend, mobile, backend, data, integrations and delivery.",
    tags: ["REACT", "REACT NATIVE", "TYPESCRIPT"],
    icon: "/alger-world/skills.svg",
    href: "#skills",
    action: "SEE SKILLS",
  },
  {
    key: "boss",
    number: "04",
    previewMeta: "04 · FOCUS AREAS",
    name: "Specialties",
    mapLabel: ["FOCUS", "AREAS"],
    description:
      "Architecture, offline-first mobile and enterprise integrations — the complex work I do best.",
    tags: ["ARCHITECTURE", "INTEGRATIONS", "RELIABILITY"],
    icon: "/alger-world/boss.svg",
    href: "#challenges",
    action: "SEE SPECIALTIES",
  },
  {
    key: "career",
    number: "05",
    previewMeta: "05 · TRACK RECORD",
    name: "Experience",
    mapLabel: ["MY", "EXPERIENCE"],
    description:
      "Eight years from full-stack development to engineering leadership across retail, finance and SaaS.",
    tags: ["2018 → NOW", "TECH LEAD", "MENTORSHIP"],
    icon: "/alger-world/career.svg",
    href: "#experience",
    action: "VIEW EXPERIENCE",
  },
  {
    key: "library",
    number: "06",
    previewMeta: "06 · BLOG",
    name: "Articles",
    mapLabel: ["TECH", "ARTICLES"],
    description:
      "Practical writing on React, mobile architecture, AI-assisted development and lessons from shipping.",
    tags: ["ENGINEERING", "AI", "SHIPPING"],
    icon: "/alger-world/library.svg",
    href: "#field-notes",
    action: "READ ARTICLES",
  },
  {
    key: "contact",
    number: "07",
    previewMeta: "07 · GET IN TOUCH",
    name: "Contact",
    mapLabel: ["GET IN", "TOUCH"],
    description:
      "Have a project, role, or engineering challenge in mind? Start the conversation here.",
    tags: ["COLLABORATE", "PROJECTS", "CONNECT"],
    icon: "/alger-world/contact.svg",
    href: "#contact",
    action: "LET'S TALK",
  },
  {
    key: "services",
    number: "08",
    previewMeta: "08 · SERVICES",
    name: "Services",
    mapLabel: ["WORK", "WITH ME"],
    description:
      "Web products, mobile apps and e-commerce — practical solutions shaped around real business problems.",
    tags: ["WEB", "MOBILE", "COMMERCE"],
    icon: "/alger-world/services.svg",
    href: "/contact",
    action: "DISCUSS A PROJECT",
    bonus: true,
  },
];

export const heroFacts = [
  "8+ YEARS SHIPPING SOFTWARE",
  "SHIPPED A FINANCE APP: HUNTER VAULT",
  "FOCUS: REACT NATIVE + OFFLINE-FIRST",
  "50K+ FILIPINO ALAMAT DOWNLOADS",
];

export const skills = [
  { symbol: "⌘", title: "FRONTEND", body: "React · Next.js · TypeScript · Tailwind · MUI" },
  { symbol: "▣", title: "MOBILE", body: "React Native · Expo · Capacitor · Offline-first" },
  { symbol: "⌁", title: "BACKEND & DATA", body: "Node.js · NestJS · Laravel · PostgreSQL · Supabase" },
  { symbol: "✧", title: "INTEGRATIONS", body: "Firebase · GraphQL · Entra ID · Dataverse · Payments" },
  { symbol: "⚒", title: "ENGINEERING", body: "Architecture · CI/CD · Testing · Mentoring · Delivery" },
];

export const challenges = [
  {
    number: "01",
    icon: "⚡",
    title: "Offline-first field operations",
    body: "Designing resilient mobile workflows that remain useful in unreliable connectivity.",
    level: 87,
    stack: "REACT NATIVE · LOCAL STATE · SYNC",
  },
  {
    number: "02",
    icon: "◆",
    title: "Enterprise authentication",
    body: "Bringing secure sign-in and complex enterprise integrations into usable mobile experiences.",
    level: 93,
    stack: "ENTRA · PKCE · DATAVERSE",
  },
  {
    number: "03",
    icon: "★",
    title: "From MVP to product",
    body: "Owning architecture, monetization and iterative releases across independently shipped apps.",
    level: 83,
    stack: "ARCHITECTURE · RELEASES · ANALYTICS",
  },
];
