import React from "react";
import Isotope from "isotope-layout";
import './portfolioLayout.css';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import ProjectCard from "../../components/cards/project/ProjectCard";
import { ProjectType } from "../../types/ProjectType";
import useGetProjects from "../../hooks/useGetProjects";


const PortfolioLayout = () => {
    const { projects } = useGetProjects();
    const navigate = useNavigate();
    const isotope = React.useRef<Isotope | null>(null);
  // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows"
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, [projects]);

  // handling filter key change
  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);
  console.log(`filterkey`, filterKey);
  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  const onNavigateHandler = (path: string) => {
    navigate(`/portfolio/${path}`)
  } 
  return (
    <>
      <ul className="portfolio-menu-wrapper">
        <li className={`portfolio-menu ${filterKey === "*" ? 'active' : ''}`} onClick={handleFilterKeyChange("*")}>All</li>
        <li className={`portfolio-menu ${filterKey === 'web-app' ? 'active' : ''}`} onClick={handleFilterKeyChange("web-app")}>Web App</li>
        <li className={`portfolio-menu ${filterKey === 'mobile-app' ? 'active' : ''}`} onClick={handleFilterKeyChange("mobile-app")}>Mobile App</li>
      </ul>
      <Box sx={{p: {lg: 7, md: 4, sm: 2}}}>
        <ul className="filter-container">
          {
            projects?.map((project) => (
              <div className={`filter-item ${project?.category}`}>
                  <ProjectCard 
                    title={project.title}
                    description={project?.shortDescription}
                    image={project?.image}
                    path={project.slug}
                    />
              </div> 
            ))
          }
        </ul>
      </Box>
    </>
  );
}

export default PortfolioLayout;