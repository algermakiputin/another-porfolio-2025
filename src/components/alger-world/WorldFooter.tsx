"use client";

import Link from "next/link";
import { footerNav, serviceLinks, socials } from "../../data/portfolio";
import { trackEvent } from "../../lib/analytics";

export default function WorldFooter() {
  return (
    <footer className="site-footer">
      <div className="wrapper footer-inner">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/">
            ✦ ALGER MAKIPUTIN <span>© 2026</span>
          </Link>
          <p className="footer-tagline">PRODUCT ENGINEER — WEB &amp; MOBILE</p>
          <p className="footer-meta">
            CEBU CITY, PHILIPPINES
            <br />
            AVAILABLE FOR REMOTE WORK WORLDWIDE
          </p>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <p className="footer-heading">EXPLORE</p>
          {footerNav
            .filter((l) => l.href !== "/")
            .map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
        </nav>

        <nav className="footer-col" aria-label="Services">
          <p className="footer-heading">SERVICES</p>
          {serviceLinks.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="footer-col" aria-label="Connect">
          <p className="footer-heading">CONNECT</p>
          {socials.map((s) => {
            const isMail = s.href.startsWith("mailto:");
            return (
              <a
                key={s.label}
                href={s.href}
                className="footer-link"
                {...(isMail
                  ? {}
                  : {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `${s.label} (opens in a new tab)`,
                    })}
                onClick={() =>
                  trackEvent("social_click", { link_type: s.label.toLowerCase() })
                }
              >
                {s.label} <span aria-hidden="true">↗</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="wrapper footer-bottom">
        <span>DESIGNED &amp; BUILT BY ALGER MAKIPUTIN.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
