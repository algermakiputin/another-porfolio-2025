# Full SEO Audit Report — algermakiputin.com
**Audit Date:** 2026-07-11
**Auditor:** Claude SEO Audit System
**Site Type:** Personal Portfolio / Freelance Developer
**Business Type:** Professional Services — Full Stack Developer (Davao City, Philippines + Global)

---

## Overall SEO Health Score: 52/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 62/100 | 13.6 |
| Content Quality | 23% | 56/100 | 12.9 |
| On-Page SEO | 20% | 48/100 | 9.6 |
| Schema / Structured Data | 10% | 42/100 | 4.2 |
| Performance (CWV) | 10% | 40/100 | 4.0 |
| AI Search Readiness | 10% | 51/100 | 5.1 |
| Images | 5% | 60/100 | 3.0 |
| **Overall** | | | **52/100** |

**Score context:** The site has a well-structured foundation — correct HTTPS setup, clean URLs, self-referencing canonicals, good schema for core pages, and server-side rendering that AI crawlers can process without JavaScript. The low overall score is driven by one overriding issue (non-indexation of key pages), one structural trust liability (crypto blog post), and a cluster of medium-effort fixes that together represent significant ranking opportunity.

---

## Executive Summary

### Top 5 Critical Issues

1. **Indexation crisis** — Only 3 of 23 sitemap pages are in Google's index. The most valuable service pages (/web-developer-davao/, /hire-web-developer-philippines/, /mobile-app-development/, /web-development-services/) are completely invisible to search engines. No amount of content quality matters if Google cannot find the pages.

2. **Stale deployment** — 4 pages have valid schema in the compiled `out/` directory that are not served live. A redeploy resolves this with zero code changes.

3. **Duplicate title tag bug** — All 5 service/regional pages render `| Alger Makiputin | Alger Makiputin` due to a Next.js metadata template concatenation error. Google rewrites these titles, losing keyword positioning.

4. **Crypto/airdrop blog post** — A post titled "Don't Miss the Next Big DePIN Airdrop: How to Earn Free $3DOS Tokens Today!" is surfaced in the blog index. This is the single highest-risk trust issue on the entire site per Google's Quality Rater Guidelines.

5. **Missing /about/ and /projects/ pages** — Both URLs 404. The "About" nav link and all "View My Work" CTAs lead to dead ends, destroying the E-E-A-T experience for prospective clients and search quality evaluators.

### Top 5 Quick Wins

1. **Fix title tag template** (1 hour) — Remove duplicate brand suffix from 5 pages. Zero content work, pure code fix.
2. **Redeploy build** (10 minutes) — Restores schema on 4 pages. No code changes needed.
3. **Add HTTP security headers to Cloudflare** (30 minutes) — Fixes all 6 missing security headers via `_headers` file.
4. **Add llms.txt** (2 hours) — The single highest-ROI AI visibility improvement available. Copy-paste the 143-word template from the GEO findings.
5. **Filter blog feed to remove crypto/off-topic posts** (30 minutes) — Eliminates the highest-risk trust signal on the site.

---

## Technical SEO — 62/100

### Findings by Severity

| Severity | Finding |
|----------|---------|
| High | Duplicate brand suffix in title tags on 5 pages |
| High | Zero HTTP security headers (no HSTS, CSP, X-Frame-Options, Referrer-Policy) |
| High | 13–15 render-blocking `<script>` tags in `<head>` on every page |
| High | Blog page returns no article links (orphaned content) |
| Medium | 3 titles exceed 60 chars even after suffix fix |
| Medium | Blog title: "Blog \| Alger Makiputin" — no keyword value |
| Medium | Sitemap lastmod bulk-stamped (all identical — Google ignores) |
| Medium | Homepage Person schema missing `@id` |
| Medium | No BreadcrumbList on any page |
| Medium | Blog listing images missing width/height (CLS risk) |
| Low | Email obfuscated by Cloudflare (schema email property also absent) |
| Low | No IndexNow protocol for Bing/Yandex |

