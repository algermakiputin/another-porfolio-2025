import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { Box, Grid, Typography } from "@mui/material"; 
import { ReactComponent as JavascriptIcon} from '../../../assets/svg/Javascript.svg';
import { ReactComponent as Angular} from '../../../assets/svg/Angular.svg';
import { ReactComponent as Nodejs} from '../../../assets/svg/Nodejs.svg';
import { ReactComponent as Typescript} from '../../../assets/svg/Typescript.svg';
import { ReactComponent as Reactjs} from '../../../assets/svg/Reactjs.svg';
import { ReactComponent as Laravel} from '../../../assets/svg/Laravel.svg';
import { ReactComponent as Codeigniter} from '../../../assets/svg/Codeigniter.svg';
import { ReactComponent as Php} from '../../../assets/svg/Php.svg';
import { ReactComponent as Git} from '../../../assets/svg/Git.svg';
import { ReactComponent as Gitlab} from '../../../assets/svg/Gitlab.svg';
import { ReactComponent as Github} from '../../../assets/svg/Github.svg';
import { ReactComponent as Docker} from '../../../assets/svg/Docker.svg';
import { ReactComponent as Aws} from '../../../assets/svg/Aws.svg';
import { ReactComponent as Gcloud} from '../../../assets/svg/Gcloud.svg';
import { ReactComponent as Wordpress} from '../../../assets/svg/Wordpress.svg';
import { ReactComponent as Postman} from '../../../assets/svg/Postman.svg';
import { ReactComponent as GithubDark} from '../../../assets/svg/GithubDark.svg';
import { ReactComponent as AwsDark} from '../../../assets/svg/AwsDark.svg';
import './aboutMe.css';
import useGetTheme from "../../../hooks/useGetTheme";
import { NavLink } from "react-router";
import { useEffect } from "react";

const AboutMe = () => {
    const imageWidth = 24;
    const iconWrapperMaxHeight = 30;
    const { isDark } = useGetTheme();

    return (
        <Box sx={{
                    p: {md: 4, xs: 4, lg: 7, sm:4},
                    pt: {md: 4, xs: 2, lg: 7}
                }}>
            <SectionHeader title="What I do" />
            <Typography variant="body1" sx={{mb: 8, mt: -2}}>
                    I have over 7 years of experience in software development, I've had the opportunity to work with clients from all over the world. I'm skilled in a variety of technologies, including JavaScript, React, Node.js, Python, and several database systems. I focus on building responsive, high-performance applications and enjoy working on everything from API integrations to fine-tuning user interfaces. Below is a snapshot of my core technical skills and tools I work with regularly. For a deeper look at my background and the projects I've been involved in, feel free to check out my <NavLink to={'/portfolio'} className={'link'}>portfolio.</NavLink>.
            </Typography>
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight, display: 'block', height: iconWrapperMaxHeight}}>
                        <JavascriptIcon width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Typescript width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Angular width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Nodejs width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Reactjs width={imageWidth} height={imageWidth} className="tech-icon" />
                    </Box>
                    <Typography sx={{mb:1 }} variant="h3">Full Stack Javascript Development</Typography>
                    <Typography variant="body2"> With expertise in both front-end and back-end technologies, I specialize in creating intuitive user interfaces and robust server-side solutions using JavaScript and its modern frameworks.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <Laravel width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Codeigniter width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Php width={imageWidth} height={imageWidth} className="tech-icon" />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Full Stack PHP Development</Typography>
                    <Typography variant="body2">I also specialize in building robust and scalable web applications using the LAMP stack—Linux, Apache, MySQL, and PHP. A reliable foundation for developing dynamic websites.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/cordova.png" alt="cordova" className="tech-icon" width={imageWidth}  /> 
                        <img src="/icons/react.png" alt="react" className="tech-icon" width={imageWidth}  /> 
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">IOS & Android Development</Typography>
                    <Typography variant="body2">Experienced in building cross-platform solutions utilizing React Native and Cordova,  I build applications that run seamlessly on both iOS and Android, saving time and resources.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        {
                            isDark ? <AwsDark width={imageWidth} height={imageWidth} className="tech-icon" /> : <Aws width={imageWidth} height={imageWidth} className="tech-icon" />
                        }
                        <Gcloud width={imageWidth} height={imageWidth} className="tech-icon" />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Cloud Computing</Typography>
                    <Typography variant="body2">I'm a certified as AWS Cloud Practicioner. Experienced with Amazon Web Services (AWS) and Google Cloud Platform (GCP), utilizing services like EC2, S3, Lambda and more.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <Git width={imageWidth} height={imageWidth} className="tech-icon" />
                        { isDark ? (
                            <GithubDark width={imageWidth} height={imageWidth} className="tech-icon" />
                        ) : <Github width={imageWidth} height={imageWidth} className="tech-icon" />}
                         
                        <Gitlab width={imageWidth} height={imageWidth} className="tech-icon" />
                        <Docker width={imageWidth} height={imageWidth} className="tech-icon" />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Devops</Typography>
                    <Typography variant="body2">Proficient in Git for source code management, enabling efficient collaboration and version tracking. Also Skilled in Docker for facilitating scalable and efficient deployments.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/Graphql.png" alt="graphql" className="tech-icon" width={imageWidth}  />
                        <Postman width={imageWidth} height={imageWidth} className="tech-icon" />
                        <img src="/icons/Express.png" alt="express" className="tech-icon" width={imageWidth}  />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">API Development</Typography>
                    <Typography variant="body2">Strong foundation in building scalable APIs that power modern softwares. I specialize in creating seamless integrations between systems, enabling efficient data exchange.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <Wordpress width={imageWidth} height={imageWidth} className="tech-icon" />
                        <img src="/icons/WooCommerce.png" alt="WC" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/HTML5.png" alt="html5" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/CSS3.png" alt="css3" width={imageWidth} className="tech-icon"  />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Wordpress</Typography>
                    <Typography variant="body2">Experience In creating custom Wordpress themes, plugins, WooCommerce and SEO optmization implementing the best practices for the best site visibility.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/Windows11.png" alt="windows" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Linux.png" alt="linux" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Apple.png" alt="apple" className="tech-icon" width={imageWidth}  />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Operating Systems</Typography>
                    <Typography variant="body2">Mixed technical knowledge and practical experience with various operating systems, enabling me to create and optimize applications across different platforms.</Typography>
                </Grid>
            </Grid> 
        </Box>
    );
}

export default AboutMe;