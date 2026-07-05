import { MessageCircle } from 'lucide-react'
import { BUSINESS } from '@/constants'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
        'Hello Surajmal Sons, I would like to book a free interior consultation.'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle size={26} strokeWidth={1.8} />
    </a>
  )
}
