import { Box, Collapse, IconButton, List, ListItem, ListItemButton, useTheme } from "@mui/material";
import { ListItemContent, ListItemDecorator, Typography } from "@mui/joy";
import { Home } from "@mui/icons-material";
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useEffect, useState } from "react";
import { NavLink, useNavigate  } from "react-router";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import useGetWindowsDimension from "../../../hooks/useGetWindowsDimension";
import './header.css'; 
import DarkModeToggle from "../../toggle/DarkModeToggle";

const Header = () => {
    const theme = useTheme();
    const [width] = useGetWindowsDimension();
    const [collapse, setCollapse] = useState(true);
    const navigate = useNavigate ();
    const linkHandler = (route: string) => {
        navigate(route);
    };

    useEffect(() => {
        if (width > 0) {
            const shouldCollapse = width >= 770;
            setCollapse(shouldCollapse);
        }
    }, [width]);

    const collapseHandler = () => setCollapse(!collapse);
    const getBackgroundColor = () => {
        if (theme.palette.mode === "dark") {
            return "#1e2a3a";
        }
        return "#54B689";
    }
    return <Box>
        <div className="header" style={{backgroundColor: getBackgroundColor()}}>
            <Box sx={{pl: 4, pr: 4}}>
                <div className="top-header-wrapper">
                    <IconButton className="mobile-menu-toggler" onClick={collapseHandler}> 
                    {
                        collapse ? <MenuOpenIcon className="mobile-menu-icon" /> : <MenuIcon className="mobile-menu-icon"/>
                    }
                    </IconButton>
                    <Typography sx={{color: '#fff', mt: 2, mb: 2, fontSize: '1.5em', fontWeight: 'bold'}} level="h1" className="site-title">Alger Makiputin</Typography>
                </div> 
            </Box>
            <Collapse in={collapse}>
                <Box sx={{pl: 4, pr: 4}}>
                    <img src="/images/left-profile.jpg" width={120} alt="profile"  style={{borderRadius: '50%', marginTop: 15,marginBottom: 15}}/>
                    <Typography sx={{color: '#fff'}}  level="body-sm">Hi there! Welcome to my portfolio take a look around and see what I’ve been working on!</Typography>
                    <ul className="social-icons-list">
                        <li>
                            <NavLink to={'https://ph.linkedin.com/in/alger-makiputin'} target="__blank">
                                <LinkedInIcon sx={{color: 'var(--primary-background)', fontSize: 18}} fontSize="inherit" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'https://github.com/algermakiputin'} target="__blank">
                                <GitHubIcon sx={{color: 'var(--primary-background)', fontSize: 18}} fontSize="inherit" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'https://www.youtube.com/c/AlgerMakiputin'} target="__blank">
                                <YouTubeIcon sx={{color: 'var(--primary-background)', fontSize: 18}} fontSize="inherit" />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'https://algerwrites.medium.com/'} target="__blank">
                                <RssFeedIcon sx={{color: 'var(--primary-background)', fontSize: 18}} fontSize="inherit" />
                            </NavLink>
                        </li>
                    </ul>
                </Box>
                <Box>
                    <List sx={{maxWidth: 200, margin: 'auto'}}>
                        <ListItem>
                            <ListItemButton onClick={() => linkHandler('/')}>
                                <ListItemDecorator sx={{mr: 1}}><Home /></ListItemDecorator>
                                <ListItemContent>About Me</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={() => linkHandler('/portfolio')}>
                                <ListItemDecorator sx={{mr: 1}}><CodeIcon /></ListItemDecorator>
                                <ListItemContent>Portfolio</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        {/* Services is to be followed after the MVP is built */}
                        {/* <ListItem>
                            <ListItemButton onClick={() => linkHandler('/blog')}>
                                <ListItemDecorator sx={{mr: 1}}><WorkIcon /></ListItemDecorator>
                                <ListItemContent>Services</ListItemContent>
                            </ListItemButton>
                        </ListItem> */}
                        <ListItem>
                            <ListItemButton onClick={() => linkHandler('/blog')}>
                                <ListItemDecorator sx={{mr: 1}}><RssFeedIcon /></ListItemDecorator>
                                <ListItemContent>Blog</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={() => linkHandler('/contact')}>
                                <ListItemDecorator sx={{mr: 1}}><ContactMailIcon /></ListItemDecorator>
                                <ListItemContent>Contact</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <DarkModeToggle />
                </Box>
            </Collapse>
        </div>
    </Box>;
}

export default Header;