"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "Why do I need WellnessZ app as a coach?",
    a: "Managing clients manually takes too much time and effort. WellnessZ automates meal planning, client tracking, progress reporting, and reminders, helping you scale your business while delivering better results.",
  },
  {
    q: "How will WellnessZ help me grow my coaching business?",
    a: "WellnessZ helps you manage more clients without increasing manual work. You can create plans faster, track progress better, automate reminders, and improve client retention.",
  },
  {
    q: "What makes WellnessZ different from other coaching tools?",
    a: "WellnessZ combines diet planning, workout sessions, habit nudges, progress reports, appointment scheduling, food database access, and client management in one platform.",
  },
  {
    q: "Can I create and assign personalized diet plans?",
    a: "Yes. You can create custom diet plans for each client and also use verified diet plans with macro and micronutrient breakdowns.",
  },
  {
    q: "How does the progress report feature work?",
    a: "You can generate detailed client progress reports covering nutrition, workouts, and goal progress, then share them with clients for better accountability.",
  },
  {
    q: "Can I schedule and manage client appointments through the app?",
    a: "Yes. WellnessZ supports appointment booking and online session scheduling, helping you manage coaching sessions from the same platform.",
  },
];

const appMockups = [
  {
    src: "/images/pricing/mockups/Mock-2.png",
    alt: "WellnessZ app meals and recipes screen",
  },
  {
    src: "/images/pricing/mockups/Mock-3.png",
    alt: "WellnessZ app progress screen",
  },
];

function BrandAppMockup() {
  return (
    <div className="relative -mx-8 flex min-h-[600px] w-[calc(100%+4rem)] items-center justify-center overflow-visible px-8">
      <div className="absolute h-[540px] w-[540px] rounded-full bg-[#67BC2A]/15 blur-3xl" />

      <div className="relative flex w-full max-w-[640px] items-center justify-center">
        {appMockups.map((mockup, index) => (
          <div
            key={mockup.src}
            className={`relative aspect-[9/19.5] w-[58%] max-w-[280px] sm:w-[52%] ${
              index === 0
                ? "translate-x-10 rotate-[-5deg] sm:translate-x-16"
                : "-translate-x-10 translate-y-10 rotate-[5deg] sm:-translate-x-16"
            }`}
          >
            <Image
              src={mockup.src}
              alt={mockup.alt}
              fill
              sizes="(max-width: 768px) 58vw, 280px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DeliverySection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-10 text-center text-2xl font-semibold text-[#0F1F26] md:mb-12 md:text-3xl">
          Questions asked by Coaches
        </h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <BrandAppMockup />

          <div className="rounded-2xl bg-gray-50 p-8 md:p-10">
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = i === openIndex;

                return (
                  <div key={faq.q} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-3 text-left"
                      type="button"
                    >
                      <span className="text-base font-medium text-black">
                        {faq.q}
                      </span>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "mt-3 max-h-96" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-gray-500">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
