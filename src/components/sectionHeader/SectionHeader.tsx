import { Typography, Box } from "@mui/joy";
import './sectionHeader.css'; 

const SectionHeader = ({ title } : { title: string}) => {
    return (
        <Box>
            <Typography 
            sx={{position: 'relative', paddingLeft: '1rem', mb: 6}} 
            startDecorator={<span className="left-decoration"></span>} 
            level="h2">
                { title }
            </Typography>
        </Box>
    );
};

export default SectionHeader;