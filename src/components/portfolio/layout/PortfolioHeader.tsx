"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../../../data/portfolio";
import BrandLogo from "../../brand/BrandLogo";

// Only the sections that a primary-nav item reflects on the homepage.
// "contact" is the closing CTA — tracking it stops Blog staying active at the
// bottom of the homepage.
const SECTION_IDS = ["builds", "writing", "contact"];

type Variant = "overlay" | "solid" | "article";

export default function PortfolioHeader() {
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/";
  const isArticle = pathname.startsWith("/blog/");

  const variant: Variant = isArticle ? "article" : isHome ? "overlay" : "solid";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  /* Increase opacity after scrolling (overlay variant only) */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-position active-section indicator (homepage only).
     The active item = the last tracked section whose top has crossed an
     "active line" ~35% down the viewport. While the hero is in view, no
     section has crossed it, so nothing is highlighted. */
  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }
    const compute = () => {
      const line = window.innerHeight * 0.35;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [isHome]);

  /* Scroll-lock + scrollbar-width compensation while the drawer is open */
  useEffect(() => {
    if (menuOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (sw > 0) document.body.style.paddingRight = `${sw}px`;
      const first = drawerRef.current?.querySelector<HTMLElement>("a,button");
      first?.focus();
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  /* Escape closes the menu and returns focus to the toggle */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* Focus trap — keep Tab cycling inside the drawer while it is open */
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return;
    const el = drawerRef.current;
    const focusable = el.querySelectorAll<HTMLElement>(
      'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [menuOpen]);

  /* Close the mobile menu whenever the route changes */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* One route-aware source of truth. On internal routes the pathname alone
     decides the active item (scroll-spy is inert off the homepage), so exactly
     one item can ever match. On the homepage, the single `active` section id
     drives the highlight — including Work, which owns the #builds section. */
  const isActive = useCallback(
    (item: (typeof navItems)[number]) => {
      // Every primary item is now a dedicated page — pathname is the source of
      // truth, with the homepage sections reflected on scroll for feedback.

      // Home: only while at the top of the homepage (before a tracked section
      // crosses), so it never competes with Projects/Blog on scroll.
      if (item.href === "/") return isHome && active === "";

      // Contact: the contact route, or the homepage closing CTA on scroll.
      if (item.href === "/contact") {
        if (pathname.startsWith("/contact")) return true;
        return isHome && active === "contact";
      }

      // Writing: blog routes, or the homepage Field Notes section on scroll.
      if (item.href === "/blog") {
        if (pathname.startsWith("/blog")) return true;
        return isHome && active === "writing";
      }

      // Projects: the archive + case studies, or the homepage builds section.
      if (item.href === "/portfolio") {
        if (pathname.startsWith("/portfolio") || pathname.startsWith("/project/"))
          return true;
        return isHome && active === "builds";
      }

      return false;
    },
    [pathname, isHome, active]
  );

  /* Smooth-scroll in-page when already on the homepage */
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[number]
  ) => {
    setMenuOpen(false);
    // On the homepage, "Home" scrolls back to the top instead of a no-op reload.
    if (isHome && item.href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Smooth-scroll only for in-page hash anchors on the homepage. All current
    // nav items are real pages, so this normally just lets navigation proceed.
    if (isHome && item.href.startsWith("/#")) {
      const el = document.getElementById(item.href.slice(2));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const headerClass = [
    "pf-header",
    variant === "overlay" && scrolled ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass} data-variant={variant}>
      <div className="pf-header__inner">
        {/* Brand */}
        <Link href="/" className="pf-brand" aria-label="Alger Makiputin — home">
          <BrandLogo surface="dark" decorative />
          <span className="pf-brand__rule" aria-hidden="true" />
          <span className="pf-brand__descriptor" aria-hidden="true">
            Portfolio / 2026
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="pf-nav" aria-label="Primary">
          {navItems.map((item) =>
            item.isContact ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item)}
                className={`pf-nav__link pf-nav__contact${isActive(item) ? " is-active" : ""}`}
                aria-current={isActive(item) ? "page" : undefined}
              >
                <span className="pf-nav__index" aria-hidden="true">
                  {item.index}
                </span>
                <span className="pf-nav__label">{item.label}</span>
                <span aria-hidden="true" className="pf-nav__arrow">
                  ↗
                </span>
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNav(e, item)}
                className={`pf-nav__link${isActive(item) ? " is-active" : ""}`}
                aria-current={isActive(item) ? "page" : undefined}
              >
                <span className="pf-nav__index" aria-hidden="true">
                  {item.index}
                </span>
                <span className="pf-nav__label">{item.label}</span>
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={menuBtnRef}
          type="button"
          className="pf-burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="pf-mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="pf-burger__text">{menuOpen ? "CLOSE" : "MENU"}</span>
          <span className="pf-burger__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`pf-mobile-backdrop${menuOpen ? " is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu drawer */}
      <div
        id="pf-mobile-menu"
        ref={drawerRef}
        className={`pf-mobile-menu${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!menuOpen}
      >
        <nav className="pf-mobile-nav" aria-label="Mobile primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item)}
              className={`pf-mobile-nav__link${isActive(item) ? " is-active" : ""}`}
              aria-current={isActive(item) ? "page" : undefined}
            >
              <span className="pf-mobile-nav__index" aria-hidden="true">
                {item.index}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
