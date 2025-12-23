"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { useEffect, useRef } from "react"
import { Zap, GraduationCap, Target, Mail, Phone, Github, Facebook } from "lucide-react"

export default function AboutPage() {
  const { language, mounted } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const t = translations[language] || translations.vi

  useEffect(() => {
    if (!mounted) return
    const container = containerRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.style.position = "absolute"
      particle.style.width = `${Math.random() * 4 + 2}px`
      particle.style.height = particle.style.width
      particle.style.background = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.3})`
      particle.style.borderRadius = "50%"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = "-10px"
      particle.style.pointerEvents = "none"
      particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(59, 130, 246, 0.8)`

      container.appendChild(particle)

      let yPos = 0
      const duration = Math.random() * 3 + 4
      const startTime = Date.now()

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000
        const progress = elapsed / duration

        if (progress > 1) {
          particle.remove()
          return
        }

        yPos = progress * window.innerHeight
        particle.style.top = `${yPos}px`
        particle.style.opacity = String(1 - progress)

        requestAnimationFrame(animate)
      }

      animate()
    }

    const interval = setInterval(createParticle, 200)
    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) return null

  const skills = [
    { name: "C++", level: 85 },
    { name: "Java", level: 90 },
    { name: "SQL", level: 80 },
    { name: "Python", level: 88 },
    { name: "C#", level: 75 },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <section
        ref={containerRef}
        className="relative min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-20 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden"
      >
        {/* Background particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-300">{t?.about?.introduction || "Giới thiệu"}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t?.about?.title || "Về Tôi"}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t?.about?.description || "Mô tả"}
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
            {/* Projects Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
                <div className="text-white font-medium mb-1">{t?.about?.summaryProjects || "Dự Án"}</div>
                <div className="text-gray-400 text-sm">{t?.about?.summaryProjectsCount || "10+"}</div>
              </div>
            </div>

            {/* Certificates Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">3+</div>
                <div className="text-white font-medium mb-1">{t?.about?.summaryCertificates || "Chứng Chỉ"}</div>
                <div className="text-gray-400 text-sm">{t?.about?.summaryCertificatesCount || "5+"}</div>
              </div>
            </div>

            {/* University Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
                <GraduationCap className="w-8 h-8 text-white mb-3" />
                <div className="text-white font-medium mb-1">{t?.about?.summaryUniversity || "Đại Học"}</div>
                <div className="text-gray-400 text-sm">Hutech University</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Skills Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
                  <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">{t?.about?.skills || "Kỹ Năng"}</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">{t?.about?.education || "Học Vấn"}</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse" />
                      <div>
                        <div className="text-gray-400 text-sm mb-1">{t?.about?.educationUniversity || "Đại Học"}</div>
                        <div className="text-white font-semibold mb-1">
                          Hutech University - Trường Đại học Công Nghệ Thành Phố Hồ Chí Minh
                        </div>
                        <div className="text-gray-400">
                          <span className="font-medium">{t?.about?.educationMajor || "Chuyên Ngành"}:</span> Công nghệ thông tin
                        </div>
                        <div className="text-gray-400">
                          <span className="font-medium">{t?.about?.educationSpecialization || "Chuyên Sâu"}:</span> Hệ thống thông tin
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">{t?.about?.contact || "Liên Hệ"}</h2>
                </div>
                <div className="space-y-4">
                  <a
                    href="mailto:nguyenphamquochuy1012@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all group/item"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white group-hover/item:text-blue-400 transition-colors">
                        nguyenphamquochuy1012@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:0937534572"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all group/item"
                  >
                    <Phone className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-gray-400 text-sm">Phone</div>
                      <div className="text-white group-hover/item:text-blue-400 transition-colors">
                        0937534572
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/quochuy1012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all group/item"
                  >
                    <Github className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-gray-400 text-sm">GitHub</div>
                      <div className="text-white group-hover/item:text-blue-400 transition-colors">
                        github.com/quochuy1012
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/share/16bKQNdx2b/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all group/item"
                  >
                    <Facebook className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-gray-400 text-sm">Facebook</div>
                      <div className="text-white group-hover/item:text-blue-400 transition-colors">
                        Nguyễn Phạm Quốc Huy
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
