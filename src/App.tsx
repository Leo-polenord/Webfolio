import { GL } from "@/components/gl"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { SkillsSection } from "@/components/ui/skills-section"
import { ProjectsSection } from "./components/ui/projects-section"
import { AboutSection } from "@/components/ui/about-section"
import { ContactSection } from "@/components/ui/contact-section"
import { Footer } from "@/components/ui/footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MentionsLegales from "@/components/ui/mentions-legales";

export default function App() {
  return (
    <BrowserRouter basename="/Webfolio/">
      <Routes>
        <Route
          path="/"
          element={
            <MainApp />
          }
        />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainApp() {
  return (
    <main className="relative h-screen overflow-hidden">
      <GL />

      <div className="fixed inset-0 z-[5] bg-black/20" />

      <FloatingNavbar />

      <div className="relative z-10 w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <HeroSection />

        <SkillsSection />

        <ProjectsSection />

        <AboutSection />

        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
