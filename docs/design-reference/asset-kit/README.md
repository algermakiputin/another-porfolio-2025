# Alger Portfolio Assets — Faceless Direction

Production asset kit for the approved retro-tech editorial portfolio design. The illustration is intentionally symbolic and does not claim to be Alger's likeness.

## Files

### Character artwork

- `characters/faceless-workstation.png` — full-resolution transparent source.
- `characters/faceless-workstation.webp` — optimized transparent production asset.

### Hero panels

- `panels/system-architecture.svg`
- `panels/component-tree.svg`
- `panels/database.svg`
- `panels/status.svg`

These remain separate from the workstation so they can be repositioned or hidden at responsive breakpoints.

### About section

- `panels/about-system-map.svg` — Product, Frontend, Architecture and Mobile system diagram.

### Decorative system

- `motifs/compass-star.svg`
- `motifs/blueprint-grid.svg`
- `motifs/halftone-dots.svg`
- `motifs/accent-shards.svg`
- `textures/paper-grain.svg`
- `tokens.css`

### References

- `reference/approved-homepage-mockup.png` — approved visual target.
- `reference/hero-layer-composition.png` — verified 1440px layer-placement reference.
- `preview.html` — zero-build asset composition preview.

## Recommended desktop hero layering

From back to front:

1. `#09131F` background
2. repeating `blueprint-grid.svg`
3. `paper-grain.svg` using `mix-blend-mode: soft-light`
4. `accent-shards.svg` anchored to the right
5. `compass-star.svg` near the headline/workstation boundary
6. floating architecture panels
7. `faceless-workstation.webp`
8. real HTML navigation, headline, copy and buttons

Suggested 1440px positions:

```css
.hero-workstation {
  position: absolute;
  z-index: 5;
  right: -70px;
  bottom: 0;
  width: clamp(760px, 61vw, 980px);
}

.panel-system {
  top: 72px;
  right: 320px;
  width: 390px;
}

.panel-components {
  top: 74px;
  right: 30px;
  width: 310px;
}

.panel-database {
  top: 215px;
  right: 690px;
  width: 132px;
}

.panel-status {
  top: 410px;
  right: 720px;
  width: 140px;
}
```

At tablet widths, hide the database and status panels first. Below 768px, move the workstation into normal flow and show only one simplified architecture panel.

## Next.js usage

```tsx
<Image
  src="/portfolio/characters/faceless-workstation.webp"
  alt="Illustrated developer working at a software engineering workstation"
  width={1499}
  height={865}
  priority
/>
```

The floating panels and decorative SVGs should use empty alt text or `aria-hidden="true"`. The About system map may use its built-in accessible title and description when embedded inline.
