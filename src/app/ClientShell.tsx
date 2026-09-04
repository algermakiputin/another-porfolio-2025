"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { ThemeContextProvider, useThemeContext } from "../context/ThemeContext";
import { useGetDarkTheme } from "../theme/useGetDarkTheme";
import useGetLightTheme from "../theme/useGetLightTheme";
import PortfolioHeader from "../components/portfolio/layout/PortfolioHeader";
import PortfolioFooter from "../components/portfolio/layout/PortfolioFooter";
import ScrollToTop from "../components/scroll/ScrollToTop";
import BackToTop from "../components/ui/BackToTop";

function ThemedApp({ children }: { children: React.ReactNode }) {
  const { darkMode } = useThemeContext();
  const { darkTheme } = useGetDarkTheme();
  const { lightTheme } = useGetLightTheme();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mui-color-scheme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* NextTopLoader is mounted once in app/layout.tsx (root <body>). */}
      <ScrollToTop />
      <BackToTop />
      <a href="#main-content" className="pf-skip-link">
        Skip to content
      </a>
      <PortfolioHeader />
      <Box sx={{ background: "--mui-palette-background-default" }}>
        <div className="content-wrapper">
          <main id="main-content" className="page-transition">
            {children}
          </main>
          <PortfolioFooter />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ThemedApp>{children}</ThemedApp>
    </ThemeContextProvider>
  );
}
