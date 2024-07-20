export const formatTitleArticle = (title: string) => {
  return title
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}

export const getBlogId = (blogRaw: string) => {
  let blogId = blogRaw
  if (blogRaw && blogRaw.includes("/")) {
    blogId = blogRaw.split("/")[0]
  }

  return blogId
}
