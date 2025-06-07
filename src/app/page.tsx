// @/app/page.tsx

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Header from "@/components/common/Header";
import { Boxes } from "@/components/ui/aceternity/background-boxes";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        {/* Logo */}
        <div className="relative z-20 mb-4">
          <Image
            src="/logo.png"
            alt="Church Logo"
            width={100}
            height={100}
            className="rounded-full border-4 border-white"
          />
        </div>

        {/* Heading and Subtext */}
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Welcome to BookExchange
        </h1>

        {/* Button */}
        <Link
          href="/auth/login"
          className="mt-6 px-6 py-2 bg-white text-slate-900 rounded-md font-medium z-20 relative hover:bg-neutral-200 transition"
        >
          Log In
        </Link>
      </div>
    </>
  );
}

// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/auth/login");
//   }, [router]);

//   return null;
// }