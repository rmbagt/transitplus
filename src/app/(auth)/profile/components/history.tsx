"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusFrontIcon, CheckCircle, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transportModes = [
  { name: "All", icon: MapPinIcon },
  { name: "KAI", icon: "/kai.svg" },
  { name: "TransJakarta", icon: "/transjakarta.svg" },
  { name: "MRT", icon: "/mrt.svg" },
  { name: "LRT Jakarta", icon: "/lrt-jakarta.svg" },
  { name: "LRT Jabodebek", icon: "/lrt-jabodebek.svg" },
];

const travelHistory = [
  {
    date: "10 Nov, 09:30",
    mode: "KAI",
    icon: "/kai.svg",
    destination: "Gambir Station",
    points: 720,
    distance: 7.2,
    claimed: false,
  },
  {
    date: "9 Nov, 14:45",
    mode: "LRT Jakarta",
    icon: "/lrt-jakarta.svg",
    destination: "Velodrome",
    points: 450,
    distance: 4.5,
    claimed: true,
  },
  {
    date: "8 Nov, 18:11",
    mode: "MRT",
    icon: "/mrt.svg",
    destination: "Binus University Anggrek",
    points: 581,
    distance: 5.81,
    claimed: false,
  },
  {
    date: "8 Nov, 10:20",
    mode: "TransJakarta",
    icon: "/transjakarta.svg",
    destination: "Gelora Bung Karno Stadium",
    points: 816,
    distance: 8.16,
    claimed: true,
  },
  {
    date: "7 Nov, 16:30",
    mode: "LRT Jabodebek",
    icon: "/lrt-jabodebek.svg",
    destination: "Cibubur",
    points: 1050,
    distance: 10.5,
    claimed: false,
  },
];

export function History() {
  const [selectedMode, setSelectedMode] = useState("All");
  const [claimedTrips, setClaimedTrips] = useState<string[]>([]);

  const filteredHistory =
    selectedMode === "All"
      ? travelHistory
      : travelHistory.filter((trip) => trip.mode === selectedMode);

  const handleClaim = (tripDate: string) => {
    setClaimedTrips((prev) => [...prev, tripDate]);
  };

  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-blue-900">Travel History</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {transportModes.map((mode) => (
            <Button
              key={mode.name}
              variant={mode.name === selectedMode ? "default" : "secondary"}
              className="rounded-full"
              onClick={() => setSelectedMode(mode.name)}
            >
              {typeof mode.icon === "string" ? (
                <Image
                  src={mode.icon}
                  alt={mode.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
              ) : (
                <mode.icon className="mr-2 h-5 w-5" />
              )}
              {mode.name}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredHistory.map((trip, index) => (
            <Card key={index} className="bg-slate-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={trip.icon}
                      alt={trip.mode}
                      width={64}
                      height={64}
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {trip.date}
                      </p>
                      <h3 className="text-lg font-semibold">
                        {trip.destination}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Trip Complete</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-right">
                    <div>
                      <p className="text-xl font-semibold">
                        {trip.points} Points
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {trip.distance} kilometer
                      </p>
                    </div>
                    <Button
                      variant={
                        trip.claimed || claimedTrips.includes(trip.date)
                          ? "outline"
                          : "default"
                      }
                      className={cn(
                        "w-40",
                        trip.claimed || claimedTrips.includes(trip.date)
                          ? "pointer-events-none"
                          : "",
                      )}
                      onClick={() => handleClaim(trip.date)}
                    >
                      {trip.claimed || claimedTrips.includes(trip.date)
                        ? "Claimed"
                        : "Claim"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
