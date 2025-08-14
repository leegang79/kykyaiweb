import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  MapPin,
  GraduationCap,
  Landmark,
  BookOpen,
  Users,
  TrendingUp,
  Award,
  Globe,
  History,
  Users2,
  Heart,
} from "lucide-react"

export function CustomersShowcaseSection() {
  return (
    <section id="customers-showcase-section" className="py-20 bg-white w-full">
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div id="customers-overview" className="mb-20">
            <h2 id="customers-main-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              我们的客户
            </h2>
            <div
              id="customers-intro-section"
              className=" p-8 lg:p-12 mb-16"
            >
              <div className="text-center mb-8">
                <p id="customers-intro-text" className="text-lg text-slate-600 max-w-3xl mx-auto">
                  快语科技致力于为各行各业提供优质的AI解决方案，我们的客户遍布文旅、教育、企业服务等多个领域
                </p>
              </div>
              <div className="flex justify-center shadow-none">
                <img
                  id="customers-showcase-image"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/customs.jpg"
                  alt="我们的客户"
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Industry Categories */}
          <div id="industry-categories-section" className="mb-20 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl px-6 py-6">
            <h2 id="industry-categories-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              服务行业
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                id="tourism-industry-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group"
              >
                <div
                  id="tourism-icon"
                  className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <Landmark className="w-8 h-8 text-white" />
                </div>
                <CardTitle id="tourism-title" className="text-xl font-semibold mb-2 text-slate-800">
                  文旅行业
                </CardTitle>
                <CardDescription id="tourism-description" className="text-slate-600">
                  为景区、博物馆、文化遗址提供AI导游和智能讲解服务，包括滕王阁、井冈山等知名景区
                </CardDescription>
              </Card>

              <Card
                id="education-industry-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group"
              >
                <div
                  id="education-icon"
                  className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle id="education-title" className="text-xl font-semibold mb-2 text-slate-800">
                  教育培训
                </CardTitle>
                <CardDescription id="education-description" className="text-slate-600">
                  为高等院校、培训机构提供智能教学助手和个性化学习解决方案
                </CardDescription>
              </Card>

              <Card
                id="government-industry-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group"
              >
                <div
                  id="government-icon"
                  className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle id="government-title" className="text-xl font-semibold mb-2 text-slate-800">
                  政府机构
                </CardTitle>
                <CardDescription id="government-description" className="text-slate-600">
                  为政府部门、事业单位提供智能政务服务和公共服务解决方案
                </CardDescription>
              </Card>

              <Card
                id="enterprise-industry-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group"
              >
                <div
                  id="enterprise-icon"
                  className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle id="enterprise-title" className="text-xl font-semibold mb-2 text-slate-800">
                  企业服务
                </CardTitle>
                <CardDescription id="enterprise-description" className="text-slate-600">
                  为各类企业提供智能客服、内容生成和办公自动化解决方案
                </CardDescription>
              </Card>
            </div>
          </div>

          {/* Featured Clients */}
          <div id="featured-clients-section" className="mb-20">
            <h2 id="featured-clients-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              重点客户案例
            </h2>
            <div className="space-y-8">
              <Card
                id="tengwangge-client-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div
                    id="tengwangge-client-visual"
                    className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-[-24px]"
                  >
                    <div className="text-center text-white">
                      <Landmark className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">滕王阁景区</h3>
                      <p className="text-orange-100 mt-2">江西南昌</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4   mt-[-24px]">
                    <Badge id="tengwangge-5a-badge" className="bg-orange-500 hover:bg-orange-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      5A级景区
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="tengwangge-client-title" className="text-xl font-bold mb-3 text-slate-800">
                    AI导游讲解系统
                  </CardTitle>
                  <CardDescription id="tengwangge-client-description" className="mb-4 text-slate-600">
                    为滕王阁景区部署智能导游系统，结合历史文化背景，为游客提供沉浸式的游览体验。系统支持多语言讲解，大幅提升了游客满意度。
                  </CardDescription>
                  <div id="tengwangge-client-features" className="flex flex-wrap gap-2">
                    <Badge
                      id="tengwangge-multilang-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <Globe className="w-3 h-3 mr-1" />
                      多语言支持
                    </Badge>
                    <Badge id="tengwangge-culture-badge" variant="outline" className="flex items-center text-slate-600">
                      <Landmark className="w-3 h-3 mr-1" />
                      文化传承
                    </Badge>
                    <Badge id="tengwangge-smart-badge" variant="outline" className="flex items-center text-slate-600">
                      <Users2 className="w-3 h-3 mr-1" />
                      智能交互
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card
                id="jinggangshan-client-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div
                    id="jinggangshan-client-visual"
                    className="w-full h-48 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center mt-[-24px]"
                  >
                    <div className="text-center text-white">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">井冈山景区</h3>
                      <p className="text-red-100 mt-2">江西吉安</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4   mt-[-24px]">
                    <Badge id="jinggangshan-heritage-badge" className="bg-red-500 hover:bg-red-600">
                      <Award className="w-3 h-3 mr-1" />
                      革命圣地
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="jinggangshan-client-title" className="text-xl font-bold mb-3 text-slate-800">
                    红色教育AI系统
                  </CardTitle>
                  <CardDescription id="jinggangshan-client-description" className="mb-4 text-slate-600">
                    专为井冈山革命圣地打造的AI导游系统，深度挖掘红色文化内涵，为游客提供生动的革命历史教育体验。
                  </CardDescription>
                  <div id="jinggangshan-client-features" className="flex flex-wrap gap-2">
                    <Badge
                      id="jinggangshan-red-education-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <GraduationCap className="w-3 h-3 mr-1" />
                      红色教育
                    </Badge>
                    <Badge
                      id="jinggangshan-heritage-preservation-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <History className="w-3 h-3 mr-1" />
                      历史传承
                    </Badge>
                    <Badge
                      id="jinggangshan-patriotism-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <Heart className="w-3 h-3 mr-1" />
                      爱国主义
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Success Metrics */}
          <div
            id="success-metrics-section"
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 lg:p-12"
          >
            <h2 id="success-metrics-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              服务成果
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div id="clients-metric" className="text-center">
                <div
                  id="clients-icon"
                  className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div id="clients-number" className="text-3xl font-bold text-slate-800 mb-2">
                  100+
                </div>
                <div id="clients-label" className="text-slate-600">
                  服务客户
                </div>
              </div>
              <div id="projects-metric" className="text-center">
                <div
                  id="projects-icon"
                  className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div id="projects-number" className="text-3xl font-bold text-slate-800 mb-2">
                  200+
                </div>
                <div id="projects-label" className="text-slate-600">
                  部署项目
                </div>
              </div>
              <div id="satisfaction-metric" className="text-center">
                <div
                  id="satisfaction-icon"
                  className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div id="satisfaction-number" className="text-3xl font-bold text-slate-800 mb-2">
                  98%
                </div>
                <div id="satisfaction-label" className="text-slate-600">
                  客户满意度
                </div>
              </div>
              <div id="awards-metric" className="text-center">
                <div
                  id="awards-icon"
                  className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div id="awards-number" className="text-3xl font-bold text-slate-800 mb-2">
                  30+
                </div>
                <div id="awards-label" className="text-slate-600">
                  行业奖项
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
