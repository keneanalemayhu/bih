// @/app/auth/login/[[...rest]]/page.tsx

"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/common/Header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function LoginPage() {
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
        <SignIn
          path="/auth/login"
          routing="path"
          signUpUrl="/auth/signup"
          forceRedirectUrl="/dashboard"
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        />
      </div>
    </>
  );
}
