import { blogSchema } from "@/schema"
import { Blog } from "@prisma/client"
import { useForm } from "react-hook-form"
import * as z from "zod"

export interface FormBlogPostProps {
  form: ReturnType<typeof useForm<z.infer<typeof blogSchema>>>
}

export interface BlogResponseAPIProps {
  message: string
  data: Blog[]
  currentPage: number
  totalPages: number
  totalItems: number
  totalProducts: number
  status: number
}
