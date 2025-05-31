import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import './projectCard.css';
import { title } from 'process';
import { useNavigate } from 'react-router';

type Props = {
    description?: string;
    title?: string;
    image?: string;
    path?: string;
}
const ProjectCard = ({ description, title, image, path } : Props) => {
    const navigate = useNavigate();
    const onNavigateHandler = (path: string) => {
        navigate(`/project/${path}`);
    };
    
    return (
        <div className='project-wrapper'>
            <Card className="portfolio-item" elevation={0}>
                <CardMedia
                    sx={{ height: 205, borderRadius: 0 }}
                    image={image} 
                    title={title}
                    className="card-media"
                />
                <CardContent className="card-content">
                    <Typography className='project-title' gutterBottom variant="h5" component="div" onClick={() => onNavigateHandler('test')}>
                    { title ? title : 'POSLite Inventory Software'}
                    </Typography>
                    <Typography variant="body2" className='description' sx={{ color: 'text.secondary' }}>
                    { description ? description : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
                    </Typography>
                </CardContent>
                <div className="middle">
                    <Button onClick={() => onNavigateHandler(path ?? '')} className='view-project-btn' variant='contained' startIcon={<Visibility />}>View Case Study</Button>
                </div>
            </Card>
        </div>
    );
}

export default ProjectCard;