import { ImageIcon, UserRound } from 'lucide-react'
import { useState } from 'react'
import { assetPath } from '../../utils/assetPath'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  fallbackLabel: string
  fallbackHint?: string
  variant?: 'profile' | 'logo' | 'project'
  eager?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  imageClassName = '',
  fallbackLabel,
  fallbackHint,
  variant = 'project',
  eager = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (!hasError) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img
          src={assetPath(src)}
          alt={alt}
          className={`h-full w-full ${imageClassName}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
        />
      </div>
    )
  }

  const isProfile = variant === 'profile'
  const isLogo = variant === 'logo'

  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#F1EEFF_0%,#EDF8FF_54%,#FFF9E6_100%)] ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className={`flex flex-col items-center text-center ${isLogo ? 'gap-1 p-2' : 'gap-3 p-6'}`}>
        {isProfile ? (
          <UserRound className="h-14 w-14 text-primary/45" strokeWidth={1.5} aria-hidden="true" />
        ) : !isLogo ? (
          <ImageIcon className="h-9 w-9 text-primary/45" strokeWidth={1.5} aria-hidden="true" />
        ) : null}
        <span
          className={`${isLogo ? 'text-sm font-extrabold text-primary-dark' : 'text-sm font-bold text-primary-dark'}`}
        >
          {fallbackLabel}
        </span>
        {fallbackHint && !isLogo && (
          <span className="max-w-56 text-xs leading-5 text-muted">{fallbackHint}</span>
        )}
      </div>
    </div>
  )
}
