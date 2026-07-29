import { Award, Calendar, MapPin } from 'lucide-react'
import { education } from '../../data/education'
import { Container } from '../layout/Container'
import { SectionHeading } from '../layout/SectionHeading'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { Reveal } from '../ui/Reveal'
import { Tag } from '../ui/Tag'

const accentBackground = {
  lavender: 'bg-lavender-light',
  cream: 'bg-cream-light',
  sky: 'bg-sky-light',
}

const stageLabels = ['CURRENT', 'BACHELOR', 'HIGH SCHOOL']

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-[#F8F8F5] py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="教育经历"
          description="从金融与统计基础出发，进一步聚焦商业分析与数据驱动决策。"
        />

        <div className="relative space-y-5 before:absolute before:bottom-8 before:left-8 before:top-8 before:hidden before:w-px before:bg-primary/15 sm:before:block">
          {education.map((item, index) => (
            <Reveal
              key={item.school}
              delay={index * 0.08}
              className="relative rounded-lg border border-black/5 bg-white p-6 shadow-soft sm:ml-16 sm:p-8 lg:grid lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10"
            >
              <span
                className={`absolute -left-[73px] top-8 hidden h-[18px] w-[18px] rounded-full border-4 border-[#F8F8F5] shadow-sm sm:block ${accentBackground[item.accent]}`}
                aria-hidden="true"
              />

              <div>
                <div className="flex items-start justify-between gap-4 lg:block">
                  <ImageWithFallback
                    src={item.logo}
                    alt={`${item.school}校徽`}
                    className={`h-16 w-16 shrink-0 rounded-lg border border-white shadow-sm ${accentBackground[item.accent]}`}
                    imageClassName="object-contain p-2"
                    fallbackLabel={item.abbreviation}
                    variant="logo"
                  />
                  <div className="lg:mt-5">
                    <Tag accent={item.accent}>{stageLabels[index]}</Tag>
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold text-ink">{item.school}</h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-muted">{item.schoolEn}</p>
              </div>

              <div className="mt-6 border-t border-black/5 pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="text-lg font-bold leading-8 text-primary-dark">{item.degree}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.degreeEn}</p>
                {item.major && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.major.map((major) => (
                      <Tag key={major}>{major}</Tag>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      {item.location}
                    </span>
                  )}
                </div>

                <ul className="mt-6 grid gap-3 xl:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted">
                      <Award className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
