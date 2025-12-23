"use client"

import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { getAllPosts, type Post } from "@/lib/posts"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export function BlogSection() {
  const { language, mounted } = useLanguage()

  if (!mounted) return null

  const t = translations[language] || translations.vi
  const posts = getAllPosts().slice(0, 6) // Hiển thị 6 bài đầu tiên

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{t?.blog?.title || "Blog"}</h2>
          <p className="text-muted-foreground text-lg">{t?.blog?.subtitle || "Khám phá các bài viết"}</p>
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
                  <div className="text-gray-400 dark:text-gray-500 text-sm">
                    {formatDate(post.date)} • {post.readTime} {t?.blog?.readTime || "phút đọc"}
                  </div>
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

                <h3 className="text-xl md:text-2xl font-bold text-white dark:text-foreground mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {getPostTitle(post)}
                </h3>

                <p className="text-gray-400 dark:text-muted-foreground text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                  {getPostExcerpt(post)}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-400 transition-colors"
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

