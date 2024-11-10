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
    <section
      id="community"
      className="mx-auto flex h-fit w-full flex-col items-center p-4 py-12 sm:p-6 sm:py-16 md:p-10 md:py-20"
      style={{
        backgroundImage: "url('/login-bg.svg')",
        backgroundSize: "contain",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="mb-4 rounded-lg bg-blue-100 p-2 text-center text-3xl font-extrabold tracking-tighter text-blue-900 sm:p-3 sm:text-right sm:text-4xl md:text-5xl">
        Community
      </h1>

      <Carousel className="z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <CarouselContent className="-ml-2 sm:-ml-4">
          {events.map((event, index) => (
            <CarouselItem
              key={index}
              className="basis-full pl-2 sm:basis-1/2 sm:pl-4 lg:basis-1/3"
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
                      <div className="absolute bottom-0 left-0 right-0">
                        <Card className="rounded-none border-none shadow-lg">
                          <CardContent className="space-y-1 p-2 sm:space-y-2 sm:p-4">
                            <h3 className="text-base font-semibold text-primary sm:text-lg">
                              {event.title}
                            </h3>
                            <div className="flex flex-col text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{event.location}</span>
                              </div>
                              <span>{event.date}</span>
                            </div>
                            <div className="text-xs font-medium text-primary sm:text-sm">
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
        <CarouselPrevious className="absolute -left-2 size-8 border-none bg-blue-500 text-white hover:bg-primary sm:-left-4 sm:size-10" />
        <CarouselNext className="absolute -right-2 size-8 border-none bg-blue-500 text-white hover:bg-primary sm:-right-4 sm:size-10" />
      </Carousel>
    </section>
  );
}
