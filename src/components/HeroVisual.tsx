import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight,
  MousePointer2,
  MessageCircle,
  Bell,
  TrendingUp,
  Rocket
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroVisual() {
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationCount(prev => (prev % 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[650px] flex items-center justify-center perspective-2000">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -10, rotateX: 5 }}
        animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
        whileHover={{ 
          rotateY: 2, 
          rotateX: -2,
          transition: { duration: 0.4 }
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 w-full max-w-[520px] bg-white rounded-2xl border border-sand shadow-[0_32px_64px_-16px_rgba(32,21,21,0.15)] p-5 sm:p-8 transition-shadow hover:shadow-[0_48px_80px_-20px_rgba(32,21,21,0.2)]"
      >
        <div className="flex items-center justify-between mb-6 sm:mb-10 border-b border-sand pb-4 sm:pb-6">
          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-400/80 cursor-pointer" />
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-400/80 cursor-pointer" />
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-400/80 cursor-pointer" />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <div className="px-3 sm:px-4 py-1.5 bg-light-sand rounded-full text-[9px] sm:text-[10px] font-bold text-warm-gray uppercase tracking-[0.2em]">
              AQIROX Intelligence
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-5 sm:mb-8">
          <motion.div 
            whileHover={{ 
              y: -8,
              borderColor: "rgba(255, 79, 0, 0.2)",
              backgroundColor: "rgba(255, 79, 0, 0.02)"
            }}
            className="p-3 sm:p-5 bg-off-white rounded-xl border border-sand shadow-sm transition-all cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-warm-gray uppercase font-bold tracking-wider">Efficiency Gain</p>
              <Zap className="h-3 w-3 text-primary" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-xl sm:text-2xl font-bold text-zapier-black">+42%</span>
              <span className="text-green-600 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded">Weekly</span>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ 
              y: -8,
              borderColor: "rgba(255, 79, 0, 0.2)",
              backgroundColor: "rgba(255, 79, 0, 0.02)"
            }}
            className="p-3 sm:p-5 bg-off-white rounded-xl border border-sand shadow-sm transition-all cursor-default"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-warm-gray uppercase font-bold tracking-wider">Active Deals</p>
              <TrendingUp className="h-3 w-3 text-green-500" />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-xl sm:text-2xl font-bold text-zapier-black">84</span>
              <span className="text-green-600 text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded">Growth</span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] text-warm-gray uppercase font-bold tracking-widest mb-2">Operational Clarity</p>
          {[
            { name: "Sharma Exports", status: "Follow-up Sent", color: "bg-green-100" },
            { name: "Patel Textiles", status: "Proposal Ready", color: "bg-blue-100" },
            { name: "Verma Logistics", status: "New Inquiry", color: "bg-orange-100" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5, backgroundColor: "rgba(255, 79, 0, 0.02)" }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center justify-between p-3 sm:p-4 bg-white border border-sand rounded-xl shadow-sm hover:border-primary/20 transition-all cursor-pointer gap-3"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-light-sand flex items-center justify-center font-bold text-primary"
                >
                  {item.name[0]}
                </motion.div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-zapier-black mb-0.5 truncate">{item.name}</p>
                  <p className="text-[10px] text-warm-gray font-medium">Updated just now</p>
                </div>
              </div>
              <div className={`shrink-0 px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold ${item.color} text-zapier-black/70 whitespace-nowrap`}>
                {item.status}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 z-30 bg-zapier-black text-white p-5 rounded-2xl shadow-2xl border border-charcoal hidden sm:block"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-sand/60 mb-1">WhatsApp Automation</p>
            <p className="text-sm font-medium">Follow-up sent to Sharma ji</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-10 -left-10 z-30 bg-white p-5 rounded-2xl shadow-2xl border border-sand hidden sm:block"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-warm-gray mb-1">Built for Bharat</p>
            <p className="text-sm font-bold text-zapier-black">Local Market Ready</p>
          </div>
        </div>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute top-1/2 -right-12 z-30 bg-primary text-white p-4 rounded-2xl rounded-bl-none shadow-xl border border-primary/20 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="h-5 w-5" />
          <p className="text-xs font-bold">New message from Arjun</p>
        </div>
      </motion.div>

      {/* Notification Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-20 left-10 z-30 bg-white p-3 rounded-xl shadow-lg border border-sand hidden lg:block"
      >
        <div className="relative">
          <Bell className="h-5 w-5 text-warm-gray" />
          <AnimatePresence mode="wait">
            <motion.span
              key={notificationCount}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
            >
              {notificationCount}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Cursor Animation */}
      <motion.div
        animate={{ 
          x: [150, -100, 150],
          y: [250, 100, 250]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-40 pointer-events-none"
      >
        <MousePointer2 className="h-6 w-6 text-primary fill-primary drop-shadow-lg" />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
          className="absolute top-0 left-0 w-8 h-8 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] border border-sand/40 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[460px] h-[460px] sm:w-[650px] sm:h-[650px] border border-sand/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] border border-sand/10 rounded-full"
        />
      </div>
    </div>
  );
}
