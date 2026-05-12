"use client";

import DeliverySection from "@/features/pricing/components/DeliverySection";
import FeatureSection from "@/features/pricing/components/FeatureSection";
import FinalCtaSection from "@/features/pricing/components/FinalCtaSection";
import HeroPricing from "@/features/pricing/components/HeroPricing";
import PricingSection from "@/features/pricing/components/PricingSection";
import TestimonialShowcase from "@/features/pricing/components/TestimonialShowcase";
import { PRICING_TESTIMONIAL_VIDEOS } from "@/features/pricing/utils/testimonialVideos";

export default function Home() {
  return (
    <main className="min-h-dvh scroll-smooth bg-white font-lato text-neutral-900 antialiased">
      <HeroPricing />
      <FeatureSection />
      <PricingSection />
      <TestimonialShowcase
        testimonialsLabel="View all testimonials"
        testimonialsHref="/testimonials"
        videos={PRICING_TESTIMONIAL_VIDEOS}
      />
      <DeliverySection />
      <FinalCtaSection />
    </main>
  );
}
