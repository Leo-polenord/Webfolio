import { BrowserRouter, Routes, Route } from "react-router-dom"
import MentionsLegales from "@/components/ui/mentions-legales"
import MacBookDisplay from "@/components/ui/macbook-display"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { SkillsSection } from "@/components/ui/skills-section"
import { ProjectsSection } from "@/components/ui/projects-section"
import { AboutSection } from "@/components/ui/about-section"
import { ContactSection } from "@/components/ui/contact-section"
import { Footer } from "@/components/ui/footer"
import { useState, useEffect } from "react"

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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
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

  return <MacBookDisplay />
}