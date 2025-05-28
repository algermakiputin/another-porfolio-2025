import { Grid, Box } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import BlogCard from "../../../components/cards/BlogCard";

const Blog = () => {
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, xs: 4, sm: 4},
                    pt: {lg: 7, md: 4, xs: 4, sm: 4}
                }}>
            <SectionHeader title="Latest Blog Posts" />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid size={{md: 4, sm: 4}}>
                    <BlogCard />
                </Grid>
                <Grid size={{md: 4, sm: 4, xs: 12}}>
                    <BlogCard />
                </Grid>
                <Grid size={{md: 4, sm: 4, xs: 12}}>
                    <BlogCard />
                </Grid> 
            </Grid>
        </Box>
    );
}

export default Blog;