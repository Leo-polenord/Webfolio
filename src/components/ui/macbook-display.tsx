import MacBookImg from "@/assets/macbook.png"
import { FloatingNavbar } from "./floating-navbar"
import { HeroSection } from "./hero-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { AboutSection } from "./about-section"
import { ContactSection } from "./contact-section"

export default function MacBookDisplay() {
  return (
    <main className="h-screen bg-neutral-200 dark:bg-neutral-900">
      <FloatingNavbar />

      <div className="h-full flex items-center justify-center p-2">
        <div className="w-[90vw] max-w-6xl relative">
          <img
            src={MacBookImg}
            alt="MacBook"
            className="w-full h-auto"
          />

          <div className="absolute top-[5.5%] left-[8.2%] w-[83.6%] h-[76.5%] overflow-y-auto overflow-x-hidden">
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  )
}