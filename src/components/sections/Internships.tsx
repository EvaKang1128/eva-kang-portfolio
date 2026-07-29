import { BriefcaseBusiness, Calendar, MapPin } from 'lucide-react'
import { internships } from '../../data/internships'
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

export function Internships() {
  return (
    <section id="internships" className="scroll-mt-24 bg-[#F8F8F5] py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="实习经历"
          description="从信息核验、数据治理到用户增长，在不同业务语境中积累问题拆解和跨团队协作经验。"
        />

        <div className="space-y-5">
          {internships.map((internship, index) => (
            <Reveal
              key={internship.company}
              delay={index * 0.06}
              className="rounded-lg border border-black/5 bg-white p-5 shadow-soft sm:p-7 lg:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[250px_1fr] lg:gap-10">
                <div>
                  <ImageWithFallback
                    src={internship.logo}
                    alt={`${internship.company}标志`}
                    className={`h-14 w-14 rounded-lg border border-white shadow-sm ${accentBackground[internship.accent]}`}
                    imageClassName="object-contain p-2"
                    fallbackLabel={internship.abbreviation}
                    variant="logo"
                  />
                  <h3 className="mt-5 text-xl font-extrabold leading-8 text-ink">
                    {internship.company}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary-dark">{internship.department}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-ink">
                    <BriefcaseBusiness className="h-4 w-4 text-primary" aria-hidden="true" />
                    {internship.role}
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-muted">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                      {internship.period}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      {internship.location}
                    </p>
                  </div>
                </div>

                <div className="border-t border-black/5 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <ul className="space-y-3">
                    {internship.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <Tag key={skill} accent={internship.accent}>
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
