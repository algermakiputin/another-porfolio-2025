"use client";

import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useThemeContext();

    return (
        <IconButton
            onClick={() => setDarkMode((m: boolean) => !m)}
            aria-label="Toggle dark mode"
            size="small"
            sx={{
                opacity: 0.72,
                color: darkMode ? 'rgba(255,255,255,0.7)' : '#475569',
                '&:hover': {
                    opacity: 1,
                    background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                    color: darkMode ? '#fff' : '#0f172a',
                },
                transition: 'color 0.15s ease, background 0.15s ease, opacity 0.15s ease',
            }}
        >
            {darkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </IconButton>
    );
};

export default DarkModeToggle;
