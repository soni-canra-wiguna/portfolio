"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getBlogArticles } from "@/services"
import { formatTitleArticle } from "@/utils"
import { Blog } from "@prisma/client"
import { Ellipsis, Pencil, Trash } from "lucide-react"
import Link from "next/link"
import EditArticle from "./edit-article"

export default function ListArticle() {
  const { data, isPending, isError } = getBlogArticles()

  return (
    <>
      <Link
        href={`/dashboard/blog/ultimate-guide-deploy-next-js?blogId=342869easjh4789/edit`}
        className="text-lg font-medium text-primary"
      >
        link test
      </Link>
      {isPending ? (
        <p>loading...</p>
      ) : isError ? (
        <p>something went wrong</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
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
      <h4 className="flex-1">{article.title}</h4>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Ellipsis className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-[150px] flex-col items-center bg-input px-0 py-1.5">
          <EditArticle article={article} />
          <button className="flex items-center gap-2 px-3 py-2 transition-all duration-300 hover:bg-secondary hover:text-primary">
            <Trash className="ml-2 size-4 text-inherit" /> delete
          </button>
        </PopoverContent>
      </Popover>
    </Card>
  )
}
