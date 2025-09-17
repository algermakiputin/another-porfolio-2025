import { Box } from "@mui/material";
import React, { Fragment } from "react";
import PortfolioLayout from "./PortfolioLayout";
import PageHeader from "../../components/template/PageHeader/PageHeader";

const PortfolioPage = () => {
  return (
    <Fragment>
      <Box>
        <PageHeader description="I build clean, functional web applications from front to back. This portfolio is a collection of projects that reflect my love for simple design, efficient code, and thoughtful user experiences. You'll find work here that spans both frontend and backend built with tools like ReactJS, React Native, Codeigniter, Laravel and more. Each project is a snapshot of how I approach challenges, write code, and keep learning. Thanks for stopping by feel free to explore and reach out if you'd like to connect!" />
        <PortfolioLayout />
      </Box>
    </Fragment>
  );
};

export default PortfolioPage;
