import MacBookImg from "@/assets/macbook.png"
import { FloatingNavbar } from "./floating-navbar"
import { HeroSection } from "./hero-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { AboutSection } from "./about-section"
import { ContactSection } from "./contact-section"

export default function MacBookDisplay() {
  return (
    <main className="h-screen relative overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .wall {
          background: linear-gradient(180deg, #e8e4df 0%, #d4cfc8 50%, #c9c3bb 100%);
        }
        .window {
          background: linear-gradient(180deg, #87ceeb 0%, #b0e0e6 30%, #f0f8ff 60%, #ffffff 100%);
          box-shadow: 
            inset 0 0 20px rgba(255,255,255,0.8),
            0 0 30px rgba(135, 206, 235, 0.5);
        }
      `}</style>
      
      <div className="absolute inset-0 wall" />
      
      <div className="absolute top-0 left-0 right-0 h-1/2 window">
        <div className="w-full h-full border-l-[20px] border-r-[20px] border-b-[20px] border-gray-200">
          <div className="w-[1px] h-full bg-gray-300 absolute left-1/2 top-0" />
          <div className="h-[1px] w-full bg-gray-300 absolute top-1/2 left-0" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 32px)'}} />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-950/50" />
      </div>
      
      <div className="h-full flex items-center justify-center p-2 relative z-10">
        <div className="w-[90vw] max-w-6xl relative">
          <img src={MacBookImg} alt="MacBook" className="w-full h-auto" />

          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] overflow-hidden rounded-t-[20px] border-[10px] border-black bg-background">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-lg z-[60]" />
            <div className="h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-background">
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