"use client"

import Link from "next/link"
import { Github, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export default function Footer() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const t = translations[language] || translations.vi
  const about = (t?.about || translations.vi.about) as any

  return (
    <footer className="relative border-t bg-background mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Personal Info - Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <h3 className="text-2xl font-bold text-foreground">{t?.nav?.authorName || "Nguyễn Phạm Quốc Huy"}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{t?.about?.role || "BA (Business Analyst)"}</p>
          </div>

          {/* Links - Column 2 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400">{t?.footer?.links || "Liên kết"}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  {t?.nav?.home || "Trang chủ"}
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  {t?.nav?.blog || "Blog"}
                </Link>
              </li>
              <li>
                <Link href="/#certificates" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  {t?.nav?.certificates || "Chứng chỉ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Column 3 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-purple-600 dark:text-purple-400">{t?.footer?.contact || "Liên hệ"}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${about.email}`} 
                  className="flex items-center gap-2 text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                >
                  <Mail size={16} />
                  {about.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${about.phone}`} 
                  className="flex items-center gap-2 text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                >
                  <Phone size={16} />
                  {about.phone}
                </a>
              </li>
              <li>
                <a 
                  href={about.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                >
                  <Github size={16} />
                  github.com/quochuy1012
                </a>
              </li>
              <li>
                <a 
                  href={about.facebook || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Nguyễn Phạm Quốc Huy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
