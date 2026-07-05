import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { ProjectCard } from '@/components/Cards'
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects'
import { LinkButton } from '@/components/Button'

export default function FeaturedProjects({ showFilters = true, limit }: { showFilters?: boolean; limit?: number }) {
  const [active, setActive] = useState<string>('All')

  const filtered = (active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)).slice(
    0,
    limit ?? PROJECTS.length
  )

  return (
    <section className="py-24 sm:py-28 bg-ink">
      <div className="container-lux">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Projects"
            description="A selection of homes, hotels, offices and showrooms we have designed and built across Jaipur."
            light
          />
          <Link to="/projects" className="shrink-0">
            <LinkButton variant="secondary">
              View All Projects <ArrowRight size={15} />
            </LinkButton>
          </Link>
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-3 mb-10">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[0.75rem] uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border transition-colors duration-250 ${
                  active === cat
                    ? 'bg-gold text-ink border-gold'
                    : 'border-cream/25 text-cream/70 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
