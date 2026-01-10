import type { Metadata } from "next";
import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import BookingsHeader from "@/layouts/products/bookings/BookingsHeader";
import BookingsFooter from "@/layouts/products/bookings/BookingsFooter";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EZ Hub — Smart SaaS Suite for Billing, POS & Payroll",
  description:
    "EZ Hub is a tech startup offering modern SaaS solutions including billing software, POS system, payroll management and business automation tools to help companies run smarter.",
  keywords: [
    "EZ Hub",
    "billing software",
    "POS system",
    "payroll software",
    "SaaS products",
    "business automation",
    "cloud software",
    "HR and payroll",
  ],
  metadataBase: new URL("https://ez-hub.in/bookings"),
  alternates: {
    canonical: "https://ez-hub.in/bookings",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EZ Hub — SaaS Products for Billing, POS & Payroll",
    description:
      "Manage your business operations easily with EZ Hub's smart software suite.",
    url: "https://ez-hub.com/bookings",
    siteName: "EZ Hub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        style={{ backgroundColor: "#EDEDED" }}
        className="antialiased flex flex-col min-h-screen">
        <BookingsHeader />
        <main className="grow bg-white font-sans text-slate-900">
          {children}
        </main>
        <BookingsFooter />
      </body>
    </html>
  );
}
