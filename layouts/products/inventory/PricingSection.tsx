"use client";
import React, { useState } from "react";
import { Check, X, Sparkles } from "lucide-react";

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
    buttonGlow: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
  },
  layout: {
    sectionPad: "py-12 md:py-18",
    maxWidth: "max-w-7xl",
  },
};

const plans = [
  {
    name: "Starter",
    price: { monthly: "0", yearly: "0" },
    description: "Perfect for side projects and small experiments.",
    features: [
      "Up to 500 items",
      "Basic Analytics",
      "1 User Seat",
      "Community Support",
    ],
    notIncluded: ["AI Forecasting", "API Access", "SSO"],
    popular: false,
  },
  {
    name: "Growth",
    price: { monthly: "4,999", yearly: "3,999" },
    description: "For scaling businesses that need automation.",
    features: [
      "Up to 10,000 items",
      "Advanced Analytics",
      "5 User Seats",
      "Priority Email Support",
      "AI Forecasting",
      "API Access",
    ],
    notIncluded: ["SSO"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: "14,999", yearly: "11,999" },
    description: "Full control and security for large teams.",
    features: [
      "Unlimited items",
      "Custom Reporting",
      "Unlimited Seats",
      "24/7 Phone Support",
      "AI Forecasting",
      "API Access",
      "SSO & Audit Logs",
    ],
    notIncluded: [],
    popular: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

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
        className={`absolute bottom-0 right-1/4 w-125 h-125 bg-blue-950/10 blur-[150px] rounded-full pointer-events-none`}
      />

      <div className={`relative z-10 ${theme.layout.maxWidth} mx-auto px-6`}>
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.colors.border.subtle} ${theme.colors.bg.glass} ${theme.effects.backdrop} mb-8`}>
            <span
              className={`text-[10px] font-semibold ${theme.colors.text.subtle} uppercase tracking-[0.2em]`}>
              Pricing Plans
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-semibold ${theme.colors.text.heading} tracking-tight mb-6`}>
            Simple, transparent
            <span className={theme.gradients.metallicText}> pricing.</span>
          </h2>
          <p
            className={`text-sm ${theme.colors.text.body} font-light mb-10 max-w-xl`}>
            No hidden fees. Cancel anytime. Start small and scale as you grow.
          </p>

          {/* Toggle Switch */}
          <div
            className={`flex items-center gap-1 p-1 rounded-full ${theme.colors.bg.card} border ${theme.colors.border.light}`}>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? `bg-white ${theme.colors.text.inverse} shadow-md`
                  : `${theme.colors.text.body} hover:text-white`
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? `bg-white ${theme.colors.text.inverse} shadow-md`
                  : `${theme.colors.text.body} hover:text-white`
              }`}>
              Yearly
            </button>
          </div>
          {isYearly && (
            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-emerald-400 animate-pulse">
              <Sparkles size={12} />
              <span>Saving 20% on annual billing</span>
            </div>
          )}
        </div>

        {/* --- CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            // Check if this is the "Growth" (Popular) plan for special styling
            const isPop = plan.popular;

            return (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 group 
                    ${
                      isPop
                        ? `${theme.colors.bg.card} ${theme.colors.border.highlight} shadow-[0_0_40px_rgba(255,255,255,0.05)] z-10 scale-105`
                        : `${theme.colors.bg.main} border-white/5 hover:${theme.colors.border.light} hover:bg-white/1`
                    }
                `}>
                {/* Popular Badge */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Most Popular
                  </div>
                )}

                {/* Card Content */}
                <div className="mb-8">
                  <h3
                    className={`text-lg font-medium mb-4 ${
                      isPop ? "text-white" : theme.colors.text.accent
                    }`}>
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      className={`text-4xl font-semibold tracking-tight ${theme.colors.text.heading}`}>
                      ₹{isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span
                      className={`text-sm ${theme.colors.text.subtle} font-mono`}>
                      /mo
                    </span>
                  </div>

                  <p
                    className={`text-sm ${theme.colors.text.body} leading-relaxed`}>
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px ${theme.colors.border.subtle} mb-8`}></div>

                {/* Features List */}
                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 text-sm ${theme.colors.text.highlight}`}>
                      <div
                        className={`mt-0.5 p-0.5 rounded-full ${
                          isPop
                            ? "bg-white text-black"
                            : "bg-zinc-800 text-zinc-400"
                        }`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feat, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 text-sm ${theme.colors.text.body} opacity-50`}>
                      <X className="w-5 h-5 opacity-40" />
                      <span className="font-light line-through">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  className={`w-full py-4 rounded-full text-sm font-medium transition-all duration-300 
                    ${
                      isPop
                        ? `bg-white text-black hover:bg-zinc-200 ${theme.effects.buttonGlow}`
                        : `bg-transparent border ${theme.colors.border.light} ${theme.colors.text.accent} hover:bg-white/5 hover:text-white`
                    }`}>
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
