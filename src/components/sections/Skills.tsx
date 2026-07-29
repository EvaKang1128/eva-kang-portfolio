import { BarChart3, Blocks, BriefcaseBusiness, MessagesSquare } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

const icons = [BarChart3, Blocks, BriefcaseBusiness, MessagesSquare]
const accentBackground = {
  lavender: 'bg-lavender-light',
  cream: 'bg-cream-light',
  sky: 'bg-sky-light',
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="能力与工具"
          description="围绕数据分析、数据治理、业务理解与项目协作形成的能力组合。"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <Reveal
                key={group.title}
                delay={index * 0.06}
                className={`rounded-lg border border-black/5 p-6 sm:p-8 ${accentBackground[group.accent]}`}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-ink">{group.title}</h3>
                    <p className="mt-1 text-[11px] font-bold uppercase text-primary-dark">
                      {group.titleEn}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
