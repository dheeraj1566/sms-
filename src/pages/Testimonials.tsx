import PageHeader from '@/components/PageHeader'
import TestimonialsSlider from '@/sections/TestimonialsSlider'
import CTASection from '@/sections/CTASection'

export default function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Client Stories"
        title="Feedback From Our Clients"
        description="Homeowners, hoteliers and business owners on working with Surajmal Sons."
      />
      <TestimonialsSlider />
      <CTASection />
    </>
  )
}
