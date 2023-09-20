import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface Child {
  children: React.ReactNode
}

const Layout: React.FC<Child> = ({ children }) => {
  return (
    <div className="max-w-7xl w-screen h-full mx-auto xl:px-20 lg:px-12 md:px-8 sm:px-4 px-3">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
