"use client";

import Link from "next/link";
import { footerNav, serviceLinks, socials } from "../../../data/portfolio";
import { trackEvent } from "../../../lib/analytics";
import BrandLogo from "../../brand/BrandLogo";

export default function PortfolioFooter() {
  return (
    <footer className="pf-footer">
      <div className="pf-footer__inner">
        <div className="pf-footer__grid">
          {/* Brand */}
          <div className="pf-footer__brand">
            <Link
              href="/"
              className="pf-logo pf-logo--footer"
              aria-label="Alger Makiputin — home"
            >
              <BrandLogo surface="dark" decorative />
            </Link>
            <p className="pf-footer__role">Product Engineer — Web &amp; Mobile</p>
            <p className="pf-footer__tagline">
              Production software across React, React Native, TypeScript, APIs, and data.
            </p>
            <p className="pf-footer__meta">
              Cebu City, Philippines
              <br />
              Available for remote work worldwide
            </p>
          </div>

          {/* Explore */}
          <nav className="pf-footer__col" aria-label="Explore">
            <p className="pf-footer__heading">Explore</p>
            {footerNav.map((l) => (
              <Link key={l.label} href={l.href} className="pf-footer__link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Services */}
          <nav className="pf-footer__col" aria-label="Services">
            <p className="pf-footer__heading">Services</p>
            {serviceLinks.map((l) => (
              <Link key={l.label} href={l.href} className="pf-footer__link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Connect (external) */}
          <nav className="pf-footer__col" aria-label="Connect">
            <p className="pf-footer__heading">Connect</p>
            {socials.map((s) => {
              const isMail = s.href.startsWith("mailto:");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className="pf-footer__link pf-footer__link--ext"
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
                  {s.label}
                  <span className="pf-footer__ext" aria-hidden="true">
                    ↗
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pf-footer__bottom">
          <p className="pf-footer__copy">
            © 2026 Alger Makiputin. All rights reserved.
          </p>
          <p className="pf-footer__note">
            Based in the Philippines, working with product teams and clients
            worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
