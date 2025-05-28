import { Box, Grid } from "@mui/material";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import './portfolioSinglePage.css'
import HireMeSection from "../../../components/hireMeSection/HireMeSection";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PageHeader from "../../../components/template/PageHeader/PageHeader";

const PortfolioSinglePage = () => {
    return (
        <>
            <PageHeader 
                hideButton={true} 
                title="Case Study: POSLite Inventory Software" 
                description="Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likely to land your next project or job."
                />
            <Box sx={{p: 7}}>
                <Card className="project-meta" elevation={0} sx={{p: 4, background: '#fafafa', border: 0}}>
                    <CardMedia
                        sx={{ height: 190, borderRadius: 0 }}
                        image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                        title="POSLite Inventory Software"
                        className="card-media"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="div">
                        POSLite Inventory Software
                        </Typography>
                        <ul className="project-info-list">
                            <li><Typography variant="body2" ><WarehouseIcon fontSize="small" sx={{mr: 1}}/> Industry: Tech</Typography></li>
                            <li><Typography variant="body2">Size: 1-50</Typography></li>
                            <li><Typography variant="body2">Website: www.project.com</Typography></li>
                        </ul>
                        <Typography variant="body1" sx={{mb: 2}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nam id rerum ipsam? Voluptates, quo id consequatur repellat quibusdam minima ullam qui eaque maxime corrupti, natus doloremque suscipit quod beatae.
                        </Typography>
                        <Typography variant="h6">Project Requirements</Typography>
                        <ul>
                            <li><Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eos hic voluptas. Maxime voluptates fugiat illo numquam? Ullam possimus.</Typography></li>
                            <li><Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eos hic voluptas. Maxime voluptates fugiat illo numquam? Ullam possimus.</Typography></li>
                            <li><Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque eos hic voluptas. Maxime voluptates fugiat illo numquam? Ullam possimus.</Typography></li>
                        </ul>
                    </CardContent>
                </Card>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" sx={{mb: 2}}>Project Overview</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit perspiciatis hic, recusandae cum ad consequatur aspernatur nesciunt cumque expedita esse rerum aliquam accusantium assumenda ea similique sit laboriosam! Reprehenderit.</Typography>
                </Box>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" sx={{mb: 2}}>The Challenge</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit perspiciatis hic, recusandae cum ad consequatur aspernatur nesciunt cumque expedita esse rerum aliquam accusantium assumenda ea similique sit laboriosam! Reprehenderit.</Typography>
                </Box>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" sx={{mb: 2}}>The Approach and Solution</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo suscipit perspiciatis hic, recusandae cum ad consequatur aspernatur nesciunt cumque expedita esse rerum aliquam accusantium assumenda ea similique sit laboriosam! Reprehenderit.</Typography>
                </Box>
                <Box sx={{mt: 4, mb: 4}}>
                    <Typography variant="h5" sx={{mb: 2}}>The Results</Typography>
                    <Grid container spacing={2} sx={{mb: 2}}>
                        <Grid size={3}>
                            <div className="metric">
                                <Typography className="label">Efficiency</Typography>
                                <Typography className="data" sx={{mb: 1}}>20% <small className="unit">Up</small></Typography>
                                <Typography className="description">Metric Description is in here lorem.</Typography>
                            </div>
                        </Grid>
                        <Grid size={3}>
                            <div className="metric">
                                <Typography className="label">Efficiency</Typography>
                                <Typography className="data" sx={{mb: 1}}>20% <small className="unit">Up</small></Typography>
                                <Typography className="description">Metric Description is in here lorem.</Typography>
                            </div>
                        </Grid>
                        <Grid size={3}>
                            <div className="metric">
                                <Typography className="label">Efficiency</Typography>
                                <Typography className="data" sx={{mb: 1}}>20% <small className="unit">Up</small></Typography>
                                <Typography className="description">Metric Description is in here lorem.</Typography>
                            </div>
                        </Grid>
                        <Grid size={3}>
                            <div className="metric">
                                <Typography className="label">Efficiency</Typography>
                                <Typography className="data" sx={{mb: 1}}>20% <small className="unit">Up</small></Typography>
                                <Typography className="description">Metric Description is in here lorem.</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, numquam officiis! Nobis exercitationem, ab eum repudiandae neque reprehenderit ullam perspiciatis dicta a veritatis cum eveniet eius dolore error aut asperiores.</Typography>
                </Box> 
            </Box>
            <Box sx={{mb: 4}}>
                <HireMeSection />
            </Box>
        </>
    );
}

export default PortfolioSinglePage;