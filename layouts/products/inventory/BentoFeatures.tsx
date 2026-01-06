"use client";
import {
  Cpu,
  Lock,
  Zap,
  Settings2,
  ArrowUpRight,
  Smartphone,
  FileText,
  Calculator,
  ScanFace,
} from "lucide-react";

const theme = {
  colors: {
    bg: {
      main: "bg-[#050505]",
      card: "bg-[#0A0A0A]",
      glow: "bg-indigo-950/20",
      glass: "bg-white/[0.02]",
      glassHover: "hover:bg-white/[0.04]",
    },
    text: {
      heading: "text-white",
      body: "text-zinc-500",
      subtle: "text-zinc-400",
      highlight: "text-zinc-200",
      accent: "text-zinc-300",
      inverse: "text-black",
    },
    border: {
      subtle: "border-white/5",
      light: "border-white/10",
      highlight: "border-white/20",
    },
  },
  gradients: {
    metallicText:
      "text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600",
    gridPattern:
      "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
  },
  effects: {
    backdrop: "backdrop-blur-md",
    shadow: "shadow-[0_0_20px_rgba(0,0,0,0.5)]",
    innerGlow: "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
  },
  layout: {
    sectionPad: "py-12 md:py-18",
    maxWidth: "max-w-7xl",
  },
};

