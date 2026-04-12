"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import GlassSurface from "@/components/GlassSurface"

type ProjectCategory = "data-engineering" | "ml-engineering"

interface Project {
  id: string
  title: Record<"es" | "en", string>
  description: Record<"es" | "en", string>
  category: ProjectCategory
  tags: string[]
  image: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: "de-1",
    title: {
      es: "Data Lake — Medallion Architecture",
      en: "Data Lake — Medallion Architecture",
    },
    description: {
      es: "Implementación de Data Lake con arquitectura Medallion (Bronze/Silver/Gold) sobre AWS y Snowflake para garantizar calidad, gobernanza y escalabilidad de los datos.",
      en: "Data Lake implementation with Medallion Architecture (Bronze/Silver/Gold) on AWS and Snowflake, ensuring data quality, governance and scalability.",
    },
    category: "data-engineering",
    tags: ["Data Lake", "Medallion", "Snowflake", "AWS"],
    image: "/Medaillon.png",
    github: "https://github.com/StebanJrb/Data-Lake-Medallion-Architecture-Bronze-Silver-Gold-",
    demo: "https://demo.example.com",
  },
  {
    id: "de-2",
    title: {
      es: "Change Data Capture (CDC) con Debezium & Kafka",
      en: "Change Data Capture (CDC) with Debezium & Kafka",
    },
    description: {
      es: "Arquitectura CDC que captura y replica cambios en tiempo real usando Debezium y Kafka, garantizando sincronización eficiente entre bases transaccionales y sistemas analíticos.",
      en: "CDC architecture capturing and replicating changes in real time with Debezium and Kafka, ensuring efficient synchronization between transactional databases and analytics systems.",
    },
    category: "data-engineering",
    tags: ["Debezium", "Kafka", "CDC", "Data Streaming"],
    image: "/Change Data.png",
    github: "https://github.com/StebanJrb/Change-Data-Capture-CDC-with-Debezium-Kafka",
    demo: "https://demo.example.com",
  },
  {
    id: "de-3",
    title: {
      es: "Legacy Warehouse Migration a Modern Stack",
      en: "Legacy Warehouse Migration to Modern Stack",
    },
    description: {
      es: "Migración de un data warehouse legacy a un stack moderno con dbt, Snowflake y pipelines automatizados, mejorando rendimiento y gobernanza de los datos.",
      en: "Migration of a legacy data warehouse to a modern stack with dbt, Snowflake and automated pipelines, improving performance and data governance.",
    },
    category: "data-engineering",
    tags: ["dbt", "Snowflake", "Data Migration", "Modernization"],
    image: "/Legacy Wharehouse.png",
    github: "https://github.com/StebanJrb/Legacy-Warehouse-Migration-to-Modern-Stack-dbt-Snowflake-",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-1",
    title: {
      es: "MLOps Pipeline — CI/CD, Champion/Challenger & Drift Monitoring",
      en: "MLOps Pipeline — CI/CD, Champion/Challenger & Drift Monitoring",
    },
    description: {
      es: "Pipeline de MLOps con integración continua, evaluación Champion/Challenger y monitoreo de drift para modelos de producción.",
      en: "MLOps pipeline with continuous integration, Champion/Challenger evaluation and drift monitoring for production models.",
    },
    category: "ml-engineering",
    tags: ["MLOps", "CI/CD", "Drift Monitoring", "Champion/Challenger"],
    image: "/MLOPs Pipeline.png",
    github: "https://github.com/StebanJrb/MLOps-Pipeline-CI-CD-Champion-Challenger-Drift-Monitoring",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-2",
    title: {
      es: "Credit Scoring con Explainability & Fairness Analysis",
      en: "Credit Scoring with Explainability (XAI) & Fairness Analysis",
    },
    description: {
      es: "Modelo de scoring crediticio con explicación y análisis de equidad, usando XAI para mejorar la transparencia y reducir sesgos.",
      en: "Credit scoring model with explainability and fairness analysis, using XAI to improve transparency and reduce bias.",
    },
    category: "ml-engineering",
    tags: ["XAI", "Fairness", "Credit Scoring", "Python"],
    image: "/Credit Score.png",
    github: "https://github.com/StebanJrb/Credit-Scoring-with-Explainability-XAI-Fairness-Analysis",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-3",
    title: {
      es: "Búsqueda Semántica & RAG sobre Documentación Interna",
      en: "Semantic Search & RAG System over Internal Documentation",
    },
    description: {
      es: "Sistema de búsqueda semántica y RAG para documentación interna, combinando embeddings y recuperación de contexto en tiempo real.",
      en: "Semantic search and RAG system for internal documentation, combining embeddings and real-time context retrieval.",
    },
    category: "ml-engineering",
    tags: ["Semantic Search", "RAG", "Embeddings", "Knowledge Base"],
    image: "/Semantic Search.png",
    github: "https://github.com/StebanJrb/Semantic-Search-RAG-System-over-Internal-Documentation",
    demo: "https://demo.example.com",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("data-engineering")
  const { t, language } = useI18n()

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <section id="proyectos" className="relative">
      <div className="mb-12 flex flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance text-white mix-blend-plus-lighter">
            <span className="text-emerald-400">{t("projects.title")}</span> Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-6 mix-blend-plus-lighter">{t("projects.subtitle")}</p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button onClick={() => setActiveCategory("data-engineering")}>
            <GlassSurface
              width="auto" height="auto" borderRadius={16} borderWidth={0}
              opacity={activeCategory === "data-engineering" ? 0.8 : 0.4}
              brightness={activeCategory === "data-engineering" ? 70 : 40}
              mixBlendMode="normal"
            >
              <div className={`px-6 py-3 font-mono transition-colors ${activeCategory === "data-engineering" ? "text-white" : "text-white/60 hover:text-white"}`}>
                {t("projects.de")}
              </div>
            </GlassSurface>
          </button>
          <button onClick={() => setActiveCategory("ml-engineering")}>
            <GlassSurface
              width="auto" height="auto" borderRadius={16} borderWidth={0}
              opacity={activeCategory === "ml-engineering" ? 0.8 : 0.4}
              brightness={activeCategory === "ml-engineering" ? 70 : 40}
              mixBlendMode="normal"
            >
              <div className={`px-6 py-3 font-mono transition-colors ${activeCategory === "ml-engineering" ? "text-white" : "text-white/60 hover:text-white"}`}>
                {t("projects.ml")}
              </div>
            </GlassSurface>
          </button>
        </div>

        {/* Projects List */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl">
              <GlassSurface width="100%" height="100%" borderRadius={16} blur={12} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
                <div className="flex flex-col w-full">
                  <div className="relative h-72 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title[language]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col relative z-10 w-full text-white mix-blend-plus-lighter">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mt-2" />
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            className="p-2 rounded-md hover:bg-white/10 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t("projects.github")}
                          >
                            <Github className="h-4 w-4 text-white/70 hover:text-white" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            className="p-2 rounded-md hover:bg-white/10 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t("projects.demo")}
                          >
                            <ExternalLink className="h-4 w-4 text-white/70 hover:text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                      {project.title[language]}
                    </h3>

                    <p className="text-base text-white/80 mb-4 leading-relaxed max-w-4xl">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <GlassSurface key={tag} width="auto" height="auto" borderRadius={8} blur={5} opacity={0.5} brightness={60} mixBlendMode="normal">
                          <span className="px-3 py-1 block text-xs text-white font-mono h-fit">
                            {tag}
                          </span>
                        </GlassSurface>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 block">
                          <GlassSurface width="100%" height="auto" borderRadius={12} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal" className="hover:scale-105 transition-transform">
                            <div className="flex items-center justify-center py-3 px-4 w-full h-full font-mono text-sm text-white">
                              <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                              <span className="truncate">{language === "es" ? "GitHub" : "GitHub Code"}</span>
                            </div>
                          </GlassSurface>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 block">
                          <GlassSurface width="100%" height="auto" borderRadius={12} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal" className="hover:scale-105 transition-transform">
                            <div className="flex items-center justify-center py-3 px-4 w-full h-full font-mono text-sm text-white">
                              <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                              <span className="truncate">{language === "es" ? "Demo" : "Demo"}</span>
                            </div>
                          </GlassSurface>
                        </a>
                      )}
                    </div>
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
