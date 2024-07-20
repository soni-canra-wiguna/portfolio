import ListArticle from "@/app/dashboard/blog/_components/list-article"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardBlog() {
  return (
    <div className="min-h-screeen mx-auto w-full max-w-7xl">
      <div className="mb-6 mt-10">
        <h1 className="text-2xl font-medium">Dashobard Article</h1>
        <Link href="/dashboard/blog/post-blog">
          <Button>
            <PlusCircle className="mr-2 size-4" /> Create Article
          </Button>
        </Link>
      </div>
      <ListArticle />
    </div>
  )
}
