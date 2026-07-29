import { BarChart3, Database, Lightbulb, TrendingUp } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { highlights, profile } from '../../data/profile'

const capabilityIcons = [BarChart3, Database, Lightbulb, TrendingUp]
const capabilityColors = ['bg-lavender-light', 'bg-sky-light', 'bg-cream-light', 'bg-white']

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="About me"
          title="金融、数据与业务之间的连接者"
          description="以业务问题为起点，用结构化分析把复杂信息转化为可执行的下一步。"
        />

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="space-y-5">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted sm:text-lg sm:leading-9">
                {paragraph}
              </p>
            ))}
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              {profile.capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index]
                return (
                  <div
                    key={capability}
                    className={`flex min-h-20 items-center gap-3 rounded-lg border border-black/5 px-4 py-3 ${capabilityColors[index]}`}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-primary shadow-sm">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold leading-6 text-ink">{capability}</span>
                  </div>
                )
              })}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((highlight, index) => (
              <Reveal
                key={highlight.label}
                delay={index * 0.06}
                className={`min-h-40 rounded-lg border border-black/5 p-5 sm:min-h-48 sm:p-7 ${
                  index === 0
                    ? 'bg-lavender-light'
                    : index === 1
                      ? 'bg-sky-light'
                      : index === 2
                        ? 'bg-cream-light'
                        : 'bg-[#F7F7F5]'
                }`}
              >
                <strong className="block text-3xl font-extrabold text-primary-dark sm:text-4xl">
                  {highlight.value}
                </strong>
                <span className="mt-3 block text-sm font-bold leading-6 text-ink sm:text-base">
                  {highlight.label}
                </span>
                <span className="mt-2 block text-xs leading-5 text-muted">{highlight.note}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
