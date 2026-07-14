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
  SiAntigravity: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3186FF">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.18 7 12 10.18 5.82 7 12 4.18zM5 8.82l6 3.36v6.64l-6-3.36V8.82zm8 10V12.18l6-3.36v6.64l-6 3.36z" />
    </svg>
  ),
  SiKiro: (
    <svg viewBox="0 0 1200 1200" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="1200" rx="260" fill="#9046FF"/>
      <mask id="kiro-mask" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="272" y="202" width="655" height="796">
        <path d="M926.578 202.793H272.637V997.857H926.578V202.793Z" fill="white"/>
      </mask>
      <g mask="url(#kiro-mask)">
        <path d="M398.554 818.914C316.315 1001.03 491.477 1046.74 620.672 940.156C658.687 1059.66 801.052 970.473 852.234 877.795C964.787 673.567 919.318 465.357 907.64 422.374C827.637 129.443 427.623 128.946 358.8 423.865C342.651 475.544 342.402 534.18 333.458 595.051C328.986 625.86 325.507 645.488 313.83 677.785C306.873 696.424 297.68 712.819 282.773 740.645C259.915 783.881 269.604 867.113 387.87 823.883L399.051 818.914H398.554Z" fill="white"/>
        <path d="M636.123 549.353C603.328 549.353 598.359 510.097 598.359 486.742C598.359 465.623 602.086 448.977 609.293 438.293C615.504 428.852 624.697 424.131 636.123 424.131C647.555 424.131 657.492 428.852 664.447 438.541C672.398 449.474 676.623 466.12 676.623 486.742C676.623 525.998 661.471 549.353 636.375 549.353H636.123Z" fill="black"/>
        <path d="M771.24 549.353C738.445 549.353 733.477 510.097 733.477 486.742C733.477 465.623 737.203 448.977 744.41 438.293C750.621 428.852 759.814 424.131 771.24 424.131C782.672 424.131 792.609 428.852 799.564 438.541C807.516 449.474 811.74 466.12 811.74 486.742C811.74 525.998 796.588 549.353 771.492 549.353H771.24Z" fill="black"/>
      </g>
    </svg>
  ),
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
