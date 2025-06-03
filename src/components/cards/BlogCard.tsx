import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router';
import useGetTheme from '../../hooks/useGetTheme';
import './blogcard.css';

type Props = {
    title: string;
    description: string;
    image: string;
    publishedDate: string;
    link: string;
}
const BlogCard = ({title, description, image, publishedDate, link} : Props) => {
    const { isDark } = useGetTheme();
    return (
        <Card elevation={0} sx={{border: 'var(--primary-border)'}}>
            <CardMedia
                component="img"
                height={278}
                image={image}
                alt={title}
            />
            <CardContent sx={{backgroundColor: 'var(--mui-palette-background-paper)'}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '1.25rem', fontWeight: 'bold'}}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    { description }
                </Typography>
                <NavLink to={link} style={{textDecoration:'none'}} target='__blank'>
                    <Typography variant="body1" className='read-more' sx={{mb: 2, textDecoration: 'none'}} color="#54B689">Read More</Typography>
                </NavLink>
                <Typography variant="body2" color={isDark ? "rgba(255,255,255,0.4)" : "rgba(41,41,41,0.75)"} fontSize={"0.75rem"}>{ publishedDate }</Typography>
            </CardContent>
        </Card>
    );
}

export default BlogCard;