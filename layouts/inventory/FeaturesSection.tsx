"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  Check, 
  CreditCard,
  Truck,
  FileText
} from "lucide-react";


const PurchaseMockUI = () => (
  <div className="relative w-full max-w-sm mx-auto">
    {/* Background Decorative Cards for Depth */}
    <div className="absolute top-4 left-4 w-full h-full bg-blue-100/50 rounded-2xl -z-10 transform rotate-3 transition-transform group-hover:rotate-6"></div>
    <div className="absolute top-2 left-2 w-full h-full bg-blue-50/80 rounded-2xl -z-10 transform rotate-1 transition-transform group-hover:rotate-3"></div>
    
    {/* Main Card */}
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl shadow-blue-900/10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <ShoppingCart size={20} />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Purchase Order</h4>
            <p className="text-[10px] text-gray-500">#PO-2024-883</p>
          </div>
        </div>
        <span className="px-2 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-green-100">
          Approved
        </span>
      </div>

      <div className="space-y-3">
        {[
          { name: "MacBook Pro M3", qty: "5 Units", price: "$12,500" },
          { name: "Dell Monitors", qty: "10 Units", price: "$3,200" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/50 transition-colors cursor-default">
            <div>
              <div className="text-xs font-semibold text-gray-700">{item.name}</div>
              <div className="text-[10px] text-gray-400">Qty: {item.qty}</div>
            </div>
            <div className="text-xs font-bold text-gray-900">{item.price}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs text-gray-500">Vendor: <strong>TechDistro Inc.</strong></span>
        <button className="text-[10px] bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors">
          View GRN
        </button>
      </div>
    </div>
  </div>
);

const WarehouseMockUI = () => (
  <div className="relative w-full max-w-sm mx-auto group">
    <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl blur-xl -z-10"></div>
    
    <div className="bg-white/90 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-2xl shadow-purple-900/10">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h4 className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-1">Total Value</h4>
          <div className="text-3xl font-bold text-gray-900">₹ 4.2M</div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
          <TrendingUp size={14} /> +12%
        </div>
      </div>

      <div className="space-y-5">
        {[
          { label: "Electronics", val: 78, color: "bg-purple-600", track: "bg-purple-100" },
          { label: "Furniture", val: 45, color: "bg-pink-500", track: "bg-pink-100" },
          { label: "Accessories", val: 92, color: "bg-indigo-500", track: "bg-indigo-100" },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold text-gray-600">{item.label}</span>
              <span className="font-bold text-gray-900">{item.val}%</span>
            </div>
            <div className={`w-full h-2.5 rounded-full ${item.track} overflow-hidden`}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${item.val}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex gap-2">
         <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
         <span className="text-[10px] text-gray-500 font-medium">Live Stream Active</span>
      </div>
    </div>
  </div>
);

const SalesMockUI = () => (
  <div className="relative w-full max-w-sm mx-auto">
    <div className="absolute -right-4 top-10 w-24 h-24 bg-green-400/20 rounded-full blur-2xl"></div>
    <div className="absolute -left-4 bottom-10 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl"></div>

    <div className="bg-white/95 backdrop-blur-md border border-gray-100 p-0 rounded-2xl shadow-2xl shadow-teal-900/10 overflow-hidden">
      {/* Receipt Header */}
      <div className="bg-gray-50/50 p-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1.5 rounded text-green-600"><FileText size={16}/></div>
                <span className="font-bold text-gray-700 text-sm">INV-0992</span>
            </div>
            <span className="text-xs text-gray-400">Just Now</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-6 relative">
        <div className="absolute left-8.75 top-8 bottom-8 w-0.5 bg-gray-100"></div>
        
        <div className="space-y-6">
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white shadow-sm flex items-center justify-center text-white">
                    <Check size={12} />
                </div>
                <div>
                    <div className="text-xs font-bold text-gray-800">Order Confirmed</div>
                    <div className="text-[10px] text-gray-400">Sales Order #SO-221 created</div>
                </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm flex items-center justify-center text-white">
                    <CreditCard size={12} />
                </div>
                <div>
                    <div className="text-xs font-bold text-gray-800">Payment Received</div>
                    <div className="text-[10px] text-gray-400">via UPI (₹ 2,400.00)</div>
                </div>
            </div>

            <div className="flex items-center gap-4 relative z-10">
                <div className="w-6 h-6 rounded-full bg-white border-2 border-indigo-500 shadow-sm flex items-center justify-center text-indigo-600">
                    <Truck size={12} />
                </div>
                <div>
                    <div className="text-xs font-bold text-indigo-600">Out for Delivery</div>
                    <div className="text-[10px] text-indigo-400 font-medium">Estimated: Today, 4 PM</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Data ---

const steps = [
  {
    id: 1,
    title: "Smart Procurement",
    header: "Purchase Management",
    desc: "Automate your buying process. From raising POs to verifying GRNs, ensure you only pay for what you receive.",
    colorClass: "from-blue-500 to-indigo-600",
    icon: ShoppingCart,
    Mock: PurchaseMockUI,
    features: ["One-click PO Generation", "GRN Verification", "Supplier Ledger"]
  },
  {
    id: 2,
    title: "Real-time Inventory",
    header: "Warehouse & Stock",
    desc: "Watch your inventory update live. Manage multi-warehouse stock transfers and get low-stock alerts instantly.",
    colorClass: "from-purple-500 to-pink-600",
    icon: Package,
    Mock: WarehouseMockUI,
    features: ["Live Stock Streaming", "Multi-Warehouse Support", "Batch & Expiry Tracking"]
  },
  {
    id: 3,
    title: "Seamless Selling",
    header: "Sales & Invoicing",
    desc: "Convert quotes to invoices in seconds. Handle payments, generate delivery notes, and keep customers happy.",
    colorClass: "from-emerald-500 to-teal-600",
    icon: TrendingUp,
    Mock: SalesMockUI,
    features: ["Instant Invoicing", "Flexible Payment Cycles", "Delivery Gate Pass"]
  }
];

export default function InventoryFlowPremium() {
  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-[10%] right-[5%] w-125 h-125 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full border border-indigo-100 bg-white shadow-sm mb-6"
            >
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 font-bold text-xs uppercase tracking-widest">
                    Complete Ecosystem
                </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Orchestrate your entire <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">Business Flow</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
                Connect every department from purchase to delivery. Eliminate silos and let data flow seamlessly across your organization.
            </p>
        </div>

        {/* Vertical Flow Steps */}
        <div className="relative">
             {/* Central Gradient Line (Desktop) */}
             <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-indigo-200 to-transparent -translate-x-1/2"></div>

             <div className="space-y-32">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                        >
                            {/* Text Content */}
                            <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                                <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end justify-center' : 'lg:justify-start justify-center'}`}>
                                    <div className={`p-2.5 rounded-xl bg-linear-to-br ${step.colorClass} text-white shadow-lg`}>
                                        <step.icon size={24} />
                                    </div>
                                    <span className="font-bold text-indigo-900/50 text-sm tracking-wider uppercase">{step.title}</span>
                                </div>
                                
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.header}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">{step.desc}</p>
                                
                                <ul className={`space-y-3 inline-block ${isEven ? 'lg:items-end' : 'lg:items-start'} flex flex-col items-center`}>
                                    {step.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            {isEven && <span className="text-sm">{feat}</span>}
                                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
                                            {!isEven && <span className="text-sm">{feat}</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Center Marker (Desktop) */}
                            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-4 border-slate-50 rounded-full shadow-md items-center justify-center z-10">
                                <div className={`w-3 h-3 rounded-full bg-linear-to-r ${step.colorClass}`}></div>
                            </div>

                            {/* Visual/Mock UI */}
                            <div className="flex-1 w-full flex justify-center perspective-1000">
                                <div className="group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl">
                                    <step.Mock />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
             </div>
        </div>
      </div>
    </section>
  );
}