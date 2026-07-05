import PageHeader from '@/components/PageHeader'
import AboutStory from '@/sections/AboutStory'
import WhyChooseUs from '@/sections/WhyChooseUs'
import CTASection from '@/sections/CTASection'
import { motion } from 'framer-motion'
import { placeholderImage } from '@/utils/placeholder'

const VALUES = [
  {
    title: 'Mission',
    text: 'To deliver interiors that are designed around how a family, team or guest actually uses a space — and built to last well beyond the handover date.',
  },
  {
    title: 'Vision',
    text: 'To be the most trusted name in interior design and custom furniture across Rajasthan, known equally for design sense and construction quality.',
  },
  {
    title: 'Craftsmanship',
    text: 'Every piece of furniture passes through the same in-house workshop our founder set up in 1978 — carpentry knowledge passed down, not outsourced.',
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Family Workshop That Became a Design Studio"
        description="Three generations of carpentry and design experience, now serving homes, hotels, offices and showrooms across Jaipur."
      />
      <AboutStory />

      <section className="py-24 sm:py-28 bg-white">
        <div className="container-lux grid md:grid-cols-3 gap-8">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-gold pl-6"
            >
              <h3 className="font-display text-[1.4rem] text-ink mb-3">{v.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-text/70">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-cream">
        <div className="container-lux grid sm:grid-cols-3 gap-6">
          {['workshop-1', 'workshop-2', 'workshop-3'].map((seed) => (
            <div key={seed} className="aspect-[4/5] overflow-hidden rounded-[4px]">
              <img src={placeholderImage(seed)} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  )
}
