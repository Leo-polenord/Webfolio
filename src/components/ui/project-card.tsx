import { SiGithub } from "react-icons/si"
import { Badge } from "./badge"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  showLiveDemo?: boolean
}

export function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl, showLiveDemo = true }: ProjectCardProps) {
  const showLive = showLiveDemo && !!liveUrl;
  return (
    <div className="group relative flex overflow-hidden rounded-2xl border border-border bg-white/80 shadow-sm backdrop-blur-md transition-all hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
      {/* Image */}
      {image && (
        <div className="aspect-video w-full flex flex-col justify-between overflow-hidden bg-gradient-to-br from-accent/20 to-muted">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <h3 className="mb-3 text-2xl font-bold text-foreground [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)] dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom">
          {title}
        </h3>
        
        <p className="mb-4 text-muted-foreground [text-shadow:_0_1px_5px_rgb(0_0_0_/_10%)] dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/10 text-foreground border-border">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {showLive && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:bg-primary/20 border border-border"
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
              className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm text-foreground transition-all hover:bg-primary/20 border border-border"
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
