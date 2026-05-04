"use client"

import type React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as const

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className, onClick, disabled, type }) => {
  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn(
        "relative rounded-lg px-8 py-4 uppercase tracking-wide overflow-hidden font-open-sans-custom text-xs scale-90",
        "bg-primary/20 backdrop-blur-sm border-2 border-primary/30",
        "dark:border-white/30 dark:bg-white/20",
        "shadow-[0_0_30px_rgba(37,99,235,0.3),inset_0_0_20px_rgba(37,99,235,0.1)]",
        "dark:shadow-[0_0_30px_rgba(255,255,255,0.4),dark:inset_0_0_20px_rgba(255,255,255,0.1)]",
        "hover:shadow-[0_0_50px_rgba(37,99,235,0.5),inset_0_0_30px_rgba(37,99,235,0.2)]",
        "dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.6),dark:hover:inset_0_0_30px_rgba(255,255,255,0.2)]",
        "transition-all duration-300",
        className,
      )}
    >
      <span className="relative z-10 text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] dark:text-white dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{children}</span>

      <span
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          transform: "translateX(var(--x))",
        }}
      />
    </motion.button>
  )
}
