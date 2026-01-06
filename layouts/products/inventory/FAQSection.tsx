"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface ThemeConfig {
  colors: {
    bg: { [key: string]: string };
    text: { [key: string]: string };
    border: { [key: string]: string };
  };
  gradients: { [key: string]: string };
  effects: { [key: string]: string };
  layout: { [key: string]: string };
}

const theme: ThemeConfig = {
  colors: {
    bg: {
      main: "bg-[#050505]",
      glass: "bg-white/[0.02]",
      glow: "bg-indigo-950/20",
    },
    text: {
      heading: "text-white",
      body: "text-zinc-500",
      subtle: "text-zinc-400",
      highlight: "text-zinc-200",
    },
    border: {
      subtle: "border-white/5",
      light: "border-white/10",
    },
  },
  gradients: {
    metallicText: "text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600",
    gridPattern: "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
  },
  effects: {
    backdrop: "backdrop-blur-md",
  },
  layout: {
    sectionPad: "py-12 md:py-18",
    maxWidth: "max-w-4xl",
  }
};

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Does EZ Hub integrate with my existing ERP?",
    answer: "Yes. We offer seamless API integrations with major ERPs like SAP, Oracle, and Tally, as well as popular e-commerce platforms like Shopify and Amazon."
  },
  {
    question: "How secure is my inventory data?",
    answer: "We use enterprise-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your data is isolated in secure silos and backed up daily."
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Absolutely. You can scale your plan up or down directly from your dashboard. Changes take effect immediately, with pro-rated billing for the remainder of the cycle."
  },
  {
    question: "Is there a limit to how many warehouses I can add?",
    answer: "On our Growth and Enterprise plans, you can manage unlimited warehouse locations. The Starter plan supports up to 2 locations."
  },
  {
    question: "Do you offer on-premise deployment?",
    answer: "Yes, for Enterprise clients we offer private cloud or on-premise deployment options to meet strict regulatory compliance requirements."
  }
];


interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onHoverStart, onHoverEnd }) => {
  return (
    <div 
      className={`border-b ${theme.colors.border.subtle} transition-colors duration-300 hover:bg-white/[0.01]`}
      // Triggers on Mouse Enter/Leave for Desktop
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      // Click fallback for Mobile/Touch
      onClick={isOpen ? onHoverEnd : onHoverStart}
    >
      <div className="w-full py-6 flex items-center justify-between text-left group cursor-pointer">
        <span 
          className={`text-lg font-medium transition-colors duration-300 ${
            isOpen ? theme.colors.text.heading : theme.colors.text.subtle
          } group-hover:${theme.colors.text.heading}`}
        >
          {question}
        </span>
        
        {/* Icon Container */}
        <span 
          className={`ml-6 flex-shrink-0 p-1 rounded-full border transition-all duration-500 ${
            isOpen 
              ? `bg-white text-black border-white rotate-180` 
              : `border-transparent ${theme.colors.text.subtle} group-hover:border-white/10 group-hover:bg-white/5`
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: -10 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth spring-like ease
            className="overflow-hidden"
          >
            <p className={`pb-8 text-lg font-light leading-relaxed ${theme.colors.text.body} max-w-3xl cursor-default`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className={`relative ${theme.layout.sectionPad} ${theme.colors.bg.main} overflow-hidden font-sans selection:bg-zinc-700/30`}>
      
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: theme.gradients.gridPattern,
          backgroundSize: "60px 60px",
        }}
      />
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-150 ${theme.colors.bg.glow} blur-[120px] rounded-full pointer-events-none opacity-50`} />

      <div className={`relative z-10 ${theme.layout.maxWidth} mx-auto px-6`}>
        
        {/* Header */}
        <div className="text-center mb-20">          
          <h2 className={`text-4xl md:text-4xl font-semibold tracking-tight mb-6 ${theme.colors.text.heading}`}>
            Frequently asked 
            <span className={theme.gradients.metallicText}> questions</span>
          </h2>
        </div>

        {/* List */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onHoverStart={() => setOpenIndex(index)}
              onHoverEnd={() => setOpenIndex(null)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
            <p className={`text-xs ${theme.colors.text.body}`}>
                Still have questions?{" "}
                <a href="/contact" className={`underline underline-offset-4 ${theme.colors.text.highlight} hover:text-white transition-colors`}>
                    Chat with our team
                </a>
            </p>
        </div>
      </div>
    </section>
  );
}