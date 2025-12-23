"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { language, changeLanguage, mounted } = useLanguage()

  if (!mounted) return null

  return (
    <div className="flex gap-1">
      <Button
        variant={language === "vi" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("vi")}
        className="px-2 py-1 h-8 text-xs"
      >
        <Globe size={14} className="mr-1" />
        VI
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("en")}
        className="px-2 py-1 h-8 text-xs"
      >
        <Globe size={14} className="mr-1" />
        EN
      </Button>
    </div>
  )
}
