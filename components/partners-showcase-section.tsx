import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Cpu, Cloud, Database, Users, ArrowRight, CheckCircle, Globe, TrendingUp, Zap } from "lucide-react"

export function PartnersShowcaseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Partner Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">合作伙伴类型</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-slate-800">技术合作伙伴</CardTitle>
                <CardDescription className="text-slate-600">与AI芯片、云计算、大数据等技术厂商深度合作</CardDescription>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-slate-800">行业合作伙伴</CardTitle>
                <CardDescription className="text-slate-600">与文旅、教育、企业服务等行业龙头企业合作</CardDescription>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-slate-800">渠道合作伙伴</CardTitle>
                <CardDescription className="text-slate-600">与系统集成商、代理商建立广泛的销售网络</CardDescription>
              </Card>
            </div>
          </div>

          {/* Strategic Partners */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">战略合作伙伴</h2>
            <div className="space-y-8">
              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden mt-[-24px]">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mt-[-24px]">
                    <div className="text-center text-white">
                      <Cloud className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">云计算服务商</h3>
                      <p className="text-blue-100 mt-2">基���设施合作</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4   mt-[-24px]">
                    <Badge className="bg-blue-500 hover:bg-blue-600">
                      <Cloud className="w-3 h-3 mr-1" />
                      技术合作
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-slate-800">云端AI服务</CardTitle>
                  <CardDescription className="mb-4 text-slate-600">
                    与主流云计算服务商合作，为客户提供稳定可靠的云端AI服务，支持弹性扩展和全球部署。
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <Cloud className="w-3 h-3 mr-1" />
                      云端部署
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      弹性扩展
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <Globe className="w-3 h-3 mr-1" />
                      全球服务
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mt-[-24px]">
                    <div className="text-center text-white">
                      <Database className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">数据服务商</h3>
                      <p className="text-purple-100 mt-2">数据资源合作</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4  mt-[-24px]">
                    <Badge className="bg-purple-500 hover:bg-purple-600">
                      <Database className="w-3 h-3 mr-1" />
                      数据合作
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-slate-800">数据资源整合</CardTitle>
                  <CardDescription className="mb-4 text-slate-600">
                    与专业数据服务商合作，获取高质量的训练数据，不断优化AI模型的性能和准确性。
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      数据质量
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <Zap className="w-3 h-3 mr-1" />
                      模型优化
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      持续改进
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 lg:p-12 mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">合作优势</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">技术互补</h3>
                    <p className="text-slate-600">结合各方技术优势，提供更完整的解决方案</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">市场拓展</h3>
                    <p className="text-slate-600">共享渠道资源，快速扩大市场覆盖范围</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">成本优化</h3>
                    <p className="text-slate-600">通过合作降低研发和运营成本</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">风险共担</h3>
                    <p className="text-slate-600">分散技术和市场风险，提高成功率</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">创新加速</h3>
                    <p className="text-slate-600">加快产品迭代和技术创新速度</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">生态共建</h3>
                    <p className="text-slate-600">构建健康的AI产业生态系统</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">成为我们的合作伙伴</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              如果您有意与我们建立合作关系，欢迎联系我们探讨合作机会
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 px-8 py-4 text-lg text-white"
            >
              联系合作
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
