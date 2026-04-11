import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Eye,
  Lock,
  Gauge,
  MessageCircleQuestion,
  Target,
  Flag,
  Layers,
} from "lucide-react";
import { Link } from "../lib/router";

const principles = [
  {
    num: "01",
    title: "The Problem Comes First",
    icon: Target,
    body: "We never start with what we want to build. We start with the problem. A specific problem. Felt by a specific person. Every single day. If there is no real pain behind a feature — the feature does not get built. Full stop.",
  },
  {
    num: "02",
    title: "India Is Not a Market. It Is Our World.",
    icon: Flag,
    body: "We do not treat India as a market to enter or a region to adapt products for. We are Indian. We build for India. WhatsApp is not a channel we support — it is the foundation we build on.",
  },
  {
    num: "03",
    title: "Invisible Complexity",
    icon: Layers,
    body: "Our products should feel effortless to use. The intelligence, the engineering, the infrastructure — all of it happens underneath, invisibly, silently. The owner taps once. Everything else is our problem to solve.",
  },
  {
    num: "04",
    title: "Earn Loyalty. Not Dependency.",
    icon: Heart,
    body: "We have no interest in trapping customers. Every product we build has to earn its renewal every single month by being so genuinely useful that paying for it feels obvious — not obligatory.",
  },
  {
    num: "05",
    title: "Scale Is Not an Afterthought",
    icon: Gauge,
    body: "Every product we ship is architected to handle a hundred thousand businesses from day one. Scale is a design decision. We make it early. Every time. Without exception.",
  },
  {
    num: "06",
    title: "Honesty Is a Feature",
    icon: Eye,
    body: "We tell our customers when something is not ready. We tell them when we are uncertain. In a market full of overpromising and underdelivering, honesty is genuine differentiation.",
  },
];

