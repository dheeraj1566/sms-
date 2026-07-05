import PageHeader from '@/components/PageHeader'
import FAQAccordion from '@/sections/FAQAccordion'
import CTASection from '@/sections/CTASection'

export default function FAQs() {
  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Answers to what clients most often ask before starting a project with us."
      />
      <FAQAccordion />
      <CTASection />
    </>
  )
}
