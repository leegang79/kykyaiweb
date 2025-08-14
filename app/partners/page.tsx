import { PageLayout } from "@/components/page-layout"
import { PartnersHeroSection } from "@/components/partners-hero-section"
import { PartnersShowcaseSection } from "@/components/partners-showcase-section"

export default function PartnersPage() {
  return (
    <PageLayout>
      <PartnersHeroSection />
      <PartnersShowcaseSection />
    </PageLayout>
  )
}
