"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { ThemeContextProvider, useThemeContext } from "../context/ThemeContext";
import { useGetDarkTheme } from "../theme/useGetDarkTheme";
import useGetLightTheme from "../theme/useGetLightTheme";
import Header from "../components/template/header/Header";
import Footer from "../components/template/footer/Footer";
import ScrollToTop from "../components/scroll/ScrollToTop";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import StickyBottomCTA from "../components/ui/StickyBottomCTA";

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
      <ScrollToTop />
      <ScrollProgress />
      <BackToTop />
      <StickyBottomCTA />
      <Header />
      <Box sx={{ background: "--mui-palette-background-default" }}>
        <div className="content-wrapper">
          <div className="page-transition">
            {children}
          </div>
          <Footer />
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
