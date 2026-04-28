"use client";

import { Box, Typography } from "@mui/material";
import './sectionHeader.css';

type Props = {
  title: string;
  subtitle?: string;
  action?: { label: string; onClick: () => void };
};

const SectionHeader = ({ title, subtitle, action }: Props) => {
  return (
    <Box className="section-header-wrapper">
      <Box className="section-header-left">
        <Typography variant="h2" className="section-title">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" className="section-subtitle">
            {subtitle}
          </Typography>
        )}
      </Box>
      {action && (
        <button className="section-action-link" onClick={action.onClick}>
          {action.label} →
        </button>
      )}
    </Box>
  );
};

export default SectionHeader;
