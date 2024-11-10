import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Crown, Coins, Gift, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function StatisticPoints() {
  return (
    <section id="points" className="bg-[#F0F6FF] py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="order-2 space-y-4 md:order-1">
            {/* Points and Redeem Section */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-center space-x-4 p-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      Points
                    </div>
                    <div className="text-2xl font-bold">5,900</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer bg-primary text-white transition-colors hover:bg-primary/90">
                <CardContent className="flex h-full items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <Gift className="h-6 w-6" />
                    <span className="font-bold">Redeem</span>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </CardContent>
              </Card>
            </div>

            {/* Level Progress Section */}
            <Card>
              <CardContent className="space-y-4 p-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Crown className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      Silver (Level 2)
                    </div>
                    <Button size="icon" aria-label="View level details">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Progress value={60} className="h-2" />
                <div className="flex flex-col justify-between text-sm text-muted-foreground sm:flex-row">
                  <span>Your Progress</span>
                  <span>9,669 Exp less to rank up</span>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Travel Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Weekly Travel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid h-[200px] grid-cols-7 gap-2 sm:h-[300px] sm:gap-4">
                  {[
                    {
                      day: "Mon",
                      level: "Low",
                      height: "20%",
                      color: "bg-red-200",
                      labelColor: "text-red-500",
                    },
                    {
                      day: "Tue",
                      level: "High",
                      height: "80%",
                      color: "bg-green-200",
                      labelColor: "text-green-500",
                    },
                    {
                      day: "Wed",
                      level: "Medium",
                      height: "50%",
                      color: "bg-yellow-200",
                      labelColor: "text-yellow-500",
                    },
                    {
                      day: "Thu",
                      level: "Low",
                      height: "30%",
                      color: "bg-red-200",
                      labelColor: "text-red-500",
                    },
                    {
                      day: "Fri",
                      level: "High",
                      height: "90%",
                      color: "bg-green-200",
                      labelColor: "text-green-500",
                    },
                    {
                      day: "Sat",
                      level: "Medium",
                      height: "60%",
                      color: "bg-yellow-200",
                      labelColor: "text-yellow-500",
                    },
                    {
                      day: "Sun",
                      level: "High",
                      height: "70%",
                      color: "bg-green-200",
                      labelColor: "text-green-500",
                    },
                  ].map((day) => (
                    <div key={day.day} className="flex flex-col items-center">
                      <div className="relative w-full flex-1">
                        <div
                          className={`absolute bottom-0 w-full rounded-lg ${day.color}`}
                          style={{ height: day.height }}
                        />
                        <div
                          className={`absolute bottom-0 w-full p-1 text-center text-[0.5rem] font-bold sm:text-sm ${day.labelColor}`}
                        >
                          {day.level}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground sm:text-sm">
                        {day.day}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section */}
          <div className="order-1 flex flex-col items-center justify-center text-center md:order-2 md:items-end md:text-right">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tighter text-blue-900 sm:text-4xl md:text-5xl">
              Your Statistic Points
            </h1>
            <p className="mb-8 max-w-md text-base text-blue-400 sm:text-lg">
              Keep Going! The more you use public transport, the more points you
              earn! Every extra kilometer brings you closer to exciting rewards
              and a greener future.
            </p>
            <Image
              src="/statistic.svg"
              alt="Decorative illustration of statistics"
              width={500}
              height={500}
              className="w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
