"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { getAllPosts, getPostsBySeries, type Post } from "@/lib/posts"
import { Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

function BlogContent() {
  const searchParams = useSearchParams()
  const series = searchParams.get("series") as "java" | "javascript" | null
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const t = translations[language] || translations.vi
  const posts = series ? getPostsBySeries(series) : getAllPosts()

  const getPostTitle = (post: Post) => {
    return language === "vi" ? post.title : post.titleEn
  }

  const getPostExcerpt = (post: Post) => {
    return language === "vi" ? post.excerpt : post.excerptEn
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${month}/${year}`
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-12 md:py-20 px-6 md:px-8 lg:px-12">
        {/* Background particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/#blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Quay lại blog
              </Button>
            </Link>
          </div>

          {/* Header Section */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {t?.blog?.title || "Blog"}
                </h1>
                <p className="text-gray-400 text-lg">{t?.blog?.subtitle || "Khám phá các bài viết"}</p>
              </div>
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="w-full md:w-80 pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
            <Link
              href="/blog"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !series
                  ? "bg-blue-500 text-white border-2 border-blue-400"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-800 hover:border-slate-600"
              }`}
            >
              {!series && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.all || "Tất cả"}
            </Link>
            <Link
              href="/blog?series=java"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                series === "java"
                  ? "bg-blue-500 text-white border-2 border-blue-400"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-800 hover:border-slate-600"
              }`}
            >
              {series === "java" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.java || "Java"}
            </Link>
            <Link
              href="/blog?series=javascript"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                series === "javascript"
                  ? "bg-blue-500 text-white border-2 border-blue-400"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:bg-slate-800 hover:border-slate-600"
              }`}
            >
              {series === "javascript" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.javascript || "JavaScript"}
            </Link>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative block perspective-1000 no-underline"
              >
                <article className="relative h-full premium-card rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transform-3d rotate-y-5 group">
                  {/* Date and Read Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-400 text-sm">
                      {formatDate(post.date)} • {post.readTime} {t?.blog?.readTime || "phút đọc"}
                    </div>
                    {/* Category Tag */}
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        post.series === "java"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {post.series === "java" ? (t?.blog?.java || "Java") : (t?.blog?.javascript || "JavaScript")}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {getPostTitle(post)}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                    {getPostExcerpt(post)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex flex-col">
        <Navigation />
        <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-12 md:py-20 px-6 md:px-8 lg:px-12 flex items-center justify-center">
          <div className="text-white text-xl">Đang tải...</div>
        </section>
        <Footer />
      </main>
    }>
      <BlogContent />
    </Suspense>
  )
}
