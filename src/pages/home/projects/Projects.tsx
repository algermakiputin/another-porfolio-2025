import * as React from 'react';
import { Box, Grid, Button } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './projects.css';
import ProjectCard from '../../../components/cards/project/ProjectCard';

const Projects = () => {
    const imageWidth = 275;
    const imageHeight = 190;
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, xs: 4, sm: 4},
                    pt: {lg: 7, md: 4, xs: 4, sm:4}
                }}>
            <SectionHeader title="Featured Projects" />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard />
                </Grid>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard />
                </Grid>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard />
                </Grid>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Projects;