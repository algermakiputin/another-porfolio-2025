"use client";

import { Box, Button, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import "./hireMeSection.css";
import { useRouter } from "nextjs-toploader/app";
import { loadAndOpenWebchat } from "../webchat/Webchat";

const HireMeSection = () => {
  const router = useRouter();

  return (
    <Box className="hire-cta-outer page-section">
      <Box className="section-inner">
        <Box className="hire-cta-card">
          <Box className="hire-cta-dots" aria-hidden="true" />

          <Box className="hire-cta-inner">
            <Box className="hire-cta-icon-wrap">
              <MailOutlineIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
              <Box className="hire-cta-icon-dot" />
            </Box>

            <Box className="hire-cta-text">
              <Typography variant="h5" className="hire-cta-title">
                Have an idea?
              </Typography>
              <Typography variant="body2" className="hire-cta-sub">
                I can help you turn it into a scalable product.
              </Typography>
            </Box>

            <Box className="hire-cta-actions">
              <Button
                onClick={() => router.push("/contact")}
                className="hire-cta-btn-primary"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Get In Touch
              </Button>
              <Button
                onClick={() => router.push("/portfolio")}
                className="hire-cta-btn-secondary"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
              >
                View My Work
              </Button>
              <Button
                onClick={() => loadAndOpenWebchat()}
                className="hire-cta-btn-ai"
                variant="outlined"
                startIcon={<SmartToyOutlinedIcon />}
              >
                Chat with AI
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HireMeSection;
