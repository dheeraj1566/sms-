import logoSvg from '@/assets/logo.svg'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({  className = '' }: LogoProps) {

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logoSvg} alt="Surajmal Sons logo" className="h-16" />
      <div className="leading-tight">
      </div>
    </div>
  )
}
