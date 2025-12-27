"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Mail, Phone, X } from "lucide-react"

interface ContactPopupProps {
  type: "github" | "email" | "phone" | "facebook" | "instagram"
  isOpen: boolean
  onClose: () => void
  position: { x: number; y: number }
}

export function ContactPopup({ type, isOpen, onClose, position }: ContactPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)

  // Không cần click outside handler vì dùng hover

  if (!isOpen) return null

  const contactInfo = {
    github: {
      label: "GITHUB.COM/QUOCHUY1012",
      url: "https://github.com/quochuy1012",
      icon: Github,
      color: "border-cyan-400",
      glow: "shadow-cyan-500/50",
    },
    email: {
      label: "NGUYENPHAMQUOCHUY1012@GMAIL.COM",
      url: "mailto:nguyenphamquochuy1012@gmail.com",
      icon: Mail,
      color: "border-purple-400",
      glow: "shadow-purple-500/50",
    },
    phone: {
      label: "0937534572",
      url: "tel:0937534572",
      icon: Phone,
      color: "border-pink-400",
      glow: "shadow-pink-500/50",
    },
    facebook: {
      label: "FACEBOOK.COM/NGUYENPHAMQUOCHUY",
      url: "https://www.facebook.com/share/16bKQNdx2b/?mibextid=wwXIfr",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "border-blue-400",
      glow: "shadow-blue-500/50",
    },
    instagram: {
      label: "INSTAGRAM.COM/QQOC.HY_",
      url: "https://www.instagram.com/qqoc.hy_/",
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "border-pink-400",
      glow: "shadow-pink-500/50",
    },
  }

  const info = contactInfo[type]
  const Icon = info.icon

  return (
    <div
      ref={popupRef}
      className="absolute z-50 animate-fadeIn pointer-events-none"
      style={{
        left: "50%",
        bottom: "100%",
        transform: "translateX(-50%)",
        marginBottom: "10px",
      }}
    >
      {/* Bubble with label */}
      <div className="relative">
        <div className="bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-400/50 shadow-xl">
          <p className="text-cyan-400 text-sm font-mono whitespace-nowrap">{info.label}</p>
        </div>
        {/* Arrow pointing down */}
        <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </div>
      </div>
    </div>
  )
}

