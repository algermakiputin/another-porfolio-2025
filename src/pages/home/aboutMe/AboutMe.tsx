import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { Box, Grid, Typography } from "@mui/material"; 
import './aboutMe.css';
import useGetTheme from "../../../hooks/useGetTheme";

const AboutMe = () => {
    const imageWidth = 28;
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
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/javascript.png" alt="javascript" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/node.js.png" alt="node" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/react.png" alt="react" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/angular.png" alt="angular" width={imageWidth} className="tech-icon"  />
                        {/* <img src="/icons/typeScript.png" width={imageWidth} className="tech-icon" /> */}
                    </Box>
                    <Typography sx={{mb:1 }} variant="h3">Full Stack Javascript Development</Typography>
                    <Typography variant="body2"> With expertise in both front-end and back-end technologies, I specialize in creating intuitive user interfaces and robust server-side solutions using JavaScript and its modern frameworks.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/Laravel.png" alt="laravel" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Codeigniter.png" alt="codeigniter" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/PHP.png" alt="PHP" className="tech-icon" width={imageWidth}  />
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
                        <img src="/icons/AWS.png" alt="aws" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/GoogleCloud.png" alt="google cloud" className="tech-icon" width={imageWidth}  />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Cloud Computing</Typography>
                    <Typography variant="body2">I'm a certified as AWS Cloud Practicioner. Experienced with Amazon Web Services (AWS) and Google Cloud Platform (GCP), utilizing services like EC2, S3, Lambda and more.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/Git.png" alt="git" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Github.png" alt="github" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Gitlab.png" alt="gitlab" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Docker.png" alt="docker" width={imageWidth} className="tech-icon"  />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">Devops</Typography>
                    <Typography variant="body2">Proficient in Git for source code management, enabling efficient collaboration and version tracking. Also Skilled in Docker for facilitating scalable and efficient deployments.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/Graphql.png" alt="graphql" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Express.png" alt="express" className="tech-icon" width={imageWidth}  />
                        <img src="/icons/Postman.png" alt="postman" className="tech-icon" width={imageWidth}  />
                    </Box>
                    <Typography sx={{mb:1}} variant="h3">API Development</Typography>
                    <Typography variant="body2">Strong foundation in building scalable APIs that power modern softwares. I specialize in creating seamless integrations between systems, enabling efficient data exchange.</Typography>
                </Grid>
                <Grid size={{lg: 3, md: 4, sm: 6, xs: 6}} sx={{mb: 5}}>
                    <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                        <img src="/icons/Wordpress.png" alt="WP" className="tech-icon" width={imageWidth}  />
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