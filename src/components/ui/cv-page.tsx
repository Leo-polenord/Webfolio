import { Download } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { FloatingNavbar } from "./floating-navbar"
import { Footer } from "./footer"
import { useNavigate } from "react-router-dom";

export default function CVPage() {
  const navigate = useNavigate();
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <FloatingNavbar />
      <div className="max-w-5xl mx-auto p-4 md:p-6 pt-24">
        <div className="flex justify-between items-center mb-4 gap-4">
          <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded bg-muted text-foreground hover:bg-muted-foreground/10 border border-border transition"
        >
          {t('legal.back')}
        </button>
          <a
            href="CV_Leo-Paul_Jay.pdf"
            download="CV - Leo-Paul Jay.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mb-6"
          >
            <Download className="h-4 w-4" />
            {t('contact.download')}
          </a>
        </div>
        
        <iframe
          src="CV_Leo-Paul_Jay.pdf"
          className="w-full h-[75vh] rounded-lg border border-border"
        />
      </div>
      <Footer />
    </div>
  )
}