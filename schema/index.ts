import * as z from "zod"

export const blogSchema = z.object({
  image: z.string().min(2, {
    message: "image is require",
  }),
  title: z.string().min(6, {
    message: "title is require",
  }),
  category: z.string().min(4, {
    message: "category is required",
  }),
  content: z.string().min(100, {
    message: "at least 100 character",
  }),
})
