"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

export type BrandingValue = {
  displayName: string;
  logo: string;
};

const BrandingContext = createContext<BrandingValue | null>(null);

const defaultBranding: BrandingValue = {
  displayName: "WellnessZ",
  logo: "/experts-logo.png",
};

export default function BrandingProvider({ children }: { children: ReactNode }) {
  return (
    <BrandingContext.Provider value={defaultBranding}>
      {children}
    </BrandingContext.Provider>
  );
}

export function useBrandingContext(): BrandingValue {
  const ctx = useContext(BrandingContext);
  if (!ctx) {
    return defaultBranding;
  }
  return ctx;
}
