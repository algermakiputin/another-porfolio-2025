/**
 * AM Northmark — the single sitewide logo component.
 *
 * Surface mapping (choose the asset for the background, never a box behind it):
 *   dark  → am-northmark-primary.svg  (warm-cream mark, for deep-navy surfaces)
 *   light → am-northmark-dark.svg     (navy mark, for cream/white surfaces)
 *   monochrome → one-colour contexts only (print/external), not the normal site
 *   compact → favicon.svg compass marker, for extremely constrained space
 *
 * Server component. Uses a plain <img> with explicit intrinsic dimensions so the
 * SVG reserves space and never causes layout shift. When the parent already
 * carries the accessible name (e.g. an aria-labelled home link), pass
 * `decorative` so AT doesn't announce the name twice.
 */

const logoSources = {
  darkSurface: "/logo/am-northmark-primary.svg",
  lightSurface: "/logo/am-northmark-dark.svg",
  monochrome: "/logo/am-northmark-mono.svg",
  compact: "/logo/favicon.svg",
};

type BrandLogoProps = {
  surface?: "dark" | "light";
  monochrome?: boolean;
  compact?: boolean;
  className?: string;
  decorative?: boolean;
};

export default function BrandLogo({
  surface = "dark",
  monochrome = false,
  compact = false,
  className,
  decorative = false,
}: BrandLogoProps) {
  const src = compact
    ? logoSources.compact
    : monochrome
      ? logoSources.monochrome
      : surface === "light"
        ? logoSources.lightSurface
        : logoSources.darkSurface;

  // Intrinsic ratios: full monogram 196×96, compact marker 64×64.
  const [width, height] = compact ? [64, 64] : [196, 96];

  return (
    <img
      src={src}
      width={width}
      height={height}
      draggable={false}
      className={["site-logo", compact ? "site-logo--compact" : "", className]
        .filter(Boolean)
        .join(" ")}
      alt={decorative ? "" : "Alger Makiputin"}
      aria-hidden={decorative ? true : undefined}
    />
  );
}
