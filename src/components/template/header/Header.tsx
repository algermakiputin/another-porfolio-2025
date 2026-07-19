"use client";

import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import DarkModeToggle from "../../toggle/DarkModeToggle";
import useGetWindowsDimension from "../../../hooks/useGetWindowsDimension";
import "./header.css";

const mainServiceItems = [
  { label: "Web Development", route: "/web-development-services" },
  { label: "Mobile App Development", route: "/mobile-app-development" },
  { label: "E-commerce Development", route: "/ecommerce-development" },
  { label: "Hire Me (Philippines)", route: "/hire-web-developer-philippines" },
];

const localServiceItems = [
  { label: "Web Developer – Davao", route: "/web-developer-davao" },
  { label: "Website Design – Davao", route: "/website-design-davao-city" },
  {
    label: "Small Business Web Design",
    route: "/small-business-web-design-philippines",
  },
  {
    label: "Mobile App Developer – Davao",
    route: "/mobile-app-developer-davao",
  },
];

const servicesItems = [...mainServiceItems, ...localServiceItems];

const navGroups = [
  {
    label: "Navigation",
    items: [
      { label: "Home", route: "/", section: undefined },
      { label: "Projects", route: "/portfolio", section: undefined },
      { label: "Blog", route: "/blog", section: undefined },
      { label: "Contact", route: "/contact", section: undefined },
    ],
  },
  {
    label: "Services",
    items: mainServiceItems.map((s) => ({ ...s, section: undefined })),
  },
  {
    label: "Local Services",
    items: localServiceItems.map((s) => ({ ...s, section: undefined })),
  },
];

const navItems = navGroups[0].items;

const Header = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [width] = useGetWindowsDimension();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(
    null,
  );
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = width > 0 && width <= 900;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    [...navItems, ...servicesItems].forEach((item) =>
      router.prefetch(item.route),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <button
                className={`top-nav-item ${servicesItems.some((s) => isActive(s.route)) ? "active" : ""}`}
                onClick={(e) => setServicesAnchor(e.currentTarget)}
                aria-haspopup="true"
                aria-expanded={Boolean(servicesAnchor)}
              >
                Services{" "}
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: 15,
                    ml: 0.25,
                    verticalAlign: "middle",
                    transition: "transform 0.2s",
                    transform: servicesAnchor
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </button>
              <Menu
                anchorEl={servicesAnchor}
                open={Boolean(servicesAnchor)}
                onClose={() => setServicesAnchor(null)}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1,
                      minWidth: 220,
                      borderRadius: "10px",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      background: isDark ? "#1e293b" : "#fff",
                      border: isDark
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid #e2e8f0",
                    },
                  },
                }}
              >
                {mainServiceItems.map((item) => (
                  <MenuItem
                    key={item.route}
                    onClick={() => {
                      linkHandler(item.route);
                      setServicesAnchor(null);
                    }}
                    selected={isActive(item.route)}
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isDark ? "rgba(255,255,255,0.85)" : "#0f172a",
                      "&.Mui-selected": {
                        color: "#16a34a",
                        background: "rgba(22,163,74,0.06)",
                      },
                      "&:hover": {
                        background: isDark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(22,163,74,0.05)",
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
                <Divider
                  sx={{
                    my: 0.5,
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "#e2e8f0",
                  }}
                />
                <Box
                  sx={{
                    px: 2,
                    py: 0.25,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: isDark ? "rgba(255,255,255,0.35)" : "#94a3b8",
                  }}
                >
                  Davao City
                </Box>
                {localServiceItems.map((item) => (
                  <MenuItem
                    key={item.route}
                    onClick={() => {
                      linkHandler(item.route);
                      setServicesAnchor(null);
                    }}
                    selected={isActive(item.route)}
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isDark ? "rgba(255,255,255,0.85)" : "#0f172a",
                      "&.Mui-selected": {
                        color: "#16a34a",
                        background: "rgba(22,163,74,0.06)",
                      },
                      "&:hover": {
                        background: isDark
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(22,163,74,0.05)",
                      },
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
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
