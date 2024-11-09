import Link from "next/link";
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className="relative">
      <header className="fixed left-0 right-0 top-10 z-50 mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full bg-blue-100/90 px-6 py-2 text-sm font-bold text-primary shadow-lg backdrop-blur-md"
          >
            Logo
          </Link>

          <nav className="rounded-full bg-blue-100/90 px-6 py-2 shadow-lg backdrop-blur-md">
            <ul className="flex items-center gap-8">
              {[
                ["Home", "/"],
                ["Points", "/points"],
                ["Community", "/community"],
                ["Leaderboard", "/leaderboard"],
                ["Support", "/support"],
              ].map(([label, href]) => (
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

          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-full bg-blue-100/90 px-6 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-md transition-colors hover:text-blue-400"
          >
            Profile
            <User className="h-5 w-5" />
          </Link>
        </div>
      </header>
    </div>
  );
}
