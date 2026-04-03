import { Box, Button, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './hireMeSection.css';
import { useNavigate } from "react-router";

const HireMeSection = () => {
    const navigation = useNavigate();
    const buttonHandler = () => {
        navigation('/contact');
    };
    return (
        <div className="hireMe">
            <div className="inner">
                <Box sx={{
                    p: {md: 4, xs: 4, lg: 7, sm: 4},
                    pt: {md: 4, xs: 2, lg: 7}
                }}>
                    <Typography variant="h5" sx={{mb: 1, fontWeight: 700, letterSpacing: '-0.01em', color: '#fff'}}>
                        Ready to build something great?
                    </Typography>
                    <Typography variant="body1" sx={{maxWidth: 520, margin: 'auto', mb: 0, color: 'rgba(255,255,255,0.85)'}}>
                        Whether you need a full project built from scratch, a feature added to an existing system,
                        or just want to talk through an idea, I am here. Let us figure out what you need and make it happen.
                    </Typography>
                    <Button onClick={buttonHandler} className="hire-btn" startIcon={<SendIcon />} variant="contained">
                        Get in Touch
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default HireMeSection;
