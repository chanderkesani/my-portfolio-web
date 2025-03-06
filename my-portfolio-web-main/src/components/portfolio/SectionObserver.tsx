
import { ReactNode, useEffect, useState } from "react";

interface SectionObserverProps {
  children: ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const SectionObserver = ({ children, activeSection, onSectionChange }: SectionObserverProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          onSectionChange(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onSectionChange]);

  return <>{children}</>;
};

export default SectionObserver;
