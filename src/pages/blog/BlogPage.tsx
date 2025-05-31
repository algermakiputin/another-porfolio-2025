import { Box, Grid } from "@mui/material";
import PageHeader from "../../components/template/PageHeader/PageHeader";
import BlogCard from "../../components/cards/BlogCard";
import MediumPosts from "../../components/medium/MediumPosts";

const BlogPage = () => {
    return (
        <>
            <PageHeader hideButton={true} title="Welcome to my blog" description="I write about software development, stock market and just any random things I can think of. The blog posts below are RSS Feed from my medium blog, you will be redirected to medium when you click the read more link."/>
            <Box sx={{
                    p: {lg: 7, md: 4, sm:4, xs: 4},
                    pt: {lg: 7, md: 4, sm: 4, xs: 4}
                }}>
                <MediumPosts limit={9} size={4} />
            </Box>
        </>
        
    );
}

export default BlogPage;