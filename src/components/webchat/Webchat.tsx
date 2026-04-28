"use client";

import { useCallback, useEffect } from "react";

declare global {
  interface Window {
    botpress?: { open: () => void; close: () => void; toggle: () => void };
  }
}

const HIDE_LAUNCHER_CSS = `
  .bpFab, [class*="bpFab"],
  .bpw-floating-button,
  div[id*="botpress-webchat"] > div > button,
  #bp-web-widget-container > div > button {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
`;

const Webchat = () => {
  const loadWebchat = useCallback(() => {
    const style = document.createElement("style");
    style.innerHTML = HIDE_LAUNCHER_CSS;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
    script.async = true;
    script.onload = () => loadWebchatContent();
    document.body.appendChild(script);
  }, []);

  const loadWebchatContent = () => {
    const script = document.createElement("script");
    script.src =
      "https://files.bpcontent.cloud/2025/06/02/08/20250602080552-T2L3FEPS.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadWebchat();
  }, [loadWebchat]);

  return null;
};

export default Webchat;
