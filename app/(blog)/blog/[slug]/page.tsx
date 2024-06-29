import MaxWidthWrapper from "@/components/max-width-wrapper"
import RenderArticle from "@/components/render-article"
import { Blog } from "@prisma/client"
import { Metadata } from "next"

interface ArticlePageProps {
  params: { slug: string }
}

const getArticle = async () => {
  try {
    const response = await fetch(`http://canra.vercel.app/api/blogs`, {
      next: {
        tags: ["article"],
      },
    })
    const { data }: { data: Blog[] } = await response.json()

    return {
      data,
    }
  } catch (error) {
    throw new Error("something went wrong")
  }
}

// SSG render
// export async function generateStaticParams() {
//   const { data } = await getArticle()
//   return data?.map((article) => ({ slug: article.id }))
// }

// metadata
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = params
  const { data } = await getArticle()

  const article =
    data.find((data) => {
      data.id === slug
    }) ?? ({} as Blog)

  return {
    title: article.title,
    category: article.category,
    openGraph: {
      title: article.title,
      images: article.image,
      description: `kamu sedang membaca ${article.title}.`,
      url: `https://canra.vercel.app/blog/${slug}}`,
      siteName: "canra",
      type: "website",
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params
  const { data } = await getArticle()

  const article =
    data.find((data) => {
      data.id === slug
    }) ?? ({} as Blog)

  return (
    <MaxWidthWrapper className="min-h-screen max-w-3xl px-4 sm:px-6 md:px-8">
      hello
      <RenderArticle
        title={article.title}
        image={article.image}
        category={article.category}
        content={article.content}
        published={article.published}
        createdAt={article.createdAt}
      />
    </MaxWidthWrapper>
  )
}
