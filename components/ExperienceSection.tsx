"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Code } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SplitText from "./SplitText";

const typeConfig: Record<
  string,
  { icon: React.ElementType; color: string; glow: string }
> = {
  education: {
    icon: GraduationCap,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  experience: {
    icon: Briefcase,
    color: "from-green-400 to-emerald-500",
    glow: "shadow-green-500/20",
  },
  organization: {
    icon: Users,
    color: "from-purple-400 to-pink-500",
    glow: "shadow-purple-500/20",
  },
  project: {
    icon: Code,
    color: "from-cyan-400 to-purple-500",
    glow: "shadow-purple-500/20",
  },
};

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <SplitText
            text="My Journey"
            tag="h2"
            className="text-3xl md:text-4xl font-bold text-foreground"
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

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyan-200 via-purple-200 to-cyan-200 dark:from-cyan-900/50 dark:via-purple-900/50 dark:to-cyan-900/50" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const config = typeConfig[exp.type];
              const Icon = config.icon;
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1 z-10">
                    <div
                      className={`w-[17px] h-[17px] rounded-full bg-gradient-to-br ${config.color} shadow-lg ${config.glow} ring-4 ring-background flex items-center justify-center`}
                    >
                      <Icon size={9} className="text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 ml-10 md:ml-0 ${
                      isLeft ? "md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="group relative rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 hover:border-transparent hover:ring-1 hover:ring-cyan-200/50 hover:dark:ring-purple-500/20">
                      {/* Glow border effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-cyan-400/10 transition-all duration-500 pointer-events-none" />

                      <div className="relative">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted mb-2">
                          <span
                            className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${config.color}`}
                          />
                          {exp.period}
                        </span>
                        <h3 className="text-base font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-accent font-medium mb-2">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
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
