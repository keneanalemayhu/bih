// src/app/providers.tsx

"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "@/components/context/LanguageContext";
import { Toaster as SonnerToaster } from "sonner";
import type { ThemeProviderProps } from "next-themes";

export function Providers({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="jireh-theme"
      themes={["light", "dark", "system"]}
      value={{
        light: "light",
        dark: "dark",
        system: "system",
      }}
    >
      <LanguageProvider>
        <>
          {children}
          <SonnerToaster
            position="bottom-right"
            expand={false}
            richColors
            closeButton
          />
        </>
      </LanguageProvider>
    </NextThemesProvider>
  );
}
