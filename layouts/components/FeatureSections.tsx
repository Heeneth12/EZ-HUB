  "use client";

  import {
    ArrowRight,
    BarChart3,
    Box,
    ChevronRight,
    CreditCard,
    Users,
  } from "lucide-react";
  import React, { useState } from "react";
  type AccentType = "purple" | "teal" | "pink";
  interface FeatureCardProps {
    title: string;
    description: string;
    renderImage?: () => React.ReactNode;
    accent: AccentType;
  }

  // --- Data Configuration ---
  const solutions = [
    {
      id: "inventory",
      title: "Smart Inventory Management",
      description:
        "Track stock in real-time, automate reordering, and reduce wastage with our AI-driven inventory system tailored for high-volume businesses.",
      icon: Box,
      color: "bg-blue-50 text-blue-600",
      imageColor: "bg-blue-100",
    },
    {
      id: "billing",
      title: "Automated Billing & Invoicing",
      description:
        "Generate professional invoices instantly, handle recurring payments, and streamline your accounts receivable process.",
      icon: CreditCard,
      color: "bg-orange-50 text-orange-600",
      imageColor: "bg-[#FFF0E6]", // Matches the warm tone in your image
    },
    {
      id: "payroll",
      title: "Seamless Payroll Processing",
      description:
        "Automate salary calculations, tax deductions, and compliance reporting. Ensure your team gets paid on time, every time.",
      icon: Users,
      color: "bg-green-50 text-green-600",
      imageColor: "bg-green-100",
    },
    {
      id: "reporting",
      title: "Advanced Reporting & Analytics",
      description:
        "Gain deep insights into your business performance with customizable dashboards and real-time data visualization.",
      icon: BarChart3,
      color: "bg-purple-50 text-purple-600",
      imageColor: "bg-purple-100",
    },
  ];

  const FeatureCardLight: React.FC<FeatureCardProps> = ({
    title,
    description,
    renderImage,
    accent,
  }) => {
    const accentStyles: Record<AccentType, string> = {
      purple: "from-purple-100 via-white to-white group-hover:border-purple-200",
      teal: "from-teal-100 via-white to-white group-hover:border-teal-200",
      pink: "from-pink-100 via-white to-white group-hover:border-pink-200",
    };

    return (
      <div
        className={`group relative rounded-4xl bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
          accentStyles[accent] || ""
        }`}>
        {/* Dynamic Glow Background (Subtle Wash on Hover) */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] ${accentStyles[accent]} pointer-events-none`}></div>

        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
          {/* Image Section (Top) - Placeholder */}
          <div className="mb-10 flex items-center justify-center min-h-[250px] bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
            {renderImage ? (
              renderImage()
            ) : (
              <h1 className="text-gray-400 font-bold text-xl">
                Image Placeholder
              </h1>
            )}
          </div>

          {/* Text Section (Bottom) */}
          <div className="mt-auto text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500">
              {title}
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default function FeaturesSectionLight() {
    const [activeTab, setActiveTab] = useState("Poss");
    const [activeCard, setActiveCard] = useState(0);
    const tabs = ["Poss", "Payroll", "Invoice", "Purchase", "Tasks"];
    return (
      <section className="relative py-12 bg-[#F9FAFB] overflow-hidden font-sans text-gray-900">
        {/* Subtle Top Gradient Fade */}
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
              Keep everything in <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-orange-400 to-purple-800">
                one place.
              </span>
            </h2>
            {/* <p className="text-mb text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
              Forget complex project management tools. Our platform unifies your
              workflow in a single, beautiful interface.
            </p> */}
          </div>

          {/* Navigation Tabs */}
          <nav className="flex justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-orange-50 text-orange-600 font-semibold shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}>
                {tab}
              </button>
            ))}
          </nav>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* LEFT COLUMN: Interactive List */}
              <div className="flex flex-col">
                {solutions.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveCard(index)}
                    className={`group cursor-pointer border-b border-gray-100 py-6 transition-all duration-300 ${
                      activeCard === index
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-xl md:text-2xl font-semibold transition-colors ${
                          activeCard === index
                            ? "text-slate-900"
                            : "text-slate-500"
                        }`}>
                        {item.title}
                      </h3>
                      {/* Mobile Chevron indicator */}
                      <ChevronRight
                        className={`w-5 h-5 lg:hidden transition-transform ${
                          activeCard === index
                            ? "rotate-90 text-red-500"
                            : "text-gray-300"
                        }`}
                      />
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeCard === index
                          ? "max-h-40 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}>
                      <p className="text-slate-500 text-lg leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <button className="text-red-500 font-semibold text-sm flex items-center hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN: Dynamic Image Card */}
              <div className="relative h-100 md:h-125 w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 transition-all duration-500">
                {solutions.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 w-full h-full p-10 flex flex-col items-center justify-center transition-opacity duration-500 ${
                      activeCard === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    } ${item.imageColor}`}>
                    {/* Placeholder Illustration Logic */}
                    <div className="relative z-10 text-center">
                      {/* White Card behind icon to mimic the 'POSS' badge look */}
                      <div className="absolute top-0 left-0 bg-white/40 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2 -translate-y-20 -translate-x-10 shadow-sm">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          EZ Hub App
                        </span>
                      </div>

                      {/* Main Icon Representation */}
                      <item.icon
                        strokeWidth={1}
                        className="w-48 h-48 text-slate-800/80 mb-8 drop-shadow-xl mx-auto"
                      />

                      {/* Abstract Characters / UI Elements Placeholder */}
                      <div className="flex justify-center gap-4 opacity-50">
                        <div className="w-16 h-2 bg-slate-900 rounded-full"></div>
                        <div className="w-8 h-2 bg-slate-900 rounded-full"></div>
                      </div>
                    </div>

                    {/* Background Pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
