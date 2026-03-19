"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const { t } = useI18n()
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise<void>((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm({ name: "", email: "", message: "" })
  }

  const inputClass =
    "w-full bg-white/[0.06] border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-primary focus:bg-white/10 focus:ring-2 focus:ring-primary/20 transition-all duration-200"

  const labelClass = "block text-xs font-mono text-white/50 mb-1.5 uppercase tracking-wider"

  return (
    <section className="relative">
      <div className="border border-white/15 bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 transition-all hover:border-white/25">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t("contact.title")}
            </h2>
            <p className="text-white/60 font-mono text-sm">
              {t("contact.subtitle")}
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative mb-2">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
                <CheckCircle className="relative w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white">{t("contact.success.title")}</h3>
              <p className="text-white/60 max-w-sm">{t("contact.success.message")}</p>
              <button
                onClick={handleReset}
                className="mt-4 text-xs font-mono text-white/40 hover:text-white/70 underline underline-offset-4 transition-colors"
              >
                {t("contact.success.again")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t("contact.name")}</label>
                  <input
                    type="text"
                    placeholder="Steban Ruiz"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t("contact.email")}</label>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>{t("contact.message")}</label>
                <textarea
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-10 py-3.5 bg-primary hover:bg-primary/90 rounded-full text-white font-mono text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(0,171,228,0.3)] hover:shadow-[0_0_32px_rgba(0,171,228,0.5)]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("contact.send")}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
