import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function BookingsFooter() {
  return (
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
              Making appointment scheduling seamless for everyone, everywhere.
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
              <li className="hover:text-orange-600 cursor-pointer">Features</li>
              <li className="hover:text-orange-600 cursor-pointer">
                Integrations
              </li>
              <li className="hover:text-orange-600 cursor-pointer">Pricing</li>
              <li className="hover:text-orange-600 cursor-pointer">
                Changelog
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="hover:text-orange-600 cursor-pointer">About Us</li>
              <li className="hover:text-orange-600 cursor-pointer">Careers</li>
              <li className="hover:text-orange-600 cursor-pointer">Blog</li>
              <li className="hover:text-orange-600 cursor-pointer">Contact</li>
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
  );
}
