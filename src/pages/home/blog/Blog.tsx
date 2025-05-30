import { Box } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import MediumPosts from "../../../components/medium/MediumPosts";

const Blog = () => {
    return (
            <Box sx={{
                    p: {lg: 7, md: 4, xs: 4, sm: 4},
                    pt: {lg: 7, md: 4, xs: 4, sm: 4}
                }}>
            <SectionHeader title="Medium RSS Feed" />
            <MediumPosts limit={3} size={4} featured={true} />
        </Box>
    );
}

export default Blog;