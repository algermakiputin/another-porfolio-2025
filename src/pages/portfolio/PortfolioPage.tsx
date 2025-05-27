import { Box } from "@mui/material";
import React, {Fragment} from "react";
import PortfolioLayout from "./PortfolioLayout"; 
import PortfolioHeader from "./header/PortfolioHeader";

const PortfolioPage = () => {
    return (
        <Fragment>
            <Box>
                <PortfolioHeader />
                <PortfolioLayout />
            </Box>
        </Fragment>
    );
}

export default PortfolioPage;