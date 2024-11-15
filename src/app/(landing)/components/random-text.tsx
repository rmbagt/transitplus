"use client";

import { FlipWords } from "@/components/ui/flip-words";

export function RandomText() {
  const arrayOfText = [
    "Take a ride with us",
    "Earn while you drive",
    "Thrive with our community",
  ];

  return (
    <FlipWords
      words={arrayOfText}
      duration={3000}
      className="p-0 text-4xl font-extrabold tracking-tighter text-background sm:text-5xl md:text-6xl lg:text-7xl"
    />
  );
}
