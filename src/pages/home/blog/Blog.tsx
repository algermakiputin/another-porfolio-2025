import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Grid, Box } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";

const Blog = () => {
    const imageHeight = 278;
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, xs: 2},
                    pt: {lg: 7, md: 4, xs: 2}
                }}>
            <SectionHeader title="Latest Blog Posts" />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid size={{md: 4, sm: 12}}>
                    <Card sx={{  }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Top 10 Programming Languages
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{md: 4, sm: 12}}>
                    <Card sx={{  }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                How to learn anything from scratch
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid size={{md: 4, sm: 12}}>
                    <Card sx={{  }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height={imageHeight}
                            image="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Road to Fullstack development
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid> 
            </Grid>
        </Box>
    );
}

export default Blog;