"use client"

import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { useState } from "react"
import { Mail, Phone, Github, Send, MessageSquare, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function ContactSection() {
  const { language, mounted } = useLanguage()
  const t = translations[language] || translations.vi
  const about = (t?.about || translations.vi.about) as any
  const contact = t?.contact || {}
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission (you can integrate with a backend service later)
    // For now, we'll use mailto link as a fallback
    const mailtoLink = `mailto:${about?.email || "nguyenphamquochuy1012@gmail.com"}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    
    // Try to open email client
    window.location.href = mailtoLink

    // Simulate delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!mounted) return null

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-background via-background to-background py-20 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden scroll-mt-20"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0}>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gradient animate-fadeIn">
              {contact.title || "Liên Hệ"}
            </h2>
            <p className="text-center text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {contact.subtitle || "Hãy gửi tin nhắn cho tôi nếu bạn có bất kỳ câu hỏi nào"}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <ScrollAnimation direction="up" delay={100}>
            <div className="bg-card rounded-2xl p-8 md:p-10 relative overflow-hidden group border border-border shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-400/30 shadow-md shadow-purple-500/20 hover:shadow-purple-400/40 transition-all duration-300">
                    <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {contact.getInTouch || "Liên hệ với tôi"}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {contact.name || "Họ và tên"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={contact.namePlaceholder || "Nhập họ và tên của bạn"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {contact.email || "Email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={contact.emailPlaceholder || "Nhập email của bạn"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      {contact.subject || "Chủ đề"}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={contact.subjectPlaceholder || "Nhập chủ đề"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {contact.message || "Tin nhắn"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={contact.messagePlaceholder || "Nhập tin nhắn của bạn..."}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-600 dark:text-green-400 text-sm">
                      {contact.success || "Tin nhắn đã được gửi thành công!"}
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400 text-sm">
                      {contact.error || "Có lỗi xảy ra, vui lòng thử lại."}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{contact.sending || "Đang gửi..."}</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>{contact.sendButton || "Gửi tin nhắn"}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation direction="up" delay={200}>
            <div className="bg-card rounded-2xl p-8 md:p-10 relative overflow-hidden group border border-border shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-400/30 shadow-md shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {contact.contactInfo || "Thông tin liên hệ"}
                  </h3>
                </div>

                <div className="space-y-6">
                  <a 
                    href={`mailto:${about?.email || ""}`} 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all border border-border hover:border-purple-400/50 group/item no-underline"
                  >
                    <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-400/30">
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="text-foreground group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors font-medium">
                        {about?.email || ""}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${about?.phone || ""}`} 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all border border-border hover:border-pink-400/50 group/item no-underline"
                  >
                    <div className="p-3 rounded-lg bg-pink-500/20 border border-pink-400/30">
                      <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="text-foreground group-hover/item:text-pink-600 dark:group-hover/item:text-pink-400 transition-colors font-medium">
                        {about?.phone || ""}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={about?.github || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all border border-border hover:border-cyan-400/50 group/item no-underline"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-400/30">
                      <Github className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                      <p className="text-foreground group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors font-medium">
                        github.com/quochuy1012
                      </p>
                    </div>
                  </a>

                  <a 
                    href={about?.facebook || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all border border-border hover:border-blue-400/50 group/item no-underline"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-400/30">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Facebook</p>
                      <p className="text-foreground group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors font-medium">
                        Nguyễn Phạm Quốc Huy
                      </p>
                    </div>
                  </a>

                  <a 
                    href={about?.instagram || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-all border border-border hover:border-pink-400/50 group/item no-underline"
                  >
                    <div className="p-3 rounded-lg bg-pink-500/20 border border-pink-400/30">
                      <svg className="w-5 h-5 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                      <p className="text-foreground group-hover/item:text-pink-600 dark:group-hover/item:text-pink-400 transition-colors font-medium">
                        @qqoc.hy_
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

