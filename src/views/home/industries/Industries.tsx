"use client";

import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./industries.css";

const industries = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 22 }} />,
    title: "Retail & Grocery",
    proof: "Built POS and inventory systems used in daily retail and grocery store operations.",
    signal: "6+ years · Production-deployed",
    bullets: [
      "Barcode-based stock tracking",
      "Multi-branch inventory management",
      "Sales reporting and analytics",
      "Real-time low-stock alerts",
    ],
    featured: true,
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 22 }} />,
    title: "E-Commerce",
    proof: "Developed high-converting storefronts with integrated payment and order management.",
    signal: "Production-ready systems",
    bullets: [
      "Online storefront development",
      "Stripe & PayPal payment gateways",
      "Product catalog & search",
      "Order and fulfillment tracking",
    ],
  },
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 22 }} />,
    title: "Banking & Finance",
    proof: "Worked on secure, compliant financial systems with strict data handling requirements.",
    signal: "Compliance-focused builds",
    bullets: [
      "Core banking UI development",
      "Role-based access & compliance",
      "Secure REST APIs",
      "Audit logging & reporting",
    ],
  },
];

const IndustryCard = ({ ind }: { ind: typeof industries[0] }) => (
  <Box className={`industry-card${ind.featured ? " industry-card--featured" : ""}`}>
    <Box className="industry-card-top">
      <Box className="industry-icon">{ind.icon}</Box>
      <span className="industry-signal">{ind.signal}</span>
    </Box>
    <Typography className="industry-title">{ind.title}</Typography>
    <Typography className="industry-proof">{ind.proof}</Typography>
    <ul className="industry-bullet-list">
      {ind.bullets.map((b) => (
        <li key={b} className="industry-bullet-item">
          <span className="industry-bullet-dot" />
          {b}
        </li>
      ))}
    </ul>
  </Box>
);

const Industries = () => {
  return (
    <Box id="industries" className="page-section">
      <Box className="section-inner">
        <SectionHeader
          title="Industries I Work In"
          subtitle="Deep experience. Real understanding."
        />
        {/* Desktop grid */}
        <Box className="industries-desktop-grid">
          <Grid container spacing={3}>
            {industries.map((ind, index) => (
              <Grid
                size={{ lg: 4, md: 4, sm: 6 }}
                offset={{ sm: index === industries.length - 1 && industries.length % 2 !== 0 ? 3 : 0, md: 0 }}
                key={ind.title}
              >
                <IndustryCard ind={ind} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mobile horizontal scroll */}
        <Box className="industries-mobile-scroll">
          {industries.map((ind) => (
            <Box className="industries-mobile-card" key={ind.title}>
              <IndustryCard ind={ind} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Industries;
