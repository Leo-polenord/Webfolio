"use client"
import { useState } from "react"
import { Moon, Sun } from 'lucide-react'

export function FloatingNavbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-md">
          <div className="flex items-center justify-center gap-10">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-base font-open-sans-custom font-medium text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-base font-open-sans-custom font-medium text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-open-sans-custom font-medium text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-open-sans-custom font-medium text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
            >
              Contact
            </button>
          </div>
        </div>

        <button
          onClick={toggleTheme}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 [text-shadow:_0_1px_3px_rgb(0_0_0_/_30%)]"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-300" />
          ) : (
            <Moon className="h-5 w-5 text-blue-400" />
          )}
        </button>
      </div>
    </nav>
  )
}
