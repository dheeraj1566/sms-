import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from '@/components/SectionHeading'
import { TestimonialCard } from '@/components/Cards'
import { TESTIMONIALS } from '@/data/content'

export default function TestimonialsSlider() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Real feedback from homeowners, hoteliers and business owners we have worked with across Jaipur."
          align="center"
        />

        <div className="mt-14 testimonial-swiper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="!h-auto pb-2">
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
