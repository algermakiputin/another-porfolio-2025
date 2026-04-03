import { Box, Chip, Typography } from "@mui/material";
import MediumPosts from "../../components/medium/MediumPosts";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EditNoteIcon from "@mui/icons-material/EditNote";
import useGetTheme from "../../hooks/useGetTheme";

const BlogPage = () => {
    const { isDark } = useGetTheme();
    return (
        <>
            {/* Page header */}
            <Box
                sx={{
                    background: isDark
                        ? "linear-gradient(135deg, #0b1120 0%, #111827 100%)"
                        : "linear-gradient(135deg, #ffffff 0%, #f0fdf8 100%)",
                    p: { lg: 7, md: 5, xs: 4 },
                    pb: { lg: 5, md: 4, xs: 3 },
                    textAlign: "center",
                    borderBottom: "1px solid rgba(128,128,128,0.08)",
                }}
            >
                <Box sx={{ maxWidth: 600, margin: "auto" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 1.5,
                            fontSize: { lg: "2.2em", xs: "1.8em" },
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        From My Blog
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, opacity: 0.7, maxWidth: 480, margin: "0 auto 1.5rem" }}>
                        I write about software development, the stock market, and lessons from
                        building products across retail, e-commerce, and banking.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
                        <Chip
                            icon={<RssFeedIcon sx={{ fontSize: "0.85rem !important" }} />}
                            label="Live from Medium"
                            size="small"
                            sx={{
                                background: "rgba(14,164,122,0.08)",
                                color: "#0ea47a",
                                border: "1px solid rgba(14,164,122,0.2)",
                                fontWeight: 500,
                                fontSize: "0.75rem",
                            }}
                        />
                        <Chip
                            icon={<EditNoteIcon sx={{ fontSize: "0.85rem !important" }} />}
                            label="Software · Finance · Product"
                            size="small"
                            sx={{
                                background: "rgba(14,164,122,0.08)",
                                color: "#0ea47a",
                                border: "1px solid rgba(14,164,122,0.2)",
                                fontWeight: 500,
                                fontSize: "0.75rem",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Articles grid */}
            <Box sx={{ p: { lg: 7, md: 4, sm: 4, xs: 4 }, pt: { lg: 6, md: 4, sm: 4, xs: 4 } }}>
                <MediumPosts limit={9} size={4} />
            </Box>
        </>
    );
};

export default BlogPage;
