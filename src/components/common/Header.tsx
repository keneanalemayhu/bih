// @/components/common/Header.tsx

"use client";
import React, { useState, useEffect } from "react";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

type HeaderProps = {
  variant?: "dashboard" | "default";
};

const Header: React.FC<HeaderProps> = ({ variant = "default" }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2 p-0 m-0 items-center">
      <ThemeToggle />
      <LanguageToggle />
      {variant === "dashboard" && (
        <>
          <SignedOut>
            <span className="text-white text-sm">Not signed in</span>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: resolvedTheme === "dark" ? dark : undefined,
              }}
            />
          </SignedIn>
        </>
      )}

    </div>
  );
};

export default Header;