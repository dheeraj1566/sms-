import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { Button } from './Button'
import { NAV_LINKS } from '@/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        solid ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <NavLink to="/" onClick={() => setOpen(false)} aria-label="Surajmal Sons home">
          <Logo variant="dark" />
        </NavLink>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[0.8rem] uppercase tracking-[0.13em] transition-colors duration-200 ${
                  isActive ? 'text-bronze' : solid ? 'text-ink/80 hover:text-bronze' : 'text-ink/90 hover:text-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="primary" className="!py-3" onClick={() => navigate('/contact')}>
            Book Consultation
          </Button>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream border-t border-ink/10 mt-2 overflow-hidden"
          >
            <div className="container-lux flex flex-col gap-5 py-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-[0.95rem] uppercase tracking-[0.13em] text-ink/85"
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                variant="primary"
                onClick={() => {
                  setOpen(false)
                  navigate('/contact')
                }}
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
