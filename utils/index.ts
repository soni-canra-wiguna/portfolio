export const formatTitleArticle = (title: string) => {
  return title
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}
