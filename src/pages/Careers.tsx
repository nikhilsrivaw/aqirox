import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Brain,
  Palette,
  MapPin,
  Clock,
  Mail,
  Users,
  Hammer,
  Flag,
} from "lucide-react";
import { Link } from "../lib/router";

const whyPoints = [
  {
    title: "Real Problems. Real People.",
    icon: Users,
    body: "Every line of code you write, every interface you design, every system you architect gets used by a gym owner in Pune, a freelance consultant in Hyderabad, or a coaching business owner in Lucknow. The feedback loop is short. The impact is visible.",
  },
  {
    title: "Small Team. Real Ownership.",
    icon: Hammer,
    body: "We are small intentionally. Small enough that every person has genuine ownership over significant parts of the product — not just their ticket queue. You are a co-builder whose decisions shape what AQIROX becomes.",
  },
  {
    title: "India First. Always.",
    icon: Flag,
    body: "Everything we build is for India. If you understand India — the cities, the languages, the culture of how business happens here — you will find working at AQIROX deeply resonant.",
  },
  {
    title: "Craft Matters Here.",
    icon: Sparkles,
    body: "We build production-grade software from day one. No cutting corners. No shipping something we are not proud of because a deadline was more important than the quality.",
  },
];

const roles = [
  {
    title: "Backend Engineer",
    stack: "Python / FastAPI",
    icon: Code2,
    description:
      "We are building complex AI-powered systems that handle real-time data from multiple channels simultaneously. Event-driven architecture. Queue-based processing. Systems designed to scale from 50 businesses to 500,000 without a rewrite.",
    skills: ["Python 3.11+", "FastAPI", "PostgreSQL", "Redis", "Async programming", "System design"],
    type: "Full-time",
    location: "Remote with occasional in-person",
  },
  {
    title: "Frontend Engineer",
    stack: "React / React Native",
    icon: Smartphone,
    description:
      "Two surfaces to build. A web dashboard that makes complex business data feel simple and clear. A mobile app that feels as natural as messaging a friend. If you care how things feel — not just how they work — apply.",
    skills: ["React 18 + TypeScript", "React Native + Expo", "TanStack Query", "Tailwind CSS", "Design sensibility"],
    type: "Full-time",
    location: "Remote with occasional in-person",
  },
  {
    title: "AI Engineer",
    stack: "Prompt Engineering",
    icon: Brain,
    description:
      "The intelligence layer of our products is the heart of what makes them different. We need someone who thinks deeply about structuring context for LLMs, designing prompts for reliable structured output at scale, and building systems where the AI gets smarter over time.",
    skills: ["LLM API integration", "Prompt engineering", "Python", "Structured output", "Evaluation frameworks"],
    type: "Full-time",
    location: "Remote with occasional in-person",
  },
  {
    title: "Product Designer",
    stack: "Figma / Mobile & Web",
    icon: Palette,
    description:
      "Everything we build should feel effortless — genuinely effortless, not just clean-looking. We need someone who understands Indian users deeply and can translate that into interfaces that are precise, warm, and impossible to misuse.",
    skills: ["Figma", "Mobile & web product design", "User research", "Interaction design", "Strong point of view"],
    type: "Full-time",
    location: "Remote with occasional in-person",
  },
];

const culturePoints = [
  {
    title: "We are async-first.",
    body: "We write more than we meet. We prefer clear, written thinking over endless discussions where nothing gets decided.",
  },
  {
    title: "We ship frequently.",
    body: "We iterate based on real feedback from real users — not internal assumptions about what the user probably wants.",
  },
  {
    title: "We take craft seriously.",
    body: "Sloppy code, rushed design, or untested features are not acceptable. Not because of rules — because we care about what we put our name on.",
  },
  {
    title: "We are honest with each other.",
    body: "Disagreement is welcome. The best idea wins — not the loudest voice or the most senior title.",
  },
];

