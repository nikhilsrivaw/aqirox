import { Separator } from "@/components/ui/separator";
import { Logo } from "./Logo";
import { Link } from "../lib/router";

export default function Footer() {
  return (
    <footer className="bg-zapier-black py-16 text-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                  AQI<span className="text-primary">ROX</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/40">
                  SaaS Engine
                </span>
              </div>
            </Link>
            <p className="text-sand max-w-sm text-lg leading-relaxed">
              Building intelligent SaaS for Indian businesses. Empowering growth through
              clarity and practical technology.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Products
            </h3>
            <ul className="space-y-4 text-base text-sand">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  KROVA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GYMNSETU
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="space-y-4 text-base text-sand">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Legal
            </h3>
            <ul className="space-y-4 text-base text-sand">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-charcoal mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-warm-gray gap-6">
          <p>© {new Date().getFullYear()} AQIROX Technologies. All rights reserved.</p>
          <p className="italic max-w-md text-center md:text-right">
            AQIROX is not just building software. We are building systems that support
            businesses in doing what they do best.
          </p>
        </div>
      </div>
    </footer>
  );
}
