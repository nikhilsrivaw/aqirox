// import { Award } from "lucide-react"; // re-enable when Startup India badge is added
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
                <Link
                  to="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-charcoal mb-10" />

        {/* Recognition strip — re-enable when Startup India badge is added
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10">
          <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center text-primary shrink-0">
            <Award className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
              Recognised by
            </p>
            <p className="text-sm sm:text-base font-semibold text-cream leading-snug">
              Startup India · Government of India
            </p>
            <p className="text-xs text-warm-gray mt-1">
              DPIIT Recognition No. DIPP258275 — Aqirox Technology Private
              Limited
            </p>
          </div>
        </div>
        */}

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-sm text-warm-gray">
          <div className="space-y-2 max-w-sm">
            <p className="text-cream font-semibold">
              Aqirox Technology Private Limited
            </p>
            <p className="leading-relaxed">
              Shivje Nagar, Muhisudharpur, Shivpurinewcolony, Gorakhpur Sadar,
              Gorakhpur - 273016, Uttar Pradesh, India
            </p>
            <p>
              <a
                href="mailto:aqiroxtechnologies@gmail.com"
                className="hover:text-white transition-colors break-all"
              >
                aqiroxtechnologies@gmail.com
              </a>
            </p>
            <p className="pt-2">
              © 2025 Aqirox Technology Private Limited. All rights reserved.
            </p>
          </div>
          <p className="italic max-w-md md:text-right">
            AQIROX is not just building software. We are building systems that support
            businesses in doing what they do best.
          </p>
        </div>
      </div>
    </footer>
  );
}
