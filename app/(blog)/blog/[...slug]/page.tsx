import RenderArticle from "@/components/render-article"
import { Blog } from "@prisma/client"
import { Metadata } from "next"

interface ArticlePageProps {
  params: { slug: string[] }
}

const getArticle = async (slug: string[]) => {
  try {
    const articleId = slug[1]
    const response = await fetch(
      `http://canra.vercel.app/api/blogs/${articleId}`,
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

// SSG render
// export async function generateStaticParams({ params }: ArticlePageProps) {
//   const { slug } = params
//   const { article } = await getArticle(slug)
//   return {
//     slug: article.id,
//   }
// }

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
    <div className="mx-auto min-h-screen w-full max-w-3xl">
      <RenderArticle
        title={article.title}
        image={article.image}
        category={article.category}
        content={article.content}
        published={article.published}
        createdAt={article.createdAt}
      />
    </div>
  )
}

// SSG
// export const generateStaticParams = async () =>
// allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }))

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
//   return { title: blog?.title }
// }

// const DetailPost = ({ params }: { params: { slug: string } }) => {
//   const blog: Blog = allBlogs.find(
//     (blog) => blog._raw.flattenedPath === params.slug
//   )

// SSR

// export async function generateMetadata({
//   params,
//   searchParams,
// }: GenerateMetadataProps): Promise<Metadata> {
//   const { slug } = params
//   const { product } = await getProduct(slug)
//   const indexImage = +searchParams.indexImg // + is shorthand Number()

//   return {
//     title: product.title,
//     description: `Beli ${product.title} hanya di Lazora`,
//     openGraph: {
//       title: product.title,
//       images: product.images[indexImage || 0].image,
//       description: `Beli ${product.title} hanya di Lazora`,
//       url: `https://lazora.vercel.app/product/${slug[0]}/${slug[1]}`,
//       siteName: "Lazora",
//       type: "website",
//     },
//   }
// }

// // ketika ingin load page ini sedikit lambat karena fetch 2 kali yaitu di server(untuk metadata) dan di client(untuk product)
// //sebenarnya, yang bikin lambat/lemot itu saat fetch di server(metadata), tapi karena itu untuk SEO dan itu penting, but ya ok lah.
// const SingleProductPage = async ({ params }: GenerateMetadataProps) => {
//   const { slug } = params
//   const { product } = await getProduct(slug)
