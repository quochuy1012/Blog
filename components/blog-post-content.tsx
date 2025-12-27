"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { type Post } from "@/lib/posts"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface BlogPostContentProps {
  post: Post
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { language, mounted } = useLanguage()

  if (!mounted) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <p>Đang tải...</p>
        </div>
        <Footer />
      </main>
    )
  }

  const t = translations[language] || translations.vi
  const title = language === "vi" ? post.title : post.titleEn
  const content = language === "vi" ? post.content : post.contentEn

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <article className="py-12 md:py-20 px-6 md:px-8 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-100 dark:bg-blue-500/10 hover:bg-blue-200 dark:hover:bg-blue-400/20 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-400/30 hover:border-blue-400 dark:hover:border-blue-400/50 transition-all duration-200 mb-8 font-medium shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={18} />
            Quay lại Blog
          </Link>

          <header className="mb-8">
            <div className="mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  post.series === "java"
                    ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    : post.series === "javascript"
                    ? "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                    : post.series === "sql"
                    ? "bg-green-500/20 text-green-600 dark:text-green-400"
                    : post.series === "python"
                    ? "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                    : post.series === "csharp"
                    ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                    : "bg-pink-500/20 text-pink-600 dark:text-pink-400"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(
                    language === "vi" ? "vi-VN" : "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>
                  {post.readTime} {t?.blog?.readTime || "phút đọc"}
                </span>
              </div>
            </div>
          </header>

          <MarkdownRenderer content={content} />
        </div>
      </article>
      <Footer />
    </main>
  )
}

