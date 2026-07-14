import PillNav from "@/components/PillNav";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <PillNav
        items={navItems}
        activeHref="#about"
        baseColor="#fff"
        pillColor="#120F17"
        hoveredPillTextColor="#120F17"
        pillTextColor="#fff"
        className=""
      />
      <div className="fixed top-[1em] right-[1.5em] z-[100]">
        <ThemeToggle />
      </div>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
