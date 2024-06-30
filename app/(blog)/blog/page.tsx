"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BlogResponseAPIProps } from "@/types"
import { Blog } from "@prisma/client"
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import { Dot, HomeIcon, Loader2, Search, SearchIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistance } from "date-fns"
import { id } from "date-fns/locale"
import { formatTitleArticle } from "@/utils"

export default function BlogPage() {
  const [category, setCategory] = useState("html")
  const { ref, inView } = useInView()
  const {
    data,
    isPending,
    isSuccess,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["blogs page", category],
    queryFn: async ({ pageParam = 1 }) => {
      const { data }: { data: BlogResponseAPIProps } = await axios.get(
        `/api/blogs?category=${category}&page=${+pageParam}&limit=${10}`,
      )
      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1
      }
      return undefined
    },
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <div className="scrollY relative mt-12 min-h-screen w-full overflow-y-auto px-4 sm:px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-6">
        {isPending ? (
          <LoadingArticle />
        ) : isError ? (
          <ErrorArticle />
        ) : (
          isSuccess &&
          data.pages?.map((page, index) =>
            page.data?.map((article) => (
              <ArticleCard {...article} key={article.id} />
            )),
          )
        )}
        <div
          ref={ref}
          className="mb-8 mt-4 flex w-full items-center justify-center"
        >
          {isFetchingNextPage && (
            <p className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin text-primary" /> Load
              more...
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const LoadingArticle = () => {
  const loading = Array.from({ length: 6 }, (_, i) => {
    return <Skeleton key={i} className="aspect-[16/11] w-full rounded-2xl" />
  })
  return <>{loading}</>
}
const ErrorArticle = () => {
  return <div>waduh error, coba refresh lagi deh</div>
}

type ArticleCardProps = Pick<
  Blog,
  "id" | "title" | "image" | "category" | "createdAt" | "published"
>

const ArticleCard = ({
  id: articleId,
  image,
  title,
  category,
  published,
  createdAt,
}: ArticleCardProps) => {
  const formattedDate = formatDistance(createdAt, new Date(), {
    addSuffix: true,
    locale: id,
  })

  return (
    <article>
      <Link href={`/blog/${formatTitleArticle(title)}/${articleId}`}>
        <Card className="flex flex-col">
          <div className="flex gap-3 px-5 py-3">
            <Avatar className="">
              <AvatarImage src="/grainy.jpg" />
              <AvatarFallback>SCW</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h5 className="font-medium text-white">Soni canra wiguna</h5>
              <p className="flex items-center text-sm text-inherit">
                {category} <Dot className="size-4 space-x-2 text-inherit" />{" "}
                {formattedDate}
              </p>
            </div>
          </div>
          <div className="flex max-h-[330px] min-h-[330px] flex-1 items-center justify-center overflow-hidden bg-secondary">
            <img
              src={image}
              className="size-full object-cover object-center"
              alt={title}
            />
          </div>
          <div className="px-5 py-3">
            <h4 className="text-base font-medium text-white">{title}</h4>
          </div>
        </Card>
      </Link>
    </article>
  )
}
