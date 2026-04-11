/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Rocket,
  BarChart3,
  Database,
  ShieldCheck,
} from "lucide-react";
import ProductShowcase from "../components/ProductShowcase";
import Marquee from "../components/Marquee";
import HeroVisual from "../components/HeroVisual";
import { Link } from "../lib/router";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 border-b border-sand overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-light-sand border border-sand mb-6 sm:mb-8 max-w-full"
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                <span className="text-[11px] sm:text-sm font-bold tracking-tight uppercase leading-tight">
                  Building the Future of Indian Business Software
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="display-hero-xl mb-6 sm:mb-8"
              >
                We build software that works the way your{" "}
                <span className="text-primary italic">business</span> does.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="body-large text-charcoal mb-8 sm:mb-12 max-w-xl"
              >
                AQIROX creates intelligent SaaS platforms for Indian businesses.
                Affordable. Deeply practical. Built from the ground up for the way Indian
                professionals actually operate — not adapted from something that was never
                meant for them.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Link to="/about">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto group shadow-lg hover:shadow-primary/20 transition-all">
                      See our products
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto"
                >
                  <Link to="/about">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-zapier-black text-zapier-black hover:bg-sand/20 rounded-sm px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto transition-all"
                    >
                      Learn about AQIROX
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 sm:mt-12 flex items-center gap-6 sm:gap-8 border-t border-sand pt-6 sm:pt-8"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                  <p className="text-xl sm:text-2xl font-bold text-zapier-black">500+</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-warm-gray">
                    Active Users
                  </p>
                </motion.div>
                <div className="w-px h-8 bg-sand" />
                <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                  <p className="text-xl sm:text-2xl font-bold text-zapier-black">4.9/5</p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-warm-gray">
                    User Rating
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-sand/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Decorative Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.2, 0],
                y: [-20, -100],
                x: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 40}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* The One Statement */}
      <section className="py-20 md:py-32 bg-zapier-black text-cream border-b border-sand relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-12"
          >
            The One Statement
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-editorial font-light leading-[1.15] text-white max-w-5xl tracking-tight">
            "Most software was designed for businesses in San Francisco. We design for
            businesses in{" "}
            <span className="text-primary italic">Bengaluru, Lucknow, Surat, Jaipur</span>{" "}
            — and every city in between."
          </h2>
        </div>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -right-40 -bottom-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      </section>

      {/* Marquee Section */}
      <Marquee />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Who We Are - Editorial Moment */}
      <section className="py-20 md:py-32 border-b border-sand bg-off-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8"
            >
              What We Do
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-7xl font-editorial font-light leading-[1.15] text-zapier-black mb-8 md:mb-12 tracking-tight">
              {"We find the problems nobody has solved. Then we build the solution."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg sm:text-2xl text-charcoal/80 max-w-3xl leading-relaxed mb-10 md:mb-12 font-medium"
            >
              Every product at AQIROX starts with a single question — what is the one
              problem a specific Indian business owner faces every single day that nobody
              has properly solved yet? We do not guess. We talk to the people who live
              with the problem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <div className="h-px w-12 bg-primary" />
              <p className="font-editorial italic text-primary text-base sm:text-lg">
                "That is our process. For every product we will ever make."
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light-sand/20 to-transparent -skew-x-12 translate-x-1/4" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </section>

      {/* Our Products - KROVA and GYMNSETU */}
      <section id="products" className="py-20 md:py-32 border-b border-sand bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                Our Products
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[1.1]">
                Two products.{" "}
                <span className="text-primary font-editorial italic font-light">
                  Two real problems.
                </span>{" "}
                Solved properly.
              </h2>
            </div>
            <p className="text-charcoal/60 max-w-xs text-sm leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
              Each product represents months of research and hundreds of conversations
              with real business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* KROVA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="bg-zapier-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-cream relative overflow-hidden group border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 md:mb-10">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    AI Business Intelligence
                  </p>
                </div>
                <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter leading-[1] text-white">
                  KROVA
                </h3>
                <p className="text-lg sm:text-xl text-sand/70 leading-relaxed mb-6 sm:mb-8 font-medium">
                  An always-on AI brain for Indian professional service businesses.
                </p>
                <p className="text-sm sm:text-base text-sand/50 leading-relaxed mb-8 sm:mb-10">
                  KROVA watches your WhatsApp, Instagram, and email — understands every
                  customer relationship — and acts automatically, every day, before you
                  have to ask.
                </p>
                <div className="mb-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-sand/40 mb-3">
                    Built for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Agencies", "Freelancers", "Coaches", "Recruiters", "CA firms"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-sand/80"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/link"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000" />
            </motion.div>

            {/* GYMNSETU Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-sand shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 md:mb-10">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    Gym Management Platform
                  </p>
                </div>
                <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter leading-[1] text-zapier-black">
                  GYMN<span className="text-primary">SETU</span>
                </h3>
                <p className="text-lg sm:text-xl text-charcoal leading-relaxed mb-6 sm:mb-8 font-medium">
                  Complete gym management for independent gym owners in India.
                </p>
                <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-8 sm:mb-10">
                  Memberships, attendance, fee collections, and member communication — all
                  in one platform built specifically for how Indian gyms work. Less
                  administration. More time doing what you actually love.
                </p>
                <div className="mb-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-warm-gray mb-3">
                    Built for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Gyms", "Fitness studios", "Yoga centers", "Training studios"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-light-sand border border-sand text-xs font-medium text-charcoal"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/link"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="absolute -right-24 -bottom-24 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-all duration-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="what-we-do" className="py-20 md:py-32 border-b border-sand bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-24 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
              >
                The AQIROX Way
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zapier-black leading-[1.1]">
                Why we build the way <br />
                <span className="text-primary font-editorial italic font-light">
                  we build.
                </span>
              </h2>
            </div>
            <p className="text-charcoal/60 max-w-xs text-sm leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
              We build the digital infrastructure that allows small businesses to compete
              at an enterprise scale without the enterprise complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:auto-rows-[320px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="md:col-span-8 md:row-span-2 bg-zapier-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-cream relative overflow-hidden group border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,78,0,0.3)] group-hover:rotate-[15deg] transition-transform duration-700 shrink-0">
                    <Zap className="h-6 w-6 md:h-9 md:w-9 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary">
                        India First
                      </p>
                    </div>
                    <h4 className="text-white font-bold text-base md:text-lg tracking-tight">
                      The Foundation
                    </h4>
                  </div>
                </div>

                <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-10 tracking-tighter leading-[1] text-white">
                  Built for <br />
                  <span className="text-primary font-editorial italic font-light">
                    India.
                  </span>
                </h3>

                <p className="text-base sm:text-lg md:text-2xl text-sand/60 max-w-lg leading-relaxed mb-10 md:mb-16 font-medium">
                  Not adapted from a Western product. Built from scratch for the language,
                  the price point, the channels, the culture of how business actually
                  happens here.
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-10">
                  <div className="flex items-center gap-6">
                    <p className="text-sand/30 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                      WhatsApp is the foundation — not a workaround.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
                <div className="absolute top-12 right-12 w-[500px] h-[500px] border border-white/5 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                  <div className="w-[400px] h-[400px] border border-dashed border-white/10 rounded-full animate-spin-slow" />
                  <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-reverse-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-45" />
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -rotate-45" />
                  </div>
                </div>
              </div>

              <div className="absolute -right-40 -bottom-40 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary/10 rounded-full blur-[120px] md:blur-[160px] group-hover:bg-primary/20 transition-all duration-1000" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="md:col-span-4 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-sand group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <Layers className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    Invisible
                  </p>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-zapier-black tracking-tighter leading-tight">
                  Simple <br />
                  Outside.
                </h3>
                <p className="text-charcoal/50 text-lg leading-relaxed font-medium">
                  The best software feels effortless. Complexity lives in our architecture
                  — not in your workflow.
                </p>
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between relative z-10">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-4 bg-primary/10 rounded-full group-hover:bg-primary/30 transition-colors"
                      style={{ height: `${8 + i * 4}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Database className="w-48 h-48" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="md:col-span-4 bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-sand group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 md:mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <Shield className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    Loyalty
                  </p>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-zapier-black tracking-tighter leading-tight">
                  Earn every <br />
                  renewal.
                </h3>
                <p className="text-charcoal/50 text-lg leading-relaxed font-medium">
                  No contracts that trap you. Every product earns its renewal by being
                  genuinely indispensable.
                </p>
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between relative z-10">
                <div className="px-3 py-1 rounded-full bg-green-50 text-[10px] font-bold text-green-600 uppercase tracking-wider border border-green-100">
                  No lock-in
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <ShieldCheck className="w-48 h-48" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="md:col-span-4 bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden group flex flex-col shadow-[0_32px_64px_-16px_rgba(255,78,0,0.2)]"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 md:mb-10 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                  <Sparkles className="h-7 w-7" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                    Intelligent
                  </p>
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tighter leading-tight">
                  Underneath, <br />
                  not over.
                </h3>
                <p className="text-white/70 text-lg leading-relaxed font-medium">
                  We do the hard engineering so our customers never have to think about
                  it.
                </p>
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  Crafted Quietly
                </div>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-1000">
                <BarChart3 className="h-64 w-64" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* From the Founders */}
      <section className="py-20 md:py-32 border-b border-sand bg-zapier-black text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-6 md:mb-8">
                  From the Founders
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 md:mb-10 tracking-tighter leading-[1]">
                  A word <br />
                  <span className="text-primary font-editorial italic font-light">
                    from us.
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-sand/70 leading-relaxed mb-8 max-w-xl font-medium">
                  We started AQIROX after watching too many brilliant, hardworking Indian
                  business owners lose to problems that better software could have
                  prevented.
                </p>
                <p className="text-sm sm:text-base text-sand/50 leading-relaxed mb-8 md:mb-12 max-w-xl">
                  Leads lost because nobody followed up in time. Clients lost because
                  nobody noticed they were going quiet. Revenue left on the table because
                  there was no system watching the gaps between the hustle.
                </p>
                <p className="text-sm sm:text-base text-sand/50 leading-relaxed mb-8 md:mb-12 max-w-xl">
                  So we decided to build our own. Not to compete with global software
                  giants. But to fill the gap they cannot see from where they sit.
                </p>
                <p className="text-sand/60 text-sm font-bold uppercase tracking-[0.3em]">
                  — The AQIROX Team
                </p>
              </div>
              <div className="absolute -right-20 -top-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <Rocket className="w-96 h-96" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-primary text-white relative overflow-hidden group flex-1 flex flex-col justify-center shadow-2xl shadow-primary/20">
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 md:mb-10">
                    <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-editorial italic mb-8 md:mb-10 leading-tight">
                    "Every product AQIROX ships starts with a real conversation with a
                    real business owner about a real problem."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 border border-white/20" />
                    <div>
                      <p className="font-bold text-white">Nikhil Srivastav</p>
                      <p className="text-sm text-white/60">Founder, AQIROX</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>

              <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center group">
                <h4 className="text-white font-bold text-xl sm:text-2xl mb-3 sm:mb-4 tracking-tight">
                  That is our promise.
                </h4>
                <p className="text-sand/50 leading-relaxed font-medium">
                  Every line. Every feature. Every release. Anchored to something real.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-16 md:py-24 border-b border-sand">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="mb-10 md:mb-16">
            <h2 className="section-heading mb-6">Our Approach</h2>
            <p className="body-large text-charcoal max-w-2xl">
              AQIROX takes a problem-first approach. We begin by identifying a specific,
              recurring challenge faced by a specific type of business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 md:p-10 border border-sand rounded-lg bg-background shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Built for India</h3>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                We do not adapt global products for India. We build from the ground up for
                the Indian market.
              </p>
              <ul className="space-y-4">
                {[
                  "Clarity over complexity",
                  "Usability over feature overload",
                  "Intelligence in the background",
                  "Natural integration",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 md:p-10 border border-sand rounded-lg bg-light-sand shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Problem-Driven</h3>
              <p className="text-lg text-charcoal leading-relaxed">
                We study problems in depth, understand how they impact daily operations,
                and design solutions that directly address them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 border-b border-sand bg-off-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeIn} className="section-heading text-center mb-10 md:mb-16">
            What Makes AQIROX Different
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Built for India from Day One",
                desc: "Our products are designed specifically for Indian businesses — their workflows, communication channels, and operational realities.",
              },
              {
                title: "Simple on the Surface, Intelligent Underneath",
                desc: "We ensure that the user experience remains clean and effortless, while the complexity is handled within the system.",
              },
              {
                title: "Problem-Driven Development",
                desc: "Every feature we build originates from a real business problem, not assumptions.",
              },
              {
                title: "Practical and Accessible Technology",
                desc: "We aim to make advanced software accessible to businesses of all sizes, not just large enterprises.",
              },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn}>
                <Card className="h-full border-sand bg-background rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 md:p-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-base md:text-lg text-charcoal leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Strip */}
      <section className="py-16 md:py-24 border-b border-sand">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="section-heading mb-6 md:mb-8">
              Building something that matters — for people who deserve better tools.
            </h2>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 md:p-12 border border-sand bg-light-sand rounded-lg shadow-xl"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-zapier-black mb-6 md:mb-8 leading-snug">
                "AQIROX is not just building software. We are building systems that
                support businesses in doing what they do best — growing, serving
                customers, and creating value."
              </p>
              <Link to="/about">
                <Button className="bg-zapier-black hover:bg-charcoal text-white rounded-sm px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-xl font-semibold h-auto">
                  Meet the Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
