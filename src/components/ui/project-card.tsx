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
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white/80 shadow-sm backdrop-blur-md transition-all hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-accent/20 to-muted">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-4 md:p-6 flex flex-col justify-between">
        <h3 className="mb-2 md:mb-3 text-xl md:text-2xl font-bold text-foreground font-open-sans-custom">
          {title}
        </h3>
        
        <p className="mb-3 md:mb-4 text-sm md:text-base text-muted-foreground font-open-sans-custom">
          {description}
        </p>

        <div className="mb-3 md:mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/10 text-foreground border-border text-xs md:text-sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 md:gap-3">
          {showLive && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 md:px-4 py-2 text-xs md:text-sm text-foreground transition-all hover:bg-primary/20 border border-border"
            >
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 md:px-4 py-2 text-xs md:text-sm text-foreground transition-all hover:bg-primary/20 border border-border"
            >
              <SiGithub className="h-3 w-3 md:h-4 md:w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
