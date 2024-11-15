import Image from "next/image";
import { Button } from "../ui/button";

export const TransportRewardCard = ({
  name,
  icon,
  points = 1000,
  discount = 10000,
  isNew = false,
  variant = "default",
  isRedeemed = false,
  onRedeem,
}: {
  name: string;
  icon: string;
  points?: number;
  discount?: number;
  isNew?: boolean;
  variant?: "default" | "light";
  isRedeemed?: boolean;
  onRedeem?: () => void;
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
      className={`relative flex h-full w-full max-w-[350px] flex-col justify-between rounded-2xl p-4 md:max-w-md md:rounded-3xl md:p-6 lg:max-w-lg ${bgClass} ${textClass}`}
    >
      {/* Top Section with Icon and Points */}
      <div className="mb-3 flex items-start justify-between md:mb-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 md:h-16 md:w-16 md:rounded-2xl md:p-3">
          <Image
            src={icon}
            alt={`${name} logo`}
            fill
            sizes="(max-width: 640px) 48px, 64px"
            className="size-10 object-contain p-1 md:size-12 md:p-2"
          />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <div className={textClass}>
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </div>
          <span className="text-base font-semibold md:text-xl">
            {points} points
          </span>
        </div>
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h2 className="text-lg font-bold md:text-2xl">Sahabat {name}</h2>
        {isNew && (
          <span className="inset-0 rounded-full bg-pink-200 px-2 py-0.5 text-xs font-semibold text-pink-500 md:px-3 md:py-1 md:text-sm">
            New!
          </span>
        )}
        <p className="mb-2 text-sm md:text-base">
          Potongan harga sebanyak Rp {discount.toLocaleString()}
        </p>
      </div>

      <Button
        onClick={onRedeem}
        disabled={isRedeemed}
        className={`mt-2 w-full rounded-full px-4 py-1.5 text-sm font-semibold transition-colors md:w-auto md:px-6 md:py-2 md:text-base ${buttonClass} ${
          isRedeemed ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {isRedeemed ? "Redeemed" : "Redeem"}
      </Button>
    </div>
  );
};
