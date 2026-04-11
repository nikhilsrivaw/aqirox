import { motion } from "motion/react";

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative ${className} group/logo`}>
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_0_12px_rgba(255,79,0,0.2)]"
    >
      {/* Top Left Fragment */}
      <motion.path
        d="M12 2L4 6.5V11L12 6.5V2Z"
        className="fill-primary"
        whileHover={{ x: -1, y: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* Top Right Fragment */}
      <motion.path
        d="M12 2L20 6.5V11L12 6.5V2Z"
        className="fill-primary/80"
        whileHover={{ x: 1, y: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* Bottom Fragment */}
      <motion.path
        d="M4 13V17.5L12 22L20 17.5V13L12 17.5L4 13Z"
        className="fill-primary/60"
        whileHover={{ y: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      {/* Center Core Dot */}
      <motion.circle
        cx="12"
        cy="12"
        r="1.5"
        className="fill-white"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
  </div>
);
