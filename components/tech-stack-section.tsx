import htmlIcon from "@/public/html.svg"
import cssIcon from "@/public/css-3.svg"
import tailwindIcon from "@/public/tailwindcss.svg"
import jsIcon from "@/public/javascript.svg"
import tsIcon from "@/public/typescript.svg"
import reactIcon from "@/public/react.svg"
import nextIcon from "@/public/nextjs-13.svg"
import mongodbIcon from "@/public/mongodb.svg"
import prismaormIcon from "@/public/prisma-orm.svg"
import reactqueryIcon from "@/public/react-query.svg"
import reduxIcon from "@/public/redux.svg"
import Image from "next/image"
import MaxWidthWrapper from "./max-width-wrapper"
import CustomTooltip from "./custom-tooltip"

const TechStackSection = () => {
  const techStackImage = [
    {
      icon: htmlIcon,
      title: "html",
      alt: "html icon",
    },
    {
      icon: cssIcon,
      title: "css",
      alt: "css icon",
    },
    {
      icon: jsIcon,
      title: "javascript",
      alt: "javascript icon",
    },
    {
      icon: tsIcon,
      title: "typescript",
      alt: "typescript icon",
    },
    {
      icon: reactIcon,
      title: "react.js",
      alt: "react icon",
    },
    {
      icon: nextIcon,
      title: "next.js",
      alt: "next js icon",
    },
    {
      icon: mongodbIcon,
      title: "mongodb",
      alt: "mongo db icon",
    },
    {
      icon: prismaormIcon,
      title: "prisma orm",
      alt: "prisma orm icon",
    },
    {
      icon: reactqueryIcon,
      title: "react query/ tanstack query",
      alt: "react query icon",
    },
    {
      icon: reduxIcon,
      title: "redux toolkit",
      alt: "redux toolkit icon",
    },
  ]
  return (
    <MaxWidthWrapper className="flex items-center justify-center flex-wrap gap-10 mx-auto my-20">
      {techStackImage?.map(({ icon, title, alt }, index) => {
        return (
          <CustomTooltip
            key={alt + index}
            title={title}
            className="bg-border text-white"
          >
            <Image
              key={alt + index}
              src={icon}
              className="w-14 grayscale hover:grayscale-0 transition-all"
              alt={alt}
              aria-label={alt}
            />
          </CustomTooltip>
        )
      })}
    </MaxWidthWrapper>
  )
}

export default TechStackSection
