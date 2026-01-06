import type { Metadata } from "next";
import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/layouts/marketing/Header";
import Footer from "@/layouts/marketing/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  metadataBase: new URL("https://ez-hub.com"),
  alternates: {
    canonical: "https://ez-hub.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "EZ Hub — SaaS Products for Billing, POS & Payroll",
    description:
      "Manage your business operations easily with EZ Hub's smart software suite.",
    url: "https://ez-hub.com",
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
    <html lang="en">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Inter:wght@400;500;600&display=swap');
          .font-brand { font-family: 'Kalam', cursive; }
          .font-sans { font-family: 'Inter', sans-serif; }
        `}</style>
      </head>
      <body
        style={{ backgroundColor: "#EDEDED" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="grow bg-[#050505] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
