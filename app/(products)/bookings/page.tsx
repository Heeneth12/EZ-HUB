"use client";
import BookingHero from "@layouts/products/bookings/HeroSection";
import Header from "@layouts/products/bookings/Header";

import {
  Calendar,
  BarChart3,
  CheckCircle2,
  Instagram,
  Linkedin,
  Twitter,
  Zap,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";

export default function BookingHeroWithOrangeTheme() {
  const [isAnnual, setIsAnnual] = useState(true);
  const handleStart = () => {
    window.open("https://app.ez-hub.in/booking", "_blank");
  };

  // Pricing Data
  const plans = [
    {
      name: "Starter",
      desc: "For individuals just starting out.",
      price: isAnnual ? "0" : "0",
      features: [
        "1 Calendar connection",
        "50 Appointments/mo",
        "Basic email reminders",
        "Google Calendar Sync",
      ],
      cta: "Start for Free",
      popular: false,
    },
    {
      name: "Professional",
      desc: "For growing businesses & teams.",
      price: isAnnual ? "29" : "39",
      features: [
        "5 Calendar connections",
        "Unlimited Appointments",
        "SMS & WhatsApp reminders",
        "Remove EzHub branding",
        "Team management",
      ],
      cta: "Start Free Trial",
      popular: true, // Highlights this card
    },
    {
      name: "Business",
      desc: "For large agencies & organizations.",
      price: isAnnual ? "79" : "99",
      features: [
        "Unlimited Calendars",
        "Admin Reporting & API",
        "Custom Domain (CNAME)",
        "Dedicated Success Manager",
        "SSO & Advanced Security",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  // FAQ Data
  const faqs = [
    {
      q: "Is there a free trial available?",
      a: "Yes! We offer a 14-day free trial for the Professional plan. No credit card required. You can also stay on the Starter plan forever for free.",
    },
    {
      q: "Can I sync with multiple calendars?",
      a: "Absolutely. On the Professional plan, you can sync up to 5 calendars (Google, Outlook, iCloud) to check for conflicts and add bookings.",
    },
    {
      q: "Does it support local payment gateways?",
      a: "Yes, we integrate with Razorpay, Stripe, and PayPal so you can collect payments from clients at the time of booking.",
    },
    {
      q: "Can I remove the EzBooking branding?",
      a: "Yes, the Professional and Business plans allow you to remove our branding and add your own logo, colors, and email signatures.",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
        {/* --- HERO SECTION --- */}
        <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
          {/* --- TRUSTED BY SECTION --- */}
          <BookingHero />
          <div className="mt-24 pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm font-medium mb-8">
              We are trusted by 200+ companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Replace these spans with Logo Images */}
              <span className="text-xl font-bold text-slate-800">Google</span>
              <span className="text-xl font-bold text-slate-800 flex items-center gap-1">
                <span className="text-red-500 font-serif italic">U</span> Udemy
              </span>
              <span className="text-xl font-bold text-slate-800 flex items-center gap-1">
                Khan Academy
              </span>
              <span className="text-xl font-bold text-slate-800">
                Codecademy
              </span>
              <span className="text-xl font-bold text-slate-800">
                cloud academy
              </span>
            </div>
          </div>

          {/* --- FEATURES SECTION --- */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Everything you need to{" "}
                  <span className="text-orange-600">scale bookings</span>
                </h2>
                <p className="text-slate-500 text-lg">
                  We automates the busywork so you can focus on your clients.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Smart Scheduling
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Syncs with Google, Outlook, and iCal. Never get
                    double-booked again with our real-time conflict detection.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Automated Reminders
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Reduce no-shows by up to 80%. Send automated SMS and email
                    reminders before every appointment.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Business Insights
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    Track revenue, popular services, and staff performance with
                    our beautiful, easy-to-read dashboards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- HOW IT WORKS (Alternating Layout) --- */}
          <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                <div className="flex-1 lg:order-1">
                  <div className="relative">
                    {/* Abstract BG blob */}
                    <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
                    {/* Visual Representation */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-slate-100 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
                        <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="h-20 bg-orange-50 rounded-lg border border-orange-100 flex items-center justify-center text-orange-600 font-bold">
                            10:00 AM
                          </div>
                          <div className="h-20 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">
                            11:00 AM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 lg:order-2 space-y-6">
                  <div className="w-12 h-12 bg-white rounded-full border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    Set your availability
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Define when you're available. Block out personal time, set
                    buffer times between meetings, and customize your working
                    hours in seconds.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {[
                      "Syncs with Google Calendar",
                      "Custom buffer times",
                      "Timezone detection",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-orange-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-6">
                  <div className="w-12 h-12 bg-white rounded-full border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    Share your booking link
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Send your personalized link to clients or embed it directly
                    on your website. They pick a time, and it's added to your
                    calendar instantly.
                  </p>
                  <ul className="space-y-3 pt-2">
                    {[
                      "Embed on any website",
                      "Custom branding",
                      "Payment collection",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-orange-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 transform -translate-x-10 translate-y-10"></div>
                    {/* Visual Representation */}
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 rotate-[2deg] hover:rotate-0 transition-all duration-500 text-center">
                      <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4">
                        ez-hub.in/booking/your-name
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">
                        Book a Consultation
                      </h4>
                      <p className="text-slate-400 text-sm mb-6">
                        30 min • 1-on-1 Call
                      </p>
                      <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm">
                        Select a Time
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- TESTIMONIALS --- */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
                Loved by <span className="text-orange-600">thousands</span> of
                creators
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Jenkins",
                    role: "Freelance Designer",
                    text: "EzHub simplified my entire workflow. I used to spend hours emailing back and forth, now it's all automated.",
                  },
                  {
                    name: "David Chen",
                    role: "Consultant",
                    text: "The cleanest booking interface I've used. My clients constantly compliment how easy it is to schedule time with me.",
                  },
                  {
                    name: "Marcus Reid",
                    role: "Agency Owner",
                    text: "We scaled from 5 to 50 employees using this system. The team scheduling features are absolute lifesavers.",
                  },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-orange-500">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${
                          i === 0
                            ? "bg-purple-100 text-purple-600"
                            : i === 1
                            ? "bg-blue-100 text-blue-600"
                            : "bg-green-100 text-green-600"
                        } flex items-center justify-center font-bold`}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">
                          {review.name}
                        </h4>
                        <p className="text-slate-400 text-xs">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- CTA SECTION --- */}
          <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
              {/* Background Gradients */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 blur-[100px] opacity-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 blur-[100px] opacity-20 pointer-events-none"></div>

              <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to upgrade your workflow?
              </h2>
              <p className="relative z-10 text-slate-400 text-lg max-w-xl mx-auto mb-10">
                Join 10,000+ professionals who trust EzHub to manage their
                appointments and grow their business.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="h-14 px-8 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all hover:scale-105 active:scale-95">
                  Start Your Free Trial
                </button>
                <button className="h-14 px-8 rounded-xl bg-white/10 text-white border border-white/10 font-bold hover:bg-white/20 transition-all backdrop-blur-md">
                  Contact Sales
                </button>
              </div>
              <p className="relative z-10 mt-6 text-slate-500 text-sm">
                No credit card required • 14-day free trial
              </p>
            </div>
          </section>

          <div className="bg-white font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
            {/* --- PRICING SECTION --- */}
            <section className="py-24 px-6 relative overflow-hidden">
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10" />

              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Simple, transparent{" "}
                    <span className="text-orange-600">pricing</span>
                  </h2>
                  <p className="text-slate-500 text-lg mb-8">
                    No hidden fees. Change or cancel your plan at any time.
                  </p>

                  {/* Monthly / Yearly Toggle */}
                  <div className="flex items-center justify-center gap-4">
                    <span
                      className={`text-sm font-semibold ${
                        !isAnnual ? "text-slate-900" : "text-slate-400"
                      }`}>
                      Monthly
                    </span>
                    <button
                      onClick={() => setIsAnnual(!isAnnual)}
                      className="w-14 h-8 rounded-full bg-slate-200 p-1 relative transition-colors duration-300 focus:outline-none">
                      <div
                        className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${
                          isAnnual ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <span
                      className={`text-sm font-semibold ${
                        isAnnual ? "text-slate-900" : "text-slate-400"
                      }`}>
                      Yearly{" "}
                      <span className="text-orange-600 text-xs ml-1">
                        (Save 20%)
                      </span>
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                  {plans.map((plan, i) => (
                    <div
                      key={i}
                      className={`relative p-8 rounded-2xl bg-white transition-all duration-300 ${
                        plan.popular
                          ? "border-2 border-orange-500 shadow-2xl shadow-orange-100 scale-100 md:scale-105 z-10"
                          : "border border-slate-200 hover:border-slate-300 hover:shadow-xl"
                      }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                          Most Popular
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 h-10">
                        {plan.desc}
                      </p>

                      <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-4xl font-extrabold text-slate-900">
                          ${plan.price}
                        </span>
                        <span className="text-slate-400 font-medium">/mo</span>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-slate-600">
                            <Check
                              size={18}
                              className="text-orange-600 shrink-0 mt-0.5"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className={`w-full py-3 rounded-xl font-bold transition-all duration-200 ${
                          plan.popular
                            ? "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200"
                            : "bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200"
                        }`}>
                        {plan.cta}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-slate-500">
                    Can’t find the answer you’re looking for? Reach out to our{" "}
                    <a
                      href="#"
                      className="text-orange-600 font-semibold hover:underline">
                      support team
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((item, i) => (
                    <FAQItem key={i} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
        {/* --- FOOTER --- */}
        <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-orange-600 rounded-md flex items-center justify-center text-white font-bold text-xs">
                    Ez
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    EzBooking
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Making appointment scheduling seamless for everyone,
                  everywhere.
                </p>
                <div className="flex gap-4">
                  <Twitter
                    size={20}
                    className="text-slate-400 hover:text-orange-600 cursor-pointer transition-colors"
                  />
                  <Linkedin
                    size={20}
                    className="text-slate-400 hover:text-orange-600 cursor-pointer transition-colors"
                  />
                  <Instagram
                    size={20}
                    className="text-slate-400 hover:text-orange-600 cursor-pointer transition-colors"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="hover:text-orange-600 cursor-pointer">
                    Features
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Integrations
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Pricing
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Changelog
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="hover:text-orange-600 cursor-pointer">
                    About Us
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Careers
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">Blog</li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Contact
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="hover:text-orange-600 cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Terms of Service
                  </li>
                  <li className="hover:text-orange-600 cursor-pointer">
                    Cookie Policy
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2026 EzHub Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-slate-500 text-sm font-medium">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-orange-200 transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
        <span className="font-bold text-slate-900 text-lg">{question}</span>
        <div
          className={`p-2 rounded-full transition-colors duration-200 ${
            isOpen
              ? "bg-orange-100 text-orange-600"
              : "bg-slate-50 text-slate-400"
          }`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-transparent">
          {answer}
        </div>
      </div>
    </div>
  );
}
