import React from 'react'
import { featureQuickLinks } from '../utils/config'

const FeatureQuickLinks = () => {
  return (
    <div className="relative z-20 bg-[#f4f6f8] pb-12 pt-8 md:pb-16 px-4 md:px-6">
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
        </div>
  )
}

export default FeatureQuickLinks