// @/app/auth/layout.tsx

import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | BookExchange",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <main className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {children}
      </main>
    </ClerkProvider>
  );
}
