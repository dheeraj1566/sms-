import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, LinkButton } from '@/components/Button'
import { StatBlock } from '@/components/Cards'
import { BUSINESS } from '@/constants'
import { placeholderImage } from '@/utils/placeholder'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink">
      <img
        src={placeholderImage('hero-living-room')}
        alt="Living room interior by Surajmal Sons"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-ink/25" />

      <div className="container-lux relative z-10 pb-28 pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-[0.75rem] uppercase tracking-[0.26em] text-gold mb-6"
        >
          Jaipur's Interior Design &amp; Furniture Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem] leading-[1.05] text-cream max-w-3xl text-balance"
        >
          Crafting Timeless Interiors That Feel Like Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-cream/75 text-[1.05rem] leading-relaxed"
        >
          From first sketch to final handover — residential, hotel, office and showroom
          interiors, and furniture built in our own Jaipur workshop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link to="/contact">
            <Button variant="primary" className="bg-gold text-ink border-gold hover:bg-cream hover:border-cream">
              Get Free Consultation <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/projects">
            <LinkButton variant="secondary">View Projects</LinkButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 w-full border-t border-cream/15 bg-ink/40 backdrop-blur-sm"
      >
        <div className="container-lux flex flex-wrap gap-10 sm:gap-16 py-7">
          <div className="[&_span:first-child]:text-cream [&_span:last-child]:text-cream/55">
            <StatBlock value={BUSINESS.years} label="Years Experience" />
          </div>
          <div className="[&_span:first-child]:text-cream [&_span:last-child]:text-cream/55">
            <StatBlock value={BUSINESS.projects} label="Projects Delivered" />
          </div>
          <div className="[&_span:first-child]:text-cream [&_span:last-child]:text-cream/55">
            <StatBlock value={BUSINESS.clients} label="Happy Clients" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
