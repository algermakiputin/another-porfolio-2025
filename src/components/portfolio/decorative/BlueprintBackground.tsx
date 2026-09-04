/**
 * Layered section backdrop: repeating blueprint grid + soft paper grain.
 * Fully decorative — aria-hidden, pointer-events:none via CSS.
 * `tone` tunes the grid color for dark vs. bone vs. cobalt surfaces.
 */
type Props = { tone?: "dark" | "bone" | "cobalt"; grain?: boolean };

export default function BlueprintBackground({ tone = "dark", grain = true }: Props) {
  return (
    <div className={`pf-backdrop pf-backdrop--${tone}`} aria-hidden="true">
      <span className="pf-backdrop__grid" />
      {grain && <span className="pf-backdrop__grain" />}
    </div>
  );
}
