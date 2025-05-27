import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { Box, Grid } from "@mui/material"; 
import './aboutMe.css';
import { Typography } from "@mui/joy";

const AboutMe = () => {
    const imageWidth = 28;
    const imageHeight = 28;
    const iconWrapperMaxHeight = 30;
    return <Box sx={{
                    p: {md: 4, xs: 2, lg: 7},
                    pt: {md: 4, xs: 2, lg: 7}
                }}>
        <SectionHeader title="What I do" />
        <Typography level="body-md" sx={{mb: 8, mt: -2}}>
                Hi there! I'm a seasoned full-stack developer who loves turning ideas into interactive, user-friendly web/mobile applications. From crafting sleek front-end interfaces with React to building robust back-end systems with Node.js, I handle both sides to create seamless digital experiences. Whether it's a dynamic dashboard, a sleek e-commerce site, or a real-time chat app, I'm here to bring your vision to life with clean code and a touch of creativity.
        </Typography>
        <Grid container spacing={2} sx={{flexGrow: 1}}>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/javascript.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/node.js.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/react.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/angular.png" width={imageWidth} className="tech-icon"  />
                    <img src="/icons/typeScript.png" width={imageWidth} className="tech-icon" />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">Full Stack Javascript Development</Typography>
                <Typography level="body-md"> With expertise in both front-end and back-end technologies, I specialize in creating intuitive user interfaces and robust server-side solutions using JavaScript and its modern frameworks.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/Laravel.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Codeigniter.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/PHP.png" className="tech-icon" width={imageWidth}  />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">Full Stack PHP Development</Typography>
                <Typography level="body-md">I also specialize in building robust and scalable web applications using the LAMP stack—Linux, Apache, MySQL, and PHP. A reliable foundation for developing dynamic websites and applications.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/cordova.png" className="tech-icon" width={imageWidth}  /> 
                    <img src="/icons/react.png" className="tech-icon" width={imageWidth}  /> 
                </Box>
                <Typography sx={{mb:1}} level="title-lg">IOS & Android Development</Typography>
                <Typography level="body-md">Experienced in building cross-platform solutions utilizing React Native and Cordova,  I build applications that run seamlessly on both iOS and Android, saving time and resources.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/AWS.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/GoogleCloud.png" className="tech-icon" width={imageWidth}  />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">Cloud Computing</Typography>
                <Typography level="body-md">I am also a certified as AWS Cloud Practicioner. Experienced with Amazon Web Services (AWS) and Google Cloud Platform (GCP), utilizing services like EC2, S3, Cloud Functions, Lambda and more.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/Git.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Github.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Gitlab.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Docker.png" width={imageWidth} className="tech-icon"  />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">Devops</Typography>
                <Typography level="body-md">Proficient in Git for source code management, enabling efficient collaboration and version tracking. Also Skilled in Docker for facilitating scalable and efficient deployments.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/Graphql.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Express.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Postman.png" className="tech-icon" width={imageWidth}  />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">API Development</Typography>
                <Typography level="body-md">Strong foundation in building scalable APIs that power modern softwares. I specialize in creating seamless integrations between systems, enabling efficient data exchange and enhancing user experiences.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/Wordpress.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/WooCommerce.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/HTML5.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/CSS3.png" width={imageWidth} className="tech-icon"  />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">Wordpress</Typography>
                <Typography level="body-md">Experience In creating custom Wordpress themes, plugins, developing e-commerce sites using WooCommerce and SEO optmization implementing the best practices for the best site visibility.</Typography>
            </Grid>
            <Grid size={{lg: 3, md: 4, sm: 6}} sx={{mb: 5}}>
                <Box sx={{mb:1, maxHeight: iconWrapperMaxHeight}}>
                    <img src="/icons/Windows11.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Linux.png" className="tech-icon" width={imageWidth}  />
                    <img src="/icons/Apple.png" className="tech-icon" width={imageWidth}  />
                </Box>
                <Typography sx={{mb:1}} level="title-lg">Operating Systems</Typography>
                <Typography level="body-md">Solid understanding with various operating systems, enabling me to create and optimize applications across different platforms. My expertise spans from system configuration, troubleshooting and more.</Typography>
            </Grid>
        </Grid> 
    </Box>;
}

export default AboutMe;