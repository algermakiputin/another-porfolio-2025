import { createTheme } from "@mui/material";

const useGetLightTheme = () => {
    const lightTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
        background: {
        default: '#fff',
        paper: '#fafafa'
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
    h2: {
        fontSize: '2em',
        fontWeight: 'bold',
    },
    h3: {
        color: '#292929',
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    body2: {
        color: "#4f4f4f"
    },
    body1: {
        color: "#4f4f4f"
    }
}