import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { NavLink } from 'react-router';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import useGetTheme from '../../hooks/useGetTheme';
import './blogcard.css';

type Props = {
    title: string;
    description: string;
    image: string;
    publishedDate: string;
    link: string;
}

const BlogCard = ({ title, description, image, publishedDate, link }: Props) => {
    const { isDark } = useGetTheme();
    return (
        <Card elevation={0} className={`blog-card ${isDark ? 'dark' : 'light'}`}>

            {/* Image */}
            <Box className="blog-image-wrap">
                <img
                    src={image}
                    alt={title}
                    className="blog-card-image"
                />
            </Box>

            {/* Content */}
            <CardContent className="blog-card-content">
                <Typography gutterBottom variant="h5" component="div" className="blog-title">
                    {title}
                </Typography>
                <Typography variant="body2" className="blog-description">
                    {description}
                </Typography>

                {/* Footer: CTA + date */}
                <Box className="blog-footer">
                    <NavLink to={link} target="_blank" className="blog-read-more">
                        <span>Read Article</span>
                        <ArrowForwardIcon className="read-more-arrow" />
                    </NavLink>
                    <Box className="blog-date">
                        <CalendarTodayIcon className="date-icon" />
                        <Typography className="date-text">{publishedDate}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default BlogCard;
