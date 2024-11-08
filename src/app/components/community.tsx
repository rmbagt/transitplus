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

export default function Community() {
  const events = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Z8ZOciRVAL1QtzWlvuBDVeXdqEjQp.png",
      title: "",
      date: "",
      location: "",
      time: "",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Z8ZOciRVAL1QtzWlvuBDVeXdqEjQp.png",
      title: "Travel around Jakarta",
      date: "15-10-2004",
      location: "International Monument",
      time: "09:00 - 13:00",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Z8ZOciRVAL1QtzWlvuBDVeXdqEjQp.png",
      title: "",
      date: "",
      location: "",
      time: "",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1Z8ZOciRVAL1QtzWlvuBDVeXdqEjQp.png",
      title: "",
      date: "",
      location: "",
      time: "",
    },
  ];

  return (
    <div
      className="mx-auto flex h-svh w-full flex-col items-center p-10 py-20"
      style={{
        backgroundImage: "url('/login_bg.png')",
        backgroundSize: "contain",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-fit rounded-lg bg-blue-100 p-5 px-7 text-4xl font-bold tracking-tight text-primary shadow-lg">
        Community
      </div>
      {/* Background Illustration
      <div className="absolute inset-0 z-0">
        <div
          className="absolute bottom-0 left-0 right-0 h-64 bg-contain bg-repeat-x opacity-10"
          style={{
            backgroundImage: "url('/login_bg.png')",
          }}
        />
      </div>


      <div className="relative mb-8 text-center">
        <h2 className="inline-block rounded-full bg-blue-50 px-8 py-2 text-3xl font-bold text-blue-500">
          Community
        </h2>
      </div>


      <Carousel className="relative z-10">
        <CarouselContent className="-ml-4">
          {events.map((event, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={`Community event ${index + 1}`}
                      className="h-64 w-full rounded-lg object-cover"
                    />


                    {event.title && (
                      <div className="absolute -bottom-20 left-4 right-4">
                        <Card className="border-none shadow-lg">
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
        <CarouselPrevious className="absolute -left-12 border-none bg-blue-500 text-white hover:bg-blue-600" />
        <CarouselNext className="absolute -right-12 border-none bg-blue-500 text-white hover:bg-blue-600" />
      </Carousel> */}
    </div>
  );
}
