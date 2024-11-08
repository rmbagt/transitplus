"use client";

import {
  LocateIcon,
  MapPinIcon,
  CalendarIcon,
  CreditCardIcon,
  MoveDownIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [date, setDate] = useState<Date>();

  return (
    <main className="relative flex min-h-svh justify-center bg-[radial-gradient(circle,rgba(99,166,245,1)_0%,rgba(11,83,168,1)_55%)]">
      <div
        className="absolute bottom-0 h-[40%] w-screen bg-contain bg-top opacity-30"
        style={{
          backgroundImage: "url('/indonesia.svg')",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute bottom-0 h-[40%] w-screen bg-gradient-to-t from-[#0B53A8] via-90% to-transparent" />
      <div className="container relative flex h-svh items-center justify-around gap-5">
        <div className="flex flex-col">
          <p className="w-1/2 text-7xl font-extrabold tracking-tighter text-background">
            Ride, Earn, Thrive
          </p>
          <p className="text-balance text-4xl font-semibold tracking-tight text-background">
            Your Journey to a Sustainable Future Starts Here!
          </p>
          <p className="mt-5 max-w-prose text-balance text-xl text-background/70">
            Users can earn points every time they choose sustainable transport
            options, like public transit or biking and can be redeemed for
            discounts at local businesses or access to community events,
            motivating users to make eco-friendly choices while benefiting from
            real-world rewards.
          </p>
        </div>
        <Card className="w-[485px]">
          <CardContent className="space-y-4 p-6">
            <div className="w-full rounded-lg border-2 text-muted-foreground">
              <div className="flex items-center gap-2 border-b-2 p-3">
                <LocateIcon size={20} />
                <div className="flex w-full flex-col">
                  <span className="text-xs">Current Location</span>
                  <input
                    placeholder="Choose your current location"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 p-3">
                <MapPinIcon className="text-blue-500" size={20} />
                <div className="flex w-full flex-col">
                  <span className="text-xs text-blue-500">Destination</span>
                  <input
                    placeholder="Set your destination"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              className="absolute right-8 top-28"
              size="icon"
            >
              <MoveDownIcon size={20} />
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <button className="spacex-2 flex w-full items-center justify-start rounded-lg border-2 bg-white p-3 text-muted-foreground">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Schedule Date</span>}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <div className="spacex-2 flex w-full flex-col items-start justify-center gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
              <h3 className="text-sm font-medium">Transport</h3>
              <div className="grid h-fit w-full grid-cols-5 gap-2">
                {[
                  { name: "KAI", icon: "/kai.svg" },
                  {
                    name: "TransJakarta",
                    icon: "/transjakarta.svg",
                  },
                  { name: "MRT", icon: "/mrt.svg" },
                  { name: "LRT Jakarta", icon: "/lrt-jakarta.svg" },
                  { name: "LRT Jabodebek", icon: "/lrt-jabodebek.svg" },
                ].map((transport) => (
                  <Button
                    key={transport.name}
                    variant="outline"
                    className="aspect-square h-full w-full flex-col gap-2"
                  >
                    <Image
                      src={transport.icon}
                      alt={transport.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Distance</h3>
                <div className="rounded-lg border p-3 text-center text-sm text-muted-foreground">
                  - km
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Points</h3>
                <div className="rounded-lg border p-3 text-center text-sm text-muted-foreground">
                  - pts
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Payment Methods</h3>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: "Cash", icon: CreditCardIcon },
                  { name: "E-Money", icon: CreditCardIcon },
                  { name: "QRIS", icon: CreditCardIcon },
                  { name: "Card", icon: CreditCardIcon },
                ].map((method) => (
                  <Button
                    key={method.name}
                    variant="outline"
                    className="h-20 flex-col gap-2"
                  >
                    <method.icon className="h-10 w-10" />
                    <span className="text-xs">{method.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Book Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
