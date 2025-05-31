import { Typography, Box } from "@mui/joy";
import './sectionHeader.css'; 
import { useTheme } from "@mui/material";

const SectionHeader = ({ title } : { title: string}) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    return (
        <Box>
            <Typography 
                sx={{position: 'relative', paddingLeft: '1rem', mb: 6, color: isDark ? "white" : "var(--mui-palette-grey-900)"}} 
                startDecorator={<span className="left-decoration"></span>} 
                level="h2"
                >
                { title }
            </Typography>
        </Box>
    );
};

export default SectionHeader;