"use client";

import { Fragment } from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useGetTheme from "../../../hooks/useGetTheme";
import { useRouter } from "next/navigation";
import "./process.css";

const steps = [
  {
    number: "01",
    icon: <SearchIcon sx={{ fontSize: "1.2rem" }} />,
    title: "Understand the problem",
    description:
      "I start by listening and learning. I dive deep into your business, users, and goals to uncover the real problem we need to solve.",
    tags: ["Research", "Analyze", "Define"],
  },
  {
    number: "02",
    icon: <LayersIcon sx={{ fontSize: "1.2rem" }} />,
    title: "Design for scale",
    description:
      "I architect and build with scalability in mind—using modern technologies, clean structure, and performance best practices.",
    tags: ["Architect", "Build", "Optimize"],
  },
  {
    number: "03",
    icon: <CodeIcon sx={{ fontSize: "1.2rem" }} />,
    title: "Deliver with clarity",
    description:
      "I deliver clean, maintainable code and communicate clearly every step of the way—so you're always in the loop.",
    tags: ["Code", "Communicate", "Deliver"],
  },
];

const Process = () => {
  const { isDark } = useGetTheme();
  const router = useRouter();

  return (
    <Box className="process-section page-section">
      <Box className="process-bg-glow" aria-hidden="true" />
      <Box className="process-bg-dots" aria-hidden="true" />

      <Box className="section-inner">
        {/* Header */}
        <Box className="process-header">
          <Box className="process-badge">MY PROCESS</Box>
          <Typography variant="h2" className="process-title">
            How I Work
          </Typography>
          <Typography className="process-subtitle">
            A clear, collaborative process that turns ideas
            <br className="process-br" />
            into scalable digital solutions.
          </Typography>
        </Box>

        {/* Cards */}
        <Box className="process-cards-row">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <Box className={`process-card ${isDark ? "dark" : "light"}`}>
                <Box className="process-card-top">
                  <Box className="process-icon-box">{step.icon}</Box>
                  <Typography className="process-step-num">{step.number}</Typography>
                </Box>
                <Typography className="process-card-title">{step.title}</Typography>
                <Typography className="process-card-desc">{step.description}</Typography>
                <Box className="process-tags">
                  <TaskAltIcon sx={{ fontSize: "0.85rem", color: "#16a34a", flexShrink: 0, mt: "1px" }} />
                  <span>{step.tags.join(" • ")}</span>
                </Box>
              </Box>
              {i < steps.length - 1 && (
                <Box className="process-connector" aria-hidden="true">
                  <Box className="process-connector-line" />
                </Box>
              )}
            </Fragment>
          ))}
        </Box>

        {/* CTA */}
        <Box className="process-cta-row">
          <Button
            onClick={() => router.push("/contact")}
            className="process-cta-btn"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            Start a Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Process;
