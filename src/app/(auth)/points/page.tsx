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
        className="relative h-96 rounded-b-[4rem]"
        style={{
          backgroundImage: "url(/profile-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 rounded-b-lg bg-gradient-to-b from-[#0C4384]/80 to-[#1577EA]/80 md:rounded-b-[2rem] lg:rounded-b-[4rem]" />

        <Button
          onClick={() => router.back()}
          className="absolute left-4 top-4 z-40 flex w-max items-center justify-center bg-white/20 text-white hover:bg-white/30 md:left-20 md:top-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </Button>

        <div className="absolute inset-0 flex items-center justify-center pb-20">
          <div className="container flex flex-col items-start justify-start gap-2 p-4 md:p-6 lg:p-8">
            <div className="flex items-center gap-2">
              <div className="flex size-20 items-center justify-center rounded-full bg-white">
                <AwardIcon size={40} className="text-primary" />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl text-white">
                  <span className="font-light">Travel</span>
                  <span className="font-black tracking-tight">Points</span>
                </span>
                <div className="flex items-center gap-2 rounded-md bg-blue-100 p-2 px-4 text-xl font-bold text-primary">
                  <DatabaseIcon
                    size={24}
                    strokeWidth={2.5}
                    className="text-primary"
                  />
                  <span className="font-mono">8900</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {transportTypes.map((type) => (
                <Button
                  key={type}
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container relative -top-32 mx-auto rounded-t-xl bg-white p-4 md:rounded-t-[2rem] md:p-6 lg:rounded-t-[4rem] lg:p-10">
        {/* Points and Redeem Section */}
        <Card className="absolute -top-24 right-20 w-[450px] rounded-2xl">
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

        {/* Popular Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 md:gap-4 lg:gap-10">
            <h1 className="text-left text-5xl font-extrabold tracking-tighter text-blue-900">
              Popular
            </h1>
            <div className="relative w-full justify-self-center p-4">
              <form className="flex items-center">
                <Search className="absolute left-6 h-5 w-5 text-primary/60" />
                <Input
                  placeholder="Search for promo or category"
                  className="bg-blue-100 pl-10 text-primary placeholder:text-primary/60"
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
        <div className="mt-12 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-extrabold tracking-tighter text-blue-900">
              Recommended
            </h2>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-xl">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-xl">
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
      <div className="absolute bottom-0 flex h-32 w-full justify-center">
        <div className="container flex flex-col items-center justify-center bg-white">
          <span className="text-xl font-semibold text-blue-900">
            Ingin lebih banyak promo?
          </span>
          <span className="text-muted-foreground">
            Gunakan aplikasi kami lebih sering untuk penawaran menarik!
          </span>
        </div>
      </div>
    </div>
  );
}
