import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`text-[0.72rem] uppercase tracking-[0.24em] font-medium ${
            light ? 'text-gold' : 'text-bronze'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[2.1rem] sm:text-[2.6rem] leading-[1.1] text-balance ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <div className="inlay-rule" />
      {description && (
        <p className={`text-[1rem] leading-relaxed ${light ? 'text-cream/70' : 'text-text/75'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
