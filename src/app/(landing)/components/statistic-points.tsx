import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Crown, Coins, Gift, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function StatisticPoints() {
  return (
    <div className="flex h-fit items-center justify-center bg-[#F0F6FF] py-20">
      <div className="container mx-auto grid w-full gap-4 p-4 md:grid-cols-2">
        <div className="space-y-4">
          {/* Points and Redeem Section */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="flex h-full items-center space-x-4 p-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div className="flex h-full w-full items-center justify-between">
                  <div className="flex h-full w-fit items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    Points
                  </div>
                  <div className="text-2xl font-bold">5,900</div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer bg-primary text-white transition-colors hover:bg-primary">
              <CardContent className="flex h-full items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <Gift className="h-6 w-6" />
                  <span className="font-medium">Redeem</span>
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
                  <div className="flex w-fit items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    Silver (Level 2)
                  </div>
                  <Button size="icon">
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <Progress value={60} className="h-2" />
              <div className="flex justify-between text-right text-sm text-muted-foreground">
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
              <div className="grid h-[300px] grid-cols-7 gap-4">
                {[
                  {
                    day: "Mon",
                    level: "Low",
                    height: "20%",
                    color: "bg-red-200",
                    label_color: "text-md font-bold text-red-500",
                  },
                  {
                    day: "Tue",
                    level: "High",
                    height: "80%",
                    color: "bg-green-200",
                    label_color: "text-md font-bold text-green-500",
                  },
                  {
                    day: "Wed",
                    level: "Medium",
                    height: "50%",
                    color: "bg-yellow-200",
                    label_color: "text-md font-bold text-yellow-500",
                  },
                  {
                    day: "Thu",
                    level: "Low",
                    height: "30%",
                    color: "bg-red-200",
                    label_color: "text-md font-bold text-red-500",
                  },
                  {
                    day: "Fri",
                    level: "High",
                    height: "90%",
                    color: "bg-green-200",
                    label_color: "text-md font-bold text-green-500",
                  },
                  {
                    day: "Sat",
                    level: "Medium",
                    height: "60%",
                    color: "bg-yellow-200",
                    label_color: "text-md font-bold text-yellow-500",
                  },
                  {
                    day: "Sun",
                    level: "High",
                    height: "70%",
                    color: "bg-green-200",
                    label_color: "text-md font-bold text-green-500",
                  },
                ].map((day) => (
                  <div key={day.day} className="flex flex-col items-center">
                    <div className="relative w-full flex-1">
                      <div
                        className={`absolute bottom-0 w-full rounded-lg ${day.color}`}
                        style={{ height: day.height }}
                      />
                      <div
                        className={`absolute bottom-0 w-full p-1 text-center text-white ${day.label_color}`}
                      >
                        {day.level}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {day.day}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end justify-end p-4 text-center">
          <h1 className="mb-4 text-right text-5xl font-extrabold tracking-tighter text-blue-900">
            Your Statistic Points
          </h1>
          <p className="mb-8 text-balance text-right text-lg text-blue-400">
            Keep Going! The more you use public transport, the more points you
            earn! <br />
            Every extra kilometer brings you closer to exciting rewards and a
            greener future.
          </p>
          <Image
            src="/statistic.svg"
            alt="Decorative illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
