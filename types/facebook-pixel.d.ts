export {};

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | string,
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}
