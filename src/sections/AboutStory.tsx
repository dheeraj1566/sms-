import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { StatBlock } from '@/components/Cards'
import { BUSINESS } from '@/constants'
import { placeholderImage } from '@/utils/placeholder'

export default function AboutStory() {
  return (
    <section className="py-24 sm:py-28 bg-cream">
      <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[4px]">
            <img src={placeholderImage('workshop')} alt="Surajmal Sons workshop" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white shadow-[0_16px_40px_rgba(31,31,31,0.16)] px-8 py-6 hidden sm:block">
            <StatBlock value="1978" label="Family Business Since" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Surajmal Sons"
            title="Three Generations of Furniture Craftsmanship"
            description="What began as a family carpentry workshop in Jaipur has grown into a full-service interior design and furniture manufacturing studio — without losing the attention to detail that started it."
          />
          <p className="text-[0.95rem] leading-relaxed text-text/75 max-w-xl">
            Today, Surajmal Sons designs and builds complete interiors for homes, offices,
            hotels and showrooms across Rajasthan. Every project moves through the same
            in-house team — designers, 3D visualisers, carpenters and site engineers — so
            what you approve on paper is exactly what gets delivered.
          </p>
          <div className="flex gap-10 pt-2">
            <StatBlock value={BUSINESS.years} label="Years Experience" />
            <StatBlock value={BUSINESS.projects} label="Projects Delivered" />
            <StatBlock value={BUSINESS.clients} label="Happy Clients" />
          </div>
        </div>
      </div>
    </section>
  )
}
