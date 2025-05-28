import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const BlogCard = () => {
    return (
        <Card sx={{  }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height={278}
                image="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
                alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Top 10 Programming Languages
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Typography variant="body1" sx={{mb: 2}} color="#54B689">Read More</Typography>
                    <Typography variant="body2" color="rgba(41,41,41,0.75)" fontSize={"0.75rem"}>Published 2 days ago</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BlogCard;