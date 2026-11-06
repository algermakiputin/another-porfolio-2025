"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { homeHref: "#home", routeHref: "/", label: "HOME", section: "home" },
  { homeHref: "#projects", routeHref: "/portfolio", label: "PROJECTS", section: "projects" },
  { homeHref: "#about", routeHref: "/#about", label: "ABOUT", section: "about" },
  { homeHref: "#field-notes", routeHref: "/blog", label: "BLOG", section: "field-notes" },
];

export default function WorldHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showPageProgress = !pathname.startsWith("/blog/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showPageProgress) return;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [showPageProgress]);

  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll<HTMLElement>(".alger-world main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        }
      },
      { rootMargin: "-18% 0px -67% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isCurrent = (item: (typeof navItems)[number]) => {
    if (isHome) return currentSection === item.section;
    if (item.routeHref === "/portfolio") {
      return pathname.startsWith("/portfolio") || pathname.startsWith("/project/");
    }
    if (item.routeHref === "/blog") return pathname.startsWith("/blog");
    return false;
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      {showPageProgress && (
        <div className="page-progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      )}
      <header className="site-header">
        <div className="nav-shell wrapper">
          <a className="logo" href={isHome ? "#top" : "/"} aria-label="Alger Makiputin — home">
            <span className="logo-mark">
              A<span className="logo-spark">✦</span>
            </span>
            <span className="logo-copy">
              <strong>
                ALGER MAKIPUTIN
              </strong>
              <small>PRODUCT ENGINEER</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.homeHref : item.routeHref}
                className={isCurrent(item) ? "is-current" : undefined}
                aria-current={isCurrent(item) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-end">
            <a
              className="header-contact"
              href={isHome ? "#contact" : "/contact"}
              aria-current={pathname.startsWith("/contact") ? "page" : undefined}
            >
              LET&apos;S TALK <span aria-hidden="true">↗</span>
            </a>
            <button
              ref={menuButtonRef}
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav
          className="mobile-menu"
          id="mobile-menu"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          {[
            ...navItems.map((item) => ({
              href: isHome ? item.homeHref : item.routeHref,
              label: item.label,
            })),
            { href: isHome ? "#contact" : "/contact", label: "CONTACT" },
          ].map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}


