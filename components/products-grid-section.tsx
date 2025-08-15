"use client"

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
import { useLanguage } from "@/contexts/language-context"

export function ProductsGridSection() {
  const { t } = useLanguage()

  return (
    <section id="products-grid-section" className="py-20 bg-white w-full">
      <div className="w-full pt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* AI Tour Guide Systems */}
          <div id="ai-tour-guide-section" className="mb-20">
            <h2 id="ai-tour-guide-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {t("products.grid.tour_guide_title")}
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
                      {t("products.tengwangge.heritage_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="tengwangge-title" className="text-2xl font-bold mb-3 flex items-center text-slate-800">
                    <MapPin className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.tengwangge.title")}
                  </CardTitle>
                  <CardDescription id="tengwangge-description" className="text-lg leading-relaxed mb-4 text-slate-600">
                    {t("products.tengwangge.description")}
                  </CardDescription>
                  <div id="tengwangge-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="tengwangge-voice-badge" variant="outline" className="flex items-center text-slate-600">
                      <Mic className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.voice_badge")}
                    </Badge>
                    <Badge id="tengwangge-history-badge" variant="outline" className="flex items-center text-slate-600">
                      <History className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.history_badge")}
                    </Badge>
                    <Badge
                      id="tengwangge-interaction-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <Users2 className="w-3 h-3 mr-1" />
                      {t("products.tengwangge.interaction_badge")}
                    </Badge>
                  </div>
                  <Button
                    id="tengwangge-learn-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.tengwangge.learn_btn")}
                  </Button>
                </CardHeader>

                {/* Tengwangge Media Coverage Section */}
                <div
                  id="tengwangge-media-coverage"
                  className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 w-full"
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    {t("products.tengwangge.media_title")}
                  </h3>
                  <div className="relative overflow-hidden w-full">
                    <div className="flex animate-marquee space-x-8 whitespace-nowrap w-max">
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/cctv_logo.png"
                          alt={t("products.tengwangge.media.cctv.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">{t("products.tengwangge.media.cctv.name")}</h4>
                          <p className="text-sm text-slate-600">{t("products.tengwangge.media.cctv.description")}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/peoples_daily_logo.png"
                          alt={t("products.tengwangge.media.peoples_daily.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {t("products.tengwangge.media.peoples_daily.name")}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {t("products.tengwangge.media.peoples_daily.description")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/xinhua_logo.png"
                          alt={t("products.tengwangge.media.xinhua.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">{t("products.tengwangge.media.xinhua.name")}</h4>
                          <p className="text-sm text-slate-600">{t("products.tengwangge.media.xinhua.description")}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/jiangxi_daily_logo.png"
                          alt={t("products.tengwangge.media.jiangxi_daily.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {t("products.tengwangge.media.jiangxi_daily.name")}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {t("products.tengwangge.media.jiangxi_daily.description")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/tech_daily_logo.png"
                          alt={t("products.tengwangge.media.tech_daily.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {t("products.tengwangge.media.tech_daily.name")}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {t("products.tengwangge.media.tech_daily.description")}
                          </p>
                        </div>
                      </div>
                      {/* Duplicate items for seamless loop */}
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/cctv_logo.png"
                          alt={t("products.tengwangge.media.cctv.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">{t("products.tengwangge.media.cctv.name")}</h4>
                          <p className="text-sm text-slate-600">{t("products.tengwangge.media.cctv.description")}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                        <img
                          src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/peoples_daily_logo.png"
                          alt={t("products.tengwangge.media.peoples_daily.name")}
                          className="w-16 h-16 object-contain rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-slate-800">
                            {t("products.tengwangge.media.peoples_daily.name")}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {t("products.tengwangge.media.peoples_daily.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <Badge id="jinggangshan-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Mountain className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.heritage_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle
                    id="jinggangshan-title"
                    className="text-2xl font-bold mb-3 flex items-center text-slate-800"
                  >
                    <Mountain className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.jinggangshan.title")}
                  </CardTitle>
                  <CardDescription
                    id="jinggangshan-description"
                    className="text-lg leading-relaxed mb-4 text-slate-600"
                  >
                    {t("products.jinggangshan.description")}
                  </CardDescription>
                  <div id="jinggangshan-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      id="jinggangshan-education-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.education_badge")}
                    </Badge>
                    <Badge
                      id="jinggangshan-history-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <History className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.history_badge")}
                    </Badge>
                    <Badge
                      id="jinggangshan-patriotism-badge"
                      variant="outline"
                      className="flex items-center text-slate-600"
                    >
                      <Heart className="w-3 h-3 mr-1" />
                      {t("products.jinggangshan.patriotism_badge")}
                    </Badge>
                  </div>
                  <Button
                    id="jinggangshan-learn-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.jinggangshan.learn_btn")}
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Smart Interaction */}
          <div id="smart-interaction-section" className="mb-20">
            <h2 id="smart-interaction-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {t("products.grid.smart_interaction_title")}
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
                    <Badge id="smart-pavilion-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                      <Building2 className="w-3 h-3 mr-1" />
                      {t("products.pavilion.heritage_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle
                    id="smart-pavilion-title"
                    className="text-2xl font-bold mb-3 flex items-center text-slate-800"
                  >
                    <Building2 className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.pavilion.title")}
                  </CardTitle>
                  <CardDescription
                    id="smart-pavilion-description"
                    className="text-lg leading-relaxed mb-4 text-slate-600"
                  >
                    {t("products.pavilion.description")}
                  </CardDescription>
                  <div id="smart-pavilion-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="pavilion-poetry-badge" variant="outline" className="flex items-center text-slate-600">
                      <BookOpenCheck className="w-3 h-3 mr-1" />
                      {t("products.pavilion.poetry_badge")}
                    </Badge>
                    <Badge id="pavilion-education-badge" variant="outline" className="flex items-center text-slate-600">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      {t("products.pavilion.education_badge")}
                    </Badge>
                    <Badge id="pavilion-tutoring-badge" variant="outline" className="flex items-center text-slate-600">
                      <Bot className="w-3 h-3 mr-1" />
                      {t("products.pavilion.tutoring_badge")}
                    </Badge>
                  </div>
                  <Button
                    id="smart-pavilion-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.pavilion.experience_btn")}
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
                      {t("products.lushi.time_badge")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle id="lushi-title" className="text-2xl font-bold mb-3 flex items-center text-slate-800">
                    <Clock className="w-6 h-6 mr-2 text-cyan-700" />
                    {t("products.lushi.title")}
                  </CardTitle>
                  <CardDescription id="lushi-description" className="text-lg leading-relaxed mb-4 text-slate-600">
                    {t("products.lushi.description")}
                  </CardDescription>
                  <div id="lushi-features" className="flex flex-wrap gap-2 mb-4">
                    <Badge id="lushi-planning-badge" variant="outline" className="flex items-center text-slate-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {t("products.lushi.planning_badge")}
                    </Badge>
                    <Badge id="lushi-efficiency-badge" variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {t("products.lushi.efficiency_badge")}
                    </Badge>
                    <Badge id="lushi-assistant-badge" variant="outline" className="flex items-center text-slate-600">
                      <Bot className="w-3 h-3 mr-1" />
                      {t("products.lushi.assistant_badge")}
                    </Badge>
                  </div>
                  <Button
                    id="lushi-demo-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {t("products.lushi.demo_btn")}
                  </Button>

                  {/* Lushi Media Coverage Section */}
                  <div
                    id="lushi-media-coverage"
                    className="mt-12 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8"
                  >
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                      {t("products.lushi.media_title")}
                    </h3>
                    <div className="relative overflow-hidden">
                      <div className="flex animate-marquee space-x-8 whitespace-nowrap">
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media1.jpg"
                            alt={t("products.lushi.media.legal_daily.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.legal_daily.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.legal_daily.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media2.jpg"
                            alt={t("products.lushi.media.china_lawyer.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.china_lawyer.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.china_lawyer.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media3.jpg"
                            alt={t("products.lushi.media.jiangxi_legal.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.jiangxi_legal.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.jiangxi_legal.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media4.jpg"
                            alt={t("products.lushi.media.shenzhen_daily.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.shenzhen_daily.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.shenzhen_daily.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media5.jpg"
                            alt={t("products.lushi.media.nanchang_daily.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.nanchang_daily.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.nanchang_daily.description")}
                            </p>
                          </div>
                        </div>
                        {/* Duplicate items for seamless loop */}
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media1.jpg"
                            alt={t("products.lushi.media.legal_daily.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.legal_daily.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.legal_daily.description")}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md min-w-max">
                          <img
                            src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi_media2.jpg"
                            alt={t("products.lushi.media.china_lawyer.name")}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-800">
                              {t("products.lushi.media.china_lawyer.name")}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {t("products.lushi.media.china_lawyer.description")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Reading Products */}
          <div id="reading-products-section" className="mb-20">
            <h2 id="reading-products-title" className="text-3xl font-bold text-slate-800 mb-12 text-center">
              {t("products.grid.reading_products_title")}
            </h2>
            <Card
              id="smart-reading-card"
              className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-video mt-[-24px]">
                <video
                  id="reading-video"
                  src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/znpt.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="https://www.kykyai.com/images/read.png"
                >
                  您的浏览器不支持视频播放。
                </video>
                <div className="absolute top-4 left-4">
                  <Badge id="smart-reading-heritage-badge" className="bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {t("products.reading.smart_badge")}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-8 flex flex-col justify-center">
                <CardTitle
                  id="smart-reading-title"
                  className="text-3xl font-bold mb-4 flex items-center text-slate-800"
                >
                  <BookOpen className="w-8 h-8 mr-3 text-cyan-700" />
                  {t("products.reading.title")}
                </CardTitle>
                <CardDescription id="smart-reading-description" className="text-lg leading-relaxed mb-6 text-slate-600">
                  {t("products.reading.description")}
                </CardDescription>
                <div id="smart-reading-features" className="flex flex-wrap gap-2 mb-6">
                  <Badge
                    id="reading-recommendation-badge"
                    variant="outline"
                    className="flex items-center text-slate-600"
                  >
                    <Target className="w-3 h-3 mr-1" />
                    {t("products.reading.recommendation_badge")}
                  </Badge>
                  <Badge id="reading-knowledge-badge" variant="outline" className="flex items-center text-slate-600">
                    <Brain className="w-3 h-3 mr-1" />
                    {t("products.reading.knowledge_badge")}
                  </Badge>
                  <Badge id="reading-personalized-badge" variant="outline" className="flex items-center text-slate-600">
                    <Users2 className="w-3 h-3 mr-1" />
                    {t("products.reading.personalized_badge")}
                  </Badge>
                  <Badge id="reading-analysis-badge" variant="outline" className="flex items-center text-slate-600">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    {t("products.reading.analysis_badge")}
                  </Badge>
                </div>
                <div id="smart-reading-actions" className="space-y-3">
                  <Button
                    id="smart-reading-experience-btn"
                    className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("products.reading.experience_btn")}
                  </Button>
                  <div id="smart-reading-qr" className="text-center">
                    <p className="mb-2 text-slate-600">{t("products.reading.qr_text")}</p>
                    <div
                      id="smart-reading-qr-placeholder"
                      className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg"
                    >
                      <span className="text-gray-400 text-xs">{t("products.reading.qr_placeholder")}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Demo Videos */}
          <div id="demo-videos-section" className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 lg:p-12">
            <h3 id="demo-videos-title" className="text-2xl font-bold text-slate-800 mb-8 text-center">
              {t("products.grid.demo_videos_title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div id="demo1-container" className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  id="cctv1-video"
                  src="https://www.kykyai.com/images/20240406.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="https://www.kykyai.com/images/cctv1.png"
                >
                  您的浏览器不支持视频播放。
                </video>
              </div>
              <div id="demo2-container" className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  id="cctv2-video"
                  src="https://www.kykyai.com/images/20250706.mp4"
                  className="w-full h-full object-cover"
                  preload="auto"
                  controls
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  disablePictureInPicture={true}
                  x5-video-player-type="h5"
                  poster="https://www.kykyai.com/images/cctv2.png"
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
