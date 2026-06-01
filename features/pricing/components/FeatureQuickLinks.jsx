import React from 'react'
import { featureQuickLinks } from '../utils/config'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const FeatureQuickLinks = () => {
  return (
    <div className="relative z-20 bg-[#f4f6f8] pb-6 pt-8 md:pb-8 px-4 md:px-6">
      <h3 className="text-center text-lg font-bold text-gray-900 md:text-xl">
        Everything you need to run your practice
      </h3>
      <ul className="mx-auto mt-6 grid max-w-[1000px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
        {featureQuickLinks.map((label) => (
          <li
            key={label}
            className="flex h-16 items-center justify-center rounded-xl border border-[#e0e0e0] bg-white px-3 py-3 text-center text-xs font-semibold text-gray-800 shadow-sm transition-all duration-200 ease-out hover:scale-[1.02] hover:border-[#2e7d32]/40 hover:bg-[#f3fbf4] hover:shadow-md md:text-sm"
          >
            {label}
          </li>
        ))}
      </ul>
      <div className="relative z-10 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <Link
          href="#pricing-plans"
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "h-12 rounded-xl border border-black/10 bg-white px-8 text-sm font-semibold text-[#1B5E20] hover:bg-white/80 hover:shadow-sm hover:text-[#1B5E20] md:h-12 md:text-base",
          )}
        >
          Start 14-day free trial
        </Link>
      </div>
    </div>
  );
}

export default FeatureQuickLinks