/** A framed stat chip for the About section (icon + value + label). */
type Props = { icon: string; value: string; label: string };

function StatIcon({ icon }: { icon: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true } as const;
  switch (icon) {
    case "calendar":
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.7">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
        </svg>
      );
    case "devices":
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.7">
          <rect x="2.5" y="5" width="13" height="10" rx="1.5" />
          <path d="M6 19h6" strokeLinecap="round" />
          <rect x="16" y="9" width="5.5" height="10" rx="1.5" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} stroke="currentColor" strokeWidth="1.7">
          <path d="M12 21c4.5-4.2 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 2.5 6.8 7 11z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function StatModule({ icon, value, label }: Props) {
  return (
    <div className="pf-stat">
      <span className="pf-stat__icon">
        <StatIcon icon={icon} />
      </span>
      <span className="pf-stat__text">
        <strong className="pf-stat__value">{value}</strong>
        <span className="pf-stat__label">{label}</span>
      </span>
    </div>
  );
}
