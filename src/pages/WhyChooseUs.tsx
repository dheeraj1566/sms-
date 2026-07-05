import PageHeader from '@/components/PageHeader'
import WhyChooseUs from '@/sections/WhyChooseUs'
import CTASection from '@/sections/CTASection'

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="What Sets Our Studio Apart"
        description="Six commitments we hold ourselves to on every single project, regardless of size."
      />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
