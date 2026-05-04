import { HashRouter, Routes, Route } from "react-router-dom"
import MentionsLegales from "@/components/ui/mentions-legales"
import CVPage from "@/components/ui/cv-page"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { SkillsSection } from "@/components/ui/skills-section"
import { ProjectsSection } from "@/components/ui/projects-section"
import { AboutSection } from "@/components/ui/about-section"
import { ContactSection } from "@/components/ui/contact-section"
import { Footer } from "@/components/ui/footer"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </HashRouter>
  )
}

function MainApp() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingNavbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}