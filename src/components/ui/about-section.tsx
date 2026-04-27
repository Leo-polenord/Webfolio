import { AboutQuote } from "./about-quote"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
  const { t } = useLanguage()
  
  return (
    <section
      id="about"
      className="flex min-w-full min-h-screen items-center justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground dark:[text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {t('about.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-base font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('about.subtitle')}
          </p>
        </div>
        <AboutQuote />
      </div>
    </section>
  )
}
