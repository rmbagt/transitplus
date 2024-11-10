"use client";

import { ArrowLeft, User2Icon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { History } from "@/components/profile/history";
import { Profile } from "@/components/profile/profile";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <div className="min-h-svh max-w-[100vw] bg-gray-50">
      <div
        className="relative h-32 md:h-64"
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
          <div className="container flex items-center justify-end gap-2 p-4 md:flex-row md:p-6 lg:p-8">
            <span className="text-2xl text-white md:text-4xl">
              <span className="font-black">Profile</span>
            </span>
            <div className="flex size-10 items-center justify-center rounded-full bg-white md:size-20">
              <User2Icon className="size-4 text-primary md:size-10" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-52 left-1/2 -translate-x-1/2 transform md:-bottom-24 md:left-[10%] md:-translate-x-[10%]">
          <div className="relative flex flex-col items-center justify-center gap-2 px-4 md:flex-row md:items-end">
            <Image
              src="/avatar.png"
              alt="Profile"
              width={198}
              height={198}
              className="rounded-full border-4 border-white shadow-md"
            />
            <div className="space-y-2 text-center md:text-left">
              <p className="text-2xl font-bold tracking-tight text-blue-900 md:text-3xl">
                Rafael Marvin
              </p>
              <p className="font-light text-muted-foreground">
                Kebon Jeruk, Jakarta Barat, IDN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 pt-56 md:p-6 md:pt-32 lg:p-8 lg:pt-32">
        <div className="md:flex md:gap-8">
          <div className="md:w-1/3">
            <Profile />
          </div>

          <div className="mt-6 md:mt-0 md:w-2/3">
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}
