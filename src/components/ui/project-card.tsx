import { Badge } from "./badge"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10">
      {/* Image */}
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom">
          {title}
        </h3>
        
        <p className="mb-4 text-gray-300 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-all hover:bg-white/20 border border-white/10 hover:border-white/30"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-all hover:bg-white/20 border border-white/10 hover:border-white/30"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
