import { Box, Button, Container, Grid, TextField } from "@mui/material";
import PageHeader from "../../components/template/PageHeader/PageHeader";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useForm, Controller, Control } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactPage = () => {
    const [loading, setLoading] = useState(false);
    const [formSpreeErrors, setFormSpreeErrors] = useState<string>('');
    const { register, handleSubmit, watch, formState: { errors }, control, reset } = useForm();

    const onSubmitHandler = async (data: any) => {
        const formData = new FormData();
        formData.append('name', data?.name);
        formData.append('email', data?.email);
        formData.append('message', data?.message);
        formData.append('service', data?.service);
        setLoading(true);
        await fetch(process.env.REACT_APP_FORM_SPREE_URL ?? '', { 
            method: 'POST',
            body: formData
        }).then(response => {
            if (response?.ok) {
                reset();
                alert("Form submitted successfully"); 
            } else {
                response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    setFormSpreeErrors(data["errors"].map((error: any) => error["message"]).join(", "));
                } else {
                    setFormSpreeErrors("Oops! There was a problem submitting your form");
                }
                })
            }
        }).catch(() => setFormSpreeErrors("Oops! There was a problem submitting your form"));
        setLoading(false);
    };

    return (
        <>
            <PageHeader 
                hideButton={true} 
                title="Contact"
                mailTo="algerapudmakiputin@gmail.com"
                socials={true}
                description="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to" 
                anotherDescription="Want to get connected? Follow me on the social channels below."
                />
            <Box sx={{p: {lg: 7, md: 4, xs: 2}}}>
                <Container sx={{maxWidth: 900, margin: 'auto'}} maxWidth={false}>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <Grid container spacing={2}>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <TextField 
                                        label="Name" 
                                        type="text" 
                                        {...register('name', { required: "Name is required"})} 
                                        error={errors?.name ? true : false}
                                        />
                                    { errors?.name && <FormHelperText error>{ String(errors?.name?.message) }</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <TextField 
                                        label="Email" 
                                        type="email" 
                                        {...register('email', { 
                                            required: "Email address is required", 
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                                }
                                            }
                                        )
                                        }
                                        error={errors?.email ? true : false}
                                        />
                                    { errors?.email && <FormHelperText error>{ String(errors?.email.message) }</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="service-label">Select a service you're interested in</InputLabel>
                                    <Select
                                        labelId="service-label-id"
                                        id="service-select"
                                        defaultValue={""}
                                        label={"Select a service you're interested in"}
                                        {...register('service', { required: "Service is required"})}
                                        error={errors?.service ? true : false}
                                    >
                                        <MenuItem value={""}>Select Service</MenuItem>
                                        <MenuItem value={"Mobile App Development"}>Mobile App Development</MenuItem>
                                        <MenuItem value={"Web Development"}>Web Development</MenuItem>
                                        <MenuItem value={"API Development"}>API Development</MenuItem>
                                    </Select>
                                    { errors?.service && <FormHelperText error>{ String(errors?.service?.message) }</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={12}>
                                <FormControl fullWidth>
                                    <TextField 
                                        rows={10} 
                                        multiline 
                                        label="Your message" 
                                        {...register('message', { required: true})} 
                                        error={errors?.message ? true : false}
                                        />
                                    { errors?.name && <FormHelperText error>{ String(errors?.name?.message) }</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid size={12}>
                                <Controller
                                    control={control}
                                    name="recaptcha"
                                    rules={{ required: "true" }}
                                    render={({ field }) => (
                                        <ReCAPTCHA
                                            sitekey={"6Lf2lFQrAAAAAEn8EO8yi8NeoRHqap80ZXlTuMo0"}
                                            onChange={field.onChange}
                                        />
                                    )}
                                />
                                { errors?.recaptcha && <FormHelperText error>{ "Recaptcha is required" }</FormHelperText>}
                            </Grid>
                            <Button disabled={loading} type="submit" endIcon={<SendIcon />} className="home-btn portfolio" variant="contained" color="success">Send Now</Button>
                        </Grid>
                    </form>
                </Container>
            </Box>
        </>
    );
}

export default ContactPage;