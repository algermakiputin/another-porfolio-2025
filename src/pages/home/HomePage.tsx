import { Fragment } from "react";
import {Box, Grid, Button, Typography, useTheme } from "@mui/material";
import AboutMe from "./aboutMe/AboutMe";
import Reviews from "./reviews/Reviews";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SendIcon from '@mui/icons-material/Send';
import Projects from "./projects/Projects";
import Blog from "./blog/Blog";
import './homepage.css';
import { NavLink, useNavigate } from "react-router";
import useGetTheme from "../../hooks/useGetTheme";

const HomePage = () => {
    const { isDark  } = useGetTheme();
    const navigate = useNavigate();
    const buttonHandler = (route: string) => {
        navigate(route);
    }
    return (  
         <Fragment>
            <Grid 
                container 
                sx={{
                    p: {lg: 7, md: 4, xs: 4},
                    pt: {lg: 10, md: 6, xs: 4},
                    background: isDark ? 'var(--mui-palette-background-default)' : 'var(--mui-palette-background-paper)'
                }} 
                spacing={2}>
                <Grid  size={{md: 7, sm: 7}} sx={{pr: {lg: 2}}}>
                    <Typography variant="h2" sx={{mb: 1, fontSize: '3em'}}>Alger Makiputin</Typography>
                    <Typography variant="body1" sx={{mb: 2, color: isDark ? 'rgba(255,255,255,0.7)'  : 'var(--mui-palette-secondary-light)'}}>Full Stack Software Engineer</Typography>
                    <Typography variant="body1" sx={{mb: 4}}>I'm a Full Stack Software Engineer skilled in both front-end and back-end development. I built websites and mobiles app for a living, when I am not at work I do running and going to the gym as a hobby. I also do boxing and yoga occasionally. When I am tired to go out, I just stay at home playing some MMO's or tackle a pile of unread books. I also write about stocks and software development in my <NavLink className={'link'} to={'/blog'}>blog</NavLink>. Feel free to checkout my <NavLink className={'link'} to={'/portfolio'}>portfolio</NavLink> to see how I can assist with your project.</Typography>
                    <Box>
                        <Button onClick={() => buttonHandler('/portfolio')} sx={{mr: 1}} startIcon={<ArrowCircleRightIcon />} className="home-btn portfolio" variant="contained" color="success">View Portfolio</Button>
                        <Button onClick={() => buttonHandler('/contact')} sx={{mr: 1}} startIcon={<SendIcon />} className="home-btn message" variant="contained" color="inherit">Hire Me</Button>
                    </Box>
                </Grid>
                <Grid size={{md: 5, sm: 5}} sx={{mt: {xs: 4}}}>
                    <Typography>
                        <img src="/images/profile.jpg" alt="me" className="my-image" style={{width: '100%', maxWidth: 400}} />
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