import { Blog } from "@prisma/client"
import parse from "html-react-parser"
import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"
import BackButton from "./back-button"

type RenderArticleProps = Pick<
  Blog,
  "title" | "image" | "category" | "content" | "published" | "createdAt"
>

export default function RenderArticle({
  title,
  image,
  category,
  content,
  published,
  createdAt,
}: RenderArticleProps) {
  const formattedDate = format(createdAt, "dd MMMM yyyy, hh:mm aaa", {
    locale: id,
  })

  const intitialData = {
    title: "Grainy Texture: Tren Desain Modern",
    category: "demo",
    image: "/grainy.jpg",
    content: "type content",
  }

  return (
    <article>
      <BackButton />
      <div className="my-4 flex items-center gap-2 text-sm md:text-base">
        <p className="text-paragraph">{formattedDate}</p>
        <div className="rounded-full border border-secondary bg-input px-2.5 py-0.5 text-sm capitalize tracking-wide text-primary">
          {category || intitialData.category}
        </div>
      </div>
      <h1 className="text-2xl font-bold tracking-normal md:text-3xl md:tracking-wide">
        {title || intitialData.title}
      </h1>
      <div className="my-6 aspect-[16/10] w-full overflow-hidden rounded-md sm:my-8 md:my-10 md:rounded-2xl">
        <img
          src={image || intitialData.image}
          className="size-full object-cover object-center"
          alt="title"
        />
      </div>
      <WrapperContentStyle>{parse(content)}</WrapperContentStyle>
    </article>
  )
}

const WrapperContentStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-headings:text-white prose-p:overflow-y-auto prose-p:text-white prose-a:cursor-pointer prose-a:text-primary prose-a:no-underline prose-blockquote:border-s-input prose-strong:text-white prose-pre:overflow-x-auto prose-pre:bg-input prose-li:text-primary prose-li:marker:text-primary prose-hr:my-[2.5em] prose-hr:border-border">
      {children}
    </div>
  )
}
