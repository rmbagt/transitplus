import { Train } from "lucide-react";
import { Bus } from "lucide-react";

export const TransportItems = [
  {
    name: "Transjakarta",
    icon: <Bus className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/tutorial-tj.svg",
  },
  {
    name: "MRT",
    icon: <Train className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/tutorial-mrt.svg",
  },
  {
    name: "LRT",
    icon: <Train className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/tutorial-lrt.svg",
  },
  {
    name: "KRL",
    icon: <Train className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/tutorial-krl.svg",
  },
  {
    name: "Mikrotrans",
    icon: <Bus className="h-5 w-5 md:h-6 md:w-6" />,
    image: "/tutorial-tj.svg",
  },
];

export const StepItems = [
  {
    key: "select-transport",
    title: "Select your Transport",
    backgroundImage: "",
    description:
      "Before you can earn points, you must first choose the public transportation you want to take.",
  },
  {
    key: "set-route",
    title: "Set your Route",
    backgroundImage: "/map-indo1.svg",
    description:
      "Choose your starting and destination points to get the best route.",
  },
  {
    key: "claim-points",
    title: "Claim your Points",
    backgroundImage: "/map-indo2.svg",
    description:
      "After arriving at your destination, claim your points and get rewards.",
  },
];
