import React from "react";
import logo from "@/assets/images/new.png";
import Image from "next/image";
import { Github, Twitter, Linkedin, Facebook, Send, Globe } from "lucide-react";

export default function Footer() {
  const links = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Enterprise", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
    resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "Status", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-[#050505] pt-12 pb-10 border-t border-white/10 font-sans text-white overflow-hidden">
      {/* Static Background Glow (No Motion) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-white-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-8">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <a href="/" className="group flex items-center gap-2">
                <Image src={logo} alt="EZ Hub Logo" className="h-14 w-auto" />
              </a>
              <span className="text-xl font-bold tracking-tight">EZH</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-xs text-sm">
              Empowering businesses with a unified platform. Simple, efficient,
              and designed for the modern era.
            </p>

            {/* Newsletter Input */}
            <div className="max-w-xs">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">
                Subscribe to our newsletter
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-white-500/50 focus:bg-white/10 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/10 hover:bg-white/20 rounded-md text-gray-300 transition-colors">
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-sm">
            © 2024 Odoo Bits Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 border border-white/10 rounded-full px-3 py-1 bg-white/5">
            <Globe size={14} />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}