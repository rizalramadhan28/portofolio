"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, string> = {
  SiReact: "⚛️",
  SiNextdotjs: "▲",
  SiTailwindcss: "🎨",
  SiHtml5: "🌐",
  SiJavascript: "🟨",
  SiNodedotjs: "🟢",
  SiMysql: "🐘",
  SiMariadb: "🍃",
  SiPostman: "📮",
  SiPrisma: "🔷",
  SiCisco: "🌐",
  SiLinux: "🐧",
  SiDocker: "🐳",
  SiNginx: "🔄",
  SiCloudflare: "☁️",
  SiSecurityscorecard: "🔒",
  SiGit: "📦",
  SiVisualstudiocode: "💻",
  SiFigma: "🎯",
  SiVercel: "▲",
  SiGnubash: "⌨️",
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

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
                    <span className="text-base">
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
