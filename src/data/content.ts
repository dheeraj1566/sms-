import { ShieldCheck, PenTool, Users, Wallet, Clock3, Headphones } from 'lucide-react'
import type { Testimonial, ProcessStep, FAQ, WhyChooseUsItem } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anita Malhotra',
    location: 'Vaishali Nagar, Jaipur',
    rating: 5,
    quote:
      'They handled our 3BHK from the first sketch to the last cushion. Site visits were punctual and every change we asked for was costed honestly before it was made.',
    project: 'Residential Interior',
  },
  {
    id: 't2',
    name: 'Rohit Sharma',
    location: 'Mansarovar, Jaipur',
    rating: 5,
    quote:
      'The modular kitchen has held up beautifully through two monsoons. What stood out was how precisely the wardrobes fit the actual wall dimensions, not a standard size.',
    project: 'Modular Kitchen & Wardrobes',
  },
  {
    id: 't3',
    name: 'Kavita Bansal',
    location: 'Civil Lines, Jaipur',
    rating: 5,
    quote:
      'We compared four interior firms before choosing Surajmal Sons. The 3D walkthrough matched the finished penthouse almost exactly, down to the ceiling lighting.',
    project: 'Turnkey Interior',
  },
  {
    id: 't4',
    name: 'Vikram Singh Rathore',
    location: 'Hotel Rajmahal Suites, Jaipur',
    rating: 5,
    quote:
      'Eighteen thousand square feet of hotel interior delivered in phases without shutting down operations. Their site team coordinated around our guests without a single complaint.',
    project: 'Hotel Interior',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'consultation',
    number: '01',
    title: 'Consultation',
    description: 'A design consultant visits your site to understand the space, your budget and how you plan to use each room.',
  },
  {
    id: 'planning',
    number: '02',
    title: 'Planning',
    description: 'Measurements, material shortlists and a phased timeline are drawn up before any design work begins.',
  },
  {
    id: '3d-design',
    number: '03',
    title: '3D Design',
    description: 'Photorealistic 3D renders let you walk through every room and approve finishes before manufacturing starts.',
  },
  {
    id: 'manufacturing',
    number: '04',
    title: 'Manufacturing',
    description: 'Approved designs move to our in-house workshop, where furniture is built to your exact site dimensions.',
  },
  {
    id: 'installation',
    number: '05',
    title: 'Installation',
    description: 'A dedicated site team installs, fits and finishes everything, with daily progress shared with you.',
  },
  {
    id: 'handover',
    number: '06',
    title: 'Handover',
    description: 'A final walkthrough, snag-list closure and care guide, followed by ongoing after-service support.',
  },
]

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'How long does a typical home interior project take?',
    answer:
      'A full 2–3BHK home interior, from first site visit to handover, usually takes 45–75 working days depending on the scope of civil work, custom furniture and site readiness.',
  },
  {
    id: 'f2',
    question: 'Do you provide a fixed quotation before work begins?',
    answer:
      'Yes. After the planning stage, you receive an itemised quotation covering materials, hardware and labour. Any change after approval is quoted separately before we proceed.',
  },
  {
    id: 'f3',
    question: 'Can I see the design in 3D before construction starts?',
    answer:
      'Every project includes photorealistic 3D renders of each room. We revise the design with you until you are fully satisfied, before any material is cut.',
  },
  {
    id: 'f4',
    question: 'What warranty do you offer on furniture and fittings?',
    answer:
      'Our manufactured furniture carries a warranty against manufacturing defects, and we offer ongoing after-service support for hardware such as hinges, channels and locks.',
  },
  {
    id: 'f5',
    question: 'Do you work outside Jaipur?',
    answer:
      'Our design studio and manufacturing unit are based in Jaipur, and we regularly execute hotel, office and residential projects across Rajasthan on request.',
  },
  {
    id: 'f6',
    question: 'Can I use my own contractor for civil work alongside your team?',
    answer:
      'Yes, though most clients prefer our turnkey option where we coordinate civil, electrical and interior work together to avoid scheduling conflicts between separate teams.',
  },
]

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'w1',
    title: 'Premium Materials',
    description: 'Sourced from mills and suppliers we have worked with for over a decade, chosen for durability first.',
    icon: ShieldCheck,
  },
  {
    id: 'w2',
    title: 'Custom Designs',
    description: 'Every layout is drawn for your specific site — no recycled floor plans or catalogue furniture sizes.',
    icon: PenTool,
  },
  {
    id: 'w3',
    title: 'Expert Craftsmen',
    description: 'A permanent in-house team of carpenters and finishers, not subcontracted labour that changes project to project.',
    icon: Users,
  },
  {
    id: 'w4',
    title: 'Transparent Pricing',
    description: 'One itemised quotation upfront. No hidden costs added once your project is already underway.',
    icon: Wallet,
  },
  {
    id: 'w5',
    title: 'On-time Delivery',
    description: 'Phased schedules with daily site updates, so you always know exactly where your project stands.',
    icon: Clock3,
  },
  {
    id: 'w6',
    title: 'Lifetime Support',
    description: 'Our relationship continues after handover — hinges, channels and finishes are supported for as long as you own the piece.',
    icon: Headphones,
  },
]
