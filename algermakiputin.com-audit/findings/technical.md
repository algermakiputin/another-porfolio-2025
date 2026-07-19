# Technical SEO Findings — algermakiputin.com
**Audited:** 2026-07-11 | **Score: 62/100**

---

## HIGH: Duplicate Brand Suffix in Title Tags (5 Pages)

Template concatenation bug produces `| Alger Makiputin | Alger Makiputin` on all service/regional pages.

| URL | Current Title | Chars |
|-----|--------------|-------|
| /web-development-services/ | Web Development Services \| Alger Makiputin \| Alger Makiputin | 60 |
| /mobile-app-development/ | Custom Mobile App Development (iOS & Android) \| Alger Makiputin \| Alger Makiputin | 81 |
| /ecommerce-development/ | Custom E-commerce Development for Businesses \| Alger Makiputin \| Alger Makiputin | 80 |
| /hire-web-developer-philippines/ | Hire a Senior Web Developer in the Philippines \| Alger Makiputin \| Alger Makiputin | 82 |
| /web-developer-davao/ | Senior Web Developer in Davao City \| Alger Makiputin \| Alger Makiputin | 70 |

**Fix:** In `layout.tsx`, the `title.template` is appending the brand name on top of page-level titles that already include it. Remove the brand suffix from individual page `metadata.title` fields, or change the template to only apply to pages without a brand suffix.

---

## HIGH: Zero HTTP Security Headers

No security headers present on any response despite Cloudflare CDN usage.

| Header | Status |
|--------|--------|
| Strict-Transport-Security | MISSING |
| X-Content-Type-Options | MISSING |
| X-Frame-Options | MISSING |
| Content-Security-Policy | MISSING |
| Referrer-Policy | MISSING |
| Permissions-Policy | MISSING |

**Fix:** Add to Cloudflare `_headers` file (if using Cloudflare Pages) or via Transform Rules:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## HIGH: 13–15 Render-Blocking Scripts in `<head>` on Every Page

All pages have 13–15 synchronous `<script src="...">` tags in `<head>` with no `defer` or `async`. Direct LCP/FCP contributor.

**Fix:** Add `defer` to all non-critical scripts. In Next.js, use `next/script` with `strategy="lazyOnload"` or `strategy="afterInteractive"` for analytics and third-party tags.

---

## HIGH: Blog Page Returns No Article Links

`/blog/` renders with `<h1>From My Blog</h1>` and zero crawlable article links. Blog schema `@id` is an empty string.

**Impact:** Blog articles are orphaned — Googlebot cannot discover them from the blog index.

**Fix:** Confirm whether posts are loaded via client-side fetch (Medium RSS). Convert to SSR/SSG listing, or ensure articles are added individually to sitemap.

---

## MEDIUM: Title Tags Over 60 Characters (Post-Fix)

After removing the duplicate suffix, three titles still exceed 60 chars:
- mobile-app: 65 chars → `Mobile App Development (iOS & Android) | Alger Makiputin`
- ecommerce: 64 chars → `E-commerce Development Services | Alger Makiputin`
- hire-ph: 66 chars → `Hire a Web Developer in the Philippines | Alger Makiputin`

---

## MEDIUM: Blog Title Under-Optimized

`Blog | Alger Makiputin` (22 chars) — zero keyword value.

**Fix:** `Full Stack Development Blog | Alger Makiputin` (46 chars).

---

## MEDIUM: Sitemap `<lastmod>` Bulk-Stamped

All 19 sitemap URLs share the identical timestamp `2026-07-02T18:38:07.243Z`. Google ignores bulk-generated lastmod values.

**Fix:** Generate `lastmod` from actual file `Last-Modified` response headers in `next-sitemap.config.js`.

---

## MEDIUM: Person Schema `@id` Missing on Homepage; Blog Schema `@id` Empty String

- Homepage Person: no `@id` → prevents Knowledge Graph entity anchoring
- Blog schema: `@id: ""` → invalid

**Fix:** Add `"@id": "https://algermakiputin.com#person"` to homepage Person. Add `"@id": "https://algermakiputin.com/blog#blog"` to Blog schema.

---

## MEDIUM: No BreadcrumbList on Any Page

**Fix:** Add to all service/regional pages. See schema findings for exact JSON-LD.

---

## MEDIUM: Blog Listing Images Missing width/height (CLS Risk)

9 of 11 images on /blog/ have no `width`/`height` attributes → CLS contributor.

**Fix:** Use Next.js `<Image>` component which enforces dimensions automatically.

---

## LOW: Email Obfuscated by Cloudflare on All Pages

`/cdn-cgi/l/email-protection` replaces `mailto:` links. Schema `email` property also absent.

---

## LOW: No IndexNow Protocol

No Bing/Yandex ping API implementation.

---

## Confirmed Passes

| Check | Result |
|-------|--------|
| HTTPS (HTTP → 301 → HTTPS) | ✅ Pass |
| www → non-www 301 redirect | ✅ Pass |
| Trailing slash consistency | ✅ Pass |
| All 19 sitemap URLs return 200 | ✅ Pass |
| meta robots: index, follow on all pages | ✅ Pass |
| Self-referencing canonicals | ✅ Pass |
| Exactly 1 H1 per page | ✅ Pass |
| Viewport meta tag | ✅ Pass |
| Image alt text (0 missing) | ✅ Pass |
| Open Graph tags present | ✅ Pass |
| Clean URL structure | ✅ Pass |
| No crawl traps | ✅ Pass |
| HTML lang="en" | ✅ Pass |
| Redirect chain depth ≤ 1 hop | ✅ Pass |
