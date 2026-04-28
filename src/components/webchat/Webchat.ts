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
  }`;

let loading = false;

export function loadAndOpenWebchat() {
  if (typeof window === "undefined") return;

  if (window.botpress) {
    window.botpress.open();
    return;
  }

  if (loading) return;
  loading = true;

  const style = document.createElement("style");
  style.innerHTML = HIDE_LAUNCHER_CSS;
  document.head.appendChild(style);

  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
  script.async = true;
  script.onload = () => {
    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2025/06/02/08/20250602080552-T2L3FEPS.js";
    script2.async = true;
    script2.onload = () => {
      loading = false;
      setTimeout(() => window.botpress?.open(), 1500);
    };
    document.body.appendChild(script2);
  };
  document.body.appendChild(script);
}
