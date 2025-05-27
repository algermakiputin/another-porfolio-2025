import * as React from 'react';
import { Box, Grid, Button } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './projects.css';

const Projects = () => {
    const imageWidth = 275;
    const imageHeight = 190;
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, xs: 2},
                    pt: {lg: 7, md: 4, xs: 2}
                }}>
            <SectionHeader title="Featured Projects" />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid size={{md: 6, sm: 12}}>
                    <Card elevation={0} className='project-card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        />
                        <CardContent className='card-content'>
                            <Typography gutterBottom variant="h5" component="div">
                            POSLite
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className="middle">
                            <Button className='view-project-btn' variant='contained' startIcon={<VisibilityIcon />}>View Case Study</Button>
                        </div>
                    </Card>
                </Grid>
                <Grid size={{md: 6, sm: 12}}>
                    <Card elevation={0} sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: `${imageWidth}px 1fr`}} className='project-card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        />
                        <CardContent className='card-content'>
                            <Typography gutterBottom variant="h5" component="div">
                            Stocks Trading Journal
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent> 
                        <div className="middle">
                            <Button className='view-project-btn' variant='contained' startIcon={<VisibilityIcon />}>View Case Study</Button>
                        </div>
                    </Card>
                    
                </Grid>
                <Grid size={{md: 6, sm: 12}}>
                    <Card elevation={0} sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: `${imageWidth}px 1fr` }} className='project-card'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        />
                        <CardContent className='card-content'>
                            <Typography gutterBottom variant="h5" component="div">
                            Filipino Alamat V2
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className="middle">
                            <Button className='view-project-btn' variant='contained' startIcon={<VisibilityIcon />}>View Case Study</Button>
                        </div>
                    </Card>
                </Grid>
                <Grid size={{md: 6, sm: 12}}>
                    <Card elevation={0} raised={false} sx={{ maxWidth: '100%', display: 'grid', gridTemplateColumns: `${imageWidth}px 1fr` }} className='project-card'>
                        <CardMedia
                        
                            component="img"
                            alt="green iguana"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                            
                        />
                        <CardContent className='card-content'>
                            <Typography gutterBottom variant="h5" component="div">
                            StockApp
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <div className="middle">
                            <Button className='view-project-btn' variant='contained' startIcon={<VisibilityIcon />}>View Case Study</Button>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Projects;