"use client"

import { ArrowUp } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import GlassSurface from "@/components/GlassSurface"

export function CTASection() {
  const { t } = useI18n()

  const scrollToHome = () => {
    const homeSection = document.getElementById("inicio")
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 relative px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto flex flex-col items-center">
        <GlassSurface width="100%" height="auto" borderRadius={24} blur={15} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
          <div className="p-10 md:p-14 text-white mix-blend-plus-lighter w-full flex flex-col items-center">
            <h3 className="font-heading text-3xl md:text-4xl text-accent mb-6 font-bold">{t("arch.cta.title")}</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl">{t("arch.cta.description")}</p>

            <button onClick={scrollToHome} className="inline-block group focus:outline-none">
              <GlassSurface width="auto" height="auto" borderRadius={16} blur={10} opacity={0.8} brightness={70} mixBlendMode="normal" className="hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center px-8 py-4 gap-3 bg-accent/20 border border-accent/40 rounded-2xl group-hover:bg-accent/40 transition-colors shadow-inner">
                  <ArrowUp className="w-5 h-5 text-accent drop-shadow-md group-hover:animate-bounce" />
                  <span className="font-mono font-bold text-white text-lg">{t("arch.cta.button")}</span>
                </div>
              </GlassSurface>
            </button>
          </div>
        </GlassSurface>
      </div>
    </section>
  )
}
