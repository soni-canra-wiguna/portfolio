"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function BackButton() {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
      variant="outline"
      size="sm"
      className="mb-2 mt-6 md:mb-4 md:mt-10"
    >
      <ArrowLeft className="mr-2 size-4" />
      <span className="">back</span>
    </Button>
  )
}
