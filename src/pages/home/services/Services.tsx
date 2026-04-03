import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import WebIcon from "@mui/icons-material/Web";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import useGetTheme from "../../../hooks/useGetTheme";
import "./services.css";

const services = [
  {
    icon: <WebIcon />,
    title: "Web Development",
    description:
      "Custom websites, dashboards, and inventory systems built for retail, e-commerce, and enterprise. Fast, secure, and maintainable.",
  },
  {
    icon: <PhoneAndroidIcon />,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps using React Native and Cordova. One codebase, two platforms, less time and cost.",
  },
  {
    icon: <ApiIcon />,
    title: "API & Integrations",
    description:
      "RESTful and GraphQL APIs, third-party service integrations, payment gateways, and custom data pipelines between systems.",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud & DevOps",
    description:
      "AWS and GCP deployments, Docker containerization, and CI/CD pipelines so your software runs reliably at any scale.",
  },
];

const aiCapabilities = [
  "AI chatbots and virtual assistants for your website or app",
  "Automated document processing and data extraction",
  "AI-powered reporting and business intelligence",
  "Custom AI agents integrated into your existing workflows",
  "Claude API and OpenAI integrations",
];

const Services = () => {
  const { isDark } = useGetTheme();
  return (
    <Box
      sx={{
        p: { lg: 7, md: 4, xs: 4, sm: 4 },
        pt: { lg: 7, md: 4, xs: 4, sm: 4 },
      }}
    >
      <SectionHeader title="What I Can Do For You" />
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>

        {/* AI Featured Card — full width */}
        <Grid size={{ xs: 12 }}>
          <Box className="service-card ai-featured">
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, flexWrap: "wrap" }}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <Box className="service-icon ai-icon">
                    <AutoAwesomeIcon />
                  </Box>
                  <span className="ai-new-badge">NEW</span>
                </Box>
                <Typography variant="h3" sx={{ mb: 1, color: "#fff", fontWeight: 700, fontSize: "1.15rem !important" }}>
                  AI Automation & Integration
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mb: 2, maxWidth: 520 }}>
                  I integrate AI directly into your business workflows using Claude, OpenAI, and custom agent frameworks.
                  Save hours of manual work, reduce errors, and make smarter decisions faster.
                </Typography>
              </Box>
              <Box className="ai-capabilities-list" sx={{ flex: 1, minWidth: 240 }}>
                {aiCapabilities.map((item) => (
                  <Box key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 0.75 }}>
                    <CheckCircleOutlineIcon sx={{ color: "#0bcf97", fontSize: "1rem", mt: "2px", flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem !important" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Standard service cards */}
        {services.map((service) => (
          <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }} key={service.title}>
            <Box className={`service-card ${isDark ? "dark" : "light"}`}>
              <Box className="service-icon">{service.icon}</Box>
              <Typography variant="h3" sx={{ mb: 1, mt: 1.5 }}>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
