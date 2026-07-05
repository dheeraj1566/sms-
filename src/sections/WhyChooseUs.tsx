import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { WHY_CHOOSE_US } from '@/data/content'

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Reasons Clients Come Back to Us"
          description="Interior work is judged years after handover. These are the six things we refuse to compromise on."
          align="center"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/8 border border-ink/8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-cream p-9 flex flex-col gap-4"
              >
                <Icon size={26} strokeWidth={1.4} className="text-bronze" />
                <h3 className="font-display text-[1.25rem] text-ink">{item.title}</h3>
                <p className="text-[0.9rem] leading-relaxed text-text/70">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
