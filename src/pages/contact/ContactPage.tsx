import { Box, Button, Container, Grid, TextField } from "@mui/material";
import PageHeader from "../../components/template/PageHeader/PageHeader";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

const ContactPage = () => {
    const [service, setService] = useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setService(event.target.value);
    };

    return (
        <>
            <PageHeader 
                hideButton={true} 
                title="Contact" 
                description="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to simon.doe@yourwebsite.com" 
                anotherDescription="Want to get connected? Follow me on the social channels below."
                />
            <Box sx={{p: {lg: 7, md: 4, xs: 2}}}>
                <Container sx={{maxWidth: 900, margin: 'auto'}} maxWidth={false}>
                    <Grid container spacing={2}>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <TextField label="Name" type="text"/>
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <TextField label="Email" type="email"/>
                            </FormControl>
                        </Grid>
                        <Grid size={12}>
                            <FormControl fullWidth>
                                <InputLabel id="service-label">Select a service you're interested in</InputLabel>
                                <Select
                                    labelId="service-label-id"
                                    id="service-select"
                                    value={service}
                                    label={"Select a service you're interested in"}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={""}>Select Service</MenuItem>
                                    <MenuItem value={"Mobile App Development"}>Mobile App Development</MenuItem>
                                    <MenuItem value={"Web Development"}>Web Development</MenuItem>
                                    <MenuItem value={"API Development"}>API Development</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={12}>
                            <FormControl fullWidth>
                                <TextField rows={10} multiline label="Your message" />
                            </FormControl>
                        </Grid>
                        <Button endIcon={<SendIcon />} className="home-btn portfolio" variant="contained" color="success">Send Now</Button>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default ContactPage;