/**
 * Brand-accurate inline SVG marks for the Experience tech grid.
 * Kept inline (no network, no extra asset requests) and decorative — labels are
 * always rendered as real text alongside, so icons use aria-hidden.
 */
import type { CSSProperties } from "react";

type Props = { name: string; size?: number };

const wrap = (size: number): CSSProperties => ({
  width: size,
  height: size,
  display: "block",
});

export default function TechIcon({ name, size = 40 }: Props) {
  const common = { width: size, height: size, viewBox: "0 0 48 48", style: wrap(size), "aria-hidden": true } as const;

  switch (name) {
    case "react":
    case "react-native":
      return (
        <svg {...common} fill="none">
          <circle cx="24" cy="24" r="3.4" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.8" fill="none">
            <ellipse cx="24" cy="24" rx="17" ry="6.6" />
            <ellipse cx="24" cy="24" rx="17" ry="6.6" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="17" ry="6.6" transform="rotate(120 24 24)" />
          </g>
        </svg>
      );
    case "nextjs":
      return (
        <svg {...common} fill="none">
          <circle cx="24" cy="24" r="20" fill="#0b0b0b" />
          <circle cx="24" cy="24" r="20" stroke="#f2ebdd" strokeOpacity="0.25" strokeWidth="1.4" />
          <path d="M17 16h3.1l13.4 18.6M31 16v16" stroke="#fff" strokeWidth="2.4" strokeLinecap="square" />
        </svg>
      );
    case "typescript":
      return (
        <svg {...common} fill="none">
          <rect x="4" y="4" width="40" height="40" rx="6" fill="#3178C6" />
          <path
            d="M25.6 33.4v3.6c.6.3 1.3.55 2.1.72.9.2 1.85.3 2.85.3 1 0 1.94-.1 2.82-.3.88-.2 1.65-.52 2.3-.97.65-.46 1.17-1.06 1.55-1.8.38-.75.57-1.68.57-2.78 0-.8-.12-1.5-.36-2.1a4.9 4.9 0 0 0-1.03-1.6 7.6 7.6 0 0 0-1.62-1.25 21 21 0 0 0-2.13-1.08c-.56-.24-1.06-.47-1.5-.7-.44-.22-.82-.45-1.13-.68-.3-.24-.54-.49-.7-.75a1.6 1.6 0 0 1-.25-.9c0-.3.08-.58.24-.82.16-.24.38-.45.68-.62.3-.17.66-.3 1.1-.4.43-.08.92-.13 1.46-.13.4 0 .82.03 1.26.09.44.06.89.15 1.34.28.45.12.88.28 1.3.47.4.19.78.4 1.12.66v-3.37a11 11 0 0 0-1.84-.5 15 15 0 0 0-2.68-.2c-1 0-1.94.1-2.82.32-.88.22-1.65.56-2.3 1.02-.66.47-1.18 1.06-1.56 1.78-.38.72-.57 1.58-.57 2.58 0 1.3.38 2.42 1.13 3.34.76.92 1.9 1.7 3.44 2.34.6.24 1.15.48 1.66.72.5.23.94.48 1.3.74.37.26.66.55.87.86.2.31.31.67.31 1.08 0 .29-.07.55-.21.8-.14.24-.35.45-.64.63-.28.18-.64.32-1.07.42-.43.1-.94.15-1.52.15-.98 0-1.95-.17-2.9-.52a8.7 8.7 0 0 1-2.62-1.55zM19.3 21.36H24V18.4H11v2.96h4.68V37.9h3.62z"
            fill="#fff"
          />
        </svg>
      );
    case "nodejs":
      return (
        <svg {...common} fill="none">
          <path d="M24 3.5l17.3 10v20L24 43.5 6.7 33.5v-20z" fill="#5FA04E" />
          <path d="M24 3.5l17.3 10v20L24 43.5z" fill="#3C7E30" />
          <path
            d="M24 15.5c-3.7 0-6.6 1.9-6.6 4.9 0 2.9 2.1 3.8 5.4 4.7 3.2.8 3.8 1.2 3.8 2.1 0 .9-.8 1.5-2.4 1.5-1.9 0-2.9-.7-3.4-1.8l-2.8 1.6c1 2 2.9 3.1 6.2 3.1 4 0 6.7-1.9 6.7-5 0-3.1-2.2-3.9-5.6-4.8-3-.7-3.6-1-3.6-2 0-.8.7-1.3 2.2-1.3 1.5 0 2.3.5 2.8 1.6l2.7-1.4c-1-1.8-2.8-2.9-6.4-2.9z"
            fill="#fff"
          />
        </svg>
      );
    case "capacitor":
      return (
        <svg {...common} fill="none">
          <path d="M13 8l10 10-6 6L7 14z" fill="#53B9FF" />
          <path d="M35 40L25 30l6-6 10 10z" fill="#119EFF" />
          <path d="M27 8h14v14z" fill="#96D8FF" />
          <path d="M21 40H7V26z" fill="#0B84E4" />
        </svg>
      );
    case "supabase":
      return (
        <svg {...common} fill="none">
          <path d="M27.3 43.6c-1 1.26-3.02.57-3.05-1.04l-.42-23.6h15.9c2.88 0 4.48 3.32 2.69 5.57z" fill="#3ECF8E" />
          <path d="M20.7 4.4c1-1.26 3.02-.57 3.05 1.04l.18 23.6H8.05c-2.88 0-4.48-3.33-2.69-5.58z" fill="#249361" />
        </svg>
      );
    case "firebase":
      return (
        <svg {...common} fill="none">
          <path d="M11 34L20 8l4.6 8.7L28 12z" fill="#FFC24A" />
          <path d="M11 34L23.7 12.3 28 12l9 22z" fill="#FFA712" />
          <path d="M11 34l17-9 9 9-11.9 6.6a3 3 0 0 1-2.9 0z" fill="#F4BD62" />
          <path d="M11 34L23.7 12.3l1.7 3.3z" fill="#FDE068" opacity="0.6" />
        </svg>
      );
    default:
      return (
        <svg {...common} fill="none">
          <rect x="6" y="6" width="36" height="36" rx="6" fill="#f2ebdd" opacity="0.2" />
        </svg>
      );
  }
}
