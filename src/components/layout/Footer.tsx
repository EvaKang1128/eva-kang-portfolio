import { Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-bold text-ink">康雨霏 · Eva Kang</p>
          <p className="mt-1 text-sm text-muted">Business Analysis · Data & AI Product · Data Governance</p>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {profile.email}
        </a>
      </Container>
    </footer>
  )
}
