import type { Metadata } from "next";
import { Geist, Lato, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import BrandingProvider from "@/context/branding";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "WellnessZ — Pricing",
  description:
    "India's leading healthtech platform for health and wellness professionals. Diet plans, client progress, appointments, and reports in one place.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lato.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased" suppressHydrationWarning>
        <BrandingProvider>
          <div className="flex min-h-dvh flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </BrandingProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
