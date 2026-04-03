import React from "react";
import Isotope from "isotope-layout";
import './portfolioLayout.css';
import { Box, Grid } from "@mui/material";
import ProjectCard from "../../components/cards/project/ProjectCard";
import useGetProjects from "../../hooks/useGetProjects";

const PortfolioLayout = () => {
    const { projects } = useGetProjects(); 
    const isotope = React.useRef<Isotope | null>(null); 
    const [filterKey, setFilterKey] = React.useState("*"); 
  React.useEffect(() => {
    isotope.current = new Isotope(".grid", {
      itemSelector: ".filter-item",
      percentPosition: true,
    });
    // Re-layout after images load so card heights are correct
    const images = document.querySelectorAll<HTMLImageElement>(".grid img");
    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded === images.length) isotope.current?.layout();
    };
    images.forEach(img => {
      if (img.complete) { loaded++; }
      else { img.addEventListener("load", onLoad); img.addEventListener("error", onLoad); }
    });
    if (loaded === images.length && images.length > 0) isotope.current?.layout();
    return () => isotope.current?.destroy();
  }, [projects]);

  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]); 

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
 
  return (
    <> 
      <ul className="portfolio-menu-wrapper">
        <li className={`portfolio-menu ${filterKey === "*" ? 'active' : ''}`} onClick={handleFilterKeyChange("*")}>All</li>
        <li className={`portfolio-menu ${filterKey === 'web-app' ? 'active' : ''}`} onClick={handleFilterKeyChange("web-app")}>Web App</li>
        <li className={`portfolio-menu ${filterKey === 'mobile-app' ? 'active' : ''}`} onClick={handleFilterKeyChange("mobile-app")}>Mobile App</li>
      </ul>
      <Box sx={{p: {lg: 6, md: 4, sm: 4, xs: 4}, pt: {lg: 4, md: 4, sm: 4, xs: 4}, pb: {lg: 6, md: 5, sm: 5, xs: 5}}}>
        <Grid className="grid" container sx={{flexGrow: 1}} spacing={2}>
          {
            projects?.map((project) => (
              <Grid className={`filter-item ${project?.category}`} size={6} key={project.slug} sx={{ display: 'flex' }}>
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
            ))
          }
        </Grid>
    
      </Box>
    </>
  );
}

export default PortfolioLayout;