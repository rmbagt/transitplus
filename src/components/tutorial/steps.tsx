import { CircleDot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Steps({ currentStep }: { currentStep: string }) {
  const stepTransition = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <motion.div
      className="pt-6 md:pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`step1-${currentStep}`}
            className="flex items-center gap-1 md:gap-2"
            variants={stepTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {currentStep === "select-transport" ? (
              <CircleDot
                className={`h-3 w-3 md:h-4 md:w-4 ${
                  currentStep === "select-transport"
                    ? "text-white"
                    : "text-blue-600"
                }`}
              />
            ) : (
              <div className="h-3 w-3 rounded-full bg-blue-600 md:h-4 md:w-4" />
            )}
            <span
              className={`text-xs font-medium md:text-sm ${
                currentStep === "select-transport"
                  ? "text-white"
                  : "text-blue-600"
              }`}
            >
              Select Transport
            </span>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={`h-0.5 w-8 ${
            currentStep === "select-transport" ? "bg-white/30" : "bg-blue-200"
          } md:w-12`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`step2-${currentStep}`}
            className="flex items-center gap-1 md:gap-2"
            variants={stepTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {currentStep === "set-route" ? (
              <CircleDot className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
            ) : (
              <div
                className={`h-3 w-3 rounded-full ${
                  currentStep === "claim-points"
                    ? "bg-blue-600"
                    : "border border-current"
                } md:h-4 md:w-4 ${
                  currentStep === "select-transport"
                    ? "border-white opacity-50"
                    : "border-blue-600"
                }`}
              />
            )}
            <span
              className={`text-xs font-medium md:text-sm ${
                currentStep === "select-transport"
                  ? "text-white opacity-50"
                  : "text-blue-600"
              }`}
            >
              Set Route
            </span>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={`h-0.5 w-8 ${
            currentStep === "select-transport" ? "bg-white/30" : "bg-blue-200"
          } md:w-12`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`step3-${currentStep}`}
            className="flex items-center gap-1 md:gap-2"
            variants={stepTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {currentStep === "claim-points" ? (
              <CircleDot className="h-3 w-3 text-blue-600 md:h-4 md:w-4" />
            ) : (
              <div
                className={`h-3 w-3 rounded-full border border-blue-600 md:h-4 md:w-4 ${
                  currentStep === "select-transport"
                    ? "border-white opacity-50"
                    : "border-blue-600"
                }`}
              />
            )}
            <span
              className={`text-xs font-medium md:text-sm ${
                currentStep === "select-transport"
                  ? "text-white opacity-50"
                  : "text-blue-600"
              }`}
            >
              Claim Points
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
