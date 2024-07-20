import ListArticle from "@/app/dashboard/blog/_components/list-article"

export default function DashboardBlog() {
  return (
    <div className="min-h-screeen mx-auto w-full max-w-7xl">
      <h1 className="mt-14 text-xl">Blogs dashboard</h1>
      <ListArticle />
    </div>
  )
}
