"use client";

import { Box, IconButton, Typography } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import { useState, useEffect, useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useGetWindowsDimension from "../../../hooks/useGetWindowsDimension";
import "./reviews.css";

const STARS = "★★★★★";

const testimonials = [
  {
    highlight: "The system exceeded our expectations — fast, reliable, exactly what we needed.",
    quote: "Alger took the time to understand our operations and delivered a solution that works flawlessly every day.",
    name: "Carlos R.",
    role: "Car Parts Business Owner",
    business: "3-location auto parts chain",
    avatar: "/images/reviews/carlos.webp",
  },
  {
    highlight: "Streamlined our operations and noticeably increased efficiency.",
    quote: "He built a system tailored to how we actually work. The impact was immediate.",
    name: "Ian A.",
    role: "Grocery Business Owner",
    business: "Multi-branch grocery store",
    avatar: "/images/reviews/ian.webp",
  },
  {
    highlight: "Delivered on time, exactly as promised. Highly recommended.",
    quote: "Professional, communicative, and skilled — with great attention to detail throughout.",
    name: "Arnel S.",
    role: "Grocery Store Owner",
    business: "Independent grocery store",
    avatar: "/images/reviews/arnel.webp",
  },
  {
    highlight: "Sales went up significantly within the first month after launch.",
    quote: "Alger built our e-commerce platform from scratch and delivered exceptional work.",
    name: "Mark T.",
    role: "E-commerce Store Owner",
    business: "E-commerce, 500+ products",
    avatar: "/images/reviews/carlos.webp",
    featured: true,
  },
  {
    highlight: "Our team adopted the dashboard immediately — zero training needed.",
    quote: "Intuitive, secure, and built to the exact specifications we required.",
    name: "Patricia L.",
    role: "Banking Operations Manager",
    business: "Regional bank, 200+ staff",
    avatar: "/images/reviews/ian.webp",
  },
  {
    highlight: "Fast turnaround, clean code, and a pleasure to work with.",
    quote: "Will definitely work with Alger again on our next project.",
    name: "Jose M.",
    role: "Retail Business Owner",
    business: "Retail chain, 5 locations",
    avatar: "/images/reviews/arnel.webp",
  },
];

const Reviews = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const [width] = useGetWindowsDimension();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const paused = useRef(false);

  const isMobile = width > 0 && width <= 640;
  const isTablet = width > 640 && width <= 899;
  const cardsPerPage = isMobile ? 1 : isTablet ? 2 : 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const goTo = (next: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setPage(next);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((page - 1 + totalPages) % totalPages, "left");
  const next = () => goTo((page + 1) % totalPages, "right");

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (!paused.current) {
        setDirection("right");
        setAnimating(true);
        setTimeout(() => {
          setPage((p) => (p + 1) % totalPages);
          setAnimating(false);
        }, 300);
      }
    }, 4500);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  const visible = testimonials.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <Box className="page-section">
      <Box className="section-inner">
        <SectionHeader
          title="What Clients Say"
          subtitle="Trusted by businesses that care about quality."
        />

        <Box
          className="reviews-carousel"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
        >
          <Box
            className={`reviews-track ${animating ? (direction === "right" ? "slide-out-left" : "slide-out-right") : "slide-in"}`}
          >
            {visible.map((t) => (
              <Box
                className={`review-card${(t as any).featured ? " review-card--featured" : ""}`}
                key={t.name}
              >
                {(t as any).featured && (
                  <span className="review-featured-badge">Featured</span>
                )}

                <Box className="review-stars">
                  {STARS.split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </Box>

                {/* Bold outcome line */}
                <Typography className="review-highlight">
                  &ldquo;{t.highlight}&rdquo;
                </Typography>

                {/* Supporting context */}
                <Typography className="review-quote">
                  {t.quote}
                </Typography>

                <Box className="review-profile">
                  <img src={t.avatar} alt={t.name} className="review-avatar" width={46} height={46} loading="lazy" />
                  <Box>
                    <Typography className="review-name">{t.name}</Typography>
                    <Typography className="review-role">{t.role}</Typography>
                    {(t as any).business && (
                      <Typography className="review-business">{(t as any).business}</Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Controls */}
          <Box className="reviews-controls">
            <IconButton className="reviews-arrow" onClick={prev} aria-label="Previous">
              <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
            </IconButton>
            <Box className="reviews-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`reviews-dot ${i === page ? "active" : ""}`}
                  onClick={() => goTo(i, i > page ? "right" : "left")}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </Box>
            <IconButton className="reviews-arrow" onClick={next} aria-label="Next">
              <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
