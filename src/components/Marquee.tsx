import { motion } from "motion/react";

const logos = [
  "Sharma Exports", "Patel Textiles", "Verma Logistics", "Iyer Solutions", 
  "Global Tech", "Indo-Global", "Bharat Dynamics", "Apex Retail"
];

export default function Marquee() {
  return (
    <div className="py-12 bg-off-white border-b border-sand overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-warm-gray">
          Trusted by 500+ Indian SMBs
        </p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {[...logos, ...logos].map((logo, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-display font-bold text-sand/60 hover:text-primary transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
