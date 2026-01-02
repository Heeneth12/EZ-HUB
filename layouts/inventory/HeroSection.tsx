"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Inv from "@/assets/images/Inv-bg.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function HeroSection() {
  const handleOpenInventoryApp = () => {
    window.open("https://app.ez-hub.in/login?demo=true", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 bg-[#050505] overflow-hidden font-sans text-white selection:bg-purple-500/30">
      {/* 1. Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}></div>

      {/* 2. Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-linear-to-b from-purple-900/20 via-blue-900/10 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* 3. Gradient Orb behind dashboard */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-200 h-100 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            Inventory OS 2.0
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
          {/* Fixed bg-linear-to-b -> bg-gradient-to-b */}
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/50">
            Modern inventory software
          </span>
          {/* Fixed bg-linear-to-br -> bg-gradient-to-br */}
          <span className="block text-transparent bg-clip-text bg-linear-to-br from-indigo-300 via-white to-purple-300">
            for Indian businesses
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Real-time tracking, AI-powered forecasting, and automated reordering.
          The inventory system designed for modern commerce.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={handleOpenInventoryApp}
            className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
            Start Free Trial
            <ArrowRight size={16} />
          </button>
          <Link href="/contact">
            <button className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
              Book Demo
            </button>
          </Link>
        </div>

        {/* --- 3D DASHBOARD MOCKUP --- */}
        <div className="relative w-full max-w-5xl mx-auto perspective-1000 group">
          <div className="absolute -inset-px bg-linear-to-r from-purple-500/40 via-indigo-500/40 to-blue-500/40 rounded-xl blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 z-0"></div>

          <div
            className="relative z-10 m-px rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.01] hover:rotate-x-2"
            style={{ transform: "rotateX(2deg)" }}>
            <Image src={Inv} alt="EZ Hub Logo" className="rounded-xl" />
            <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
          <div className="absolute -bottom-10 left-4 right-4 h-10 bg-indigo-500/30 blur-[60px] rounded-[100%] z-[-1]" />
        </div>
      </div>
    </section>
  );
}
