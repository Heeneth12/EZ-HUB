"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  Lock,
  User,
  Box,
  Users,
  CreditCard,
  Eye,
  EyeOff,
  Github,
  Phone,
  Building2,
  Briefcase,
} from "lucide-react";

const APPS = [
  {
    id: "inventory",
    label: "Inventory",
    icon: Box,
  },
  {
    id: "crm",
    label: "CRM",
    icon: Users,
  },
  {
    id: "hr",
    label: "HR Portal",
    icon: CreditCard,
  },
];

export default function AuthPageDarkWhite() {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedAppId, setSelectedAppId] = useState(APPS[0].id);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen w-full flex items-center justify-center relative bg-black overflow-hidden font-sans selection:bg-white selection:text-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px] mask-image-gradient"></div>

      {/* 2. Silver Glows (Ambient Lighting) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-500/10 blur-[150px]" />

      {/* 3. Center Spot Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-white/5 opacity-20 blur-[100px] transition-all duration-700 pointer-events-none" />

      <div
        className={`w-full relative z-10 px-4 transition-all duration-500 ${
          isLogin ? "max-w-110" : "max-w-150"
        }`}>
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
            {isLogin ? "Welcome Back" : "Get Started"}
          </h1>
          <p className="text-zinc-500 text-sm">
            {isLogin ? "Access your dashboard." : "Join EZH today."}
          </p>
        </div>

        {/* --- App Selector (Monochrome) --- */}
        <div className="bg-[#0A0A0A] p-1.5 rounded-xl flex gap-1 mb-8 border border-white/10 shadow-inner">
          {APPS.map((app) => {
            const isActive = selectedAppId === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-800 text-white shadow-sm border border-white/10"
                    : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-900/50"
                }`}>
                <app.icon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-zinc-600"
                  }`}
                />
                <span className={isActive ? "font-semibold" : ""}>
                  {app.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- Main Card --- */}
        <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)] rounded-3xl p-8 relative overflow-hidden group">
          {/* Subtle White Border Glow on Hover */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none"></div>

          <form onSubmit={handleAuth} className="space-y-5">
            {/* --- REGISTER FIELDS (Grid Layout) --- */}
            <div
              className={`grid gap-4 transition-all duration-500 ease-in-out ${
                !isLogin
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0 hidden"
              }`}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                    <input
                      type="text"
                      placeholder="Heeneth Sai"
                      className="w-full bg-black border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">
                    Phone
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                    <input
                      type="tel"
                      placeholder="+91..."
                      className="w-full bg-black border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">
                    Company
                  </label>
                  <div className="relative group">
                    <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                    <input
                      type="text"
                      placeholder="EZH Tech"
                      className="w-full bg-black border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">
                    Role
                  </label>
                  <div className="relative group">
                    <Briefcase className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                    <input
                      type="text"
                      placeholder="Manager"
                      className="w-full bg-black border border-white/10 rounded-xl py-2 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --- COMMON FIELDS --- */}
            <div>
              <label className="block text-xs font-semibold text-zinc-500 mb-1.5 ml-1 uppercase tracking-wider">
                Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-zinc-500 ml-1 uppercase tracking-wider">
                  Password
                </label>
                {isLogin && (
                  <a
                    href="#"
                    className="text-xs font-medium text-white hover:text-zinc-300 transition-colors">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-2.5 w-4 h-4 text-zinc-600 group-focus-within:text-white transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-xl py-2.5 pl-9 pr-10 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition-all focus:bg-zinc-900/50 focus:border-white/50 focus:ring-1 focus:ring-white/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-zinc-600 hover:text-zinc-300 focus:outline-none transition-colors">
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Solid White Button (High Contrast) */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden rounded-xl py-3.5 bg-white text-black font-bold text-sm tracking-wide transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <span className="relative flex items-center justify-center gap-2">
                {loading
                  ? "Processing..."
                  : isLogin
                  ? "Sign In"
                  : "Create Account"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
              <span className="bg-[#0A0A0A] px-2 text-zinc-600">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/5 rounded-xl bg-black hover:bg-zinc-900 transition-colors text-sm font-medium text-zinc-400 hover:text-white hover:border-white/20 group">
              <svg
                className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#fff"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#fff"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#fff"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#fff"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-white/5 rounded-xl bg-black hover:bg-zinc-900 transition-colors text-sm font-medium text-zinc-400 hover:text-white hover:border-white/20 group">
              <Github className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              GitHub
            </button>
          </div>

          {/* Footer Toggle */}
          <div className="mt-8 text-center text-sm">
            <span className="text-zinc-500">
              {isLogin ? "New to EZH?" : "Already have an account?"}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-semibold text-white hover:text-zinc-300 hover:underline transition-colors">
              {isLogin ? "Sign up now" : "Log in"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
