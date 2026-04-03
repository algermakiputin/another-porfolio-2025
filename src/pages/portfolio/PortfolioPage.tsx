import { Box, Chip, Typography } from "@mui/material";
import { Fragment } from "react";
import PortfolioLayout from "./PortfolioLayout";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import useGetTheme from "../../hooks/useGetTheme";

const PortfolioPage = () => {
    const { isDark } = useGetTheme();
    return (
        <Fragment>
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
                <Box sx={{ maxWidth: 620, margin: "auto" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mb: 1.5,
                            fontSize: { lg: "2.2em", xs: "1.8em" },
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        My Portfolio
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, opacity: 0.7, maxWidth: 520, margin: "0 auto 1.5rem" }}>
                        A collection of web and mobile projects across retail, e-commerce, and banking,
                        built with React, Laravel, Node.js, React Native, and more.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
                        <Chip
                            icon={<CodeIcon sx={{ fontSize: "0.85rem !important" }} />}
                            label="Web Applications"
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
                            icon={<PhoneAndroidIcon sx={{ fontSize: "0.85rem !important" }} />}
                            label="Mobile Apps"
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
                            icon={<WorkspacePremiumIcon sx={{ fontSize: "0.85rem !important" }} />}
                            label="8+ Years Experience"
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

            <PortfolioLayout />
        </Fragment>
    );
};

export default PortfolioPage;
