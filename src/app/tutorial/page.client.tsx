"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Train, Bus, CircleDot } from "lucide-react";

const TransportItems = [
  {
    name: "Transjakarta",
    icon: <Bus className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/",
  },
  {
    name: "MRT",
    icon: <Train className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/",
  },
  {
    name: "LRT",
    icon: <Train className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/",
  },
  {
    name: "KRL",
    icon: <Train className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/",
  },
  {
    name: "Mikrotrans",
    icon: <Bus className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/",
  },
];

export default function TutorialPageClient() {
  return (
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col bg-blue-600 p-6 text-white md:w-1/2 md:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold md:text-4xl">
              Hi There, <span className="italic">Marvin!</span>
            </h1>
            <p className="text-sm opacity-90 md:text-lg">
              Looks like this is your first time logging in today.
              <br />
              Tell us what transport would you like to ride.
            </p>
          </div>

          <div className="space-y-4 py-6 md:py-8">
            <h2 className="text-xl font-semibold">Prefered Transport</h2>
            <div className="flex flex-wrap gap-4">
              {TransportItems.map((transport) => (
                <button
                  key={transport.name}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 transition-transform hover:scale-105 md:h-16 md:w-16">
                    {transport.icon}
                  </div>
                  <span className="text-xs md:text-sm">{transport.name}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs opacity-75 md:text-sm">
            * You can change it again later
          </p>
        </div>

        <div className="mt-auto pt-6 md:pt-8">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1 md:gap-2">
              <CircleDot className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-xs font-medium md:text-sm">
                Select Transport
              </span>
            </div>
            <div className="h-0.5 w-8 bg-white/30 md:w-12" />
            <div className="flex items-center gap-1 opacity-50 md:gap-2">
              <div className="h-3 w-3 rounded-full border border-white md:h-4 md:w-4" />
              <span className="text-xs font-medium md:text-sm">Set Route</span>
            </div>
            <div className="h-0.5 w-8 bg-white/30 md:w-12" />
            <div className="flex items-center gap-1 opacity-50 md:gap-2">
              <div className="h-3 w-3 rounded-full border border-white md:h-4 md:w-4" />
              <span className="text-xs font-medium md:text-sm">
                Claim Points
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-between bg-gray-50 p-6 md:w-1/2 md:p-8">
        <div className="max-w-md space-y-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">
            Select your Transport
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            Before you can earn points, you must first choose the public
            transportation you want to take.
          </p>
        </div>

        <div className="relative w-full max-w-md py-8 md:max-w-2xl md:py-0">
          <Image
            src="/train.png"
            alt="Small Train Left"
            width={80}
            height={60}
            className="absolute left-0 top-1/4 -translate-x-1/4 md:h-[80px] md:w-[120px]"
          />
          <Image
            src="/train2.png"
            alt="Main Train"
            width={300}
            height={225}
            className="mx-auto md:h-[300px] md:w-[400px]"
            priority
          />
          <Image
            src="/train3.png"
            alt="Small Train Right"
            width={80}
            height={60}
            className="absolute right-0 top-1/4 translate-x-1/4 md:h-[80px] md:w-[120px]"
          />
          <h3 className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-center text-2xl font-bold text-transparent md:mt-8 md:text-3xl">
            MRT
          </h3>
        </div>

        <Button className="w-full rounded-full bg-gradient-to-b from-blue-600 to-blue-400 hover:bg-blue-700 md:w-32">
          Next
        </Button>
      </div>
    </div>
  );
}
