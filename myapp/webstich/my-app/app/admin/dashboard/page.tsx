"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  getTemplatesAdmin, 
  addTemplate, 
  editTemplate, 
  deleteTemplate, 
  getPresignedUrl, 
  uploadFileToS3 
} from "@/lib/api"
import { motion } from "framer-motion"

interface ImageFile {
  file?: File;
  url: string;
  key?: string;
  isMain: boolean;
}

export default function AdminDashboard() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [templates, setTemplates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [templateFilter, setTemplateFilter] = useState("all")

  // Create Template State
  const [showTemplateModal, setShowTemplateModal] = useState(false)
  const [templateForm, setTemplateForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    visitLink: "",
    category: "app",
    features: "",
    published: true,
  })
  const [templateLoading, setTemplateLoading] = useState(false)
  const [templateImages, setTemplateImages] = useState<ImageFile[]>([])

  // Edit Template State
  const [showEditTemplateModal, setShowEditTemplateModal] = useState(false)
  const [editTemplateId, setEditTemplateId] = useState<string | null>(null)
  const [editTemplateForm, setEditTemplateForm] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    visitLink: "",
    category: "app",
    features: "",
    published: true,
  })
  const [editTemplateLoading, setEditTemplateLoading] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token")
      const userStr = localStorage.getItem("user")
      if (!token || !userStr) {
        router.push("/login")
        return
      }
      const user = JSON.parse(userStr)
      if (user.role !== "admin") {
        router.push("/dashboard")
        return
      }
      fetchTemplates()
    }
    checkAuth()
  }, [router])

  const fetchTemplates = async () => {
    try {
      const data = await getTemplatesAdmin()
      setTemplates(data)
    } catch (err: any) {
      console.error("Failed to fetch templates", err)
      setError(err.message || "Failed to fetch templates")
    } finally {
      setLoading(false)
    }
  }

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files)
      addImages(files)
    }
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      addImages(files)
    }
  }

  const addImages = (files: File[]) => {
    const newImages = files.map((file, index) => ({
      file,
      url: URL.createObjectURL(file),
      isMain: templateImages.length === 0 && index === 0,
    }))
    setTemplateImages([...templateImages, ...newImages])
  }

  const removeImage = (index: number) => {
    const newImages = [...templateImages]
    const wasMain = newImages[index].isMain
    newImages.splice(index, 1)
    if (wasMain && newImages.length > 0) {
      newImages[0].isMain = true
    }
    setTemplateImages(newImages)
  }

  const setMainImage = (index: number) => {
    const newImages = templateImages.map((img, i) => ({
      ...img,
      isMain: i === index,
    }))
    setTemplateImages(newImages)
  }

  const handleFileUpload = async (file: File) => {
    const { url, key, publicUrl } = await getPresignedUrl(file.name, file.type)
    await uploadFileToS3(url, file)
    return { key, url: publicUrl }
  }

  const handleAddTemplate = async (e: React.FormEvent) => {
    e.preventDefault()
    setTemplateLoading(true)
    try {
      let mainImageResult = { key: "", url: "" }
      const galleryResults = []

      for (const img of templateImages) {
        let result = { key: img.key || "", url: img.url }
        if (img.file) {
          result = await handleFileUpload(img.file)
        }

        if (img.isMain) {
          mainImageResult = result
        } else {
          galleryResults.push(result)
        }
      }

      const featuresArray = templateForm.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean)

      await addTemplate({
        ...templateForm,
        features: featuresArray,
        mainImage: mainImageResult.url ? mainImageResult : undefined,
        gallery: galleryResults,
      })

      setShowTemplateModal(false)
      setTemplateForm({
        title: "",
        slug: "",
        description: "",
        price: 0,
        visitLink: "",
        category: "app",
        features: "",
        published: true,
      })
      setTemplateImages([])
      fetchTemplates()
    } catch (err: any) {
      console.error("Failed to add template", err)
      setError(err.message || "Failed to add template")
    } finally {
      setTemplateLoading(false)
    }
  }

  const handleEditTemplate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editTemplateId) return
    setEditTemplateLoading(true)
    try {
      let mainImageResult = { key: "", url: "" }
      const galleryResults = []

      for (const img of templateImages) {
        let result = { key: img.key || "", url: img.url }
        if (img.file) {
          result = await handleFileUpload(img.file)
        }

        if (img.isMain) {
          mainImageResult = result
        } else {
          galleryResults.push(result)
        }
      }

      const featuresArray = editTemplateForm.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean)

      await editTemplate(editTemplateId, {
        ...editTemplateForm,
        features: featuresArray,
        mainImage: mainImageResult.url ? mainImageResult : undefined,
        gallery: galleryResults,
      })

      setShowEditTemplateModal(false)
      setEditTemplateId(null)
      setTemplateImages([])
      fetchTemplates()
    } catch (err: any) {
      console.error("Failed to edit template", err)
      setError("Failed to edit template")
    } finally {
      setEditTemplateLoading(false)
    }
  }

  const handleDeleteTemplate = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this template?")) return
    try {
      await deleteTemplate(id)
      fetchTemplates()
    } catch (err: any) {
      console.error("Failed to delete template", err)
      setError("Failed to delete template")
    }
  }

  return (
    <div className="min-h-screen bg-black text-[#e3e8f0] font-sans pt-20">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-72 bg-[#111] border-r border-white/10 p-8 flex flex-col fixed top-20 h-[calc(100vh-5rem)] z-10">
          <h2 className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
            Admin Dashboard
          </h2>
          <nav className="flex flex-col gap-4 flex-1">
            <button
              className="text-left px-5 py-3 rounded-xl transition font-semibold text-lg bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white shadow-xl"
            >
              Templates
            </button>
          </nav>
          <button
            onClick={() => {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
              window.dispatchEvent(new Event("authChange"))
              router.push("/login")
            }}
            className="mt-auto px-5 py-3 rounded-xl transition font-semibold text-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30"
          >
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 ml-72">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#a5b4fc] bg-clip-text text-transparent drop-shadow-lg">
                Templates
              </h2>
              <button
                className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-6 py-3 rounded-xl font-bold shadow-xl hover:from-[#7c3aed]/80 hover:to-[#6366f1]/80 transition text-lg"
                onClick={() => setShowTemplateModal(true)}
              >
                + Create Template
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              {["all", "3d", "2d", "app", "chatbot"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTemplateFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
                    templateFilter === filter
                      ? "bg-[#7c3aed] text-white"
                      : "bg-white/10 text-gray-400 hover:bg-white/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Templates Table */}
            <div className="overflow-x-auto">
              <div className="rounded-2xl shadow-2xl bg-[#111] border border-white/10 p-2">
                <table className="w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr className="bg-white/5 text-[#a5b4fc] rounded-xl">
                      <th className="p-4 text-lg">Title</th>
                      <th className="p-4 text-lg">Description</th>
                      <th className="p-4 text-lg">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={3} className="text-center p-8">Loading...</td></tr>
                    ) : templates
                      .filter((t) => templateFilter === "all" || t.category === templateFilter)
                      .map((template: any) => (
                      <tr
                        key={template._id}
                        className="rounded-xl bg-white/5 hover:bg-white/10 transition shadow-xl"
                      >
                        <td className="p-4 rounded-l-xl font-semibold text-white/90 text-center">
                          {template.title}
                        </td>
                        <td className="p-4 text-white/80 text-center max-w-md truncate">
                          {template.description}
                        </td>
                        <td className="p-4 flex gap-2 rounded-r-xl justify-center">
                          <button
                            className="px-4 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                            onClick={() => {
                              setEditTemplateId(template._id)
                              setEditTemplateForm({
                                title: template.title,
                                slug: template.slug,
                                description: template.description,
                                price: template.price,
                                visitLink: template.visitLink || "",
                                category: template.category,
                                features: template.features.join(", "),
                                published: template.published,
                              })
                              
                              // Populate images
                              const images: ImageFile[] = []
                              if (template.mainImage && template.mainImage.url) {
                                images.push({
                                  url: template.mainImage.url,
                                  key: template.mainImage.key,
                                  isMain: true
                                })
                              }
                              if (template.gallery && template.gallery.length > 0) {
                                template.gallery.forEach((g: any) => {
                                  images.push({
                                    url: g.url,
                                    key: g.key,
                                    isMain: false
                                  })
                                })
                              }
                              setTemplateImages(images)
                              setShowEditTemplateModal(true)
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600 transition font-semibold"
                            onClick={() => handleDeleteTemplate(template._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Create Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10 max-h-[85vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              onClick={() => setShowTemplateModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
              Create Template
            </h3>
            <form
              onSubmit={handleAddTemplate}
              className="flex flex-col gap-4"
            >
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Title"
                required
                value={templateForm.title}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, title: e.target.value }))
                }
              />
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Slug"
                required
                value={templateForm.slug}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, slug: e.target.value }))
                }
              />
              <textarea
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Description"
                required
                value={templateForm.description}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, description: e.target.value }))
                }
              />
              <input
                type="number"
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Price"
                required
                value={templateForm.price}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, price: Number(e.target.value) }))
                }
              />
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Visit Link (e.g., https://example.com)"
                value={templateForm.visitLink}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, visitLink: e.target.value }))
                }
              />
              <select
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white"
                value={templateForm.category}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, category: e.target.value }))
                }
              >
                <option value="3d">3D</option>
                <option value="2d">2D</option>
                <option value="app">App</option>
                <option value="chatbot">Chatbot</option>
                <option value="other">Other</option>
              </select>
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Features (comma separated)"
                value={templateForm.features}
                onChange={(e) =>
                  setTemplateForm((f) => ({ ...f, features: e.target.value }))
                }
              />
              <div>
                <label className="block text-white mb-2">
                  Images (Drag & Drop or Click)
                </label>
                <div
                  className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-[#7c3aed] transition"
                  onDrop={handleImageDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => document.getElementById("template-images-input")?.click()}
                >
                  <p className="text-gray-400">Drag images here or click to upload</p>
                  <input
                    id="template-images-input"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect}
                  />
                </div>
                
                {templateImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {templateImages.map((img, index) => (
                      <div key={index} className="relative group border border-white/10 rounded-lg overflow-hidden">
                        <img
                          src={img.url}
                          alt={`Preview ${index}`}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => setMainImage(index)}
                            className={`px-2 py-1 text-xs rounded ${img.isMain ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
                          >
                            {img.isMain ? 'Main' : 'Set Main'}
                          </button>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Remove
                          </button>
                        </div>
                        {img.isMain && (
                          <div className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                            MAIN
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={templateForm.published}
                  onChange={(e) =>
                    setTemplateForm((f) => ({ ...f, published: e.target.checked }))
                  }
                />
                Published
              </label>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                disabled={templateLoading}
              >
                {templateLoading ? "Creating..." : "Create Template"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Template Modal */}
      {showEditTemplateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/10 max-h-[85vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              onClick={() => setShowEditTemplateModal(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-[#7c3aed]">
              Edit Template
            </h3>
            <form
              onSubmit={handleEditTemplate}
              className="flex flex-col gap-4"
            >
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Title"
                required
                value={editTemplateForm.title}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, title: e.target.value }))
                }
              />
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Slug"
                required
                value={editTemplateForm.slug}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, slug: e.target.value }))
                }
              />
              <textarea
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Description"
                required
                value={editTemplateForm.description}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, description: e.target.value }))
                }
              />
              <input
                type="number"
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Price"
                required
                value={editTemplateForm.price}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, price: Number(e.target.value) }))
                }
              />
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Visit Link (e.g., https://example.com)"
                value={editTemplateForm.visitLink}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, visitLink: e.target.value }))
                }
              />
              <select
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white"
                value={editTemplateForm.category}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, category: e.target.value }))
                }
              >
                <option value="3d">3D</option>
                <option value="2d">2D</option>
                <option value="app">App</option>
                <option value="chatbot">Chatbot</option>
                <option value="other">Other</option>
              </select>
              <input
                className="border border-white/20 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-400"
                placeholder="Features (comma separated)"
                value={editTemplateForm.features}
                onChange={(e) =>
                  setEditTemplateForm((f) => ({ ...f, features: e.target.value }))
                }
              />
              <div>
                <label className="block text-white mb-2">
                  Images (Drag & Drop or Click)
                </label>
                <div
                  className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-[#7c3aed] transition"
                  onDrop={handleImageDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => document.getElementById("edit-template-images-input")?.click()}
                >
                  <p className="text-gray-400">Drag images here or click to upload</p>
                  <input
                    id="edit-template-images-input"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageSelect}
                  />
                </div>
                
                {templateImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {templateImages.map((img, index) => (
                      <div key={index} className="relative group border border-white/10 rounded-lg overflow-hidden">
                        <img
                          src={img.url}
                          alt={`Preview ${index}`}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => setMainImage(index)}
                            className={`px-2 py-1 text-xs rounded ${img.isMain ? 'bg-green-500 text-white' : 'bg-white/20 text-white hover:bg-white/40'}`}
                          >
                            {img.isMain ? 'Main' : 'Set Main'}
                          </button>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                          >
                            Remove
                          </button>
                        </div>
                        {img.isMain && (
                          <div className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                            MAIN
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={editTemplateForm.published}
                  onChange={(e) =>
                    setEditTemplateForm((f) => ({ ...f, published: e.target.checked }))
                  }
                />
                Published
              </label>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#7c3aed] to-[#6366f1] text-white px-5 py-2 rounded-lg font-bold shadow-lg mt-2"
                disabled={editTemplateLoading}
              >
                {editTemplateLoading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
