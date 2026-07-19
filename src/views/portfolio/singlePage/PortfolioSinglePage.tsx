"use client";

import { Box, Card, Grid, Typography } from "@mui/material";
import HireMeSection from "../../../components/hireMeSection/HireMeSection";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import Groups3Icon from "@mui/icons-material/Groups3";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";
import LinkIcon from "@mui/icons-material/Link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "nextjs-toploader/app";
import { useParams } from "next/navigation";
import Link from "next/link";
import "./portfolioSinglePage.css";
import { Project } from "../../../types/ProjectType";
import useGetTheme from "../../../hooks/useGetTheme";

const techIconMap: Record<string, string> = {
  "React": "/icons/react.png",
  "React Native": "/icons/react.png",
  "Node.js": "/icons/node.js.png",
  "Laravel": "/icons/Laravel.png",
  "AWS": "/icons/AWS.png",
  "Docker": "/icons/Docker.png",
  "TypeScript": "/icons/typeScript.png",
  "Supabase": "/icons/supabase.png",
};

const firstTwo = (text?: string): string => {
  if (!text) return "";
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return sentences.slice(0, 2).join(" ");
};

const PortfolioSinglePage = () => {
  const [project, setProject] = useState<Project>();
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const params = useParams();
  const slug = params?.slug as string;
  const { isDark } = useGetTheme();
  const router = useRouter();

  const fetchProjects = useCallback(async () => {
    const res = await fetch("/contents/projects.json", { method: "GET" });
    const json = await res.json();
    const projects: Project[] = json?.projects ?? [];
    setAllProjects(projects);
    setProject(projects.find((p) => p.slug === slug));
  }, [slug]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const isWeb = project?.platform === "web";
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const psoItems = [
    {
      key: "problem",
      label: "Problem",
      text: firstTwo(project?.challenge),
      accentColor: "#ef4444",
      bgColor: isDark ? "rgba(239,68,68,0.07)" : "rgba(239,68,68,0.04)",
    },
    {
      key: "solution",
      label: "Solution",
      text: firstTwo(project?.approach),
      accentColor: "#3b82f6",
      bgColor: isDark ? "rgba(59,130,246,0.07)" : "rgba(59,130,246,0.04)",
    },
    {
      key: "outcome",
      label: "Outcome",
      text: project?.conclusion ?? "",
      accentColor: "#16a34a",
      bgColor: isDark ? "rgba(22,163,74,0.07)" : "rgba(22,163,74,0.04)",
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <Box
        className="case-study-hero"
        sx={{
          background: isDark
            ? "linear-gradient(160deg, #0b1220 0%, #111827 100%)"
            : "#ffffff",
        }}
      >
        <Box aria-hidden="true" className="case-study-hero-bg">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <pattern id="cs-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"} strokeWidth="1" />
              </pattern>
              <radialGradient id="cs-glow" cx="80%" cy="40%" r="45%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={isDark ? "0.14" : "0.18"} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="400" fill="url(#cs-grid)" opacity="0.5" />
            <circle cx="1150" cy="180" r="260" fill="url(#cs-glow)" />
          </svg>
        </Box>

        <Box className="case-study-hero-inner">
          <Link href="/portfolio" className="case-study-breadcrumb">
            <ArrowBackIcon sx={{ fontSize: "0.9rem" }} />
            Back to Portfolio
          </Link>
          <Typography variant="h1" className="case-study-hero-title">
            {project?.title ?? "Case Study"}
          </Typography>
          <Typography className="case-study-hero-sub">
            {project?.metaDescription}
          </Typography>
          <Box className="case-study-hero-chips">
            <span className="portfolio-chip">{isWeb ? "Web App" : "Mobile App"}</span>
            {project?.meta?.industry && (
              <span className="portfolio-chip">{project.meta.industry}</span>
            )}
          </Box>
        </Box>
      </Box>

      {/* ── Body ── */}
      <Box className="case-study-body">

        {/* ── Overview card ── */}
        <Card
          className="project-overview-card"
          elevation={0}
          sx={{ background: "var(--mui-palette-background-paper)" }}
        >
          <Grid container>
            <Grid size={{ lg: 5, md: 5, xs: 12 }}>
              <Box className="project-image-side">
                <img src={project?.image} alt={project?.title} width={800} height={450} loading="lazy" />
              </Box>
            </Grid>

            <Grid size={{ lg: 7, md: 7, xs: 12 }}>
              <Box className="project-meta-side">
                <Typography component="h3" className="meta-section-label">About This Project</Typography>
                <Typography className="project-short-desc">{project?.shortDescription}</Typography>

                <Box className="meta-divider" />

                <Typography component="h3" className="meta-section-label">Quick Info</Typography>
                <Box className="quick-info-grid">
                  {isWeb ? (
                    <>
                      {project?.meta?.industry && (
                        <Box className="quick-info-row">
                          <WarehouseIcon className="quick-info-icon" />
                          <span className="quick-info-label">Industry</span>
                          <span className="quick-info-value">{project.meta.industry}</span>
                        </Box>
                      )}
                      {project?.meta?.size && (
                        <Box className="quick-info-row">
                          <Groups3Icon className="quick-info-icon" />
                          <span className="quick-info-label">Company Size</span>
                          <span className="quick-info-value">{project.meta.size}</span>
                        </Box>
                      )}
                      {project?.meta?.client && (
                        <Box className="quick-info-row">
                          <PeopleIcon className="quick-info-icon" />
                          <span className="quick-info-label">Client</span>
                          <span className="quick-info-value">{project.meta.client}</span>
                        </Box>
                      )}
                      {project?.meta?.website && (
                        <Box className="quick-info-row">
                          <LanguageIcon className="quick-info-icon" />
                          <span className="quick-info-label">Website</span>
                          <Link href={project.meta.link ?? ""} target="_blank" className="quick-info-link">
                            {project.meta.website}
                          </Link>
                        </Box>
                      )}
                      {project?.meta?.timeline && (
                        <Box className="quick-info-row">
                          <CalendarMonthIcon className="quick-info-icon" />
                          <span className="quick-info-label">Timeline</span>
                          <span className="quick-info-value">{project.meta.timeline}</span>
                        </Box>
                      )}
                    </>
                  ) : (
                    <>
                      {project?.meta?.platform && (
                        <Box className="quick-info-row">
                          <AndroidIcon className="quick-info-icon" />
                          <span className="quick-info-label">Platform</span>
                          <span className="quick-info-value">{project.meta.platform}</span>
                        </Box>
                      )}
                      {project?.meta?.category && (
                        <Box className="quick-info-row">
                          <CategoryIcon className="quick-info-icon" />
                          <span className="quick-info-label">Category</span>
                          <span className="quick-info-value">{project.meta.category}</span>
                        </Box>
                      )}
                      {project?.meta?.targetAudience && (
                        <Box className="quick-info-row">
                          <PeopleIcon className="quick-info-icon" />
                          <span className="quick-info-label">Audience</span>
                          <span className="quick-info-value">{project.meta.targetAudience}</span>
                        </Box>
                      )}
                      {project?.meta?.language && (
                        <Box className="quick-info-row">
                          <LanguageIcon className="quick-info-icon" />
                          <span className="quick-info-label">Language</span>
                          <span className="quick-info-value">{project.meta.language}</span>
                        </Box>
                      )}
                      {project?.meta?.linkLabel && (
                        <Box className="quick-info-row">
                          <LinkIcon className="quick-info-icon" />
                          <span className="quick-info-label">Link</span>
                          <Link href={project.meta.link ?? ""} target="_blank" className="quick-info-link">
                            {project.meta.linkLabel}
                          </Link>
                        </Box>
                      )}
                    </>
                  )}
                </Box>

                <Box className="meta-divider" />

                <Typography component="h3" className="meta-section-label">Role & Contribution</Typography>
                {project?.role && (
                  <Box className="role-chip">{project.role}</Box>
                )}
                {project?.responsibilities?.length && (
                  <ul className="responsibilities-list">
                    {project.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* ── PSO ── */}
        {(project?.challenge || project?.approach || project?.conclusion) && (
          <Box className="pso-section">
            <Typography component="h2" className="cs-section-heading">Problem → Solution → Outcome</Typography>
            <Grid container spacing={2}>
              {psoItems.map(({ key, label, text, accentColor, bgColor }) => (
                <Grid size={{ lg: 4, md: 4, xs: 12 }} key={key}>
                  <Box
                    className="pso-card"
                    sx={{ borderLeftColor: accentColor, background: bgColor }}
                  >
                    <Typography className="pso-label" sx={{ color: accentColor }}>
                      {label}
                    </Typography>
                    <Typography className="pso-text">{text}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* ── Tech Stack ── */}
        {project?.techStack?.length && (
          <Box className="tech-stack-section">
            <Typography component="h2" className="cs-section-heading">Tech Stack</Typography>
            <Box className="tech-stack-row">
              {project.techStack.map((tech) => (
                <Box key={tech} className="tech-pill">
                  {techIconMap[tech] && (
                    <img src={techIconMap[tech]} alt={tech} width={16} height={16} loading="lazy" />
                  )}
                  <span>{tech}</span>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* ── Results ── */}
        {project?.results?.length && (
          <Box className="results-section">
            <Typography component="h2" className="cs-section-heading">Results</Typography>
            <Grid container spacing={2} sx={{ mb: 1.5 }}>
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

        {/* ── Prev / Next ── */}
        {(prevProject || nextProject) && (
          <Box className="project-nav">
            {prevProject ? (
              <Box
                className="project-nav-item project-nav-prev"
                onClick={() => router.push(`/project/${prevProject.slug}`)}
              >
                <Box className="project-nav-arrow">
                  <ArrowBackIcon sx={{ fontSize: "1rem" }} />
                </Box>
                <Box>
                  <Typography className="project-nav-dir">Previous Project</Typography>
                  <Typography className="project-nav-name">{prevProject.title}</Typography>
                </Box>
              </Box>
            ) : <Box />}

            {nextProject ? (
              <Box
                className="project-nav-item project-nav-next"
                onClick={() => router.push(`/project/${nextProject.slug}`)}
              >
                <Box>
                  <Typography className="project-nav-dir">Next Project</Typography>
                  <Typography className="project-nav-name">{nextProject.title}</Typography>
                </Box>
                <Box className="project-nav-arrow">
                  <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
                </Box>
              </Box>
            ) : <Box />}
          </Box>
        )}

      </Box>

      <Box sx={{ mt: 3 }}>
        <HireMeSection />
      </Box>
    </>
  );
};

export default PortfolioSinglePage;
