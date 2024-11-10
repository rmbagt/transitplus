"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  CalendarClockIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const LOCATIONS = [
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Selatan",
  "Jakarta Pusat",
  "Jakarta Utara",
];

const EVENTS = [
  {
    id: 1,
    day: "Fri",
    date: 1,
    title: "Travel around Jakarta",
    location: "International Monument",
    time: "09:00 - 13:00",
    capacity: "50 person",
    registered: false,
  },
  {
    id: 2,
    day: "Sat",
    date: 2,
    title: "Cultural Exhibition",
    location: "National Museum",
    time: "10:00 - 16:00",
    capacity: "100 person",
    registered: false,
  },
  {
    id: 3,
    day: "Sun",
    date: 3,
    title: "Food Festival",
    location: "Central Park",
    time: "11:00 - 20:00",
    capacity: "200 person",
    registered: false,
  },
];

export default function Events() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("Jakarta Barat");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [registeredEvents, setRegisteredEvents] = useState(new Set());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Calendar functions
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  // Registration handling
  const handleRegister = (eventId: number) => {
    setRegisteredEvents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  // Calendar rendering
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = Array.from({ length: 35 }, (_, i) => {
      const day = i - firstDay + 1;
      if (day > 0 && day <= daysInMonth) {
        return day;
      }
      return null;
    });

    return days.map((day, i) => (
      <div
        key={i}
        onClick={() => day && handleDayClick(day)}
        className={`flex aspect-square cursor-pointer items-center justify-center rounded-md text-sm ${day ? "hover:bg-gray-100" : ""} ${selectedDay === day ? "bg-muted text-white" : ""} ${!day ? "text-gray-300" : ""}`}
      >
        {day}
      </div>
    ));
  };

  return (
    <div className="min-h-svh bg-gray-50">
      <div
        className="relative h-64"
        style={{
          backgroundImage: "url(/profile-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C4384]/80 to-[#1577EA]/80" />

        <Button
          onClick={() => router.back()}
          className="absolute left-16 top-4 z-40 flex w-max items-center justify-center bg-white/20 text-white hover:bg-white/30 md:left-20 md:top-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </Button>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container flex items-center justify-end gap-2 p-4 md:p-6 lg:p-8">
            <span className="text-4xl text-white">
              <span className="font-black">Events</span>
            </span>
            <div className="flex size-20 items-center justify-center rounded-full bg-white">
              <CalendarClockIcon size={40} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="mb-8 flex items-center gap-4">
          <Button
            variant="outline"
            className="bg-white"
            onClick={() => {
              setCurrentDate(new Date());
              setSelectedDay(new Date().getDate());
            }}
          >
            Today
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-lg font-medium">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <Button variant="ghost" size="icon" onClick={handleNextMonth}>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-blue-900">Location</h2>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((location) => (
              <Button
                key={location}
                variant="outline"
                className={
                  location === selectedLocation
                    ? "bg-white text-primary hover:bg-muted"
                    : "hover:bg-muted"
                }
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            {EVENTS.map((event) => (
              <div key={event.id} className="rounded-lg border bg-white p-4">
                <div className="mb-4 flex items-baseline gap-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground">
                      {event.day}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {event.date}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {event.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.capacity}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="ml-auto"
                    variant={
                      registeredEvents.has(event.id) ? "outline" : "default"
                    }
                    onClick={() => handleRegister(event.id)}
                  >
                    {registeredEvents.has(event.id) ? "Unregister" : "Register"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border bg-white p-4">
            <div className="grid grid-cols-7 gap-2 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, i) => (
                  <div key={i} className="p-2 text-sm font-medium">
                    {day.charAt(0)}
                  </div>
                ),
              )}
              {renderCalendar()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
