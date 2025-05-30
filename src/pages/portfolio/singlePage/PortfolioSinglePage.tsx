import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import HireMeSection from "../../../components/hireMeSection/HireMeSection";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Groups3Icon from '@mui/icons-material/Groups3';
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import PageHeader from "../../../components/template/PageHeader/PageHeader";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import './portfolioSinglePage.css';
import { Project } from "../../../types/ProjectType";

const PortfolioSinglePage = () => {
    const [project, setProject] = useState<Project>();
    const { slug } = useParams();

    const fetchProject = useCallback(async () => {
        const request = await fetch('/contents/projects.json', {method: 'GET'});
        const json = await request.json();
        const selectedProject = json?.projects?.find((row: any) => row.slug === slug);
        setProject(selectedProject);
    }, [slug]);

    useEffect(() => {
        fetchProject();
    }, [fetchProject]);

    return (
        <>
            <PageHeader 
                hideButton={true} 
                title={`Case Study: ${project?.title}`}
                description={project?.metaDescription}
                />
            <Box sx={{p: 7}}>
                <Card className="project-meta" elevation={0} sx={{p: 4, background: '#fafafa', border: 0}}>
                    <CardMedia
                        sx={{ height: 190, borderRadius: 0 }}
                        image={project?.image}
                        title={project?.title}
                        className="card-media"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        { project?.title }
                        </Typography>
                        {
                            project?.platform === "web" ? (
                                <ul className="project-info-list">
                                    <li><Typography variant="body2" className="meta-info"><WarehouseIcon fontSize="small" sx={{mr: 1}}/> Industry: { project?.meta?.industry }</Typography></li>
                                    <li><Typography variant="body2" className="meta-info"><Groups3Icon fontSize="small" sx={{mr: 1}}/>Size: {project?.meta?.size}</Typography></li>
                                    <li><Typography variant="body2" className="meta-info"><LanguageIcon fontSize="small" sx={{mr: 1}} />Website: www.project.com</Typography></li>
                                </ul>
                            ) : (
                                <ul className="project-info-list">
                                    <li><Typography variant="body2" className="meta-info"><AndroidIcon fontSize="small" sx={{mr: 1}}/> Platform: { project?.meta?.platform }</Typography></li>
                                    <li><Typography variant="body2" className="meta-info"><CategoryIcon fontSize="small" sx={{mr: 1}}/> Category: {project?.meta?.category}</Typography></li>
                                    <li><Typography variant="body2" className="meta-info"><PeopleIcon fontSize="small" sx={{mr: 1}} /> Target Audience: { project?.meta?.targetAudience }</Typography></li>
                                    <li><Typography variant="body2" className="meta-info"><LanguageIcon fontSize="small" sx={{mr: 1}} /> Language Supported: { project?.meta?.language }</Typography></li>
                                </ul>
                            )
                        }
                        <Typography variant="body2" sx={{mb: 2}}>
                            { project?.shortDescription }
                        </Typography>
                        <Typography variant="h6">Project Requirements</Typography>
                        <ul>
                            {
                                project?.requirements?.map((requirement: any) => (
                                    <li><Typography variant="body2">{ requirement }</Typography></li>
                                ))
                            }
                        </ul>
                    </CardContent>
                </Card>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" className="section-title" sx={{mb: 2}}>Project Overview</Typography>
                    <Typography variant="body1">{ project?.overview }</Typography>
                </Box>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" className="section-title" sx={{mb: 2}}>The Challenge</Typography>
                    <Typography variant="body1">{ project?.challenge }</Typography>
                </Box>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" className="section-title" sx={{mb: 2}}>The Approach and Solution</Typography>
                    <Typography variant="body1">{ project?.approach }</Typography>
                </Box>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" className="section-title" sx={{mb: 2}}>The Results</Typography>
                    <Grid container spacing={2} sx={{mb: 2}}>
                        {
                            project?.results?.map((result: any) => (
                                <Grid size={3}>
                                    <div className="metric">
                                        <Typography className="label">{ result?.title }</Typography>
                                        <Typography className="data" sx={{mb: 1}}>{ result?.metric } <small className="unit">Up</small></Typography>
                                        <Typography className="description">{ result?.description }</Typography>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Typography>{ project?.conclusion }</Typography>
                </Box> 
            </Box>
            <Box sx={{mb: 4}}>
                <HireMeSection />
            </Box>
        </>
    );
}

export default PortfolioSinglePage;