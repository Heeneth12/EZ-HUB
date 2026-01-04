"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] right-[5%] w-125 h-125 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8">
          Ready to revolutionize <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-red-600 to-orange-600">
            your inventory?
          </span> 
        </h2>

        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Start your 14-day free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="h-14 px-8 rounded-full bg-slate-900 text-white font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20 flex items-center gap-2">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="h-14 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm">
            Talk to Sales
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-400 font-medium">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}