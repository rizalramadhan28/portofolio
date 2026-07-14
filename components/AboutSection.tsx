"use client";

import { motion } from "framer-motion";
import { FileDown, MapPin, Mail } from "lucide-react";
import { personalData } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SplitText from "./SplitText";
import TiltedCard from "./TiltedCard";

export default function AboutSection() {
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

        <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <TiltedCard
                imageSrc="/images/profile.jpg"
                altText={personalData.name}
                captionText={personalData.name}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    {personalData.name}
                  </p>
                }
              />
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
