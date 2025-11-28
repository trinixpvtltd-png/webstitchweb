"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem("token")
      const userData = localStorage.getItem("user")
      if (token && userData) {
        setUser(JSON.parse(userData))
      } else {
        setUser(null)
      }
    }
    checkUser()
    window.addEventListener("storage", checkUser)
    window.addEventListener("authChange", checkUser)
    return () => {
      window.removeEventListener("storage", checkUser)
      window.removeEventListener("authChange", checkUser)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    window.dispatchEvent(new Event("authChange"))
    window.location.href = "/"
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsOpen(false)
    }
  }

  const categoryLinks = [
    { label: "3D Templates", href: "/3d-template" },
    { label: "2D Templates", href: "/2d-template" },
    { label: "App Templates", href: "/app-template" },
    { label: "Chatbot", href: "/chatbot" },
    { label: "AI", href: "/ai" },
  ]

  // Old secondary nav links - commented out
  // const secondaryNavLinks = [
  //   { label: "Home", href: "/" },
  //   { label: "Trending Templates", href: "/trending" },
  //   { label: "Categories", href: "#", hasDropdown: true },
  //   { label: "New Arrivals", href: "/new-arrivals" },
  //   { label: "Business Templates", href: "/business-templates" },
  //   { label: "Designers", href: "/designers" },
  //   { label: "Offers / Discounts", href: "/offers" },
  // ]

  const secondaryNavLinks = [
    { label: "3D Template", href: "/3d-template" },
    { label: "2D Template", href: "/2d-template" },
    { label: "App Template", href: "/app-template" },
    { label: "Chatbot", href: "/chatbot" },
    { label: "AI", href: "/ai" },
    { label: "Contact", href: "/contact" },
  ]

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    },
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md border-b border-gray-800 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
          {/* Left: Logo */}
          <Link href="/" className="font-bold text-2xl tracking-tight flex items-center gap-2 group">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">
              webstich
            </span>
          </Link>

          {/* Center: Search Box */}
          <form className="flex-1 max-w-2xl mx-8 hidden md:flex" onSubmit={handleSearch}>
            <div className="relative w-full flex">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates, designs, themes..."
                className="w-full pl-12 pr-4 py-2.5 rounded-l-xl border-2 border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-gray-800 transition-all duration-300"
              />
              <button type="submit" className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-r-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium">
                Search
              </button>
            </div>
          </form>

          {/* Right: Auth, Wishlist, Cart */}
          <div className="flex items-center gap-2">
            {user ? (
              <Link href={user.role === 'admin' ? "/admin/dashboard" : "/dashboard"} className="text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
                Dashboard
              </Link>
            ) : (
              <Link href="/login" className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                Login / Signup
              </Link>
            )}
            <Link href="/wishlist" className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-pink-500 transition-all duration-300 group" aria-label="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-pink-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </Link>
            <Link href="/cart" className="p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-purple-500 transition-all duration-300 relative group" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-purple-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold">0</span>
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700 border border-gray-700 transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-gray-300" /> : <Menu className="w-5 h-5 text-gray-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Nav Bar */}
      <div className="w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="flex justify-start items-center h-11 gap-1 max-w-7xl mx-auto">
          {secondaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white hover:bg-gray-800 rounded-lg px-4 py-2 whitespace-nowrap border border-transparent hover:border-gray-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="py-4 px-4 space-y-2">
              {/* Mobile Search */}
              <form className="flex mb-4" onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search templates..."
                  className="w-full px-4 py-2 rounded-l-lg border border-border bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                </button>
              </form>

              {/* Main Nav Links */}
              {secondaryNavLinks.filter(link => !link.hasDropdown).map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Categories Section */}
              <motion.div
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="pt-2 border-t border-border mt-2"
              >
                <div className="px-2 py-2 text-sm font-semibold text-muted-foreground">Categories</div>
                {categoryLinks.map((cat, i) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block py-2 px-4 text-sm font-medium transition-colors hover:text-primary hover:bg-secondary rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </motion.div>

              {/* Auth Section */}
              <motion.div
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={categoryLinks.length + 4}
              >
                {user ? (
                  <div className="pt-2 border-t border-border mt-2">
                    <Link
                      href={user.role === 'admin' ? "/admin/dashboard" : "/dashboard"}
                      className="block px-2 py-2 text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setIsOpen(false)
                      }}
                      className="block w-full text-left py-2 text-sm font-medium text-red-500 hover:text-red-400 px-2"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="block py-2 text-sm font-medium text-primary hover:text-primary/80 px-2 border-t border-border mt-2 pt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Login / Signup
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
