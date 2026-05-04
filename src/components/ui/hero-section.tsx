import { ShinyButton } from "./shiny-button"
import { useLanguage } from "@/context/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()
  
  const scrollToProjects = () => {
    const section = document.getElementById("projects")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground">
            <span className="font-open-sans-custom not-italic">Léo-Paul </span>
            <span className="font-serif italic">Jay</span>
          </h1>

          <p className="mb-8 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-open-sans-custom">
            {t('hero.subtitle.part1')}{" "}
            <span className="font-serif italic">{t('hero.subtitle.clean')}</span>{" "}
            {t('hero.subtitle.part2')}{" "}
            <span className="font-serif italic">{t('hero.subtitle.creative')}</span>
          </p>

          <div className="flex justify-center">
            <ShinyButton onClick={scrollToProjects} className="px-8 py-3 text-base">
              {t('hero.cta')}
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
