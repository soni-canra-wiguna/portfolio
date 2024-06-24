import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react"

interface CustomTooltipType {
  children: React.ReactNode
  title: string
  side?: "top" | "left" | "right" | "bottom"
  className?: string
}

const CustomTooltip = ({
  children,
  title,
  side = "top",
  className,
}: CustomTooltipType) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} className={className}>
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CustomTooltip
