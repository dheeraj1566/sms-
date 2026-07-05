import {
  Home,
  Building2,
  Hotel,
  Store,
  Hammer,
  UtensilsCrossed,
  DoorClosed,
  Sofa,
  LayoutPanelTop,
  TreeDeciduous,
} from 'lucide-react'
import type { Service } from '@/types'
import { placeholderImage } from '@/utils/placeholder'

export const SERVICES: Service[] = [
  {
    id: 'residential-interior',
    title: 'Residential Interior',
    description:
      'End-to-end design and execution for apartments, villas and duplexes — planned around how your family actually lives.',
    icon: Home,
    image: placeholderImage('residential'),
  },
  {
    id: 'office-interior',
    title: 'Office Interior',
    description:
      'Workspaces that balance focus, collaboration and brand identity, delivered with minimal disruption to business hours.',
    icon: Building2,
    image: placeholderImage('office'),
  },
  {
    id: 'hotel-interior',
    title: 'Hotel Interior',
    description:
      'Guest rooms, lobbies and banquet spaces designed for durability under daily use without losing warmth or character.',
    icon: Hotel,
    image: placeholderImage('hotel'),
  },
  {
    id: 'showroom-interior',
    title: 'Showroom Interior',
    description:
      'Retail environments engineered to showcase product and move footfall, with fixtures built for constant traffic.',
    icon: Store,
    image: placeholderImage('showroom'),
  },
  {
    id: 'furniture-manufacturing',
    title: 'Furniture Manufacturing',
    description:
      'In-house manufacturing unit producing solid wood and engineered furniture to exact site dimensions.',
    icon: Hammer,
    image: placeholderImage('manufacturing'),
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    description:
      'Ergonomic kitchen layouts with soft-close fittings, moisture-resistant cores and a finish that holds up for decades.',
    icon: UtensilsCrossed,
    image: placeholderImage('kitchen'),
  },
  {
    id: 'wardrobe',
    title: 'Wardrobes',
    description:
      'Walk-ins and sliding-shutter wardrobes with internal organisers designed around your actual wardrobe, not a catalogue one.',
    icon: DoorClosed,
    image: placeholderImage('wardrobe'),
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    description:
      'Sofas, beds, dining sets and TV units built to your dimensions, in the fabric, wood and finish you choose.',
    icon: Sofa,
    image: placeholderImage('furniture'),
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling',
    description:
      'POP and gypsum ceiling design with integrated cove and profile lighting that shapes the mood of a room.',
    icon: LayoutPanelTop,
    image: placeholderImage('ceiling'),
  },
  {
    id: 'wood-flooring',
    title: 'Wood Flooring',
    description:
      'Engineered and laminate wooden flooring, sourced and installed for the humidity and traffic of Indian homes.',
    icon: TreeDeciduous,
    image: placeholderImage('flooring'),
  },
]
