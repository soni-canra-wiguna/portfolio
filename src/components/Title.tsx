import React from "react"

interface Child {
  children: React.ReactNode
}

const Title: React.FC<Child> = ({ children }) => {
  return (
    <h3 className="text-3xl text-white font-bold tracking-wide py-10 text-center">
      {children}
    </h3>
  )
}

export default Title
