import { Box, Card, Chip, Grid, Typography } from "@mui/material";
import HireMeSection from "../../../components/hireMeSection/HireMeSection";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import Groups3Icon from "@mui/icons-material/Groups3";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import LinkIcon from "@mui/icons-material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import "./portfolioSinglePage.css";
import { Project } from "../../../types/ProjectType";
import useGetTheme from "../../../hooks/useGetTheme";

const PortfolioSinglePage = () => {
  const [project, setProject] = useState<Project>();
  const { slug } = useParams();
  const { isDark } = useGetTheme();

  const fetchProject = useCallback(async () => {
    const request = await fetch("/contents/projects.json", { method: "GET" });
    const json = await request.json();
    const selectedProject = json?.projects?.find(
      (row: any) => row.slug === slug
    );
    setProject(selectedProject);
  }, [slug]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  const isWeb = project?.platform === "web";

  return (
    <>
      {/* Hero */}
      <Box
        className="case-study-hero"
        sx={{
          background: isDark
            ? "linear-gradient(135deg, #0b1120 0%, #111827 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f0fdf8 100%)",
          p: { lg: 7, md: 5, xs: 4 },
          pb: { lg: 5, md: 4, xs: 3 },
        }}
      >
        <Box sx={{ maxWidth: 680, margin: "auto" }}>
          <NavLink to="/portfolio" className="case-study-breadcrumb">
            <ArrowBackIcon sx={{ fontSize: "0.9rem" }} />
            Back to Portfolio
          </NavLink>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontSize: { lg: "2rem", xs: "1.6rem" },
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {project?.title ?? "Case Study"}
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.7, maxWidth: 560, margin: "0 auto" }}
          >
            {project?.metaDescription}
          </Typography>
          <Box className="case-study-hero-chips">
            <Chip
              icon={
                isWeb ? (
                  <CodeIcon sx={{ fontSize: "0.85rem !important" }} />
                ) : (
                  <PhoneAndroidIcon sx={{ fontSize: "0.85rem !important" }} />
                )
              }
              label={isWeb ? "Web App" : "Mobile App"}
              size="small"
              sx={{
                background: "rgba(14,164,122,0.08)",
                color: "#0ea47a",
                border: "1px solid rgba(14,164,122,0.2)",
                fontWeight: 500,
                fontSize: "0.75rem",
              }}
            />
            {project?.meta?.industry && (
              <Chip
                icon={<WarehouseIcon sx={{ fontSize: "0.85rem !important" }} />}
                label={project.meta.industry}
                size="small"
                sx={{
                  background: "rgba(14,164,122,0.08)",
                  color: "#0ea47a",
                  border: "1px solid rgba(14,164,122,0.2)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>

      <Box sx={{ p: { lg: 7, md: 4, xs: 3 }, pt: { lg: 5, md: 4, xs: 3 } }}>

        {/* Project overview: image + meta */}
        <Card
          className="project-overview-card"
          elevation={0}
          sx={{
            mb: 4,
            background: "var(--mui-palette-background-paper)",
            ...(isDark && { borderColor: "rgba(255,255,255,0.07) !important" }),
          }}
        >
          <Grid container>
            <Grid size={{ lg: 5, md: 5, xs: 12 }}>
              <Box className="project-image-side">
                <img src={project?.image} alt={project?.title} />
              </Box>
            </Grid>
            <Grid size={{ lg: 7, md: 7, xs: 12 }}>
              <Box className="project-meta-side">
                <Typography className="project-meta-title">
                  {project?.title}
                </Typography>

                {/* Meta rows */}
                {isWeb ? (
                  <>
                    {project?.meta?.industry && (
                      <Box className="meta-info-row">
                        <WarehouseIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Industry</Typography>
                        <Typography className="meta-info-value">{project.meta.industry}</Typography>
                      </Box>
                    )}
                    {project?.meta?.size && (
                      <Box className="meta-info-row">
                        <Groups3Icon className="meta-info-icon" />
                        <Typography className="meta-info-label">Company Size</Typography>
                        <Typography className="meta-info-value">{project.meta.size}</Typography>
                      </Box>
                    )}
                    {project?.meta?.website && (
                      <Box className="meta-info-row">
                        <LanguageIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Website</Typography>
                        <NavLink to={project.meta.link ?? ""} target="__blank" className="link">
                          <Typography className="meta-info-value">{project.meta.website}</Typography>
                        </NavLink>
                      </Box>
                    )}
                  </>
                ) : (
                  <>
                    {project?.meta?.platform && (
                      <Box className="meta-info-row">
                        <AndroidIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Platform</Typography>
                        <Typography className="meta-info-value">{project.meta.platform}</Typography>
                      </Box>
                    )}
                    {project?.meta?.category && (
                      <Box className="meta-info-row">
                        <CategoryIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Category</Typography>
                        <Typography className="meta-info-value">{project.meta.category}</Typography>
                      </Box>
                    )}
                    {project?.meta?.targetAudience && (
                      <Box className="meta-info-row">
                        <PeopleIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Audience</Typography>
                        <Typography className="meta-info-value">{project.meta.targetAudience}</Typography>
                      </Box>
                    )}
                    {project?.meta?.language && (
                      <Box className="meta-info-row">
                        <LanguageIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Language</Typography>
                        <Typography className="meta-info-value">{project.meta.language}</Typography>
                      </Box>
                    )}
                    {project?.meta?.linkLabel && (
                      <Box className="meta-info-row">
                        <LinkIcon className="meta-info-icon" />
                        <Typography className="meta-info-label">Link</Typography>
                        <NavLink to={project.meta.link ?? ""} target="__blank" className="link">
                          <Typography className="meta-info-value">{project.meta.linkLabel}</Typography>
                        </NavLink>
                      </Box>
                    )}
                  </>
                )}

                {/* Short description */}
                <Typography variant="body2" sx={{ mt: 2, mb: 1.5, opacity: 0.75, lineHeight: 1.7 }}>
                  {project?.shortDescription}
                </Typography>

                {/* Requirements */}
                {project?.requirements?.length && (
                  <>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.75, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.5 }}>
                      Key Requirements
                    </Typography>
                    <ul className="requirements-list">
                      {project.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* Content sections */}
        {project?.overview && (
          <Box className="case-study-section">
            <Typography className="case-study-section-title">Project Overview</Typography>
            <Typography className="case-study-section-body">{project.overview}</Typography>
          </Box>
        )}

        {project?.challenge && (
          <Box className="case-study-section">
            <Typography className="case-study-section-title">The Challenge</Typography>
            <Typography className="case-study-section-body">{project.challenge}</Typography>
          </Box>
        )}

        {project?.approach && (
          <Box className="case-study-section">
            <Typography className="case-study-section-title">Approach & Solution</Typography>
            <Typography className="case-study-section-body">{project.approach}</Typography>
          </Box>
        )}

        {/* Results */}
        {project?.results?.length && (
          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5, fontSize: "1.1rem" }}>
              Results
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {project.results.map((result, i) => (
                <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }} key={i}>
                  <Box className="result-metric-card">
                    <Typography className="result-metric-value">{result.metric}</Typography>
                    <Typography className="result-metric-title">{result.title}</Typography>
                    <Typography className="result-metric-desc">{result.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            {project.conclusion && (
              <Typography className="results-conclusion">{project.conclusion}</Typography>
            )}
          </Box>
        )}

      </Box>

      <Box sx={{ mb: 4 }}>
        <HireMeSection />
      </Box>
    </>
  );
};

export default PortfolioSinglePage;
