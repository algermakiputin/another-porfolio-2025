import { Box, Stack, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ContrastIcon from '@mui/icons-material/Contrast';
import React, { useContext, useState } from 'react';
import './darkModeToggle.css';
import { useThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
    const { toggleTheme, setDarkMode } = useThemeContext();
    const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode((mode: boolean) => !mode);
    }   
    return (
        <Box sx={{pt: 4}}>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} sx={{justifyContent: 'center', mb: 2}}>
                <ContrastIcon fontSize='small' />
                <Typography variant='body2' fontWeight={"bold"} color='#fff'>Dark Mode</Typography>
            </Stack>
            
            <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box>
                    <input type="checkbox" className="checkbox" id="checkbox" onChange={onCheckHandler} />
                    <label className="checkbox-label" htmlFor='checkbox'>
                        <span className="ball"></span>
                    </label>
                </Box>
            </Box>
        </Box>
    );
}

export default DarkModeToggle;