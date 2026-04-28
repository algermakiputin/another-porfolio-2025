"use client";

import { Box, Button, IconButton, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import DarkModeToggle from "../../toggle/DarkModeToggle";
import useGetWindowsDimension from "../../../hooks/useGetWindowsDimension";
import "./header.css";

const navGroups = [
  {
    label: "Navigation",
    items: [
      { label: "About", route: "/", section: undefined },
      { label: "Projects", route: "/portfolio", section: undefined },
      { label: "Blog", route: "/blog", section: undefined },
      { label: "Contact", route: "/contact", section: undefined },
    ],
  },
];

const navItems = navGroups.flatMap((g) => g.items);

const Header = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [width] = useGetWindowsDimension();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = width > 0 && width <= 900;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (section: string) => {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const linkHandler = (route: string, section?: string) => {
    router.push(route);
    if (section) scrollToSection(section);
    setMenuOpen(false);
  };

  const isActive = (route: string) => {
    const p = pathname ?? "/";
    if (route === "/") return p === "/";
    return p.startsWith(route);
  };

  return (
    <>
      <Box
        className={`top-header ${isDark ? "dark" : "light"}${scrolled ? " scrolled" : ""}`}
      >
        <Box className="top-header-inner">
          {/* Logo */}
          <Box className="header-logo" onClick={() => linkHandler("/")}>
            <img
              src="/app-logo.png"
              alt="Alger Makiputin Full Stack Engineer Logo"
              className="header-logo-img"
              width={38}
              height={38}
            />
            <Box>
              <div className="logo-name">Alger Makiputin</div>
              <div className="logo-role">Full Stack Engineer</div>
            </Box>
          </Box>

          {/* Desktop nav */}
          {!isMobile && (
            <nav className="top-nav-links">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => linkHandler(item.route, item.section)}
                  className={`top-nav-item ${isActive(item.route) ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* Right side */}
          <Box className="header-right">
            <DarkModeToggle />
            {!isMobile && (
              <>
                <Box
                  component="span"
                  className="header-cta-sep"
                  aria-hidden="true"
                />
                <Button
                  onClick={() => linkHandler("/contact")}
                  className="hire-me-top-btn"
                  variant="contained"
                >
                  Hire Me →
                </Button>
              </>
            )}
            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{ color: isDark ? "rgba(255,255,255,0.8)" : "#0f172a" }}
              >
                {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      {/* Mobile drawer */}
      {isMobile && (
        <>
          <Box
            className={`mobile-backdrop ${menuOpen ? "visible" : ""}`}
            onClick={() => setMenuOpen(false)}
          />

          <Box
            className={`mobile-drawer ${isDark ? "dark" : "light"} ${menuOpen ? "open" : ""}`}
          >
            <Box className="mobile-drawer-profile">
              <img
                src="/app-logo.png"
                alt="Alger Makiputin Full Stack Engineer Logo"
                className="mobile-drawer-avatar"
                width={46}
                height={46}
                loading="lazy"
              />
              <Box>
                <div className="mobile-drawer-name">Alger Makiputin</div>
                <div className="mobile-drawer-role">Full Stack Engineer</div>
                <div className="mobile-drawer-status">
                  <span className="mobile-status-dot" />
                  Available for projects
                </div>
              </Box>
            </Box>

            <Box className="mobile-drawer-divider" />

            {navGroups.map((group) => (
              <Box key={group.label} className="mobile-nav-group">
                <div className="mobile-nav-group-label">{group.label}</div>
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => linkHandler(item.route, item.section)}
                    className={`mobile-nav-item ${isActive(item.route) ? "active" : ""}`}
                  >
                    {item.label}
                  </button>
                ))}
              </Box>
            ))}

            <Box className="mobile-drawer-divider" />

            <Box className="mobile-drawer-cta">
              <Button
                onClick={() => linkHandler("/contact")}
                className="hire-me-top-btn mobile-hire-btn"
                variant="contained"
                fullWidth
              >
                Hire Me →
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Header;
