"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Zap, Star } from "lucide-react"

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createFloatingElement = () => {
      const icons = [Sparkles, Zap, Star]
      const Icon = icons[Math.floor(Math.random() * icons.length)]
      const element = document.createElement("div")
      element.className = "absolute pointer-events-none"
      element.style.left = `${Math.random() * 100}%`
      element.style.top = `${Math.random() * 100}%`
      element.style.opacity = "0"
      element.style.transition = "all 3s ease-in-out"

      const iconSize = Math.random() * 20 + 10
      const colors = [
        "rgba(59, 130, 246, 0.6)",
        "rgba(6, 182, 212, 0.6)",
        "rgba(147, 51, 234, 0.6)",
      ]
      const color = colors[Math.floor(Math.random() * colors.length)]

      element.innerHTML = `
        <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      `

      container.appendChild(element)

      // Animate in
      setTimeout(() => {
        element.style.opacity = "1"
        element.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 360}deg)`
      }, 10)

      // Animate out and remove
      setTimeout(() => {
        element.style.opacity = "0"
        element.style.transform += " scale(0)"
        setTimeout(() => element.remove(), 3000)
      }, 5000)
    }

    const interval = setInterval(createFloatingElement, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ overflow: "hidden" }}
    />
  )
}


