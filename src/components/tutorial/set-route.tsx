import React from "react";
import { TravelCard } from "../booking/travel";

export function SetRouteHero() {
  return (
    <div className="space-y-4 text-blue-600">
      <h1 className="text-3xl font-bold md:text-4xl">
        Where do you want to <span className="font-bold">travel</span> today?
      </h1>
      <p className="text-sm opacity-90 md:text-lg">
        You will need to specify a destination to travel to using our app so
        that we can calculate how many points you can earn through mileage.
      </p>
    </div>
  );
}

export function SetRouteForm() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="hidden h-full flex-col flex-nowrap justify-evenly gap-4 text-end text-blue-600 lg:flex">
        <p>
          Set your <span className="font-semibold">Destination</span>
        </p>
        <p>
          Check the <span className="font-semibold">Schedule Date</span>
        </p>
        <p>
          Select your <span className="font-semibold">Transport</span>
        </p>
        <p>
          System will automatically detect the{" "}
          <span className="font-semibold">Distance</span> and{" "}
          <span className="font-semibold">Points</span>
        </p>
        <p>
          Choose your <span className="font-semibold">Payment Methods</span>
        </p>
      </div>
      <TravelCard />
    </div>
  );
}
