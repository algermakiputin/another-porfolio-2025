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

const Javascript = (
    <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="js">
        <g id="js_2">
        <path id="Vector" d="M100 0.000488281H0V100H100V0.000488281Z" fill="#F7DF1E"/>
        <path id="Vector_2" d="M67.1745 78.1259C69.1888 81.4148 71.8094 83.8323 76.4444 83.8323C80.338 83.8323 82.8253 81.8862 82.8253 79.1973C82.8253 75.9751 80.2698 74.8339 75.9841 72.9592L73.6348 71.9513C66.8539 69.0624 62.3491 65.4434 62.3491 57.7926C62.3491 50.745 67.719 45.3799 76.111 45.3799C82.0856 45.3799 86.3809 47.4592 89.4761 52.9037L82.1586 57.6021C80.5475 54.7132 78.8094 53.5751 76.111 53.5751C73.3587 53.5751 71.6142 55.3212 71.6142 57.6021C71.6142 60.4212 73.3602 61.5624 77.392 63.3085L79.7412 64.3148C87.7253 67.7386 92.2333 71.2291 92.2333 79.0767C92.2333 87.537 85.5872 92.1719 76.6618 92.1719C67.9348 92.1719 62.2967 88.0132 59.538 82.5624L67.1745 78.1259ZM33.9793 78.9402C35.4555 81.5592 36.7983 83.7735 40.0269 83.7735C43.1142 83.7735 45.0618 82.5656 45.0618 77.8688V45.9164H54.4586V77.9958C54.4586 87.7259 48.7539 92.1545 40.4269 92.1545C32.9031 92.1545 28.546 88.2608 26.3301 83.5712L33.9793 78.9402Z" fill="black"/>
        </g>
        </g>
    </svg>
);

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
                    I have over 7 years experience in software development, I've worked with clients accross the globe. My technical proficiency encompasses a wide range of tools and frameworks, including JavaScript, React, Node.js, Python, and various database systems. I am adept at integrating APIs, implementing responsive designs, and optimizing application performance to ensure seamless user experiences. 
                    Below is a quick overview of my main technical skills set and technologies I use. 
                    For a more detailed overview of my professional background and to explore some of the projects I've worked on, please visit my online resume and project portfolio.
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