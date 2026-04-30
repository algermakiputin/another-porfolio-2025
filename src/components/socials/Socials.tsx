"use client";

import Link from "next/link";
import { trackEvent } from "../../lib/analytics";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const Socials = () => {
  return (
    <ul className="social-icons-list" style={{ padding: 0, margin: 0, marginTop: "1.5em" }}>
      <li>
        <Link href="https://ph.linkedin.com/in/alger-makiputin" target="_blank" onClick={() => trackEvent("social_click", { link_type: "linkedin" })}>
          <LinkedInIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/algermakiputin" target="_blank" onClick={() => trackEvent("social_click", { link_type: "github" })}>
          <GitHubIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/c/AlgerMakiputin" target="_blank" onClick={() => trackEvent("social_click", { link_type: "youtube" })}>
          <YouTubeIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
      <li>
        <Link href="https://algerwrites.medium.com/" target="_blank" onClick={() => trackEvent("social_click", { link_type: "medium" })}>
          <RssFeedIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
