"use client";
import {
  ArrowRight,
  Calendar,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";

// Simple Avatar Component used in the design
const Avatar = ({ color }: { color: string }) => (
  <div
    className={`w-8 h-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-[10px] text-white font-bold`}
  >
    U
  </div>
);

export default function BookingHero() {
  const handleStart = () => {
    window.open("https://app.ez-hub.in/booking", "_blank");
  };

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600 overflow-hidden">
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold cursor-pointer hover:bg-orange-100 transition-colors">
              <span className="px-1.5 py-0.5 rounded-md bg-white border border-orange-200 text-[10px] uppercase tracking-wider">
                New
              </span>
              <span>Advanced Calendar Sync</span>
              <ArrowRight size={12} />
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Simplify Your <br />
              <span className="text-slate-900">Booking Process</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Stay on top of appointments, client reminders, and team scheduling
              with real-time insights and automated tools.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleStart}
                className="h-12 px-8 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-700 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-orange-200 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={18} className="opacity-80" />
              </button>

              <button className="h-12 px-8 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Reviews / Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <Avatar color="bg-blue-500" />
                <Avatar color="bg-green-500" />
                <Avatar color="bg-purple-500" />
                <Avatar color="bg-orange-500" />
              </div>
              <div className="text-sm font-medium text-slate-600">
                <span className="font-bold text-slate-900">4.9</span>
                <span className="text-orange-500 mx-1">★</span>
                (10k+ reviews)
              </div>
            </div>
          </div>

          {/* RIGHT: Floating UI Composition */}
          <div className="relative isolate hidden md:block">
            {/* Decor Circles (Blur) */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10" />

            {/* Main Card: Appointment List */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-6 max-w-md ml-auto transform transition-transform hover:scale-[1.01] duration-500">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-slate-800">
                  Appointments
                </h3>
                <span className="text-xs font-medium text-slate-400 cursor-pointer hover:text-orange-600">
                  View All
                </span>
              </div>

              {/* Header Row */}
              <div className="grid grid-cols-12 text-xs font-semibold text-slate-400 mb-4 px-2">
                <div className="col-span-5">Client Name</div>
                <div className="col-span-3 text-center">Time</div>
                <div className="col-span-3 text-center">Status</div>
                <div className="col-span-1"></div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-12 items-center text-sm py-3 px-2 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer">
                <div className="col-span-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    RJ
                  </div>
                  <span className="font-semibold text-slate-700">Rohan J.</span>
                </div>
                <div className="col-span-3 text-center text-slate-500">
                  10:00 AM
                </div>
                <div className="col-span-3 text-center">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                    Confirmed
                  </span>
                </div>
                <div className="col-span-1 text-slate-300 group-hover:text-slate-500">
                  <MoreHorizontal size={16} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 items-center text-sm py-3 px-2 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer">
                <div className="col-span-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">
                    SK
                  </div>
                  <span className="font-semibold text-slate-700">Sarah K.</span>
                </div>
                <div className="col-span-3 text-center text-slate-500">
                  11:30 AM
                </div>
                <div className="col-span-3 text-center">
                  <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold">
                    Pending
                  </span>
                </div>
                <div className="col-span-1 text-slate-300 group-hover:text-slate-500">
                  <MoreHorizontal size={16} />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 items-center text-sm py-3 px-2 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer">
                <div className="col-span-5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                    MP
                  </div>
                  <span className="font-semibold text-slate-700">Mike P.</span>
                </div>
                <div className="col-span-3 text-center text-slate-500">
                  02:00 PM
                </div>
                <div className="col-span-3 text-center">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                    Confirmed
                  </span>
                </div>
                <div className="col-span-1 text-slate-300 group-hover:text-slate-500">
                  <MoreHorizontal size={16} />
                </div>
              </div>
            </div>

            {/* Floating Pop-up Card */}
            <div className="absolute top-[60%] -left-6 z-20 bg-white p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 w-64 animate-bounce-slow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    New Request
                  </span>
                  <h4 className="font-bold text-slate-800 text-sm mt-1">
                    Consultation Call
                  </h4>
                </div>
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 mb-3 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-600 font-medium">
                    Tomorrow, 4:00 PM
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-600 font-medium">
                    30 Minutes
                  </span>
                </div>
              </div>

              <button className="w-full py-2 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition-colors">
                Accept Booking
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}