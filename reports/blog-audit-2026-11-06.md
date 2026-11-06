# Blog Audit Report

**Audit Date:** 2026-11-06
**Total Posts:** 19
**Average Score:** 79/100
**Method:** deterministic metrics (frontmatter, headings, links, images, freshness) + spot-reads, scored on a house-adapted 100pt rubric (Content 30 / SEO 25 / E-E-A-T 15 / Technical 15 / AI Citation 15). Raw data: `reports/blog-audit-2026-11-06.json`.

## Health Overview

| Metric | Count |
|--------|-------|
| Posts Scoring 90+ (Excellent) | 3 |
| Posts Scoring 70-89 (Good) | 10 |
| Posts Scoring 50-69 (Needs Work) | 6 |
| Posts Scoring <50 (Poor) | 0 |
| Orphan Pages (0 inbound) | 8 |
| Dead-End Pages (0 outbound) | 7 |
| Broken internal targets | 0 |
| Missing image files | 0 (1 fixed during audit) |
| Images missing alt | 0 |
| Real cannibalization issues | 0 |
| Stale content (high priority) | 0 |

## Per-Post Scores

| Post | Score | Content | SEO | E-E-A-T | Technical | AI | Top issue |
|------|-------|---------|-----|---------|-----------|-----|-----------|
| react-application-architecture | 92 | 28 | 23 | 14 | 14 | 13 | readTime overstated (18 vs ~12) |
| offline-first-react-dexie-indexeddb | 91 | 27 | 23 | 14 | 14 | 13 | — |
| react-web-app-to-ios-android-capacitor | 90 | 27 | 23 | 13 | 14 | 13 | — |
| react-state-management | 88 | 26 | 23 | 13 | 14 | 12 | readTime overstated (12 vs ~7) |
| react-context-vs-zustand-vs-server-state | 87 | 26 | 22 | 13 | 14 | 12 | — |
| react-performance-problems | 86 | 25 | 22 | 13 | 14 | 12 | readTime overstated (13 vs ~6) |
| react-native-vs-capacitor | 86 | 26 | 22 | 13 | 13 | 12 | 0 inbound (new; relink pending) |
| react-testing-strategy | 85 | 25 | 22 | 12 | 14 | 12 | 1 inbound |
| react-folder-structure | 84 | 24 | 22 | 12 | 14 | 12 | 1 inbound; readTime 12 vs ~6 |
| react-forms-validation-large-apps | 84 | 24 | 22 | 12 | 14 | 12 | 1 inbound |
| find-unnecessary-react-re-renders | 84 | 24 | 22 | 12 | 14 | 12 | 1 inbound |
| apple-rejected-app-cant-find-in-app-purchases | 84 | 26 | 21 | 14 | 12 | 11 | orphan; no Quick summary; title 75ch |
| seo-new-website-30-day-results | 72 | 22 | 17 | 12 | 11 | 10 | dead-end; no QS/FAQ/CTA/Related |
| claude-computer-use-screen-reading-clicks | 65 | 20 | 15 | 9 | 10 | 11 | link island; placeholders; title 88ch |
| integrate-claude-vscode-terminal | 65 | 20 | 15 | 9 | 10 | 11 | link island; placeholders; title 90ch |
| claude-agent-persistent-memory | 63 | 20 | 15 | 9 | 10 | 9 | link island; placeholders; title 77ch |
| building-ai-agent-agentic-loops-claude | 63 | 20 | 15 | 9 | 10 | 9 | link island; placeholders; title 86ch |
| agentic-coding-claude-write-edit-execute | 62 | 19 | 15 | 9 | 10 | 9 | link island; placeholders; title 78ch |
| automate-git-workflows-claude | 61 | 19 | 15 | 9 | 10 | 9 | link island; placeholders; title 71ch |

## Prioritized Action Queue

