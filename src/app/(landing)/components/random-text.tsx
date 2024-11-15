"use client";

import { FlipWords } from "@/components/ui/flip-words";

export function RandomText() {
  const arrayOfText = ["Ride", "Earn", "Thrive"];

  return (
    <FlipWords
      words={arrayOfText}
      duration={1500}
      className="p-0 text-4xl font-extrabold tracking-tighter text-background sm:text-5xl md:text-6xl lg:text-7xl"
    />
  );
}
