// @/app/auth/signup/[[...rest]]/page.tsx

"use client";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/common/Header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SignupPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <SignUp
          path="/auth/signup"
          routing="path"
          signInUrl="/auth/login"
          forceRedirectUrl="/dashboard"
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        />
      </div>
    </>
  );
}