"use client";

import { motion } from "framer-motion";
import { FileDown, MapPin, Mail } from "lucide-react";
import { personalData } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Get To Know Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/30">
                <img
                  src="/images/profile.jpg"
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                Hey!
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} />
                {personalData.email}
              </span>
            </div>

            {personalData.about.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            <a
              href={personalData.cvUrl}
              download
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
