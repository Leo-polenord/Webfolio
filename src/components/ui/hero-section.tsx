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
    <section id="home" className="flex min-h-full items-center justify-center px-6 py-4">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="mb-4 text-balance text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="font-open-sans-custom not-italic">Léo-Paul </span>
            <span className="font-serif italic">Jay</span>
          </h1>

          <p className="mb-4 mx-auto max-w-xl text-pretty text-muted-foreground font-thin font-open-sans-custom tracking-wide text-base">
            {t('hero.subtitle.part1')}{" "}
            <span className="font-serif italic">{t('hero.subtitle.clean')}</span>{" "}
            {t('hero.subtitle.part2')}{" "}
            <span className="font-serif italic">{t('hero.subtitle.creative')}</span>
          </p>

          <div className="flex justify-center">
            <ShinyButton onClick={scrollToProjects} className="px-6 py-2 text-sm">
              {t('hero.cta')}
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
