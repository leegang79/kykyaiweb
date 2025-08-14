import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Zap, BookOpen, Users, Heart, Shield, Globe, ImageIcon } from "lucide-react"

export function VisionStrategySection() {
  return (
    <section id="introduce" className="py-20 bg-white w-full">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">我们的愿景与战略</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              我们是一家高速成长的人工智能科技公司，总部位于深圳，在南昌设有研发中心，在上海、杭州设有办事处。快语科技专注于应用人工智能赋能在文旅产业的应用和研发，业务覆盖众多国内5A级景区、一级博物馆。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">愿景</CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  通过人工智能技术创新推动文旅产业升级，为游客提供更智能、更个性化的文化旅游体验！
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">战略</CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  专注于文旅产业AI应用，与国内5A级景区和一级博物馆深度合作，运用全球领先的人工智能技术，打造智能导游、虚拟讲解等创新产品，推动传统文旅产业的数字化转型升级。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Data Sets Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">专业数据集构建</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              基于文旅产业的深度研究，快语科技针对不同的文化旅游应用场景，构建了多个专业数据集，为AI模型训练和优化提供高质量的数据支撑：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">儿童图书数据集</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">儿童故事数据集</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Heart className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700">心理咨询对话</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">心理疾病和症状</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Globe className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700">大中华寻宝记图像</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <ImageIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">二次元卡通人物图像</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
