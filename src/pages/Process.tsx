import PageHeader from '@/components/PageHeader'
import ProcessSection from '@/sections/ProcessSection'
import CTASection from '@/sections/CTASection'

export default function Process() {
  return (
    <>
      <PageHeader
        eyebrow="Our Process"
        title="How a Project Moves From Idea to Handover"
        description="A structured, six-stage process — the same design and site team stays with your project throughout."
      />
      <ProcessSection />
      <CTASection />
    </>
  )
}
