import {
  Bold,
  HeadingIcon,
  Link2,
  Code,
  SquareTerminal,
  AlignCenter,
  Quote,
  Highlighter,
  LucideImagePlus,
  ListIcon,
  ArrowRightIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Info } from "lucide-react"
import { ReactNode } from "react"

export default function GuideContent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="transition-all duration-300"
          variant="ghost"
        >
          <Info className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="scrollY max-h-[90vh] space-y-6 overflow-y-auto text-paragraph md:rounded-2xl lg:max-w-5xl">
        <div className="pt-6 text-center text-3xl font-semibold text-white md:text-4xl">
          Guide/Panduan Penulisan Content
        </div>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <Bold className="size-4 text-primary" />
            Basic format
          </h5>
          <div>
            <p className="mb-2">
              Ada beberapa basic format text yang bisa kamu gunakan, seperti
              Bold, Italic, Underline, dan stike through. Contoh penggunaannya
              adalah sebagain berukut :
            </p>
            <p className="mb-2">
              <WrapperCode>Bold</WrapperCode> :{" "}
              <span className="text-red-400">sebelum</span> : hello world,{" "}
              <span className="text-blue-400">sesudah</span>:{" "}
              <span className="font-bold">hello world</span>.
            </p>
            <p className="mb-2">
              <WrapperCode>Italic</WrapperCode> :{" "}
              <span className="text-red-400">sebelum</span> : hello world,{" "}
              <span className="text-blue-400">sesudah</span>:{" "}
              <span className="italic">hello world</span>.
            </p>
            <p className="mb-2">
              <WrapperCode>Underline</WrapperCode> :{" "}
              <span className="text-red-400">sebelum</span> : hello world,{" "}
              <span className="text-blue-400">sesudah</span>:{" "}
              <span className="underline underline-offset-2">hello world</span>.
            </p>
            <p>
              <WrapperCode>strike through</WrapperCode> :{" "}
              <span className="text-red-400">sebelum</span> : hello world,{" "}
              <span className="text-blue-400">sesudah</span>:{" "}
              <span className="belum di kasih style">hello world</span>.
            </p>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <HeadingIcon className="size-4 text-primary" />
            Heading
          </h5>
          <p>
            Kamu bisa menggunakan Heading sebagai judul atau subjudul. Ada 6
            level untuk heading, mulai dari H1 sampai H6.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <LucideImagePlus className="size-4 text-primary" />
            Image
          </h5>
          <p>
            Kamu bisa menambahkan image untuk isi content-mu. Bisa memilih ingin
            menggunakan image local atau menggunakan url. <br />
            <span className="text-primary">Aspect ratio</span> dari imagenya
            adalah <span className="text-primary">16/9 atau landscape</span>,
            jadi kalo image yang mau kamu post image portait, edit dulu ya.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <Link2 className="size-4 text-primary" />
            Link
          </h5>
          <p>
            Ada dua cara untuk mengunakan url/link. Pertama, kamu bisa langsung
            copy paste linknya dan nantinya akan muncul text dengan link yang
            serupa.
            <br />
            namun terkadang kamu juga perlu link yang di embed ke dalam text.
            Misal text nya{" "}
            <a
              href="https://lazora.vercel.app"
              target="_blank"
              className="text-primary hover:underline hover:underline-offset-2"
            >
              beli keyboard cidoo X kaori cicak disini
            </a>{" "}
            dan linknya{" "}
            <a
              href="https://lazora.vercel.app"
              target="_blank"
              className="text-primary hover:underline hover:underline-offset-2"
            >
              https://lazora.vercel.app
            </a>
            . Kamu tinggal select textnya lalu click toggle url dan masukkan
            linknya.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim text-xl capitalize text-white">
            <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
              <ListIcon className="size-4 text-primary" />
              List
            </h5>
          </h5>
          <p>
            Ada dua format list yang bisa kamu gunakan, list bullet dan list
            number.
            <br />
            Contoh penggunaan list bullet:
            <ul className="list-inside list-disc">
              <li>hello</li>
              <li>world</li>
            </ul>
            <br />
            Contoh penggunaan list number:
            <ul className="list-inside list-decimal">
              <li>kaori</li>
              <li>cicak</li>
            </ul>
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <AlignCenter className="size-4 text-primary" />
            Alignment Text
          </h5>
          <p>Kamu bisa menggunakan alignment text, left, center, dan right.</p>
          <br />
          <div className="mb-2 w-full rounded-lg border border-secondary/60 p-3 text-left capitalize">
            left
          </div>
          <div className="mb-2 w-full rounded-lg border border-secondary/60 p-3 text-center capitalize">
            center
          </div>
          <div className="mb-2 w-full rounded-lg border border-secondary/60 p-3 text-right capitalize">
            right
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <Highlighter className="size-4 text-primary" />
            Highlighter text
          </h5>
          <p>Kamu bisa memberikan highlight pada text yang kamu seleksi.</p>
          <p>
            <span className="text-red-400">Sebelum</span> : hello world,{" "}
            <span className="text-blue-400">sesudah</span>:{" "}
            <span className="bg-primary/80 p-1 text-white">hello world</span>
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <Quote className="size-4 text-primary" />
            Block quotes
          </h5>
          <p>
            Bikin quotes atau mengutip quotes, kamu bisa masukkan text ke dalam
            block quote agar tampilannya lebih bagus, contoh block quotes:
          </p>
          <blockquote className="flex items-center gap-2">
            <span className="h-full w-1 bg-secondary" />
            <p>
              "Mawar itu merah <br />
              Violet itu biru"
            </p>
          </blockquote>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <Code className="size-4 text-primary" />
            Code
          </h5>
          <p>
            Code ini fungsinya hampir mirip dengan highlight, tapi code biasanya
            di gunakan untuk inline code seperti ini:
          </p>
          <p>
            ketik <WrapperCode>npm i everything</WrapperCode> di terminal kalian
            agar laptop kalian ngebut.
          </p>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <SquareTerminal className="size-4 text-primary" />
            Code block
          </h5>
          <p>
            Berbeda dengan code, code block biasanya berisi tulisan code/script
            dari Bahasa pemrograman. contoh:
          </p>
          <pre className="rounded-lg border border-secondary/60 p-3">
            <code>hello world</code>
          </pre>
        </ContentWrapper>
        <ContentWrapper>
          <h5 className="font-medim flex items-center gap-2 text-xl capitalize text-white">
            <ArrowRightIcon className="size-4 text-primary" />
            Lainnya
          </h5>
          <p className="pb-6">
            Untuk penjelasan lebih lengkap format apa saja yang bisa kamu
            gunakan, kamu bisa baca disini{" "}
            <a
              href="https://tiptap.dev/docs"
              target="_blank"
              className="text-primary hover:underline hover:underline-offset-2"
            >
              https://tiptap.dev/docs
            </a>
          </p>
        </ContentWrapper>
      </DialogContent>
    </Dialog>
  )
}

const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-3">{children}</div>
}

const WrapperCode = ({ children }: { children: ReactNode }) => {
  return <span className="rounded-md bg-secondary p-1">{children}</span>
}
