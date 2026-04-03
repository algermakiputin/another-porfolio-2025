import { createTheme } from "@mui/material"

export const useGetDarkTheme = () => {
    const darkTheme = createTheme({
      cssVariables: true,
      colorSchemes: {
        dark:  true
      },
      palette: {
        mode: 'dark',
        background: {
          default: '#11181D',
          paper: '#151e29',
        },
        primary: {
          main: "#0ea47a",
        },
        secondary: {
          main: "#4f4f4f"
        },
        common: {
          black: "#1e2a3a"
        }
      },
      typography: {
        ...typography
      }
    });

    return {
        darkTheme
    }
}

const typography = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h2: {
        fontSize: '2em',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.95)',
        letterSpacing: '-0.02em',
    },
    h3: {
        color: 'rgba(255,255,255,0.95)',
        fontSize: '1rem',
        fontWeight: 600,
    },
    body2: {
        color: "rgba(255,255,255,0.65)",
        lineHeight: 1.7,
    },
    body1: {
        color: "rgba(255,255,255,0.7)",
        lineHeight: 1.7,
    }
}
