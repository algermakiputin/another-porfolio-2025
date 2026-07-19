"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useGetTheme from "../../hooks/useGetTheme";
import "./blogcard.css";

type Props = {
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  readTime?: string;
  link: string;
  category?: string;
  index?: number;
};

const BlogCard = ({ title, description, image, publishedDate, readTime, link, category, index = 0 }: Props) => {
  const { isDark } = useGetTheme();
  const isCompact = index > 0;
  const isExternal = link.startsWith("http");

  return (
    <Card elevation={0} className={`blog-card ${isDark ? "dark" : "light"}${isCompact ? " blog-card--compact" : " blog-card--featured"}`}>
      <Box className="blog-image-wrap">
        <img src={image} alt={title} className="blog-card-image" loading="lazy" />
      </Box>

      <CardContent className="blog-card-content">
        {category && (
          <Box className="blog-meta-row">
            <span className="blog-category-tag">{category.toUpperCase()}</span>
          </Box>
        )}

        <Typography component="div" className="blog-title">
          {title}
        </Typography>

        <Typography className="blog-date-text">
          {publishedDate}{readTime ? ` · ${readTime}` : ""}
        </Typography>

        <Typography variant="body2" className="blog-description">
          {description}
        </Typography>

        <Link
          href={link}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          className="blog-read-more"
        >
          <span>Read more</span>
          <ArrowForwardIcon className="read-more-arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
