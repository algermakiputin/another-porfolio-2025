"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const Socials = () => {
  return (
    <ul className="social-icons-list" style={{ padding: 0, margin: 0, marginTop: "1.5em" }}>
      <li>
        <Link href="https://ph.linkedin.com/in/alger-makiputin" target="_blank">
          <LinkedInIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/algermakiputin" target="_blank">
          <GitHubIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/c/AlgerMakiputin" target="_blank">
          <YouTubeIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
      <li>
        <Link href="https://algerwrites.medium.com/" target="_blank">
          <RssFeedIcon sx={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }} fontSize="inherit" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
