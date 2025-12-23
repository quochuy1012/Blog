"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  changeLanguage: (lang: Language) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language | null
      if (saved && (saved === "vi" || saved === "en")) {
        setLanguage(saved)
      }
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

