import { useSectionReveal } from '../hooks/useSectionReveal'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'C / C++', 'SystemVerilog', 'JavaScript', 'HTML / CSS'],
    variant: 'core',
  },
  {
    category: 'Embedded & Hardware',
    skills: ['Arduino', 'ESP32', 'Raspberry Pi', 'FPGA', 'FreeRTOS', 'PlatformIO'],
    variant: 'core',
  },
  {
    category: 'Tools & Dev',
    skills: ['Git / GitHub', 'Linux', 'Quartus', 'ModelSim', 'Wireshark'],
    variant: 'core',
  },
  // {
  //   category: 'Currently Exploring',
  //   skills: ['Distributed S', 'Digital Systems', 'Databases'],
  //   variant: 'exploring',
  // },
]

export default function Skills() {
  const revealRef = useSectionReveal()

  return (
    <section id="skills" ref={revealRef} className="section skills reveal-on-scroll">
      <div className="container">
        <p className="section-label">03 / Skills</p>
        <h2 className="section-title">Tools I reach for</h2>
        <p className="skills__lede">
          The list shifts over time — right now this is an honest snapshot of where I&apos;m strongest and what
          I&apos;m stretching into next.
        </p>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className={`skill-group skill-group--${group.variant}`}
            >
              <h3 className="skill-group__title">{group.category}</h3>
              <ul className="skill-group__chips" aria-label={group.category}>
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
