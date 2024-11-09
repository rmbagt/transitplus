import Image from "next/image";
import { Button } from "../ui/button";

export const TransportRewardCard = ({
  name,
  icon,
  points = 1000,
  discount = 10000,
  isNew = false,
  variant = "default",
}: {
  name: string;
  icon: string;
  points?: number;
  discount?: number;
  isNew?: boolean;
  variant?: "default" | "light";
}) => {
  const bgClass =
    variant === "light"
      ? "bg-gradient-to-b from-blue-100 to-blue-50"
      : "bg-gradient-to-b from-blue-500 to-blue-400";

  const textClass = variant === "light" ? "text-blue-900" : "text-white";
  const buttonClass =
    variant === "light"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-white text-blue-500 hover:bg-blue-50";

  return (
    <div
      className={`relative w-full max-w-md rounded-3xl p-6 ${bgClass} ${textClass}`}
    >
      {/* Top Section with Icon and Points */}
      <div className="mb-4 flex items-start justify-between">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3">
          <Image
            src={icon}
            alt={`${name} logo`}
            fill
            className="size-12 object-contain p-2"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className={textClass}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </div>
          <span className="text-xl font-semibold">{points} points</span>
        </div>
      </div>

      <div className="mb-2 flex items-center gap-2">
        <h2 className="text-2xl font-bold">Sahabat {name}</h2>
        {isNew && (
          <span className="rounded-full bg-pink-200 px-3 py-1 text-sm font-semibold text-pink-500">
            New!
          </span>
        )}
      </div>

      <p className="mb-2">
        Potongan harga sebanyak Rp {discount.toLocaleString()}
      </p>

      <Button
        className={`rounded-full px-6 py-2 font-semibold transition-colors ${buttonClass}`}
      >
        Redeem
      </Button>
    </div>
  );
};
