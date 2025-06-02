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
          main: "#54B689",
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
    h2: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.95)'
    },
    h3: {
        color: 'rgba(255,255,255,0.95)',
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    body2: {
        color: "rgba(255,255,255,0.7)"
    },
    body1: {
        color: "rgba(255,255,255,0.7)"
    }
}
