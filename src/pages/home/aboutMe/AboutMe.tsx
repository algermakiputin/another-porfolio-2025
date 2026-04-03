import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { Box, Grid, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { ReactComponent as JavascriptIcon } from '../../../assets/svg/Javascript.svg';
import { ReactComponent as Angular } from '../../../assets/svg/Angular.svg';
import { ReactComponent as Nodejs } from '../../../assets/svg/Nodejs.svg';
import { ReactComponent as Typescript } from '../../../assets/svg/Typescript.svg';
import { ReactComponent as Reactjs } from '../../../assets/svg/Reactjs.svg';
import { ReactComponent as Laravel } from '../../../assets/svg/Laravel.svg';
import { ReactComponent as Codeigniter } from '../../../assets/svg/Codeigniter.svg';
import { ReactComponent as Php } from '../../../assets/svg/Php.svg';
import { ReactComponent as Git } from '../../../assets/svg/Git.svg';
import { ReactComponent as Gitlab } from '../../../assets/svg/Gitlab.svg';
import { ReactComponent as Github } from '../../../assets/svg/Github.svg';
import { ReactComponent as Docker } from '../../../assets/svg/Docker.svg';
import { ReactComponent as Aws } from '../../../assets/svg/Aws.svg';
import { ReactComponent as Gcloud } from '../../../assets/svg/Gcloud.svg';
import { ReactComponent as Wordpress } from '../../../assets/svg/Wordpress.svg';
import { ReactComponent as Postman } from '../../../assets/svg/Postman.svg';
import { ReactComponent as GithubDark } from '../../../assets/svg/GithubDark.svg';
import { ReactComponent as AwsDark } from '../../../assets/svg/AwsDark.svg';
import { ReactComponent as Graphql } from '../../../assets/svg/Graphql.svg';
import './aboutMe.css';
import useGetTheme from "../../../hooks/useGetTheme";
import { NavLink } from "react-router";

const AboutMe = () => {
    const imageWidth = 24;
    const { isDark } = useGetTheme();
    const cardClass = `skill-card ${isDark ? 'dark' : 'light'}`;

    return (
        <Box sx={{
            p: { md: 4, xs: 4, lg: 7, sm: 4 },
            pt: { md: 4, xs: 2, lg: 7 }
        }}>
            <SectionHeader title="What I do" />
            <Typography variant="body1" sx={{ mb: 6, mt: -2 }}>
                With 8+ years of experience across retail, e-commerce, and banking, I build
                full-stack web and mobile applications, from POS systems to cloud-deployed
                platforms. Now also integrating AI automation into client workflows using Claude and OpenAI.
                AWS Cloud Practitioner certified. See what I have shipped in my{' '}
                <NavLink to={'/portfolio'} className={'link'}>portfolio</NavLink>.
            </Typography>
            <Grid container spacing={3} sx={{ flexGrow: 1 }}>

                {/* AI Skill Card — highlighted */}
                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className="skill-card ai-skill-card">
                        <Box className="skill-icon-row">
                            <Box className="ai-skill-icon">
                                <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                            </Box>
                            <span className="ai-skill-badge">NEW</span>
                        </Box>
                        <Typography sx={{ mb: 0.75, color: '#fff' }} variant="h3">AI & Automation</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                            Claude API, OpenAI, and custom AI agents integrated into real business workflows.
                        </Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <JavascriptIcon width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Typescript width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Angular width={imageWidth} height={imageWidth} className="tech-icon angular" />
                            <Nodejs width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Reactjs width={imageWidth} height={imageWidth} className="tech-icon" />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">Full Stack JavaScript</Typography>
                        <Typography variant="body2">React, Node.js, TypeScript, and Angular. Interactive UIs to server-side APIs.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <Laravel width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Codeigniter width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Php width={imageWidth} height={imageWidth} className="tech-icon" />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">Full Stack PHP</Typography>
                        <Typography variant="body2">Laravel and CodeIgniter for LAMP-stack applications. Robust, scalable, and production-ready.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <img src="/icons/cordova.png" alt="cordova" className="tech-icon" width={imageWidth} />
                            <img src="/icons/react.png" alt="react" className="tech-icon" width={imageWidth} />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">iOS &amp; Android</Typography>
                        <Typography variant="body2">Cross-platform mobile apps with React Native and Cordova. One codebase, two platforms.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            {isDark
                                ? <AwsDark width={imageWidth} height={imageWidth} className="tech-icon" />
                                : <Aws width={imageWidth} height={imageWidth} className="tech-icon" />
                            }
                            <Gcloud width={imageWidth} height={imageWidth} className="tech-icon" />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">Cloud Computing</Typography>
                        <Typography variant="body2">AWS Certified Cloud Practitioner. Deployed and managed infrastructure on AWS and GCP.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <Git width={imageWidth} height={imageWidth} className="tech-icon" />
                            {isDark
                                ? <GithubDark width={imageWidth} height={imageWidth} className="tech-icon" />
                                : <Github width={imageWidth} height={imageWidth} className="tech-icon" />
                            }
                            <Gitlab width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Docker width={imageWidth} height={imageWidth} className="tech-icon" />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">DevOps</Typography>
                        <Typography variant="body2">Git, GitHub, GitLab, and Docker for version control, collaboration, and containerized deployments.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <Graphql width={imageWidth} height={imageWidth} className="tech-icon" />
                            <Postman width={imageWidth} height={imageWidth} className="tech-icon" />
                            <img src="/icons/Express.png" alt="express" className="tech-icon" width={imageWidth} />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">API Development</Typography>
                        <Typography variant="body2">RESTful and GraphQL APIs built for performance, scalability, and seamless system integrations.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <Wordpress width={imageWidth} height={imageWidth} className="tech-icon" />
                            <img src="/icons/WooCommerce.png" alt="WC" className="tech-icon" width={imageWidth} />
                            <img src="/icons/HTML5.png" alt="html5" className="tech-icon" width={imageWidth} />
                            <img src="/icons/CSS3.png" alt="css3" width={imageWidth} className="tech-icon" />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">WordPress</Typography>
                        <Typography variant="body2">Custom themes, plugins, WooCommerce, and technical SEO for high-performing WordPress sites.</Typography>
                    </Box>
                </Grid>

                <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
                    <Box className={cardClass}>
                        <Box className="skill-icon-row">
                            <img src="/icons/Windows11.png" alt="windows" className="tech-icon" width={imageWidth} />
                            <img src="/icons/Linux.png" alt="linux" className="tech-icon" width={imageWidth} />
                            <img src="/icons/Apple.png" alt="apple" className="tech-icon" width={imageWidth} />
                        </Box>
                        <Typography sx={{ mb: 0.75 }} variant="h3">Operating Systems</Typography>
                        <Typography variant="body2">Comfortable developing and deploying on Windows, Linux, and macOS environments.</Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

export default AboutMe;
