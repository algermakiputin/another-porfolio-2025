import { Button, Typography } from "@mui/material";
import { ArrowCircleRight } from "@mui/icons-material";
import './hireMeSection.css';

const HireMeSection = () => {
    return (
        <div className="hireMe">
            <div className="inner">
                <Typography variant="h5" sx={{mb: 1}}>Want me to help with your project?</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum veniam ratione cumque eaque quia tempore! Iusto itaque, ullam tenetur error, officia, esse magnam eius omnis veniam nulla soluta dolorem sapiente!</Typography>
                <Button sx={{mr: 1, mt: 2}} startIcon={<ArrowCircleRight />} className="home-btn portfolio" variant="contained" color="success">View Portfolio</Button>
            </div>
        </div>
    );
}



export default HireMeSection;