"use client";

import {
  LocateIcon,
  MapPinIcon,
  CalendarIcon,
  CreditCardIcon,
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
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export function TravelCard() {
  const [date, setDate] = useState<Date>();
  const [selectedTransport, setSelectedTransport] = useState<string>();
  const [selectedPayment, setSelectedPayment] = useState<string>();

  return (
    <Card className="w-full max-w-[485px]">
      <CardContent className="space-y-4 p-4 sm:p-6">
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

        <Popover>
          <PopoverTrigger asChild>
            <button className="flex w-full items-center justify-start rounded-lg border-2 bg-white p-3 text-muted-foreground">
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

        <div className="flex w-full flex-col items-start justify-center gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
          <h3 className="text-sm font-medium">Transport</h3>
          <div className="grid h-fit w-full grid-cols-5 gap-2">
            {[
              { name: "KAI", icon: "/kai.svg" },
              { name: "TransJakarta", icon: "/transjakarta.svg" },
              { name: "MRT", icon: "/mrt.svg" },
              { name: "LRT Jakarta", icon: "/lrt-jakarta.svg" },
              { name: "LRT Jabodebek", icon: "/lrt-jabodebek.svg" },
            ].map((transport) => (
              <Button
                key={transport.name}
                variant="outline"
                onClick={() => setSelectedTransport(transport.name)}
                className={`aspect-square h-fit w-full flex-col gap-2 p-1 md:p-2 ${
                  selectedTransport === transport.name
                    ? "bg-gray-300 text-muted-foreground"
                    : ""
                }`}
              >
                <Image
                  src={transport.icon}
                  alt={transport.name}
                  width={100}
                  height={100}
                  className="h-8 w-8 rounded-md object-contain sm:h-10 sm:w-10"
                />
                <span className="hidden text-[8px] sm:inline">
                  {transport.name}
                </span>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex w-full items-center justify-between gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
            <span className="text-xs font-medium sm:text-sm">Distance</span>
            <span className="text-xs font-bold sm:text-sm">- km</span>
          </div>
          <div className="flex w-full items-center justify-between gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
            <span className="text-xs font-medium sm:text-sm">Points</span>
            <span className="text-xs font-bold sm:text-sm">- pts</span>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
          <h3 className="text-sm font-medium">Payment Methods</h3>
          <div className="grid h-fit w-full grid-cols-3 gap-2">
            {[
              { name: "E-Money", icon: CreditCardIcon },
              { name: "QRIS", icon: CreditCardIcon },
              { name: "Card", icon: CreditCardIcon },
            ].map((method) => (
              <Button
                key={method.name}
                variant="outline"
                onClick={() => setSelectedPayment(method.name)}
                className={`h-fit w-full flex-col gap-1 p-1 sm:gap-2 sm:p-2 ${
                  selectedPayment === method.name
                    ? "bg-gray-300 text-muted-foreground"
                    : ""
                }`}
              >
                <method.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-[10px] sm:text-xs">{method.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <Link href="/profile" className="block w-full">
          <Button className="w-full bg-primary">Book Now</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
