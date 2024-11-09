"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TransportItems } from "@/app/tutorial/data";

export function TransportSliderButton({
  selectedIndex,
  setSelectedIndex,
}: {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) {
  return (
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
          {TransportItems.map((transport, index) => (
            <button
              key={transport.name}
              className="flex flex-col items-center space-y-2"
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105 md:h-16 md:w-16 ${
                  selectedIndex === index
                    ? "bg-white text-blue-600"
                    : "bg-blue-500 text-white"
                }`}
              >
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
  );
}

export function TransportSliderImage({
  selectedIndex,
}: {
  selectedIndex: number;
}) {
  const selectedTransport = TransportItems[selectedIndex];
  const prevTransport =
    TransportItems[
      (selectedIndex - 1 + TransportItems.length) % TransportItems.length
    ];
  const nextTransport =
    TransportItems[(selectedIndex + 1) % TransportItems.length];

  return (
    <>
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
        <div className="flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`prev-${selectedIndex}`}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.8 }}
              exit={{ opacity: 0, x: -100, scale: 0.7 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <Image
                src={prevTransport?.image ?? ""}
                alt={`${prevTransport?.name} Image`}
                width={80}
                height={60}
                className="opacity-50 blur-[0.5px] md:h-[80px] md:w-[120px]"
              />
            </motion.div>
            <motion.div
              key={`main-${selectedIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, z: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                scale: {
                  type: "spring",
                  damping: 15,
                },
              }}
              className="z-10"
            >
              <Image
                src={selectedTransport?.image ?? ""}
                alt={`${selectedTransport?.name} Image`}
                width={300}
                height={225}
                className="mx-auto drop-shadow-lg md:h-[300px] md:w-[400px]"
                priority
              />
            </motion.div>
            <motion.div
              key={`next-${selectedIndex}`}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 0.5, x: 0, scale: 0.8 }}
              exit={{ opacity: 0, x: 100, scale: 0.7 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Image
                src={nextTransport?.image ?? ""}
                alt={`${nextTransport?.name} Image`}
                width={80}
                height={60}
                className="opacity-50 blur-[0.5px] md:h-[80px] md:w-[120px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <h3
          key={selectedTransport?.name}
          className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-center text-2xl font-bold text-transparent md:mt-8 md:text-3xl"
        >
          {selectedTransport?.name}
        </h3>
      </div>
    </>
  );
}
