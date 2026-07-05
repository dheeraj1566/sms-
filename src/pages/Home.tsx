import Hero from '@/sections/Hero'
import ServicesGrid from '@/sections/ServicesGrid'
import FeaturedProjects from '@/sections/FeaturedProjects'
import AboutStory from '@/sections/AboutStory'
import WhyChooseUs from '@/sections/WhyChooseUs'
import ProcessSection from '@/sections/ProcessSection'
import TestimonialsSlider from '@/sections/TestimonialsSlider'
import CTASection from '@/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid limit={6} />
      <AboutStory />
      <FeaturedProjects showFilters={false} limit={6} />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSlider />
      <CTASection />
    </>
  )
}
