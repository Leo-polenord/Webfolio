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
      <div className="h-full flex items-center justify-center p-2">
        <div className="w-[90vw] max-w-6xl relative">
          <img
            src={MacBookImg}
            alt="MacBook"
            className="w-full h-auto"
          />

          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] overflow-hidden rounded-t-[20px] border-[10px] border-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-lg z-[60]" />
            <div className="h-full overflow-y-auto overflow-x-hidden">
              <div className="pt-8">
                <FloatingNavbar />
              </div>
              <div className="h-[calc(100%-60px)]">
                <HeroSection />
              </div>
              <div className="scale-75 origin-top pb-4">
                <SkillsSection />
                <ProjectsSection />
                <AboutSection />
                <ContactSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}