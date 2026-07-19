# SEO Action Plan — algermakiputin.com
**Generated:** 2026-07-11 | **Health Score: 52/100**

---

## Phase 1: Critical Fixes (Week 1 — ~8 hours total)

These directly block ranking and indexation. Do these before anything else.

### 1.1 Request Indexing for Key Pages (30 min) ⚡ Zero code
Open Google Search Console → Sitemaps → submit sitemap.xml → then use URL Inspection tool to manually "Request Indexing" for these pages in order:
1. https://algermakiputin.com/web-developer-davao/
2. https://algermakiputin.com/hire-web-developer-philippines/
3. https://algermakiputin.com/web-development-services/
4. https://algermakiputin.com/mobile-app-development/
5. https://algermakiputin.com/ecommerce-development/

Also verify: view-source: each URL to confirm content is in the raw HTML (not JS-injected). If you see mostly empty `<body>` tags, SSR/SSG is not configured for those routes.

### 1.2 Fix Title Tag Duplicate Brand Suffix (1 hour)
**File:** `src/app/layout.tsx` (or equivalent metadata file)
The `title.template` is appending `| Alger Makiputin` on top of page-level titles that already include the brand name.

**Fix:** In your layout metadata, change from:
```ts
title: { template: "%s | Alger Makiputin", default: "Alger Makiputin | Full Stack Developer for Startups & MVPs" }
```
To: In each page's `metadata.title`, use just the descriptive part without the brand:
```ts
// src/app/web-development-services/page.tsx
export const metadata = { title: "Web Development Services" }
// → renders as: "Web Development Services | Alger Makiputin" ✅
```

Also trim titles that are still too long after the fix:
- `/mobile-app-development/` → `Mobile App Development (iOS & Android)`
- `/ecommerce-development/` → `E-commerce Development Services`
- `/hire-web-developer-philippines/` → `Hire a Web Developer in the Philippines`

### 1.3 Redeploy Build (10 min) ⚡ Zero code
4 pages (hire-ph, website-design-davao, small-business-web-design, mobile-app-developer-davao) have valid compiled schema in `out/` that isn't being served. Trigger a fresh production deploy.

### 1.4 Add HTTP Security Headers to Cloudflare (30 min)
If using Cloudflare Pages, create or update `public/_headers`:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```
If using Cloudflare Workers/Transform Rules, add via the dashboard under Rules → Transform Rules → Modify Response Header.

### 1.5 Remove Crypto/Off-Topic Posts from Blog Index (30 min)
Filter the Medium RSS/API feed to only display posts tagged with web development, software engineering, or programming. The crypto airdrop post is a QRG trust liability.

If the feed is fetched in a component, add a category/tag filter. If it uses a static list, manually remove off-topic entries.

### 1.6 Create /about/ Page (2 hours)
Route: `src/app/about/page.tsx`

Required content:
- Professional bio paragraph (150+ words, first person)
- Career timeline or notable employers/milestones
- Industry specialization explanation (retail POS, e-commerce, banking)
- Photo with caption
- Technical philosophy (brief — the "Most applications work until they need to scale" angle works)
- GitHub, LinkedIn, YouTube links in body (not just footer)
- Link to /projects/ or case studies

### 1.7 Create /projects/ or /case-studies/ Page (2 hours)
Route: `src/app/projects/page.tsx` (or `/case-studies/`)

Minimum viable content: 3 case studies with:
- Project name and client industry
- Problem being solved
- Technical approach (stack, architecture decision)
- Measurable outcome (the 50+ store retail chain with 99.9% uptime is a perfect start)
- Screenshot or diagram (optional but strongly recommended)

---

## Phase 2: High-Impact Improvements (Weeks 2–3 — ~12 hours total)

### 2.1 Replace Homepage Schema with 3-Entity Graph (2 hours)
**File:** `src/app/page.tsx`

Replace current single `Person` JSON-LD with the array from [findings/schema.md](findings/schema.md) containing:
- `Person` (with @id, address added)
- `WebSite`
- `ProfessionalService` with `AggregateRating` and `review` array

This unlocks: Knowledge Panel anchoring, potential star ratings in SERPs, local pack eligibility.

### 2.2 Standardize jobTitle Across All Pages (30 min)
Search all `page.tsx` files for `jobTitle` in schema. Change to `"Full Stack Developer"` uniformly.

4 current values: "Full Stack Developer", "Senior Full Stack Developer", "Senior Full Stack Web Developer", "Full Stack Engineer"

### 2.3 Create /llms.txt (1 hour)
**File:** `public/llms.txt`

Use this template (paste verbatim, update if contact/stats change):
```
# Alger Makiputin — Full Stack Developer

