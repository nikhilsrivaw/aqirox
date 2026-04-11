import { motion, useScroll, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Brain, Dumbbell, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Link, useRouter } from "../lib/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const { path } = useRouter();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [path]);

  const products = [
    {
      name: "KROVA",
      desc: "AI brain for professional service businesses",
      icon: Brain,
      color: "text-primary",
      href: "#",
      external: true,
    },
    {
      name: "GYMNSETU",
      desc: "Gym management for Indian gym owners",
      icon: Dumbbell,
      color: "text-primary",
      href: "#",
      external: true,
    },
  ];

  const navLinks = [
    { name: "Products", href: "#", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return path === "/";
    return path === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "1000px" : "1200px",
          y: scrolled ? 0 : -10,
        }}
        className={`pointer-events-auto transition-all duration-500 ease-in-out px-4 sm:px-8 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border border-sand/50 rounded-full shadow-[0_8px_32px_rgba(32,21,21,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-12 min-w-0">
          <Link to="/" className="group flex items-center gap-2 sm:gap-3 min-w-0">
            <Logo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
            <div className="flex flex-col -space-y-1 min-w-0">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-zapier-black leading-none">
                AQI<span className="text-primary">ROX</span>
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-charcoal/40 group-hover:text-primary/60 transition-colors">
                SaaS Engine
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = !link.hasDropdown && isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-zapier-black hover:text-primary transition-all group"
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[480px]"
                        >
                          <div className="bg-white rounded-2xl border border-sand shadow-2xl p-6 grid grid-cols-1 gap-3">
                            {products.map((product) => (
                              <a
                                key={product.name}
                                href={product.href}
                                className="flex gap-4 p-4 rounded-xl hover:bg-light-sand transition-all group/item"
                              >
                                <div
                                  className={`w-11 h-11 rounded-lg bg-white border border-sand flex items-center justify-center shadow-sm group-hover/item:border-primary/20 group-hover/item:shadow-md transition-all ${product.color}`}
                                >
                                  <product.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-bold text-zapier-black mb-1">
                                    {product.name}
                                  </p>
                                  <p className="text-xs text-warm-gray leading-tight">
                                    {product.desc}
                                  </p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-warm-gray group-hover/item:text-primary group-hover/item:translate-x-1 transition-all self-center" />
                              </a>
                            ))}
                            <div className="mt-2 pt-4 border-t border-sand flex items-center justify-between">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-warm-gray">
                                Learn more
                              </p>
                              <Link
                                to="/about"
                                className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                              >
                                About AQIROX <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={link.name} className="relative">
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-all group ${
                      active ? "text-primary" : "text-zapier-black hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-primary/20 transition-all">
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-zapier-black focus:outline-none bg-light-sand rounded-full transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zapier-black/95 backdrop-blur-xl lg:hidden flex flex-col p-6 sm:p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 sm:mb-12">
              <Link to="/" className="flex items-center gap-3">
                <Logo className="w-9 h-9 sm:w-10 sm:h-10" />
                <div className="flex flex-col -space-y-1">
                  <span className="text-xl sm:text-2xl font-black tracking-tighter text-white leading-none">
                    AQI<span className="text-primary">ROX</span>
                  </span>
                  <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/40">
                    SaaS Engine
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 sm:p-3 bg-white/10 rounded-full text-white"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-6 sm:gap-8">
              {navLinks
                .filter((link) => !link.hasDropdown)
                .map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-3xl sm:text-4xl font-bold transition-colors flex items-center justify-between group ${
                        isActive(link.href)
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <ArrowRight className="h-7 w-7 sm:h-8 sm:w-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}

              <div className="pt-6 sm:pt-8 border-t border-white/10 space-y-5 sm:space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                  Products
                </p>
                {products.map((product, i) => (
                  <motion.a
                    key={product.name}
                    href={product.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <product.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl font-bold text-white">{product.name}</p>
                      <p className="text-xs text-white/50">{product.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-auto pt-6 space-y-4">
              <Link to="/contact">
                <Button className="w-full bg-primary text-white rounded-full py-6 sm:py-8 text-lg sm:text-xl font-bold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
