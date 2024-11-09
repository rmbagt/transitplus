import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

export function ClaimPointHero() {
  return (
    <div className="space-y-4 text-blue-600">
      <h1 className="text-3xl font-bold md:text-4xl">
        Claim your <span className="font-bold">Points!</span>
      </h1>
      <p className="text-sm opacity-90 md:text-lg">
        Once you have completed the use of public transportation, make payment
        using this website and claim your points.
      </p>
    </div>
  );
}

export function ClaimPointForm() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-blue-600 p-6">
      <div className="space-y-4 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">Your Journey</h1>
        <p className="text-sm opacity-90 md:text-lg">
          Congratulations! These are the points you get on this trip, don&apos;t
          forget to travel using other public transport.
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-lg bg-white p-4">
        <h2 className="text-lg font-semibold md:text-xl">
          Your Travel Rewards
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/points.svg"
              width={24}
              height={24}
              alt="points"
              className="h-14 w-14"
            />
            <span className="font-medium">231 Points</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/exp.svg"
              width={24}
              height={24}
              alt="exp"
              className="h-14 w-14"
            />
            <span className="font-medium">100 Exp</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>9,669 Exp less to rank up</span>
          <Progress value={10} className="bg-red-200" />
          <div className="flex items-center justify-between text-foreground">
            <p>Your Progress</p>
            <p>10.000 Experience</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="w-max rounded-full bg-white text-blue-600 hover:bg-blue-50">
          Claim Points
        </Button>
      </div>
    </div>
  );
}
