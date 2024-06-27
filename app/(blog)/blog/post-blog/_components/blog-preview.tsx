import { Button } from "@/components/ui/button"
import { FormBlogPostProps } from "@/types"
import "highlight.js/styles/github-dark.css"
import parse from "html-react-parser"
import { Smartphone, Tablet } from "lucide-react"
import { useState } from "react"

export default function BlogPreview({ form }: FormBlogPostProps) {
  const [hasResponsiveSize, setHasResposiveSize] = useState("480px")
  // phone: 480px , tablet: 768px, laptop: 1280px

  return (
    <div
      style={{ width: hasResponsiveSize }}
      className={`scrollY mx-auto h-full overflow-y-auto border border-input p-4 transition-all duration-500`}
    >
      <h1 className="text-balance text-4xl font-medium text-white">
        {form.watch("title")}
      </h1>
      <p>{form.watch("category")}</p>
      <br />
      <RenderContent>{parse(form.watch("content"))}</RenderContent>
      {/* button responsive */}
      <div className="absolute bottom-10 left-1/2 flex size-max -translate-x-1/2 items-center gap-2 rounded-lg bg-input p-1">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setHasResposiveSize("480px")}
        >
          <Smartphone className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setHasResposiveSize("768px")}
        >
          <Tablet className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const RenderContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-headings:text-white prose-p:overflow-y-auto prose-p:text-white prose-a:cursor-pointer prose-a:text-primary prose-a:no-underline prose-strong:text-white prose-pre:overflow-x-auto prose-pre:bg-input prose-li:text-primary prose-li:marker:text-primary">
      {children}
    </div>
  )
}
