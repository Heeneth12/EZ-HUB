"use client";

import { ArrowRight, Box, ChevronRight, Users, Truck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const features = [
  {
    id: "inventory",
    tabLabel: "Inventory",
    title: "Intelligent Inventory Management",
    description:
      "Track stock in real time, automate purchase orders, manage batch & expiry dates, and get low-stock alerts—built for retail and wholesale operations.",
    icon: Box,
    color: "bg-blue-50 text-blue-600",
    imageColor: "bg-blue-100",
    route: "/inventory",
  },
  {
    id: "bookings",
    tabLabel: "Bookings",
    title: "Appointment & Scheduling System",
    description:
      "Manage appointments, staff availability, and customer bookings seamlessly. Reduce no-shows with reminders and streamline daily operations.",
    icon: Users,
    color: "bg-green-50 text-green-600",
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
    imageColor: "bg-teal-100",
    route: "/assist",
  },
];

export default function FeaturesSectionLight() {
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
                          ? "text-slate-900"
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
                    <p className="text-slate-500 text-lg leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleNavigate(item.route)}
                      className="text-orange-600 font-semibold text-sm flex items-center hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-100 md:h-125 w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white transition-all duration-500 border border-gray-100">
              {features.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 w-full h-full p-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0 scale-100 z-10"
                      : "opacity-0 translate-y-8 scale-95 z-0"
                  } ${item.imageColor}`}>
                  <div className="absolute top-8 left-8 bg-white/60 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-sm border border-white/50">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      EZ Hub &bull; {item.tabLabel}
                    </span>
                  </div>

                  <div className="relative z-10 group">
                    <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-150"></div>
                    <item.icon
                      strokeWidth={1}
                      className="relative w-48 h-48 text-slate-800 mb-8 drop-shadow-xl mx-auto transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Abstract UI Elements */}
                  <div className="flex flex-col items-center gap-3 opacity-40">
                    <div className="w-32 h-3 bg-slate-900/20 rounded-full"></div>
                    <div className="w-20 h-3 bg-slate-900/20 rounded-full"></div>
                  </div>

                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #000 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
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
