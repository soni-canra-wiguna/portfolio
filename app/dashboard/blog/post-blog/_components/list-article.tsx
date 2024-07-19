"use client"

import { Card } from "@/components/ui/card"
import { getBlogArticles } from "@/services"
import { formatTitleArticle } from "@/utils"
import Link from "next/link"

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
          {data?.map((article) => {
            const href = `/dashboard/blog/${formatTitleArticle(article.title)}?blogId=${article.id}/edit`

            return (
              <Link key={article.id} href={href}>
                <Card className="">
                  <h4>{article.title}</h4>
                  <p>{article.category}</p>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
