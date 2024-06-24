import Image from "next/image"
import MaxWidthWrapper from "./max-width-wrapper"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import wp from "@/public/wp.jpg"

const ProjectSection = () => {
  const carouselItem = Array.from({ length: 5 }, (_, i) => {
    return (
      <CarouselItem key={i} className="pl-4 sm:basis-1/2 my-10">
        <div className="border-2 shadow rounded-[40px] overflow-hidden aspect-square hover:shadow-xl transition-all">
          <div className="flex flex-col w-full h-full">
            <div className="h-8/12 w-full relative">
              <span className="w-full h-1/2 absolute left-0 bottom-0 bg-gradient-to-t from-background/50" />
              <Image
                src={wp}
                alt="image slide test"
                className="w-full h-full grayscale hover:grayscale-0 selection:bg-transparent"
              />
            </div>
            <div className="h-4/12 w-full flex flex-col p-4 selection:bg-transparent">
              <h3 className="font-googleSansBold text-2xl capitalize mb-3">
                bisa ujian
              </h3>
              <p className="text-wrap font-googleSansRegular mb-5">
                sebuah platform untuk mempermudah siswa melakukan ujian
              </p>
              <p className="text-wrap font-googleSansRegular mb-2">
                tech stack: react, next.js, prisma orm, mongodb, tailwind css,
                tanstack query, shadcn ui
              </p>
              <p className="text-wrap font-googleSansRegular">
                feature: login with RBAC, dashboard post, etc...
              </p>
            </div>
          </div>
        </div>
      </CarouselItem>
    )
  })

  return (
    <MaxWidthWrapper className="my-20">
      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
        className="relative"
      >
        <div className="w-20 h-full absolute bg-gradient-to-r from-background left-0 top-0 z-20" />
        <div className="w-20 h-full absolute bg-gradient-to-l from-background right-0 top-0 z-20" />
        <CarouselContent className="-ml-4">{carouselItem}</CarouselContent>
        <CarouselNext className="-right-6 z-30" />
        <CarouselPrevious className="-left-6 z-30" />
      </Carousel>
    </MaxWidthWrapper>
  )
}

export { ProjectSection }
