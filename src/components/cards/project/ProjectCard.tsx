import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import './projectCard.css';
import { useNavigate } from 'react-router';

type Props = {
    description?: string;
    title?: string;
    image?: string;
    path?: string;
    category?: string;
    industry?: string;
    resultMetric?: string;
    resultTitle?: string;
}

const categoryLabel: Record<string, string> = {
    'web-app': 'Web App',
    'mobile-app': 'Mobile App',
};

const ProjectCard = ({ description, title, image, path, category, industry, resultMetric, resultTitle }: Props) => {
    const navigate = useNavigate();
    const onNavigateHandler = (slug: string) => {
        navigate(`/project/${slug}`);
    };

    return (
        <Box className="project-wrapper">
            <Card className="portfolio-item" elevation={0}>

                {/* Image with hover overlay */}
                <Box className="project-image-wrap">
                    <CardMedia
                        sx={{
                            height: 240,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#0f172a',
                        }}
                        image={image}
                        title={title}
                        className="card-media"
                    />
                    <Box className="middle">
                        <Button
                            size="large"
                            onClick={() => onNavigateHandler(path ?? '')}
                            className="view-project-btn"
                            variant="contained"
                            startIcon={<Visibility />}
                        >
                            View Case Study
                        </Button>
                    </Box>
                </Box>

                {/* Card body */}
                <CardContent className="card-content">

                    {/* Badges */}
                    {(category || industry) && (
                        <Box className="project-badges">
                            {category && (
                                <span className={`project-badge ${category}`}>
                                    {categoryLabel[category] ?? category}
                                </span>
                            )}
                            {industry && (
                                <span className="project-badge industry">{industry}</span>
                            )}
                        </Box>
                    )}

                    <Typography
                        className="project-title"
                        gutterBottom
                        variant="h5"
                        component="div"
                        onClick={() => onNavigateHandler(path ?? '')}
                    >
                        {title ?? 'Untitled Project'}
                    </Typography>

                    <Typography variant="body2" className="description">
                        {description}
                    </Typography>

                    {/* Key metric */}
                    {resultMetric && resultTitle && (
                        <Box className="project-metric">
                            <Typography className="metric-value">{resultMetric}</Typography>
                            <Typography className="metric-label">{resultTitle}</Typography>
                        </Box>
                    )}

                </CardContent>
            </Card>
        </Box>
    );
}

export default ProjectCard;
