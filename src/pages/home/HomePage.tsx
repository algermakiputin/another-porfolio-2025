import { Fragment } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import AboutMe from "./aboutMe/AboutMe";
import Reviews from "./reviews/Reviews";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SendIcon from "@mui/icons-material/Send";
import Projects from "./projects/Projects";
import Blog from "./blog/Blog";
import Services from "./services/Services";
import Industries from "./industries/Industries";
import Process from "./process/Process";
import "./homepage.css";
import { NavLink, useNavigate } from "react-router";
import useGetTheme from "../../hooks/useGetTheme";
import useGetWindowsDimension from "../../hooks/useGetWindowsDimension";

const HomePage = () => {
  const { isDark } = useGetTheme();
  const [width] = useGetWindowsDimension();
  const navigate = useNavigate();
  const buttonHandler = (route: string) => {
    navigate(route);
  };

  const isMobile = width <= 720;

  const chatWithBot = () => {
    (window as any)?.botpress?.open();
  };

  const intro = (
    <Typography variant="body1" sx={{ mb: 4, maxWidth: 560 }}>
      I help retail, e-commerce, and banking businesses build software that
      actually works. Fast, secure, and built to scale. From custom inventory
      systems and POS software to mobile apps and cloud deployments, I bring 8+
      years of hands-on experience to every project. Check out my{" "}
      <NavLink className={"link"} to={"/portfolio"}>
        portfolio
      </NavLink>{" "}
      or{" "}
      <NavLink className={"link"} to={"/contact"}>
        get in touch
      </NavLink>{" "}
      if you have something in mind.{" "}
      {!isMobile && (
        <>
          Got a quick question?{" "}
          <NavLink to={"/"} className={"link"} onClick={chatWithBot}>
            Chat with my AI assistant
          </NavLink>
          .
        </>
      )}
    </Typography>
  );

  const credibilityStrip = (
    <Box className="credibility-strip">
      <Grid container>
        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
          <Box className="credibility-item">
            <Typography className="credibility-number">8+</Typography>
            <Typography className="credibility-label">
              Years Experience
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
          <Box className="credibility-item">
            <Typography className="credibility-number">3</Typography>
            <Typography className="credibility-label">
              Industries Served
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
          <Box className="credibility-item">
            <Typography className="credibility-number">5★</Typography>
            <Typography className="credibility-label">Client Rated</Typography>
          </Box>
        </Grid>
        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
          <Box className="credibility-item">
            <Typography className="credibility-number">Global</Typography>
            <Typography className="credibility-label">Client Base</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Fragment>
      <Box
        sx={{
          p: { lg: 7, md: 4, xs: 4 },
          pt: { lg: 10, md: 6, xs: 4 },
          pb: { lg: 0, md: 0, xs: 0 },
          background: isDark
            ? "linear-gradient(135deg, #0b1120 0%, #111827 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f0fdf8 100%)",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            size={{ md: 7, sm: 7 }}
            sx={{ pr: { lg: 2 } }}
            className="hero-content"
          >
            <Box className="hero-available-badge">
              <span className="hero-available-dot" />
              Showcasing personal projects
              {/* Available for new projects */}
            </Box>
            <Typography
              variant="h2"
              className="name-heading"
              sx={{
                mb: 0.5,
                fontSize: { lg: "2.6em", xs: "2em" },
                lineHeight: 1.15,
              }}
            >
              Alger Makiputin
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 0.75,
                fontSize: "1.15em",
                fontWeight: 600,
                color: isDark ? "rgba(255,255,255,0.9)" : "#1a1a1a",
              }}
            >
              Building Software That Grows Your Business
            </Typography>
            <Typography
              className="hero-industry-line"
              variant="body2"
              sx={{ mb: 2.5, color: isDark ? "rgba(255,255,255,0.5)" : "#666" }}
            >
              Full Stack Engineer · Retail · E-Commerce · Banking
            </Typography>
            {intro}
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                onClick={() => buttonHandler("/portfolio")}
                startIcon={<ArrowCircleRightIcon />}
                className="home-btn portfolio"
                variant="contained"
                color="success"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => buttonHandler("/contact")}
                startIcon={<SendIcon />}
                className="home-btn message"
                variant="contained"
                color="inherit"
              >
                Hire Me
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ md: 5, sm: 5 }}
            sx={{ mt: { xs: 4, sm: 0 } }}
            className="hero-image"
          >
            <img
              src="/images/profile.jpg"
              alt="Alger Makiputin"
              className="my-image"
              style={{ width: "100%", maxWidth: 400 }}
            />
          </Grid>
        </Grid>
        {credibilityStrip}
      </Box>
      <Services />
      <Industries />
      <AboutMe />
      <Process />
      <Projects />
      <Reviews />
      <Blog />
    </Fragment>
  );
};

export default HomePage;
