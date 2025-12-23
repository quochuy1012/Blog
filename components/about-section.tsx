"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { getAllPosts } from "@/lib/posts"
import { Mail, Phone, Github, GraduationCap, Zap, Target, User, Briefcase, Award, BookOpen } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function AboutSection() {
  const { language, mounted } = useLanguage()
  const t = translations[language] || translations.vi
  const about = (t?.about || translations.vi.about) as any
  const blogPostsCount = getAllPosts().length

  const handleScrollToEducation = () => {
    if (typeof window === "undefined" || typeof document === "undefined") return
    const educationElement = document.getElementById("education")
    if (educationElement) {
      educationElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleScrollToCertificates = () => {
    if (typeof window === "undefined" || typeof document === "undefined") return
    const certificatesElement = document.getElementById("certificates")
    if (certificatesElement) {
      certificatesElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleScrollToBlog = () => {
    if (typeof window === "undefined" || typeof document === "undefined") return
    const blogElement = document.getElementById("blog")
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (!mounted) return null
  if (!t || !t.about) return null

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-background via-slate-900 to-background py-20 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden scroll-mt-20"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-4 border border-blue-400/30 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
            {t?.about?.introduction || "Giới thiệu"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            {t?.about?.title || "Về Tôi"}
          </h2>
        </div>

        {/* Stats Cards - Clickable */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <ScrollAnimation direction="up" delay={0}>
            <div className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-blue-500/30 border border-slate-700/50 hover:border-blue-400/50">
              <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">{about?.summaryProjectsCount || "10+"}</div>
              <div className="text-xs md:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{about?.summaryProjects || "Dự Án"}</div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={100}>
            <div 
              onClick={handleScrollToCertificates}
              className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-purple-500/30 border border-slate-700/50 hover:border-purple-400/50"
            >
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">{about?.summaryCertificatesCount || "3"}</div>
              <div className="text-xs md:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{about?.summaryCertificates || "Chứng Chỉ"}</div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={200}>
            <div 
              onClick={handleScrollToEducation}
              className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-cyan-500/30 border border-slate-700/50 hover:border-cyan-400/50"
            >
              <GraduationCap className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">{about?.summaryUniversityName || "Đại Học"}</div>
              <div className="text-xs md:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{about?.summaryUniversity || "Công Nghệ"}</div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={300}>
            <div 
              onClick={handleScrollToBlog}
              className="premium-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-green-500/30 border border-slate-700/50 hover:border-green-400/50"
            >
              <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">{blogPostsCount}</div>
              <div className="text-xs md:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">{t?.blog?.title || "Bài viết"}</div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Timeline Style Layout - Vertical */}
        <div className="space-y-8">
          
          {/* Personal Info Card */}
          <ScrollAnimation direction="up" delay={0}>
            <div className="premium-card rounded-2xl p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/30 flex-shrink-0 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:border-blue-400/50 transition-all duration-300">
                    <img
                      src="/qhyy.jpg"
                      alt={about?.name || "Profile"}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/30 shadow-md shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-300">
                        <User className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">{about?.name || "Nguyễn Phạm Quốc Huy"}</h3>
                    </div>
                    <p className="text-lg md:text-xl text-blue-400 mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] font-medium">{about?.role || "BA (Business Analyst)"}</p>
                    <p className="text-gray-200 leading-relaxed drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]">{about?.description || ""}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Skills Section */}
          <ScrollAnimation direction="up" delay={100}>
            <div className="premium-card rounded-2xl p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-400/30 shadow-md shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-300">
                    <Zap className="w-6 h-6 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">{t?.about?.skills || "Kỹ Năng"}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {about.skillList && Object.entries(about.skillList).map(([key, name]) => {
                    const progressKey = key as keyof typeof about.skillProgress
                    const progress = about.skillProgress?.[progressKey] || 0
                    return (
                      <div key={key} className="group/item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground text-base font-medium group-hover/item:text-blue-400 transition-colors">
                            {name as string}
                          </span>
                          <span className="text-muted-foreground text-sm font-semibold">{progress}%</span>
                        </div>
                        <div className="relative h-2.5 bg-slate-800/50 rounded-full overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Education & Contact Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <ScrollAnimation direction="up" delay={200}>
              <div id="education" className="premium-card rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-400/30 shadow-md shadow-purple-500/20 hover:shadow-purple-400/40 transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">{t?.about?.education || "Học Vấn"}</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="font-semibold text-lg text-foreground">{about?.educationUniversity || ""}</p>
                    <div className="pl-4 border-l-2 border-purple-400/30 space-y-2">
                      <p className="text-foreground">
                        <span className="font-medium">{about?.educationMajor || ""}:</span> {about?.educationMajorValue || ""}
                      </p>
                      <p className="text-foreground">
                        <span className="font-medium">{about?.educationSpecialization || ""}:</span> {about?.educationSpecializationValue || ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact */}
            <ScrollAnimation direction="up" delay={300}>
              <div className="premium-card rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-400/30 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300">
                      <Target className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{t?.about?.contact || "Liên Hệ"}</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href={`mailto:${about?.email || ""}`} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-blue-400/50 group/item no-underline"
                      >
                        <Mail size={18} className="text-blue-400" />
                        <span className="text-muted-foreground group-hover/item:text-blue-400 transition-colors text-sm">
                          {about?.email || ""}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href={`tel:${about?.phone || ""}`} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-purple-400/50 group/item no-underline"
                      >
                        <Phone size={18} className="text-purple-400" />
                        <span className="text-muted-foreground group-hover/item:text-purple-400 transition-colors text-sm">
                          {about?.phone || ""}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href={about?.github || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-cyan-400/50 group/item no-underline"
                      >
                        <Github size={18} className="text-cyan-400" />
                        <span className="text-muted-foreground group-hover/item:text-cyan-400 transition-colors text-sm">
                          github.com/quochuy1012
                        </span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href={about?.facebook || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-blue-400/50 group/item no-underline"
                      >
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span className="text-muted-foreground group-hover/item:text-blue-400 transition-colors text-sm">
                          Nguyễn Phạm Quốc Huy
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
