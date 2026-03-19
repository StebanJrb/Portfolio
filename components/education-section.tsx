"use client"

import { GraduationCap, Award, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import GlassSurface from "@/components/GlassSurface"

const educationData = {
  es: [
    {
      institution: "Universidad Nacional",
      degree: "Maestría en Ciencia de Datos",
      period: "2020 - 2022",
      description:
        "Especialización en Machine Learning, Deep Learning y procesamiento de datos a gran escala. Tesis sobre sistemas de recomendación en tiempo real.",
      achievements: [
        "Tesis: 'Arquitecturas distribuidas para ML en producción'",
        "Promedio: 4.8/5.0",
        "Publicación en conferencia internacional de IA",
      ],
    },
    {
      institution: "Universidad Técnica",
      degree: "Ingeniería de Sistemas",
      period: "2014 - 2018",
      description:
        "Fundamentos sólidos en programación, algoritmos, bases de datos y arquitectura de software. Especialización en inteligencia artificial.",
      achievements: [
        "Proyecto de grado: Pipeline de datos para análisis predictivo",
        "Promedio: 4.5/5.0",
        "Mención de honor en desarrollo de software",
      ],
    },
    {
      institution: "Platzi",
      degree: "Ruta de Data Science & ML",
      period: "2019 - 2020",
      description:
        "Formación intensiva en ciencia de datos, machine learning y MLOps. Más de 50 cursos completados en tecnologías de datos modernas.",
      achievements: [
        "Certificado en Data Engineering con AWS",
        "Certificado en Deep Learning con TensorFlow",
        "Top 5% en proyectos de la comunidad",
      ],
    },
  ],
  en: [
    {
      institution: "National University",
      degree: "Master's in Data Science",
      period: "2020 - 2022",
      description:
        "Specialization in Machine Learning, Deep Learning and large-scale data processing. Thesis on real-time recommendation systems.",
      achievements: [
        "Thesis: 'Distributed architectures for ML in production'",
        "GPA: 4.8/5.0",
        "Publication in international AI conference",
      ],
    },
    {
      institution: "Technical University",
      degree: "Systems Engineering",
      period: "2014 - 2018",
      description:
        "Strong foundations in programming, algorithms, databases and software architecture. Specialization in artificial intelligence.",
      achievements: [
        "Graduation project: Data pipeline for predictive analysis",
        "GPA: 4.5/5.0",
        "Honors mention in software development",
      ],
    },
    {
      institution: "Platzi",
      degree: "Data Science & ML Track",
      period: "2019 - 2020",
      description:
        "Intensive training in data science, machine learning and MLOps. Over 50 courses completed in modern data technologies.",
      achievements: [
        "Certified in Data Engineering with AWS",
        "Certified in Deep Learning with TensorFlow",
        "Top 5% in community projects",
      ],
    },
  ],
}

const certificationsData = {
  es: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🔷",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: "🧠",
    },
    {
      title: "Apache Spark Certified",
      issuer: "Databricks",
      year: "2022",
      icon: "⚡",
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      year: "2021",
      icon: "⎈",
    },
  ],
  en: [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️",
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🔷",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: "🧠",
    },
    {
      title: "Apache Spark Certified",
      issuer: "Databricks",
      year: "2022",
      icon: "⚡",
    },
    {
      title: "Kubernetes Administrator",
      issuer: "CNCF",
      year: "2021",
      icon: "⎈",
    },
  ],
}

export function EducationSection() {
  const { t, language } = useI18n()

  const education = educationData[language]
  const certifications = certificationsData[language]

  return (
    <section id="formacion" className="relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-4 text-accent mix-blend-plus-lighter">{t("edu.title")}</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-[70%_30%] gap-8 h-auto lg:h-[600px]">
          {/* Formación académica - 70% with custom scroll */}
          <div className="space-y-6 lg:overflow-y-auto lg:pr-4 custom-scrollbar">
            {education.map((edu, index) => (
              <div key={index} className="group relative w-full rounded-2xl overflow-hidden">
                <GlassSurface width="100%" height="auto" borderRadius={24} blur={15} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
                  <div className="relative p-8 w-full text-white mix-blend-plus-lighter">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/40 shadow-inner flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent drop-shadow-md" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl text-white font-bold">{edu.degree}</h3>
                          <p className="text-accent font-mono text-base font-medium">{edu.institution}</p>
                        </div>
                      </div>

                      <GlassSurface width="auto" height="auto" borderRadius={12} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal" className="flex-shrink-0 sm:self-start">
                        <span className="font-mono text-sm text-white px-4 py-2 block font-medium whitespace-nowrap">
                          {edu.period}
                        </span>
                      </GlassSurface>
                    </div>

                    <p className="text-white/90 text-sm mb-6 leading-relaxed bg-black/10 p-4 rounded-xl border border-white/10">{edu.description}</p>

                    <div className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shadow-[0_0_8px_rgba(34,197,94,0.8)] flex-shrink-0" />
                          <span className="text-white/90 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassSurface>
              </div>
            ))}
          </div>

          {/* Certificaciones - 30% with custom scroll */}
          <div className="space-y-4 lg:overflow-y-auto lg:pr-4 custom-scrollbar">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative w-full rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                <GlassSurface width="100%" height="auto" borderRadius={16} blur={15} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
                  <div className="relative p-5 text-white mix-blend-plus-lighter">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl drop-shadow-md">{cert.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-heading text-sm text-white font-bold mb-1 leading-tight">{cert.title}</h4>
                        <p className="text-accent font-mono text-xs">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <GlassSurface width="auto" height="auto" borderRadius={8} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal">
                        <span className="font-mono text-xs text-white px-3 py-1 block">{cert.year}</span>
                      </GlassSurface>

                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/40 shadow-inner group-hover:bg-accent/40 transition-colors">
                        <Award className="w-4 h-4 text-accent drop-shadow-md" />
                      </div>
                    </div>
                  </div>
                </GlassSurface>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn notice at the bottom */}
        <div className="mt-12 text-center flex justify-center">
          <GlassSurface width="auto" height="auto" borderRadius={24} blur={15} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
            <div className="inline-flex items-center gap-3 px-8 py-4 text-white mix-blend-plus-lighter group">
              <span className="text-white/80 text-sm font-medium">{t("edu.linkedin.notice")}</span>
              <a
                href="https://www.linkedin.com/in/julianruizbenavides/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors flex items-center gap-2 font-mono text-sm font-bold ml-2 bg-accent/20 px-3 py-1.5 rounded-lg border border-accent/40"
              >
                {t("edu.linkedin.link")}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </GlassSurface>
        </div>
      </div>
    </section>
  )
}
