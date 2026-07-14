"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SplitText from "./SplitText";

const categoryGradients: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-400",
  Backend: "from-green-500 to-emerald-400",
  Networking: "from-purple-500 to-violet-400",
  Tools: "from-orange-500 to-amber-400",
};

const categoryBg: Record<string, string> = {
  Frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  Backend: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  Networking: "from-purple-500/20 to-violet-500/20 border-purple-500/30",
  Tools: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
};

const iconMap: Record<string, string> = {
  SiReact: "⚛️",
  SiNextdotjs: "▲",
  SiTailwindcss: "🌊",
  SiHtml5: "🌐",
  SiJavascript: "⚡",
  SiNodedotjs: "🟢",
  SiExpress: "🚂",
  SiMysql: "🗄️",
  SiMariadb: "🐬",
  SiPostman: "📮",
  SiPrisma: "◆",
  SiWordpress: "📰",
  SiCisco: "🌐",
  SiSecurityscorecard: "🔒",
  SiGit: "🔀",
  SiVisualstudiocode: "💻",
  SiFigma: "🎨",
  SiVercel: "▲",
  SiAntigravity: "🚀",
  SiKiro: "⚡",
};

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const categories = Object.keys(skills) as Array<keyof typeof skills>;

  return (
    <SectionWrapper id="skills">
      <div className="container" ref={sectionRef}>
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

        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const items = skills[category];
            const catColor = categoryBg[category] || "from-slate-500/20 to-gray-500/20 border-slate-500/30";
            const catGradient = categoryGradients[category] || "from-slate-500 to-gray-400";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${catColor} border backdrop-blur-sm`}
              >
                <motion.h3
                  className="text-xl font-bold mb-4 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 + 0.2 }}
                >
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${catGradient}`} />
                  {category}
                </motion.h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full border border-border hover:border-accent/50 transition-all cursor-default shadow-sm hover:shadow-md"
                    >
                      <span className="text-lg">{iconMap[skill.icon] || "🔧"}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
