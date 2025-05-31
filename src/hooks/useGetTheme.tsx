import { useTheme } from "@mui/material";

const useGetTheme = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return {
        isDark
    };
}

export default useGetTheme;