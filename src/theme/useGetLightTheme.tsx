import { createTheme } from "@mui/material";

const useGetLightTheme = () => {
    const lightTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
        background: {
        default: '#f1f5f9',
        paper: '#ffffff'
        }
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
    h2: {
        fontSize: '2em',
        fontWeight: 700,
        color: "#1a1a1a",
        letterSpacing: '-0.02em',
    },
    h3: {
        color: '#1a1a1a',
        fontSize: '1rem',
        fontWeight: 600,
    },
    body2: {
        color: "#555",
        lineHeight: 1.7,
    },
    body1: {
        color: "#4a4a4a",
        lineHeight: 1.7,
    }
}