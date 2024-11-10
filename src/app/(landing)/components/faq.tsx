"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      question: "How do I earn points through the platform?",
      answer:
        "Points can be earned by using public transport options, such as buses, trains, or biking. Each journey you complete adds to your total points, which can be tracked in the Journey Tracking page.",
    },
    {
      question: "How can I redeem my points?",
      answer:
        "Visit the Redeem Points page to see available rewards, including discounts and community event access. Each reward will show the required points needed for redemption.",
    },
    {
      question: "Is my personal journey data secure?",
      answer:
        "Yes, we prioritize user privacy. All journey data is securely stored and used only to enhance your experience and track your sustainable travel impact.",
    },
    {
      question: "What do I do if I forgot my password?",
      answer:
        "Go to the Login Page and click on 'Forgot Password.' Follow the prompts to reset your password through your registered email.",
    },
    {
      question: "Can I use the platform without GPS tracking?",
      answer:
        "Yes, although GPS tracking enhances accuracy, you can manually log journeys. However, for the best experience, GPS is recommended to auto-track your trips.",
    },
    {
      question: "How does the leaderboard work?",
      answer:
        "The leaderboard ranks users by total points earned, which can be filtered by location or transport type. It updates daily to reflect the latest journeys completed.",
    },
    {
      question: "How do I sign up for community events?",
      answer:
        "Visit the Community Events page, select an event, and choose to register using points or directly through the platform if the event is open for general sign-up.",
    },
  ];

  return (
    <section
      id="support"
      className="relative flex h-fit flex-col items-center px-4 py-12"
      style={{
        backgroundImage: "url('/login-bg.svg')",
        backgroundSize: "contain",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-10 h-3/5 bg-gradient-to-b from-blue-600 to-transparent" />
      <div className="z-20 w-full max-w-3xl">
        <h1 className="mb-8 text-balance text-center text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
          <span className="inline-block">Frequently Asked Questions</span> about
          TransitPlus
        </h1>

        <Accordion type="single" collapsible className="space-y-6">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg bg-white p-6 py-4 shadow-md md:py-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
