"use client"

import TemplateGrid from "@/components/TemplateGrid"
import TwoDBackground from "@/components/backgrounds/TwoDBackground"

export default function TwoDTemplatePage() {
  return (
    <>
      <TwoDBackground />
      <TemplateGrid 
        category="2d"
        title="2D Templates"
        description="Explore our collection of creative 2D template designs."
      />
    </>
  )
}
