import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image: string
}

export type ProjectCategory = 'Homes' | 'Hotels' | 'Offices' | 'Restaurants' | 'Showrooms'

export interface Project {
  id: string
  title: string
  location: string
  area: string
  category: ProjectCategory
  image: string
  year: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  quote: string
  project: string
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface WhyChooseUsItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ContactFormValues {
  name: string
  phone: string
  email: string
  service: string
  city: string
  message: string
}
