"use client"

import TemplateGrid from "@/components/TemplateGrid"
import AppBackground from "@/components/backgrounds/AppBackground"

export default function AppTemplatePage() {
  return (
    <>
      <AppBackground />
      <TemplateGrid 
        category="app"
        title="App Templates"
        description="Discover high-quality App templates for your next project."
      />
    </>
  )
}
