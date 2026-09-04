"use client";

import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { trackEvent } from "../../lib/analytics";
import { contact, socials } from "../../data/portfolio";
import "./contact.css";

// ── Response process (no guaranteed outcomes, only expectations) ──
const STEPS = [
  {
    n: "01",
    title: "Review",
    body: "I read your project brief and check whether I can help.",
  },
  {
    n: "02",
    title: "Conversation",
    body: "We discuss goals, constraints, scope, and priorities.",
  },
  {
    n: "03",
    title: "Direction",
    body: "I recommend the clearest next step and project approach.",
  },
];

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "API Development",
  "Cloud & DevOps",
  "Other",
];

const RECAPTCHA_SITE_KEY = "6Lf2lFQrAAAAAEn8EO8yi8NeoRHqap80ZXlTuMo0";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeokjklo";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
  recaptcha: string;
};

type Status = "idle" | "sending" | "success" | "error";

// Direct channels: real, active social links only (email shown separately).
const directLinks = socials.filter((s) => !s.href.startsWith("mailto:"));

const ContactPage = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { service: "" } });

  const onValid = async (data: FormValues) => {
    setStatus("sending");
    setErrorMsg("");

    // Preserve the exact payload keys the Formspree endpoint expects.
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("service", data.service);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        reset();
        recaptchaRef.current?.reset();
        setStatus("success");
        trackEvent("generate_lead", { service: data.service ?? "unknown" });
      } else {
        // Keep the user's input on failure — only surface the reason.
        const body = await response.json().catch(() => null);
        const msg =
          body && Object.hasOwn(body, "errors")
            ? body.errors.map((e: { message: string }) => e.message).join(", ")
            : "Something went wrong sending your brief. Please try again.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Couldn't reach the server. Check your connection and try again."
      );
      setStatus("error");
    }
  };

  // Move keyboard focus to the first field that failed validation.
  const onInvalid = (formErrors: typeof errors) => {
    const order: (keyof FormValues)[] = ["name", "email", "service", "message"];
    const first = order.find((k) => formErrors[k]);
    if (first) setFocus(first);
  };

  return (
    <div className="contact-page">
      {/* ═══════════════ Hero ═══════════════ */}
      <section className="contact-hero">
        <span className="contact-hero__grid" aria-hidden="true" />
        <span className="contact-hero__mark contact-hero__mark--tl" aria-hidden="true" />
        <span className="contact-hero__mark contact-hero__mark--br" aria-hidden="true" />

        <div className="pf-container contact-hero__inner">
          <div className="contact-hero__title">
            <p className="contact-kicker">Contact / Project Intake</p>
            <h1 className="contact-hero__headline">
              Let&apos;s build something that actually works.
            </h1>
          </div>

          <div className="contact-hero__brief">
            <p className="contact-hero__lead">
              Tell me about your project. I&apos;ll help turn it into a clear,
              scalable, production-ready system.
            </p>

            <dl className="contact-status">
              <div className="contact-status__row">
                <dt>Status</dt>
                <dd>
                  <span className="availability">
                    <span className="availability__dot" aria-hidden="true" />
                    {contact.availability}
                  </span>
                </dd>
              </div>
              <div className="contact-status__row">
                <dt>Response</dt>
                <dd>{contact.responseTime}</dd>
              </div>
              <div className="contact-status__row">
                <dt>Focus</dt>
                <dd>{contact.focus}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ═══════════════ Project intake ═══════════════ */}
      <section className="project-intake">
        <div className="pf-container project-intake__inner">
          {/* ── Form ── */}
          <div className="project-intake__form">
            <header className="project-form__header">
              <p className="project-form__eyebrow">Project Intake / 01</p>
              <h2>Tell me what you&apos;re building.</h2>
              <p className="project-form__sub">
                A short overview is enough. We can work through the details
                together.
              </p>
            </header>

            {/* Live region — announces submission outcome */}
            <div className="project-status" role="status" aria-live="polite">
              {status === "success" && (
                <p className="project-status__msg is-success">
                  Message received. I&apos;ll be in touch —{" "}
                  {contact.responseTime.toLowerCase()}.
                </p>
              )}
              {status === "error" && (
                <p className="project-status__msg is-error">{errorMsg}</p>
              )}
            </div>

            <form
              className="project-form"
              onSubmit={handleSubmit(onValid, onInvalid)}
              noValidate
            >
              <div className="project-grid">
                <div className="project-field project-field--half">
                  <label htmlFor="name">
                    <span className="project-field__num">01</span>Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name", {
                      required: "Enter your name so I know who I'm talking to.",
                    })}
                  />
                  {errors.name && (
                    <p className="project-field__error" id="name-error" role="alert">
                      {String(errors.name.message)}
                    </p>
                  )}
                </div>

                <div className="project-field project-field--half">
                  <label htmlFor="email">
                    <span className="project-field__num">02</span>Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      required: "Add an email address so I can reply.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "That email doesn't look right — check the format.",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="project-field__error" id="email-error" role="alert">
                      {String(errors.email.message)}
                    </p>
                  )}
                </div>

                <div className="project-field project-field--full">
                  <label htmlFor="service">
                    <span className="project-field__num">03</span>Project type
                  </label>
                  <div className="project-field__select">
                    <select
                      id="service"
                      defaultValue=""
                      aria-invalid={errors.service ? "true" : undefined}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                      {...register("service", {
                        required: "Pick the option closest to your project.",
                      })}
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.service && (
                    <p
                      className="project-field__error"
                      id="service-error"
                      role="alert"
                    >
                      {String(errors.service.message)}
                    </p>
                  )}
                </div>

                <div className="project-field project-field--full">
                  <label htmlFor="message">
                    <span className="project-field__num">04</span>What are you
                    building?
                  </label>
                  <textarea
                    id="message"
                    rows={7}
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    placeholder="Goals, rough scope, timeline, anything relevant…"
                    {...register("message", {
                      required: "A few sentences about the project is enough.",
                    })}
                  />
                  {errors.message && (
                    <p
                      className="project-field__error"
                      id="message-error"
                      role="alert"
                    >
                      {String(errors.message.message)}
                    </p>
                  )}
                </div>

                <div className="project-field project-field--full">
                  <Controller
                    control={control}
                    name="recaptcha"
                    rules={{ required: "Please complete the verification below." }}
                    render={({ field }) => (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  {errors.recaptcha && (
                    <p
                      className="project-field__error"
                      id="recaptcha-error"
                      role="alert"
                    >
                      {String(errors.recaptcha.message)}
                    </p>
                  )}
                </div>

                <div className="project-submit-row project-field--full">
                  <button
                    className="project-submit"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    <span>
                      {status === "sending" ? "Sending…" : "Send project brief"}
                    </span>
                    <span className="project-submit__arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                  <p className="project-submit__note">
                    No spam. I&apos;ll personally reply —{" "}
                    {contact.responseTime.toLowerCase()}.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* ── Process + direct channels ── */}
          <aside className="project-intake__aside">
            <div className="next-steps">
              <p className="aside-eyebrow">What happens next</p>
              <ol className="next-steps__list">
                {STEPS.map((s) => (
                  <li key={s.n} className="next-step">
                    <span className="next-step__num">{s.n}</span>
                    <div className="next-step__body">
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="direct-channels">
              <p className="aside-eyebrow">Prefer email?</p>
              <a
                className="direct-channels__email"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
              <div className="direct-channels__socials">
                {directLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="direct-channels__link"
                    onClick={() =>
                      trackEvent("social_click", {
                        link_type: s.label.toLowerCase(),
                      })
                    }
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
