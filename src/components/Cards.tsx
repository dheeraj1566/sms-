import { motion } from 'framer-motion'
import { Star, MapPin, Ruler } from 'lucide-react'
import type { Service, Project, Testimonial } from '@/types'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: (index % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[4px] overflow-hidden shadow-[0_2px_18px_rgba(31,31,31,0.06)] hover:shadow-[0_16px_40px_rgba(31,31,31,0.14)] transition-all duration-400"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-bronze">
          <Icon size={20} strokeWidth={1.6} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-[1.3rem] text-ink mb-2">{service.title}</h3>
        <p className="text-[0.9rem] leading-relaxed text-text/70">{service.description}</p>
      </div>
    </motion.div>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[4px] bg-ink"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-400" />
        <span className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-[0.18em] text-cream/90 bg-ink/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cream/20">
          {project.category}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
          <h3 className="font-display text-[1.4rem] text-cream mb-1.5">{project.title}</h3>
          <div className="flex items-center gap-4 text-[0.78rem] text-cream/75">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler size={13} /> {project.area}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-[4px] p-8 h-full flex flex-col shadow-[0_2px_18px_rgba(31,31,31,0.06)]">
      <div className="flex gap-1 mb-5 text-gold">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} fill="#C8A96A" strokeWidth={0} />
        ))}
      </div>
      <p className="font-display text-[1.15rem] leading-relaxed text-ink/85 italic mb-6 flex-1">
        “{testimonial.quote}”
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-ink/8">
        <div className="h-11 w-11 rounded-full bg-ink text-gold flex items-center justify-center font-display text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-ink">{testimonial.name}</div>
          <div className="text-xs text-text/55">{testimonial.location} · {testimonial.project}</div>
        </div>
      </div>
    </div>
  )
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-[2.1rem] sm:text-[2.4rem] text-ink leading-none">{value}</span>
      <span className="text-[0.72rem] uppercase tracking-[0.16em] text-text/60">{label}</span>
    </div>
  )
}
