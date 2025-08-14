"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero-section" className="relative h-[calc(100vh-4rem)] w-full">
      <iframe
        className="video-background absolute inset-0 w-full h-full border-0 z-0"
        src="https://human.kykyai.com:8016/?autoplay=1"
        title="KykyAI Interactive Demo"
        allow="autoplay; fullscreen"
      />

      <div className="relative z-10 h-full flex items-center justify-center w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              id="hero-ai-badge"
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-black/20 backdrop-blur-sm text-white border-white/30"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t("hero.subtitle")}
            </Badge>

            <h1 id="hero-title" className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="text-white drop-shadow-lg">{t("hero.title")}</span>
            </h1>

            <p
              id="hero-description"
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            >
              {t("hero.description")}
            </p>

            <div id="hero-cta-buttons" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                id="hero-learn-more-btn"
                size="lg"
                className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm px-8 py-4 text-lg text-white border border-white/20"
              >
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                id="hero-demo-btn"
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                {t("hero.cta.secondary")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
