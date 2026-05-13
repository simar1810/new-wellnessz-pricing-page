"use client";

import { buttonVariants } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1f7a34] px-4 py-16 text-white md:py-20">
      <DotPattern
        className={cn(
          "text-white/25",
        )}
      />
      <div className="relative z-10 mx-auto max-w-[960px] text-center">
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-5xl">
          Redefine your Health Coaching with a Better System
        </h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-sm text-white/90 md:mt-5 md:text-lg">
          Start managing clients, plans, progress, and appointments from one
          powerful coaching platform.
        </p>
        <Link
          href="#pricing-plans"
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-[#1B5E20] hover:bg-white/90 hover:text-[#1B5E20] md:h-14 md:text-base",
          )}
        >
          Start 14-day free trial
        </Link>
      </div>
    </section>
  );
}
