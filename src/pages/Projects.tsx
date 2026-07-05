import PageHeader from '@/components/PageHeader'
import FeaturedProjects from '@/sections/FeaturedProjects'
import CTASection from '@/sections/CTASection'

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects Across Jaipur"
        description="Browse completed homes, hotels, offices, restaurants and showrooms by category."
      />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