| Priority | Post(s) | Issue | Recommended Action |
|----------|---------|-------|--------------------|
| P0 | 6 AI posts | 12 raw `[INTERNAL-LINK: …]` placeholders render live at the end of every AI post | Resolve each to a real `/blog/…/` link (mappings below) |
| P0 | react-native-vs-capacitor | ~~missing diagram + cover~~ | FIXED during audit (diagram + cover generated) |
| P1 | 6 AI posts | Link island: 0 inbound + 0 outbound; no Related/CTA/FAQ lines | Convert placeholders to Related lines, add house CTA + FAQ, cross-link cluster |
| P1 | seo-new-website-30-day-results | Dead-end; abrupt ending | Add Quick summary, Related line, 2–3 outbound links, CTA |
| P1 | apple-rejected-app-cant-find-in-app-purchases | Orphan; no Quick summary | Add Quick summary; link from capacitor post (store-review section) |
| P1 | 7 posts | Titles >70 chars (will truncate in SERPs) | Shorten AI titles + apple title (keep slugs) |
| P2 | 12+ posts | readTime systematically ~1.5–2.7× over word-count estimate | Recalibrate or drop `readTime` and use auto-estimate |
| P2 | react-native-vs-capacitor | 0 inbound | Relink from capacitor post (already planned in todo/blog-todos.md) |
| P2 | all posts | No `lastUpdated` convention; freshness untracked | Add `lastUpdated` to frontmatter on next edit |
| P2 | /blog filter | `Shipping` category has no filter button (not in TOPIC_ORDER) | Add to TOPIC_ORDER or recategorize apple post |

### Placeholder → URL mappings (P0)

- agentic loop basics/fundamentals → `/blog/building-ai-agent-agentic-loops-claude/`
- agentic coding (setup / in depth / autonomous) → `/blog/agentic-coding-claude-write-edit-execute/`
- git workflow automation → `/blog/automate-git-workflows-claude/`
- VS Code / terminal integration → `/blog/integrate-claude-vscode-terminal/`
- persistent memory for agents → `/blog/claude-agent-persistent-memory/`

## Topic Cannibalization

| Keyword overlap | Posts | Recommendation |
|---------|-------|----------------|
| app + capacitor + react | react-native-vs-capacitor, react-web-app-to-ios-android-capacitor | None — deliberate sequel; intents split (comparison vs guide) |
| app + choose + react | react-native-vs-capacitor, react-state-management | None — coincidental generic words; different intents |

No merges or redirects recommended. The state pair (state-management vs context-vs-zustand) is split by design (framework vs comparison).

## Orphan Pages (no inbound internal links)

| Page | Recommended link sources |
|------|--------------------------|
| 6 AI posts | Each other (via P0 placeholder fixes) + 1 hub/index link |
| apple-rejected-app-cant-find-in-app-purchases | capacitor post (store review), RN-vs-capacitor (app review costs) |
| react-native-vs-capacitor | capacitor post body ×2 + Related (planned); dexie post (offline) |

Note: orphans here means zero *post-body* inbound. All posts are reachable via /blog archive, sitemap, and (React posts) the /react hub.

## Stale Content

| Post | Published | Age | Priority | Notes |
|------|-----------|-----|----------|-------|
| All 19 | Jun–Nov 2026 | 0–145 days | Low | Evergreen tutorials; oldest is the Jun 14 SEO post (145d). No decaying stats found. AI/Claude posts (volatile topic) are 67 days old — recheck quarterly. |

No refreshes required. Gap: no `lastUpdated` field, so freshness can't be tracked going forward.

## Technical checks (passed)

- Sitemap covers all 19 posts; canonicals self-referencing with trailing slashes
- All post content server-rendered in static HTML (incl. /blog index after Nov 6 fix)
- BlogPosting JSON-LD valid; OG images 1200×630 on 19/19 (after P0 fix)
- robots.txt allows all; no noindex on posts
- SKIPPED: GSC/PageSpeed/field data — blog-google credentials unavailable
