import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { BlogPostContent } from "@/components/blog-post-content"
import { notFound } from "next/navigation"

// Generate static params for static export
export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}

