"use client"

import { useEffect, useRef } from "react"

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null)
  const pointsRef = useRef<Array<{ x: number; y: number; time: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      })

      // Keep only last 20 points
      if (pointsRef.current.length > 20) {
        pointsRef.current.shift()
      }

      // Remove old points
      const now = Date.now()
      pointsRef.current = pointsRef.current.filter((point) => now - point.time < 500)
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      if (!trailRef.current) return

      const now = Date.now()
      const trail = pointsRef.current
        .map((point, index) => {
          const age = now - point.time
          const opacity = Math.max(0, 1 - age / 500)
          const size = Math.max(2, 10 - age / 50)

          return `
            <div
              style="
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(59, 130, 246, ${opacity * 0.8}), rgba(6, 182, 212, ${opacity * 0.6}));
                border-radius: 50%;
                pointer-events: none;
                transform: translate(-50%, -50%);
                z-index: 9999;
                transition: all 0.1s ease-out;
              "
            />
          `
        })
        .join("")

      trailRef.current.innerHTML = trail
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <div ref={trailRef} className="fixed inset-0 pointer-events-none z-[9999]" />
}


