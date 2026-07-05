import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { FAQS } from '@/data/content'

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null)

  return (
    <section className="py-24 sm:py-28 bg-cream">
      <div className="container-lux max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions We Hear Most"
          description="Can't find what you're looking for? Reach out and our design team will answer directly."
          align="center"
        />

        <div className="mt-14 flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-[1.1rem] text-ink">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-bronze"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[0.92rem] leading-relaxed text-text/70 max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
