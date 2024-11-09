import { CircleDot } from "lucide-react";

export default function Steps({ currentStep }: { currentStep: string }) {
  return (
    <div className="pt-6 md:pt-8">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1 md:gap-2">
          {currentStep === "select-transport" ? (
            <CircleDot
              className={`h-3 w-3 md:h-4 md:w-4 ${currentStep === "select-transport" ? "text-white" : "text-blue-600"}`}
            />
          ) : (
            <div className="h-3 w-3 rounded-full bg-blue-600 md:h-4 md:w-4" />
          )}
          <span
            className={`text-xs font-medium md:text-sm ${currentStep === "select-transport" ? "text-white" : "text-blue-600"}`}
          >
            Select Transport
          </span>
        </div>
        <div
          className={`h-0.5 w-8 ${currentStep === "select-transport" ? "bg-white/30" : "bg-blue-200"} md:w-12`}
        />
        <div className="flex items-center gap-1 md:gap-2">
          {currentStep === "set-route" ? (
            <CircleDot className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          ) : (
            <div
              className={`h-3 w-3 rounded-full ${currentStep === "claim-points" ? "bg-blue-600" : "border border-current"} md:h-4 md:w-4 ${currentStep === "select-transport" ? "border-white opacity-50" : "border-blue-600"}`}
            />
          )}
          <span
            className={`text-xs font-medium md:text-sm ${currentStep === "select-transport" ? "text-white opacity-50" : "text-blue-600"}`}
          >
            Set Route
          </span>
        </div>
        <div
          className={`h-0.5 w-8 ${currentStep === "select-transport" ? "bg-white/30" : "bg-blue-200"} md:w-12`}
        />
        <div className="flex items-center gap-1 md:gap-2">
          {currentStep === "claim-points" ? (
            <CircleDot className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
          ) : (
            <div
              className={`h-3 w-3 rounded-full border border-current md:h-4 md:w-4 ${currentStep === "select-transport" ? "border-white opacity-50" : "border-blue-600"}`}
            />
          )}
          <span
            className={`text-xs font-medium md:text-sm ${currentStep === "select-transport" ? "text-white opacity-50" : "text-blue-600"}`}
          >
            Claim Points
          </span>
        </div>
      </div>
    </div>
  );
}