### Confirmed Passes
HTTPS enforcement, www→non-www redirect, trailing slash consistency, all 19 sitemap URLs return 200, meta robots index/follow, self-referencing canonicals, 1 H1 per page, viewport meta, image alt text (0 missing), Open Graph tags, HTML lang="en", redirect chain depth ≤ 1 hop.

---

## Content Quality & E-E-A-T — 56/100

### E-E-A-T Scores
- Experience: 58/100
- Expertise: 63/100
- Authoritativeness: 46/100
- Trustworthiness: 50/100
- **Weighted E-E-A-T: 54/100**

### Findings by Severity

| Severity | Finding |
|----------|---------|
| Critical | Crypto/DePIN airdrop post surfaced in blog index — active QRG trust liability |
| Critical | /about/ page returns 404 — most important missing E-E-A-T page |
| Critical | /projects/ returns 404 — all "View My Work" CTAs lead to dead end |
| High | /web-development-services/ thin content (645 words, needs 800+; no pricing, FAQ, or case studies) |
| High | Blog topical scatter undermines domain expertise signals |
| High | FAQPage schema absent on 2 pages with FAQ sections |
| Medium | No privacy policy linked anywhere |
| Medium | Testimonials unverifiable (first name + initial only, no company/website) |
| Medium | No phone number or WhatsApp contact option |
| Low | No dateModified timestamps on service pages |
| Low | GitHub link buried in schema/footer only (not visible in page body) |

### Page Scores
| Page | Score | Issue |
|------|-------|-------|
| Homepage | 68/100 | Portfolio CTAs link to 404 |
| /web-developer-davao/ | 72/100 | Best page on site — only missing FAQPage schema |
| /hire-web-developer-philippines/ | 63/100 | Missing areaServed schema |
| /web-development-services/ | 52/100 | Thin content, no pricing/FAQ |
| /blog/ | 28/100 | Topical scatter, crypto post, no on-site depth |

---

## Schema & Structured Data — 42/100

### Existing Schema (Positive)
- Homepage: `Person` with name, jobTitle, description, sameAs (5 platforms), knowsAbout (15 items)
- Service pages: `Service` with provider linking back to Person
- /web-developer-davao/: `Person` with PostalAddress and Wikidata areaServed reference
- /blog/: `Blog` type
- /contact/: `ContactPage`
- /portfolio/: `CollectionPage + ItemList`

### Findings

| Severity | Finding |
|----------|---------|
| Critical | Stale deployment — 4 pages' schema compiled but not live (redeploy fixes it) |
| High | Missing `WebSite` schema |
| High | Missing `AggregateRating` (6 testimonials unused in structured data) |
| High | Missing `ProfessionalService` / `LocalBusiness` entity |
| Medium | Homepage Person missing `@id` and `address` |
| Medium | jobTitle inconsistent across 4 pages (4 different values) |
| Medium | No BreadcrumbList on any page |
| Medium | Blog schema `@id` is empty string |
| Low | Service page `Offer.price: "Contact for pricing"` with priceCurrency is invalid |
| Low | `areaServed: {"@type": "Place", "name": "Worldwide"}` — unresolvable entity |

### Ready-to-use JSON-LD
See [findings/schema.md](findings/schema.md) for the complete homepage 3-entity graph replacement (Person + WebSite + ProfessionalService with AggregateRating).

---

## Performance & Core Web Vitals — 40/100

No CrUX field data available (low traffic domain). Lab-based estimates:

| Metric | Estimated Status |
|--------|-----------------|
| LCP | Needs Improvement (~2.5–4s mobile) |
| INP | Unknown |
| CLS | Needs Improvement (blog page) |

### Findings

