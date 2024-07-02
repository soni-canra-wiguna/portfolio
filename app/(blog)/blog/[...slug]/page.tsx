import MaxWidthWrapper from "@/components/max-width-wrapper"
import RenderArticle from "@/components/render-article"
import { TracingBeam } from "@/components/tracing-beam"
import { Blog } from "@prisma/client"
import { Metadata } from "next"

interface ArticlePageProps {
  params: { slug: string[] }
}

const getArticle = async (slug: string[]) => {
  try {
    const articleId = slug[1]
    const response = await fetch(
      `${process.env.WEBSITE_URL}/api/blogs/${articleId}`,
      {
        next: {
          tags: ["article"],
        },
      },
    )
    const { data }: { data: Blog } = await response.json()

    return {
      article: data,
      slugArticle: slug,
    }
  } catch (error) {
    throw new Error("something went wrong")
  }
}

const getAllArticles = async () => {
  try {
    const response = await fetch(`${process.env.WEBSITE_URL}/api/blogs`, {
      next: {
        tags: ["article"],
      },
    })
    const { data }: { data: Blog[] } = await response.json()
    return data
  } catch (error) {
    throw new Error("Failed to fetch articles")
  }
}

// SSG render
export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: [article.category, article.id],
  }))
}

// metadata
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = params
  const { article } = await getArticle(slug)
  return {
    title: article.title,
    category: article.category,
    openGraph: {
      title: article.title,
      images: article.image,
      description: `kamu sedang membaca ${article.title}.`,
      url: `https://canra.vercel.app/blog/${slug[0]}/${slug[1]}`,
      siteName: "canra",
      type: "website",
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params
  const { article } = await getArticle(slug)
  return (
    <TracingBeam className="lg:px-6">
      <MaxWidthWrapper className="pb-20">
        <RenderArticle
          title={article.title}
          image={article.image}
          category={article.category}
          content={article.content}
          published={article.published}
          createdAt={article.createdAt}
        />
      </MaxWidthWrapper>
    </TracingBeam>
  )
}
