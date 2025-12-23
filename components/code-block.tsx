"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Simple code block without syntax highlighting to avoid module issues
  // You can enhance this later with a working syntax highlighter
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-border">
      <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
        <span className="text-xs font-mono text-muted-foreground">{language}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code)
          }}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Copy
        </button>
      </div>
      <pre className="bg-slate-900 dark:bg-slate-950 p-4 overflow-x-auto">
        <code className={`language-${language} text-sm text-slate-50 dark:text-slate-100 font-mono leading-relaxed whitespace-pre`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

