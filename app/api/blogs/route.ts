import prisma from "@/lib/prisma"
import { blogSchema } from "@/schema"
import { Blog, Prisma } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"

export const POST = async (req: NextRequest) => {
  try {
    const body: Blog = await req.json()
    const parsedBody = blogSchema.parse(body)
    const { image, title, category, content, published } = parsedBody

    await prisma.blog.create({
      data: {
        image,
        title,
        category,
        content,
        published,
      },
    })

    return NextResponse.json({
      message: "data successfully created",
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
      message: "internal server error",
    })
  }
}

export const GET = async (req: NextRequest) => {
  try {
    // pagination
    const page = parseInt(req.nextUrl.searchParams.get("page") ?? "1")
    const limit = parseInt(req.nextUrl.searchParams.get("limit") ?? "20")
    const skip = (page - 1) * 20

    // for searching blog
    const search = req.nextUrl.searchParams.get("search")
    const searchQuery = search?.replace(/-/g, " ")

    // get total blog
    const totalBlogArtilces = await prisma.blog.count()

    const category = req.nextUrl.searchParams?.get("category")

    const blogs = await prisma.blog.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: category as string,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    })

    if (searchQuery) {
      return NextResponse.json({
        message: "data pencarian berhasil di ambil",
        data: blogs,
        currentPage: page,
        totalPages: Math.ceil(blogs.length / limit),
        totalArticles: blogs.length,
      })
    }

    if (blogs.length > 0) {
      return NextResponse.json({
        message: "data berhasil di ambil",
        data: blogs,
        currentPage: page,
        totalPages: Math.ceil(blogs.length / limit),
        totalArticles: blogs.length,
        totalBlogArtilces: totalBlogArtilces,
      })
    }

    return NextResponse.json({
      message: "data not found",
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "internal server error",
      error: error,
    })
  }
}
