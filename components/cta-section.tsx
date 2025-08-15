"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-blue-50 mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              {t("cta.free_trial")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
            >
              {t("cta.contact_sales")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
