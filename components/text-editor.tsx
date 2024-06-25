"use client"

import { type Editor, EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Toggle } from "./ui/toggle"
import {
  Bold,
  Italic,
  LinkIcon,
  List,
  ListOrdered,
  HeadingIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImageIcon,
  Link2,
  UnderlineIcon,
  Code,
  SquareTerminal,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Strikethrough,
  Highlighter,
} from "lucide-react"
import Typography from "@tiptap/extension-typography"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
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

// add this theme for code block
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css">

interface TextEditorProps {
  value: string
  setValue: (value: string) => void
  className?: string
}

const lowlight = createLowlight(common)

lowlight.register("html", html)
lowlight.register("css", css)
lowlight.register("js", js)
lowlight.register("ts", ts)
lowlight.register("markdown", markdown)

// lowlight?.common("html", html)
// lowlight?.common("css", css)
// lowlight?.common("js", js)
// lowlight?.common("ts", ts)

const TextEditor = ({ value, setValue, className }: TextEditorProps) => {
  const editor = useEditor({
    content: value,
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
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        // defaultProtocol: "https"
      }),
      Typography,
      Image,
      UnderlineTiptap,
      TextAlignTiptap.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: "text-background",
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    onUpdate({ editor }) {
      // setValue(editor.getHTML())
    },
  })

  return (
    <div className="flex flex-col">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className={cn(
          "scrollY prose h-[600px] max-w-full overflow-x-auto overflow-y-auto rounded-b-2xl border border-input p-2 prose-headings:text-white prose-p:text-white prose-a:cursor-pointer prose-a:text-primary prose-a:hover:underline prose-a:hover:underline-offset-2 prose-pre:bg-input prose-li:text-primary",
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

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null

  const addImage = () => {
    const url = window.prompt("URL")

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-t-2xl border border-input p-2">
      <Popover>
        <PopoverTrigger asChild>
          <Toggle
            className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
            size="sm"
          >
            <HeadingIcon className="h-4 w-4" />
          </Toggle>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="flex w-max items-center bg-input px-1.5 py-0"
        >
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive("heading", { level: 1 })}
            onPressedChange={() =>
              editor?.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <Heading1 className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive("heading", { level: 2 })}
            onPressedChange={() =>
              editor?.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            <Heading2 className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive("heading", { level: 3 })}
            onPressedChange={() =>
              editor?.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            <Heading3 className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive("heading", { level: 4 })}
            onPressedChange={() =>
              editor?.chain().focus().toggleHeading({ level: 4 }).run()
            }
          >
            <Heading4 className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive("heading", { level: 5 })}
            onPressedChange={() =>
              editor?.chain().focus().toggleHeading({ level: 5 }).run()
            }
          >
            <Heading5 className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive("heading", { level: 6 })}
            onPressedChange={() =>
              editor?.chain().focus().toggleHeading({ level: 6 }).run()
            }
          >
            <Heading6 className="h-4 w-4" />
          </Toggle>
        </PopoverContent>
      </Popover>
      {/* image */}
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("image")}
        // @ts-ignore
        onPressedChange={addImage}
      >
        <ImageIcon className="h-4 w-4" />
      </Toggle>
      {/* link */}
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("link")}
        // @ts-ignore
        onPressedChange={setLink}
      >
        <Link2 className="h-4 w-4" />
      </Toggle>
      {/*  */}
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("bold")}
        onPressedChange={() => editor?.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("italic")}
        onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("bulletList")}
        onPressedChange={() => editor?.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("orderedList")}
        onPressedChange={() =>
          editor?.chain().focus().toggleOrderedList().run()
        }
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("underline")}
        onPressedChange={() => editor?.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("codeBlock")}
        onPressedChange={() => editor?.chain().focus().toggleCodeBlock().run()}
      >
        <SquareTerminal className="h-4 w-4" />
      </Toggle>
      {/* text align */}
      <Popover>
        <PopoverTrigger asChild>
          <Toggle
            className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
            size="sm"
          >
            <AlignCenter className="h-4 w-4" />
          </Toggle>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          className="flex w-max items-center bg-input px-1.5 py-0"
        >
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive({ textAlign: "left" })}
            onPressedChange={() =>
              editor?.chain().focus().setTextAlign("left").run()
            }
          >
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive({ textAlign: "center" })}
            onPressedChange={() =>
              editor?.chain().focus().setTextAlign("center").run()
            }
          >
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle
            className="rounded-none hover:bg-secondary hover:text-primary data-[state=on]:bg-secondary data-[state=on]:text-primary"
            size="sm"
            pressed={editor?.isActive({ textAlign: "right" })}
            onPressedChange={() =>
              editor?.chain().focus().setTextAlign("right").run()
            }
          >
            <AlignRight className="h-4 w-4" />
          </Toggle>
        </PopoverContent>
      </Popover>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("blockquote")}
        onPressedChange={() => editor?.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("strike")}
        onPressedChange={() => editor?.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("code")}
        onPressedChange={() => editor?.chain().focus().toggleCode().run()}
      >
        <Code className="h-4 w-4" />
      </Toggle>
      <Toggle
        className="hover:bg-input hover:text-primary data-[state=on]:bg-input data-[state=on]:text-primary"
        size="sm"
        pressed={editor?.isActive("highlight")}
        onPressedChange={() =>
          editor?.chain().focus().toggleHighlight({ color: "#31ff6c5e" }).run()
        }
      >
        <Highlighter className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
