import MacBookImg from "@/assets/macbook.png"
import { FloatingNavbar } from "./floating-navbar"
import { HeroSection } from "./hero-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { AboutSection } from "./about-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"

const postItColors = {
  yellow: 'bg-yellow-300',
  pink: 'bg-pink-400',
  blue: 'bg-sky-400',
  green: 'bg-green-400',
  orange: 'bg-orange-400',
  purple: 'bg-purple-400',
} as const

function PostIt({ color = 'yellow', rotation = 0, left = '0%', top = '0%', children }: {
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'orange' | 'purple'
  rotation?: number
  left?: string
  top?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className="absolute w-32 h-32"
      style={{
        left: left,
        top: top,
        rotate: `${rotation}deg`,
      }}
    >
      <div
        className="absolute w-full h-1 bg-black/30 blur-sm"
        style={{ top: 'calc(100% - 4px)', left: 0, zIndex: -1 }}
      />
      <div className={`w-full h-full ${postItColors[color]} p-3 text-sm`}>
        {children}
      </div>
    </div>
  )
}

export default function MacBookDisplay() {
  return (
    <main className="h-screen relative overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <div className="absolute inset-0 bg-[#f8f8f8]" />
      
      <div className="h-full flex items-center justify-center p-2 relative z-10">
        <div className="w-[90vw] max-w-6xl relative" id="macbook-container">
          <PostIt color="yellow" rotation={-5} left="-3.5%" top="5%" />
          <PostIt color="pink" rotation={8} left="-4%" top="30%" />
          <PostIt color="blue" rotation={-3} left="-3%" top="55%" />

          <PostIt color="green" rotation={-5} left="92%" top="5%" />
          <PostIt color="orange" rotation={8} left="93%" top="30%" />
          <PostIt color="purple" rotation={-3} left="92.5%" top="55%" />
          
          <img src={MacBookImg} alt="MacBook" className="w-full h-auto" />
          
          <div className="absolute bottom-[-12%] w-[120%] left-[-10%]">
            <div className="h-24 bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-t-lg shadow-[0_-8px_30px_rgba(0,0,0,0.6)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6a6a6a] to-transparent" />
              <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4a4a4a] to-transparent opacity-50" />
            </div>
            <div className="absolute -bottom-[72.5%] left-[0%] w-24 h-[72%] bg-[#1a1a1a] rounded-b-lg" />
            <div className="absolute -bottom-[72.5%] right-[0%] w-24 h-[72%] bg-[#1a1a1a] rounded-b-lg" />
          </div>

          <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] overflow-hidden rounded-t-[20px] border-[10px] border-black bg-background">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-lg z-[60]" />
            <div className="h-full overflow-y-auto overflow-x-hidden no-scrollbar bg-background">
              <div className="pt-8">
                <FloatingNavbar />
              </div>
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <AboutSection />
              <ContactSection />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}