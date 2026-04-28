"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./stickybottomcta.css";

const StickyBottomCTA = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 320;
      setVisible(scrollY > 400 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || pathname === "/contact") return null;

  return (
    <button
      className="sticky-cta-pill"
      onClick={() => router.push("/contact")}
      aria-label="Get in touch"
    >
      Get In Touch →
    </button>
  );
};

export default StickyBottomCTA;
