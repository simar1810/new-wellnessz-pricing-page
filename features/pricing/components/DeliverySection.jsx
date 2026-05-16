"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const FAQ_SECTION_IMAGE = "/images/FAQ Section.png";

function BrandAppMockup() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Image
        src={FAQ_SECTION_IMAGE}
        alt="WellnessZ progress dashboard on laptop and meals screen on mobile"
        width={2400}
        height={1792}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-auto w-full max-w-[720px] object-contain rounded-2xl"
        priority
      />
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
        <div className="grid items-start gap-12 md:grid-cols-2">
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
            <Link
              href="#pricing-plans"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "mt-8 flex h-12 w-full items-center justify-center rounded-xl border border-black/10 bg-white px-8 text-sm font-semibold text-[#1B5E20] hover:bg-white/80 hover:shadow-sm hover:text-[#1B5E20] md:h-12 md:text-base",
              )}
            >
              Start 14-day free trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
