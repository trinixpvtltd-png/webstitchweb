"use client"

import TemplateGrid from "@/components/TemplateGrid"
import ThreeDBackground from "@/components/backgrounds/ThreeDBackground"

export default function ThreeDTemplatePage() {
  return (
    <>
      <ThreeDBackground />
      <TemplateGrid 
        category="3d"
        title="3D Templates"
        description="Choose from our collection of stunning 3D template designs. Click any template to see details and purchase."
      />
    </>
  )
}
