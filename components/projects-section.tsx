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
      es: "Pipeline de Datos en Tiempo Real",
      en: "Real-Time Data Pipeline",
    },
    description: {
      es: "Pipeline de procesamiento de datos en tiempo real usando Kafka, Spark Streaming y BigQuery. Procesa más de 1M de eventos por segundo.",
      en: "Real-time data processing pipeline using Kafka, Spark Streaming and BigQuery. Processes more than 1M events per second.",
    },
    category: "data-engineering",
    tags: ["Kafka", "Spark", "BigQuery", "Python"],
    image: "/real-time-data-pipeline-architecture.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "de-2",
    title: {
      es: "Plataforma de Orquestación ETL",
      en: "ETL Orchestration Platform",
    },
    description: {
      es: "Plataforma de orquestación de ETL con Airflow, dbt y Snowflake. Automatiza el procesamiento de datos de múltiples fuentes.",
      en: "ETL orchestration platform with Airflow, dbt and Snowflake. Automates data processing from multiple sources.",
    },
    category: "data-engineering",
    tags: ["Airflow", "dbt", "Snowflake", "Docker"],
    image: "/etl-workflow-orchestration-dashboard.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "de-3",
    title: {
      es: "Arquitectura de Data Lake",
      en: "Data Lake Architecture",
    },
    description: {
      es: "Arquitectura de Data Lake en AWS con S3, Glue y Athena. Almacena y procesa petabytes de datos estructurados y no estructurados.",
      en: "Data Lake architecture in AWS with S3, Glue and Athena. Stores and processes petabytes of structured and unstructured data.",
    },
    category: "data-engineering",
    tags: ["AWS", "S3", "Glue", "Athena"],
    image: "/aws-data-lake-cloud-architecture.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-1",
    title: {
      es: "Predicción de Abandono de Clientes",
      en: "Customer Churn Prediction",
    },
    description: {
      es: "Modelo de predicción de abandono de clientes usando XGBoost y MLflow. Alcanza 92% de precisión en producción.",
      en: "Customer churn prediction model using XGBoost and MLflow. Achieves 92% accuracy in production.",
    },
    category: "ml-engineering",
    tags: ["XGBoost", "MLflow", "Python", "FastAPI"],
    image: "/customer-churn-prediction-model-dashboard.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-2",
    title: {
      es: "Análisis de Sentimientos NLP",
      en: "NLP Sentiment Analysis",
    },
    description: {
      es: "Sistema de análisis de sentimientos usando transformers y Hugging Face. Procesa millones de comentarios diariamente.",
      en: "Sentiment analysis system using transformers and Hugging Face. Processes millions of comments daily.",
    },
    category: "ml-engineering",
    tags: ["Transformers", "Hugging Face", "PyTorch", "FastAPI"],
    image: "/nlp-sentiment-analysis-neural-network.jpg",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
  {
    id: "ml-3",
    title: {
      es: "Pipeline de Visión Computacional",
      en: "Computer Vision Pipeline",
    },
    description: {
      es: "Pipeline de visión computacional para detección de objetos usando YOLOv8 y TensorFlow en edge devices.",
      en: "Computer vision pipeline for object detection using YOLOv8 and TensorFlow on edge devices.",
    },
    category: "ml-engineering",
    tags: ["TensorFlow", "YOLO", "OpenCV", "Docker"],
    image: "/computer-vision-object-detection.png",
    github: "https://github.com/username/project",
    demo: "https://demo.example.com",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("data-engineering")
  const { t, language } = useI18n()

  const filteredProjects = projects.filter((project) => project.category === activeCategory)

  return (
    <section id="proyectos" className="relative">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-balance text-white mix-blend-plus-lighter">
            <span className="text-primary">{t("projects.title")}</span> Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 mix-blend-plus-lighter">{t("projects.subtitle")}</p>

          {/* Category Buttons */}
          <div className="inline-flex items-center gap-4">
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
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden flex flex-col h-[680px] rounded-2xl">
              <GlassSurface width="100%" height="100%" borderRadius={16} blur={12} opacity={0.65} brightness={45} borderWidth={0} mixBlendMode="normal">
                <div className="flex flex-col h-full w-full">
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title[language]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative z-10 w-full text-white mix-blend-plus-lighter">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse mt-2" />
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

                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {project.title[language]}
                    </h3>

                    {/* Project Description */}
                    <p className="text-sm text-white/80 mb-4 leading-relaxed">{project.description[language]}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 min-h-[80px]">
                      {project.tags.map((tag) => (
                        <GlassSurface key={tag} width="auto" height="auto" borderRadius={8} blur={5} opacity={0.5} brightness={60} mixBlendMode="normal">
                          <span className="px-3 py-1 block text-xs text-white font-mono h-fit">
                            {tag}
                          </span>
                        </GlassSurface>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 block">
                          <GlassSurface width="100%" height="auto" borderRadius={12} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal" className="hover:scale-105 transition-transform">
                            <div className="flex items-center justify-center py-2 px-4 w-full h-full font-mono text-xs sm:text-sm text-white">
                              <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                              <span className="truncate">{language === "es" ? "GitHub" : "GitHub Code"}</span>
                            </div>
                          </GlassSurface>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 block">
                          <GlassSurface width="100%" height="auto" borderRadius={12} blur={5} opacity={0.6} brightness={60} mixBlendMode="normal" className="hover:scale-105 transition-transform">
                            <div className="flex items-center justify-center py-2 px-4 w-full h-full font-mono text-xs sm:text-sm text-white">
                              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
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
