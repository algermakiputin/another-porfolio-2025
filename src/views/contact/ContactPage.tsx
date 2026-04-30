"use client";

import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import useGetTheme from "../../hooks/useGetTheme";
import { trackEvent } from "../../lib/analytics";
import "./contact.css";

const steps = [
  { label: "I review your message within 24 hours" },
  { label: "We discuss your goals and requirements" },
  { label: "I propose a clear plan and timeline" },
];

const reasons = [
  "8+ years building production-ready systems",
  "Deep experience in retail, fintech & e-commerce",
  "Focused on performance and scalability",
  "Available for remote work worldwide",
];

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
    await fetch("https://formspree.io/f/xeokjklo", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((response) => {
        if (response?.ok) {
          reset();
          setSuccess(true);
          trackEvent("generate_lead", { service: data?.service ?? "unknown" });
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              setFormSpreeErrors(
                data["errors"].map((error: any) => error["message"]).join(", "),
              );
            } else {
              setFormSpreeErrors(
                "Oops! There was a problem submitting your form",
              );
            }
          });
        }
      })
      .catch(() =>
        setFormSpreeErrors("Oops! There was a problem submitting your form"),
      );
    setLoading(false);
  };

  return (
    <>
      {/* ── Hero ── */}
      <Box
        className="contact-hero"
        sx={{
          background: isDark
            ? "linear-gradient(160deg, #0b1220 0%, #111827 100%)"
            : "#ffffff",
        }}
      >
        <Box aria-hidden="true" className="contact-hero-bg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <defs>
              <pattern
                id="contact-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke={isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"}
                  strokeWidth="1"
                />
              </pattern>
              <radialGradient id="contact-glow" cx="80%" cy="40%" r="45%">
                <stop
                  offset="0%"
                  stopColor="#22C55E"
                  stopOpacity={isDark ? "0.14" : "0.18"}
                />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect
              width="1440"
              height="400"
              fill="url(#contact-grid)"
              opacity="0.5"
            />
            <circle cx="1150" cy="180" r="260" fill="url(#contact-glow)" />
          </svg>
        </Box>

        <Box className="contact-hero-inner">
          <Box className="hero-badge">
            <span className="hero-badge-dot" />
            AVAILABLE FOR NEW PROJECTS
          </Box>
          <Typography variant="h1" className="contact-hero-title">
            Let's build something
            <br />
            that actually works.
          </Typography>
          <Typography className="contact-hero-sub">
            Tell me about your project — I'll help you turn it into a scalable,
            production-ready system.
          </Typography>
        </Box>
      </Box>

      {/* ── Body ── */}
      <Box className="contact-body">
        <Grid container spacing={5} alignItems="flex-start">
          {/* ── Left: Form ── */}
          <Grid size={{ lg: 7, md: 7, xs: 12 }}>
            {success && (
              <Alert
                icon={<CheckIcon fontSize="inherit" />}
                sx={{ mb: 3, borderRadius: 2 }}
                severity="success"
              >
                Thank you! Your message has been received. I'll be in touch
                within 24 hours.
              </Alert>
            )}
            {formSpreeErrors && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {formSpreeErrors}
              </Alert>
            )}

            <Card
              elevation={0}
              className={`contact-form-card${isDark ? " dark" : ""}`}
            >
              <Typography className="contact-form-section-label">
                Project Details
              </Typography>
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
                        <FormHelperText error>
                          {String(errors.name.message)}
                        </FormHelperText>
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
                        <FormHelperText error>
                          {String(errors.email.message)}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid size={12}>
                    <FormControl fullWidth>
                      <InputLabel id="service-label">Service</InputLabel>
                      <Select
                        labelId="service-label"
                        defaultValue={""}
                        label="Service"
                        {...register("service", {
                          required: "Please select a service",
                        })}
                        error={!!errors?.service}
                      >
                        <MenuItem value={""} disabled>
                          Select a service
                        </MenuItem>
                        <MenuItem value={"Web Development"}>
                          Web Development
                        </MenuItem>
                        <MenuItem value={"Mobile App Development"}>
                          Mobile App Development
                        </MenuItem>
                        <MenuItem value={"API Development"}>
                          API Development
                        </MenuItem>
                        <MenuItem value={"Cloud & DevOps"}>
                          Cloud &amp; DevOps
                        </MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                      </Select>
                      {errors?.service && (
                        <FormHelperText error>
                          {String(errors.service.message)}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid size={12}>
                    <FormControl fullWidth>
                      <TextField
                        rows={6}
                        multiline
                        label="Tell me about your project"
                        {...register("message", {
                          required: "Message is required",
                        })}
                        error={!!errors?.message}
                      />
                      {errors?.message && (
                        <FormHelperText error>
                          {String(errors.message.message)}
                        </FormHelperText>
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
                      <FormHelperText error>
                        Please complete the reCAPTCHA
                      </FormHelperText>
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
                      {loading ? "Sending..." : "Send Project Details"}
                    </Button>
                    <Typography className="contact-reassurance">
                      No spam. I'll personally respond within 24 hours.
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>

          {/* ── Right: Info panel ── */}
          <Grid size={{ lg: 5, md: 5, xs: 12 }}>
            <Box className="contact-info-panel">
              {/* What happens next */}
              <Box className="contact-info-block">
                <Typography component="h3" className="contact-info-heading">
                  What happens next?
                </Typography>
                <Box className="contact-steps">
                  {steps.map((step, i) => (
                    <Box key={i} className="contact-step">
                      <Box className="contact-step-num">{i + 1}</Box>
                      <Typography className="contact-step-label">
                        {step.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Why work with me */}
              <Box className="contact-info-block">
                <Typography component="h3" className="contact-info-heading">
                  Why work with me?
                </Typography>
                <Box className="contact-reasons">
                  {reasons.map((r, i) => (
                    <Box key={i} className="contact-reason">
                      <CheckCircleOutlineIcon className="contact-reason-icon" />
                      <Typography className="contact-reason-text">
                        {r}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Direct email */}
              <Box className="contact-info-block contact-direct-email">
                <Typography component="h3" className="contact-info-heading">
                  Prefer email?
                </Typography>
                <Typography className="contact-direct-sub">
                  Reach me directly at:
                </Typography>
                <a
                  href="mailto:algerapudmakiputin@gmail.com"
                  className="contact-email-link"
                >
                  algerapudmakiputin@gmail.com
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactPage;
