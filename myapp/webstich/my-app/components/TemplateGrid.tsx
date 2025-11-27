"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, ShoppingCart, Eye, Heart } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { fetchTemplates, incrementView, toggleLike } from "@/lib/api"

interface Template {
  _id: string
  title: string
  description: string
  mainImage: { url: string }
  gallery: { url: string }[]
  features: string[]
  price: number
  views: number
  likes: number
  likedBy: string[]
  category: string
  visitLink?: string
}

interface TemplateGridProps {
  category: string
  title: string
  description: string
}

export default function TemplateGrid({ category, title, description }: TemplateGridProps) {
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeImage, setActiveImage] = useState<string>("")
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const userStr = localStorage.getItem('user')
    if (userStr) {
      setCurrentUser(JSON.parse(userStr))
    }
  }, [])

  useEffect(() => {
    if (selectedTemplate) {
      setActiveImage(selectedTemplate.mainImage?.url || "/placeholder.jpg")
      // Increment view when template is opened
      if (currentUser) {
        incrementView(selectedTemplate._id).catch(console.error)
      }
    }
  }, [selectedTemplate, currentUser])

  const handleLike = async (e: React.MouseEvent, template: Template) => {
    e.stopPropagation()
    if (!currentUser) {
      alert("Please login to like templates")
      return
    }

    try {
      const response = await toggleLike(template._id)
      
      const updateTemplate = (t: Template) => {
        const newLikedBy = response.isLiked 
          ? [...(t.likedBy || []), currentUser._id]
          : (t.likedBy || []).filter((id: string) => id !== currentUser._id)
          
        return {
          ...t,
          likes: response.likes,
          likedBy: newLikedBy
        }
      }

      setTemplates(prev => prev.map(t => 
        t._id === template._id ? updateTemplate(t) : t
      ))
      
      if (selectedTemplate?._id === template._id) {
        setSelectedTemplate(prev => prev ? updateTemplate(prev) : null)
      }
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const data = await fetchTemplates(category)
        setTemplates(data)
      } catch (err) {
        setError("Failed to load templates")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadTemplates()
  }, [category])

  if (loading) return <div className="min-h-screen pt-20 text-center text-white">Loading...</div>
  if (error) return <div className="min-h-screen pt-20 text-center text-red-500">{error}</div>

  return (
    <main className="relative z-10 w-full min-h-screen overflow-hidden pt-16">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={template._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                onClick={() => setSelectedTemplate(template)}
                className="group cursor-pointer"
              >
                {/* 16:9 Aspect Ratio Container */}
                <div className="relative overflow-hidden rounded-lg bg-gray-900 mb-3" style={{ aspectRatio: '16/9' }}>
                  {/* Preview Image */}
                  <Image
                    src={template.mainImage?.url || "/placeholder.jpg"}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Template Details Below Image */}
                <div className="flex items-start gap-3">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center text-lg">
                    {/* Simple icon based on category or random */}
                    {category === '3d' && "📊"}
                    {category === '2d' && "🎨"}
                    {category === 'app' && "📱"}
                    {category === 'chatbot' && "🤖"}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm truncate">{template.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-gray-300" />
                        <span>{template.views || 0}</span>
                      </span>
                      <button 
                        onClick={(e) => handleLike(e, template)}
                        className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 ${currentUser && template.likedBy?.includes(currentUser._id) ? "fill-red-500 text-red-500" : "text-gray-300"}`} 
                        />
                        <span>{template.likes || 0}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTemplate(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-gray-700 rounded-xl shadow-2xl w-full max-w-6xl max-h-[85vh] overflow-y-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTemplate(null)}
                className="fixed top-6 right-6 z-10 p-2 hover:bg-gray-900 rounded-lg transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-12">
                {/* Left: Image - Larger */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="lg:col-span-2 flex flex-col gap-4"
                >
                  <div className="relative w-full rounded-lg overflow-hidden bg-gray-900" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={activeImage}
                      alt={selectedTemplate.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                      onClick={() => setActiveImage(selectedTemplate.mainImage?.url || "/placeholder.jpg")}
                      className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === (selectedTemplate.mainImage?.url || "/placeholder.jpg")
                          ? "border-white scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={selectedTemplate.mainImage?.url || "/placeholder.jpg"}
                        alt="Main"
                        fill
                        className="object-cover"
                      />
                    </button>
                    {selectedTemplate.gallery?.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img.url)}
                        className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          activeImage === img.url
                            ? "border-white scale-105"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.url}
                          alt={`Gallery ${idx}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Details - Scrollable */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="overflow-y-auto pr-4"
                >
                  <div>
                    {/* Avatar & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0" />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-1">
                          {selectedTemplate.title}
                        </h2>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400">Premium Template</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <Eye className="w-4 h-4" />
                              {selectedTemplate.views || 0}
                            </span>
                            <button 
                              onClick={(e) => handleLike(e, selectedTemplate)}
                              className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
                            >
                              <Heart 
                                className={`w-4 h-4 ${currentUser && selectedTemplate.likedBy?.includes(currentUser._id) ? "fill-red-500 text-red-500" : "text-gray-300"}`} 
                              />
                              {selectedTemplate.likes || 0}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed mb-8">
                      {selectedTemplate.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-white mb-4">Features</h3>
                      {selectedTemplate.features && selectedTemplate.features.length > 0 ? (
                        <ul className="space-y-3">
                          {selectedTemplate.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + idx * 0.05 }}
                              className="flex items-center gap-3 text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic">No features listed for this template.</p>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-700 mb-8" />

                    {/* Price */}
                    <div className="mb-8">
                      <p className="text-sm text-gray-400 mb-2">Price</p>
                      <p className="text-3xl font-bold text-white">${selectedTemplate.price}</p>
                      <p className="text-xs text-gray-500 mt-2">One-time purchase, lifetime access</p>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-3">
                      {selectedTemplate.visitLink && (
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open(selectedTemplate.visitLink, '_blank')}
                          className="w-full px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Visit Now
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Purchase
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
