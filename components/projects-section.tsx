import { Card, CardDescription, CardHeader } from "@/components/ui/card"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">媒体报道项目</h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">我们的创新项目获得了各大媒体的广泛关注和报道</p>
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
                您的浏览器不支持视频播放。
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">滕王阁项目</h3>
                  <p className="text-orange-50">各大媒体报道</p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardDescription className="text-gray-800">
                滕王阁项目展示了我们在文化遗产数字化和虚拟交互方面的创新能力，获得了业界的广泛认可。
              </CardDescription>
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
                您的浏览器不支持视频播放。
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">律时项目</h3>
                  <p className="text-blue-50">各大媒体报道</p>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardDescription className="text-gray-800">
                律时项目在智能化内容生成和时间管理方面的突破性进展，受到了媒体和用户的高度评价。
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">技术演示视频</h3>
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
                您的浏览器不支持视频播放。
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
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>

        {/* WeChat QR Section */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">智能读书吧</h3>
          <p className="text-gray-800 mb-8">微信扫一扫访问智能读书吧</p>
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-100 rounded-lg">
            <span className="text-gray-400 text-sm">二维码区域</span>
          </div>
        </div>
      </div>
    </section>
  )
}
