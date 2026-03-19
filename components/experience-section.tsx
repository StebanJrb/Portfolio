"use client"

import { Briefcase } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import GlassSurface from "@/components/GlassSurface"

const experiencesData = {
  es: [
    {
      company: "Tech Corp",
      role: "Senior Data Engineer",
      period: "2022 - Presente",
      description:
        "Diseño y desarrollo de pipelines de datos a escala procesando +10TB diarios. Implementación de arquitecturas en AWS usando Spark, Airflow y Redshift.",
      achievements: [
        "Reducción del 60% en costos de infraestructura",
        "Optimización de queries críticos mejorando performance 5x",
        "Migración exitosa de data lake on-premise a cloud",
      ],
    },
    {
      company: "DataFlow Solutions",
      role: "ML Engineer",
      period: "2020 - 2022",
      description:
        "Desarrollo de modelos de machine learning para predicción y clasificación. Deployment de modelos en producción con MLOps.",
      achievements: [
        "Implementación de sistema de recomendaciones con 85% accuracy",
        "Pipeline automatizado de reentrenamiento de modelos",
        "Reducción de 40% en tiempo de inferencia",
      ],
    },
    {
      company: "StartupAI",
      role: "Data Analyst",
      period: "2018 - 2020",
      description:
        "Análisis de datos y creación de dashboards para toma de decisiones. Desarrollo de ETL pipelines y automatización de reportes.",
      achievements: [
        "Automatización de 15+ reportes mensuales",
        "Implementación de data warehouse con dbt",
        "Creación de dashboards interactivos en Tableau",
      ],
    },
  ],
  en: [
    {
      company: "Tech Corp",
      role: "Senior Data Engineer",
      period: "2022 - Present",
      description:
        "Design and development of data pipelines at scale processing +10TB daily. Implementation of AWS architectures using Spark, Airflow and Redshift.",
      achievements: [
        "60% reduction in infrastructure costs",
        "Critical query optimization improving performance 5x",
        "Successful migration of on-premise data lake to cloud",
      ],
    },
    {
      company: "DataFlow Solutions",
      role: "ML Engineer",
      period: "2020 - 2022",
      description:
        "Development of machine learning models for prediction and classification. Deployment of models in production with MLOps.",
      achievements: [
        "Implementation of recommendation system with 85% accuracy",
        "Automated model retraining pipeline",
        "40% reduction in inference time",
      ],
    },
    {
      company: "StartupAI",
      role: "Data Analyst",
      period: "2018 - 2020",
      description:
        "Data analysis and dashboard creation for decision making. Development of ETL pipelines and report automation.",
      achievements: [
        "Automation of 15+ monthly reports",
        "Data warehouse implementation with dbt",
        "Creation of interactive dashboards in Tableau",
      ],
    },
  ],
}

export function ExperienceSection() {
  const { t, language } = useI18n()

  const experiences = experiencesData[language]

  return (
    <section id="experiencia" className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-accent mix-blend-plus-lighter">{t("exp.title")}</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Experiencia laboral - 100% width with custom scroll */}
        <div className="h-[600px] overflow-y-auto pr-4 custom-scrollbar space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative w-full rounded-2xl overflow-hidden">
              <GlassSurface width="100%" height="auto" borderRadius={24} blur={15} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
                <div className="relative p-8 w-full text-white mix-blend-plus-lighter">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/40 shadow-inner">
                        <Briefcase className="w-6 h-6 text-accent drop-shadow-md" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl text-white font-bold">{exp.role}</h3>
                        <p className="text-accent font-mono text-base font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <GlassSurface width="auto" height="auto" borderRadius={12} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal">
                      <span className="font-mono text-sm text-white px-4 py-2 block font-medium">
                        {exp.period}
                      </span>
                    </GlassSurface>
                  </div>

                  <p className="text-white/90 text-sm mb-6 leading-relaxed bg-black/10 p-4 rounded-xl border border-white/10">{exp.description}</p>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                        <span className="text-white/90 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassSurface>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
