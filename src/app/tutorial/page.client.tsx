"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { StepItems } from "./data";
import Steps from "@/components/tutorial/steps";
import {
  TransportSliderButton,
  TransportSliderImage,
} from "@/components/tutorial/transport-slider";
import { SetRouteForm, SetRouteHero } from "@/components/tutorial/set-route";
import {
  ClaimPointForm,
  ClaimPointHero,
} from "@/components/tutorial/claim-point";

export default function TutorialPageClient() {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState("select-transport");

  const handleNextStep = () => {
    const currentStepIndex = StepItems.findIndex(
      (step) => step.key === currentStep,
    );
    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < StepItems.length) {
      if (StepItems[nextStepIndex]) {
        setCurrentStep(StepItems[nextStepIndex].key);
      }
    } else {
      router.push("/");
    }
  };

  const renderLeftComponent = () => {
    switch (currentStep) {
      case "select-transport":
        return (
          <TransportSliderButton
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        );
      case "set-route":
        return <SetRouteHero />;
      case "claim-point":
        return <ClaimPointHero />;
      default:
        return null;
    }
  };

  const renderRightComponent = () => {
    switch (currentStep) {
      case "select-transport":
        return <TransportSliderImage selectedIndex={selectedIndex} />;
      case "set-route":
        return <SetRouteForm />;
      case "claim-points":
        return <ClaimPointForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-svh flex-col md:h-svh md:flex-row">
      <div
        className="absolute inset-0 -z-10 blur-sm"
        style={{
          background: `url(${StepItems.find((step) => currentStep == step.key)?.backgroundImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      />

      {/* Left Section */}
      <div
        className={`flex flex-col justify-center p-6 md:w-[40%] md:p-8 ${currentStep == "select-transport" && "bg-blue-600 text-white"}`}
      >
        {renderLeftComponent()}
        <Steps currentStep={currentStep} />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center gap-4 p-6 md:w-[60%] md:p-8">
        {renderRightComponent()}

        {/* Button */}
        <Button
          onClick={handleNextStep}
          className="w-full rounded-full bg-gradient-to-b from-blue-600 to-blue-400 hover:bg-blue-700 md:w-32"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