export default function Careers() {
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
            <span className="text-[11px] sm:text-sm font-bold tracking-tight uppercase">Join AQIROX</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zapier-black leading-[0.95] max-w-5xl mb-8 md:mb-12"
          >
            Come build software that actually matters{" "}
            <span className="text-primary font-editorial italic font-light">
              to real people.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-charcoal max-w-2xl mb-8 md:mb-12"
          >
            We are a small, focused team building intelligent SaaS for millions of Indian
            business owners. Every role here has real ownership, real impact, and real
            problems worth solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
          >
            <a href="#open-roles">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto group shadow-lg hover:shadow-primary/20 transition-all">
                View open roles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="mailto:hello@aqirox.com">
              <Button
                variant="outline"
                className="border-zapier-black text-zapier-black hover:bg-sand/20 rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto transition-all"
              >
                Email us directly
              </Button>
            </a>
          </motion.div>
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

      {/* Why AQIROX */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                Why AQIROX
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[1.05]">
                What working here <br />
                <span className="text-primary font-editorial italic font-light">
                  actually looks like.
                </span>
              </h2>
            </div>
            <p className="text-charcoal/60 max-w-xs text-sm leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
              Not the pitch deck version. The honest version.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-sand hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <point.icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zapier-black tracking-tighter leading-tight mb-4 md:mb-6">
                    {point.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed text-base md:text-lg">{point.body}</p>
                </div>
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-20 md:py-32 border-b border-sand bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Open Roles
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[1.05]">
              Current <span className="text-primary font-editorial italic font-light">openings.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="group relative p-6 sm:p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-sand hover:border-primary/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <role.icon className="h-6 w-6 md:h-7 md:w-7" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zapier-black tracking-tighter leading-tight mb-2">
                      {role.title}
                    </h3>
                    <p className="text-primary text-sm font-bold uppercase tracking-wider">
                      {role.stack}
                    </p>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-charcoal leading-relaxed mb-6 text-base md:text-lg">
                      {role.description}
                    </p>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray mb-3">
                        Core skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-light-sand border border-sand text-xs font-medium text-charcoal"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-charcoal">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{role.type}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-charcoal">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <a href="mailto:hello@aqirox.com">
                      <Button className="w-full bg-zapier-black hover:bg-primary text-white rounded-sm px-6 py-5 text-sm font-bold uppercase tracking-wider h-auto group/btn transition-all">
                        Apply
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* No role that fits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] bg-light-sand border border-sand"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                <div className="max-w-2xl">
                  <h4 className="text-xl sm:text-2xl font-bold text-zapier-black mb-3">
                    No role that fits?
                  </h4>
                  <p className="text-charcoal leading-relaxed text-sm md:text-base">
                    We are always open to hearing from exceptional people who are
                    excited about what we are building — even when we do not have a
                    listed role that matches.
                  </p>
                </div>
                <a href="mailto:hello@aqirox.com" className="shrink-0">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold uppercase tracking-wider h-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    hello@aqirox.com
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-32 border-b border-sand bg-zapier-black text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              How We Work
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.05]">
              The culture, <br />
              <span className="text-primary font-editorial italic font-light">
                honestly.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {culturePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sand/60 leading-relaxed text-sm md:text-base">{point.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-20 text-xl sm:text-2xl md:text-4xl font-editorial italic text-white/90 leading-snug md:leading-tight max-w-4xl"
          >
            "We are building for India. Not for a pitch deck. Not for a press release.
            Every decision we make is anchored in one question — does this make the
            product better for the person using it?"
          </motion.p>
        </div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      {/* Apply */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] border border-sand bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden text-center"
          >
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zapier-black leading-[1.05] tracking-tighter mb-6 md:mb-8">
                Ready to build <br />
                <span className="text-primary font-editorial italic font-light">
                  with us?
                </span>
              </h2>
              <p className="text-base md:text-xl text-charcoal leading-relaxed mb-8 md:mb-10">
                Send your CV, portfolio, or anything else that shows us who you are and
                what you are capable of. Include a short note about what excites you
                about AQIROX. We read every application and respond to every one.
              </p>
              <a href="mailto:hello@aqirox.com">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-lg font-semibold h-auto group shadow-lg shadow-primary/20 whitespace-normal">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                  <span className="break-all">hello@aqirox.com</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
