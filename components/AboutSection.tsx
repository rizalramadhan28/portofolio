"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown, MapPin, Mail } from "lucide-react";
import { personalData } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SplitText from "./SplitText";

const stats = [
  { number: "1+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Commitment" },
];

export default function AboutSection() {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="about">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            About Me
          </p>
          <SplitText
            text="Get To Know Me"
            tag="h2"
            className="text-3xl md:text-4xl font-bold"
            delay={60}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>

        <div
          ref={cardRef}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-accent/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <span className="text-6xl font-bold text-accent/30">RR</span>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Hey!
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-accent/20 rounded-xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 bg-accent/10 rounded-lg -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              A dedicated developer based in Indonesia
            </h3>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Mail className="w-4 h-4 text-accent" />
                <span>{personalData.email}</span>
              </div>
            </div>

            {personalData.about.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/50 border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={personalData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
