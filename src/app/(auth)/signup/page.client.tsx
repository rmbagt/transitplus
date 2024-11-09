"use client";

import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPageClient() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative min-h-svh w-full">
      <div className="absolute inset-0 h-svh bg-gradient-to-t from-blue-300 to-white" />
      <div
        className="absolute inset-0"
        style={{
          background: "url(/login-bg.svg) no-repeat center center fixed",
          backgroundSize: "cover",
        }}
      />

      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        className="relative left-1 top-1 z-40 flex w-max items-center bg-transparent p-4 text-gray-600 hover:bg-transparent hover:text-gray-800 md:left-5 md:top-5"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back
      </Button>

      {/* Main Container */}
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        <div className="z-20 w-full max-w-[440px] rounded-lg border border-gray-100 bg-white p-6 shadow-lg md:p-8">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Rafael Marvin"
                  required
                  type="text"
                  className="focus-visible:ring-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="rafaelmarvin@gmail.com"
                  required
                  type="email"
                  className="focus-visible:ring-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    required
                    type={showPassword ? "text" : "password"}
                    className="pr-10 focus-visible:ring-blue-400"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent focus-visible:outline-none focus-visible:ring-blue-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    className="pr-10 focus-visible:ring-blue-400"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent focus-visible:outline-none focus-visible:ring-blue-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-none text-gray-600"
                >
                  By creating account, you agree to the{" "}
                  <Link href="#" className="text-blue-600">
                    Terms of Service
                  </Link>{" "}
                  and our{" "}
                  <Link href="#" className="text-blue-600">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            {/* Create Account Button */}
            <Link href="/profile">
              <Button className="mt-6 w-full bg-blue-600 py-2 text-white hover:bg-blue-700">
                Create account
              </Button>
            </Link>

            {/* Google Sign Up */}
            <Link href="/profile">
              <Button className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-100 py-2 text-blue-600 hover:bg-blue-200">
                <FcGoogle />
                Continue with Google
              </Button>
            </Link>

            {/* Login Link */}
            <div className="text-center text-sm">
              Already Have An Account?{" "}
              <Link href="/login" className="text-blue-600">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
