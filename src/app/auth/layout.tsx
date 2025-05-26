// @/app/auth/layout.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication | 22FGC",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
            {children}
        </main>
    );
}