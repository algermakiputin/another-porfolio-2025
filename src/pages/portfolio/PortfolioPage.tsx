import { Box } from "@mui/material";
import React, {Fragment, useEffect, useState} from "react";
import PortfolioLayout from "./PortfolioLayout";
import PageHeader from "../../components/template/PageHeader/PageHeader";

const PortfolioPage = () => {
    return (
        <Fragment>
            <Box>
                <PageHeader />
                <PortfolioLayout />
            </Box>
        </Fragment>
    );
}

export default PortfolioPage;