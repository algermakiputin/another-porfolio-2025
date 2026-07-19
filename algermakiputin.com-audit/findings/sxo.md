# SXO & Search Experience Findings — algermakiputin.com
**Audited:** 2026-07-11 | **SXO Score: 39/100**

---

## CRITICAL: Indexation Crisis — Only 3 of 23 Sitemap Pages in Google's Index

`site:algermakiputin.com` returns only 3 pages:
1. `algermakiputin.com/` (homepage)
2. `algermakiputin.com/website-design-davao-city/`
3. `algermakiputin.com/small-business-web-design-philippines/`

**Key service pages NOT indexed:**

| Page | Target Keyword |
|------|---------------|
| /web-developer-davao/ | "web developer davao city" |
| /hire-web-developer-philippines/ | "hire web developer philippines" |
| /web-development-services/ | "web development services" |
| /mobile-app-development/ | "react native developer philippines" |
| /ecommerce-development/ | e-commerce queries |

**Probable causes:**
1. SPA rendering gap — if SSR/SSG is not configured for some pages, Googlebot receives a JS shell
2. Internal link equity not flowing to service pages in server-rendered HTML
3. Low crawl budget allocation for a new/low-authority domain
4. Possible JS-level noindex injection not visible in robots.txt

**Immediate action:** Open Google Search Console → submit sitemap → use "Request Indexing" for the 5 most important service pages. Check view-source: of /web-developer-davao/ to confirm content is in raw HTML.

---

## SERP Analysis — 5 Target Keywords

### "web developer davao city"
- **SERP:** 40% job boards, 50% local agency homepages/service pages
- **Dominant page type:** Local agency service pages
- **algermakiputin.com present?** No
- **Intent match for /web-developer-davao/:** ALIGNED — content, local signals, PHP pricing all correct
- **Blocker:** Non-indexation only. Once indexed, this page is competitive.
- **Intent match score:** 3/10 (homepage only indexed page, wrong page type for this query)

### "hire web developer philippines"
- **SERP:** 90% marketplace/talent platforms (Upwork, arc.dev, Freelancer, virtualstaff.ph)
- **Dominant page type:** Category listing pages on major platforms
- **Intent match:** HIGH MISMATCH — individual portfolio site cannot win against Upwork/arc.dev on this query
- **Strategy:** Build profile on arc.dev (ranks #1-2) and link back to personal site. Target long-tail variant: "hire senior full stack developer philippines direct"
- **Intent match score:** 2/10

### "full stack developer philippines freelance"
- **SERP:** 90% talent platforms. One individual profile (ithire.com) appears — signals individual pages CAN appear
- **Key insight:** Building profile on ithire.com and arc.dev generates both authority signals and referral traffic
- **Intent match score:** 2/10

### "react native developer philippines freelance"
- **SERP:** 95% talent platform skill-filtered pages
- **Critical gap:** No dedicated React Native page exists. Mobile app page buries React Native in body copy
- **Fix:** Create `/react-native-developer-philippines/` standalone page
- **Intent match score:** 0/10 (no indexed page, no dedicated page)

### "web development services davao"
- **SERP:** 50% local agency service pages, 30% business directory roundup articles
- **Key competitor signal:** Davao Web Consulting has physical address, phone number, Google Business Profile — these are significant local trust signals
- **/web-development-services/ intent:** ALIGNED — but not indexed, plus has duplicate title bug
- **Intent match score:** 3/10

---

## Persona Scoring (Weakest First)

| Persona | Score | Primary Fix Needed |
|---------|-------|-------------------|
| App Startup Founder (React Native) | 38/100 | Create /react-native-developer-philippines/ + app portfolio |
| International SME (AU/SG/US) | 46/100 | Index hire-ph page + add USD rates + international testimonial |
| PH Agency Reseller | 46/100 | Add white-label/agency partnership section |
| Davao SME Owner | 63/100 | Index Davao page + add phone + claim Google Business Profile |
| Tech-Savvy Startup Founder | 67/100 | Replace "Chat with AI" CTA with "Book a Discovery Call" |

---

## Strategic Keyword Recommendations

**Tier 1 — Fix first (indexation unlocks immediately):**
1. Get /web-developer-davao/ indexed
2. Get /hire-web-developer-philippines/ indexed
3. Get /mobile-app-development/ indexed
4. Fix title duplication bug on /web-development-services/

**Tier 2 — Create missing pages:**
5. Create `/react-native-developer-philippines/` — dedicated page for highest-potential mobile keyword
6. Create `/full-stack-developer-philippines/` — international hire landing page distinct from Davao pages

**Tier 3 — Off-page authority (needed for national/global keywords):**
7. Submit to TechBehemoths Davao listing (ranks #9 for "web development services davao")
8. Submit to Konigle Davao directory (ranks #5 for same query)
9. Create arc.dev profile (ranks #1-2 for hire/freelance Philippines queries)
10. Claim Google Business Profile for Davao City (free, highest-impact local trust signal)
11. Consolidate old GitHub Pages portfolio — algermakiputin.github.io/portfolio/ still appears in branded search and dilutes authority

---

## Homepage Positioning Assessment

**Current:** Portfolio page targeting technical credibility + startup founders.
**Problem:** "High-performance systems that stay fast and reliable at scale" speaks to existing prospects, not cold-search local users. Davao business owners searching "web developer davao city" need: explicit local signals, visible pricing, business contact information, Google Business Profile trust.

**The correct architecture:** Homepage stays as personal brand/portfolio. Dedicated service/location pages absorb transactional traffic. The problem is those pages aren't indexed.

---

## SXO Dimension Scores

| Dimension | Score | Max | Evidence |
|-----------|-------|-----|---------|
| Page Type | 6 | 15 | Right page types exist but unindexed; homepage mismatched to transactional queries |
| Content Depth | 10 | 15 | Service pages 1,200–2,100 words with FAQ, process, service lists |
| UX Signals | 10 | 15 | Clear CTAs, metrics, testimonials; "Chat with AI" CTA creates friction |
| Schema | 0 | 15 | Zero structured data detectable for SXO-relevant types |
| Media | 7 | 15 | Portfolio projects listed but /projects/ 404s |
| Authority | 6 | 15 | Low-authority domain; no directory citations; GitHub Pages diluting brand |
| Freshness | 0 | 10 | Blog not producing indexed on-site content |
| **Total** | **39/100** | | |
