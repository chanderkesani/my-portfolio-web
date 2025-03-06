
import { useState } from "react";
import SectionObserver from "@/components/portfolio/SectionObserver";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Header activeSection={activeSection} onSectionChange={scrollToSection} />
      
      <SectionObserver activeSection={activeSection} onSectionChange={setActiveSection}>
        <Hero onSectionChange={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ServicesSection />
        <ContactSection />
      </SectionObserver>
      
      <Footer />
    </div>
  );
};

export default Index;