Alger Makiputin is a senior full-stack web developer based in Davao City,
Philippines, with over 8 years of professional experience building
production-grade software systems. He specializes in scalable web
applications, mobile apps, and business automation using React, Next.js,
Node.js, TypeScript, Laravel, and AWS. He has delivered more than 40
projects for over 25 clients across the retail, e-commerce, and banking
industries in the Philippines and internationally. His work includes
point-of-sale systems deployed in multi-branch grocery and retail
operations, high-converting e-commerce storefronts with Stripe and
PayPal integration, and secure financial systems with role-based access
control. Clients report an average of 40% performance improvement after
his engagements. He is available for freelance contracts and full-time
engagements, with on-site availability in Davao City and remote work
for global clients.

## Services
- Web application development (React, Next.js, Node.js)
- Mobile app development (React Native, iOS & Android)
- E-commerce development (Stripe, PayPal, product catalog, fulfillment)
- Cloud deployment and DevOps (AWS, Google Cloud, Docker, CI/CD)
- AI workflow automation
- SEO and analytics integration

## Contact
- Website: https://algermakiputin.com
- LinkedIn: https://ph.linkedin.com/in/alger-makiputin
- GitHub: https://github.com/algermakiputin
- YouTube: https://www.youtube.com/c/AlgerMakiputin
- Based in: Davao City, Philippines
```

### 2.4 Add Homepage Bio Paragraph (1 hour)
After the hero section, before the statistics block, add a 150-word prose paragraph (not bullets):

> Alger Makiputin is a full-stack developer based in Davao City, Philippines. Over 8+ years he has built and shipped production systems for retail chains, e-commerce platforms, and banking institutions — from barcode-based inventory systems managing 50+ stores to secure financial dashboards with role-based access control. He works across the full technology stack: React and Next.js on the frontend, Node.js and Laravel on the backend, AWS and Google Cloud for deployment, and React Native for iOS and Android apps. His clients report an average 40% performance improvement and cite reliability as the defining characteristic of his work. He is available for freelance projects and full-time engagements, and offers on-site availability in Davao City alongside remote work for global clients.

### 2.5 Fix Render-Blocking Scripts (2 hours)
**Files:** Any component using `<Script>` or `<script>` tags

Convert all non-critical scripts to use `next/script` with `strategy="afterInteractive"` or `strategy="lazyOnload"`. Only the Next.js runtime bootstrap should remain in `<head>` as synchronous.

For the hero/profile image:
```tsx
// src/app/components/Hero.tsx or equivalent
import Image from 'next/image'
<Image src="/images/profile.webp" priority={true} ... />
```

### 2.6 Expand /web-development-services/ to 800+ Words (2 hours)
Current: 645 words. Needs: 800+ words.

Add these sections (all present on the Davao page but absent here):
- **Pricing** — "Projects typically start from $2,000 for smaller engagements..."
- **Process** — 4-step process block
- **FAQ** — 5 questions specific to web development services (not generic freelancer questions)
- **Named case study** — expand the "50+ store retail chain" reference to 3-4 sentences with outcomes

### 2.7 Add FAQPage Schema to Davao and Philippines Pages (1 hour)
Both pages have FAQ content — wrap it in JSON-LD. Example for /web-developer-davao/ is in [findings/schema.md](findings/schema.md).

Note: FAQPage stopped generating Google rich results on May 7, 2026. Still implement for AI citation (Perplexity, ChatGPT) and Bing Copilot visibility.

### 2.8 Fix Blog Title Tag (15 min)
Change `Blog | Alger Makiputin` to `Full Stack Development Blog | Alger Makiputin`.

### 2.9 Fix Sitemap lastmod Generation (1 hour)
In `next-sitemap.config.js`, generate `lastmod` from each page's actual last-modified date rather than a single timestamp. For static files, use `fs.statSync(filePath).mtime`.

---

## Phase 3: Content & Authority (Month 2 — ~20 hours total)

### 3.1 Claim Google Business Profile for Davao City (1 hour)
This is completely free and is the most impactful local trust signal missing from the site. Competitor Davao Web Consulting outranks for local queries in part because of GBP signals (address, phone, hours, reviews).

Steps: Google Business Profile → Add business → "Online services" + "Physical location" → Verify via postcard.

### 3.2 Create arc.dev Profile (2 hours)
arc.dev ranks #1–2 for both "hire web developer philippines" and "full stack developer philippines freelance." A profile with a link back to algermakiputin.com is the highest-ROI off-page action currently available.

### 3.3 Submit to TechBehemoths and Konigle (1 hour)
Both rank in the top 10 for "web development services davao" but do not list the site. Free listings:
- https://techbehemoths.com — submit as a freelancer/small agency
- https://konigle.com — business directory listing

### 3.4 Create /react-native-developer-philippines/ Page (3 hours)
New standalone page targeting "react native developer philippines freelance" — a keyword where the current mobile-app page buries the React Native angle in body copy.

Content requirements:
- H1: "React Native Developer in the Philippines — iOS & Android Apps"
- Explicit React Native credential section (apps built, stores published)
- Portfolio of React Native projects
- FAQ with React Native-specific questions
- Pricing and timeline section

### 3.5 Create Wikidata Person Entity (15 min)
Create at https://www.wikidata.org/wiki/Special:NewItem:
- P31 (instance of): Q5 (human)
- P106 (occupation): Q82594 (computer programmer) or Q48429 (software developer)
- P27 (country of citizenship): Q928 (Philippines)
- P937 (work location): Q1405285 (Davao City)
- P856 (official website): https://algermakiputin.com

### 3.6 Add Privacy Policy Page (1 hour)
Route: `src/app/privacy-policy/page.tsx`
Add link to footer. Minimum required for QRG compliance on any page with contact forms.

### 3.7 Add BreadcrumbList to All Service Pages (1 hour)
See [findings/schema.md](findings/schema.md) for JSON-LD. Add to: /web-development-services/, /mobile-app-development/, /ecommerce-development/, /web-developer-davao/, /hire-web-developer-philippines/.

### 3.8 Consolidate GitHub Pages Portfolio Authority (1 hour)
algermakiputin.github.io/portfolio/ still appears in branded search results and may be receiving natural backlinks. Add a prominent redirect or "My new portfolio is at algermakiputin.com" banner to that page to funnel any link equity to the main domain.

### 3.9 Publish 4+ Technical Blog Posts on Site (8 hours)
The Medium blog feed is producing zero on-site SEO value. Either:
- Option A (preferred): Create on-site blog posts at algermakiputin.com/blog/[slug] — articles about React, Next.js, AWS, POS systems, or retail tech
- Option B: Continue Medium but filter feed to tech-only posts

Target topics with direct search demand:
- "how to build a POS system with React and Node.js"
- "react native vs flutter for Philippine startups"
- "deploying Next.js to AWS in 2026"
- "barcode scanning in React Native"

---

## Phase 4: Monitoring & Iteration (Ongoing)

### 4.1 Set Up Google Search Console (if not already)
- Verify property at https://search.google.com/search-console
- Submit sitemap
- Monitor Coverage report for new indexation issues
- Set up Core Web Vitals alerts

### 4.2 Add IndexNow for Bing (30 min)
Generate key at https://www.bing.com/indexnow → place verification file at `/[key].txt` → ping API on every deploy.

### 4.3 Monthly Content Updates
- Add `dateModified` to schema on service pages when updated
- Track /web-developer-davao/ and /web-development-services/ positions monthly for target keywords
- Update stats (8+ years → 9+ years, 40+ projects, etc.) as they change

---

## ROI Priority Matrix

| Action | Effort | Impact | Do First? |
|--------|--------|--------|-----------|
| Request indexing in GSC | 30 min | Critical | ✅ Yes |
| Fix title tag template | 1 hour | High | ✅ Yes |
| Redeploy build | 10 min | High | ✅ Yes |
| Add security headers | 30 min | High | ✅ Yes |
| Filter blog feed | 30 min | High (trust) | ✅ Yes |
| Create /about/ page | 2 hours | High | ✅ Yes |
| Create /projects/ page | 2 hours | High | ✅ Yes |
| Replace homepage schema | 2 hours | High | ✅ Yes |
| Create llms.txt | 1 hour | High (AI) | ✅ Yes |
| Fix render-blocking scripts | 2 hours | High (perf) | Week 2 |
| Expand services page content | 2 hours | Medium | Week 2 |
| Add FAQPage schema | 1 hour | Medium | Week 2 |
| Claim Google Business Profile | 1 hour | High (local) | Week 2 |
| Create arc.dev profile | 2 hours | High (links) | Month 2 |
| Create React Native page | 3 hours | Medium | Month 2 |
| TechBehemoths/Konigle | 1 hour | Medium | Month 2 |
| Publish 4 tech blog posts | 8 hours | Medium | Month 2 |
