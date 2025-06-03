import { Fragment } from "react";
import {Box, Grid, Button, Typography, useTheme, ThemeProvider } from "@mui/material";
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
    var iframe = document.getElementsByName('webchat')?.[0];
    const buttonHandler = (route: string) => {
        navigate(route);
    }

    const chatWithBot = (e: any) => {
        e.preventDefault();
        removeClass(iframe, 'bpClose');
        addClass(iframe, 'bpOpen');
    }

    return (  
         <Fragment>
            <Grid 
                container 
                sx={{
                    p: {lg: 7, md: 4, xs: 4},
                    pt: {lg: 10, md: 6, xs: 4},
                    background: isDark ? 'var(--mui-palette-background-default)' : 'var(--mui-palette-background-paper)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }} 
                spacing={2}>
                <Grid  size={{md: 7, sm: 7}} sx={{pr: {lg: 2}}}>
                    <Typography variant="h2" sx={{mb: 1, fontSize: '3em'}}>Alger Makiputin</Typography>
                    
                    <Box fontWeight={100}>
                        <Typography variant="body1"  sx={{mb: 2, fontSize: '1.5em', fontWeight: 300, color: isDark ? 'rgba(255,255,255,0.7)'  : '#4f4f4f', opacity: 0.65}}>Full Stack Software Engineer</Typography>
                    </Box>
                    <Typography variant="body1" sx={{mb: 4}}>I'm a Full Stack Software Engineer with experience in both front-end and back-end development. I build websites and mobile apps for a living, and outside of work, I enjoy staying active through running, gym workouts, and occasionally boxing or yoga. On quieter days, you'll find me playing MMOs or catching up on my reading list. I also write about software development and the stock market on my <NavLink className={'link'} to={'/blog'}>blog</NavLink>. Feel free to explore my <NavLink className={'link'} to={'/portfolio'}>portfolio</NavLink> to see how I can help with your project. If you have any quick questions or concerns my feel free to chat with my <NavLink to={'/'} className={'link'} onClick={chatWithBot}>AI Chat bot</NavLink>.</Typography>
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


function hasClass(el: HTMLElement, className: string)
{
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el: HTMLElement, className: string)
{
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el: HTMLElement, className: string)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}