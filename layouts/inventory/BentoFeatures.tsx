"use client";
import React from "react";
import {
  Cpu,
  Lock,
  Zap,
  Settings2,
  ArrowUpRight,
  Smartphone,
  FileText,
  Calculator,
} from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden font-sans text-slate-900">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] right-[5%] w-125 h-125 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3 block">
            Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Empower Your Business with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">
              AI Workflows
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Generic AI tools won't suffice. Our platform is purpose-built to
            provide exceptional AI-driven solutions for your unique business
            needs.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. CARD: Advanced AI (Top Left) */}
          <div className="group relative rounded-3xl bg-slate-50 border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-purple-100/50 hover:border-purple-200 transition-all duration-300 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="mb-4 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-purple-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Advanced AI Algorithms
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Our platform utilizes cutting-edge AI algorithms to provide
              accurate efficient solutions.
            </p>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-auto w-full h-48 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white"></div>
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Image Area
              </div>
            </div>
          </div>

          {/* 2. CARD: Secure Data (Top Middle) */}
          <div className="group relative rounded-3xl bg-slate-50 border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-pink-100/50 hover:border-pink-200 transition-all duration-300 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="mb-4 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
              <Lock className="w-6 h-6 text-pink-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Secure Data Handling
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              We prioritize security with state-of-the-art encryption and strict
              privacy protocols.
            </p>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-auto w-full h-48 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-white"></div>
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-semibold uppercase tracking-widest">
                Image Area
              </div>
            </div>
          </div>

          {/* 3. CARD: Seamless Integration (Right Vertical - Spans 2 Rows) */}
          <div className="group relative lg:row-span-2 rounded-3xl bg-slate-50 border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-200 transition-all duration-300 flex flex-col">
            <div className="mb-4 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Seamless Integration
            </h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Easily integrate our AI solutions into your existing workflows and
              systems for a smooth and efficient operation.
            </p>

            {/* TALL IMAGE PLACEHOLDER */}
            <div className="grow w-full min-h-75 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <GstVisual />
            </div>
          </div>

          {/* 4. CARD: Customizable Solutions (Bottom Wide - Spans 2 Columns) */}
          <div className="group relative lg:col-span-2 rounded-3xl bg-slate-50 border border-slate-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-teal-100/50 hover:border-teal-200 transition-all duration-300 flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-4 w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                <Settings2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Customizable Solutions
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Tailor our AI services to your specific needs with flexible
                customization options, allowing you to get the most out of our
                platform.
              </p>

              <button className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors group/btn">
                Learn more{" "}
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* WIDE IMAGE PLACEHOLDER */}
            <div className="flex-1 w-full min-h-[200px] bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
              <PaymentVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GstVisual = () => (
  <div className="relative w-full h-full bg-emerald-50/50 rounded-xl flex items-center justify-center overflow-hidden">
    <div className="absolute -right-5 -top-5 w-24 h-24 bg-emerald-100 rounded-full blur-2xl"></div>

    <div className="bg-white p-4 rounded-lg shadow-lg border border-emerald-100 relative rotate-3 group-hover:rotate-0 transition-transform duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-gray-400">GSTIN</span>
        <FileText size={12} className="text-emerald-600" />
      </div>
      <div className="text-xl font-bold text-gray-800 flex items-center gap-1">
        ₹ 18,240{" "}
        <span className="text-[10px] text-emerald-600 font-normal bg-emerald-100 px-1 rounded">
          +18%
        </span>
      </div>
      <div className="mt-2 flex gap-1">
        <div className="h-1 w-full bg-gray-100 rounded overflow-hidden">
          <div className="h-full w-2/3 bg-emerald-500"></div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-4 left-6 bg-white px-2 py-1 rounded text-[10px] font-bold shadow-sm border border-gray-100 flex items-center gap-1">
      <Calculator size={10} /> Tax Auto-Filled
    </div>
  </div>
);

const PaymentVisual = () => (
  <div className="relative w-full h-60 bg-blue-50/30 rounded-xl flex items-center justify-center overflow-hidden">
    {/* Phone Mockup */}
    <div className="w-24 h-32 bg-gray-900 rounded-xl border-4 border-gray-800 relative shadow-2xl transform -rotate-6 translate-y-4 group-hover:-translate-y-2 transition-transform duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-b-lg"></div>
      <div className="w-full h-full bg-white rounded-lg flex flex-col items-center justify-center p-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mb-2">
          <Smartphone size={16} />
        </div>
        <div className="text-[8px] text-gray-500">Processing...</div>
        <div className="mt-2 w-12 h-1 bg-gray-100 rounded-full"></div>
      </div>
    </div>

    {/* Card Floating */}
    <div className="absolute top-6 right-8 bg-linear-to-r from-purple-500 to-indigo-600 w-24 h-16 rounded-lg shadow-lg transform rotate-12 flex flex-col justify-end p-2 border-t border-white/20">
      <div className="text-[8px] text-white/80">**** 4242</div>
    </div>
  </div>
);