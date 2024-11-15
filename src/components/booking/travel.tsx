"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import Image from "next/image";
import { api } from "@/trpc/react";
import { toast } from "sonner";

const transportOptions = [
  { name: "KAI", icon: "/kai.svg" },
  { name: "TransJakarta", icon: "/transjakarta.svg" },
  { name: "MRT", icon: "/mrt.svg" },
  { name: "LRT Jakarta", icon: "/lrt-jakarta.svg" },
  { name: "LRT Jabodebek", icon: "/lrt-jabodebek.svg" },
] as const;

const paymentMethods = [
  { name: "E-Money", icon: CreditCardIcon },
  { name: "QRIS", icon: CreditCardIcon },
  { name: "Card", icon: CreditCardIcon },
] as const;

const FormSchema = z.object({
  currentLocation: z.string().min(2, {
    message: "Current location must be at least 2 characters.",
  }),
  destination: z.string().min(2, {
    message: "Destination must be at least 2 characters.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  transport: z.enum(
    [transportOptions[0].name, ...transportOptions.slice(1).map((t) => t.name)],
    {
      required_error: "Please select a transport method.",
    },
  ),
  paymentMethod: z.enum(
    [paymentMethods[0].name, ...paymentMethods.slice(1).map((p) => p.name)],
    {
      required_error: "Please select a payment method.",
    },
  ),
});

type FormValues = z.infer<typeof FormSchema>;

export function TravelCard() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentLocation: "",
      destination: "",
      date: new Date(),
    },
  });

  const { mutate, data } = api.travel.getDistance.useMutation();

  function onSubmit(formData: FormValues) {
    mutate({
      start_destination: formData.currentLocation,
      end_destination: formData.destination,
    });

    toast.success("Booking Submitted", {
      description: "Your booking has been submitted.",
    });
  }

  return (
    <Card className="w-full max-w-[485px]">
      <CardContent className="space-y-4 p-4 sm:p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="w-full rounded-lg border-2 text-muted-foreground">
              <div className="flex items-center gap-2 border-b-2 p-3">
                <LocateIcon size={20} />
                <FormField
                  control={form.control}
                  name="currentLocation"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="flex w-full flex-col">
                          <span className="text-xs">Current Location</span>
                          <Input
                            {...field}
                            placeholder="Choose your current location"
                            className="h-fit rounded-none border-0 bg-transparent p-0 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center gap-2 p-3">
                <MapPinIcon className="text-blue-500" size={20} />
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="flex w-full flex-col">
                          <span className="text-xs text-blue-500">
                            Destination
                          </span>
                          <Input
                            {...field}
                            placeholder="Set your destination"
                            className="h-fit rounded-none border-0 bg-transparent p-0 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-2 text-left font-normal text-muted-foreground"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Schedule Date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="transport"
              render={({ field }) => (
                <FormItem>
                  <div className="flex w-full flex-col items-start justify-center gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
                    <FormLabel className="text-sm font-medium">
                      Transport
                    </FormLabel>
                    <FormControl>
                      <div className="grid h-fit w-full grid-cols-5 gap-2">
                        {transportOptions.map((transport) => (
                          <Button
                            key={transport.name}
                            type="button"
                            variant="outline"
                            onClick={() => field.onChange(transport.name)}
                            className={`aspect-square h-fit w-full flex-col gap-2 p-1 md:p-2 ${
                              field.value === transport.name
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
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-full items-center justify-between gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
                <span className="text-xs font-medium sm:text-sm">Distance</span>
                <span className="text-xs font-bold sm:text-sm">
                  {data?.object.distance} km
                </span>
              </div>
              <div className="flex w-full items-center justify-between gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
                <span className="text-xs font-medium sm:text-sm">Points</span>
                <span className="text-xs font-bold sm:text-sm">
                  {(data?.object.distance ?? 0) * 10} pts
                </span>
              </div>
            </div>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <div className="flex w-full flex-col items-start justify-center gap-2 rounded-lg border-2 bg-white p-3 text-muted-foreground">
                    <FormLabel className="text-sm font-medium">
                      Payment Methods
                    </FormLabel>
                    <FormControl>
                      <div className="grid h-fit w-full grid-cols-3 gap-2">
                        {paymentMethods.map((method) => (
                          <Button
                            key={method.name}
                            type="button"
                            variant="outline"
                            onClick={() => field.onChange(method.name)}
                            className={`h-fit w-full flex-col gap-1 sm:gap-2 sm:p-2 ${
                              field.value === method.name
                                ? "bg-gray-300 text-muted-foreground"
                                : ""
                            }`}
                          >
                            <method.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                            <span className="text-[10px] sm:text-xs">
                              {method.name}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary">
              Book Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
