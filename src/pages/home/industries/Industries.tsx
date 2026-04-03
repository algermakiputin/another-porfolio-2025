import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import useGetTheme from "../../../hooks/useGetTheme";
import "./industries.css";

const industries = [
  {
    icon: <StorefrontIcon />,
    title: "Retail & Grocery",
    tags: ["POS Systems", "Inventory Management", "Barcode Scanning", "Reporting"],
    description:
      "Built and maintained point-of-sale and inventory systems for retail and grocery businesses, from single shops to multi-branch operations managing thousands of SKUs.",
  },
  {
    icon: <ShoppingCartIcon />,
    title: "E-Commerce",
    tags: ["Online Storefronts", "WooCommerce", "Payment Flows", "Product Catalogs"],
    description:
      "Developed high-converting e-commerce stores and custom shopping solutions, integrating payment gateways and optimizing for performance and conversion.",
  },
  {
    icon: <AccountBalanceIcon />,
    title: "Banking & Finance",
    tags: ["Core Banking UI", "Compliance Features", "Reporting Tools", "Secure APIs"],
    description:
      "Contributed to banking software with a strong focus on security, compliance, and reliability for financial institutions requiring strict data integrity.",
  },
];

const Industries = () => {
  const { isDark } = useGetTheme();
  return (
    <Box
      sx={{
        p: { lg: 7, md: 4, xs: 4, sm: 4 },
        pt: { lg: 7, md: 4, xs: 4, sm: 4 },
      }}
    >
      <SectionHeader title="Industries I've Served" />
      <Typography variant="body1" sx={{ mb: 6, mt: -2 }}>
        8+ years across three distinct industries means I understand your domain,
        not just the code. I bring context, best practices, and proven patterns to
        every project.
      </Typography>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {industries.map((industry) => (
          <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }} key={industry.title}>
            <Box className={`industry-card ${isDark ? "dark" : "light"}`}>
              <Box className="industry-icon">{industry.icon}</Box>
              <Typography
                variant="h3"
                sx={{ mb: 1.5, mt: 1.5, fontSize: "1.05rem !important" }}
              >
                {industry.title}
              </Typography>
              <Box className="industry-tags" sx={{ mb: 2 }}>
                {industry.tags.map((tag) => (
                  <span key={tag} className="industry-tag">
                    {tag}
                  </span>
                ))}
              </Box>
              <Typography variant="body2">{industry.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Industries;
