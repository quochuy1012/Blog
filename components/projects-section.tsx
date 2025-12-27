"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { getAllProjects, type Project } from "@/lib/projects"
import { getImagePath } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { Laptop } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ProjectsSection() {
  const { language, mounted } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const t = translations[language] || translations.vi

  const projects = getAllProjects()

  useEffect(() => {
    if (!mounted) return
    const container = containerRef.current
    if (!container) return

    const createSparkle = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        const sparkle = document.createElement("div")
        sparkle.style.position = "absolute"
        sparkle.style.left = `${e.clientX}px`
        sparkle.style.top = `${e.clientY}px`
        sparkle.style.width = "10px"
        sparkle.style.height = "10px"
        sparkle.style.background = `radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)`
        sparkle.style.borderRadius = "50%"
        sparkle.style.pointerEvents = "none"
        sparkle.style.boxShadow = "0 0 20px rgba(59, 130, 246, 0.9)"
        sparkle.style.zIndex = "1000"

        if (typeof document !== "undefined" && document.body) {
          document.body.appendChild(sparkle)
        }

        let opacity = 1
        const startTime = Date.now()

        const animate = () => {
          const elapsed = Date.now() - startTime
          opacity = 1 - elapsed / 600

          if (opacity <= 0) {
            sparkle.remove()
            return
          }

          sparkle.style.opacity = String(opacity)
          sparkle.style.transform = `scale(${1 + elapsed / 200})`

          requestAnimationFrame(animate)
        }

        animate()
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      createSparkle(e)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [mounted])

  if (!mounted || projects.length === 0) return null

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-background via-background to-background py-20 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-gradient animate-fadeIn">
          {t?.projects?.title || "Dự Án Gần Đây"}
        </h2>
        <p className="text-center text-muted-foreground mb-16 md:mb-24 text-lg md:text-xl">
          {t?.projects?.subtitle || "Những dự án mới nhất mà tôi đã phát triển"}
        </p>

        <div className="flex justify-center">
          <div className={`grid gap-8 md:gap-10 ${projects.length === 1 ? 'grid-cols-1 max-w-2xl' : projects.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-2 lg:grid-cols-3 max-w-5xl'}`}>
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} direction="up" delay={index * 150}>
                <div
                  className="group relative perspective-1000"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-blue-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl animate-glow"></div>

                  <div className="relative border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 h-full flex flex-col bg-card hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 transform-3d rotate-y-5 group">
                    {/* Top Section - Background Image */}
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 dark:from-slate-800/50 dark:to-slate-900/50">
                      {project.imageUrl ? (
                        <img
                          src={getImagePath(project.imageUrl)}
                          alt={language === "vi" ? project.title : project.titleEn}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="flex gap-4 opacity-40 group-hover:opacity-60 transition-opacity">
                            <Globe size={32} className="text-blue-400" />
                            <Laptop size={32} className="text-blue-400" />
                          </div>
                        </div>
                      )}
                      {/* Overlay gradient để text dễ đọc hơn */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Bottom Section - Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col">
                      {/* Category Tag */}
                      {project.category && (
                        <span className="inline-block px-3 py-1 rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4 w-fit">
                          {language === "vi" ? project.category : (project.categoryEn || project.category)}
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent/80 transition-colors duration-300">
                        {language === "vi" ? project.title : project.titleEn}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm md:text-base mb-6 flex-grow leading-relaxed">
                        {language === "vi" ? project.description : project.descriptionEn}
                      </p>

                      {/* Languages/Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>

                      {/* Buttons Section - Only show GitHub button if project has githubUrl */}
                      {project.githubUrl && (
                        <div className="flex items-center justify-center gap-3 mt-auto">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 px-4 py-2 bg-background/50 hover:bg-background/80 border border-border hover:border-blue-400/50 transition-all text-foreground hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium text-sm"
                          >
                            <Laptop size={18} />
                            <span>GitHub</span>
                          </a>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

