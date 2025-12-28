"use client";
import LightRays from "@/components/LightRays";
import { ChevronRight, ChevronDown, Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/images/new.png";
import Image from "next/image";

export default function OdooHeroDark() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050505] text-white selection:bg-white/20 font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Strong Spotlight Rays */}
        <div className="absolute inset-0 opacity-100 mix-blend-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.8}
            lightSpread={0.2}
            rayLength={8.0}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.02}
            distortion={0.0}
          />
        </div>

        {/* 2. Volumetric Cone (Fog) */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-200 h-200 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 45%, white 50%, transparent 55%)",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span className="text-xs font-medium text-gray-300 tracking-wide">
            Business Software
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/40">
            All your business on
          </span>
          <span className="relative inline-block mt-2 text-white">
            <span className="relative z-10">one platform.</span>
            {/* Underline Glow Effect */}
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/50 blur-lg rounded-full"></div>
          </span>
        </h1>

        {/* Secondary Headline (Simple, Efficient, EZ) */}
        <div className="flex flex-col items-center gap-2 mb-12">
          <p className="text-2xl md:text-4xl font-bold text-gray-400 tracking-wide">
            Simple, efficient
          </p>
          <Image src={logo} alt="EZ Hub Logo" className="h-18 w-auto" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2">
            Start now - It's free
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
            Meet an advisor
            <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
        </div>
      </main>
    </div>
  );
}
