"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMariadb,
  SiPostman,
  SiPrisma,
  SiWordpress,
  SiCisco,
  SiSecurityscorecard,
  SiGit,
  SiFigma,
  SiVercel,
  SiExpress,
  SiSocketdotio,
  SiVscodium,
} from "react-icons/si";
import { skills } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SplitText from "./SplitText";

const iconMap: Record<string, ReactNode> = {
  SiReact: <SiReact className="text-[#61DAFB]" />,
  SiNextdotjs: <SiNextdotjs />,
  SiTailwindcss: <SiTailwindcss className="text-[#38BDF8]" />,
  SiHtml5: <SiHtml5 className="text-[#E34F26]" />,
  SiJavascript: <SiJavascript className="text-[#F7DF1E]" />,
  SiNodedotjs: <SiNodedotjs className="text-[#339933]" />,
  SiMysql: <SiMysql className="text-[#4479A1]" />,
  SiMariadb: <SiMariadb className="text-[#003545]" />,
  SiPostman: <SiPostman className="text-[#FF6C37]" />,
  SiPrisma: <SiPrisma className="text-[#2D3748]" />,
  SiSocketdotio: <SiSocketdotio className="text-[#010101]" />,
  SiExpress: <SiExpress className="text-[#000000]" />,
  SiWordpress: <SiWordpress className="text-[#21759B]" />,
  SiCisco: <SiCisco className="text-[#049FD9]" />,
  SiSecurityscorecard: <SiSecurityscorecard className="text-[#2DBCF2]" />,
  SiGit: <SiGit className="text-[#F05032]" />,
  SiVscodium: <SiVscodium className="text-[#007ACC]" />,
  SiFigma: <SiFigma className="text-[#F24E1E]" />,
  SiVercel: <SiVercel className="text-[#000000]" />,
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-card/50">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Skills
          </p>
          <SplitText
            text="Tech Stack"
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
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items], categoryIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              className="bg-card border border-card-border rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-accent">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-card-border rounded-full text-sm font-medium text-foreground hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    <span className="text-base flex-shrink-0">
                      {iconMap[skill.icon] || "◆"}
                    </span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
