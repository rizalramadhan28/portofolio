"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { personalData } from "@/lib/data";
import LiquidEther from "./LiquidEther";
import ErrorBoundary from "./ErrorBoundary";
import SplitText from "./SplitText";
import TypingEffect from "./TypingEffect";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ErrorBoundary>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
            <LiquidEther
              mouseForce={20}
              cursorSize={100}
              isViscous
              viscous={30}
              colors={["#5227FF","#FF9FFC","#B497CF"]}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              isBounce={false}
              resolution={0.5}
            />
          </div>
        </div>
      </ErrorBoundary>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4 text-sm md:text-base tracking-wider uppercase"
          >
            Hello, I&apos;m
          </motion.p>

          <SplitText
            text={personalData.name}
            tag="h1"
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
            delay={80}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />

          <div className="relative inline-block min-h-[3rem] md:min-h-[4rem]">
            <TypingEffect
              texts={[
                personalData.title,
                "Web Developer",
                "Mobile Developer",
                "Full Stack Developer",
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2000}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted text-base sm:text-lg max-w-xl mx-auto mt-8 mb-10 leading-relaxed"
          >
            {personalData.heroTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
            >
              <Mail size={18} />
              Get In Touch
            </motion.a>
            <motion.a
              href={personalData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <FileDown size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
