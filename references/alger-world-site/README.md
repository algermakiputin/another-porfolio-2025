# ALGER WORLD — Polished Homepage Prototype

An original 16-bit-platformer-inspired developer portfolio for Alger Makiputin. This is a **complete, responsive, static homepage implementation** (HTML, CSS, JavaScript, original SVG art) with no frameworks, CDN, build steps, or external dependencies. Use it as the new homepage or port the components into your preferred React/Next.js stack.

## Preview

From the directory, run:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080 . You can also open `index.html` directly in a modern browser, but a local server is recommended.

## Included

- Original hero pixel avatar, clouds, coins, visual terrain, keyboard movement / jump and discovery block.
- Fully interactive original 2D overworld with 8 selectable destinations, previews and links.
- Four featured projects and seven archived projects, sourced from existing algermakiputin.com content.
- About, skills, engineering challenges, experience, articles and contact sections.
- Mobile navigation, horizontal-scroll map, keyboard focus states, skip link, reduced-motion support and semantic HTML.
- SEO description, canonical URL, JSON-LD, Open Graph text metadata and custom favicon.
- Zero third-party script, font or image dependencies.

## Before replacing the live homepage

1. **Update project visuals**: the featured-project artwork is intentionally *illustrative concept art*, not actual application screenshots. Replace or complement it with optimized real screenshots for maximum authenticity and conversion.
2. **Add your résumé**: the live site does not expose a confirmed downloadable résumé link. Add a PDF route in your hosting setup and include a header CTA when ready.
3. **Review the Zendtri case study**: its current detail URL does not show an up-to-date article. Zendtri currently links to your working portfolio archive page. Add the new case-study route once published.
4. **Review the Lunara Bay detail**: its existing project URL returned 404 during verification. The archive card links to the working archive instead.
5. **Check claims before launch**: 2,500+ Hunter Vault users, 11 builds and 50,000+ Filipino Alamat downloads are transcribed from the public portfolio as of November 5, 2026. Update figures as products grow.
6. **Add real analytics / contact channel** when you integrate the page into your deployment, without inserting unverified tracking snippets or email addresses.
7. **Integrate existing blog and case-study routes**: this project covers the *homepage and overworld*, not rewrites of every existing portfolio route. All currently working project links open the existing algermakiputin.com pages.
8. **Set canonical and open-graph URLs** if deployed on another host. Add a preview graphic (`og:image`) once you choose final artwork.

## Content and navigation

The map destinations link to matching homepage sections. Case studies and articles link to the existing site to preserve current content URLs. All game controls are optional, and the most important content remains accessible via normal links.

## Assets & IP

All pixel world art and the Alger character in `assets/` were created uniquely for this prototype. They are not Nintendo artwork. No official Mario characters, tiles, sprites, sounds or music are included.
