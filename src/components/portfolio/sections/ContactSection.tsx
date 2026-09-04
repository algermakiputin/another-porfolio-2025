import Link from "next/link";
import { contact } from "../../../data/portfolio";

/**
 * Homepage closing CTA — one warm-cream conversion surface. One primary action
 * (the contact page) with a quiet email fallback. Social links live in the
 * footer's Connect column, not here. Keeps id="contact" for the nav scroll-spy.
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pf-section pf-contact"
      aria-labelledby="closing-cta-title"
    >
      <span className="pf-contact__arc" aria-hidden="true" />
      <span className="pf-contact__mark" aria-hidden="true" />

      <div className="pf-container pf-contact__inner">
        <div className="pf-contact__copy">
          <p className="pf-contact__eyebrow">{contact.availability}</p>
          <h2 id="closing-cta-title" className="pf-contact__title">
            Building a product across
            <br />
            web and mobile?
          </h2>
        </div>

        <div className="pf-contact__action">
          <p className="pf-contact__lead">
            I can help turn the requirements, workflows, and integrations into a
            reliable production system.
          </p>

          <Link href={contact.href} className="pf-contact__link">
            <span>Discuss an opportunity</span>
            <span className="pf-contact__arrow" aria-hidden="true">
              ↗
            </span>
          </Link>

          <a href={`mailto:${contact.email}`} className="pf-contact__email">
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
