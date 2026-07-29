import { ArrowDown, Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { Tag } from '../ui/Tag'
import { profile } from '../../data/profile'
import { assetPath } from '../../utils/assetPath'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-canvas pb-20 pt-28 sm:pt-32 lg:flex lg:min-h-[740px] lg:items-center lg:py-28"
    >
      <img
        src={assetPath('/images/hero/eva-hero-bg.webp')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/10" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Tag accent="lavender">HELLO / 你好</Tag>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-muted">
              <span className="h-2 w-2 rounded-full bg-[#45A179]" aria-hidden="true" />
              Open to work
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            <span className="block">{profile.name}</span>
            <span className="mt-2 block text-primary">{profile.englishName}</span>
          </h1>

          <p className="mt-7 text-xl font-extrabold leading-8 text-ink sm:text-2xl">
            {profile.directions}
          </p>
          <p className="mt-2 max-w-xl text-xs font-bold uppercase leading-6 text-primary-dark sm:text-sm">
            {profile.directionsEn}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={assetPath(profile.resume)}
              download="kang-yufei-resume.pdf"
              icon={<Download className="h-4 w-4" aria-hidden="true" />}
            >
              下载简历
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              icon={<Mail className="h-4 w-4" aria-hidden="true" />}
            >
              联系我
            </Button>
          </div>

          <a
            href="#about"
            className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-muted transition hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            向下了解更多
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end">
          <div className="absolute inset-x-8 bottom-0 top-10 rounded-t-[44%] rounded-b-[32px] border border-white/70 bg-lavender/65 shadow-soft backdrop-blur-sm" aria-hidden="true" />
          <div className="absolute -right-3 top-8 h-24 w-24 rounded-2xl border border-white/50 bg-sky/70 sm:-right-8 sm:h-32 sm:w-32" aria-hidden="true" />
          <div className="absolute -left-2 bottom-14 h-28 w-20 rounded-2xl border border-white/50 bg-cream/75 sm:-left-8" aria-hidden="true" />

          <motion.div
            className="relative mx-auto aspect-[4/5] w-[78%] overflow-hidden rounded-b-[28px] rounded-t-[46%] border-[6px] border-white shadow-soft"
            animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          >
            <ImageWithFallback
              src={profile.photo}
              alt="康雨霏 Eva Kang 的个人职业照"
              className="h-full w-full bg-white"
              imageClassName="object-cover object-top"
              fallbackLabel="请替换为个人职业照"
              fallbackHint="public/images/profile/eva-kang.jpg"
              variant="profile"
              eager
            />
          </motion.div>

          <div className="absolute -bottom-6 right-0 z-10 max-w-[200px] rounded-lg border border-white/80 bg-white/90 p-4 shadow-lift backdrop-blur sm:right-3">
            <span className="text-[10px] font-extrabold uppercase text-primary">Now</span>
            <p className="mt-1 text-sm font-extrabold leading-5 text-ink">HKU Business Analytics</p>
            <p className="mt-1 text-xs text-muted">2025.09 – 2026.11</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
