"use client";

import { FlipWords } from "@/components/ui/flip-words";

export function RandomText() {
  const arrayOfText = [
    "Sustainable mobility",
    "Earning rewards",
    "Eco-conscious journey",
  ];

  return (
    <FlipWords
      words={arrayOfText}
      duration={3000}
      className="p-0 text-center text-4xl font-extrabold tracking-tighter text-background sm:text-5xl md:text-left md:text-6xl lg:text-7xl"
    />
  );
}
