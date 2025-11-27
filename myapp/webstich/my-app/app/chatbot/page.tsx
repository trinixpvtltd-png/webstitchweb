"use client"

import TemplateGrid from "@/components/TemplateGrid"
import ChatbotBackground from "@/components/backgrounds/ChatbotBackground"

export default function ChatbotTemplatePage() {
  return (
    <>
      <ChatbotBackground />
      <TemplateGrid 
        category="chatbot"
        title="Chatbot Templates"
        description="Intelligent Chatbot templates to enhance user interaction."
      />
    </>
  )
}
