import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/sections/CTASection'
import { placeholderImage } from '@/utils/placeholder'

const GALLERY_ITEMS = [
  { seed: 'g1', h: 'h-72', label: 'Living Room, Vaishali Nagar' },
  { seed: 'g2', h: 'h-96', label: 'Modular Kitchen, Mansarovar' },
  { seed: 'g3', h: 'h-60', label: 'Master Bedroom, Civil Lines' },
  { seed: 'g4', h: 'h-80', label: 'Hotel Lobby, C-Scheme' },
  { seed: 'g5', h: 'h-64', label: 'Office Reception, Sitapura' },
  { seed: 'g6', h: 'h-96', label: 'Walk-in Wardrobe, Malviya Nagar' },
  { seed: 'g7', h: 'h-72', label: 'False Ceiling Detail' },
  { seed: 'g8', h: 'h-60', label: 'Dining Area, Mansarovar' },
  { seed: 'g9', h: 'h-88', label: 'Showroom Facade, Tonk Road' },
  { seed: 'g10', h: 'h-72', label: 'TV Unit, Vaishali Nagar' },
  { seed: 'g11', h: 'h-64', label: 'Restaurant Seating, MI Road' },
  { seed: 'g12', h: 'h-80', label: 'Custom Sofa Set' },
]

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A Closer Look at Our Interiors"
        description="Details, finishes and full rooms from projects across Jaipur — click through for the full story behind any piece."
      />

      <section className="py-24 sm:py-28 bg-cream">
        <div className="container-lux">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.seed}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                className={`group relative mb-6 overflow-hidden rounded-[4px] ${item.h} break-inside-avoid`}
              >
                <img
                  src={placeholderImage(item.seed)}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.1]"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-400" />
                <span className="absolute bottom-4 left-4 text-cream text-[0.82rem] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
