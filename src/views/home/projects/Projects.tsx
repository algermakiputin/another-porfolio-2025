"use client";

import { Box, Grid } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import ProjectCard from "../../../components/cards/project/ProjectCard";
import useGetProjects from "../../../hooks/useGetProjects";
import "./projects.css";
import { useRouter } from "next/navigation";

const Projects = () => {
  const { projects } = useGetProjects("", 4);
  const router = useRouter();

  return (
    <Box className="page-section">
      <Box className="section-inner">
        <SectionHeader
          title="Selected Projects"
          subtitle="A few projects that solve real problems and deliver measurable results."
          action={{ label: "View all projects", onClick: () => router.push("/portfolio") }}
        />
        <Box className="projects-desktop-grid">
          <Grid container spacing={2.5} sx={{ flexGrow: 1 }}>
            {projects?.length &&
              projects.map((project) => (
                <Grid size={{ lg: 3, md: 6, sm: 6 }} key={project.slug}>
                  <ProjectCard
                    image={project.image}
                    description={project.shortDescription}
                    title={project.title}
                    path={project?.slug}
                    category={project.category}
                    industry={project.meta?.industry}
                    resultMetric={project.results?.[0]?.metric}
                    resultTitle={project.results?.[0]?.title}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>

        <Box className="projects-mobile-scroll">
          {projects?.length &&
            projects.map((project) => (
              <Box className="projects-mobile-card" key={project.slug}>
                <ProjectCard
                  image={project.image}
                  description={project.shortDescription}
                  title={project.title}
                  path={project?.slug}
                  category={project.category}
                  industry={project.meta?.industry}
                  resultMetric={project.results?.[0]?.metric}
                  resultTitle={project.results?.[0]?.title}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
