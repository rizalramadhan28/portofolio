"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { personalData } from "@/lib/data";
import LiquidEther from "./LiquidEther";
import ErrorBoundary from "./ErrorBoundary";
import SplitText from "./SplitText";
import TextType from "./TextType";

const LIQUID_COLORS = ["#5227FF", "#FF9FFC", "#B497CF"] as const;
const ROLE_TEXTS = ["Fullstack Developer", "Networking Enthusiast", "Web Developer"] as const;
const SPLIT_FROM = { opacity: 0, y: 50, rotateX: -90 } as const;
const SPLIT_TO = { opacity: 1, y: 0, rotateX: 0 } as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ErrorBoundary>
        <div className="absolute inset-0 pointer-events-none">
          <LiquidEther
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            colors={LIQUID_COLORS}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            isBounce={false}
            resolution={0.5}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
      </ErrorBoundary>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium mb-4 text-sm md:text-base tracking-wider uppercase">
            Hello, I&apos;m
          </p>

          <div style={{ fontFamily: "var(--font-playfair), serif", color: "#1A1A1A" }}>
            <SplitText
              text={personalData.name}
              tag="h1"
              className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight mb-6"
              delay={80}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={SPLIT_FROM}
              to={SPLIT_TO}
              threshold={0.1}
              rootMargin="-50px"
              textAlign="center"
            />
          </div>

          <div className="relative inline-block">
            <TextType
              text={ROLE_TEXTS}
              as="h2"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent mb-6"
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={40}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.5}
              loop={true}
              startOnVisible={true}
            />
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent/50 rounded-full" />
          </div>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mt-8 mb-10 leading-relaxed">
            {personalData.heroTagline}
          </p>

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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
