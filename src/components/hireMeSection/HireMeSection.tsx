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
                    p: {md: 4, xs: 4, lg: 7, sm:4},
                    pt: {md: 4, xs: 2, lg: 7}
                }}>
                <Typography variant="h5" sx={{mb: 1}}>Want me to help with your project?</Typography>
                <Typography variant="body1">I’d love to hear what you’re working on. Whether you need a developer to bring your vision to life or just want to bounce around some ideas, feel free to reach out I’ll get back to you as soon as I can.</Typography>
                    <Button onClick={buttonHandler} sx={{mr: 1, mt: 2}} startIcon={<SendIcon />} className="home-btn portfolio" variant="contained" color="success">Contact</Button>
                </Box>
            </div>
        </div>
    );
}



export default HireMeSection;