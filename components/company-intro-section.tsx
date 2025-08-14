"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  BookOpen,
  Users,
  Heart,
  Building2,
  Target,
  Lightbulb,
  Landmark,
  Scroll,
  MessageSquareIcon as MessageSquareQuestion,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CompanyIntroSection() {
  const { t } = useLanguage()

  return (
    <section id="company-intro" className="py-20 bg-white w-full">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Company Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t("company.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("hero.description")}</p>
          </div>

          {/* Vision and Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">{t("company.vision.title")}</CardTitle>
                <CardDescription className="text-lg leading-relaxed text-slate-100">
                  {t("company.vision.description")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">{t("company.strategy.title")}</CardTitle>
                <CardDescription className="text-lg leading-relaxed text-slate-100">
                  {t("company.strategy.description")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Company Values */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">核心价值</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">创新驱动</h4>
                <p className="text-gray-600">持续探索AI技术前沿，为用户带来突破性的智能体验</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">用户至上</h4>
                <p className="text-gray-600">以用户需求为中心，提供简单易用的智能化解决方案</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">品质保证</h4>
                <p className="text-gray-600">严格的质量标准，确保每一个产品都达到行业领先水平</p>
              </div>
            </div>
          </div>

          {/* Data Sets Section */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("company.datasets.title")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              进行模型训练和微调的数据集方面，除了汇集公开数据集外，快语在多年研究的基础上，针对人工智能应用软件产品的应用场景不同，分别构建了多个专业数据集：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 font-medium">儿童图书数据集</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 font-medium">儿童故事数据集</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200">
                <Heart className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700 font-medium">心理咨询对话</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <Landmark className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">{t("company.datasets.museum")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                <Scroll className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 font-medium">{t("company.datasets.artifacts")}</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
                <MessageSquareQuestion className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700 font-medium">{t("company.datasets.red")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
