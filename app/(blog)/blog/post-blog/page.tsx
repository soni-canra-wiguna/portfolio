"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UploadDropzone } from "@/lib/uploadthing"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TextEditor from "@/components/text-editor"
import parse from "html-react-parser"
import { blogSchema } from "@/schema"
import { Smartphone, Tablet } from "lucide-react"
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { blogCategory } from "@/data"
import LoadingButton from "@/components/loading-button"
import { toast } from "@/components/ui/use-toast"

export interface FormBlogPostProps {
  form: ReturnType<typeof useForm<z.infer<typeof blogSchema>>>
}

export default function PostBlog() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      image: "",
      title: "",
      category: "",
      content: "",
    },
  })

  const { mutate, isPending, isError } = useMutation({
    mutationKey: ["article"],
    mutationFn: async (data: z.infer<typeof blogSchema>) => {
      await axios.post("/api/blogs", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      form.reset()
      toast({
        title: "banner successfully created!!",
        description: "new banner successfully created!!",
      })
      queryClient.invalidateQueries({ queryKey: ["blogArticles"] })
      router.push("/dashboard/products")
    },
    onError: () => {
      toast({
        title: "something went wrong!",
        description: "something went wrong, check your connection.",
        variant: "destructive",
      })
    },
  })

  const onSubmit = (data: z.infer<typeof blogSchema>) => {
    try {
      mutate(data)
    } catch (error) {
      throw new Error("cannot post article, something went wrong")
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="size-full">
        <ResizablePanel defaultSize={45}>
          <div className="scrollY mr-3 size-full overflow-y-auto p-6">
            {/* form post start */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label>Image</Label>
                  <UploadDropzone
                    endpoint="blog"
                    className="border-secondary/70 ut-button:bg-primary ut-button:text-background ut-allowed-content:text-paragraph ut-label:font-medium ut-label:text-primary ut-upload-icon:text-primary/30 ut-button:ut-readying:bg-primary/80 ut-uploading:!border-secondary/70"
                    onClientUploadComplete={(res) => {
                      if (!res) return
                      form.setValue("image", res[0].url)
                      // toast({
                      //   title: "succes uploaded",
                      //   variant: "success",
                      // })
                    }}
                    onUploadError={(error: Error) => {
                      // toast({
                      //   title: "succes uploaded",
                      //   description: `ERROR! ${error.message}`,
                      //   variant: "destructive",
                      // })
                    }}
                  />
                </div>
                <div className="flex w-full space-x-4">
                  <div className="w-7/12">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>title</FormLabel>
                          <FormControl>
                            <Input placeholder="title..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-5/12">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectGroup>
                                  {blogCategory.map((item, index) => (
                                    <SelectItem
                                      key={index}
                                      className="capitalize"
                                      value={item.value}
                                    >
                                      {item.value}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Content</Label>
                  <TextEditor className="max-w-full" form={form} />
                </div>
                <LoadingButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  loading={isPending}
                >
                  Create Article
                </LoadingButton>
              </form>
            </Form>
            {/* form post end */}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="hover:bg-primary" />
        <ResizablePanel defaultSize={55}>
          <div className="relative size-full px-6">
            <BlogPreview form={form} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

const BlogPreview = ({ form }: FormBlogPostProps) => {
  const [hasResponsiveSize, setHasResposiveSize] = useState("480px")
  // phone: 480px , tablet: 768px, laptop: 1280px
  return (
    <div
      style={{ width: hasResponsiveSize }}
      className={`scrollY mx-auto h-full overflow-y-auto border border-input p-4 transition-all duration-500`}
    >
      <h1 className="text-4xl font-medium text-white">{form.watch("title")}</h1>
      <p>{form.watch("category")}</p>
      <br />
      <div className="prose-pre:scrollX prose prose-headings:text-white prose-p:text-white prose-a:cursor-pointer prose-a:text-primary prose-a:hover:underline prose-a:hover:underline-offset-2 prose-strong:text-white prose-pre:bg-input prose-li:text-primary">
        {parse(form.watch("content"))}
      </div>

      {/* button responsive */}
      <div className="absolute bottom-10 left-1/2 flex size-max -translate-x-1/2 items-center gap-2 rounded-lg bg-input p-1">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setHasResposiveSize("480px")}
        >
          <Smartphone className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setHasResposiveSize("768px")}
        >
          <Tablet className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
