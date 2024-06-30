import type { Metadata } from "next"
import "./globals.css"
import "highlight.js/styles/github-dark.css"
import TanstackProvider from "@/lib/provider/tanstack-provider"
import { Toaster } from "@/components/ui/toaster"
import NextTopLoader from "nextjs-toploader"

export const metadata: Metadata = {
  title: {
    default: "Canra",
    template: "%s | Canra",
  },
  description: "portfolio soni canra wiguna",
  referrer: "origin-when-cross-origin",
  applicationName: "canra",
  icons: {
    icon: "/logo-portfolio.svg",
  },
  keywords: ["website", "portfolio"],
  authors: [{ name: "soni canra wiguna", url: "https://instagram.com" }],
  creator: "soni canra wiguna",
  publisher: "soni canra wiguna",
  generator: "Next.Js 14.2",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://canra.vercel.app/"),
  alternates: {
    canonical: "https://canra.vercel.app/",
  },
  openGraph: {
    title: {
      default: "Canra",
      template: "%s | Canra",
    },
    description: "portfolio soni canra wiguna",
    url: "https://canra.vercel.app/",
    images: [
      {
        url: "https://utfs.io/f/4cd1824d-e7d8-47d5-adb9-5bb4ba567fe8-vkv15f.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-googleSansRegular text-white">
        <TanstackProvider>
          <NextTopLoader color="#31ff6c" height={3} showSpinner={false} />
          <main>{children}</main>
          <Toaster />
        </TanstackProvider>
      </body>
    </html>
  )
}
