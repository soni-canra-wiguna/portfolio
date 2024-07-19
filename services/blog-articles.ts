import { Blog } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const getBlogArticles = () => {
  const { data, isPending, isError } = useQuery<Blog[]>({
    queryKey: ["blogArticles"],
    queryFn: async () => {
      const { data } = await axios.get("/api/blogs")
      return data.data
    },
  })

  return {
    data,
    isPending,
    isError,
  }
}

export const getArticle = (id: string | null) => {
  const { data, isPending, isError } = useQuery<Blog>({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/blogs/${id}`)
      return data.data
    },
  })

  return {
    data,
    isPending,
    isError,
  }
}
