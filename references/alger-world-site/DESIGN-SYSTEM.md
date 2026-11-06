# Alger World — Visual and Interaction System

## Creative direction

A nostalgic 16-bit world interpreted as an original, modern professional brand. The site intentionally balances an adventurous landing sequence with clean reading zones for actual work and experience.

## Design tokens

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#193447` | Primary outlines and text |
| `--cream` | `#faf6ea` | Main page neutral |
| `--paper` | `#fffdf4` | Surface backgrounds |
| `--sky` | `#8ecbed` | Hero atmosphere |
| `--red` | `#ee6454` | Primary CTAs |
| `--gold` | `#f8c95c` | Progression, reward, selected map node |
| `--green` | `#5bab79` | Map, supporting accents |
| `--dark` | `#142e3d` | Projects and final castle areas |

### Typography

- Large display: strong condensed system-safe `Impact / Arial Black` fallback; use as little as necessary.
- Interface labels / world IDs: local monospace system stack, uppercase, letterspaced.
- Paragraphs: readable Trebuchet / Segoe UI system fallback; avoid pixel fonts for body copy.
- Minimum intended main body size: 14–16px desktop, 13–14px mobile.

### UI anatomy

- `game-btn`: 3px dark border, 5px hard shadow, short press-on-hover interaction. Variants: red, paper, cream, gold.
- `world-node`: 76px illustrated icon container, 2-line title label, number tag, strong selected state.
- `world-preview`: selected icon + exact section name + contextual paragraph + tags + action.
- `project-card`: illustrated cover, actual project synopsis, verified technology tags and case-study link.
- `archive-grid`: 7 additional documented builds, only expanded on request.

### Map coordinates

Original `overworld-land.svg` is 1200×670. Interactive nodes overlay the art using percentage anchors, so visual scaling remains consistent on desktop and tablet. Narrow mobile layouts allow a horizontally scrollable map at minimum width 850px.

### Interactive behavior

- World selection updates the adjacent preview and associated CTA (does not navigate automatically).
- Scrolling or opening any destination is available without progression or unlocks.
- Avatar: focus or tap the stage, then left/right to move and space to jump; the on-screen Jump control also works. Keyboard arrow controls do not intercept ordinary page scrolling when the stage is unfocused.
- The mystery block reveals short achievement facts and respects reduced-motion preference for its jump effect.
- Mobile menu exposes the same primary links and closes after navigation or Escape.
- The archived projects are collapsed until explicitly opened.

### Accessibility and performance

- Semantic sections, descriptive headings, real anchor links, pressed states for map nodes, live-region preview updates, accessible labels, skip link and visible focus states.
- Honors `prefers-reduced-motion`.
- All SVG art is local. No remote fonts or JS libraries. No tracking scripts.
- A11y and cross-browser verification should be rerun in the eventual deployment stack.

### Next production integration

This is a fully implemented *homepage frontend*, but replacing the entire domain also requires connecting the existing project/blog routing and ensuring correct server responses, redirect rules, analytics, real media and a downloadable résumé. It deliberately links to the current live articles rather than pretending they have been recreated.
