declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string>,
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};
