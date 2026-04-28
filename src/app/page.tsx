import type { Metadata } from "next";
import HomePage from "../views/home/HomePage";

export const metadata: Metadata = {
  title: "Alger Makiputin | Full Stack Developer for Startups & MVPs",
  description:
    "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems using React, Node.js, TypeScript, and AWS.",
  alternates: {
    canonical: "https://algermakiputin.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alger Makiputin",
  url: "https://algermakiputin.com",
  image: "https://algermakiputin.com/images/profile.webp",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems using React, Node.js, TypeScript, and AWS.",
  sameAs: [
    "https://ph.linkedin.com/in/alger-makiputin",
    "https://github.com/algermakiputin",
    "https://www.youtube.com/c/AlgerMakiputin",
  ],
  knowsAbout: [
    "Full Stack Web Development",
    "MVP Development for Startups",
    "SaaS Application Development",
    "E-commerce Development",
    "React",
    "Node.js",
    "TypeScript",
    "AWS Cloud Infrastructure",
    "Laravel",
    "Docker",
    "REST API Development",
    "System Architecture",
    "Performance Optimization",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Available for hire",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
