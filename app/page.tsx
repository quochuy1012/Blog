"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ContactSection } from "@/components/contact-section"
import { InteractiveParticles } from "@/components/interactive-particles"
import { CursorTrail } from "@/components/cursor-trail"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      <InteractiveParticles />
      <CursorTrail />
      <FloatingElements />
      <Navigation />
      <Hero onGetStarted={() => {}} />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
