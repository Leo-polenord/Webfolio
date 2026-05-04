"use client"
import { useState, useEffect } from "react"
import { Moon, Sun, Globe } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext"

export function FloatingNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const navLinks = [
    { id: "skills", label: t('nav.skills') },
    { id: "projects", label: t('nav.projects') },
    { id: "about", label: t('nav.about') },
    { id: "contact", label: t('nav.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full px-3 py-3 md:px-4 md:py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted border border-border dark:border-white/20 hover:bg-accent/20 transition-all shadow-sm"
          >
            <Globe className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              {language === 'en' ? 'FR' : 'EN'}
            </span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 text-sm font-medium text-foreground bg-muted border border-border dark:border-white/20 rounded-full hover:bg-accent/20 transition-all shadow-sm whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-muted border border-border dark:border-white/20 hover:bg-accent/20 transition-all shadow-sm"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>
    </nav>
  )
}