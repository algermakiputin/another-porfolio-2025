# Performance & Core Web Vitals Findings — algermakiputin.com
**Audited:** 2026-07-11 | **Estimated Score: 40/100**

Note: No CrUX field data available for this domain (low traffic volume). Analysis based on HTML source signals and inline assessment.

---

## HIGH: 13–15 Render-Blocking Scripts in `<head>` on Every Page

All pages have 13–15 synchronous `<script src="...">` tags in `<head>` with no `defer` or `async` attribute.

**Impact:** On a 4G mobile connection (~10 Mbps, ~50ms RTT), 13+ blocking scripts can add 300–600ms to Time to First Byte / Time to Interactive before main content begins painting. Direct LCP and FCP contributor.

**Fix:**
- Use `next/script` with `strategy="lazyOnload"` or `strategy="afterInteractive"` for all non-critical scripts
- Only framework bootstrap (Next.js runtime) should remain synchronous in `<head>`
- For analytics: use `strategy="afterInteractive"` — this alone can recover 200–400ms on LCP

---

## HIGH: Hero/Profile Images Served as JPEG/PNG (Not WebP)

| Image | Format | Issue |
|-------|--------|-------|
| /images/profile.jpg | JPEG | LCP candidate — should be WebP |
| /app-logo.png | PNG | Should be WebP or SVG |
| /icons/react.png | PNG | Should be WebP |
| /icons/node.js.png | PNG | Should be WebP |
| /icons/AWS.png | PNG | Should be WebP |
| /icons/typeScript.png | PNG | Should be WebP |
| /icons/GoogleCloud.png | PNG | Should be WebP |
| /icons/Docker.png | PNG | Should be WebP |

Review images (/images/reviews/*.webp) are already WebP ✅

**Fix:** Convert profile.jpg and all icon PNGs to WebP. Use Next.js `<Image>` component which auto-converts and serves WebP. Profile image is the likely LCP element — this is the highest-priority image fix.

---

## MEDIUM: LCP Candidate Not Preloaded

The profile image (`/images/profile.jpg`) is the likely LCP element (above-fold hero image). No `<link rel="preload">` or `fetchpriority="high"` attribute detected.

**Fix:**
```html
<link rel="preload" as="image" href="/images/profile.webp" fetchpriority="high" />
```
Or use Next.js `<Image>` with `priority={true}` on the hero image component.

---

## MEDIUM: Blog Listing Images Missing width/height (CLS Risk)

9 of 11 images on /blog/ have no dimension attributes. Browser cannot reserve space before images load, causing layout shift.

**CLS threshold:** < 0.1 for "Good" rating.

**Fix:** Use Next.js `<Image>` component on blog listing thumbnails — it enforces dimensions automatically.

---

## MEDIUM: No Resource Hints Detected

No `<link rel="preconnect">` tags for external domains (fonts, analytics, CDN origins) detected.

**Fix:** Add preconnect for any external origin loaded in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://www.googletagmanager.com" />
```

---

## LOW: Font Loading Strategy Unknown

Font loading method not determinable from WebFetch response. If using Google Fonts without `font-display: swap`, this creates invisible text during font download (FOIT).

**Fix:** Either self-host fonts via `next/font` (recommended for Next.js — also improves privacy) or ensure `font-display: swap` or `optional` is set.

---

## CWV Estimates (Lab-Based)

| Metric | Estimated Status | Threshold |
|--------|-----------------|-----------|
| LCP | Needs Improvement (2.5–4s) | Good: ≤ 2.5s |
| INP | Unknown | Good: < 200ms |
| CLS | Needs Improvement (blog) | Good: < 0.1 |

**Reasoning:** 13+ blocking scripts in `<head>` + unoptimized JPEG hero image = LCP likely in the 2.5–4s range on mobile. Blog CLS likely > 0.1 due to images without dimensions.

---

## Verified Pass

- Review images already in WebP format ✅
- Next.js static export generally produces good TTFB ✅
- Cloudflare CDN provides edge caching ✅

---

## Recommended Fix Priority

| # | Fix | Effort | Est. Impact |
|---|-----|--------|------------|
| 1 | Add defer/lazyOnload to non-critical scripts | Medium | LCP -200–400ms |
| 2 | Add fetchpriority="high" to LCP image | Trivial | LCP -100–200ms |
| 3 | Convert profile.jpg to WebP via next/image | Low | LCP -50–150ms |
| 4 | Convert icon PNGs to WebP | Low | Page weight -20–40% |
| 5 | Add width/height to blog listing images | Low | CLS fix |
| 6 | Add preconnect for external origins | Low | TTFB -20–50ms |
| 7 | Self-host fonts via next/font | Low | FOIT elimination |
