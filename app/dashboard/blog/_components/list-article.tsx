"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getBlogArticles } from "@/services"
import { Blog } from "@prisma/client"
import { Ellipsis, Heading4, Loader2 } from "lucide-react"
import EditArticle from "./edit-article"
import DeleteArticle from "./delete-article"
import { formatTitleArticle } from "@/utils"
import Link from "next/link"

export default function ListArticle() {
  const { data, isPending, isError } = getBlogArticles()

  return (
    <>
      {isPending ? (
        <div>
          <Loader2 className="size-8 animate-spin text-secondary" />
        </div>
      ) : isError ? (
        <p>something went wrong</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {data?.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      )}
    </>
  )
}

const ArticleCard = ({ article }: { article: Blog }) => {
  return (
    <Card className="flex justify-between gap-2 p-4">
      <Link
        className="flex-1 hover:text-primary"
        href={`/blog/${formatTitleArticle(article.title)}/${article.id}`}
      >
        <h4>{article.title}</h4>
      </Link>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Ellipsis className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-[150px] flex-col items-center border bg-input px-0 py-1.5">
          <EditArticle article={article} />
          <DeleteArticle id={article.id} />
        </PopoverContent>
      </Popover>
    </Card>
  )
}
