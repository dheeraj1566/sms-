import PageHeader from '@/components/PageHeader'
import ServicesGrid from '@/sections/ServicesGrid'
import ProcessSection from '@/sections/ProcessSection'
import CTASection from '@/sections/CTASection'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Every Interior Discipline, One Accountable Team"
        description="Design, manufacturing and installation for residential, commercial and hospitality spaces — handled entirely in-house."
      />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  )
}
