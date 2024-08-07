"use client"

import "highlight.js/styles/github-dark.css"
import {
  Form,
  FormControl,
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
import { UploadButton, UploadDropzone } from "@/lib/uploadthing"
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
import { blogSchema } from "@/schema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { blogCategory } from "@/data"
import LoadingButton from "@/components/loading-button"
import { toast } from "@/components/ui/use-toast"
import GuideContent from "@/app/dashboard/blog/_components/guide-content"
import BlogPreview from "@/app/dashboard/blog/_components/blog-preview"
import { Loader2, Pencil } from "lucide-react"
import { Blog } from "@prisma/client"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function EditArticle({ article }: { article: Blog }) {
  const router = useRouter()
  const queryClient = useQueryClient()

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      image: article.image,
      title: article.title,
      category: article.category,
      content: article.content,
      published: true,
    },
  })

  const {
    mutate: updateArticle,
    isPending,
    isError,
  } = useMutation({
    mutationKey: ["article"],
    mutationFn: async (data: z.infer<typeof blogSchema>) => {
      await axios.patch(`/api/blogs/${article.id}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      form.reset()
      toast({
        title: "article successfully edited!!",
        variant: "success",
      })
      queryClient.invalidateQueries({ queryKey: [article.id] })
      router.push("/blog")
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
      updateArticle(data)
    } catch (error) {
      throw new Error("cannot post article, something went wrong")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex w-full items-center gap-2 px-3 py-2 transition-all duration-300 hover:bg-secondary hover:text-primary">
          <Pencil className="size-4 text-inherit" /> Edit
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-screen h-screen w-screen overflow-hidden rounded-none bg-background p-0">
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
                    {form.watch("image") !== "" ? (
                      <div className="relative h-[189px] w-full overflow-hidden rounded-lg border border-input">
                        <img
                          src={form.watch("image")}
                          alt="preview image"
                          className="size-full object-cover object-center"
                        />

                        <UploadButton
                          endpoint="blog"
                          className="ut-button:bg-primary ut-button:text-background ut-button:shadow-md ut-button:focus-within:ring-primary ut-allowed-content:text-paragraph"
                          appearance={{
                            container: "absolute bottom-2 right-6",
                          }}
                          onClientUploadComplete={(res) => {
                            if (!res) return
                            form.setValue("image", res[0].url)
                            toast({
                              title: "success",
                              description: `success to update image`,
                              variant: "success",
                            })
                          }}
                          onUploadError={(error: Error) => {
                            console.log(error)
                            toast({
                              title: "failed",
                              description: `failed to update image`,
                              variant: "destructive",
                            })
                          }}
                        />
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="blog"
                        className="border-secondary/70 ut-button:bg-primary ut-button:text-background ut-allowed-content:text-paragraph ut-label:font-medium ut-label:text-primary ut-upload-icon:text-primary/30 ut-uploading:!border-secondary/70"
                        onClientUploadComplete={(res) => {
                          if (!res) return
                          form.setValue("image", res[0].url)
                          toast({
                            title: "success",
                            description: `success to upload image`,
                            variant: "success",
                          })
                        }}
                        onUploadError={(error: Error) => {
                          console.log(error)
                          toast({
                            title: "failed",
                            description: `failed to upload image`,
                            variant: "destructive",
                          })
                        }}
                      />
                    )}
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
                    <div className="flex items-center justify-between">
                      <Label>Content</Label>
                      <GuideContent />
                    </div>
                    <TextEditor className="max-w-full" form={form} />
                  </div>
                  <LoadingButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={isPending}
                  >
                    Edit Article
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
      </DialogContent>
    </Dialog>
  )
}
