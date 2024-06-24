import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) => {
  return (
    <div className={cn("max-w-7xl w-full mx-auto", className)}>{children}</div>
  )
}

export default MaxWidthWrapper
