import React from 'react'

export const PARTNERS_LOGO_BASE = "/images/pricing/partners";

export const PARTNER_LOGO_FILES = [
  "CalorieCounts.png",
  "Eterno.png",
  "FitBuild.png",
  "FitBodyCulture.png",
  "FitlyDietClinic.jpg",
  "Fitterify.png",
  "Hale.png",
  "Healthwithdhriti.png",
  "Nutricoach.png",
  "Samyoga.png",
  "Seretofyher.png"
];


const TrustedPartners = () => {
  return (
    <section className="w-full px-4 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-20">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4">
        <p
          className="mb-1 text-center font-semibold tracking-normal text-[#03632C]"
          style={{ fontSize: "clamp(28px, 5vw, 42px)", lineHeight: "1.1" }}
     
        >
          Our Trusted Partners
        </p>
        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logos-scroll-container {
            display: flex;
            gap: 1.25rem;
            animation: scrollLeft 30s linear infinite;
            width: max-content;
          }
        `}</style>
        <div className="w-full overflow-hidden">
          <div className="logos-scroll-container py-2">
            <div className="flex shrink-0 items-center gap-3 md:gap-4">
              {PARTNER_LOGO_FILES.map((filename) => (
                <div
                  key={`top-strip-1-${filename}`}
                  className="flex w-[124px] shrink-0 items-center justify-center rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 shadow-sm md:w-[160px] md:px-6 md:py-4"
                >
                  <img
                    src={`${PARTNERS_LOGO_BASE}/${filename}`}
                    loading="lazy"
                    alt="Partner logo"
                    className="h-14 w-auto object-contain md:h-16"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-3 md:gap-4">
              {PARTNER_LOGO_FILES.map((filename) => (
                <div
                  key={`top-strip-2-${filename}`}
                  className="flex w-[124px] shrink-0 items-center justify-center rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 shadow-sm md:w-[160px] md:px-6 md:py-4"
                >
                  <img
                    src={`${PARTNERS_LOGO_BASE}/${filename}`}
                    loading="lazy"
                    alt="Partner logo"
                    className="h-14 w-auto object-contain md:h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedPartners