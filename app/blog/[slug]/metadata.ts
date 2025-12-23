import { getPostBySlug } from "@/lib/posts"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Nguyễn Phạm Quốc Huy Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}



