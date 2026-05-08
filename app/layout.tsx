import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Frazier Gills, P.C. — Dallas–Fort Worth CPAs · IRS resolution, fractional CFO, accounting",
  description:
    "Independent Dallas–Fort Worth CPA firm specializing in IRS tax debt resolution, fractional CFO services, and accounting for small and mid-sized businesses, nonprofits, and contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${serif.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#06070C] text-[#E7E9F0] selection:bg-[#F5A623]/30">
        {children}
      </body>
    </html>
  );
}
