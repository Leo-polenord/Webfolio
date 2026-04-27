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
    <nav className="absolute top-0 left-0 right-0 z-[50] px-4 py-3">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/15 transition-all shadow-sm"
          >
            <Globe className="w-3 h-3 text-gray-600 dark:text-gray-300" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
              {language === 'en' ? 'FR' : 'EN'}
            </span>
          </button>

          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-full hover:bg-white/20 dark:hover:bg-white/15 backdrop-blur-md transition-all whitespace-nowrap shadow-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          {navLinks.slice(2).map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-full hover:bg-white/20 dark:hover:bg-white/15 backdrop-blur-md transition-all whitespace-nowrap shadow-sm"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/15 transition-all shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}