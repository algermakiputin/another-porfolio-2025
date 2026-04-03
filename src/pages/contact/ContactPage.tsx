import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Chip,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import useGetTheme from "../../hooks/useGetTheme";
import './contact.css';

const ContactPage = () => {
  const { isDark } = useGetTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formSpreeErrors, setFormSpreeErrors] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmitHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("message", data?.message);
    formData.append("service", data?.service);
    setLoading(true);
    await fetch(process.env.REACT_APP_FORM_SPREE_URL ?? "", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response?.ok) {
          reset();
          setSuccess(true);
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              setFormSpreeErrors(
                data["errors"].map((error: any) => error["message"]).join(", ")
              );
            } else {
              setFormSpreeErrors("Oops! There was a problem submitting your form");
            }
          });
        }
      })
      .catch(() =>
        setFormSpreeErrors("Oops! There was a problem submitting your form")
      );
    setLoading(false);
  };

  return (
    <>
      {/* Page header */}
      <Box
        className="contact-header"
        sx={{
          background: isDark
            ? "linear-gradient(135deg, #0b1120 0%, #111827 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f0fdf8 100%)",
          p: { lg: 7, md: 5, xs: 4 },
          pb: { lg: 5, md: 4, xs: 3 },
          textAlign: "center",
          borderBottom: "1px solid rgba(128,128,128,0.08)",
        }}
      >
        <Box sx={{ maxWidth: 600, margin: "auto" }}>
          <Typography
            variant="h2"
            sx={{ mb: 1.5, fontSize: { lg: "2.2em", xs: "1.8em" }, fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Let&rsquo;s Work Together
          </Typography>
          <Typography variant="body1" sx={{ mb: 0.75, opacity: 0.75 }}>
            Have a project in mind? Fill out the form below or email me directly at{" "}
            <a className="link" href="mailto:algerapudmakiputin@gmail.com">
              algerapudmakiputin@gmail.com
            </a>
          </Typography>

          {/* Trust chips */}
          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap", mt: 3 }}>
            <Chip
              icon={<AccessTimeIcon sx={{ fontSize: "0.85rem !important" }} />}
              label="Responds within 24 hours"
              size="small"
              className="contact-chip"
            />
            <Chip
              icon={<PublicIcon sx={{ fontSize: "0.85rem !important" }} />}
              label="Available for remote work"
              size="small"
              className="contact-chip"
            />
            <Chip
              icon={<EmailIcon sx={{ fontSize: "0.85rem !important" }} />}
              label="algerapudmakiputin@gmail.com"
              size="small"
              className="contact-chip"
              component="a"
              href="mailto:algerapudmakiputin@gmail.com"
              clickable
            />
          </Box>
        </Box>
      </Box>

      {/* Form */}
      <Box sx={{ p: { lg: 7, md: 4, xs: 2 }, pt: { lg: 6, md: 4, xs: 3 } }}>
        <Container sx={{ maxWidth: 720, margin: "auto" }} maxWidth={false}>

          {success && (
            <Alert icon={<CheckIcon fontSize="inherit" />} sx={{ mb: 3, borderRadius: 2 }} severity="success">
              Thank you! Your message has been received. I will be in touch soon.
            </Alert>
          )}
          {formSpreeErrors && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {formSpreeErrors}
            </Alert>
          )}

          <Card
            elevation={0}
            sx={{
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 3,
              p: { lg: 4, md: 3, xs: 2.5 },
              background: "var(--mui-palette-background-paper)",
              boxShadow: isDark
                ? "0 4px 24px rgba(0,0,0,0.25)"
                : "0 4px 24px rgba(0,0,0,0.06)",
              ...(isDark && { borderColor: "rgba(255,255,255,0.07)" }),
            }}
          >
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Grid container spacing={2.5}>

                <Grid size={{ md: 6, xs: 12 }}>
                  <FormControl fullWidth>
                    <TextField
                      label="Full Name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      error={!!errors?.name}
                    />
                    {errors?.name && (
                      <FormHelperText error>{String(errors.name.message)}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid size={{ md: 6, xs: 12 }}>
                  <FormControl fullWidth>
                    <TextField
                      label="Email Address"
                      type="email"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors?.email}
                    />
                    {errors?.email && (
                      <FormHelperText error>{String(errors.email.message)}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid size={12}>
                  <FormControl fullWidth>
                    <InputLabel id="service-label">Service</InputLabel>
                    <Select
                      labelId="service-label"
                      id="service-select"
                      defaultValue={""}
                      label="Service"
                      {...register("service", { required: "Please select a service" })}
                      error={!!errors?.service}
                    >
                      <MenuItem value={""} disabled>Select a service</MenuItem>
                      <MenuItem value={"Web Development"}>Web Development</MenuItem>
                      <MenuItem value={"Mobile App Development"}>Mobile App Development</MenuItem>
                      <MenuItem value={"API Development"}>API Development</MenuItem>
                      <MenuItem value={"Cloud & DevOps"}>Cloud &amp; DevOps</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                    {errors?.service && (
                      <FormHelperText error>{String(errors.service.message)}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid size={12}>
                  <FormControl fullWidth>
                    <TextField
                      rows={7}
                      multiline
                      label="Tell me about your project"
                      {...register("message", { required: "Message is required" })}
                      error={!!errors?.message}
                    />
                    {errors?.message && (
                      <FormHelperText error>{String(errors.message.message)}</FormHelperText>
                    )}
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
                  {errors?.recaptcha && (
                    <FormHelperText error>Please complete the reCAPTCHA</FormHelperText>
                  )}
                </Grid>

                <Grid size={12}>
                  <Button
                    disabled={loading}
                    type="submit"
                    endIcon={<SendIcon />}
                    variant="contained"
                    className="contact-submit-btn"
                    size="large"
                    fullWidth
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Grid>

              </Grid>
            </form>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
