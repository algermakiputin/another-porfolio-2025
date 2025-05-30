import * as React from 'react';
import { Box, Grid, Button } from "@mui/material";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './projects.css';
import ProjectCard from '../../../components/cards/project/ProjectCard';

const Projects = () => {
    const imageWidth = 275;
    const imageHeight = 190;
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, xs: 4, sm: 4},
                    pt: {lg: 7, md: 4, xs: 4, sm:4}
                }}>
            <SectionHeader title="Featured Projects" />
            <Grid container spacing={2} sx={{flexGrow: 1}}>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard
                        image='/images/projects/inventory-software.jpeg'
                        description='POSLite is a lightweight, web-based Point of Sale and Inventory Management System built with PHP and the CodeIgniter framework. Designed for small to medium-sized retail and wholesale businesses, it streamlines sales, inventory tracking, and expense management through an intuitive interface and essential features.' />
                </Grid>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard 
                        title='Hero Journals'
                        image='/images/projects/trading-journal.jpeg'
                        description='Hero Journals is a powerful tool designed to help traders log, analyze, and refine their trading strategies. Built using Laravel and React JS. It allows users to record trades, monitor performance metrics, and gain insights into trading habits, facilitating continuous improvement and informed decision-making.'
                        />
                </Grid>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard
                        title='Filipino Alamat'
                        description='Filipino is a free android app that brings over traditional Filipino legends (alamat) to your fingertips. Designed culture enthusiasts, it offers a curated collection of folklore that explains natural phenomena, moral values, and cultural origins. Users can read and listen to stories and anytime, anywhere with user-friendly interface. '
                        image='/images/projects/filipino-alamat.jpeg'
                    />
                </Grid>
                <Grid size={{md: 6, sm: 6}}>
                    <ProjectCard
                        image='/images/projects/posmobile.png'
                        title='StockApp'
                        description='StockApp is a user-friendly Android application designed to streamline inventory tracking for small businesses. With features like real-time stock updates, sales recordings, and low-stock alerts, it simplifies the process of managing products, suppliers, and transactions.'
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Projects;