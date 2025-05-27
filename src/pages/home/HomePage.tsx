import { Fragment } from "react";
import {Box, Grid, Button } from "@mui/material";
import { Typography } from "@mui/joy"; 
import AboutMe from "./aboutMe/AboutMe";
import Reviews from "./reviews/Reviews";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SendIcon from '@mui/icons-material/Send';
import Projects from "./projects/Projects";
import Blog from "./blog/Blog";
import './homepage.css';

const HomePage = () => {
    return (  
         <Fragment>
            <Grid 
                container 
                sx={{
                    p: {lg: 7, md: 4, sm: 2},
                    pt: {lg: 10, md: 6, xs: 4},
                    background: '#fafafa'
                }} 
                spacing={2}>
                <Grid  size={{md: 7, sm: 7}}>
                    <Typography level="h2" sx={{mb: 1}}>Alger Makiputin</Typography>
                    <Typography level="body-lg" sx={{mb: 2}}>Full Stack Software Engineer</Typography>
                    <Typography level="body-md" sx={{mb: 4}}>I'm a software engineer specialised in frontend and backend development for complex scalable web apps. I write about software development on my blog. Want to know how I may help your project? Check out my project portfolio and online resume.</Typography>
                    <Box>
                        <Button sx={{mr: 1}} startIcon={<ArrowCircleRightIcon />} className="home-btn portfolio" variant="contained" color="success">View Portfolio</Button>
                        <Button sx={{mr: 1}} startIcon={<SendIcon />} className="home-btn message" variant="contained" color="secondary">Hire Me</Button>
                    </Box>
                </Grid>
                <Grid size={{md: 5, sm: 5}}>
                    <Typography>
                        <img src="/images/profile.jpg" style={{width: '100%', maxWidth: 400}} />
                    </Typography>
                </Grid>
            </Grid>
            <AboutMe />
            <Reviews />
            <Projects />
            <Blog />
         </Fragment>
    );
}

export default HomePage;