| Severity | Finding |
|----------|---------|
| High | 13–15 render-blocking scripts in `<head>` — 300–600ms LCP penalty |
| High | Hero/profile image served as JPEG (not WebP) — LCP candidate unoptimized |
| Medium | LCP image not preloaded (`fetchpriority="high"` absent) |
| Medium | Blog listing images missing width/height — CLS risk |
| Medium | No resource hints (`<link rel="preconnect">`) for external origins |
| Low | Font loading strategy not verified |

### Quick Wins
1. Add `fetchpriority="high"` to hero image (trivial, immediate LCP gain)
2. Use Next.js `<Image priority>` on profile image (converts to WebP automatically)
3. Move analytics scripts to `strategy="afterInteractive"` in next/script

---

## AI Search Readiness (GEO) — 51/100

### Platform Scores
| Platform | Score |
|----------|-------|
| Perplexity | 56/100 |
| Bing Copilot | 50/100 |
| Google AI Overviews | 47/100 |
| ChatGPT | 43/100 |

### Findings

| Severity | Finding |
|----------|---------|
| High | /llms.txt does not exist — highest-leverage single missing file |
| High | No FAQPage schema (FAQ content exists on 2 pages) |
| High | No bio paragraph on homepage — citability gap |
| Medium | All passages below 134-word AI citation threshold |
| Medium | No Review/AggregateRating schema |
| Medium | No Wikidata entity for "Alger Makiputin" |
| Medium | Homepage H2s are noun phrases, not question-format |

### Strengths
- Next.js SSR — AI crawlers read all content without JS ✅
- Strong sameAs array (LinkedIn, GitHub, YouTube, Facebook, Medium) ✅
- YouTube link = highest AI citation correlation (~0.737) ✅
- Name "Alger Makiputin" has zero disambiguation risk ✅

---

## SXO & Search Experience — 39/100

### Critical Finding: Indexation Crisis
Only 3/23 sitemap pages indexed. Every keyword target is blocked by non-indexation, not by content quality or intent mismatch.

### SERP Intent Analysis

| Keyword | SERP Dominant Type | Intent Match | Blocker |
|---------|-------------------|-------------|---------|
| web developer davao city | Local agency pages | ALIGNED | Non-indexation |
| hire web developer philippines | Marketplaces (Upwork, arc.dev) | HIGH MISMATCH | Marketplace dominance + non-indexation |
| full stack developer philippines freelance | Talent platforms | HIGH MISMATCH | No dedicated page + non-indexation |
| react native developer philippines freelance | Talent platforms | CRITICAL MISMATCH | No dedicated page at all |
| web development services davao | Local agency + directories | ALIGNED | Non-indexation + title bug |

### Key Competitor Gaps
- Davao Web Consulting: physical address, phone number, Google Business Profile — strongest local trust signals missing from algermakiputin.com
- TechBehemoths, Konigle: rank for Davao queries but don't list algermakiputin.com
- arc.dev: ranks #1-2 for Philippines hire queries — building a profile here is the highest-ROI off-page action

---

## Images — 60/100

| Check | Result |
|-------|--------|
| Alt text coverage | ✅ 0 images missing alt text |
| Format optimization | ❌ profile.jpg (JPEG), 6 icon PNGs not WebP |
| Review images | ✅ Already WebP |
| Blog listing dimensions | ❌ 9 of 11 images missing width/height |
| LCP image optimization | ❌ No preload, no priority attribute |

---

## Site Architecture Observations

**Positive:**
- Trailing slash URL consistency throughout
- Clean hierarchical URL structure (no parameters, no session IDs)
- Separate pages for local (Davao), national (Philippines), and global targeting — correct multi-tier approach
- Next.js static export provides strong performance baseline

**Negative:**
- /about/ and /projects/ are nav-linked but 404 — broken architecture for prospective clients
- Blog is an embedded Medium feed, not on-site content — zero topical authority contribution to the domain
- algermakiputin.github.io/portfolio/ still appears in branded searches — old portfolio dilutes brand authority consolidation
- No Google Business Profile — most impactful local trust signal completely absent
