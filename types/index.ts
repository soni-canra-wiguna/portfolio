import { blogSchema } from "@/schema"
import { useForm } from "react-hook-form"
import * as z from "zod"

export interface FormBlogPostProps {
  form: ReturnType<typeof useForm<z.infer<typeof blogSchema>>>
}
