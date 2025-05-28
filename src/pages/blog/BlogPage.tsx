import { Box, Grid } from "@mui/material";
import PageHeader from "../../components/template/PageHeader/PageHeader";
import BlogCard from "../../components/cards/BlogCard";

const BlogPage = () => {
    return (
        <>
            <PageHeader hideButton={true} title="Welcome to my blog" description="I write about software development, stock market and just any random things I can think of."/>
            <Box sx={{
                    p: {lg: 7, md: 4, xs: 2},
                    pt: {lg: 7, md: 4, xs: 2}
                }}>
                <Grid container spacing={2}>
                    <Grid size={4}>
                        <BlogCard />
                    </Grid>
                    <Grid size={4}>
                        <BlogCard />
                    </Grid>
                    <Grid size={4}>
                        <BlogCard />
                    </Grid>
                    <Grid size={4}>
                        <BlogCard />
                    </Grid>
                    <Grid size={4}>
                        <BlogCard />
                    </Grid>
                    <Grid size={4}>
                        <BlogCard />
                    </Grid>
                </Grid>
            </Box>
        </>
        
    );
}

export default BlogPage;