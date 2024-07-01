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

const TechStackSection = () => {
  const techStackImage = [
    {
      icon: nextIcon,
      title: "next.js",
      alt: "next js icon",
    },
    {
      icon: reactIcon,
      title: "react.js",
      alt: "react icon",
    },
    {
      icon: tsIcon,
      title: "typescript",
      alt: "typescript icon",
    },
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
      icon: tailwindIcon,
      title: "tailwind css",
      alt: "tailwind icon",
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
      title: "tanstack query",
      alt: "react query icon",
    },
    {
      icon: reduxIcon,
      title: "redux toolkit",
      alt: "redux toolkit icon",
    },
  ]
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {techStackImage?.map(({ icon, title, alt }, index) => {
        return (
          <div
            key={alt + index}
            className="inline-flex items-center justify-center rounded-lg border border-input bg-transparent px-4 py-2 shadow-sm hover:bg-accent sm:px-6 sm:py-3"
          >
            <Image
              src={icon}
              className="size-6 sm:size-8"
              alt={alt}
              aria-label={alt}
            />
            <span className="ml-2 font-medium capitalize sm:ml-3">{title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TechStackSection
