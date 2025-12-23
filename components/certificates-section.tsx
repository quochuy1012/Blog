"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

interface Certificate {
  id: number
  title: string
  titleEn: string
  issuer: string
  date: string
  image: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Networking Basics",
    titleEn: "Networking Basics",
    issuer: "Cisco",
    date: "Tháng 11, 2025",
    image: "/NetworkingBasicsUpdate.jpg",
  },
  {
    id: 2,
    title: "JavaScript Essentials 1",
    titleEn: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "Tháng 11, 2025",
    image: "/JavaScript_Essentials_1.jpg",
  },
  {
    id: 3,
    title: "JavaScript Essentials 2",
    titleEn: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "Tháng 11, 2025",
    image: "/JavaScript_Essentials_2.jpg",
  },
]

export function CertificatesSection() {
  const { language, mounted } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const t = translations[language] || translations.vi

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

  if (!mounted) return null

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-background via-background to-background py-20 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-gradient animate-fadeIn">
          {t.certificates.title}
        </h2>
        <p className="text-center text-muted-foreground mb-16 md:mb-24 text-lg md:text-xl">
          {t.certificates.subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {certificates.map((cert, index) => (
            <ScrollAnimation key={cert.id} direction="up" delay={index * 150}>
              <div
                onMouseEnter={() => setHoveredId(cert.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedCert(cert)}
                className="group relative cursor-pointer perspective-1000"
              >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-pink-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-xl animate-glow"></div>

              <div className="relative border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-500 h-full flex flex-col premium-card hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 transform-3d rotate-y-5 group">
                <div className="relative mb-4 overflow-hidden rounded-lg h-48 group/image">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-0 group-hover/image:opacity-100"></div>
                </div>

                <h3 className="text-lg font-bold text-accent group-hover:text-accent/80 transition-colors duration-300 flex-grow mb-2">
                  {language === "vi" ? cert.title : cert.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground/70 text-xs">{cert.date}</p>

                {hoveredId === cert.id && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-scaleIn">
                    ⭐ Verified
                  </div>
                )}
              </div>
            </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Modal for viewing certificate */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
              >
                <X size={20} className="text-foreground" />
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {language === "vi" ? selectedCert.title : selectedCert.titleEn}
                </h3>
                <p className="text-muted-foreground mb-4">{selectedCert.issuer} • {selectedCert.date}</p>
                <div className="relative w-full rounded-lg overflow-hidden border border-border">
                  <img
                    src={selectedCert.image || "/placeholder.svg"}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[70vh]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

