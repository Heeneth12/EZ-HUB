"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";

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
    price: { monthly: "49", yearly: "39" },
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
    price: { monthly: "199", yearly: "159" },
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
    <section className="relative py-16 bg-slate-50 overflow-hidden font-sans text-slate-900">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-[10%] right-[5%] w-125 h-125 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header & Toggle */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            No hidden fees. Cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isYearly
                  ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-900"
              }`}>
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isYearly
                  ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-900"
              }`}>
              Yearly
            </button>
          </div>
          {isYearly && (
            <span className="mt-4 text-xs font-bold text-emerald-600 tracking-wide uppercase animate-pulse">
              🎉 Saving 20% on annual billing
            </span>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-indigo-600 shadow-[0_20px_40px_-10px_rgba(79,70,229,0.15)] scale-105 z-10 ring-1 ring-indigo-100"
                  : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/50"
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-indigo-600 to-violet-600 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-indigo-500/30">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    plan.popular ? "text-indigo-600" : "text-slate-900"
                  }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-slate-500 font-medium">/mo</span>
                </div>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div
                      className={`p-0.5 rounded-full ${
                        plan.popular
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    {feat}
                  </div>
                ))}
                {plan.notIncluded.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-400">
                    <X className="w-5 h-5 opacity-40" />
                    {feat}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20"
                    : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
