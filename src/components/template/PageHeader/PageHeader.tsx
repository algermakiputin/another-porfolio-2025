import { Box, Button, Typography } from "@mui/material"; 
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router";
import useGetTheme from "../../../hooks/useGetTheme";

type Props = {
    hideButton?: boolean;
    title?: string;
    description?: string;
    anotherDescription?: string;
}
const PageHeader = ({hideButton, title, description, anotherDescription} : Props ) => {
    const { isDark } = useGetTheme();
    const navigate = useNavigate();
    const handleHireMe = () => {
        navigate('/contact');
    }
    return (
        <Box sx={{
                background: isDark ? 'var(--mui-palette-background-default)' : 'var(--mui-palette-background-paper)', 
                p: {lg: 7, md: 4, sm: 4, sx: 4}, 
                textAlign: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
            <Box sx={{
                    maxWidth: {lg: 780, md: 600, sm: 350, xs: 350}, 
                    margin: 'auto',
                    paddingTop: { lg: 2, xs: 4},
                    paddingBottom: { lg: 2, xs: 4}
                    }}>
                <Typography variant="h2" sx={{mb: 2, fontSize: '2em', fontWeight: 'bold'}}>{ title ? title : 'Portfolio' }</Typography>
                <Typography variant="body1">{ description ? description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsum eaque totam cum fuga culpa nostrum blanditiis corrupti sequi dolore, distinctio ea, consequuntur et a quaerat praesentium. Perferendis, placeat aliquid.' }</Typography>
                { anotherDescription && <Typography sx={{mt: 2}}>{anotherDescription}</Typography> }
                { !hideButton && <Button onClick={handleHireMe} sx={{mt: 2}} startIcon={<SendIcon />} className="home-btn portfolio" variant="contained" color="success">Hire Me</Button> }
            </Box> 
        </Box>
    );
}

export default PageHeader;