import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'

export default function CTASection() {
  return (
    <section className="bg-ink py-20">
      <div className="container-lux flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-display text-[2rem] sm:text-[2.4rem] text-cream leading-tight max-w-lg text-balance">
            Let's design a space you'll love coming home to.
          </h2>
          <p className="text-cream/60 mt-3 max-w-md">
            Book a free, no-obligation consultation with our design team.
          </p>
        </div>
        <Link to="/contact" className="shrink-0">
          <Button variant="primary" className="bg-gold text-ink border-gold hover:bg-cream hover:border-cream">
            Get Free Consultation <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
