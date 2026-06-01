"use client";

import DeliverySection from "@/features/pricing/components/DeliverySection";
import FeatureQuickLinks from "@/features/pricing/components/FeatureQuickLinks";
import FeatureSection from "@/features/pricing/components/FeatureSection";
import FinalCtaSection from "@/features/pricing/components/FinalCtaSection";
import HeroPricing from "@/features/pricing/components/HeroPricing";
import PricingSection from "@/features/pricing/components/PricingSection";
import TestimonialShowcase from "@/features/pricing/components/TestimonialShowcase";
import TrustedPartners from "@/features/pricing/components/TrustedPartners";
import { PRICING_TESTIMONIAL_VIDEOS } from "@/features/pricing/utils/testimonialVideos";

export default function Home() {
  return (
    <main className="min-h-dvh scroll-smooth bg-white font-lato text-neutral-900 antialiased">
      <HeroPricing />
      <div className="mt-0 md:-mt-14">
        <TrustedPartners/>
      </div>
      <FeatureSection />
      <div className="-mt-8 md:-mt-14">
        <FeatureQuickLinks />
      </div>
      <PricingSection />
      <TestimonialShowcase
        testimonialsHref="/testimonials"
        videos={PRICING_TESTIMONIAL_VIDEOS}
      />
      <DeliverySection />
      <FinalCtaSection />
    </main>
  );
}
