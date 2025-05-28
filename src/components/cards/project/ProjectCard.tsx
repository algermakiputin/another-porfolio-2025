import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import './projectCard.css';

const ProjectCard = () => {
    const onNavigateHandler = (path: string) => {};
    return (
        <div className='project-wrapper'>
            <Card className="portfolio-item" elevation={0}>
                <CardMedia
                    sx={{ height: 190, borderRadius: 0 }}
                    image="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
                    title="POSLite Inventory Software"
                    className="card-media"
                />
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" onClick={() => onNavigateHandler('test')}>
                    POSLite Inventory Software
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <div className="middle">
                    <Button className='view-project-btn' variant='contained' startIcon={<Visibility />}>View Case Study</Button>
                </div>
            </Card>
        </div>
    );
}

export default ProjectCard;