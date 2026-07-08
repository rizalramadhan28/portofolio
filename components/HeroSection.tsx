"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { personalData } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-30 opacity-[0.15]" />

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-medium mb-4 text-sm md:text-base tracking-wider uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              {personalData.name}
            </h1>
            <div className="relative inline-block">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent mb-6">
                {personalData.title}
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent/50 rounded-full" />
            </div>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mt-8 mb-10 leading-relaxed">
              {personalData.heroTagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25"
            >
              <Mail size={18} />
              Get In Touch
            </a>
            <a
              href={personalData.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-card-border text-foreground rounded-full font-medium hover:border-accent hover:text-accent transition-all duration-300"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
