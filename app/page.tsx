import { PageLayout } from "@/components/page-layout"
import { HeroSection } from "@/components/hero-section"
import { HeroVideoSection } from "@/components/hero-video-section"
import { CompanyIntroSection } from "@/components/company-intro-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <HeroVideoSection />
      <CompanyIntroSection />
      <CTASection />
    </PageLayout>
  )
}
