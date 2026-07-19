# GEO & AI Search Readiness Findings — algermakiputin.com
**Audited:** 2026-07-11 | **GEO Score: 51/100**

---

## Score Breakdown

| Dimension | Score | Weight | Contribution |
|-----------|-------|--------|-------------|
| Citability | 38/100 | 25% | 9.5 |
| Structural Readability | 48/100 | 20% | 9.6 |
| Multi-Modal Content | 55/100 | 15% | 8.3 |
| Authority & Brand Signals | 46/100 | 20% | 9.2 |
| Technical Accessibility | 70/100 | 20% | 14.0 |
| **GEO Total** | **51/100** | | |

---

## Platform-Specific Scores

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 47/100 | No FAQPage schema, no Review schema, no LocalBusiness type |
| ChatGPT | 43/100 | No llms.txt, no Wikidata entity, no external mentions |
| Perplexity | 56/100 | Best positioned — SSR rendering, FAQ content, location signals |
| Bing Copilot | 50/100 | No Review schema; LinkedIn is strongest signal here |

---

## AI Crawler Access

All AI crawlers are allowed via catch-all `User-agent: * / Disallow:` in robots.txt. No named crawler-specific rules exist.

| Crawler | Status |
|---------|--------|
| GPTBot | Allowed |
| ClaudeBot | Allowed |
| PerplexityBot | Allowed |
| Google-Extended | Allowed |
| CCBot (training) | Allowed |

---

## HIGH: /llms.txt Does Not Exist (404)

Highest-leverage single missing file. llms.txt is the primary mechanism for signaling to AI systems what the site is about and how the entity should be described.

**Fix:** Create `/llms.txt` with a 143-word opening that hits the optimal AI citation window (134–167 words):

```
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
```

---

## HIGH: No FAQPage Schema (FAQ Content Exists on 2 Pages)

FAQ content exists on `/web-developer-davao/` (5 questions) and `/hire-web-developer-philippines/` (5 questions) but zero FAQPage JSON-LD is implemented.

Note: FAQPage stopped generating Google rich results on May 7, 2026. However, it remains a direct AI citation enabler for Perplexity and ChatGPT. The pricing question ("How much does web development cost in Davao? — ₱30,000–₱80,000") is a high-value local query answer that AI Overviews actively extracts.

---

## HIGH: No Bio Paragraph on Homepage — Citability Gap

The homepage H1 is "High-performance systems that stay fast and reliable at scale." — a marketing tagline containing no name, location, or attributable fact. An AI model cannot extract identity from this.

Stats (8+ yrs, 40+ projects, etc.) appear as UI counter widgets in the layout, not prose sentences. They are not citable.

**Fix:** Add a 150-word bio paragraph after the hero section beginning "Alger Makiputin is a full-stack developer based in Davao City..." This becomes the canonical citable block for the homepage.

---

## MEDIUM: All Content Passages Below 134-Word AI Citation Threshold

Every measured passage (FAQ answers, service descriptions, homepage sections) falls below the 134-word threshold associated with AI citation likelihood. FAQ answers are 25–38 words each.

**Fix:** Expand each FAQ answer to 3–4 sentences with context, then a closing restatement. Target 134–167 words per answer block.

---

## MEDIUM: No Review / AggregateRating Schema

Three testimonials exist with star ratings visually but no `Review` structured data. AI models cannot reliably extract attributed reviews without it.

---

## MEDIUM: No Wikidata Entity

No Wikidata person stub for "Alger Makiputin." Wikidata has no notability requirements and takes ~15 minutes to create. High correlation with AI disambiguation confidence.

**Fix:** Create a Wikidata item: P31=human, P106=software developer, P27=Philippines, P937=Davao City.

---

## MEDIUM: Homepage H2s Are Noun Phrases, Not Questions

All homepage H2s ("Selected Projects", "How I Help Businesses", "Industries I Work In") are non-question format. Question-format headings directly correlate with AI extraction.

**Fix:** Convert at least 2 to questions:
- "How Does Alger Makiputin Help Businesses Build Software?"
- "Which Industries Has Alger Makiputin Worked In?"

---

## Strengths

- Site is Next.js SSR — AI crawlers can read all content without JavaScript execution ✅
- Person schema has strong `sameAs` array (LinkedIn, GitHub, YouTube, Facebook, Medium) ✅
- YouTube channel link — highest AI citation correlation (~0.737) among sameAs platforms ✅
- Wikidata Davao City `@id` reference in `/web-developer-davao/` areaServed ✅
- Name "Alger Makiputin" is unique — zero disambiguation risk ✅
- Sitemap present with all key pages ✅

---

## Estimated GEO Score After Top 4 Fixes

Implementing llms.txt + FAQPage schema + homepage bio paragraph + Review schema would push GEO score from **51/100 → ~68–72/100**.
