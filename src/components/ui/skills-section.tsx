import { BentoCard } from "./bento-card"
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiThreedotjs,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiSharp,
  SiDotnet,
  SiPostgresql,
  SiGit,
  SiVite,
  SiDocker,
  SiGithubactions
} from "react-icons/si"
import { Lightbulb, Users, BookOpen, Target, Zap, MessageSquare, Clock, GraduationCap, Palette, Dumbbell } from "lucide-react"

const frontendSkills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiThreedotjs, name: "Three.js", color: "#000000" },
  { icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
]

const backendSkills = [
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiSharp, name: "C#", color: "#239120" },
  { icon: SiDotnet, name: "ASP.NET Core", color: "#512BD4" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
]

const toolsSkills = [
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiVite, name: "Vite", color: "#646CFF" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
]

const softSkills = [
  { icon: Lightbulb, name: "Problem Solving", description: "Analytical thinking & debugging" },
  { icon: Target, name: "Attention to Detail", description: "Pixel-perfect & accessible design" },
  { icon: Users, name: "Team Collaboration", description: "Git workflow & code reviews" },
  { icon: BookOpen, name: "Continuous Learning", description: "Always improving & adapting" },
  { icon: Zap, name: "Agile Methodology", description: "Scrum & sprint planning" },
  { icon: MessageSquare, name: "Communication", description: "Clear documentation & feedback" },
]

interface SkillCardProps {
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>
  name: string
  color: string
}

function SkillIcon({ icon: Icon, name, color }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon size={32} color={color} />
      </div>
      <span className="text-xs text-gray-300 font-open-sans-custom">{name}</span>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            Skills & Technologies
          </h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            Building modern web experiences with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <BentoCard className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-open-sans-custom">
                Professional Skills
              </h3>
              <div className="space-y-5">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg font-open-sans-custom">
                        {skill.name}
                      </h4>
                      <p className="text-gray-400 text-base mt-1">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6 font-open-sans-custom">
                Beyond Code
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg font-open-sans-custom">
                      Education
                    </h4>
                    <p className="text-gray-400 text-base mt-1">
                      Computer Science Degree - IUT Valence
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 flex-shrink-0">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg font-open-sans-custom">
                      UI/UX Design
                    </h4>
                    <p className="text-gray-400 text-base mt-1">
                      Passionate about user experience
                    </p>
                  </div>
                </div>

                </div>
            </BentoCard>
          </div>

          <div className="flex flex-col gap-4">
            <BentoCard>
              <h3 className="text-2xl font-bold text-white mb-6 font-open-sans-custom">
                Frontend Development
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {frontendSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </BentoCard>

            <BentoCard>
              <h3 className="text-2xl font-bold text-white mb-6 font-open-sans-custom">
                Backend & Database
              </h3>
              <div className="grid grid-cols-4 gap-6">
                {backendSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </BentoCard>

            <BentoCard>
              <h3 className="text-2xl font-bold text-white mb-6 font-open-sans-custom">
                Tools & Workflow
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {toolsSkills.map((skill) => (
                  <SkillIcon key={skill.name} {...skill} />
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  )
}
