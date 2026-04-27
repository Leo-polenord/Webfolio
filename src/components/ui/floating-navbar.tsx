"use client"
import { useState } from "react"
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext"

export function FloatingNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  const navLinks = [
    { id: "skills", label: t('nav.skills') },
    { id: "projects", label: t('nav.projects') },
    { id: "about", label: t('nav.about') },
    { id: "contact", label: t('nav.contact') },
  ]

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-[50] px-3 py-3 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto flex items-center justify-between">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border/50 bg-card/50 hover:bg-card/70 transition-all"
          >
            {language === 'en' ? (
              <>
                <span className="text-xs font-bold">FR</span>
              </>
            ) : (
              <>
                <span className="text-xs font-bold">EN</span>
              </>
            )}
          </button>

          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="sm:hidden p-2 rounded-xl border border-border/50 bg-card/50"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>

            <button onClick={toggleTheme} className="p-2 rounded-xl border border-border/50 bg-card/50 hover:bg-card/70 transition-all">
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-yellow-300" />
              ) : (
                <Moon className="h-4 w-4 text-blue-400" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="absolute inset-0 z-[60] sm:hidden bg-background/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X className="h-5 w-5" />
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}