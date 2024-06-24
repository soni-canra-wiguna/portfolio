import type { Metadata } from "next"
import "./globals.css"
import TanstackProvider from "@/lib/provider/tanstack-provider"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-googleSansMedium text-white">
        <TanstackProvider>
          <main>{children}</main>
        </TanstackProvider>
      </body>
    </html>
  )
}
