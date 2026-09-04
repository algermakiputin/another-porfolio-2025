"use client";

import { useEffect, useRef, useState } from "react";
import "./back-to-top.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const footerObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 1.5 * window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const footer = document.querySelector<HTMLElement>("footer, .pf-footer");
    if (footer) {
      footerObserver.current = new IntersectionObserver(
        ([entry]) => setNearFooter(entry.isIntersecting),
        { threshold: 0 }
      );
      footerObserver.current.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      footerObserver.current?.disconnect();
    };
  }, []);

  const handleClick = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className={`back-to-top${nearFooter ? " back-to-top--lifted" : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M8 12V4M4 8l4-4 4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
