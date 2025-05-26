"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]);

  return null;
}




// for server side routing

// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/auth/login");
// }