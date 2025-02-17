declare module "react-dom/client";

declare global {
  interface Window extends Window {
    customProperty?: string;
  }
}

export {};
