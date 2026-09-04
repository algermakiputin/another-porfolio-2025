import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  /** "arrow" appends a → ; "dot" appends a ring (matches the mockup CTAs). */
  trailing?: "arrow" | "dot" | "none";
  className?: string;
  ariaLabel?: string;
};

export default function PortfolioButton({
  href,
  variant = "primary",
  children,
  trailing = "none",
  className = "",
  ariaLabel,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`pf-btn pf-btn--${variant} ${className}`.trim()}
    >
      <span>{children}</span>
      {trailing === "arrow" && <span aria-hidden="true">→</span>}
      {trailing === "dot" && <span className="pf-btn__dot" aria-hidden="true" />}
    </Link>
  );
}
