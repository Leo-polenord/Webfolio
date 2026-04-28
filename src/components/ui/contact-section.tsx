import { useRef, useState } from "react"
import { Input } from "./input"
import { Button } from "./button"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { BentoCard, BentoCardWithIcon } from "./bento-card"
import { Mail, MapPin, Download } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import { useLanguage } from "@/context/LanguageContext"

export function ContactSection() {
  const { t } = useLanguage()
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string|null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("https://formspree.io/f/mpwnbwry", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        setError("Erreur lors de l'envoi. Réessayez plus tard.")
      }
    } catch {
      setError("Erreur lors de l'envoi. Réessayez plus tard.")
    }
    setSending(false)
  }

  return (
    <section
      id="contact"
      className="flex min-w-full max-h-[40vh] origin-top scale-75 items-center justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-foreground dark:[text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
            {t('contact.title')}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm md:text-base font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('contact.subtitle')}
          </p>
        </div>

        <BentoCard className="mb-4 text-center">
          <p className="text-foreground/90 text-lg font-open-sans-custom dark:[text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
            {t('contact.availability')}
          </p>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-[2.2fr,0.8fr] gap-4">
          <BentoCard className="md:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4 font-open-sans-custom">
              {t('contact.form.title')}
            </h3>
            <form 
              className="space-y-4"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.form.placeholder.name')}
                    className="bg-accent/10 border-border dark:bg-white/10 dark:border-white/20 text-foreground placeholder:text-muted-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    {t('contact.form.email')}
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder={t('contact.form.placeholder.email')}
                    className="bg-accent/10 border-border dark:bg-white/10 dark:border-white/20 text-foreground placeholder:text-muted-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                  {t('contact.form.message')}
                </Label>
                <Textarea 
                  name="message"
                  required
                  placeholder={t('contact.form.placeholder.message')}
                  rows={5}
                  className="bg-accent/10 border-border dark:bg-white/10 dark:border-white/20 text-foreground placeholder:text-muted-foreground dark:[text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] resize-none" 
                />
              </div>
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 dark:[text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
                type="submit"
                disabled={sending}
              >
                {sending ? t('contact.form.sending') || 'Envoi...' : t('contact.form.send')}
              </Button>
              {sent && (
                <div className="text-green-600 text-center font-semibold mt-2">{t('contact.form.success')}</div>
              )}
              {error && (
                <div className="text-red-600 text-center font-semibold mt-2">{error}</div>
              )}
            </form>
          </BentoCard>

          <div className="flex flex-col gap-4 md:col-span-1">
            <BentoCardWithIcon
              icon={<Mail className="h-5 w-5 text-primary" />}
              title={t('contact.email')}
            >
              <a href="mailto:leopaul.jay@outlook.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                leopaul.jay@outlook.com
              </a>
            </BentoCardWithIcon>

            <BentoCardWithIcon
              icon={<MapPin className="h-5 w-5 text-primary" />}
              title={t('contact.location')}
            >
              <p className="text-muted-foreground text-sm">
                {t('contact.location.value')}
              </p>
            </BentoCardWithIcon>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-white/5 border border-border dark:border-white/10 rounded-xl p-4 shadow-sm dark:shadow-none">
                <h4 className="text-foreground font-semibold font-open-sans-custom mb-3 text-sm">{t('contact.follow')}</h4>
                <div className="flex gap-2">
                  <a 
                    href="https://github.com/Leo-polenord" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted border border-border dark:border-white/10 hover:bg-accent/20 transition-all"
                  >
                    <SiGithub className="h-4 w-4 text-primary" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/léo-paul-jay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted border border-border dark:border-white/10 hover:bg-accent/20 transition-all"
                  >
                    <FaLinkedin className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-white/5 border border-border dark:border-white/10 rounded-xl p-4 shadow-sm dark:shadow-none">
                <h4 className="text-foreground font-semibold font-open-sans-custom mb-3 text-sm">{t('contact.resume')}</h4>
                <a 
                  href="/cv.pdf" 
                  download
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-muted border border-border dark:border-white/10 hover:bg-accent/20 transition-all"
                >
                  <Download className="h-5 w-5 text-primary" />
                  <span className="text-foreground text-sm">{t('contact.download')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}