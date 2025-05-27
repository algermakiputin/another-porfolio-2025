import { Box, Button, Typography } from "@mui/material"; 
import SendIcon from '@mui/icons-material/Send';

type Props = {
    hideButton?: boolean;
    title?: string;
    description?: string;
}
const PortfolioHeader = ({hideButton, title, description} : Props ) => {
    return (
        <Box sx={{background: '#fafafa', p: {lg: 7, md: 4, sm: 2}, textAlign: 'center'}}>
            <Box sx={{maxWidth: 700, margin: 'auto'}}>
                <Typography variant="h4" sx={{mb: 2}}>{ title ? title : 'Portfolio' }</Typography>
                <Typography variant="body1">{ description ? description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsum eaque totam cum fuga culpa nostrum blanditiis corrupti sequi dolore, distinctio ea, consequuntur et a quaerat praesentium. Perferendis, placeat aliquid.' }</Typography>
                { !hideButton && <Button sx={{mt: 2}} startIcon={<SendIcon />} className="home-btn portfolio" variant="contained" color="success">Hire Me</Button> }
            </Box> 
        </Box>
    );
}

export default PortfolioHeader;