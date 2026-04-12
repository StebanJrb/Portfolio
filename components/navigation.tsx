"use client"

import { useMemo } from "react"
import { useI18n } from "@/lib/i18n-context"
import { LanguageSelector } from "./language-selector"
import GlassSurface from "./GlassSurface"

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const { t } = useI18n()

  const tabs = useMemo(() => [
    { id: "home", label: t("nav.home") || "Home" },
    { id: "solutions", label: t("nav.projects") || "Solutions" }, // Assuming you will update localization or just hardcode mapping to "solutions" concepts
    { id: "about", label: t("nav.experience") || "About" },
  ], [t])
  const handleTabClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing tab
  }

  return (
    <>
      {/* Selector de idioma */}
      <div className="fixed top-6 right-6 z-[120]">
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={24}
          brightness={50}
          opacity={0.8}
          blur={10}
          borderWidth={0}
          mixBlendMode="normal"
        >
          <div className="p-1">
            <LanguageSelector />
          </div>
        </GlassSurface>
      </div>

      {/* Barra de navegación central */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[120] w-[90%] md:w-auto max-w-lg">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={32}
          brightness={50}
          opacity={0.8}
          blur={12}
          borderWidth={0}
          mixBlendMode="normal"
        >
          <div className="flex items-center justify-between px-3 md:px-6 py-2 md:py-3 w-full gap-2 md:gap-6">
            <span className="font-bold text-white text-lg px-2 hidden md:block">SRB</span>
            <div className="flex items-center gap-1 md:gap-4 flex-1 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(`#${tab.id}`)}
                  className={`
                    px-3 py-2 md:px-5 md:py-2.5 rounded-2xl font-mono text-sm md:text-base font-medium transition-all duration-300
                    ${activeTab === tab.id
                      ? "text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105"
                      : "text-white/60 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </GlassSurface>
      </div>
    </>
  )
}