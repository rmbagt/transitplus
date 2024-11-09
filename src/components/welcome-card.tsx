import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function WelcomeCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
      <div className="z-20 w-full max-w-[440px] rounded-lg border border-gray-100 bg-white p-6 shadow-lg md:p-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Image
            src="/welcome.svg"
            alt="Welcome"
            width={64}
            height={64}
            className="h-64 w-64"
          />
          <h1 className="text-xl font-bold text-blue-600">{title}</h1>
          <p className="text-muted-foreground">{text}</p>
          <Link href="/profile">
            <Button className="mt-4 rounded-full bg-gradient-to-t from-blue-600 to-blue-400 px-4 py-2 text-white transition-all duration-300 hover:from-blue-800 hover:to-blue-500">
              Back to Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
