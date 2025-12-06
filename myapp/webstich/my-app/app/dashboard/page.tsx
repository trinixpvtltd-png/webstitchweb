"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Eye, Heart, LogOut } from "lucide-react"
import { fetchTemplates, fetchLikedTemplates } from "@/lib/api"

interface User {
  _id: string
  fullname: string
  email: string
  role: string
}

interface Template {
  _id: string
  title: string
  description: string
  mainImage: { url: string }
  views: number
  likes: number
  likedBy: string[]
  category: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [likedTemplates, setLikedTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userStr = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    if (!userStr || !token) {
      router.push("/login")
      return
    }

    const userData = JSON.parse(userStr)
    setUser(userData)

    // Fetch liked templates
    const loadLikedTemplates = async () => {
      try {
        const templates = await fetchLikedTemplates()
        setLikedTemplates(templates)
      } catch (err) {
        console.error("Failed to load templates", err)
      } finally {
        setLoading(false)
      }
    }

    loadLikedTemplates()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (loading) {
    return <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">Loading...</div>
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-neutral-400 mt-2">Welcome back, {user.fullname}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-neutral-400 text-sm mb-2">Account Type</h3>
            <p className="text-2xl font-bold capitalize">{user.role}</p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-neutral-400 text-sm mb-2">Liked Templates</h3>
            <p className="text-2xl font-bold">{likedTemplates.length}</p>
          </div>
          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <h3 className="text-neutral-400 text-sm mb-2">Email</h3>
            <p className="text-xl font-bold truncate">{user.email}</p>
          </div>
        </div>

        {/* Liked Templates Section */}
        <h2 className="text-2xl font-bold mb-6">Liked Templates</h2>
        {likedTemplates.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/50 rounded-xl border border-neutral-800">
            <Heart className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <p className="text-neutral-400">You haven't liked any templates yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedTemplates.map((template) => (
              <motion.div
                key={template._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="relative aspect-video">
                  <Image
                    src={template.mainImage?.url || "/placeholder.jpg"}
                    alt={template.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{template.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      {template.views || 0}
                    </span>
                    <span className="flex items-center gap-1.5 text-red-500">
                      <Heart className="w-4 h-4 fill-red-500" />
                      {template.likes || 0}
                    </span>
                    <span className="ml-auto capitalize px-2 py-1 rounded bg-neutral-800 text-xs">
                      {template.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
