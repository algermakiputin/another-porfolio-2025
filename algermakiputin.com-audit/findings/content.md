# Content Quality & E-E-A-T Findings — algermakiputin.com
**Audited:** 2026-07-11 | **Score: 56/100** | **E-E-A-T: 54/100** | **AI Citation Readiness: 46/100**

---

## E-E-A-T Breakdown

| Dimension | Score | Weight | Contribution |
|-----------|-------|--------|-------------|
| Experience | 58/100 | 20% | 11.6 pts |
| Expertise | 63/100 | 25% | 15.75 pts |
| Authoritativeness | 46/100 | 25% | 11.5 pts |
| Trustworthiness | 50/100 | 30% | 15.0 pts |
| **Total E-E-A-T** | **54/100** | | |

---

## CRITICAL: Crypto Airdrop Post in Blog Index — Active Trust Liability

The blog surfaces a post titled **"Don't Miss the Next Big DePIN Airdrop: How to Earn Free $3DOS Tokens Today!"** (April 2026). This promotional/affiliate-format content directly contradicts professional developer positioning and is the single highest-risk trust issue on the site. Google's QRG explicitly flags this content pattern.

**Fix:** Filter the Medium RSS feed to exclude finance/crypto/collectibles categories. Do not surface non-technical content on the portfolio domain blog index.

---

## CRITICAL: /about/ Page Returns 404

The "About" nav link points to a non-existent URL. This is the most important missing E-E-A-T page on the site — Google's QRG uses author credentials as an evaluation factor for YMYL-adjacent services like software development.

**Fix:** Create `/about/` with: professional bio, career timeline, notable clients/employers, photo with caption, technical philosophy, GitHub and LinkedIn links.

---

## CRITICAL: /projects/ Returns 404 — Portfolio Has No Destination

Every "View My Work" CTA links to a URL that 404s. The Experience dimension of E-E-A-T depends on demonstrable project evidence.

**Fix:** Build `/projects/` with at least 3 detailed case studies: project context, technical approach, measurable outcomes. The "50+ store retail chain" project mentioned on /web-development-services/ is a natural starting point.

---

## HIGH: FAQPage Schema Missing (FAQ Content Exists)

Both `/web-developer-davao/` and `/hire-web-developer-philippines/` have well-written FAQ sections but zero FAQPage structured data.

**Fix:** Add FAQPage JSON-LD to both pages. See schema findings for ready-to-use code.

---

## HIGH: /web-development-services/ Thin Content (645 words)

Below the 800-word minimum for a primary service page. Missing sections present on landing pages: no pricing, no FAQ, no step-by-step process. "Featured Work" is one unnamed project in 3 sentences.

**Fix:** Expand to 800+ words. Add pricing section, process section, FAQ section. Add at least one named, linked case study.

---

## HIGH: Blog Topical Scatter Undermines Domain Expertise

Blog description: "Insights on full stack development, system architecture, performance optimization."
Actual 2026 posts: pickleball paddles, One Piece collectible boxes, budgeting apps, crypto airdrops, RPG app promotion, one React/Capacitor post.

**Fix:** Filter feed to technical content only, or relabel blog section as "Personal Writing" and de-emphasize it in portfolio nav.

---

## MEDIUM: No Privacy Policy

No privacy policy or terms of service linked anywhere. Required for any page collecting contact/form data; also a QRG baseline trust requirement.

---

## MEDIUM: Testimonials Are Unverifiable

Carlos R., Ian A., Arnel S. — first name and last initial only, no company name, no business website, no LinkedIn reference.

**Fix:** Add at minimum: full client names (with permission), business names (not just "Grocery Store Owner"), ideally one LinkedIn/website link.

---

## MEDIUM: No Phone Number or WhatsApp

The Davao page promotes on-site availability but provides no phone number. Local clients expect a local contact method.

---

## Page-Level Scores

| Page | Score | Word Count | H1 | Primary Issue |
|------|-------|-----------|-----|---------------|
| Homepage | 68/100 | 842 ✅ | 1 ✅ | No resolved portfolio destination |
| /web-development-services/ | 52/100 | 645 ❌ | 1 ✅ | Thin content, no pricing/FAQ |
| /web-developer-davao/ | 72/100 | ~900 ✅ | 1 ✅ | Same testimonials as all pages, no FAQPage schema |
| /hire-web-developer-philippines/ | 63/100 | ~850 ✅ | 1 ✅ | Missing areaServed schema, same testimonials |
| /blog/ | 28/100 | Index only | 1 ✅ | Topical scatter, crypto post, no on-site depth |

---

## Duplicate Content Risk

- Testimonials block (Carlos R., Ian A., Arnel S.) appears verbatim on all non-blog pages — not a penalty risk due to self-referencing canonicals, but dilutes unique content ratio per page.
- Davao and Philippines pages share ~40% structural overlap — differentiated enough in substance to avoid near-duplicate penalty, but thin on unique evidence.
- No cross-page canonical issues found.
