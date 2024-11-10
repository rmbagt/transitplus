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
    <div className="min-h-screen bg-gray-50">
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
          className="absolute left-4 top-4 z-40 flex w-max items-center justify-center bg-white/20 text-white hover:bg-white/30 md:left-20 md:top-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </Button>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container flex items-center justify-end gap-2 p-4 md:p-6 lg:p-8">
            <span className="text-4xl text-white">
              My <span className="font-black">Profile</span>
            </span>
            <div className="flex size-20 items-center justify-center rounded-full bg-white">
              <User2Icon size={40} className="text-primary" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 left-[10%] -translate-x-[10%]">
          <div className="relative">
            <Image
              src="/avatar.png"
              alt="Profile"
              width={198}
              height={198}
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="mb-10 space-y-2 pl-56">
          <p className="text-3xl font-bold tracking-tight text-blue-900">
            Rafael Marvin
          </p>
          <p className="font-light text-muted-foreground">
            Kebon Jeruk, Jakarta Barat, IDN
          </p>
        </div>

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
