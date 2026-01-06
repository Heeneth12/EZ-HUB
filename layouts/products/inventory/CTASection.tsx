"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const theme = {
  colors: {
    bg: {
      main: "bg-[#050505]", // The deep dark background
      glow: "bg-indigo-950/20", // The ambient light orb
      glass: "bg-white/[0.02]", // For badges/cards
      glassHover: "hover:bg-white/[0.02]",
    },
    text: {
      heading: "text-white",
      body: "text-zinc-500",
      subtle: "text-zinc-400", // For icons/badges
      faint: "text-zinc-600", // For footers
      inverse: "text-black", // For primary buttons
    },
    border: {
      subtle: "border-white/5", // Section dividers
      light: "border-white/10", // Buttons/Cards
      hover: "hover:border-white/20",
    },
  },
  gradients: {
    metallicText:
      "text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600",
    gridPattern:
      "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
  },
  effects: {
    buttonGlow: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    backdrop: "backdrop-blur-md",
  },
  layout: {
    sectionPad: "py-12 md:py-18",
    maxWidth: "max-w-4xl",
  },
};

export default function CTASection() {
  const handleOpenInventoryApp = () => {
    window.open("https://app.ez-hub.in/login?demo=true", "_blank");
  };

  return (
    <section
      className={`relative ${theme.layout.sectionPad} ${theme.colors.bg.main} overflow-hidden flex flex-col items-center justify-center text-center px-6 ${theme.colors.border.subtle}`}>
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: theme.gradients.gridPattern,
          backgroundSize: "60px 60px",
        }}></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-200 h-125 ${theme.colors.bg.glow} blur-[150px] rounded-full pointer-events-none z-0`}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter ${theme.colors.text.heading} mb-8 leading-[1.05]`}>
          Ready to revolutionize <br />
          <span className={theme.gradients.metallicText}>your inventory?</span>
        </h2>
        <p
          className={`text-sm ${theme.colors.text.body} font-light mb-10 max-w-xl mx-auto leading-relaxed`}>
          Join thousands of Indian businesses streamlining their operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleOpenInventoryApp}
            className={`group h-12 px-8 rounded-full bg-white ${theme.colors.text.inverse} font-medium text-sm hover:bg-zinc-200 transition-all duration-300 ${theme.effects.buttonGlow} flex items-center justify-center gap-2 w-full sm:w-auto`}>
            Get Started Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <Link href="/contact" className="w-full sm:w-auto">
            <button
              className={`h-12 px-8 rounded-full bg-transparent border ${theme.colors.border.light} text-zinc-300 font-medium text-sm hover:text-white hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 w-full sm:w-auto`}>
              Talk to Sales
            </button>
          </Link>
        </div>
        <p className={`mt-6 text-xs ${theme.colors.text.faint} font-mono`}>
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}