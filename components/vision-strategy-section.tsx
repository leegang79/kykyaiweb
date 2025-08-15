"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Zap, BookOpen, Users, Heart, Shield, Globe, ImageIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function VisionStrategySection() {
  const { t } = useLanguage()

  return (
    <section id="introduce" className="py-20 bg-white w-full">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("vision.title")}</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">{t("vision.description")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">{t("vision.vision_title")}</CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {t("vision.vision_description")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">{t("vision.strategy_title")}</CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {t("vision.strategy_description")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Data Sets Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("vision.datasets_title")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("vision.datasets_description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">{t("vision.children_books")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">{t("vision.children_stories")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Heart className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700">{t("vision.psychology_consultation")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{t("vision.psychology_symptoms")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Globe className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700">{t("vision.treasure_hunt_images")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <ImageIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{t("vision.cartoon_images")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
