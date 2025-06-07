// @/app/user/page.tsx

"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { Input } from "@/components/ui/input";
import Header from "@/components/common/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Background beams with pointer-events disabled */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full">
        <Header variant="dashboard" />
      </div>

      {/* Hero and Input */}
      <div className="relative z-10 max-w-2xl mx-auto p-4">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Search your books
        </h1>
        <br />
        <Input type="text" placeholder="The Great Gatsby" />
      </div>

      {/* Select dropdowns and author input */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full max-w-2xl">
        <Select>
          <SelectTrigger className="bg-neutral-950 border border-neutral-800 text-neutral-200">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-950 text-neutral-200">
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Fiction">Fiction</SelectItem>
            <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
            <SelectItem value="Children">Children’s</SelectItem>
            <SelectItem value="Academic">Academic</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-neutral-950 border border-neutral-800 text-neutral-200">
            <SelectValue placeholder="Any Condition" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-950 text-neutral-200">
            <SelectItem value="any">Any Condition</SelectItem>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Like New">Like New</SelectItem>
            <SelectItem value="Good">Good</SelectItem>
            <SelectItem value="Acceptable">Acceptable</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="Author"
          className="border border-neutral-800 bg-neutral-950 text-neutral-200 placeholder:text-neutral-700"
        />
      </div>
    </div>
  );
}
