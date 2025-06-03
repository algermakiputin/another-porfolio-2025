import { NavLink } from "react-router";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const Socials = () => {
    return (
        <ul className="social-icons-list" style={{padding: 0, margin: 0, marginTop: '1.5em'}}>
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
    );
}

export default Socials;