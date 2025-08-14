import { PageLayout } from "@/components/page-layout"
import { TechnologyHeroSection } from "@/components/technology-hero-section"
import { TechnologyPlatformsSection } from "@/components/technology-platforms-section"

export default function TechnologyPage() {
  return (
    <PageLayout>
      <TechnologyHeroSection />
      <TechnologyPlatformsSection />
    </PageLayout>
  )
}
