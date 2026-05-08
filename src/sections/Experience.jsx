import { useSectionReveal } from '../hooks/useSectionReveal'
import './Experience.css'

/** Swap `company` (and bullets) for your real roles — kept intentionally short on names so the site stays honest. */
const WORK_EXPERIENCES = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'Product & platform team',
    period: '2024',
    location: 'British Columbia',
    bullets: [
      'Shipped features end to end: clarifying requirements, iterating in review, and following through after merge.',
      'Worked across services and tooling with an eye on tests, logging, and making failures easy to trace.',
      'Collaborated closely with others — pairing when I was stuck early instead of spinning solo for too long.',
    ],
  },
  {
    id: 2,
    role: 'Engineering Intern',
    company: 'Systems-oriented team',
    period: '2023',
    location: 'Canada',
    bullets: [
      'Got comfortable operating where software meets constraints — reliability, latency, and real users.',
      'Contributed to instrumentation and debugging workflows that made production issues less mysterious.',
      'Left with stronger habits around documentation, asking sharp questions, and breaking big problems down.',
    ],
  },
]

const EDUCATION = {
  id: 'education',
  role: 'B.ASc. Computer Engineering',
  company: 'University of British Columbia',
  period: 'Graduated 2025',
  location: 'Vancouver, BC',
  bullets: [
    'Coursework across operating systems, digital systems, computer architecture, and computer networks.',
    'Capstone: AquaSentinel — low-cost IoT sensing for water quality where traditional lab infrastructure is scarce.',
    'CPU design project: full ARM-style pipeline in SystemVerilog, synthesized and exercised on FPGA.',
  ],
}

export default function Experience() {
  const revealRef = useSectionReveal()

  return (
    <section id="experience" ref={revealRef} className="section experience reveal-on-scroll">
      <div className="container">
        <p className="section-label">04 / Experience</p>
        <h2 className="section-title">Where I&apos;ve learned &amp; worked</h2>
        <p className="experience__lede">
          A mix of industry terms and coursework depth — happy to go deeper on any of this in conversation.
        </p>

        <div className="experience__list">
          {WORK_EXPERIENCES.map((exp) => (
            <div key={exp.id} className="exp-item">
              <div className="exp-item__meta">
                <span className="exp-item__period">{exp.period}</span>
                <span className="exp-item__location">{exp.location}</span>
              </div>
              <div className="exp-item__body">
                <h3 className="exp-item__role">{exp.role}</h3>
                <p className="exp-item__company">{exp.company}</p>
                <ul className="exp-item__bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="exp-item exp-item--education">
            <div className="exp-item__meta">
              <span className="exp-item__period">{EDUCATION.period}</span>
              <span className="exp-item__location">{EDUCATION.location}</span>
            </div>
            <div className="exp-item__body">
              <h3 className="exp-item__role">{EDUCATION.role}</h3>
              <p className="exp-item__company">{EDUCATION.company}</p>
              <ul className="exp-item__bullets">
                {EDUCATION.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
