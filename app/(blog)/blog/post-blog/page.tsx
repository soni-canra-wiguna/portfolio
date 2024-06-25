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

export default function PostBlog() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <ResizablePanelGroup direction="horizontal" className="size-full">
        <ResizablePanel defaultSize={45}>
          <div className="scrollY mr-3 size-full overflow-y-auto p-6">
            <FormBlogPost />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="hover:bg-primary" />
        <ResizablePanel defaultSize={55}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">preview post</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

const formSchema = z.object({
  image: z.string().min(2, {
    message: "image is require",
  }),
  title: z.string().min(2, {
    message: "title is require",
  }),
  category: z.string().email().min(4, {
    message: "category is required",
  }),
  content: z.string().min(100, {
    message: "at least 100 character",
  }),
})

const FormBlogPost = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      title: "",
      category: "",
      content: "",
    },
  })

  const onSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label>Image</Label>
          <UploadDropzone
            endpoint="blog"
            className="border-secondary/70 ut-button:bg-primary ut-button:text-background ut-allowed-content:text-paragraph ut-label:font-medium ut-label:text-primary ut-upload-icon:text-primary/30 ut-button:ut-readying:bg-primary/80 ut-uploading:!border-secondary/70"
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
                          <SelectItem className="capitalize" value="react">
                            React/Next.js
                          </SelectItem>
                          <SelectItem className="capitalize" value="game">
                            Game
                          </SelectItem>
                          <SelectItem className="capitalize" value="typescript">
                            Typescript
                          </SelectItem>
                          <SelectItem className="capitalize" value="javascript">
                            Javascript
                          </SelectItem>
                          {/* {formOptions.posisi.map((value) => (
                          <SelectItem
                            className="capitalize"
                            key={value}
                            value={value}
                          >
                            {value}
                          </SelectItem>
                        ))} */}
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
          <TextEditor />
        </div>
        <Button type="submit" size="lg" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
