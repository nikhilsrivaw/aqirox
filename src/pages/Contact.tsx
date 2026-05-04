import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Mail,
  LifeBuoy,
  Handshake,
  Briefcase,
  Megaphone,
  CheckCircle2,
  Send,
  Building2,
  MapPin,
} from "lucide-react";

const reasons = [
  "Business owner",
  "Partner",
  "Journalist",
  "Job applicant",
  "Other",
];

const contactChannels = [
  {
    icon: Mail,
    label: "General enquiries",
    email: "hello@aqirox.com",
    note: "We read every message.",
  },
  {
    icon: LifeBuoy,
    label: "Product support",
    email: "support@aqirox.com",
    note: "For KROVA and GYMNSETU users. Typical response time: 4 business hours.",
  },
  {
    icon: Handshake,
    label: "Partnerships",
    email: "partnerships@aqirox.com",
    note: "For business proposals and collaborations.",
  },
  {
    icon: Briefcase,
    label: "Careers",
    email: "careers@aqirox.com",
    note: "Include your portfolio and a short note.",
  },
  {
    icon: Megaphone,
    label: "Press and media",
    email: "press@aqirox.com",
    note: "For interviews, features, and coverage.",
  },
];

export default function Contact() {
  const [reason, setReason] = useState(reasons[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-52 lg:pb-32 border-b border-sand overflow-hidden bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-light-sand border border-sand mb-6 md:mb-10"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-[11px] sm:text-sm font-bold tracking-tight uppercase">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zapier-black leading-[0.9] mb-8 md:mb-12"
          >
            Let us <span className="text-primary font-editorial italic font-light">talk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-charcoal max-w-2xl"
          >
            Whether you are a business owner with a question, a potential partner with a
            proposal, a journalist working on a story, or someone curious about what we
            are building — we read every message. We respond to every one.
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-sand/20 rounded-full blur-3xl pointer-events-none"
        />
      </section>

      {/* Form + Channels */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="p-6 sm:p-8 md:p-14 rounded-[1.5rem] md:rounded-[3rem] bg-white border border-sand shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Contact Form
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zapier-black tracking-tighter leading-tight mb-2">
                    Send us a message.
                  </h2>
                  <p className="text-sm md:text-base text-charcoal mb-8 md:mb-10">
                    We typically respond within one business day.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 md:p-10 rounded-2xl bg-light-sand border border-primary/20 text-center"
                    >
                      <CheckCircle2 className="h-12 w-12 md:h-14 md:w-14 text-primary mx-auto mb-4 md:mb-6" />
                      <h3 className="text-xl md:text-2xl font-bold text-zapier-black mb-2 md:mb-3">
                        Message sent.
                      </h3>
                      <p className="text-sm md:text-base text-charcoal">
                        Thank you for reaching out. A real person will read this and
                        write back soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                            Full name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            className="w-full px-5 py-4 rounded-sm border border-sand bg-background text-zapier-black placeholder:text-warm-gray/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                            Email address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="w-full px-5 py-4 rounded-sm border border-sand bg-background text-zapier-black placeholder:text-warm-gray/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                          Phone number (optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-5 py-4 rounded-sm border border-sand bg-background text-zapier-black placeholder:text-warm-gray/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-3">
                          I am reaching out as
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {reasons.map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setReason(r)}
                              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                                reason === r
                                  ? "bg-zapier-black text-white shadow-lg"
                                  : "bg-light-sand text-charcoal hover:bg-sand/30"
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="What is this about?"
                          className="w-full px-5 py-4 rounded-sm border border-sand bg-background text-zapier-black placeholder:text-warm-gray/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={6}
                          placeholder="Tell us what's on your mind..."
                          className="w-full px-5 py-4 rounded-sm border border-sand bg-background text-zapier-black placeholder:text-warm-gray/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-white rounded-sm px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold h-auto group shadow-lg shadow-primary/20"
                        >
                          <Send className="mr-2 h-5 w-5" />
                          Send message
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>

                      <p className="text-xs text-warm-gray text-center">
                        We typically respond within one business day.
                      </p>
                    </form>
                  )}
                </div>
                <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </motion.div>

            {/* Contact Channels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  Other Ways
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zapier-black tracking-tighter leading-tight">
                  Reach the right person,{" "}
                  <span className="text-primary font-editorial italic font-light">
                    directly.
                  </span>
                </h3>
              </div>

              {contactChannels.map((channel, i) => (
                <motion.a
                  key={channel.email}
                  href={`mailto:${channel.email}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="block p-6 rounded-2xl bg-white border border-sand hover:border-primary/30 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <channel.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-1">
                        {channel.label}
                      </p>
                      <p className="text-base font-bold text-zapier-black group-hover:text-primary transition-colors mb-1 break-all">
                        {channel.email}
                      </p>
                      <p className="text-xs text-charcoal/70 leading-relaxed">
                        {channel.note}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registered Office */}
      <section className="py-16 md:py-24 border-b border-sand bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Building2 className="h-3 w-3" />
              Registered Office
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-zapier-black leading-[1.05]">
              Our company,{" "}
              <span className="text-primary font-editorial italic font-light">
                on record.
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-sand shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                    Legal Entity
                  </p>
                  <p className="text-base md:text-lg font-bold text-zapier-black leading-snug mb-1">
                    Aqirox Technology Private Limited
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Operating brand:{" "}
                    <span className="font-semibold text-zapier-black">AQIROX</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white border border-sand shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                    Registered Address
                  </p>
                  <p className="text-sm md:text-base text-zapier-black leading-relaxed">
                    Shivje Nagar, Muhisudharpur, Shivpurinewcolony,
                    <br />
                    Gorakhpur Sadar, Gorakhpur - 273016,
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white border border-sand shadow-sm md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-2">
                    Official Email
                  </p>
                  <a
                    href="mailto:aqiroxtechnologies@gmail.com"
                    className="text-base md:text-lg font-bold text-zapier-black hover:text-primary transition-colors break-all"
                  >
                    aqiroxtechnologies@gmail.com
                  </a>
                  <p className="text-xs text-charcoal/70 leading-relaxed mt-2">
                    Use this address for official correspondence, grievance
                    queries, and verification requests.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-32 border-b border-sand bg-zapier-black text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-editorial font-light text-white leading-[1.05] tracking-tight mb-8 md:mb-12">
              A <span className="text-primary italic">real person</span> reads <br />
              every message.
            </h2>
            <p className="text-base md:text-xl text-sand/70 leading-relaxed mb-6 md:mb-8 max-w-2xl">
              We are a small team building real products for real businesses. When you
              write to us — a real person reads your message and a real person writes
              back.
            </p>
            <p className="text-base md:text-xl text-sand/70 leading-relaxed mb-10 md:mb-16 max-w-2xl">
              We look forward to hearing from you.
            </p>

            <p className="text-sand/50 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
              — The AQIROX Team
            </p>
          </motion.div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>
    </>
  );
}
