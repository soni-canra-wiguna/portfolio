"use client"

import { type Editor, EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Text from "@tiptap/extension-text"
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
} from "lucide-react"
import Typography from "@tiptap/extension-typography"
import Heading from "@tiptap/extension-heading"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Dropcursor from "@tiptap/extension-dropcursor"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"

interface TextEditorProps {
  value: string
  setValue: (value: string) => void
  className?: string
}

const TextEditor = ({ value, setValue, className }: TextEditorProps) => {
  const editor = useEditor({
    content: value,
    editorProps: {
      attributes: {
        class: "outline-none focus:outline-none prose",
      },
    },
    extensions: [
      Text,
      StarterKit.configure(),
      Link.configure({
        openOnClick: false,
        autolink: true,
        // defaultProtocol: "https"
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Typography,
      Image,
      Dropcursor.configure({
        color: "#31ff6c",
      }),
    ],
    onUpdate({ editor }) {
      setValue(editor.getHTML())
    },
  })

  return (
    <div className="flex flex-col">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="scrollY h-[500px] overflow-y-auto rounded-b-2xl border border-input p-2"
        placeholder="description product"
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
    <div className="flex items-center gap-2 rounded-t-2xl border border-input p-2">
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
      {/* <Toggle
        pressed={editor?.isActive("link")}
        onPressedChange={() => editor?.chain().focus().toggleLink({}).run()}
      >
        <LinkIcon />
      </Toggle> */}

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
    </div>
  )
}
