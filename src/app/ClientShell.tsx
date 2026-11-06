"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider, useThemeContext } from "../context/ThemeContext";
import { useGetDarkTheme } from "../theme/useGetDarkTheme";
import useGetLightTheme from "../theme/useGetLightTheme";
import WorldHeader from "../components/alger-world/WorldHeader";
import WorldFooter from "../components/alger-world/WorldFooter";
import ScrollToTop from "../components/scroll/ScrollToTop";
import BackToTop from "../components/ui/BackToTop";

function ThemedApp({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWorldHome = pathname === "/";
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
      {isWorldHome ? (
        children
      ) : (
        <div className="alger-world alger-world--inner" id="top">
          <BackToTop />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <WorldHeader />
          <div className="content-wrapper">
            <main id="main-content" className="page-transition">
              {children}
            </main>
            <WorldFooter />
          </div>
        </div>
      )}
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
