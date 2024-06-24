import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import nextIcon from "@/public/nextjs-13.svg"
import TechStackSection from "@/components/tech-stack-section"
import prismaormIcon from "@/public/prisma-orm.svg"
import MaxWidthWrapper from "@/components/max-width-wrapper"
import { ProjectSection } from "@/components/project-section"

export default function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col min-h-screen">
      <Card className="grid grid-cols-2 border-2 rounded-[60px] gap-10 w-full h-[600px] my-20 shadow-xl hover:bg-border transition-all">
        {/* <div className="p-4 bg-blue-400 w-full h-full flex flex-col gap-3"></div> */}
        <div>image section</div>
      </Card>
      <TechStackSection />
      <ProjectSection />
    </MaxWidthWrapper>
  )
}
