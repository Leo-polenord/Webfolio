import { AboutQuote } from "./about-quote"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
  const { t } = useLanguage()
  
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20"
    >
      <div className="w-full max-w-7xl">
        <div className="mb-8 md:mb-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-open-sans-custom">
            {t('about.title')}
          </h1>
          <p className="text-muted-foreground mt-3 text-sm md:text-base font-open-sans-custom">
            {t('about.subtitle')}
          </p>
        </div>
        <AboutQuote />
      </div>
    </section>
  )
}
