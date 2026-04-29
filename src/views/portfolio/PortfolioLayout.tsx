"use client";

import React from "react";
import "./portfolioLayout.css";
import { Box, Grid } from "@mui/material";
import ProjectCard from "../../components/cards/project/ProjectCard";
import useGetProjects from "../../hooks/useGetProjects";

const PortfolioLayout = () => {
  const { projects } = useGetProjects();
  const isotopeRef = React.useRef<any>(null);
  const [filterKey, setFilterKey] = React.useState("*");

  React.useEffect(() => {
    if (!projects?.length) return;
    let destroyed = false;
    import("isotope-layout").then(({ default: Isotope }) => {
      if (destroyed) return;
      const gridEl = document.querySelector<HTMLElement>(".grid");
      if (!gridEl) return;
      isotopeRef.current = new Isotope(gridEl, {
        itemSelector: ".filter-item",
        percentPosition: true,
      });
      const images = document.querySelectorAll<HTMLImageElement>(".grid img");
      let loaded = 0;
      const onLoad = () => {
        loaded++;
        if (loaded === images.length) isotopeRef.current?.layout();
      };
      images.forEach((img) => {
        if (img.complete) { loaded++; }
        else { img.addEventListener("load", onLoad); img.addEventListener("error", onLoad); }
      });
      if (loaded === images.length && images.length > 0) isotopeRef.current?.layout();
    });
    return () => {
      destroyed = true;
      isotopeRef.current?.destroy();
    };
  }, [projects]);

  React.useEffect(() => {
    if (filterKey === "*") isotopeRef.current?.arrange({ filter: "*" });
    else isotopeRef.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return (
    <>
      <ul className="portfolio-menu-wrapper">
        <li className={`portfolio-menu ${filterKey === "*" ? "active" : ""}`} onClick={handleFilterKeyChange("*")}>All</li>
        <li className={`portfolio-menu ${filterKey === "web-app" ? "active" : ""}`} onClick={handleFilterKeyChange("web-app")}>Web App</li>
        <li className={`portfolio-menu ${filterKey === "mobile-app" ? "active" : ""}`} onClick={handleFilterKeyChange("mobile-app")}>Mobile App</li>
      </ul>
      <Box className="portfolio-grid-wrap">
        <Grid className="grid" container sx={{ flexGrow: 1 }} spacing={2}>
          {projects?.map((project) => (
            <Grid className={`filter-item ${project?.category}`} size={6} key={project.slug} sx={{ display: "flex" }}>
              <ProjectCard
                title={project.title}
                description={project?.shortDescription}
                image={project?.image}
                path={project.slug}
                category={project.category}
                industry={project.meta?.industry}
                resultMetric={project.results?.[0]?.metric}
                resultTitle={project.results?.[0]?.title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PortfolioLayout;
