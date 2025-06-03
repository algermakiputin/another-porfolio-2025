import { Box, Button, Grid } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import ProjectCard from '../../../components/cards/project/ProjectCard';
import useGetProjects from '../../../hooks/useGetProjects';
import './projects.css';
import { ArrowCircleRight } from "@mui/icons-material";
import { useNavigate } from "react-router";

const Projects = () => {
    const { projects } = useGetProjects('', 4);
    const navigate = useNavigate();
    const buttonHandler = (route: string) => {
        navigate(route);
    }
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, xs: 4, sm: 4},
                    pt: {lg: 7, md: 4, xs: 4, sm:4}
                }}>
            <SectionHeader title="Featured Projects" />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                {
                    projects?.length && (
                        projects?.map((project) => (
                            <Grid size={{md: 6, sm: 6}} key={project.slug}>
                                <ProjectCard
                                    image={project.image}
                                    description={project.shortDescription}
                                    title={project.title}
                                    path={project?.slug}
                                    />
                            </Grid>
                        ))
                    )
                }
            </Grid>
            <Box sx={{textAlign: 'center'}}>
                <Button onClick={() => buttonHandler('/portfolio')} sx={{mt: 2}} startIcon={<ArrowCircleRight />} className="home-btn portfolio" variant="contained" color="success">View Portfolio</Button>
            </Box>
        </Box>
    );
}

export default Projects;