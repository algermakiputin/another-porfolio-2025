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


const PortfolioLayout = () => {
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
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
  const onNavigateHandler = (path: string) => {
    navigate(`/portfolio/${path}`)
  } 
  return (
    <>
      <ul className="portfolio-menu-wrapper">
        <li className={`portfolio-menu ${filterKey === "*" ? 'active' : ''}`} onClick={handleFilterKeyChange("*")}>All</li>
        <li className={`portfolio-menu ${filterKey === "web-app" ? 'active' : ''}`} onClick={handleFilterKeyChange("web-app")}>Web App</li>
        <li className={`portfolio-menu ${filterKey === "mobile-app" ? 'active' : ''}`} onClick={handleFilterKeyChange("mobile-app")}>Mobile App</li>
      </ul>
      <Box sx={{p: {lg: 7, md: 4, xs: 2}}}>
        <ul className="filter-container"> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div>
            
            <div className="filter-item web-app">
                <ProjectCard />
            </div> 
            <div className="filter-item web-app">
                <ProjectCard />
            </div>
        </ul>
      </Box>
    </>
  );
}

export default PortfolioLayout;