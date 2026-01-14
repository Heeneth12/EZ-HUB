"use client";

import { ArrowRight, Box, ChevronRight, Users, Truck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ez_inventory from "@/assets/images/ez_inv.png";
import ez_bookings from "@/assets/images/ez_booking.png";
import ez_assist from "@/assets/images/ez_assist.png";

const features = [
  {
    id: "inventory",
    tabLabel: "Inventory",
    title: "Intelligent Inventory Management",
    description:
      "A full-stack SaaS designed for Indian retail and wholesale markets, covering inventory management, sales, purchases, invoicing, approvals, and real-time stock control—built for fast, reliable daily business operations.",
    icon: Box,
    color: "bg-blue-50 text-blue-600",
    image: ez_inventory,
    imageColor: "bg-blue-100",
    route: "/inventory",
  },
  {
    id: "bookings",
    tabLabel: "Bookings",
    title: "Appointment & Scheduling System",
    description:
       "A flexible booking and appointment system to manage customer appointments, staff schedules, and service-based billing—ideal for hospitals, clinics, salons, and service businesses, with reminders and smooth daily operations.",
    icon: Users,
    color: "bg-green-50 text-green-600",
    image: ez_bookings,
    imageColor: "bg-green-100",
    route: "/bookings",
  },
  {
    id: "assist",
    tabLabel: "Assist",
    title: "Support & Helpdesk Platform",
    description:
      "Handle customer issues efficiently with ticket management, SLA tracking, internal notes, and remote assistance—all in one support system.",
    icon: Truck,
    color: "bg-teal-50 text-teal-600",
    image: ez_assist,
    imageColor: "bg-teal-100",
    route: "/assist",
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <section className="relative py-12 bg-[#F9FAFB] overflow-hidden font-sans text-gray-900">
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
            All your business tools in <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-orange-400 to-purple-800">
              perfect sync.
            </span>
          </h2>
        </div>

        <nav className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "bg-orange-50 text-orange-600 font-bold shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}>
              {feature.tabLabel}
            </button>
          ))}
        </nav>

        <div className="max-w-7xl mx-auto px-0 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col">
              {features.map((item, index) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group cursor-pointer border-b border-gray-100 py-6 transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100 translate-x-2"
                      : "opacity-60 hover:opacity-100"
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-xl md:text-2xl font-semibold transition-colors ${
                        activeIndex === index
                          ? "text-slate-900 font-semibold"
                          : "text-slate-500 group-hover:text-slate-700"
                      }`}>
                      {item.title}
                    </h3>

                    <ChevronRight
                      className={`w-5 h-5 lg:hidden transition-transform duration-300 ${
                        activeIndex === index
                          ? "rotate-90 text-orange-500"
                          : "text-gray-300"
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-slate-600 text-md leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleNavigate(item.route)}
                      className="text-orange-600 underline font-semibold text-sm flex items-center hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Display Area */}
            <div className="relative h-80 md:h-92.5 w-full rounded-[1rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white transition-all duration-500 border border-gray-100">
              {features.map((item, index) => (
                <div
                  key={item.id}
                  // Conditional styling: If image exists, remove padding and specific background color.
                  // If no image, keep padding and use the defined background color for the placeholder.
                  className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0 scale-100 z-10"
                      : "opacity-0 translate-y-8 scale-95 z-0"
                  } ${
                    !item.image
                      ? `p-8 md:p-12 ${item.imageColor}`
                      : "p-0 bg-white"
                  }`}>
                  {/* Badge Label Removed Here */}

                  {item.image ? (
                    // --- CASE 1: IMAGE EXISTS (Full Coverage) ---
                    <div className="relative w-full h-full group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index === 0}
                      />
                    </div>
                  ) : (
                    // --- CASE 2: NO IMAGE (COMING SOON PLACEHOLDER) ---
                    <>
                      <div className="relative z-10 group flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-150"></div>

                        {/* Coming Soon Badge */}
                        <div className="mb-6 px-4 py-1.5 rounded-full bg-white/40 border border-white/50 backdrop-blur-sm shadow-sm">
                          <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                            Coming Soon
                          </span>
                        </div>

                        {/* Icon Placeholder */}
                        <item.icon
                          strokeWidth={1}
                          className="relative w-40 h-40 md:w-48 md:h-48 text-slate-800/80 mb-8 drop-shadow-xl mx-auto transform transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Abstract UI Elements */}
                      <div className="flex flex-col items-center gap-3 opacity-40">
                        <div className="w-32 h-3 bg-slate-900/10 rounded-full"></div>
                        <div className="w-20 h-3 bg-slate-900/10 rounded-full"></div>
                      </div>

                      {/* Background Pattern for Placeholder */}
                      <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, #000 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FeaturesCardSection />
    </section>
  );
}

// 1. Payroll Overview Graphic
const PayrollOverviewGraphic = () => (
  <div className="relative w-full h-48 flex items-center justify-center bg-white/50">
    {/* Decorative Stacked Effect Backgrounds */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-48 h-24 bg-white border border-gray-100 rounded-2xl shadow-sm scale-90 opacity-60 z-0"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-56 h-24 bg-white border border-gray-100 rounded-2xl shadow-sm scale-95 opacity-80 z-10"></div>

    {/* Main Card */}
    <div className="relative z-20 w-64 p-5 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-semibold text-gray-700">Payrolls Cost</h4>
        <div className="bg-gray-50 p-1 rounded-md">
          {/* Tiny icon representing the tree/plant in the original */}
          <div className="w-4 h-4 text-green-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7 20h10" />
              <path d="M10 20c5.5-2.5.8-6.4 3-10" />
              <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-2.8-.4-3-2.2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">$12.900</span>
        <span className="text-xs font-medium text-gray-400">last month</span>
      </div>
    </div>
  </div>
);

// 2. System Integration Graphic
const SystemIntegrationGraphic = () => (
  <div className="relative w-full h-56 flex items-center justify-center overflow-hidden">
    {/* Central Hub */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
      <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
        <div
          className="w-6 h-6 border-4 border-white rounded-full border-t-transparent animate-spin-slow"
          style={{ animationDuration: "3s" }}></div>
      </div>
    </div>

    {/* Connecting Lines (SVG) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Paths from center bottom to icons */}
      <path
        d="M 50% 80% C 50% 50%, 20% 60%, 15% 40%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
        className="text-gray-200"
      />
      <path
        d="M 50% 80% C 50% 40%, 30% 50%, 25% 20%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 50% 80% C 50% 30%, 50% 40%, 50% 15%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 50% 80% C 50% 40%, 70% 50%, 75% 20%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 50% 80% C 50% 50%, 80% 60%, 85% 40%"
        stroke="url(#lineGradient)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>

    {/* Icons (Absolute Positioning) */}
    {/* Left Bottom (Dropbox) */}
    <div className="absolute top-[40%] left-[10%] bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
      <img
        src="https://cdn.simpleicons.org/dropbox/0061FF"
        className="w-4 h-4"
        alt="Dropbox"
      />
      <span className="text-[10px] font-medium text-gray-600">Dropbox</span>
    </div>

    {/* Left Top (Slack) */}
    <div className="absolute top-[15%] left-[20%] bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
      <img
        src="https://cdn.simpleicons.org/slack"
        className="w-4 h-4"
        alt="Slack"
      />
      <span className="text-[10px] font-medium text-gray-600">Slack</span>
    </div>

    {/* Center Top (Quickbooks) */}
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">
        qb
      </div>
      <span className="text-[10px] font-medium text-gray-600">Quickbooks</span>
    </div>

    {/* Right Top (PowerBI) */}
    <div className="absolute top-[15%] right-[20%] bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
      <img
        src="https://cdn.simpleicons.org/powerbi/F2C811"
        className="w-4 h-4"
        alt="Power BI"
      />
      <span className="text-[10px] font-medium text-gray-600">Power BI</span>
    </div>

    {/* Right Bottom (Salesforce) */}
    <div className="absolute top-[40%] right-[10%] bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
      <img
        src="https://cdn.simpleicons.org/salesforce/00A1E0"
        className="w-4 h-4"
        alt="Salesforce"
      />
      <span className="text-[10px] font-medium text-gray-600">Salesforce</span>
    </div>
  </div>
);

// 3. Real-Time Reporting Graphic
const RealTimeReportingGraphic = () => (
  <div className="w-full px-4 pt-4">
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xs font-bold text-gray-800">Total Payrolls</h4>
        <div className="bg-gray-50 p-0.5 rounded-lg flex text-[10px] font-medium">
          <span className="px-2 py-0.5 bg-white shadow-sm rounded-md text-gray-800">
            Day
          </span>
          <span className="px-2 py-0.5 text-gray-400">Week</span>
          <span className="px-2 py-0.5 text-gray-400">Month</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-3 mb-4">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-[9px] text-gray-500">Monthly Payroll</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          <span className="text-[9px] text-gray-500">Overtime</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-[9px] text-gray-500">Bonuses</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-28 flex items-end justify-between px-2 gap-2">
        {/* Bar Group 1 (Jan) */}
        <div className="flex flex-col w-6 gap-0.5 group cursor-pointer">
          <div className="h-8 bg-blue-500 rounded-sm"></div>
          <div className="h-4 bg-orange-400 rounded-sm"></div>
          <div className="h-6 bg-green-500 rounded-sm"></div>
          <span className="text-[9px] text-gray-400 text-center mt-1">Jan</span>
        </div>

        {/* Bar Group 2 (Feb) */}
        <div className="flex flex-col w-6 gap-0.5 group cursor-pointer">
          <div className="h-6 bg-blue-500 rounded-sm"></div>
          <div className="h-8 bg-orange-400 rounded-sm"></div>
          <div className="h-4 bg-green-500 rounded-sm"></div>
          <span className="text-[9px] text-gray-400 text-center mt-1">Feb</span>
        </div>

        {/* Bar Group 3 (Mar) - Active */}
        <div className="relative flex flex-col w-6 gap-0.5 z-10">
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-28 bg-[#1a1f36] text-white p-2 rounded-lg shadow-xl text-[10px]">
            <div className="flex justify-between mb-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-0.5"></span>
              <span className="text-gray-300 ml-1">Payroll</span>
              <span className="ml-auto font-bold">175K</span>
            </div>
            <div className="flex justify-between">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-0.5"></span>
              <span className="text-gray-300 ml-1">Bonus</span>
              <span className="ml-auto font-bold">133K</span>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1a1f36]"></div>
          </div>

          <div className="h-10 bg-blue-500 rounded-sm ring-2 ring-offset-1 ring-blue-500/20"></div>
          <div className="h-3 bg-orange-400 rounded-sm"></div>
          <div className="h-8 bg-green-500 rounded-sm"></div>
          <span className="text-[9px] text-gray-800 font-bold text-center mt-1">
            Mar
          </span>
        </div>

        {/* Bar Group 4 (Apr) */}
        <div className="flex flex-col w-6 gap-0.5 group cursor-pointer">
          <div className="h-4 bg-blue-500 rounded-sm"></div>
          <div className="h-5 bg-orange-400 rounded-sm"></div>
          <div className="h-10 bg-green-500 rounded-sm"></div>
          <span className="text-[9px] text-gray-400 text-center mt-1">Apr</span>
        </div>

        {/* Bar Group 5 (Mei) */}
        <div className="flex flex-col w-6 gap-0.5 group cursor-pointer">
          <div className="h-2 bg-blue-500 rounded-sm"></div>
          <div className="h-4 bg-orange-400 rounded-sm"></div>
          <div className="h-12 bg-green-500 rounded-sm"></div>
          <span className="text-[9px] text-gray-400 text-center mt-1">Mei</span>
        </div>
      </div>
    </div>
  </div>
);

// 4. Data Security Graphic
const DataSecurityGraphic = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {/* Soft Glow Background */}
    <div className="absolute w-24 h-24 bg-indigo-50 rounded-full filter blur-xl opacity-80"></div>

    {/* 3D-ish Lock Icon constructed with SVG */}
    <svg
      width="100"
      height="120"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl relative z-10">
      <defs>
        <linearGradient
          id="lockBody"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F3F4F6" />
        </linearGradient>
        <linearGradient
          id="lockShackle"
          x1="0"
          y1="0"
          x2="100"
          y2="0"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0E7FF" />
          <stop offset="1" stopColor="#C7D2FE" />
        </linearGradient>
      </defs>

      {/* Shackle */}
      <path
        d="M25 45V30C25 16.1929 36.1929 5 50 5C63.8071 5 75 16.1929 75 30V45"
        stroke="url(#lockShackle)"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect
        x="15"
        y="45"
        width="70"
        height="60"
        rx="16"
        fill="url(#lockBody)"
        stroke="#F9FAFB"
        strokeWidth="1"
      />

      {/* Keyhole */}
      <path
        d="M50 70V80"
        stroke="#CBD5E1"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  route?: string;
  children: React.ReactNode;
}

// Updated Component
const FeatureCard = ({
  title,
  description,
  route,
  children,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-2 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-xl shadow-sm flex flex-col h-full group">
      {/* Graphic Container */}
      <div className="bg-slate-50/50 rounded-2xl w-full h-56 lg:h-64 flex items-center justify-center overflow-hidden mb-6 relative">
        {children}
      </div>

      {/* Content Container */}
      <div className="px-6 pb-8 grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-3 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 grow">
          {description}
        </p>
        <a
          href={route || "#"}
          className="inline-flex items-center text-orange-600 font-semibold text-sm hover:gap-2 transition-all group-hover:text-orange-650">
          Learn more <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const FeaturesCardSection = () => {
  return (
    <section className="py-24 mt-18 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
            Every event,
            <span className="text-transparent px-2 bg-clip-text bg-linear-to-r from-gray-900 via-orange-400 to-purple-800">
              Connected together
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-8">
          <FeatureCard
            title="Payroll Overview"
            description="Get a detailed description about Payrolls Cost, Total Expense, Pending Payments, and Total Payrolls in your dashboard.">
            <PayrollOverviewGraphic />
          </FeatureCard>

          <FeatureCard
            title="System Integration"
            description="Our payroll system integrates seamlessly with your existing HR and accounting platforms, ensuring smooth data synchronization.">
            <SystemIntegrationGraphic />
          </FeatureCard>

          <FeatureCard
            title="Real-Time Reporting"
            description="Access up-to-date financial and payroll reports anytime, giving you the data you need for informed decision-making.">
            <RealTimeReportingGraphic />
          </FeatureCard>

          <FeatureCard
            title="High-Level Data Security"
            description="Your payroll data is encrypted using the latest technology, ensuring the privacy and security of employee information.">
            <DataSecurityGraphic />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};
