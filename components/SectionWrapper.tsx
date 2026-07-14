"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-20 md:py-28 relative ${className}`}
    >
      {/* Subtle background gradient for visual separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
