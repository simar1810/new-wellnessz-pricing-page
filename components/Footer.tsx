"use client";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#03632C] px-4 py-12 font-lato text-white sm:px-6 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="w-full space-y-5 md:max-w-[230px]">
            <div>
              <Image
                src="/images/WellnessZ.svg"
                alt="WellnessZ"
                width={106}
                height={21}
              />
            </div>
            <p className="max-w-[260px] text-[18px] leading-[1.2] font-bold text-white">
              Redefine your Health Coaching
              with a better system
            </p>
            <div className="flex items-center gap-4 text-white">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61553253021745&mibextid=ZbWKwL/"
                className="transition-opacity hover:opacity-80"
                aria-label="WellnessZ on Facebook"
              >
                <Facebook size={22} aria-hidden />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ=="
                className="transition-opacity hover:opacity-80"
                aria-label="WellnessZ on Instagram"
              >
                <Instagram size={22} aria-hidden />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/wellnessz/"
                className="transition-opacity hover:opacity-80"
                aria-label="WellnessZ on LinkedIn"
              >
                <Linkedin size={22} aria-hidden />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@WellnessZ-oe4xk"
                className="transition-opacity hover:opacity-80"
                aria-label="WellnessZ on YouTube"
              >
                <Youtube size={22} aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-[18px] font-bold uppercase">
                Company
              </h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-base leading-none text-white hover:opacity-80">
                  About
                </Link>
                <a
                  href="/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base leading-none text-white hover:opacity-80"
                >
                  Pricing
                </a>
                <Link href="/blogs" className="block text-base leading-none text-white hover:opacity-80">
                  Blogs
                </Link>
                <Link href="/mentor" className="block text-base leading-none text-white hover:opacity-80">
                  Mentors
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[18px] font-bold uppercase">
                Support
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:support@wellnessz.in"
                  className="block text-base leading-none text-white hover:opacity-80"
                >
                  Help Center
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[18px] font-bold uppercase">
                Legal
              </h4>
              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-base leading-none text-white hover:opacity-80">
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" className="block text-base leading-none text-white hover:opacity-80">
                  Terms &amp; Conditions
                </Link>
                <Link href="/refund-policy" className="block text-base leading-none text-white hover:opacity-80">
                  Refund Policy
                </Link>
                <Link href="/cancellation-policy" className="block text-base leading-none text-white hover:opacity-80">
                  Cancellation Policy
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[18px] font-bold uppercase">
                Contact
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:support@wellnessz.in"
                  className="block text-base leading-none text-white hover:opacity-80"
                >
                  support@wellnessz.in
                </a>
                <a
                  href="tel:+917888624347"
                  className="block text-base leading-none text-white hover:opacity-80"
                >
                  +91 7888624347
                </a>
                <p className="max-w-xs text-base leading-[1.2] text-white">
                  A-197, TC Coworks space, Office Number S-04, 2nd Floor, Sec-63,
                  Sector 63, Noida, Uttar Pradesh 201309
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/30 pt-6 lg:flex-row lg:items-end lg:justify-between">
          <Image
            src="/images/Mask-group.svg"
            alt=""
            width={348}
            height={74}
            aria-hidden
          />
          <p className="text-base font-medium text-white">
            © 2026 Mohi Lifestile Solutions Private Limited ® | All Rights Reserved
            Made with Love ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
