"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";

const socialLinks = [
  { name: "GitHub", url: personalData.social.github },
  { name: "WhatsApp", url: personalData.social.whatsapp },
  { name: "Instagram", url: personalData.social.instagram },
  { name: "YouTube", url: personalData.social.youtube },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Rizal<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted mt-2">
              &copy; {year} {personalData.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                {social.name}
              </motion.a>
            ))}
          </div>

          {/* Built With */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted">
              Built with{" "}
              <span className="text-foreground font-medium">Next.js</span> &{" "}
              <span className="text-foreground font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
