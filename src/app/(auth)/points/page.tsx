"use client";

import { TransportRewardCard } from "@/components/points/transport-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  AwardIcon,
  Crown,
  DatabaseIcon,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";

const popularPromos = [
  {
    name: "KRL Weekend Pass",
    icon: "/kai.svg",
    points: 2500,
    discount: 25000,
    isNew: true,
  },
  {
    name: "TransJakarta Daily",
    icon: "/transjakarta.svg",
    points: 1500,
    discount: 15000,
    isNew: false,
  },
  {
    name: "MRT Off-Peak",
    icon: "/mrt.svg",
    points: 2000,
    discount: 20000,
    isNew: false,
  },
  {
    name: "LRT Jakarta Pass",
    icon: "/lrt-jakarta.svg",
    points: 1800,
    discount: 18000,
    isNew: false,
  },
  {
    name: "LRT Jabodebek Express",
    icon: "/lrt-jabodebek.svg",
    points: 3000,
    discount: 30000,
    isNew: false,
  },
];

const recommendedPromos = [
  {
    name: "MRT Monthly Pass",
    icon: "/mrt.svg",
    points: 8000,
    discount: 100000,
    isNew: true,
  },
  {
    name: "TransJakarta Weekly",
    icon: "/transjakarta.svg",
    points: 4500,
    discount: 50000,
    isNew: false,
  },
  {
    name: "KRL Commuter Plus",
    icon: "/kai.svg",
    points: 6000,
    discount: 75000,
    isNew: false,
  },
  {
    name: "LRT Jakarta Premium",
    icon: "/lrt-jakarta.svg",
    points: 5500,
    discount: 65000,
    isNew: false,
  },
  {
    name: "LRT Jabodebek Gold",
    icon: "/lrt-jabodebek.svg",
    points: 7000,
    discount: 85000,
    isNew: false,
  },
];

export default function Points() {
  const router = useRouter();
  const transportTypes = ["Transjakarta", "MikroTrans", "MRT", "LRT", "KRL"];

  return (
    <div className="relative min-h-svh bg-gray-50">
      <div
        className="relative h-64 rounded-b-[2rem] md:h-80 md:rounded-b-[3rem] lg:h-96 lg:rounded-b-[4rem]"
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
          className="absolute left-16 top-4 z-40 flex w-max items-center justify-center bg-white/20 text-white hover:bg-white/30 lg:left-20 lg:top-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </Button>

        <div className="absolute inset-0 flex items-center justify-center pb-10 md:pb-16">
          <div className="container flex flex-col items-start justify-start gap-2 p-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-white md:size-10 lg:size-16">
                <AwardIcon className="size-4 text-primary md:size-6 lg:size-8" />
              </div>
              <div className="flex flex-row items-start gap-2 md:items-center md:gap-4">
                <span className="text-xl text-white md:text-2xl lg:text-4xl">
                  <span className="font-light">Travel</span>
                  <span className="font-black tracking-tight">Points</span>
                </span>
                <div className="flex items-center gap-2 rounded-md bg-blue-100 p-1 px-2 text-base font-bold text-primary md:p-2 md:px-4 md:text-xl">
                  <DatabaseIcon
                    size={16}
                    strokeWidth={2.5}
                    className="text-primary md:size-5 lg:size-6"
                  />
                  <span className="font-mono">8900</span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-2 md:mt-4">
              {transportTypes.map((type) => (
                <Button
                  key={type}
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 text-xs text-white hover:bg-white/30 md:text-sm"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container relative -top-16 mx-auto w-screen rounded-t-xl bg-white p-4 md:-top-24 md:p-6 lg:-top-32 lg:rounded-t-[4rem] lg:p-10">
        {/* Points and Redeem Section */}
        <Card className="mb-8 w-full rounded-2xl md:absolute md:-top-24 md:right-8 md:w-[350px] lg:right-16 lg:w-[450px]">
          <CardContent className="space-y-4 p-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-blue-100 p-2">
                <Crown className="h-5 w-5 text-primary md:h-6 md:w-6" />
              </div>
              <div className="flex w-full justify-between">
                <div className="flex w-fit items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-bold text-primary md:px-3 md:text-sm">
                  Silver (Level 2)
                </div>
                <Button size="icon" className="h-8 w-8 md:h-9 md:w-9">
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
            <Progress value={60} className="h-2" />
            <div className="flex justify-between text-right text-xs text-muted-foreground md:text-sm">
              <span>Your Progress</span>
              <span>9,669 Exp less to rank up</span>
            </div>
          </CardContent>
        </Card>

        {/* Popular Section */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6 lg:gap-10">
            <h1 className="text-left text-3xl font-extrabold tracking-tighter text-blue-900 md:text-4xl lg:text-5xl">
              Popular
            </h1>
            <div className="relative w-full justify-self-center">
              <form className="flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-primary/60 md:h-5 md:w-5" />
                <Input
                  placeholder="Search for promo or category"
                  className="bg-blue-100 pl-8 text-sm text-primary placeholder:text-primary/60 md:pl-10 md:text-base"
                />
              </form>
            </div>
          </div>

          <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            <div className="flex min-w-max gap-4 px-4">
              {popularPromos.map((promo, idx) => (
                <div key={idx} className="snap-center">
                  <TransportRewardCard
                    name={promo.name}
                    icon={promo.icon}
                    points={promo.points}
                    discount={promo.discount}
                    isNew={promo.isNew}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mt-8 space-y-6 md:mt-12 md:space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold tracking-tighter text-blue-900 md:text-3xl lg:text-4xl">
              Recommended
            </h2>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-xl md:h-10 md:w-10"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-xl md:h-10 md:w-10"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            <div className="flex min-w-max gap-4 px-4">
              {recommendedPromos.map((promo, idx) => (
                <div key={idx} className="snap-center">
                  <TransportRewardCard
                    name={promo.name}
                    icon={promo.icon}
                    points={promo.points}
                    discount={promo.discount}
                    isNew={promo.isNew}
                    variant="light"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex h-16 w-full justify-center md:h-32">
        <div className="container flex flex-col items-center justify-center bg-white">
          <span className="text-xl font-semibold text-blue-900">
            Ingin lebih banyak promo?
          </span>
          <span className="text-balance text-sm text-muted-foreground md:text-base">
            Gunakan aplikasi kami lebih sering untuk penawaran menarik!
          </span>
        </div>
      </div>
    </div>
  );
}
