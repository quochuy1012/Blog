"use client"

import { useEffect, useState } from "react"
import { CodeBlock } from "./code-block"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="prose prose-lg dark:prose-invert max-w-none">{content}</div>
  }

  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    const lines = text.split("\n")
    const elements: JSX.Element[] = []
    let currentCodeBlock: string[] = []
    let currentCodeLanguage = ""
    let inCodeBlock = false
    let inList = false
    let listItems: string[] = []
    let key = 0

    const closeList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc list-inside mb-4 space-y-1 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        )
        listItems = []
        inList = false
      }
    }

    lines.forEach((line) => {
      if (line.startsWith("```")) {
        closeList()
        if (inCodeBlock) {
          // End code block
          elements.push(
            <CodeBlock
              key={key++}
              language={currentCodeLanguage}
              code={currentCodeBlock.join("\n")}
            />
          )
          currentCodeBlock = []
          currentCodeLanguage = ""
          inCodeBlock = false
        } else {
          // Start code block
          currentCodeLanguage = line.replace("```", "").trim()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        currentCodeBlock.push(line)
        return
      }

      // Headers
      if (line.startsWith("# ")) {
        closeList()
        elements.push(
          <h1 key={key++} className="text-4xl font-bold mt-8 mb-4 text-foreground">
            {line.replace("# ", "")}
          </h1>
        )
        return
      }
      if (line.startsWith("## ")) {
        closeList()
        elements.push(
          <h2 key={key++} className="text-3xl font-bold mt-6 mb-3 text-foreground">
            {line.replace("## ", "")}
          </h2>
        )
        return
      }
      if (line.startsWith("### ")) {
        closeList()
        elements.push(
          <h3 key={key++} className="text-2xl font-bold mt-4 mb-2 text-foreground">
            {line.replace("### ", "")}
          </h3>
        )
        return
      }

      // Lists
      if (line.startsWith("- ") || line.startsWith("* ")) {
        inList = true
        let listItem = line.replace(/^[-*] /, "")
        // Process inline formatting
        listItem = listItem.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        listItem = listItem.replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')
        listItems.push(listItem)
        return
      }

      // Empty line - close list if open
      if (line.trim() === "") {
        closeList()
        return
      }

      // Regular paragraph (not a list item)
      closeList()
      
      // Process inline formatting
      let processedLine = line
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      processedLine = processedLine.replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>')

      if (processedLine.trim()) {
        elements.push(
          <p
            key={key++}
            className="mb-4 leading-relaxed text-foreground"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        )
      }
    })

    // Close any remaining list
    closeList()

    // Handle remaining code block
    if (inCodeBlock && currentCodeBlock.length > 0) {
      elements.push(
        <CodeBlock
          key={key++}
          language={currentCodeLanguage}
          code={currentCodeBlock.join("\n")}
        />
      )
    }

    return elements
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {parseMarkdown(content)}
    </div>
  )
}

