'use client';
import React from 'react';
import { 
  Cpu, 
  Lock, 
  Zap, 
  Settings2,
  ArrowUpRight 
} from 'lucide-react';

export default function BentoFeatures() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden font-sans text-white">
      
      {/* --- BACKGROUND ELEMENTS (Matches Hero) --- */}
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-pink-500 tracking-widest uppercase mb-3 block">
            Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Empower Your Business with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">
              AI Workflows
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Generic AI tools won't suffice. Our platform is purpose-built to provide 
            exceptional AI-driven solutions for your unique business needs.
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        {/* Grid: 1 col on mobile, 3 cols on desktop. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 1. CARD: Advanced AI (Top Left) */}
          <div className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="mb-4 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">Advanced AI Algorithms</h3>
            <p className="text-gray-400 text-sm mb-6">Our platform utilizes cutting-edge AI algorithms to provide accurate efficient solutions.</p>
            
            {/* IMAGE PLACEHOLDER */}
            <div className="mt-auto w-full h-48 bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-white/5 overflow-hidden relative">
               {/* Replace this div with your Next/Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">
                 Image Area
               </div>
            </div>
          </div>

          {/* 2. CARD: Secure Data (Top Middle) */}
          <div className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="mb-4 w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
              <Lock className="w-5 h-5 text-pink-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">Secure Data Handling</h3>
            <p className="text-gray-400 text-sm mb-6">We prioritize security with state-of-the-art encryption and strict privacy protocols.</p>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-auto w-full h-48 bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-white/5 overflow-hidden relative">
               {/* Replace this div with your Next/Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">
                 Image Area
               </div>
            </div>
          </div>

          {/* 3. CARD: Seamless Integration (Right Vertical - Spans 2 Rows) */}
          <div className="group relative lg:row-span-2 rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="mb-4 w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
              <Zap className="w-5 h-5 text-indigo-400" />
            </div>

             <h3 className="text-xl font-semibold text-white mb-2">Seamless Integration</h3>
             <p className="text-gray-400 text-sm mb-8">Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.</p>

             {/* TALL IMAGE PLACEHOLDER */}
             <div className="flex-grow w-full min-h-[300px] bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-white/5 overflow-hidden relative">
               {/* Replace this div with your Next/Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">
                 Tall Image Area
               </div>
             </div>
          </div>

          {/* 4. CARD: Customizable Solutions (Bottom Wide - Spans 2 Columns) */}
          <div className="group relative lg:col-span-2 rounded-2xl bg-[#0a0a0a] border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col lg:flex-row gap-8">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none"></div>

             <div className="flex-1">
                <div className="mb-4 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                  <Settings2 className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Customizable Solutions</h3>
                <p className="text-gray-400 text-sm mb-6">Tailor our AI services to your specific needs with flexible customization options, allowing you to get the most out of our platform.</p>
                
                <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-teal-400 transition-colors">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </button>
             </div>

             {/* WIDE IMAGE PLACEHOLDER */}
             <div className="flex-1 w-full min-h-[200px] bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-white/5 overflow-hidden relative">
               {/* Replace this div with your Next/Image */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">
                 Wide Image Area
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}