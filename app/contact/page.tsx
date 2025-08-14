import { PageLayout } from "@/components/page-layout"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactFormSection } from "@/components/contact-form-section"

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactHeroSection />
      <ContactFormSection />
    </PageLayout>
  )
}
