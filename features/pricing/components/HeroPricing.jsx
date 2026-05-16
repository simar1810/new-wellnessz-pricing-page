import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HERO_HIGHLIGHTS = [
  "Food database",
  "Diet plan builder",
  "Client progress report",
  "Appointment scheduling",
  "Habit tracking",
  "Workout library",
];

const HeroPricing = function () {
  return (
    <section className="relative w-full p-4">
      <div className="relative mx-auto max-w-[1400px] rounded-[20px] bg-linear-to-br text-center text-white md:rounded-[40px] pt-16  md:pt-24">
        <Image
          fill
          priority
          src="/images/pricing-hero.svg"
          className="z-0 rounded-[20px] object-cover md:rounded-[20px]"
          alt=""
        />
        <div className="relative z-1 flex h-[60vh] -translate-y-20 flex-col items-center justify-center leading-tight md:h-[75vh] md:-translate-y-36">
          <h1 className="max-w-[22ch] px-2 text-[26px] font-bold tracking-tight md:max-w-[32ch] md:text-[44px] lg:text-[52px]">
            India&apos;s leading client management platform for Health &amp;
            Wellness Professionals
          </h1>
          <p className="mx-auto mb-5 mt-4 max-w-[60ch] px-2 text-sm text-white/90 md:mb-6 md:mt-6 md:max-w-[70ch] md:text-lg">
            Manage diet plans, client progress, appointments, reminders, and
            reports from one powerful platform built to help coaches save time
            and scale faster.
          </p>
          <div className="mx-5 mb-5 inline-block max-w-3xl rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-medium leading-snug backdrop-blur-md sm:px-6 md:mb-6 md:text-sm">
            Trusted by 7000+ health coaches • 28,000+ verified foods • Built for
            dietitians, fitness trainers &amp; wellness coaches
          </div>

          <a
            href="#pricing-plans"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "mb-12 h-12 rounded-xl bg-white px-8 text-sm font-semibold text-[#1B5E20] hover:bg-white/90 hover:text-[#1B5E20] sm:w-auto md:h-14 md:text-base translate-y-5",
            )}
          >
            Start your 14-day free trial
          </a>
        </div>
      </div>
      <div
        id="pricing-hero-media"
        className="w-full translate-y-[-130px] scroll-mt-24 px-4 md:translate-y-[-230px] md:scroll-mt-32"
      >
        <div
          className="
            relative mx-auto max-w-3xl aspect-video overflow-hidden rounded-2xl border-4 border-[#67BC2A] bg-white
            after:absolute after:inset-0 after:rounded-[inherit] after:border-2 after:border-[#D9D9D9] after:content-[''] after:rotate-3 after:-z-10
          "
        >
          <Image
            fill
            priority
            src="/images/hero/hero-main-secondary.png"
            alt="WellnessZ app — built for coaches, trainers, dietitians, and wellness professionals"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPricing;
