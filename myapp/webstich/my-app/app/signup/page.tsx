"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signup } from "@/lib/api"
import { motion } from "framer-motion"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const data = await signup(formData)
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      
      // Force navbar update
      window.dispatchEvent(new Event("authChange"))
      
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">
          Create Account
        </h1>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white transition-colors"
              value={formData.fullname}
              onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full bg-neutral-950/50 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white transition-colors"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-neutral-400 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-zinc-300 hover:text-white">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
