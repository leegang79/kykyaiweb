import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Users,
  Zap,
  Database,
  MessageSquare,
  Mic,
  Video,
  Settings,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Bot,
} from "lucide-react"

export function TechnologyPlatformsSection() {
  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Content Generation Platform */}
          <div className="mb-20">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex items-center my-[-24px]">
                  <div className="text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">智能化内容生成平台</h2>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      基于深度学习和自然语言处理技术，为用户提供高质量、个性化的内容创作服务
                    </p>
                  </div>
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
                </div>

                <CardHeader className="p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">核心功能</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">智能文本生成与编辑</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">多语言内容翻译</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">个性化内容推荐</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">内容质量评估</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">技术特点</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center">
                          <Database className="w-3 h-3 mr-1" />
                          大规模训练数据
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <Zap className="w-3 h-3 mr-1" />
                          实时生成
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <Settings className="w-3 h-3 mr-1" />
                          可定制化
                        </Badge>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      了解更多
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </div>

          {/* Virtual Human Platform */}
          <div className="mb-20">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <CardHeader className="p-12 order-2 lg:order-1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-white">核心功能</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">实时语音对话</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">表情动作生成</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">感识别与响应</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-slate-50">多场景适配</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">技术特点</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center">
                          <Mic className="w-3 h-3 mr-1" />
                          语音识别
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <Video className="w-3 h-3 mr-1" />
                          实时渲染
                        </Badge>
                        <Badge variant="outline" className="flex items-center">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          自然对话
                        </Badge>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      体验演示
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>

                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-12 flex items-center order-1 lg:order-2 my-[-24px]">
                  <div className="text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">虚拟人实时交互平台</h2>
                    <p className="text-purple-100 text-lg leading-relaxed">
                      结合计算机视觉、语音技术和AI对话系统，创造逼真的虚拟人交互体验
                    </p>
                  </div>
                  <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Platform Integration */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">平台集成优势</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">两大平台深度融合，为客户提供完整的AI解决方案</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-gray-700">智能内容+虚拟人</CardTitle>
                <CardDescription className="text-gray-600">
                  内容生成平台为虚拟人提供丰富的对话内容，实现更自然的交互体验
                </CardDescription>
              </Card>

              <Card className="border-0 shadow-lg bg-white p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-gray-700">个性化定制</CardTitle>
                <CardDescription className="text-gray-600">
                  根据不同行业和场景需求，提供定制化的AI解决方案和服务
                </CardDescription>
              </Card>

              <Card className="border-0 shadow-lg bg-white p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-gray-700">高效部署</CardTitle>
                <CardDescription className="text-gray-600">
                  云端部署，快速集成，为企业提供即插即用的AI能力
                </CardDescription>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
