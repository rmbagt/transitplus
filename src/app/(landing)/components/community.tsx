"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Community() {
  const events = [
    {
      image: "/carousel-1.png",
      title: "Community Meetup",
      date: "01-11-2023",
      location: "Central Park",
      time: "10:00 - 12:00",
    },
    {
      image: "/carousel-2.png",
      title: "Travel around Jakarta",
      date: "15-10-2004",
      location: "International Monument",
      time: "09:00 - 13:00",
    },
    {
      image: "/carousel-3.png",
      title: "Tech Conference",
      date: "20-11-2023",
      location: "Tech Hub",
      time: "14:00 - 18:00",
    },
    {
      image: "/carousel-1.png",
      title: "Art Exhibition",
      date: "05-12-2023",
      location: "City Gallery",
      time: "11:00 - 16:00",
    },
  ];

  return (
    <div
      className="mx-auto flex h-fit w-full flex-col items-center p-10 py-20"
      style={{
        backgroundImage: "url('/login-bg.svg')",
        backgroundSize: "contain",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="mb-4 rounded-lg bg-blue-100 p-3 text-right text-5xl font-extrabold tracking-tighter text-blue-900">
        Community
      </h1>

      <Carousel className="z-10 flex h-fit px-20 py-10">
        <CarouselContent className="-ml-4">
          {events.map((event, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={event.image}
                      alt={`Community event ${index + 1}`}
                      width={600}
                      height={600}
                      className="aspect-square rounded-lg object-cover"
                    />

                    {event.title && (
                      <div className="absolute -bottom-0 left-4 right-4">
                        <Card className="rounded-none rounded-t-lg border-none shadow-lg">
                          <CardContent className="space-y-2 p-4">
                            <h3 className="text-lg font-semibold text-blue-600">
                              {event.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                              <span>{event.date}</span>
                            </div>
                            <div className="text-sm font-medium text-blue-600">
                              {event.time}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-0 size-10 border-none bg-blue-500 text-white hover:bg-blue-600" />
        <CarouselNext className="absolute -right-0 size-10 border-none bg-blue-500 text-white hover:bg-blue-600" />
      </Carousel>
    </div>
  );
}
