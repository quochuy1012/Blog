"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import LanguageSwitcher from "@/components/language-switcher"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, mounted } = useLanguage()
  const pathname = usePathname()

  if (!mounted) return null

  const t = translations[language] || translations.vi

  const menuItems = [
    { href: "/", label: t?.nav?.home || "Trang chủ" },
    { href: "/#about", label: t?.nav?.about || "Về tôi" },
    { href: "/#projects", label: t?.nav?.projects || "Dự án" },
    { href: "/#blog", label: t?.nav?.blog || "Blog" },
    { href: "/#certificates", label: t?.nav?.certificates || "Chứng chỉ" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      if (typeof window === "undefined" || typeof document === "undefined") return
      
      const id = href.replace("/#", "")
      
      // Nếu đang ở trang khác (không phải trang chủ), điều hướng về trang chủ với hash
      if (pathname !== "/") {
        window.location.href = `/${href.replace("/", "")}`
        return
      }
      
      // Nếu đang ở trang chủ, scroll đến section
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        setIsMobileMenuOpen(false)
      }
    } else if (href === "/") {
      // Nếu click vào trang chủ từ trang khác
      if (pathname !== "/") {
        e.preventDefault()
        window.location.href = "/"
      }
    }
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    if (href.startsWith("/#")) {
      if (typeof window === "undefined") return false
      const hash = window.location.hash
      return hash === href.replace("/", "")
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group magnetic">
            <span className="text-gradient font-bold text-xl md:text-2xl hidden sm:inline hover:scale-110 transition-transform duration-300 animate-glow">
              {t?.nav?.authorName || "Nguyễn Phạm Quốc Huy"}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 flex items-center gap-2">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 flex flex-col gap-2 border-t pt-3 animate-slideInDown">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href)
                  setIsMobileMenuOpen(false)
                }}
                className={`px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-foreground hover:bg-accent/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
