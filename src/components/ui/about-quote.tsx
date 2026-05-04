"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function AboutQuote() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDark, setIsDark] = useState(true)

  const { t } = useLanguage()

  useEffect(() => {
    // Détecter le thème initial
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      setIsDark(isDarkMode)
    }

    checkTheme()

    // Observer les changements de classe sur l'élément html
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Gradient différent selon le thème
  const gradientBackground = isDark
    ? 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, transparent 60%)'
    : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 30%, transparent 60%)'

  return (
    <div className="mx-auto mb-6 md:mb-10 px-2 md:px-0">
      <div className="relative">
        <div 
          onMouseMove={handleMouseMove}
          className="relative flex flex-col items-center border-2 rounded-lg backdrop-blur-sm overflow-hidden border-border/50 bg-card/30 dark:border-white/20 dark:bg-white/5"
        >
          <motion.div
            className="pointer-events-none absolute z-10 h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: gradientBackground,
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5,
            }}
          />

          <div className="relative z-20 mx-auto max-w-5xl p-4 md:p-8 lg:p-10 xl:p-16">
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-foreground/90 font-open-sans-custom leading-relaxed">
                {t('about.text1')}
              </p>
              <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-foreground/90 font-open-sans-custom leading-relaxed">
                {t('about.text2')}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -left-1 -top-1 h-2 w-2 md:h-3 md:w-3 bg-accent dark:bg-white/80 z-30" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 md:h-3 md:w-3 bg-accent dark:bg-white/80 z-30" />
        <div className="absolute -right-1 -top-1 h-2 w-2 md:h-3 md:w-3 bg-accent dark:bg-white/80 z-30" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 md:h-3 md:w-3 bg-accent dark:bg-white/80 z-30" />
      </div>
    </div>
  )
}
