"use client";
import React from "react";
import {
  Users,
  Target,
  Heart,
  Zap,
  Globe,
  Smile,
  ArrowRight,
  Award,
} from "lucide-react";

export default function AboutUs() {
  // Theme Colors
  const themeBlue = "#2563eb";
  const themeOrange = "#f97316";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden selection:bg-blue-100">
      {/* Inject Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-hand { font-family: 'Kalam', cursive; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* --- Top Gradient Light Source --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[800px] overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full h-full opacity-20 blur-[100px]"
          style={{
            background: `radial-gradient(circle at center, ${themeBlue} 0%, ${themeOrange} 30%, transparent 70%)`,
          }}
        />
      </div>

      <main className="relative z-10">
        
        {/* ============================================== */}
        {/* 1. HERO SECTION                                */}
        {/* ============================================== */}
        <div className="pt-24 pb-20 px-6 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
             <span className="py-1 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm border border-blue-100 tracking-wide uppercase">
                Our Story
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
            We are building the <br/>
            <span className="relative inline-block px-4">
                <span className="relative z-10">future of work.</span>
                {/* Orange Highlight Marker */}
                <svg className="absolute bottom-2 left-0 w-full h-6 text-orange-200 -z-10 transform -rotate-1" viewBox="0 0 300 40" preserveAspectRatio="none" fill="currentColor">
                   <path d="M5,30 Q150,10 295,30" stroke="currentColor" strokeWidth="15" strokeLinecap="round" />
                </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed font-hand transform rotate-[-1deg]">
            "Making business simple, efficient, and loved by millions."
          </p>
        </div>

        {/* ============================================== */}
        {/* 2. FLOATING STATS (Glassmorphism)              */}
        {/* ============================================== */}
        <div className="max-w-6xl mx-auto px-4 mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "Users", value: "12M+", icon: Users, color: "text-blue-600" },
                    { label: "Countries", value: "120+", icon: Globe, color: "text-orange-500" },
                    { label: "Happiness", value: "100%", icon: Smile, color: "text-green-600" },
                ].map((stat, idx) => (
                    <div key={idx} className="bg-white/60 backdrop-blur-lg border border-white/50 shadow-lg rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300 group">
                        <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color} opacity-80 group-hover:scale-110 transition-transform`} />
                        <div className="text-4xl font-black text-slate-800 mb-1">{stat.value}</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* ============================================== */}
        {/* 3. MISSION SECTION                             */}
        {/* ============================================== */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        Software shouldn't be <span className="text-orange-500 font-hand">painful.</span>
                    </h2>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                        <p>
                            We started with a simple idea: <strong>Business software is too complex.</strong> It's fragmented, expensive, and ugly. We wanted to change that.
                        </p>
                        <p>
                            Our mission is to provide a range of easy-to-use business applications that form a complete suite of tools to accompany any business need. We give millions of companies easy access to the software they need to run and expand their business.
                        </p>
                        <div className="pt-4">
                            <button className="text-blue-600 font-bold text-lg flex items-center hover:gap-3 transition-all group">
                                Read our manifesto <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Visual abstract graphic mimicking app interconnectivity */}
                <div className="relative h-[400px] bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-inner">
                    {/* Decorative blobs inside container */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-2xl opacity-50 blur-xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-50 blur-xl"></div>
                    
                    {/* Floating Cards in the graphic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-10">
                         <div className="relative w-full h-full">
                             {/* Center Card */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100 w-64">
                                <div className="w-12 h-12 bg-[#714B67] rounded-lg flex items-center justify-center text-white"><Target /></div>
                                <div>
                                    <div className="font-bold text-slate-800">One Platform</div>
                                    <div className="text-xs text-slate-400">Seamless integration</div>
                                </div>
                             </div>
                             
                             {/* Satellite Card 1 */}
                             <div className="absolute top-10 left-10 bg-white p-4 rounded-xl shadow-lg z-10 opacity-90 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white"><Zap size={20}/></div>
                             </div>

                             {/* Satellite Card 2 */}
                             <div className="absolute bottom-20 right-12 bg-white p-4 rounded-xl shadow-lg z-10 opacity-90 animate-bounce" style={{ animationDuration: '4s' }}>
                                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white"><Heart size={20}/></div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================== */}
        {/* 4. VALUES GRID                                 */}
        {/* ============================================== */}
        <div className="bg-slate-50 py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-hand text-2xl text-blue-600 font-bold mb-2">What drives us</h2>
                    <h3 className="text-4xl font-bold text-slate-900">Our Core Values</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Move Fast</h4>
                        <p className="text-slate-600 leading-relaxed">
                            We believe in rapid iteration. Perfection is the enemy of progress. We ship, we learn, and we improve.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Heart size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Be Human</h4>
                        <p className="text-slate-600 leading-relaxed">
                            B2B doesn't mean boring. We build software for people, not robots. We treat our customers like partners.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Award size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">Deliver Quality</h4>
                        <p className="text-slate-600 leading-relaxed">
                            Simplicity is hard work. We sweat the details so our users don't have to. Quality is non-negotiable.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================== */}
        {/* 5. CTA SECTION                                 */}
        {/* ============================================== */}
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
            <div className="bg-[#714B67] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                {/* Abstract Shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500 opacity-20 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to join the revolution?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Join 10,000+ companies that have already switched to a better way of working.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <button className="px-8 py-4 bg-white text-[#714B67] font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                            See Open Positions
                         </button>
                         <button className="px-8 py-4 bg-[#714B67] border border-white/30 text-white font-bold text-lg rounded-xl hover:bg-[#5d3d54] transition-colors">
                            Contact Us
                         </button>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}