"use client";
import React from "react";
import { ArrowRight, Calendar, CheckCircle2, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function BookingHeroSection() {
  const handleOpenBookingApp = () => {
    // Replace with your actual booking app URL
    window.open("https://app.ez-hub.in/booking?demo=true", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 bg-white overflow-hidden font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* 1. Light Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", // Fade out grid at bottom
        }}
      ></div>

      {/* 2. Top Soft Gradients (The "Light" version of spotlights) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/80 via-white/50 to-transparent blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/30 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 backdrop-blur-sm mb-8 hover:bg-indigo-50 transition-colors cursor-default shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">
            v2.0 Now Available
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          <span className="block text-slate-900">
            Online appointment
          </span>
          {/* Gradient Text */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 pb-2">
            scheduling made smart
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
          Eliminate scheduling friction. Automated reminders, calendar sync, 
          and seamless booking flows for modern service businesses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button
            onClick={handleOpenBookingApp}
            className="h-12 px-8 rounded-full bg-slate-900 text-white font-semibold text-sm hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            Start Free Trial
            <ArrowRight size={16} />
          </button>
          <Link href="/contact">
            <button className="h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm">
              View Live Demo
            </button>
          </Link>
        </div>

        {/* --- 3D MOCKUP REPRESENTATION --- */}
        <div className="relative w-full max-w-5xl mx-auto perspective-1000 group">
          
          {/* Glow behind the mockup */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-500 z-0"></div>

          {/* The Main Card (Glassmorphism Light) */}
          <div
            className="relative z-10 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-slate-200/50 shadow-2xl shadow-indigo-900/10 overflow-hidden transform transition-transform duration-700 hover:scale-[1.01] hover:rotate-x-1"
            style={{ transform: "rotateX(1deg)" }}
          >
            {/* Browser Header Bar */}
            <div className="h-10 bg-white border-b border-slate-100 flex items-center px-4 space-x-2">
                <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="ml-4 px-3 py-1 bg-slate-50 rounded-md text-[10px] text-slate-400 font-medium w-64 text-center">
                    app.ez-hub.in/booking
                </div>
            </div>

            {/* UI Mockup Content (Place your image here later) */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] bg-slate-50/50">
                
                {/* Sidebar Mockup */}
                <div className="hidden md:block col-span-3 border-r border-slate-100 bg-white p-6 space-y-6">
                    <div className="h-8 w-8 bg-indigo-600 rounded-lg mb-6"></div>
                    <div className="space-y-3">
                        <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
                        <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
                    </div>
                    <div className="pt-8 space-y-4">
                         <div className="flex items-center gap-3 p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                            <Calendar size={16} className="text-indigo-600" />
                            <div className="h-2 w-20 bg-indigo-200 rounded-full"></div>
                         </div>
                    </div>
                </div>

                {/* Main Calendar Area Mockup */}
                <div className="col-span-12 md:col-span-9 p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">September 2026</h3>
                            <p className="text-sm text-slate-400">Manage your appointments</p>
                        </div>
                        <div className="flex gap-2">
                             <div className="h-8 w-24 bg-white border border-slate-200 rounded-md shadow-sm"></div>
                             <div className="h-8 w-8 bg-indigo-600 rounded-md shadow-sm shadow-indigo-200"></div>
                        </div>
                    </div>

                    {/* Calendar Grid Representation */}
                    <div className="grid grid-cols-7 gap-4 mb-4 text-center">
                         {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                             <div key={i} className="text-xs font-bold text-slate-300">{d}</div>
                         ))}
                    </div>
                    <div className="grid grid-cols-7 gap-4">
                        {[...Array(28)].map((_, i) => (
                             <div key={i} className={`aspect-square rounded-xl border border-slate-100 p-2 relative ${i === 10 || i === 15 ? 'bg-white shadow-lg shadow-indigo-100 ring-1 ring-indigo-50' : 'bg-white text-slate-300'}`}>
                                <span className={`text-xs ${i === 10 || i === 15 ? 'text-slate-700 font-bold' : ''}`}>{i + 1}</span>
                                {i === 10 && (
                                    <div className="mt-2 p-1.5 bg-indigo-100 rounded-md">
                                        <div className="flex items-center gap-1 mb-1">
                                            <Clock size={10} className="text-indigo-600"/>
                                            <div className="h-1 w-8 bg-indigo-300 rounded-full"></div>
                                        </div>
                                        <div className="h-1 w-10 bg-indigo-200 rounded-full"></div>
                                    </div>
                                )}
                                {i === 15 && (
                                    <div className="mt-2 p-1.5 bg-green-50 rounded-md">
                                        <div className="flex items-center gap-1 mb-1">
                                            <CheckCircle2 size={10} className="text-green-600"/>
                                            <div className="h-1 w-8 bg-green-300 rounded-full"></div>
                                        </div>
                                    </div>
                                )}
                             </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Bottom Reflection/Shadow */}
          <div className="absolute -bottom-10 left-10 right-10 h-10 bg-indigo-600/10 blur-[60px] rounded-[100%] z-[-1]" />
        </div>

      </div>
    </section>
  );
}