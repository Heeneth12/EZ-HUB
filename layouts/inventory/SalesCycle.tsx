"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ScanBarcode, 
  Bot, 
  FileText, 
  CreditCard, 
  Sparkles, 
  ArrowUpRight,
  Calculator,
  Smartphone
} from "lucide-react";

// --- Custom "Illustration" Components ---
// These replace the drawings in your image with code-based visuals.

const BarcodeVisual = () => (
  <div className="relative w-full h-40 bg-white rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden group-hover:border-blue-400 transition-colors">
    <div className="absolute inset-0 bg-blue-50/50 pattern-grid-lg opacity-50"></div>
    {/* Animated Scanner Line */}
    <motion.div 
      animate={{ top: ["10%", "90%", "10%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] z-10"
    ></motion.div>
    <ScanBarcode size={64} className="text-gray-800 z-0" />
    <div className="absolute bottom-2 right-2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded">
      Scanned
    </div>
  </div>
);

const AiAgentVisual = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center overflow-hidden">
    {/* Floating Elements */}
    <motion.div 
      animate={{ y: [-5, 5, -5] }} 
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-4 right-8 bg-white p-2 rounded-lg shadow-sm border border-indigo-100"
    >
      <div className="w-8 h-1 bg-gray-200 rounded mb-1"></div>
      <div className="w-5 h-1 bg-gray-200 rounded"></div>
    </motion.div>
    
    <div className="relative z-10 bg-white p-4 rounded-full shadow-xl shadow-indigo-200 border border-white">
      <Bot size={48} className="text-indigo-600" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
    </div>
    
    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1">
      <span className="w-1 h-1 bg-indigo-200 rounded-full"></span>
      <span className="w-1 h-1 bg-indigo-300 rounded-full"></span>
      <span className="w-1 h-1 bg-indigo-200 rounded-full"></span>
    </div>
  </div>
);

const GstVisual = () => (
  <div className="relative w-full h-40 bg-emerald-50/50 rounded-xl flex items-center justify-center overflow-hidden">
    <div className="absolute right-[-20px] top-[-20px] w-24 h-24 bg-emerald-100 rounded-full blur-2xl"></div>
    
    <div className="bg-white p-4 rounded-lg shadow-lg border border-emerald-100 relative rotate-3 group-hover:rotate-0 transition-transform duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-gray-400">GSTIN</span>
        <FileText size={12} className="text-emerald-600" />
      </div>
      <div className="text-xl font-bold text-gray-800 flex items-center gap-1">
        ₹ 18,240 <span className="text-[10px] text-emerald-600 font-normal bg-emerald-100 px-1 rounded">+18%</span>
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
  <div className="relative w-full h-40 bg-blue-50/30 rounded-xl flex items-center justify-center overflow-hidden">
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
     <div className="absolute top-6 right-8 bg-gradient-to-r from-purple-500 to-indigo-600 w-24 h-16 rounded-lg shadow-lg transform rotate-12 flex flex-col justify-end p-2 border-t border-white/20">
        <div className="text-[8px] text-white/80">**** 4242</div>
     </div>
  </div>
);

// --- Data ---

const features = [
  {
    title: "Barcode Scanning",
    desc: "Streamline your checkout process and reduce wait times. Compatible with all standard handheld scanners and mobile cameras.",
    visual: BarcodeVisual,
    bg: "bg-gray-50",
    delay: 0.1
  },
  {
    title: "AI Inventory Agent",
    desc: "Let our AI agent predict stock shortages. Inventory levels are automatically updated without manual data entry errors.",
    visual: AiAgentVisual,
    bg: "bg-indigo-50/30",
    delay: 0.2
  },
  {
    title: "Track GST & Tax",
    desc: "Get real-time visibility into your GST liability. Auto-generate GSTR-1 and GSTR-3B reports for seamless compliance.",
    visual: GstVisual,
    bg: "bg-emerald-50/30",
    delay: 0.3
  },
  {
    title: "Effortless Payment",
    desc: "Comprehensive integration with secure payment providers. Accept UPI, Cards, and Net Banking directly on the invoice.",
    visual: PaymentVisual,
    bg: "bg-blue-50/30",
    delay: 0.4
  }
];

export default function BusinessInsights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full"
          >
            Powerful Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get powerful business insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            Make informed decisions with real-time analytics and automated tools designed for modern Indian businesses.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              className={`group relative rounded-[2.5rem] p-8 ${feature.bg} hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 overflow-hidden`}
            >
              <div className="flex flex-col h-full justify-between gap-8">
                {/* Text Content */}
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Visual Area */}
                <div className="w-full mt-auto transform group-hover:scale-[1.02] transition-transform duration-500">
                    <feature.visual />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}