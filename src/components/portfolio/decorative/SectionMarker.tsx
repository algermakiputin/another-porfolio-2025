/** Orange chevron + display section title (e.g. "› ABOUT ME"). Renders an <h2>. */
type Props = { title: string; id?: string };

export default function SectionMarker({ title, id }: Props) {
  return (
    <div className="pf-section-head">
      <span className="pf-marker__chevron" aria-hidden="true">
        &rsaquo;
      </span>
      <h2 id={id} className="pf-section-title">
        {title}
      </h2>
    </div>
  );
}
