"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Typography from "@tiptap/extension-typography"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import { Underline as UnderlineTiptap } from "@tiptap/extension-underline"
import { TextAlign as TextAlignTiptap } from "@tiptap/extension-text-align"
import { cn } from "@/lib/utils"
import Highlight from "@tiptap/extension-highlight"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import css from "highlight.js/lib/languages/css"
import js from "highlight.js/lib/languages/javascript"
import ts from "highlight.js/lib/languages/typescript"
import html from "highlight.js/lib/languages/xml"
import markdown from "highlight.js/lib/languages/markdown"
import { common, createLowlight } from "lowlight"
import { blogSchema } from "@/schema"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MenuBar } from "./menu-bar"
import { useEffect, useState } from "react"

interface TextEditorProps {
  className?: string
  form: ReturnType<typeof useForm<z.infer<typeof blogSchema>>>
}

const lowlight = createLowlight(common)

lowlight.register("html", html)
lowlight.register("css", css)
lowlight.register("js", js)
lowlight.register("ts", ts)
lowlight.register("markdown", markdown)

const TextEditor = ({ className, form }: TextEditorProps) => {
  const editor = useEditor({
    content: form.getValues("content"),
    editorProps: {
      attributes: {
        class: cn("outline-none focus:outline-none prose"),
      },
    },
    extensions: [
      StarterKit.configure({
        dropcursor: {
          color: "#31ff6c",
        },
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        code: {
          HTMLAttributes: {
            class:
              "bg-input border border-secondary rounded-md text-primary px-1.5 py-1 no-before no-after font-medium",
          },
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        // defaultProtocol: "https"
      }),
      Typography,
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: "proseImage",
        },
      }),
      UnderlineTiptap,
      TextAlignTiptap.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: "custom-highlight",
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: "preScroll",
        },
      }),
    ],
    onUpdate({ editor }) {
      form.setValue("content", editor.getHTML())
    },
  })
  const [imageURL, setImageURL] = useState<string | null>(null)

  useEffect(() => {
    if (editor && imageURL) {
      editor.commands.setImage({
        src: imageURL,
      })
    }
  }, [imageURL, editor])

  return (
    <div className="flex flex-col">
      <MenuBar editor={editor} setImageURL={setImageURL} />
      <EditorContent
        editor={editor}
        className={cn(
          "scrollY prose h-[600px] max-w-full overflow-x-auto overflow-y-auto rounded-b-2xl border border-input p-2 prose-headings:text-white prose-p:text-white prose-a:cursor-pointer prose-a:text-primary prose-a:no-underline prose-blockquote:border-s-input prose-strong:text-white prose-pre:bg-input prose-li:text-primary prose-li:marker:text-primary prose-hr:my-[2.5em] prose-hr:border-border",
          className,
        )}
        placeholder="description product"
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  )
}

export default TextEditor
