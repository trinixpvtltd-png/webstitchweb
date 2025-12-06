"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { fetchTemplates } from "@/lib/api"

interface TemplateItem {
  _id: string
  id?: number
  title: string
  image?: string
  thumbnail?: string
  mainImage?: { url: string }
  category: string
}

interface CategoryBoxProps {
  title: string
  templates: TemplateItem[]
  linkHref: string
  linkText: string
  loading?: boolean
}

function TemplateImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)
  const fallback = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
  
  return (
    <Image
      src={error || !src ? fallback : src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      onError={() => setError(true)}
    />
  )
}

function getImageUrl(template: TemplateItem): string {
  // Check all possible image fields
  if (template.mainImage?.url) return template.mainImage.url
  if (template.thumbnail) return template.thumbnail
  if (template.image) return template.image
  return ""
}

function CategoryBox({ title, templates, linkHref, linkText, loading }: CategoryBoxProps) {
  return (
    <div className="bg-neutral-900 rounded-lg p-5 shadow-lg border border-neutral-800 flex flex-col h-full">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {loading ? (
          // Loading skeleton
          [...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square rounded-md bg-neutral-800"></div>
              <div className="h-3 bg-neutral-800 rounded mt-1 w-3/4"></div>
            </div>
          ))
        ) : templates.length > 0 ? (
          templates.slice(0, 4).map((template) => (
            <Link key={template._id || template.id} href={linkHref} className="group">
              <div className="relative aspect-square rounded-md overflow-hidden bg-neutral-800 border border-neutral-700">
                <TemplateImage 
                  src={getImageUrl(template)} 
                  alt={template.title} 
                />
              </div>
              <p className="text-xs text-neutral-400 mt-1 truncate">{template.title}</p>
            </Link>
          ))
        ) : (
          <p className="text-neutral-500 text-sm col-span-2">No templates available</p>
        )}
      </div>
      <Link 
        href={linkHref} 
        className="text-zinc-300 hover:text-white hover:underline text-sm font-medium mt-4 inline-block"
      >
        {linkText}
      </Link>
    </div>
  )
}

export default function TemplateCategories() {
  const [templates3D, setTemplates3D] = useState<TemplateItem[]>([])
  const [templates2D, setTemplates2D] = useState<TemplateItem[]>([])
  const [templatesApp, setTemplatesApp] = useState<TemplateItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadTemplates() {
      try {
        setLoading(true)
        const [data3D, data2D, dataApp] = await Promise.all([
          fetchTemplates("3d").catch(() => []),
          fetchTemplates("2d").catch(() => []),
          fetchTemplates("app").catch(() => []),
        ])
        setTemplates3D(data3D || [])
        setTemplates2D(data2D || [])
        setTemplatesApp(dataApp || [])
      } catch (error) {
        console.error("Error fetching templates:", error)
      } finally {
        setLoading(false)
      }
    }
    loadTemplates()
  }, [])

  const categories = [
    {
      title: "3D Templates",
      linkHref: "/3d-template",
      linkText: "See more templates",
      templates: templates3D,
    },
    {
      title: "2D Templates",
      linkHref: "/2d-template",
      linkText: "See more templates",
      templates: templates2D,
    },
    {
      title: "App Templates",
      linkHref: "/app-template",
      linkText: "See more templates",
      templates: templatesApp,
    },
  ]

  return (
    <div className="w-full py-8 px-4 md:px-8 lg:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryBox
              key={category.title}
              title={category.title}
              templates={category.templates}
              linkHref={category.linkHref}
              linkText={category.linkText}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
