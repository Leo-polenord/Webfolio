import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function MentionsLegales() {
  const navigate = useNavigate();

  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-2xl w-full bg-card/80 rounded-xl shadow-lg p-8 border border-border">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded bg-muted text-foreground hover:bg-muted-foreground/10 border border-border transition"
        >
          {t('legal.back')}
        </button>
        <h1 className="text-2xl font-bold mb-6 text-foreground">{t('legal.title')}</h1>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{t('legal.site-editor')}</h2>
        <p className="mb-4 text-muted-foreground" style={{whiteSpace: 'pre-line'}}>
          {t('legal.site-editor.text')}
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{t('legal.hosting')}</h2>
        <p className="mb-4 text-muted-foreground">
          {t('legal.hosting.text')}
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{t('legal.intellectual')}</h2>
        <p className="mb-4 text-muted-foreground">
          {t('legal.intellectual.text')}
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{t('legal.personal-data')}</h2>
        <p className="mb-4 text-muted-foreground">
          {t('legal.personal-data.text')}
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{t('legal.cookies')}</h2>
        <p className="mb-4 text-muted-foreground">
          {t('legal.cookies.text')}
        </p>
        <h2 className="text-lg font-semibold mt-4 mb-2 text-foreground">{t('legal.contact')}</h2>
        <p className="mb-2 text-muted-foreground">
          {t('legal.contact.text')}
        </p>
      </div>
    </section>
  );
}
