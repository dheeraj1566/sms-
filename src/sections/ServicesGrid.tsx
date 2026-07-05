import SectionHeading from '@/components/SectionHeading'
import { ServiceCard } from '@/components/Cards'
import { SERVICES } from '@/data/services'

export default function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES

  return (
    <section className="py-24 sm:py-28 bg-cream">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Complete Interior Solutions, Under One Roof"
            description="From the first floor plan to the last light fitting — every service is delivered by our own design and manufacturing team."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
