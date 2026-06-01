"use client";

import { buttonVariants } from "@/components/ui/button";
import { useHasMounted } from "@/lib/use-has-mounted";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HERO_POSTER_SRC = "/images/hero/hero-main-secondary.png";
const HERO_VIDEO_SRC = "/mp4/pricing/pricing-hero.mp4";

function pauseAndMuteVideos(root) {
  root?.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.muted = true;
  });
}

const HeroPricing = function() {
  const hasMounted = useHasMounted();
  const videoSectionRef = useRef(null);

  useEffect(() => {
    const section = videoSectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          pauseAndMuteVideos(section);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative mb-10 w-full p-4 md:mb-0">
      <div className="relative mx-auto max-w-[1400px] rounded-[20px] bg-linear-to-br pb-16 pt-16 text-center text-white md:rounded-[40px] md:pb-0 md:pt-24">
        <Image
          fill
          priority
          src="/images/pricing-hero.svg"
          className="z-0 rounded-[20px] object-cover md:rounded-[20px]"
          alt=""
        />
        <div className="relative z-1 flex h-auto min-h-0 translate-y-0 flex-col items-center justify-center py-6 leading-tight md:h-[75vh] md:-translate-y-14 md:py-0">
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
              "mb-0 h-12 rounded-xl bg-white px-8 text-sm font-semibold text-[#1B5E20] hover:bg-white/90 hover:text-[#1B5E20] sm:w-auto md:mb-12 md:h-14 md:text-base",
            )}
          >
            Start 14-day free trial
          </a>
        </div>
      </div>
      <div
        ref={videoSectionRef}
        id="pricing-hero-video"
        className="my-6 w-full translate-y-0 scroll-mt-24 px-4 md:my-0 md:-translate-y-[150px] md:scroll-mt-32"
      >
        <div
          className="
            relative mx-auto max-w-3xl aspect-video overflow-hidden rounded-2xl border-4 border-[#67BC2A] bg-white
            after:absolute after:inset-0 after:rounded-[inherit] after:border-2 after:border-[#D9D9D9] after:content-[''] after:rotate-3 after:-z-10
          "
        >
          {hasMounted ? (
            <video
              className="h-full w-full object-contain"
              src={HERO_VIDEO_SRC}
              poster={HERO_POSTER_SRC}
              controls
              controlsList="nodownload"
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              fill
              priority
              src={HERO_POSTER_SRC}
              alt="WellnessZ app — built for coaches, trainers, dietitians, and wellness professionals"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroPricing;
