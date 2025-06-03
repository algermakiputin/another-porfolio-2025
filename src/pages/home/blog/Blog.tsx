import { Box, Button } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import MediumPosts from "../../../components/medium/MediumPosts";
import { ArrowCircleRight } from "@mui/icons-material";
import { useNavigate } from "react-router";

const Blog = () => {
    const navigate = useNavigate();
    const buttonHandler = (route: string) => {
        navigate(route);
    }
    return (
            <Box sx={{
                    p: {lg: 7, md: 4, xs: 4, sm: 4},
                    pt: {lg: 7, md: 4, xs: 4, sm: 4}
                }}>
            <SectionHeader title="Medium RSS Feed" />
            <MediumPosts limit={3} size={4} featured={true} />
            <Box sx={{textAlign: 'center'}}>
                <Button onClick={() => buttonHandler('/blog')} sx={{mt: 4}} startIcon={<ArrowCircleRight />} className="home-btn portfolio" variant="contained" color="success">View Blog</Button>
            </Box>
        </Box>
    );
}

export default Blog;