export default function About() {
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
            <span className="text-[11px] sm:text-sm font-bold tracking-tight uppercase">Who We Are</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zapier-black leading-[0.95] max-w-5xl mb-8 md:mb-12"
          >
            We are not just building software. We are building{" "}
            <span className="text-primary font-editorial italic font-light">
              unfair advantages
            </span>{" "}
            for Indian businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-charcoal max-w-2xl mb-8 md:mb-12"
          >
            AQIROX is a SaaS company on a specific mission — to give Indian small and
            medium businesses access to the kind of intelligent, deeply practical software
            that was previously only available to companies with enterprise-level budgets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
          >
            <Link to="/careers">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto group shadow-lg hover:shadow-primary/20 transition-all">
                See open roles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-zapier-black text-zapier-black hover:bg-sand/20 rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto transition-all"
              >
                Get in touch
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating background elements */}
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

      {/* Origin */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                The Origin
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-editorial font-light text-zapier-black leading-[1.05] tracking-tight">
                Where <br />
                AQIROX <br />
                <span className="text-primary italic">came from.</span>
              </h2>
              <div className="mt-8 md:mt-12 flex items-center gap-6">
                <div className="h-px w-12 bg-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  A frustration
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 md:space-y-8 text-base md:text-lg text-charcoal leading-relaxed"
            >
              <p>Every company begins with a frustration that would not go away.</p>
              <p>
                Ours began with a simple observation that kept repeating itself — across
                cities, across industries, across every type of Indian professional
                service business we encountered.
              </p>
              <p className="text-zapier-black font-medium">
                Indian small business owners were working harder than anyone. 14-hour
                days. No weekends. Complete dedication to their craft.
              </p>
              <p>
                And yet a significant portion of their effort was silently disappearing
                into invisible gaps. Leads that fell through. Clients that drifted away
                unnoticed. Revenue that could have been captured but was not — because
                nobody was watching.
              </p>
              <p>
                The tools they had access to were either built for American businesses and
                awkwardly fitted for India, or so expensive that a small agency could
                never justify the cost, or so complex that using them properly required
                skills and time that nobody had.
              </p>
              <p className="text-zapier-black font-medium italic">
                We asked ourselves: what would software look like if it was designed from
                day one, from the ground up, specifically for the way Indian professional
                service businesses actually operate?
              </p>
              <p className="text-primary font-bold text-lg md:text-xl">The answer became AQIROX.</p>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-light-sand/30 to-transparent -skew-x-12 translate-x-1/4" />
      </section>

      {/* Our Name */}
      <section className="py-20 md:py-32 border-b border-sand bg-zapier-black text-cream relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8"
            >
              Our Name
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-8xl font-editorial font-light text-white leading-[1.05] tracking-tight mb-10 md:mb-16"
            >
              What <span className="text-primary italic">AQIROX</span> means.
            </motion.h2>

            <div className="space-y-6 md:space-y-8 text-base md:text-xl text-sand/70 leading-relaxed font-medium max-w-3xl">
              <p>Names carry the weight of everything that comes after them.</p>
              <p>
                AQIROX is an invented word — completely original, completely ownable, free
                from any preconception or prior association.
              </p>
              <p>
                It carries no baggage. No limitations inherited from anything that came
                before. Just a clean canvas onto which we build meaning through every
                product we ship.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-16 p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden max-w-3xl"
            >
              <div className="relative z-10">
                <p className="text-xl sm:text-2xl md:text-4xl font-editorial italic text-white leading-snug md:leading-tight mb-4 md:mb-6">
                  "The company that finally built something that worked for me."
                </p>
                <p className="text-sand/50 text-sm">
                  — What AQIROX will mean, one business at a time.
                </p>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      {/* What We Believe - Principles Grid */}
      <section className="py-20 md:py-32 border-b border-sand bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                What We Believe
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[1.05]">
                The principles behind <br />
                <span className="text-primary font-editorial italic font-light">
                  every decision
                </span>{" "}
                we make.
              </h2>
            </div>
            <p className="text-charcoal/60 max-w-xs text-sm leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
              Six commitments that shape what AQIROX ships — and what it refuses to ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-sand bg-background hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <p.icon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <span className="font-editorial text-5xl md:text-6xl text-primary/20 group-hover:text-primary/40 transition-colors font-light">
                      {p.num}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zapier-black tracking-tighter leading-tight mb-4 md:mb-6">
                    {p.title}
                  </h3>
                  <p className="text-charcoal leading-relaxed text-sm md:text-base">{p.body}</p>
                </div>
                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Products */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              The Products
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[1.05] mb-6 md:mb-8">
              What we have <span className="text-primary font-editorial italic font-light">built.</span>
            </h2>
            <p className="text-base md:text-xl text-charcoal/70 leading-relaxed">
              AQIROX currently has two products in market. Each one represents months of
              research, hundreds of conversations with real business owners, and an
              uncompromising commitment to solving one specific problem better than it
              has ever been solved before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="bg-zapier-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-cream relative overflow-hidden group border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]"
            >
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 md:mb-6">
                  AI Business Intelligence
                </p>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter text-white">
                  KROVA
                </h3>
                <p className="text-base md:text-lg text-sand/70 leading-relaxed mb-6 md:mb-8">
                  For the professional service business owner who is losing leads and
                  clients silently because they have no intelligent system watching
                  their business while they are busy running it.
                </p>
                <p className="text-sm md:text-base text-sand/50 leading-relaxed mb-8 md:mb-10">
                  KROVA is an AI brain that connects to WhatsApp, Instagram, and email —
                  watches every customer relationship — detects what needs attention — and
                  acts automatically, without the owner having to prompt it.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/link"
                >
                  Visit KROVA
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-sand shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 md:mb-6">
                  Gym Management Platform
                </p>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter text-zapier-black">
                  GYMN<span className="text-primary">SETU</span>
                </h3>
                <p className="text-base md:text-lg text-charcoal leading-relaxed mb-6 md:mb-8">
                  For the independent gym owner spending hours every week on fee
                  reminders, attendance registers, and membership tracking that should
                  be handled by software.
                </p>
                <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-8 md:mb-10">
                  GYMNSETU brings memberships, attendance, payments, and member
                  communication into one clean platform — designed specifically for how
                  Indian gyms operate.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/link"
                >
                  Visit GYMNSETU
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -right-24 -bottom-24 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-1000" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-16 text-lg sm:text-xl md:text-2xl font-editorial italic text-charcoal/80 text-center max-w-3xl mx-auto leading-snug"
          >
            "These are the first two. They will not be the last. Every new product we
            build will answer the same question — what is the problem in this market that
            nobody has solved properly?"
          </motion.p>
        </div>
      </section>

      {/* The Promise */}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-10">
              <Lock className="h-3 w-3" />
              The Promise
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-[1] tracking-tighter mb-8 md:mb-12">
              Our promise to every business <br />
              that uses{" "}
              <span className="text-primary font-editorial italic font-light">
                AQIROX.
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-sand/70 leading-relaxed mb-6 md:mb-8 font-medium max-w-3xl">
              We will build software that is so genuinely useful — so specific to your
              real daily problems — and so deeply intelligent about your business — that
              the idea of going back to how you worked before feels genuinely
              uncomfortable.
            </p>
            <p className="text-base md:text-xl text-sand/60 leading-relaxed mb-10 md:mb-16 max-w-3xl">
              That is the bar we hold every product to. That is what the AQIROX name
              means.
            </p>

            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold h-auto group shadow-lg shadow-primary/20">
                Talk to us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Careers teaser */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 lg:p-20 rounded-[2rem] md:rounded-[3rem] border border-sand bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden"
          >
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8">
                <MessageCircleQuestion className="h-3 w-3" />
                Careers
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zapier-black leading-[1.05] tracking-tighter mb-6 md:mb-8">
                Come build with us.
              </h2>
              <p className="text-base md:text-xl text-charcoal leading-relaxed mb-8 md:mb-10">
                We are a small team building software that will be used by millions of
                Indian business owners. If solving hard problems for real people in the
                real world sounds like the kind of work that gets you out of bed — we
                would like to meet you.
              </p>
              <Link to="/careers">
                <Button className="bg-zapier-black hover:bg-charcoal text-white rounded-sm px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold h-auto group">
                  See open roles
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
