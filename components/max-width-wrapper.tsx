import { cn } from "@/lib/utils"

const MaxWidthWrapper = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-3xl px-4 sm:px-6 md:px-8", className)}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
