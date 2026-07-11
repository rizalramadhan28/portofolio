"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Code } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  education: { icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-500/10" },
  experience: { icon: Briefcase, color: "text-green-500", bg: "bg-green-500/10" },
  organization: { icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
  project: { icon: Code, color: "text-orange-500", bg: "bg-orange-500/10" },
};

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-14"
                >
                  <div
                    className={`absolute left-[11px] top-1 w-[25px] h-[25px] rounded-full ${config.bg} flex items-center justify-center`}
                  >
                    <Icon size={13} className={config.color} />
                  </div>

                  <div className="bg-card border border-card-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                    <span className="inline-block text-xs text-muted mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm text-accent mb-2">{exp.organization}</p>
                    <p className="text-sm text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
