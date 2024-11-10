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
      question: "What is TransitPlus?",
      answer:
        "Lorem ipsum dolor sit amet. 33 nihil deserunt ab ipsum dolore sit perferendis quaerat et iste nemo eos accusantium molestias? Est voluptatem nobis id minima quia et porro sunt nam sapiente laboriosam aut labore modi vel tempore animi?",
    },
    {
      question: "What is TransitPlus?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nisi excepturi eligendi.",
    },
    {
      question: "What is TransitPlus?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nisi excepturi eligendi.",
    },
    {
      question: "What is TransitPlus?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nisi excepturi eligendi.",
    },
    {
      question: "What is TransitPlus?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nisi excepturi eligendi.",
    },
    {
      question: "What is TransitPlus?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nisi excepturi eligendi.",
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
              className="rounded-lg bg-white p-6 shadow-md"
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
