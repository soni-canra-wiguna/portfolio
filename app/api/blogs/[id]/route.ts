import prisma from "@/lib/prisma"
import { blogSchema } from "@/schema"
import { Blog } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const { id } = params
    const article = await prisma.blog.findUnique({
      where: {
        id,
      },
    })

    if (!article) {
      return NextResponse.json({
        message: "Article not found",
      })
    }

    return NextResponse.json({
      message: "Article berhasil di ambil",
      data: article,
    })
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      error,
      status: 500,
    })
  }
}

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const { id } = params
    const body: Blog = await req.json()
    const parsedBody = blogSchema.parse(body)
    const { image, title, category, content } = parsedBody

    const updateArticle = await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        image,
        title,
        category,
        content,
      },
    })

    if (!updateArticle) {
      return NextResponse.json({
        message: "Article not found",
      })
    }

    return NextResponse.json({
      message: "Article successfully updated",
    })
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        message: "Validation Error",
        errors: error.errors,
      })
    }

    return NextResponse.json({
      message: "Internal server error",
    })
  }
}

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const { id } = params
    const article = await prisma.blog.delete({
      where: {
        id,
      },
    })

    if (!article) {
      return NextResponse.json({
        message: "Article not found",
      })
    }

    return NextResponse.json({
      message: "Article berhasil di hapus",
    })
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      error,
      status: 500,
    })
  }
}
