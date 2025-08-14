import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Mountain,
  Building2,
  Clock,
  BookOpen,
  ExternalLink,
  Play,
  Mic,
  History,
  Users2,
  Calendar,
  TrendingUp,
  Bot,
  Brain,
  Target,
  BookOpenCheck,
  BarChart3,
  GraduationCap,
  Heart,
} from "lucide-react"

export function ProductsGridSection() {
  return (
    <section id="products-grid-section" className="py-20 bg-white w-full">
      <div className="w-full pt-[`px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* AI Tour Guide Systems */}
          <div id="ai-tour-guide-section" className="mb-20">
            <h2 id="ai-tour-guide-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              AI导游讲解系统
            </h2>
            <div className="space-y-8">
              <Card
                id="tengwangge-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="tengwangge-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/twg2.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://www.kykyai.com/images/twg2.png"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="tengwangge-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Building2 className="w-3 h-3 mr-1" />
                      文化遗产
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="tengwangge-title" className="text-2xl font-bold mb-3 flex items-center text-slate-800">
                    <MapPin className="w-6 h-6 mr-2 text-cyan-700" />
                    滕王阁AI导游讲解系统
                  </CardTitle>
                  <CardDescription id="tengwangge-description" className="text-lg leading-relaxed mb-4 text-slate-600">
                    {
                      "滕王阁AI导游旨在为游客提供更便捷、个性化的讲解体验。该系统融合了人工智能大语言模型、计算机视觉、数字人和物联网等技术，以虚拟数字人“王勃”为导游形象，搭载听、点、拍、问四大功能特性。游客走到哪里听到哪里，点到什么讲什么，拍拍图像就有典故呈现，问问“王勃”犹如导游在侧。\n\n相较于传统的电子导游设备，滕王阁AI导游具有交互式拟人体验、个性化内容博深、价格低普惠大众、无租借安全卫生等优点，并能够有效缓解导游资源不足的问题，提升游客的参观体验。"
                    }
                  </CardDescription>
                  <div id="tengwangge-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="tengwangge-voice-badge" variant="outline" className="flex items-center text-slate-600">
                      <Mic className="w-3 h-3 mr-1" />
                      语音讲解
                    </Badge>
                    <Badge id="tengwangge-history-badge" variant="outline" className="flex items-center text-slate-600">
                      <History className="w-3 h-3 mr-1" />
                      历史还原
                    </Badge>
                    <Badge id="tengwangge-interaction-badge" variant="outline" className="flex items-center text-slate-600">
                      <Users2 className="w-3 h-3 mr-1" />
                      互动体验
                    </Badge>
                  </div>
                  <Button
                    id="tengwangge-learn-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    了解详情
                  </Button>
                </CardHeader>
              </Card>

              <Card
                id="jinggangshan-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden group"
              >
              <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="jgs-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/jgs.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/jgs_index.png"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="tengwangge-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Mountain className="w-3 h-3 mr-1" />
                      红色旅游
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle
                    id="jinggangshan-title"
                    className="text-2xl font-bold mb-3 flex items-center text-slate-800"
                  >
                    <Mountain className="w-6 h-6 mr-2 text-cyan-700" />
                    井冈山AI导游讲解系统
                  </CardTitle>
                  <CardDescription
                    id="jinggangshan-description"
                    className="text-lg leading-relaxed mb-4 text-slate-600"
                  >
                    {
                      "专为革命圣地井冈山打造的智能导游系统，深度挖掘红色文化内涵，为游客提供生动的革命历史教育体验。\n\n井冈山AI导游产品是大语言模型与虚拟人实时交互技术的产物，它是博物馆导览讲解的颠覆性创新应用。其创新的四大核心功能：自动感应听讲解、拍照识别听解说、个性化点选讲解、数字人互动问答，以官方的“真人”导游为形象，给游客以亲切感，极大地丰富了游客的体验感。依靠大语言模型生成技术，游客可以实现对文物不同深度与广度的了解，同时也将成为博物馆里的“新宠儿”。"
                    }
                  </CardDescription>
                  <div id="jinggangshan-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="jinggangshan-education-badge" variant="outline" className="flex items-center text-slate-600">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      红色教育
                    </Badge>
                    <Badge id="jinggangshan-history-badge" variant="outline" className="flex items-center text-slate-600">
                      <History className="w-3 h-3 mr-1" />
                      历史讲解
                    </Badge>
                    <Badge id="jinggangshan-patriotism-badge" variant="outline" className="flex items-center text-slate-600">
                      <Heart className="w-3 h-3 mr-1" />
                      爱国主义
                    </Badge>
                  </div>
                  <Button
                    id="jinggangshan-learn-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    了解详情
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Smart Interaction */}
          <div id="smart-interaction-section" className="mb-20">
            <h2 id="smart-interaction-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              智能交互系统
            </h2>
            <div className="space-y-8">
              <Card
                id="smart-pavilion-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
              >
              <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="tengwangge-recite-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/tengwangge2.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://www.kykyai.com/images/twg.png"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="tengwangge-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Building2 className="w-3 h-3 mr-1" />
                      热门景区
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle
                    id="smart-pavilion-title"
                    className="text-2xl font-bold mb-3 flex items-center text-slate-800"
                  >
                    <Building2 className="w-6 h-6 mr-2 text-cyan-700" />
                    滕王阁智能背序亭
                  </CardTitle>
                  <CardDescription
                    id="smart-pavilion-description"
                    className="text-lg leading-relaxed mb-4 text-slate-600"
                  >
                    虚拟人“王勃”采用最新的人工智能技术，它不仅应用了虚拟人实时交互技术，而且使用了最新的大语言模型内容生成技术。
                    因此，“王勃”既有栩栩如生的形态，也有聪明智慧的沟通和评测能力。它可以自主检测游客的背诵情况，准确识别出游客语音、语速、
                    语调等方面的表现，并分析判断出游客是否满足了背诵的标准。同时，虚拟人还可以进行互动，与游客进行简单的对话和交流，
                    帮助游客更好地了解滕王阁的历史与文化。
                  </CardDescription>
                  <div id="smart-pavilion-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="pavilion-poetry-badge" variant="outline" className="flex items-center text-slate-600">
                      <BookOpenCheck className="w-3 h-3 mr-1" />
                      诗词背诵
                    </Badge>
                    <Badge id="pavilion-education-badge" variant="outline" className="flex items-center text-slate-600">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      文学教育
                    </Badge>
                    <Badge id="pavilion-tutoring-badge" variant="outline" className="flex items-center text-slate-600">
                      <Bot className="w-3 h-3 mr-1" />
                      智能辅导
                    </Badge>
                  </div>
                  <Button
                    id="smart-pavilion-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    体验产品
                  </Button>
                </CardHeader>
              </Card>

              <Card
                id="lushi-card"
                className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-video mt-[-24px]">
                  <img
                    id="lushi-image"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lawyer_index.png"
                    alt="律时"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge id="lushi-time-badge" className="bg-blue-500 hover:bg-blue-600">
                      <Clock className="w-3 h-3 mr-1" />
                      时间管理
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="lushi-title" className="text-2xl font-bold mb-3 flex items-center text-slate-800">
                    <Clock className="w-6 h-6 mr-2 text-cyan-700" />
                    时间管理虚拟人"律时"
                  </CardTitle>
                  <CardDescription id="lushi-description" className="text-lg leading-relaxed mb-4 text-slate-600">
                    {
                      "律师时间管理虚拟人助理APP“律时”是快语科技基于快语数字虚拟人平台的AI技术进行开发的时间管理的移动端软件及后台管理平台，帮助律师进行个人的时间管理，提高工作效率和工作效果。\n\n目前，快语科技开发的律师时间管理虚拟人助理APP“律时”已经��付江西凌科安时律师事务所进行使用。“律时”可以广泛应用于律师以及其他有时间管理需求的高端服务业人士，例如会计师、医师、教师、 企业高级管理人员等，使他们的工作更加轻松、高效。"
                    }
                  </CardDescription>
                  <div id="lushi-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="lushi-planning-badge" variant="outline" className="flex items-center text-slate-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      时间规划
                    </Badge>
                    <Badge id="lushi-efficiency-badge" variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      效率提升
                    </Badge>
                    <Badge id="lushi-assistant-badge" variant="outline" className="flex items-center text-slate-600">
                      <Bot className="w-3 h-3 mr-1" />
                      虚拟助手
                    </Badge>
                  </div>
                  <Button
                    id="lushi-demo-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    观看演示
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Reading Products */}
          <div id="reading-products-section" className="mb-20">
            <h2 id="reading-products-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              智能阅读产品
            </h2>
            <Card
              id="smart-reading-card"
              className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-video mt-[-24px]">
                  <video
                    id="reading-video"
                    src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/znpt.mp4.mp4"
                    className="w-full h-full object-cover"
                    preload="auto"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture={true}
                    x5-video-player-type="h5"
                    poster="https://www.kykyai.com/images/twg.png"
                  >
                    您的浏览器不支持视频播放。
                  </video>
                  <div className="absolute top-4 left-4">
                    <Badge id="tengwangge-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <BookOpen className="w-3 h-3 mr-1" />
                      智能阅读
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-8 flex flex-col justify-center">
                  <CardTitle
                    id="smart-reading-title"
                    className="text-3xl font-bold mb-4 flex items-center text-slate-800"
                  >
                    <BookOpen className="w-8 h-8 mr-3 text-cyan-700" />
                    "21世纪智能读书"产品 - AI驱动的智能阅读体验
                  </CardTitle>
                  <CardDescription
                    id="smart-reading-description"
                    className="text-lg leading-relaxed mb-6 text-slate-600"
                  >
                    {
                      "人工智能技术在教育领域的应用正引起第四次教育革命，尤其是最近的ChatGPT、Stable Diffusion等模型的发布与应用所带来的改变！快语科技作为这次革命的践行者，我们应用人工智能技术，发布了“21世纪智能读书”平台。\n\n“21世纪智能读书”平台所选取的书籍均来自教育部基础教育课程教材发展中心发布的《中小学生阅读指导目录（2020 年版）》中的300本中小学生推荐阅读书目。优质的阅读材料保障了孩子开卷有益的阅读质量。\n深圳快语科技有限公司与全国最大的少儿出版社——21世纪出版社集团合作的智能阅读平台产品“21世纪智能读书”小程序已于2022年10月上线微信平台，目前大量图书即将上架，出版社预计，二季度读者用户数可以达到10万。 智能阅读平台可以广泛应用于少儿读物出版行业，为少儿阅读带来全新的体验。"
                    }
                  </CardDescription>
                  <div id="smart-reading-features" className="flex flex-wrap gap-2 mb-6">
                    <Badge id="reading-recommendation-badge" variant="outline" className="flex items-center text-slate-600">
                      <Target className="w-3 h-3 mr-1" />
                      智能推荐
                    </Badge>
                    <Badge id="reading-knowledge-badge" variant="outline" className="flex items-center text-slate-600">
                      <Brain className="w-3 h-3 mr-1" />
                      知识图谱
                    </Badge>
                    <Badge id="reading-personalized-badge" variant="outline" className="flex items-center text-slate-600">
                      <Users2 className="w-3 h-3 mr-1" />
                      个性化学习
                    </Badge>
                    <Badge id="reading-analysis-badge" variant="outline" className="flex items-center text-slate-600">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      阅读分析
                    </Badge>
                  </div>
                  <div id="smart-reading-actions" className="space-y-3">
                    <Button
                      id="smart-reading-experience-btn"
                      className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      立即体验
                    </Button>
                    <div id="smart-reading-qr" className="text-center">
                      <p className="mb-2 text-slate-600">微信扫码访问智能读书吧</p>
                      <div
                        id="smart-reading-qr-placeholder"
                        className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg"
                      >
                        <span className="text-gray-400 text-xs">二维码</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </div>

          {/* Demo Videos */}
          <div id="demo-videos-section" className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 lg:p-12">
            <h3 id="demo-videos-title" className="text-2xl font-bold text-slate-800 mb-8 text-center">
              产品演示视频
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div id="demo1-container" className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  id="demo1-video"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/demo1.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="/ai-content-generation-demo.png"
                >
                  您的浏览器不支持视频播放。
                </video>
              </div>
              <div id="demo2-container" className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  id="demo2-video"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/demo2.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="/virtual-human-interaction.png"
                >
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
