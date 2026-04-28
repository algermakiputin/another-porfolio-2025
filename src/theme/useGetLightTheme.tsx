import { createTheme } from "@mui/material";

const useGetLightTheme = () => {
    const lightTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
        primary: {
            main: '#16a34a',
            dark: '#15803d',
        },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a',
            secondary: '#475569',
        },
        divider: '#e2e8f0',
    },
    typography: {
        ...typography
    }
    });
    return {
        lightTheme
    }
}

export default useGetLightTheme;

const typography = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
    },
    h2: {
        fontSize: '1.875rem',
        fontWeight: 700,
        color: '#0f172a',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
    },
    h3: {
        color: '#0f172a',
        fontSize: '1.05rem',
        fontWeight: 600,
        lineHeight: 1.35,
    },
    body1: {
        color: '#475569',
        lineHeight: 1.65,
        fontSize: '0.9625rem',
    },
    body2: {
        color: '#64748b',
        lineHeight: 1.65,
        fontSize: '0.875rem',
    },
}
