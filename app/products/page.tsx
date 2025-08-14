import { PageLayout } from "@/components/page-layout"
import { ProductsHeroSection } from "@/components/products-hero-section"
import { ProductsGridSection } from "@/components/products-grid-section"

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductsHeroSection />
      <ProductsGridSection />
    </PageLayout>
  )
}
