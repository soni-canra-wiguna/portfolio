import { Button } from "@/components/ui/button"
import { FormBlogPostProps } from "@/types"
import { Monitor } from "lucide-react"
import "highlight.js/styles/github-dark.css"
import parse from "html-react-parser"
import { Smartphone, Tablet } from "lucide-react"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import CustomTooltip from "@/components/custom-tooltip"

export default function BlogPreview({ form }: FormBlogPostProps) {
  const [hasResponsiveSize, setHasResponsiveSize] = useState("480px")

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
      <ResponsiveToggle
        hasResponsiveSize={hasResponsiveSize}
        setHasResponsiveSize={setHasResponsiveSize}
      />
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
    <>
      <div className="absolute bottom-8 left-1/2 flex size-max w-max -translate-x-1/2 items-center rounded-lg bg-input px-2 py-0">
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
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-secondary">
        width screen: <span className="text-primary">{hasResponsiveSize}</span>
      </p>
    </>
  )
}
