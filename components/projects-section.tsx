"use client"

import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t("projects.title")}</h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative aspect-video">
              <video
                src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/tengwangge.mp4"
                className="w-full h-full object-cover"
                preload="auto"
                controls
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture={true}
                x5-video-player-type="h5"
                poster="/tengwangge-pavilion-heritage.png"
              >
                {t("projects.video_not_supported")}
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{t("projects.tengwangge_title")}</h3>
                  <p className="text-orange-50">{t("projects.tengwangge_media")}</p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardDescription className="text-gray-800">{t("projects.tengwangge_description")}</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative aspect-video">
              <video
                src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/lushi.mp4"
                className="w-full h-full object-cover"
                preload="auto"
                controls
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture={true}
                x5-video-player-type="h5"
                poster="/lushi-ai-time-management.png"
              >
                {t("projects.video_not_supported")}
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{t("projects.lushi_title")}</h3>
                  <p className="text-blue-50">{t("projects.lushi_media")}</p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardDescription className="text-gray-800">{t("projects.lushi_description")}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("projects.demo_videos_title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <video
                src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/demo1.mp4"
                className="w-full h-full object-cover"
                preload="auto"
                controls
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture={true}
                x5-video-player-type="h5"
                poster="/ai-content-generation-demo.png"
              >
                {t("projects.video_not_supported")}
              </video>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <video
                src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/demo2.mp4"
                className="w-full h-full object-cover"
                preload="auto"
                controls
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture={true}
                x5-video-player-type="h5"
                poster="/virtual-human-interaction.png"
              >
                {t("projects.video_not_supported")}
              </video>
            </div>
          </div>
        </div>

        {/* WeChat QR Section */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("projects.smart_reading_title")}</h3>
          <p className="text-gray-800 mb-8">{t("projects.smart_reading_description")}</p>
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg">
            <span className="text-gray-400 text-sm">{t("projects.qr_placeholder")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