export default function BentoFeatures() {
  return (
    <section
      className={`relative ${theme.layout.sectionPad} ${theme.colors.bg.main} overflow-hidden font-sans selection:bg-zinc-700/30`}>
      {/* 1. Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: theme.gradients.gridPattern,
          backgroundSize: "60px 60px",
        }}></div>

      {/* 2. Deep Ambient Glows */}
      <div
        className={`absolute top-0 left-1/4 w-125 h-125 ${theme.colors.bg.glow} blur-[150px] rounded-full pointer-events-none`}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-125 h-125 bg-purple-950/10 blur-[150px] rounded-full pointer-events-none`}
      />

      <div className={`relative z-10 ${theme.layout.maxWidth} mx-auto px-6`}>
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.colors.border.subtle} ${theme.colors.bg.glass} ${theme.effects.backdrop} mb-6`}>
            <span
              className={`text-[10px] font-semibold ${theme.colors.text.subtle} uppercase tracking-[0.2em]`}>
              Our Solution
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-semibold tracking-tight mb-6 ${theme.colors.text.heading}`}>
            Empower Your Business with <br className="hidden md:block" />
            <span className={theme.gradients.metallicText}>AI Workflows</span>
          </h2>
          <p
            className={`text-lg ${theme.colors.text.body} leading-relaxed max-w-2xl mx-auto font-light`}>
            Generic tools won't suffice. Our platform is purpose-built to
            provide exceptional AI-driven solutions for your unique business
            needs.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. CARD: Advanced AI (Top Left) */}
          <div
            className={`group relative rounded-3xl ${theme.colors.bg.card} border ${theme.colors.border.light} p-8 overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.05)] flex flex-col`}>
            {/* Subtle Gradient Spot */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div
              className={`mb-6 w-12 h-12 rounded-xl bg-zinc-900 border ${theme.colors.border.light} flex items-center justify-center`}>
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>

            <h3
              className={`text-xl font-medium ${theme.colors.text.heading} mb-2`}>
              Advanced AI Algorithms
            </h3>
            <p
              className={`text-sm ${theme.colors.text.body} mb-8 leading-relaxed`}>
              Utilizing cutting-edge AI models to provide predictive analytics
              and automated decision making.
            </p>

            {/* VISUAL PLACEHOLDER */}
            <div
              className={`mt-auto w-full h-48 bg-zinc-900/50 rounded-xl border ${theme.colors.border.subtle} overflow-hidden relative group-hover:border-purple-500/20 transition-colors duration-500`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <AiScanVisual />
              </div>
            </div>
          </div>

          {/* 2. CARD: Secure Data (Top Middle) */}
          <div
            className={`group relative rounded-3xl ${theme.colors.bg.card} border ${theme.colors.border.light} p-8 overflow-hidden transition-all duration-500 hover:border-pink-500/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.05)] flex flex-col`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div
              className={`mb-6 w-12 h-12 rounded-xl bg-zinc-900 border ${theme.colors.border.light} flex items-center justify-center`}>
              <Lock className="w-5 h-5 text-pink-400" />
            </div>

            <h3
              className={`text-xl font-medium ${theme.colors.text.heading} mb-2`}>
              Secure Data Handling
            </h3>
            <p
              className={`text-sm ${theme.colors.text.body} mb-8 leading-relaxed`}>
              Enterprise-grade encryption with strict privacy protocols ensuring
              your data never leaves the silo.
            </p>

            {/* VISUAL PLACEHOLDER */}
            <div
              className={`mt-auto w-full h-48 bg-zinc-900/50 rounded-xl border ${theme.colors.border.subtle} overflow-hidden relative group-hover:border-pink-500/20 transition-colors duration-500`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <SecurityVisual />
              </div>
            </div>
          </div>

          {/* 3. CARD: Seamless Integration (Right Vertical) */}
          <div
            className={`group relative lg:row-span-2 rounded-3xl ${theme.colors.bg.card} border ${theme.colors.border.light} p-8 overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.05)] flex flex-col`}>
            <div
              className={`mb-6 w-12 h-12 rounded-xl bg-zinc-900 border ${theme.colors.border.light} flex items-center justify-center`}>
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>

            <h3
              className={`text-xl font-medium ${theme.colors.text.heading} mb-2`}>
              Seamless Integration
            </h3>
            <p
              className={`text-sm ${theme.colors.text.body} mb-8 leading-relaxed`}>
              Plug-and-play architecture allows you to integrate AI services
              into your existing ERP, CRM, or custom stack in minutes.
            </p>

            {/* TALL VISUAL */}
            <div
              className={`grow w-full min-h-75 bg-zinc-900/50 rounded-xl border ${theme.colors.border.subtle} overflow-hidden relative group-hover:border-indigo-500/20 transition-colors duration-500`}>
              <GstVisual />
            </div>
          </div>

          {/* 4. CARD: Customizable Solutions (Bottom Wide) */}
          <div
            className={`group relative lg:col-span-2 rounded-3xl ${theme.colors.bg.card} border ${theme.colors.border.light} p-8 overflow-hidden transition-all duration-500 hover:border-teal-500/30 hover:shadow-[0_0_40px_rgba(20,184,166,0.05)] flex flex-col lg:flex-row gap-8`}>
            <div className="flex-1">
              <div
                className={`mb-6 w-12 h-12 rounded-xl bg-zinc-900 border ${theme.colors.border.light} flex items-center justify-center`}>
                <Settings2 className="w-5 h-5 text-teal-400" />
              </div>
              <h3
                className={`text-xl font-medium ${theme.colors.text.heading} mb-2`}>
                Customizable Solutions
              </h3>
              <p
                className={`text-sm ${theme.colors.text.body} mb-8 leading-relaxed`}>
                Tailor our AI services to your specific needs with flexible
                customization options, allowing you to get the most out of our
                platform.
              </p>

              <button
                className={`flex items-center gap-2 text-sm font-bold ${theme.colors.text.highlight} hover:text-white transition-colors group/btn`}>
                Explore Documentation
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* WIDE VISUAL */}
            <div
              className={`flex-1 w-full min-h-50 bg-zinc-900/50 rounded-xl border ${theme.colors.border.subtle} overflow-hidden relative group-hover:border-teal-500/20 transition-colors duration-500`}>
              <PaymentVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- VISUAL COMPONENTS (Dark Mode Styled) ---

const GstVisual = () => (
  <div className="relative w-full h-full bg-[#0F0F0F] flex items-center justify-center overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>

    <div className="bg-[#18181b] w-64 p-4 rounded-xl shadow-2xl border border-white/5 relative rotate-3 group-hover:rotate-0 transition-transform duration-500">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-bold text-zinc-500 tracking-wider">
          TAX INVOICE
        </span>
        <div className="p-1 bg-emerald-500/10 rounded text-emerald-400">
          <FileText size={12} />
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
        <div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
      </div>

      <div className="flex justify-between items-end border-t border-white/5 pt-3">
        <div>
          <div className="text-[10px] text-zinc-500">Total Amount</div>
          <div className="text-lg font-bold text-zinc-200 flex items-center gap-2">
            ₹ 18,240
          </div>
        </div>
        <span className="text-[9px] text-emerald-400 font-medium bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
          GST Verified
        </span>
      </div>
    </div>

    <div className="absolute bottom-6 left-8 bg-[#222] px-3 py-1.5 rounded-full text-[10px] font-medium text-zinc-300 shadow-xl border border-white/10 flex items-center gap-2 z-10">
      <Calculator size={10} className="text-emerald-400" />
      <span>Auto-Calculated</span>
    </div>
  </div>
);

const PaymentVisual = () => (
  <div className="relative w-full h-full bg-[#0F0F0F] flex items-center justify-center overflow-hidden">
    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.1),transparent_50%)]"></div>

    {/* Phone Mockup */}
    <div className="w-24 h-40 bg-zinc-950 rounded-xl border-2 border-zinc-800 relative shadow-2xl transform -rotate-12 translate-y-2 translate-x-4 group-hover:-rotate-6 transition-transform duration-500 z-0">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-800 rounded-full"></div>
      <div className="w-full h-full rounded-lg flex flex-col items-center justify-center p-2">
        <div className="w-8 h-8 bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center text-teal-400 mb-2">
          <Smartphone size={14} />
        </div>
        <div className="space-y-1 w-full px-2">
          <div className="h-1 w-full bg-zinc-800 rounded-full"></div>
          <div className="h-1 w-2/3 bg-zinc-800 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>

    {/* Floating Card */}
    <div className="absolute top-1/2 left-1/2 -translate-x-8 -translate-y-8 bg-linear-to-br from-zinc-800 to-black w-32 h-20 rounded-xl shadow-2xl border-t border-white/10 flex flex-col justify-between p-3 transform rotate-6 z-10 group-hover:rotate-3 transition-transform duration-500">
      <div className="flex justify-between items-start">
        <div className="w-6 h-4 bg-white/10 rounded"></div>
        <div className="text-[8px] text-zinc-500">VISA</div>
      </div>
      <div className="text-[10px] text-zinc-300 font-mono tracking-widest">
        **** 4242
      </div>
    </div>
  </div>
);

const AiScanVisual = () => (
  <div className="relative w-full h-full bg-[#0F0F0F] flex items-center justify-center">
    <div className="w-32 h-32 border border-purple-500/20 rounded-full flex items-center justify-center relative">
      <div className="absolute inset-0 border border-purple-500/10 rounded-full animate-ping"></div>
      <ScanFace className="text-purple-500/50" size={32} />
    </div>
    <div className="absolute bottom-4 bg-[#111] border border-white/10 px-3 py-1 rounded-full text-[10px] text-zinc-400 flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
      Analyzing Pattern...
    </div>
  </div>
);

const SecurityVisual = () => (
  <div className="relative w-full h-full bg-[#0F0F0F] flex items-center justify-center gap-4">
    {/* Abstract Shield Layers */}
    <div className="absolute w-24 h-28 bg-pink-500/5 rounded-xl blur-xl"></div>
    <div className="w-16 h-20 bg-linear-to-b from-zinc-800 to-black border border-white/10 rounded-lg flex items-center justify-center z-10 shadow-2xl">
      <Lock size={16} className="text-zinc-500" />
    </div>
    <div className="w-16 h-20 bg-linear-to-b from-zinc-800 to-black border border-pink-500/20 rounded-lg flex items-center justify-center z-20 shadow-2xl -ml-8 -mt-4">
      <Lock size={16} className="text-pink-400" />
    </div>
  </div>
);