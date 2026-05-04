import { BrowserRouter, Routes, Route } from "react-router-dom"
import MentionsLegales from "@/components/ui/mentions-legales"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { SkillsSection } from "@/components/ui/skills-section"
import { ProjectsSection } from "@/components/ui/projects-section"
import { AboutSection } from "@/components/ui/about-section"
import { ContactSection } from "@/components/ui/contact-section"
import { Footer } from "@/components/ui/footer"

export default function App() {
  return (
    <BrowserRouter basename="/Webfolio/">
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </BrowserRouter>
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