"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/new.png";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    dropdown: [
      { name: "Inventory Management", href: "/inventory", desc: "Track stock & orders" },
      { name: "Smart Bookings", href: "/bookings", desc: "Schedule appointments" },
      { name: "EZ Assist", href: "/assist", desc: "AI Support tools" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export default function BookingsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-white py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* --- Logo Section --- */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              <Image 
                src={logo} 
                alt="EZ Hub Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
              EZ Hub
            </span>
          </Link>
        </div>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors py-2"
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Desktop Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 hover:bg-orange-50 rounded-lg group/sub"
                      >
                        <p className="text-sm font-semibold text-slate-800 group-hover/sub:text-orange-700">
                          {subItem.name}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {subItem.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- Desktop Action Buttons --- */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login"
            className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2.5 rounded-lg bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-orange-600"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Drawer --- */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside drawer
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
               <Image src={logo} alt="Logo" className="h-8 w-auto" />
               <span className="font-bold text-lg text-slate-900">EZ Hub</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:text-orange-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {!item.dropdown ? (
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50 hover:text-orange-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div className="space-y-1">
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 flex-none transition-transform ${
                              mobileDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Mobile Dropdown Logic */}
                        <div className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50 text-center border border-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-orange-600 hover:bg-orange-700 text-center shadow-md"
                   onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}