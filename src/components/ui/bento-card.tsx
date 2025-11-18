import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function BentoCard({ children, className, hover = false }: BentoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6",
        hover && "hover:bg-white/10 transition-colors",
        className
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardIconProps {
  icon: ReactNode
  title: string
  children?: ReactNode
}

export function BentoCardWithIcon({ icon, title, children }: BentoCardIconProps) {
  return (
    <BentoCard hover>
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-white/10">
          {icon}
        </div>
        <h4 className="text-white font-semibold font-open-sans-custom">{title}</h4>
      </div>
      {children}
    </BentoCard>
  )
}
