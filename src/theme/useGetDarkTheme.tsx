import { createTheme } from "@mui/material"

export const useGetDarkTheme = () => {
    const darkTheme = createTheme({
      cssVariables: true,
      colorSchemes: {
        dark: true
      },
      palette: {
        mode: 'dark',
        primary: {
          main: '#16a34a',
          dark: '#15803d',
        },
        secondary: {
          main: '#334155',
        },
        background: {
          default: '#0b1220',
          paper: '#111827',
        },
        text: {
          primary: '#e5e7eb',
          secondary: '#94a3b8',
        },
        divider: 'rgba(255,255,255,0.07)',
        common: {
          black: '#0b1220',
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
    h1: {
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
    },
    h2: {
        fontSize: '1.875rem',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.95)',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
    },
    h3: {
        color: 'rgba(255,255,255,0.92)',
        fontSize: '1.05rem',
        fontWeight: 600,
        lineHeight: 1.35,
    },
    body1: {
        color: 'rgba(255,255,255,0.68)',
        lineHeight: 1.65,
        fontSize: '0.9625rem',
    },
    body2: {
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.65,
        fontSize: '0.875rem',
    },
}
