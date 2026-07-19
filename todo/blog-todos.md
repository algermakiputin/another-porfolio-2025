# Blog Post Todos

Checklist of items to confirm, fill in, or update before each post is fully publish-ready.

---

## find-unnecessary-react-re-renders

- [x] Add real Profiler screenshots from Zendtri or Hunter Vault with before/after render timings into the `✍️` slot
- [x] Verify React 19.2.x performance tracks and React Compiler 1.0 stable claims before publishing
- [x] Replace service page `/#` with real URL

---

## react-context-vs-zustand-vs-server-state

- [x] Confirm whether Hunter Vault shared UI concerns (theme, privacy, haptics, session) use React Context or a small store
- [x] Confirm whether Hunter Vault uses TanStack Query for any remote-only requests
- [x] Confirm whether Zendtri fetches via TanStack Query or custom hooks + direct Supabase calls
- [ ] Replace service page `/#` and Hunter Vault case study URL with real URLs

---

## offline-first-react-dexie-indexeddb

- [x] Replace representative Dexie schema with the real tables, indexes and version numbers from the repo
- [x] Confirm `useLiveQuery` is wrapped in feature hooks (not called directly in components)
- [x] Confirm real sync mechanics: conflict resolution, identifier strategy and tombstone approach (for the planned sync deep-dive)
- [ ] Replace service page `/#` and Hunter Vault case study URL with real URLs

---

## react-web-app-to-ios-android-capacitor

- [x] Add 2–3 real Hunter Vault gotchas into the rough edges section (keyboard, back button, safe areas, low-end Android, etc.)
- [x] Confirm Hunter Vault's bundler is Vite
- [ ] Replace service page `/#` and Hunter Vault case study URL with real URLs

---

## react-forms-validation-large-apps

- [x] Confirm whether Zendtri uses React Hook Form (currently framed as "I'd reach for" — verify from the repo)
- [x] Verify the actual schema library used (Zod is listed as representative — confirm)
- [x] Check React Compiler + form library compatibility at publish time
- [ ] Replace service page `/#` and Hunter Vault case study URL with real URLs

---

## react-testing-strategy

- [x] Confirm the test runner (Vitest or Jest) and e2e tool (Playwright or Cypress) and name them explicitly in the post
- [x] Swap the representative test examples for real Hunter Vault ones where possible
- [ ] Replace service page `/#` and Hunter Vault case study URL with real URLs

---

## Cross-cutting (applies to all blogs)

- [ ] Confirm final article paths — `/blog/` vs `/react/` — and update any internal links accordingly
- [ ] Get real URLs for the web app development service page and mobile app development service page; replace all `/#` placeholders
- [ ] Get real URLs for the Hunter Vault and Zendtri case study pages; replace all `/#` placeholders
