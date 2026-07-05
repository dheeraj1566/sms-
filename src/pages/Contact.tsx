import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/Button'
import { BUSINESS } from '@/constants'
import type { ContactFormValues } from '@/types'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: ContactFormValues) => {
    // Wire this up to your backend, form service, or email API.
    await new Promise((res) => setTimeout(res, 700))
    console.log('Contact form submission:', data)
    setSubmitted(true)
    reset()
  }

  const inputClass =
    'w-full bg-white border border-ink/15 rounded-[3px] px-4 py-3.5 text-[0.92rem] text-ink placeholder:text-text/40 focus:border-gold focus:outline-none transition-colors'

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Book Your Free Consultation"
        description="Tell us about your space and we'll get back to you within one working day."
      />

      <section className="py-24 sm:py-28 bg-cream">
        <div className="container-lux grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
          <div className="bg-white p-8 sm:p-10 rounded-[4px] shadow-[0_2px_18px_rgba(31,31,31,0.06)]">
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-4 py-16">
                <CheckCircle2 size={44} className="text-bronze" strokeWidth={1.4} />
                <h3 className="font-display text-[1.6rem] text-ink">Thank you, we've received your enquiry</h3>
                <p className="text-text/65 max-w-sm">
                  A member of our design team will call you within one working day to schedule
                  your free consultation.
                </p>
                <Button variant="ghost" onClick={() => setSubmitted(false)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.78rem] uppercase tracking-[0.1em] text-text/60 mb-2">
                      Full Name
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Your name"
                      {...register('name', { required: 'Please enter your name' })}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[0.78rem] uppercase tracking-[0.1em] text-text/60 mb-2">
                      Phone Number
                    </label>
                    <input
                      className={inputClass}
                      placeholder="98290 XXXXX"
                      {...register('phone', {
                        required: 'Please enter your phone number',
                        pattern: { value: /^[0-9+\-\s]{8,15}$/, message: 'Enter a valid phone number' },
                      })}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.78rem] uppercase tracking-[0.1em] text-text/60 mb-2">
                      Email Address
                    </label>
                    <input
                      className={inputClass}
                      placeholder="you@email.com"
                      {...register('email', {
                        required: 'Please enter your email',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                      })}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[0.78rem] uppercase tracking-[0.1em] text-text/60 mb-2">
                      City
                    </label>
                    <input className={inputClass} placeholder="Jaipur" {...register('city')} />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.78rem] uppercase tracking-[0.1em] text-text/60 mb-2">
                    Service Required
                  </label>
                  <select className={inputClass} defaultValue="" {...register('service', { required: 'Please select a service' })}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Residential Interior</option>
                    <option>Office Interior</option>
                    <option>Hotel Interior</option>
                    <option>Showroom Interior</option>
                    <option>Modular Kitchen</option>
                    <option>Custom Furniture</option>
                    <option>Turnkey Interior Project</option>
                  </select>
                  {errors.service && <p className="text-xs text-red-600 mt-1.5">{errors.service.message}</p>}
                </div>

                <div>
                  <label className="block text-[0.78rem] uppercase tracking-[0.1em] text-text/60 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    className={inputClass}
                    placeholder="Space size, timeline, budget range, or anything else we should know"
                    {...register('message')}
                  />
                </div>

                <Button type="submit" variant="primary" disabled={isSubmitting} className="mt-2 w-fit">
                  {isSubmitting ? 'Sending…' : 'Submit Enquiry'}
                </Button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8">
            <div className="aspect-[4/3] overflow-hidden rounded-[4px] bg-ink/10 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-90 bg-[linear-gradient(135deg,#2b2622_0%,#1f1f1f_100%)]" />
              <div className="relative z-10 flex flex-col items-center gap-2 text-cream/70">
                <MapPin size={28} className="text-gold" />
                <span className="text-sm">{BUSINESS.mapQuery}</span>
                <span className="text-xs text-cream/45">Map embed placeholder — add your Google Maps embed code here</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[4px] shadow-[0_2px_18px_rgba(31,31,31,0.06)] flex flex-col gap-5">
              <div className="flex gap-4">
                <MapPin size={19} className="text-bronze shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-ink mb-1">Studio Address</div>
                  <div className="text-sm text-text/65">{BUSINESS.address}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={19} className="text-bronze shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-ink mb-1">Phone</div>
                  <div className="text-sm text-text/65">{BUSINESS.phone}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={19} className="text-bronze shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-ink mb-1">Email</div>
                  <div className="text-sm text-text/65">{BUSINESS.email}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={19} className="text-bronze shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-ink mb-1">Studio Hours</div>
                  <div className="text-sm text-text/65">{BUSINESS.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
