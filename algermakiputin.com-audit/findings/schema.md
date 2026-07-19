# Schema & Structured Data Findings — algermakiputin.com
**Audited:** 2026-07-11

---

## Current Schema Inventory

| Page | @type | In Source | Live |
|------|-------|:---------:|:----:|
| / | Person | ✅ | ✅ |
| /web-development-services/ | Service | ✅ | ✅ |
| /mobile-app-development/ | Service | ✅ | ✅ |
| /ecommerce-development/ | Service | ✅ | ✅ |
| /web-developer-davao/ | Person (with address + areaServed) | ✅ | ✅ |
| /hire-web-developer-philippines/ | Person | ✅ | **NOT LIVE** |
| /website-design-davao-city/ | Service | ✅ | **NOT LIVE** |
| /small-business-web-design-philippines/ | Service | ✅ | **NOT LIVE** |
| /mobile-app-developer-davao/ | Service | ✅ | **NOT LIVE** |
| /blog/ | Blog | ✅ | ✅ |
| /contact/ | ContactPage | ✅ | ✅ |
| /portfolio/ | CollectionPage + ItemList | ✅ | ✅ |
| /project/[slug]/ | WebApplication/MobileApplication | ✅ | ✅ |

All schema uses JSON-LD (correct format). No Microdata or RDFa.

---

## CRITICAL: Stale Deployment — 4 Pages with Valid Schema Not Live

4 pages have correct schema in the compiled `out/` directory but are not served by the live site. This is a deployment issue, not a code issue.

**Affected pages:** /hire-web-developer-philippines/, /website-design-davao-city/, /small-business-web-design-philippines/, /mobile-app-developer-davao/

**Fix:** Redeploy the current build. No code change needed.

---

## HIGH: Missing WebSite Schema

No site-level WebSite entity exists on the homepage, preventing sitelinks search box eligibility and Knowledge Panel entity resolution.

---

## HIGH: Missing AggregateRating

6 client testimonials (all 5-star) exist in Reviews component, none wrapped in structured data. Star ratings cannot appear in SERPs without this.

---

## HIGH: Missing ProfessionalService / LocalBusiness

Site relies entirely on `Person` type. A `ProfessionalService` entity at the domain root would strengthen local pack eligibility for "web developer Davao City" queries.

---

## MEDIUM: Homepage Person Missing @id and address

- No `@id` → Google cannot create stable entity anchor
- No `address` → key local intent signal missing on highest-traffic page

---

## MEDIUM: jobTitle Inconsistency Across Pages

| Page | jobTitle |
|------|---------|
| Homepage | "Full Stack Developer" |
| /hire-web-developer-philippines/ | "Senior Full Stack Developer" |
| /web-developer-davao/ | "Senior Full Stack Web Developer" |
| /contact/ | "Full Stack Engineer" |

Inconsistency weakens entity confidence across the knowledge graph.

**Fix:** Standardize to "Full Stack Developer" across all pages.

---

## MEDIUM: No BreadcrumbList on Any Page

Free SERP enhancement not implemented anywhere.

---

## LOW: Offer.price Issue on Service Pages

`price: "Contact for pricing"` with `priceCurrency: "USD"` is internally inconsistent. Google's Offer processor expects numeric prices.

**Fix:** Remove the `offers` block entirely, or use a `UnitPriceSpecification` with a description field.

---

## LOW: areaServed "Worldwide" Weakly Typed

`{"@type": "Place", "name": "Worldwide"}` is not a resolvable geographic entity.

**Fix:** Use plain string `"areaServed": "Worldwide"` instead.

---

## Ready-to-Use JSON-LD: Homepage Graph Replacement

Replace the current single Person block with this three-entity graph array in `src/app/page.tsx`:

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://algermakiputin.com#person",
    "name": "Alger Makiputin",
    "url": "https://algermakiputin.com",
    "image": "https://algermakiputin.com/images/profile.webp",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems using React, Node.js, TypeScript, and AWS.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Davao City",
      "addressRegion": "Davao del Sur",
      "addressCountry": "PH"
    },
    "sameAs": [
      "https://ph.linkedin.com/in/alger-makiputin",
      "https://github.com/algermakiputin",
      "https://www.youtube.com/c/AlgerMakiputin",
      "https://www.facebook.com/hitme321/",
      "https://algerwrites.medium.com/"
    ],
    "knowsAbout": [
      "Full Stack Web Development", "MVP Development for Startups",
      "SaaS Application Development", "E-commerce Development",
      "React", "Node.js", "TypeScript", "AWS Cloud Infrastructure",
      "Laravel", "Docker", "REST API Development", "System Architecture",
      "Performance Optimization", "Mobile App Development", "Retail Inventory Systems"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://algermakiputin.com#website",
    "url": "https://algermakiputin.com",
    "name": "Alger Makiputin | Full Stack Developer",
    "description": "Full Stack Developer helping startups and businesses build scalable MVPs, web apps, and production-ready systems.",
    "inLanguage": "en-US",
    "author": { "@id": "https://algermakiputin.com#person" }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://algermakiputin.com#service",
    "name": "Alger Makiputin — Full Stack Development Services",
    "url": "https://algermakiputin.com",
    "description": "Custom web apps, SaaS platforms, mobile apps, and e-commerce solutions for startups and businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Davao City",
      "addressRegion": "Davao del Sur",
      "addressCountry": "PH"
    },
    "areaServed": [
      { "@type": "City", "name": "Davao City", "@id": "https://www.wikidata.org/wiki/Q1405285" },
      { "@type": "Country", "name": "Philippines" }
    ],
    "employee": { "@id": "https://algermakiputin.com#person" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Carlos R." },
        "reviewBody": "The system exceeded our expectations — fast, reliable, exactly what we needed."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Ian A." },
        "reviewBody": "Streamlined our operations and noticeably increased efficiency."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Arnel S." },
        "reviewBody": "Delivered on time, exactly as promised. Highly recommended."
      }
    ]
  }
]
```

In `src/app/page.tsx`, render as:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

---

## Priority Order

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | Redeploy build to restore 4 missing-schema pages | Trivial | Critical |
| 2 | Replace homepage with 3-entity graph (Person + WebSite + ProfessionalService + AggregateRating) | Low | High |
| 3 | Standardize jobTitle to "Full Stack Developer" | Low | Medium |
| 4 | Fix trailing slashes in Blog and Contact schema | Trivial | Medium |
| 5 | Fix Offer.price on service pages | Low | Medium |
| 6 | Add BreadcrumbList to service/regional pages | Low | Medium |
| 7 | Fix areaServed "Worldwide" type | Trivial | Low |
| 8 | Add FAQPage to local service pages (AI only, no SERP feature since May 2026) | Medium | Low |
