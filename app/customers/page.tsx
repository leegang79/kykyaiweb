import { PageLayout } from "@/components/page-layout"
import { CustomersHeroSection } from "@/components/customers-hero-section"
import { CustomersShowcaseSection } from "@/components/customers-showcase-section"

export default function CustomersPage() {
  return (
    <PageLayout>
      <CustomersHeroSection />
      <CustomersShowcaseSection />
    </PageLayout>
  )
}
