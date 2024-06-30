"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()

  return (
    <div
      onClick={() => router.back()}
      className="flex w-max cursor-pointer items-center gap-2 pb-4 pt-10 text-paragraph transition-all duration-300 hover:text-primary"
    >
      <ArrowLeft className="size-5 text-inherit" />
      <span className="text-xl text-inherit">back</span>
    </div>
  )
}
