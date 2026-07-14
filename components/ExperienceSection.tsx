"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Users, Code } from "lucide-react";
import { experiences } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SplitText from "./SplitText";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  education: GraduationCap,
  experience: Briefcase,
  organization: Users,
  project: Code,
};

const colorMap: Record<string, string> = {
  education: "from-blue-500 to-cyan-400",
  experience: "from-green-500 to-emerald-400",
  organization: "from-purple-500 to-violet-400",
  project: "from-orange-500 to-amber-400",
};

const bgMap: Record<string, string> = {
  education: "bg-blue-500/10",
  experience: "bg-green-500/10",
  organization: "bg-purple-500/10",
  project: "bg-orange-500/10",
};

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="experience">
      <div className="container" ref={sectionRef}>
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Experience
          </p>
          <SplitText
            text="My Journey"
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

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.type] || Briefcase;
              const gradientColor = colorMap[exp.type] || "from-slate-500 to-gray-400";
              const bgColor = bgMap[exp.type] || "bg-slate-500/10";
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${gradientColor} flex items-center justify-center z-10 shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all shadow-sm hover:shadow-lg ${bgColor}`}
                    >
                      <div className="flex items-center gap-2 text-sm text-muted mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${gradientColor} text-white`}>
                          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                        </span>
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <p className="text-accent font-medium text-sm mb-3">
                        {exp.organization}
                      </p>

                      <p className="text-muted text-sm">
                        {exp.description}
                      </p>
                    </motion.div>
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
