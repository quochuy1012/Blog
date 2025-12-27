"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { getAllPosts, getPostsBySeries, type Post } from "@/lib/posts"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function BlogSection() {
  const { language, mounted } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSeries, setSelectedSeries] = useState<"java" | "javascript" | "sql" | "python" | "csharp" | "entertainment" | null>(null)

  if (!mounted) return null

  const t = translations[language] || translations.vi
  const allPosts = getAllPosts()
  
  // Filter posts based on selected series
  let filteredBySeries = selectedSeries ? getPostsBySeries(selectedSeries) : allPosts
  
  // Filter posts based on search query
  const filteredPosts = searchQuery.trim() === ""
    ? filteredBySeries.slice(0, 6) // Hiển thị 6 bài đầu tiên nếu không có tìm kiếm
    : filteredBySeries.filter((post) => {
        const title = language === "vi" ? post.title : post.titleEn
        const excerpt = language === "vi" ? post.excerpt : post.excerptEn
        const searchLower = searchQuery.toLowerCase()
        return (
          title.toLowerCase().includes(searchLower) ||
          excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        )
      }).slice(0, 6)
  
  const posts = filteredPosts

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
    <section id="blog" className="py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{t?.blog?.title || "Blog"}</h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">{t?.blog?.subtitle || "Chia sẻ kiến thức"}</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === "vi" ? "Tìm kiếm bài viết..." : "Search posts..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedSeries(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !selectedSeries
                  ? "bg-blue-500 text-white border-2 border-blue-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {!selectedSeries && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.all || "Tất cả"}
            </button>
            <button
              onClick={() => setSelectedSeries("java")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedSeries === "java"
                  ? "bg-blue-500 text-white border-2 border-blue-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {selectedSeries === "java" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.java || "Java"}
            </button>
            <button
              onClick={() => setSelectedSeries("javascript")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedSeries === "javascript"
                  ? "bg-yellow-500 text-white border-2 border-yellow-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {selectedSeries === "javascript" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.javascript || "JavaScript"}
            </button>
            <button
              onClick={() => setSelectedSeries("sql")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedSeries === "sql"
                  ? "bg-green-500 text-white border-2 border-green-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {selectedSeries === "sql" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.sql || "SQL"}
            </button>
            <button
              onClick={() => setSelectedSeries("python")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedSeries === "python"
                  ? "bg-cyan-500 text-white border-2 border-cyan-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {selectedSeries === "python" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.python || "Python"}
            </button>
            <button
              onClick={() => setSelectedSeries("csharp")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedSeries === "csharp"
                  ? "bg-purple-500 text-white border-2 border-purple-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {selectedSeries === "csharp" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.csharp || "C#"}
            </button>
            <button
              onClick={() => setSelectedSeries("entertainment")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedSeries === "entertainment"
                  ? "bg-pink-500 text-white border-2 border-pink-400"
                  : "bg-card text-muted-foreground border border-border hover:bg-accent/10 hover:text-foreground"
              }`}
            >
              {selectedSeries === "entertainment" && <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>}
              {t?.blog?.entertainment || "Giải trí"}
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {posts.map((post, index) => (
            <ScrollAnimation key={post.id} direction="up" delay={index * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block perspective-1000 no-underline"
              >
                <article className="relative h-full premium-card rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transform-3d rotate-y-5 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-muted-foreground text-sm">
                    {formatDate(post.date)} • {post.readTime} {t?.blog?.readTime || "phút đọc"}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      post.series === "java"
                        ? "bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                        : post.series === "javascript"
                        ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30"
                        : post.series === "sql"
                        ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
                        : post.series === "python"
                        ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                        : post.series === "csharp"
                        ? "bg-purple-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30"
                        : "bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-500/30"
                    }`}
                  >
                    {post.series === "java"
                      ? (t?.blog?.java || "Java")
                      : post.series === "javascript"
                      ? (t?.blog?.javascript || "JavaScript")
                      : post.series === "sql"
                      ? (t?.blog?.sql || "SQL")
                      : post.series === "python"
                      ? (t?.blog?.python || "Python")
                      : post.series === "csharp"
                      ? (t?.blog?.csharp || "C#")
                      : (t?.blog?.entertainment || "Giải trí")}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {getPostTitle(post)}
                </h3>

                <p className="text-muted-foreground text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                  {getPostExcerpt(post)}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </article>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link href="/blog">
              Xem tất cả bài viết <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

