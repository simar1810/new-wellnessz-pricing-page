"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";

const DEFAULT_REDIRECT = "https://app.wellnessz.in/login";
const REDIRECT_AFTER_SECONDS = 5;

function ThankYouContent() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || DEFAULT_REDIRECT;
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_AFTER_SECONDS);
  const purchaseFiredRef = useRef(false);

  // useEffect(() => {
  //   const firePurchase = () => {
  //     if (typeof window !== "undefined" && window.fbq && !purchaseFiredRef.current) {
  //       purchaseFiredRef.current = true;
  //       window.fbq("track", "Purchase", {
  //         value: 0,
  //         currency: "INR",
  //       });
  //     }
  //   };
  //   firePurchase();
  //   const t = setInterval(() => {
  //     firePurchase();
  //     if (purchaseFiredRef.current) clearInterval(t);
  //   }, 200);
  //   return () => clearInterval(t);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = redirectUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = redirectUrl;
    }, REDIRECT_AFTER_SECONDS * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [redirectUrl]);

  const progressPercent = ((REDIRECT_AFTER_SECONDS - secondsLeft) / REDIRECT_AFTER_SECONDS) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F8FFF5] to-[#E8F8ED] flex items-center justify-center px-4 relative overflow-hidden">
      {/* WellnessZ ambient blurs */}
      <div className="absolute top-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-[#67BC2A]/20 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-[380px] w-[380px] rounded-full bg-[#03632C]/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#67BC2A]/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-[24px] md:rounded-[32px] border border-white/80 bg-white/90 backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-[#67BC2A]/10 text-center">
          {/* Success checkmark with celebration animation */}
          <div className="relative mx-auto mb-6 w-24 h-24 flex justify-center items-center">
            {/* Celebration ring pulses */}
            <div className="absolute inset-0 rounded-full border-2 border-[#67BC2A]/40 animate-[ring-pulse_2s_ease-out_infinite]" />
            <div className="absolute inset-0 rounded-full border-2 border-[#67BC2A]/30 animate-[ring-pulse_2s_ease-out_infinite]" style={{ animationDelay: "0.4s" }} />
            <div className="absolute inset-0 rounded-full bg-[#67BC2A]/15 flex items-center justify-center animate-[success-pop_0.6s_ease-out_forwards] opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="w-20 h-20 rounded-full bg-[#67BC2A]/25 flex items-center justify-center animate-[success-pop_0.5s_ease-out_forwards] opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <svg
                  className="w-12 h-12 text-[#03632C] animate-[check-visible_0.4s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#03632C]">
            Registration Successful
          </h1>

          <p className="mt-3 text-[#03632C]/85 text-base md:text-lg">
            We are preparing your health coach dashboard on WellnessZ
          </p>

          {/* Loading animation - preparing indicator */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-[#03632C]/70 text-sm">
              <span className="inline-flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#67BC2A] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#67BC2A] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#67BC2A] animate-bounce" style={{ animationDelay: "300ms" }} />
              </span>
              <span>Setting up your workspace</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-[#67BC2A]/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#67BC2A] to-[#03632C] transition-all duration-1000 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {secondsLeft > 0 && (
              <p className="text-sm text-[#03632C]/60">
                Redirecting to login in <span className="font-semibold text-[#03632C]">{secondsLeft}s</span>
              </p>
            )}
          </div>

          <button
            onClick={() => (window.location.href = redirectUrl)}
            className="mt-8 w-full rounded-xl bg-[#03632C] px-6 py-3.5 text-white font-semibold hover:bg-[#024d22] transition-colors shadow-lg shadow-[#03632C]/20"
          >
            Go to Login
          </button>
        </div>
      </div>

      <style>{`
        @keyframes success-pop {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes check-visible {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes ring-pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-white via-[#F8FFF5] to-[#E8F8ED] flex items-center justify-center">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#67BC2A] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-3 h-3 rounded-full bg-[#67BC2A] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-3 h-3 rounded-full bg-[#67BC2A] animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
