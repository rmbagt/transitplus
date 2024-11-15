"use client";

import { CircleFadingPlusIcon, Menu, User, X } from "lucide-react";
import type { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";

export function HeaderClient({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    ["Home", "/#home"],
    ["Points", "/#points"],
    ["Community", "/#community"],
    ["Leaderboard", "/#leaderboard"],
    ["Support", "/#support"],
  ];

  return (
    <div className="relative">
      <header className="fixed left-0 right-0 top-5 z-50 mx-auto max-w-7xl px-4 md:top-10">
        <div className="flex items-center justify-between">
          <Link
            href="/#home"
            className="flex items-center gap-1 rounded-full bg-blue-100/90 px-6 py-2 text-sm font-bold text-primary shadow-lg backdrop-blur-md"
          >
            <span className="font-black tracking-tighter">Transit</span>
            <CircleFadingPlusIcon />
          </Link>

          <nav className="hidden rounded-full bg-blue-100/90 px-6 py-2 shadow-lg backdrop-blur-md md:block">
            <ul className="flex items-center gap-8">
              {navItems.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href!}
                    className="text-sm font-medium text-primary transition-colors hover:text-blue-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {session ? (
              <Link
                href="/profile"
                className="hidden items-center gap-2 rounded-full bg-blue-100/90 px-6 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-md transition-colors hover:text-blue-400 md:flex"
              >
                {session.user.name}
                <User className="h-5 w-5" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="hidden items-center gap-2 rounded-full bg-blue-100/90 px-6 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-md transition-colors hover:text-blue-400 md:flex"
              >
                Profile
                <User className="h-5 w-5" />
              </Link>
            )}
            <button
              onClick={toggleMenu}
              className="rounded-full bg-blue-100/90 px-6 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-md md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <nav className="mt-2 rounded-lg bg-blue-100/90 shadow-lg backdrop-blur-md md:hidden">
            <ul className="flex flex-col py-2">
              {navItems.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href!}
                    className="block px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-blue-200/50 hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {session ? (
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-blue-200/50 hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    {session.user.name}
                    <User className="h-5 w-5" />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-blue-200/50 hover:text-blue-400"
                    onClick={toggleMenu}
                  >
                    Profile
                    <User className="h-5 w-5" />
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}
