import { Box, Collapse, List, ListItem, ListItemButton } from "@mui/material";
import './header.css'; 
import { ListItemContent, ListItemDecorator, Typography } from "@mui/joy";
import { Home } from "@mui/icons-material";
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useState } from "react";
import { useNavigate  } from "react-router";

const Header = () => {
    const [collapse, setCollapse] = useState(true);
    const navigate = useNavigate ();
    
    const linkHandler = (route: string) => {
        navigate(route);
    };
    
    return <Box>
        <div className="header">
            <Box sx={{pl: 4, pr: 4}}>
                <Typography sx={{color: '#fff', mt: 2, mb: 2}} level="h3" className="site-title">Alger Makiputin</Typography>
            </Box>
            <Collapse in={collapse}>
                <Box sx={{pl: 4, pr: 4}}>
                    <img src="/images/left-profile.jpg" width={120}  style={{borderRadius: '50%', marginTop: 15,marginBottom: 15}}/>
                    <Typography sx={{color: '#fff'}}  level="body-sm">Hi, my name is Alger Makiputin and I'm a senior software engineer. Welcome to my personal website!</Typography>
                </Box>
                <Box>
                    <List>
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
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{mr: 1}}><WorkIcon /></ListItemDecorator>
                                <ListItemContent>Services</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{mr: 1}}><BookIcon /></ListItemDecorator>
                                <ListItemContent>Blog</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{mr: 1}}><ContactsIcon /></ListItemDecorator>
                                <ListItemContent>Contact</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Collapse>
        </div>
    </Box>;
}

export default Header;