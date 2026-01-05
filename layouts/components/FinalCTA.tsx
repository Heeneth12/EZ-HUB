"use client";

import { Share2, Heart, Code, Github, BookOpen } from "lucide-react";

const values = [
  {
    title: "Built in Public",
    desc: "Documenting every bug, feature, and deployment. Real coding, real challenges.",
    icon: Code,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "group-hover:border-pink-200",
    shadow: "group-hover:shadow-pink-500/10",
  },
  {
    title: "Seamless Data",
    desc: "No silos. Data flows instantly between Inventory, Sales, and Accounts.",
    icon: Share2,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "group-hover:border-indigo-200",
    shadow: "group-hover:shadow-indigo-500/10",
  },
  {
    title: "User Centric",
    desc: "Designed for speed and simplicity, stripping away enterprise bloat.",
    icon: Heart,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "group-hover:border-red-200",
    shadow: "group-hover:shadow-red-500/10",
  },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#F9FAFB] pt-12 pb-12 font-sans text-gray-900 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => (
            <div
              key={i}
              className={`
                group flex flex-col items-start p-8 rounded-3xl bg-white border border-gray-100 
                transition-all duration-300 ease-out 
                hover:-translate-y-1 hover:shadow-xl ${v.border} ${v.shadow}
              `}>
              <div
                className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <v.icon className={`w-7 h-7 ${v.color}`} strokeWidth={1.5} />
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {v.title}
              </h4>

              <p className="text-slate-500 leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200/60 mb-16"></div>

        {/* Conclusion / Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="mb-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 leading-tight">
                Documenting the journey of building
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-orange-500 to-purple-800">
                  a SaaS ecosystem.
                </span>
              </h2>
            </div>
            <p className="text-sm text-slate-400 hidden md:block mt-2">
              From first line of code to first customer.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-900/20 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Read the Docs
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md  flex items-center gap-2">
              <Github className="w-4 h-4" />
              View Source
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
