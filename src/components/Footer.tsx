import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import { BUSINESS, NAV_LINKS } from '@/constants'
import { SERVICES } from '@/data/services'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.6.4-1 1-1h1.5V8Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-lux py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Logo variant="light" />
          <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
            Complete interior solutions for homes, offices, hotels and showrooms — from
            concept to handover, built by our own workshop in Jaipur.
          </p>
          <div className="flex items-center gap-4 pt-1">
            <a href={BUSINESS.instagram} aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors">
              <InstagramIcon />
            </a>
            <a href={BUSINESS.facebook} aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[0.72rem] uppercase tracking-[0.2em] text-gold mb-5">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-cream/70 hover:text-cream transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.72rem] uppercase tracking-[0.2em] text-gold mb-5">Services</h4>
          <ul className="flex flex-col gap-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link to="/services" className="text-sm text-cream/70 hover:text-cream transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.72rem] uppercase tracking-[0.2em] text-gold mb-5">Studio</h4>
          <ul className="flex flex-col gap-3.5 text-sm text-cream/70">
            <li className="flex gap-3">
              <MapPin size={17} className="shrink-0 mt-0.5 text-gold" />
              <span>{BUSINESS.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="shrink-0 text-gold" />
              <span>{BUSINESS.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={17} className="shrink-0 text-gold" />
              <span>{BUSINESS.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-lux py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <span>© {new Date().getFullYear()} Surajmal Sons. All rights reserved.</span>
          <span>Designed &amp; built for Surajmal Sons, Jaipur.</span>
        </div>
      </div>
    </footer>
  )
}
