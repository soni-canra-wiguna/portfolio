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
import TextEditor from "@/components/text-editor"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import { LinkPreview } from "@/components/link-preview"

export default function Home() {
  return (
    <MaxWidthWrapper className="mx-auto min-h-screen w-full max-w-3xl px-4 py-20 sm:px-6 sm:py-40 md:px-8">
      <div className="mb-20 flex w-full flex-col items-center text-paragraph md:mb-40">
        <h1 className="mb-2 text-center text-xl font-semibold capitalize tracking-wider text-white sm:text-3xl">
          soni canra wiguna (19 tahun)
        </h1>
        <p className="mb-4 text-center">
          <a
            href="https://wa.me/083822462241"
            target="_blank"
            className="font-medium hover:text-primary"
          >
            083822462241
          </a>{" "}
          <span className="mx-3">|</span>{" "}
          <a
            target="_blank"
            href="mailto:sonicandra0511@gmail.com"
            className="font-medium hover:text-primary"
          >
            sonicandra0511@gmail.com
          </a>
        </p>
        <p className="mb-10 max-w-xl text-center">
          seorang <span className="font-medium text-primary">Fullstack</span>{" "}
          Developer dengan pengalaman 2 tahun dan telah menyelesaikan
          beberapa(6) project, mulai dari{" "}
          <LinkPreview
            url="https://lazora.vercel.app"
            imageSrc="/projects/lazora.png"
            isStatic
            className="text-primary hover:underline hover:decoration-dotted hover:underline-offset-2"
          >
            platform e-commerce
          </LinkPreview>
          , situs{" "}
          <LinkPreview
            url="https://sman1mandirancan.vercel.app"
            imageSrc="/projects/smanman.png"
            isStatic
            className="text-primary hover:underline hover:decoration-dotted hover:underline-offset-2"
          >
            web sekolah
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://bisaujian.vercel.app"
            imageSrc="/projects/bisaujian.png"
            isStatic
            className="text-primary hover:underline hover:decoration-dotted hover:underline-offset-2"
          >
            aplikasi ujian online
          </LinkPreview>
          , dsb.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/soni-canra-wiguna" target="_blank">
            <Button size="lg" variant="secondary">
              Github <Github className="ml-2 size-4" />
            </Button>
          </a>
          <Link href="/blog">
            <Button size="lg">
              Blog <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mb-20 flex w-full flex-col items-center gap-10 md:mb-40">
        <h3 className="flex items-center text-lg font-medium text-white">
          <span className="h-px w-10 bg-gradient-to-l from-primary" />
          <span className="mx-3 capitalize text-white">tech stack</span>
          <span className="h-px w-10 bg-gradient-to-r from-primary" />
        </h3>
        <TechStackSection />
      </div>
      <div className="flex w-full flex-col items-center gap-10">
        <h3 className="flex items-center text-lg font-medium text-white">
          <span className="h-px w-10 bg-gradient-to-l from-primary" />
          <span className="mx-3 capitalize text-white">Projects</span>
          <span className="h-px w-10 bg-gradient-to-r from-primary" />
        </h3>
        <ProjectSection />
      </div>
    </MaxWidthWrapper>
  )
}
