import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LinkPreview } from "./link-preview"

const ProjectSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {projectItems.map((item, i) => (
        <AccordionItem
          key={i}
          value={item.title.replace(/ /g, "-")}
          className="py-6"
        >
          <AccordionTrigger className="text-lg font-medium capitalize hover:text-primary">
            {item.label}
          </AccordionTrigger>
          <AccordionContent className="text-base">
            <p className="mb-2">
              <span className="text-primary">title : </span> {item.title}
            </p>
            <p className="mb-2">
              <span className="text-primary">url : </span>{" "}
              <LinkPreview
                url={item.url}
                imageSrc={item.image}
                isStatic
                className="text-primary hover:underline hover:decoration-dotted hover:underline-offset-2"
              >
                {item.url}
              </LinkPreview>
            </p>
            <p className="mb-2">
              <span className="text-primary">repository : </span>{" "}
              <a
                href={item.repository}
                target="_blank"
                className="text-primary hover:underline hover:decoration-dotted hover:underline-offset-2"
              >
                {item.repository}
              </a>
            </p>
            <p className="mb-2">
              <span className="text-primary">description : </span>{" "}
              {item.description}
            </p>
            <p className="mb-2">
              <span className="text-primary">tech stacks : </span>{" "}
              {item.technologies.map((t) => (
                <span key={t}>{t}, </span>
              ))}
            </p>
            <p className="">
              <span className="text-primary">features : </span>{" "}
              {item.features.map((f) => (
                <span key={f}>{f}, </span>
              ))}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { ProjectSection }

const projectItems = [
  {
    label: "website e-commerce",
    title: "lazora",
    url: "https://lazora.vercel.app",
    repository: "https://github.com/soni-canra-wiguna/lazora",
    description:
      "sebuah aplikasi yang di gunakan untuk berjualan secara online",
    technologies: [
      "next.js",
      "typescript",
      "react hook form",
      "tanstack query",
      "prisma orm",
      "mongodb",
      "tailwind",
      "shacn",
      "uploadthing",
    ],
    features: [
      "rest API",
      "cart",
      "favourite",
      "text editor",
      "login multi role",
      "dashboard",
      "infinite scroll",
      "sort by",
      "CRUD products",
      "CRUD banner",
    ],
    image: "/projects/lazora.png",
  },
  {
    label: "website sekolah",
    title: "sman 1 mandirancan",
    url: "https://sman1mandirancan.vercel.app",
    repository: "private",
    description:
      "website yang menampilkan profil sekolah dan beberapa informasi, seperti agenda, data siswa, data guru, dll.",
    technologies: [
      "next.js",
      "typescript",
      "react hook form",
      "tanstack query",
      "prisma orm",
      "mongodb",
      "tailwind",
      "shacn",
      "uploadthing",
    ],
    features: [
      "blog",
      "rest API",
      "login multi role",
      "dashboard",
      "CRUD data",
      "galeri",
      "dll",
    ],
    image: "/projects/sman.png",
  },
  {
    label: "website ujian online",
    title: "bisa ujian",
    url: "https://bisaujian.vercel.app",
    repository: "https://github.com/soni-canra-wiguna/bisa-ujian",
    description:
      "sebuah aplikasi yang di gunakan untuk mempermudah siswa dalam ujian online",
    technologies: [
      "next.js",
      "typescript",
      "react hook form",
      "tanstack query",
      "prisma orm",
      "mongodb",
      "tailwind",
      "shacn",
    ],
    features: [
      "rest API",
      "login multi role",
      "dashboard",
      "CRUD data",
      "peringkat",
      "theme",
    ],
    image: "/projects/bisaujian.png",
  },
  {
    label: "website slicing UI",
    title: "moi UI",
    url: "https://moiui.netlify.app",
    repository: "https://github.com/soni-canra-wiguna/moi-ui",
    description:
      "aplikasi ini aku buat sebagai sarana latihan dalam slicing ui",
    technologies: ["react.js", "typescript", "tailwind"],
    features: ["UI"],
    image: "/projects/moi.png",
  },
  {
    label: "website pencari film",
    title: "box movie",
    url: "https://box-movie.netlify.app",
    repository: "https://github.com/soni-canra-wiguna/box-movie",
    description:
      "aplikasi ini di gunakan untuk mencari informasi sebuah film. aplikasi ini juga merupakan aplikasi pertama yang saya buat.",
    technologies: ["react.js", "javascript", "tailwind", "tanstack query"],
    features: [
      "inifinte scroll",
      "filter multiple category",
      "authentication",
      "wishlist",
    ],
    image: "/projects/boxmovie.png",
  },
]
