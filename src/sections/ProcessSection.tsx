import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { PROCESS_STEPS } from '@/data/content'

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-28 bg-cream overflow-hidden">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our Process"
          title="From First Sketch to Handover"
          description="Six stages, the same team throughout — so nothing gets lost between design and delivery."
          align="center"
        />

        <div className="relative mt-20">
          {/* connecting inlay thread */}
          <div className="hidden lg:block absolute top-[22px] left-0 right-0 h-[2px] bg-ink/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-gold via-bronze to-gold"
            />
          </div>

          <div className="grid lg:grid-cols-6 gap-x-6 gap-y-14">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="flex flex-col gap-4"
              >
                <div className="relative flex items-center gap-3">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-gold font-display text-[1rem] border-2 border-gold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-[1.2rem] text-ink">{step.title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-text/65">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
