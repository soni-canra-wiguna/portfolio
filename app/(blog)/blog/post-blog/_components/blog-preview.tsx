import { FormBlogPostProps } from "@/types"
import { Monitor } from "lucide-react"
import "highlight.js/styles/github-dark.css"
import { Smartphone, Tablet } from "lucide-react"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import CustomTooltip from "@/components/custom-tooltip"
import RenderArticle from "@/components/render-article"

export default function BlogPreview({ form }: FormBlogPostProps) {
  const [hasResponsiveSize, setHasResponsiveSize] = useState("480px")

  const title = form.watch("title")
  const image = form.watch("image")
  const category = form.watch("category")
  const content = form.watch("content")
  const published = form.watch("published")
  const createdAt = new Date("2024-06-27T08:38:47.321Z")

  return (
    <div
      style={{ width: hasResponsiveSize }}
      className={`scrollY mx-auto h-full overflow-y-auto border border-input p-4 transition-all duration-500`}
    >
      <RenderArticle
        title={title}
        image={image}
        category={category}
        content={content}
        published={published}
        createdAt={createdAt}
      />
      <ResponsiveToggle
        hasResponsiveSize={hasResponsiveSize}
        setHasResponsiveSize={setHasResponsiveSize}
      />
    </div>
  )
}

interface ResponsiveToggleProps {
  hasResponsiveSize: string
  setHasResponsiveSize: (hasResponsiveSize: any) => void
}

const ResponsiveToggle = ({
  hasResponsiveSize,
  setHasResponsiveSize,
}: ResponsiveToggleProps) => {
  const isPhone = hasResponsiveSize === "480px"
  const isTablet = hasResponsiveSize === "768px"
  const isMonitor = hasResponsiveSize === "1028px"

  const handlePressChange = (screenSize: string) => {
    setHasResponsiveSize((prev: any) =>
      prev === screenSize ? "480px" : screenSize,
    )
  }

  return (
    <div className="absolute right-6 top-6 z-20 flex flex-col items-center gap-2">
      <div className="flex size-max w-max items-center rounded-lg border border-secondary/50 bg-input px-2 py-0">
        {/* <CustomTooltip title="phone: 480px"> */}
        <Toggle
          className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
          size="default"
          pressed={isPhone}
          onPressedChange={() => handlePressChange("480px")}
        >
          <Smartphone className="h-4 w-4" />
        </Toggle>
        {/* </CustomTooltip> */}
        {/* <CustomTooltip title="tablet: 768px"> */}
        <Toggle
          className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
          size="default"
          pressed={isTablet}
          onPressedChange={() => handlePressChange("768px")}
        >
          <Tablet className="h-4 w-4" />
        </Toggle>
        {/* </CustomTooltip> */}
        {/* <CustomTooltip title="monitor: 1280px"> */}
        <Toggle
          className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
          size="default"
          pressed={isMonitor}
          onPressedChange={() => handlePressChange("1280px")}
        >
          <Monitor className="h-4 w-4" />
        </Toggle>
        {/* </CustomTooltip> */}
      </div>
      <p className="text-sm text-secondary">
        width screen: <span className="text-primary">{hasResponsiveSize}</span>
      </p>
    </div>
  )
}
