"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import WellnessZLogoLink from "@/components/WellnessZLogoLink";
import { mainSiteBase } from "@/lib/mainSite";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

function zeefitSiteBase(): string {
  const raw =
    process.env.NEXT_PUBLIC_ZEEFIT_URL || "https://www.zeefit.in";
  return String(raw).replace(/\/+$/, "");
}

function FooterLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "block cursor-pointer text-xs text-white/40 transition-colors hover:text-white sm:text-sm";
  if (!external || href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const base = mainSiteBase();
  const zeefit = zeefitSiteBase();

  const companyLinks = [
    { label: "About", href: `${base}/about` },
    { label: "Pricing", href: "/" },
    { label: "Blogs", href: `${base}/blogs` },
    { label: "Mentors", href: `${zeefit}/find-experts` },
  ];

  const supportLinks = [
    { label: "Help Center", href: `${base}/help-center` },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: `${base}/legal/privacy-policy` },
    { label: "Terms & Conditions", href: `${base}/legal/user-terms` },
    { label: "Refund Policy", href: `${base}/legal/refund-policy` },
    { label: "Cancellation Policy", href: `${base}/legal/cancellation-policy` },
  ];

  const phoneDisplay = "+91 7888624347";
  const phoneHref = "tel:+917888624347";

  const addressLines =
    "A-197, TC Coworks space, Office Number S-04, 2nd Floor, Sec-63, Sector 63, Noida, Uttar Pradesh 201309";
  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "A-197, TC Coworks space, Office Number S-04, 2nd Floor, Sec-63, Sector 63, Noida, Uttar Pradesh 201309",
    );

  const router = useRouter();

  return (
    <footer className="bg-black px-4 py-12 font-sans text-[#a0a0a0] sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 text-center md:mb-20 md:grid-cols-12 md:gap-10 md:text-left lg:gap-12">
          <div className="min-w-0 space-y-6 md:col-span-3">
            <div className="mx-auto inline-block max-w-full md:mx-0">
              <WellnessZLogoLink href="/" isFooter />
            </div>
            <div className="flex flex-col items-center space-y-6 md:items-start">
              <p className="max-w-[230px] text-center text-sm leading-relaxed text-white/70 md:text-left">
                Are you a trainer, dietitian or wellness coach wanting to get
                more exposure by listing here?
              </p>
              <button
                type="button"
                onClick={() => router.push("/#pricing-plans")}
                className="rounded-lg border border-white/40 px-8 py-3.5 text-[10px] font-black tracking-widest text-white/40 transition-all hover:bg-white hover:text-black sm:px-10 sm:py-4 sm:text-xs"
              >
                GET LISTED
              </button>
            </div>
          </div>

          <div className="order-2 grid grid-cols-2 gap-x-8 gap-y-10 text-left sm:grid-cols-2 md:col-span-9 lg:grid-cols-4 lg:gap-10">
            <div className="space-y-4">
              <h4 className="text-sm font-black tracking-wide text-white/70 uppercase">
                Company
              </h4>
              <div className="space-y-2">
                {companyLinks.map((item) => (
                  <FooterLink
                    key={item.label}
                    href={item.href}
                    external={!item.href.startsWith("/")}
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black tracking-wide text-white/70 uppercase">
                Support
              </h4>
              <div className="space-y-2">
                {supportLinks.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black tracking-wide text-white/70 uppercase">
                Legal
              </h4>
              <div className="space-y-2">
                {legalLinks.map((item) => (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-black tracking-wide text-white/70 uppercase">
                  Contact
                </h4>
                <a
                  href={phoneHref}
                  className="block text-xs text-white/40 transition-colors hover:text-white sm:text-sm"
                >
                  {phoneDisplay}
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black tracking-wide text-white/70 uppercase">
                  Address
                </h4>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block max-w-xs text-xs leading-relaxed text-white/40 transition-colors hover:text-white sm:text-sm"
                >
                  {addressLines}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-b border-white/40 pt-8 pb-6">
          <div className="hidden flex-col items-center gap-6 sm:flex sm:flex-row sm:justify-start">
            <div className="flex items-center justify-center gap-5 text-white/70 sm:justify-start">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61553253021745&mibextid=ZbWKwL/"
                className="transition-colors hover:text-white"
                aria-label="Zeefit on Facebook"
              >
                <Facebook size={20} aria-hidden />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ=="
                className="transition-colors hover:text-white"
                aria-label="Zeefit on Instagram"
              >
                <Instagram size={20} aria-hidden />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/wellnessz/"
                className="transition-colors hover:text-white"
                aria-label="Zeefit on LinkedIn"
              >
                <Linkedin size={20} aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-5 text-white/70 sm:hidden">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=61553253021745&mibextid=ZbWKwL/"
            className="transition-colors hover:text-white"
            aria-label="Zeefit on Facebook"
          >
            <Facebook size={20} aria-hidden />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/wellnessz_official?igshid=MzMyNGUyNmU2YQ=="
            className="transition-colors hover:text-white"
            aria-label="Zeefit on Instagram"
          >
            <Instagram size={20} aria-hidden />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/wellnessz/"
            className="transition-colors hover:text-white"
            aria-label="Zeefit on LinkedIn"
          >
            <Linkedin size={20} aria-hidden />
          </a>
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <p className="font-poppins text-xs font-black">
            © 2026 Zeefit | Mohi Lifestile Solutions Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
