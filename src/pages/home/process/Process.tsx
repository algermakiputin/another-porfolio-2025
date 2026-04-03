import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import SearchIcon from "@mui/icons-material/Search";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import useGetTheme from "../../../hooks/useGetTheme";
import "./process.css";

const steps = [
  {
    number: "01",
    icon: <SearchIcon />,
    title: "Discovery",
    description:
      "We discuss your goals, challenges, and requirements. I ask the right questions so I fully understand what you need before writing a single line of code.",
  },
  {
    number: "02",
    icon: <DesignServicesIcon />,
    title: "Design & Planning",
    description:
      "Wireframes, system architecture, and a clear project roadmap. No surprises. You know exactly what is being built and when.",
  },
  {
    number: "03",
    icon: <CodeIcon />,
    title: "Development",
    description:
      "Agile development with regular progress updates. You stay in the loop and we adapt quickly if priorities change.",
  },
  {
    number: "04",
    icon: <RocketLaunchIcon />,
    title: "Launch & Support",
    description:
      "Thorough testing, smooth deployment, and post-launch support. I do not disappear after go-live.",
  },
];

const Process = () => {
  const { isDark } = useGetTheme();
  return (
    <Box
      sx={{
        p: { lg: 7, md: 4, xs: 4, sm: 4 },
        pt: { lg: 7, md: 4, xs: 4, sm: 4 },
      }}
    >
      <SectionHeader title="How I Work" />
      <Typography variant="body1" sx={{ mb: 5, mt: -2 }}>
        A straightforward process that keeps you informed and in control at every
        stage, from the first conversation to launch.
      </Typography>

      {/* Timeline connector bar — desktop only */}
      <Box className="process-timeline-bar">
        {steps.map((step, index) => (
          <Box key={step.number} className="timeline-step-indicator">
            <Box className="timeline-dot-circle">
              <Typography className="timeline-dot-number">{step.number}</Typography>
            </Box>
            {index < steps.length - 1 && <Box className="timeline-connector" />}
          </Box>
        ))}
      </Box>

      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {steps.map((step) => (
          <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }} key={step.title}>
            <Box className={`process-step ${isDark ? "dark" : "light"}`}>
              <Typography className="step-number">{step.number}</Typography>
              <Box className="step-icon">{step.icon}</Box>
              <Typography variant="h3" sx={{ mb: 1, mt: 1.5 }}>
                {step.title}
              </Typography>
              <Typography variant="body2">{step.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Process;
