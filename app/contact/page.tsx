"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Building2,
  MessageSquare,
  ArrowRight,
  Globe,
  HelpCircle
} from "lucide-react";

export default function ContactUsMidnight() {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API
    setTimeout(() => {
      setLoading(false);
      alert("Message sent!");
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-white selection:text-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px] mask-image-gradient pointer-events-none"></div>
      
      {/* 2. Silver Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-150 h-150 rounded-full bg-white/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 rounded-full bg-zinc-500/10 blur-[120px] pointer-events-none" />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* --- Header Section --- */}
          <div className="mb-20 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Let's start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                conversation.
              </span>
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
              Whether you have questions about our pricing, need a custom demo, or want to partner with us, we are ready to answer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* --- Left Column: Contact Methods (Styled like Auth Cards) --- */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1: Sales */}
              <div className="group p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Talk to Sales</h3>
                    <p className="text-zinc-500 text-sm mb-3">
                      Interested in our software? Let's find the right plan.
                    </p>
                    <a href="#" className="flex items-center text-white text-sm font-semibold hover:text-zinc-300 transition-colors">
                      Contact Sales <ArrowRight size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Support */}
              <div className="group p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Help & Support</h3>
                    <p className="text-zinc-500 text-sm mb-3">
                      Get help with your account or technical issues.
                    </p>
                    <a href="#" className="flex items-center text-white text-sm font-semibold hover:text-zinc-300 transition-colors">
                      Visit Help Center <ArrowRight size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="group p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">General Inquiries</h3>
                    <p className="text-zinc-500 text-sm mb-3">
                      For press, partnerships, or general questions.
                    </p>
                    <a href="#" className="flex items-center text-white text-sm font-semibold hover:text-zinc-300 transition-colors">
                      hello@ezhub.in <ArrowRight size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* --- Right Column: The Form (Exact Auth Style) --- */}
            <div className="lg:col-span-7">
              <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">First Name</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                            <input 
                              type="text" 
                              placeholder="John"
                              className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">Last Name</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                            <input 
                              type="text" 
                              placeholder="Doe"
                              className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                            />
                        </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                            <input 
                              type="email" 
                              placeholder="john@company.com"
                              className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">Phone</label>
                        <div className="relative group">
                            <Phone className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                            <input 
                              type="tel" 
                              placeholder="+1 (555) 000-0000"
                              className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                            />
                        </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">Company</label>
                    <div className="relative group">
                        <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                        <input 
                          type="text" 
                          placeholder="Your Business Ltd."
                          className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                        />
                    </div>
                  </div>

                  {/* Message (TextArea) */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">Message</label>
                    <div className="relative group">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                        <textarea 
                          rows={4}
                          placeholder="Tell us about your project..."
                          className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20 resize-none"
                        />
                    </div>
                  </div>

                  {/* Submit Button (Auth Style) */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full relative overflow-hidden rounded-xl py-3.5 bg-white text-black font-bold text-sm tracking-wide transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <Send size={16} />}
                      </span>
                    </button>
                    <p className="text-center text-xs text-zinc-600 mt-4">
                      By sending this message, you agree to our <a href="#" className="underline hover:text-white transition-colors">Terms</a> and <a href="#" className="underline hover:text-white transition-colors">Privacy</a>.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}