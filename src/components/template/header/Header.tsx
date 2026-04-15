import {
  Box,
  Collapse,
  Divider,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import useGetWindowsDimension from "../../../hooks/useGetWindowsDimension";
import "./header.css";
import DarkModeToggle from "../../toggle/DarkModeToggle";
import Socials from "../../socials/Socials";

const navItems = [
  { label: "About Me", icon: <Home />, route: "/" },
  { label: "Portfolio", icon: <CodeIcon />, route: "/portfolio" },
  { label: "Blog", icon: <RssFeedIcon />, route: "/blog" },
  { label: "Contact", icon: <ContactMailIcon />, route: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const [width] = useGetWindowsDimension();
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const linkHandler = (route: string) => {
    navigate(route);
    if (width <= 770) setCollapse(false);
  };

  useEffect(() => {
    if (width > 0) setCollapse(width >= 770);
  }, [width]);

  const collapseHandler = () => setCollapse(!collapse);

  const getBackgroundColor = () =>
    theme.palette.mode === "dark" ? "#0b1120" : "#0f172a";

  const isActive = (route: string) =>
    route === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(route);

  return (
    <Box>
      <div className="header" style={{ backgroundColor: getBackgroundColor() }}>
        <Box sx={{ pl: 4, pr: 4 }}>
          <div className="top-header-wrapper">
            <IconButton
              className="mobile-menu-toggler"
              onClick={collapseHandler}
            >
              {collapse ? (
                <MenuOpenIcon className="mobile-menu-icon" />
              ) : (
                <MenuIcon className="mobile-menu-icon" />
              )}
            </IconButton>
            <Typography
              sx={{
                color: "#fff",
                mt: 2,
                mb: 0.25,
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
              variant="h1"
              className="site-title"
            >
              Alger Makiputin
            </Typography>
          </div>
        </Box>

        <Collapse in={collapse}>
          <Box sx={{ pl: 4, pr: 4 }}>
            {/* Role */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Full Stack Engineer
            </Typography>

            {/* Profile photo */}
            <img
              src="/images/left-profile.jpg"
              width={110}
              alt="profile"
              style={{
                borderRadius: "50%",
                marginBottom: 14,
                border: "2px solid rgba(14,164,122,0.35)",
              }}
            />

            {/* Tagline */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.8rem",
                lineHeight: 1.6,
                mb: 0.75,
              }}
              variant="body2"
            >
              8+ years building web, mobile, and AI-powered software for retail,
              e-commerce, and banking.
            </Typography>

            {/* Availability badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
                mt: 0.5,
                mb: 0.5,
              }}
            >
              <Box className="availability-dot" />
              <Typography
                sx={{ color: "#0bcf97", fontSize: "0.72rem", fontWeight: 600 }}
              >
                Showcasing personal projects
                {/* Available for projects */}
              </Typography>
            </Box>

            <Socials />
          </Box>

          <Box sx={{ pl: 4, pr: 4 }}>
            <Divider
              sx={{
                mt: 3,
                borderColor: "rgba(255,255,255,0.08)",
                opacity: 0.5,
              }}
            />
            <nav style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => linkHandler(item.route)}
                  className={`sidebar-nav-item ${isActive(item.route) ? "active" : ""}`}
                >
                  <span className="sidebar-nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
            <Divider
              sx={{
                mt: 1,
                borderColor: "rgba(255,255,255,0.08)",
                opacity: 0.5,
              }}
            />
            <div className="toggle-container">
              <DarkModeToggle />
            </div>
          </Box>
        </Collapse>
      </div>
    </Box>
  );
};

export default Header;
