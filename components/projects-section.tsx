"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { getAllProjects, type Project } from "@/lib/projects"
import { useEffect, useRef, useState } from "react"
import { X, Github, ExternalLink, Play } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ProjectsSection() {
  const { language, mounted } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} direction="up" delay={index * 150}>
              <div
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer perspective-1000"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-blue-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl animate-glow"></div>

                <div className="relative border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-500 h-full flex flex-col bg-card hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 transform-3d rotate-y-5 group">
                  {/* Video/Image Preview */}
                  <div className="relative mb-4 overflow-hidden rounded-lg h-48 group/image bg-muted">
                    {project.videoUrl ? (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20">
                          <Play size={48} className="text-blue-600 dark:text-blue-400 opacity-70" />
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/10 transition-colors"></div>
                      </div>
                    ) : project.imageUrl ? (
                      <>
                        <img
                          src={project.imageUrl}
                          alt={language === "vi" ? project.title : project.titleEn}
                          className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-0 group-hover/image:opacity-100"></div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Play size={48} className="text-blue-400 opacity-50" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent/80 transition-colors duration-300 flex-grow mb-2">
                    {language === "vi" ? project.title : project.titleEn}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {language === "vi" ? project.description : project.descriptionEn}
                  </p>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <Github size={16} />
                    <span>{t?.projects?.viewOnGithub || "Xem trên GitHub"}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>

                  {hoveredId === project.id && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-scaleIn">
                      ⭐ Featured
                    </div>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Modal for viewing project details */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
              >
                <X size={20} className="text-foreground" />
              </button>
              <div className="p-6 overflow-y-auto max-h-[90vh]">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                  {language === "vi" ? selectedProject.title : selectedProject.titleEn}
                </h3>
                <p className="text-muted-foreground mb-4">{selectedProject.date}</p>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  {language === "vi" ? selectedProject.description : selectedProject.descriptionEn}
                </p>

                {/* Video/Image */}
                {(selectedProject.videoUrl || selectedProject.imageUrl) && (
                  <div className="relative w-full rounded-lg overflow-hidden border border-border mb-6 bg-muted">
                    {selectedProject.videoUrl ? (
                      <div className="relative w-full aspect-video flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20">
                        <a
                          href={selectedProject.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-3 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/video"
                        >
                          <div className="w-20 h-20 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center group-hover/video:scale-110 transition-transform">
                            <Play size={32} className="text-white ml-1" fill="white" />
                          </div>
                          <span className="font-medium">{t?.projects?.watchDemo || "Xem video demo"}</span>
                        </a>
                      </div>
                    ) : (
                      <img
                        src={selectedProject.imageUrl}
                        alt={language === "vi" ? selectedProject.title : selectedProject.titleEn}
                        className="w-full h-auto object-contain max-h-[70vh]"
                        loading="eager"
                      />
                    )}
                  </div>
                )}

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    {t?.projects?.technologies || "Công nghệ sử dụng"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  <Github size={20} />
                  <span>{t?.projects?.viewOnGithub || "Xem trên GitHub"}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

