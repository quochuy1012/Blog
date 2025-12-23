"use client"

import { useState } from "react"
import { Github, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { ContactPopup } from "@/components/contact-popup"

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [popupState, setPopupState] = useState<{
    type: "github" | "email" | "phone" | "facebook" | null
    position: { x: number; y: number }
  }>({ type: null, position: { x: 0, y: 0 } })
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const t = translations[language] || translations.vi
  const about = t?.about || translations.vi.about

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32 relative z-10 w-full">
        {/* Centered Layout */}
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Profile Image - Centered with Glow */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 group-hover:border-blue-400 group-hover:shadow-blue-400/70 transition-all duration-500">
              <img
                src="/qhyy(2).jpg"
                alt={about?.name || "Profile"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              {about?.name || "Nguyễn Phạm Quốc Huy"}
            </h1>
            
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:bg-blue-500/30 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-sm font-medium text-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">{t?.hero?.role || "BA (Business Analyst)"}</span>
            </div>

            {/* Title */}
            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl pt-2">
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{t?.hero?.titleLine1 || "TINH THÔNG"}</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                {t?.hero?.titleLine2 || "TRÍ TUỆ"}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto pt-4 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
              {t?.hero?.subtitle || "Khám phá những kiến thức sâu sắc về lập trình mạng"}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <div
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setPopupState({
                    type: "github",
                    position: { x: rect.left + rect.width / 2, y: rect.top },
                  })
                }}
                onMouseLeave={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                className="relative"
              >
                <a
                  href="https://github.com/quochuy1012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/50 hover:scale-110"
                >
                  <Github size={20} className="text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                </a>
                {popupState.type === "github" && (
                  <ContactPopup
                    type="github"
                    isOpen={true}
                    onClose={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                    position={popupState.position}
                  />
                )}
              </div>
              
              <div
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setPopupState({
                    type: "email",
                    position: { x: rect.left + rect.width / 2, y: rect.top },
                  })
                }}
                onMouseLeave={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                className="relative"
              >
                <a
                  href="mailto:nguyenphamquochuy1012@gmail.com"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-400/50 hover:scale-110"
                >
                  <Mail size={20} className="text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                </a>
                {popupState.type === "email" && (
                  <ContactPopup
                    type="email"
                    isOpen={true}
                    onClose={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                    position={popupState.position}
                  />
                )}
              </div>
              
              <div
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setPopupState({
                    type: "phone",
                    position: { x: rect.left + rect.width / 2, y: rect.top },
                  })
                }}
                onMouseLeave={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                className="relative"
              >
                <a
                  href={`tel:${about?.phone || ""}`}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 hover:scale-110"
                >
                  <Phone size={20} className="text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                </a>
                {popupState.type === "phone" && (
                  <ContactPopup
                    type="phone"
                    isOpen={true}
                    onClose={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                    position={popupState.position}
                  />
                )}
              </div>
              
              <div
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  setPopupState({
                    type: "facebook",
                    position: { x: rect.left + rect.width / 2, y: rect.top },
                  })
                }}
                onMouseLeave={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                className="relative"
              >
                <a
                  href={about?.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/50 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {popupState.type === "facebook" && (
                  <ContactPopup
                    type="facebook"
                    isOpen={true}
                    onClose={() => setPopupState({ type: null, position: { x: 0, y: 0 } })}
                    position={popupState.position}
                  />
                )}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
