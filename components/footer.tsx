"use client"

import { useI18n } from "@/lib/i18n-context"
import { ExternalLink } from "lucide-react"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-orbitron text-lg font-bold text-white">Steban Ruiz Benavides</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{t("footer.description")}</p>
          </div>

          <div className="space-y-3 text-sm text-gray-500">
            <p>{t("footer.privacy")}</p>
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
