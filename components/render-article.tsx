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
      <div className="my-4 flex items-center gap-2">
        <p className="text-paragraph">{formattedDate}</p>
        <div className="size-max rounded-full bg-secondary px-2 text-sm text-paragraph">
          {category || intitialData.category}
        </div>
      </div>
      <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
        {title || intitialData.title}
      </h1>
      <img
        src={image || intitialData.image}
        className="my-12 aspect-video w-full overflow-hidden rounded-2xl object-cover object-center"
        alt="title"
      />
      <WrapperContentStyle>{parse(content)}</WrapperContentStyle>
    </article>
  )
}

const WrapperContentStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-headings:text-white prose-p:overflow-y-auto prose-p:text-white prose-a:cursor-pointer prose-a:text-primary prose-a:no-underline prose-blockquote:border-s-input prose-strong:text-white prose-pre:overflow-x-auto prose-pre:bg-input prose-li:text-primary prose-li:marker:text-primary prose-img:rounded-2xl prose-hr:my-[2.5em] prose-hr:border-border">
      {children}
    </div>
  )
}
