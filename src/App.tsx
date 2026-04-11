/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouterProvider, useRouter, Link } from "./lib/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-28 pb-16 md:pt-40 md:pb-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 md:mb-6">
          404
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-zapier-black leading-[1] mb-6 md:mb-8">
          Page not{" "}
          <span className="text-primary font-editorial italic font-light">found.</span>
        </h1>
        <p className="text-base md:text-lg text-charcoal max-w-xl mx-auto mb-8 md:mb-10">
          The page you were looking for does not exist. Let's get you back home.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold h-auto">
            Back to home
          </Button>
        </Link>
      </div>
    </section>
  );
}

function Pages() {
  const { path } = useRouter();

  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/careers":
      return <Careers />;
    case "/contact":
      return <Contact />;
    default:
      return <NotFound />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-background selection:bg-primary selection:text-white overflow-x-hidden">
        <Navbar />

        <main>
          <Pages />
        </main>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
        >
          <Link to="/contact">
            <Button className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-white shadow-2xl hover:scale-110 transition-transform p-0 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </Link>
        </motion.div>

        <Footer />
      </div>
    </RouterProvider>
  );
}
