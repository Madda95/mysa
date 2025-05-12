"use client";

import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { CookieBanner } from "./CookieBanner";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <CookieBanner />
    </ThemeProvider>
  );
}

export default Layout;
