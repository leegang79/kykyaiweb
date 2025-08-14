export function HeroVideoSection() {
  return (
    <section id="hero-video-section" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="hero-video-container" className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              id="hero-intro-video"
              src="https://kykyai-web.oss-cn-hangzhou.aliyuncs.com/owe/introduce.mp4"
              className="w-full h-full object-cover"
              preload="auto"
              controls
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture={true}
              x5-video-player-type="h5"
              poster="https://www.kykyai.com/images/kyintro.png"
            >
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
