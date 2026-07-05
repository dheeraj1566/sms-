import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="bg-ink pt-40 pb-20">
      <div className="container-lux">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[0.75rem] uppercase tracking-[0.24em] text-gold mb-5 block"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-[2.6rem] sm:text-[3.4rem] text-cream leading-[1.08] max-w-2xl text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl text-cream/65 text-[1rem] leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
