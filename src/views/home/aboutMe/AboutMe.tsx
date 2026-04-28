"use client";

import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { Box, Grid, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "./aboutMe.css";
import useGetTheme from "../../../hooks/useGetTheme";
import Link from "next/link";

const icons = {
  js:         "/assets/svg/Javascript.svg",
  ts:         "/assets/svg/Typescript.svg",
  angular:    "/assets/svg/Angular.svg",
  nodejs:     "/assets/svg/Nodejs.svg",
  reactjs:    "/assets/svg/Reactjs.svg",
  laravel:    "/assets/svg/Laravel.svg",
  codeigniter:"/assets/svg/Codeigniter.svg",
  php:        "/assets/svg/Php.svg",
  aws:        "/assets/svg/Aws.svg",
  awsDark:    "/assets/svg/AwsDark.svg",
  gcloud:     "/assets/svg/Gcloud.svg",
  git:        "/assets/svg/Git.svg",
  githubDark: "/assets/svg/GithubDark.svg",
  github:     "/assets/svg/Github.svg",
  gitlab:     "/assets/svg/Gitlab.svg",
  docker:     "/assets/svg/Docker.svg",
  graphql:    "/assets/svg/Graphql.svg",
  postman:    "/assets/svg/Postman.svg",
  wordpress:  "/assets/svg/Wordpress.svg",
};

const Icon = ({ src, alt, size = 24 }: { src: string; alt: string; size?: number }) => (
  <img src={src} alt={alt} width={size} height={size} className="tech-icon" loading="lazy" />
);

const AboutMe = () => {
  const { isDark } = useGetTheme();
  const cardClass = `skill-card ${isDark ? "dark" : "light"}`;

  return (
    <Box sx={{ p: { md: 4, xs: 4, lg: 7, sm: 4 }, pt: { md: 4, xs: 2, lg: 7 } }}>
      <SectionHeader title="What I do" />
      <Typography variant="body1" sx={{ mb: 6, mt: -2 }}>
        With 8+ years of experience across retail, e-commerce, and banking, I build
        full-stack web and mobile applications, from POS systems to cloud-deployed
        platforms. Now also integrating AI automation into client workflows using Claude and OpenAI.
        AWS Cloud Practitioner certified. See what I have shipped in my{" "}
        <Link href="/portfolio" className="link">portfolio</Link>.
      </Typography>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className="skill-card ai-skill-card">
            <Box className="skill-icon-row">
              <Box className="ai-skill-icon"><AutoAwesomeIcon sx={{ fontSize: 18 }} /></Box>
              <span className="ai-skill-badge">NEW</span>
            </Box>
            <Typography sx={{ mb: 0.75, color: "#fff" }} variant="h3">AI &amp; Automation</Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.72)" }}>
              Claude API, OpenAI, and custom AI agents integrated into real business workflows.
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <Icon src={icons.js} alt="JavaScript" />
              <Icon src={icons.ts} alt="TypeScript" />
              <Icon src={icons.angular} alt="Angular" />
              <Icon src={icons.nodejs} alt="Node.js" />
              <Icon src={icons.reactjs} alt="React" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">Full Stack JavaScript</Typography>
            <Typography variant="body2">React, Node.js, TypeScript, and Angular. Interactive UIs to server-side APIs.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <Icon src={icons.laravel} alt="Laravel" />
              <Icon src={icons.codeigniter} alt="CodeIgniter" />
              <Icon src={icons.php} alt="PHP" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">Full Stack PHP</Typography>
            <Typography variant="body2">Laravel and CodeIgniter for LAMP-stack applications. Robust, scalable, and production-ready.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <img src="/icons/cordova.png" alt="Cordova" className="tech-icon" width={24} height={24} loading="lazy" />
              <img src="/icons/react.png" alt="React Native" className="tech-icon" width={24} height={24} loading="lazy" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">iOS &amp; Android</Typography>
            <Typography variant="body2">Cross-platform mobile apps with React Native and Cordova. One codebase, two platforms.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <Icon src={isDark ? icons.awsDark : icons.aws} alt="AWS" />
              <Icon src={icons.gcloud} alt="Google Cloud" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">Cloud Computing</Typography>
            <Typography variant="body2">AWS Certified Cloud Practitioner. Deployed and managed infrastructure on AWS and GCP.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <Icon src={icons.git} alt="Git" />
              <Icon src={isDark ? icons.githubDark : icons.github} alt="GitHub" />
              <Icon src={icons.gitlab} alt="GitLab" />
              <Icon src={icons.docker} alt="Docker" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">DevOps</Typography>
            <Typography variant="body2">Git, GitHub, GitLab, and Docker for version control, collaboration, and containerized deployments.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <Icon src={icons.graphql} alt="GraphQL" />
              <Icon src={icons.postman} alt="Postman" />
              <img src="/icons/Express.png" alt="Express" className="tech-icon" width={24} height={24} loading="lazy" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">API Development</Typography>
            <Typography variant="body2">RESTful and GraphQL APIs built for performance, scalability, and seamless system integrations.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <Icon src={icons.wordpress} alt="WordPress" />
              <img src="/icons/WooCommerce.png" alt="WooCommerce" className="tech-icon" width={24} height={24} loading="lazy" />
              <img src="/icons/HTML5.png" alt="HTML5" className="tech-icon" width={24} height={24} loading="lazy" />
              <img src="/icons/CSS3.png" alt="CSS3" className="tech-icon" width={24} height={24} loading="lazy" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">WordPress</Typography>
            <Typography variant="body2">Custom themes, plugins, WooCommerce, and technical SEO for high-performing WordPress sites.</Typography>
          </Box>
        </Grid>

        <Grid size={{ lg: 3, md: 4, sm: 6, xs: 6 }}>
          <Box className={cardClass}>
            <Box className="skill-icon-row">
              <img src="/icons/Windows11.png" alt="Windows" className="tech-icon" width={24} height={24} loading="lazy" />
              <img src="/icons/Linux.png" alt="Linux" className="tech-icon" width={24} height={24} loading="lazy" />
              <img src="/icons/Apple.png" alt="macOS" className="tech-icon" width={24} height={24} loading="lazy" />
            </Box>
            <Typography sx={{ mb: 0.75 }} variant="h3">Operating Systems</Typography>
            <Typography variant="body2">Comfortable developing and deploying on Windows, Linux, and macOS environments.</Typography>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default AboutMe;
