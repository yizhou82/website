import { useSectionReveal } from '../hooks/useSectionReveal'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['C / C++', 'Python', 'Java', 'C#', 'JavaScript', 'SQL', 'Bash', 'Assembly'],
    variant: 'core',
  },
  {
    category: 'Embedded & Systems',
    skills: ['FreeRTOS', 'ARM Cortex-M', 'STM32', 'ESP32', 'Multithreading', 'Real-Time Systems'],
    variant: 'core',
  },
  {
    category: 'Protocols & Networking',
    skills: ['CAN', 'SPI', 'I2C', 'UART', 'TCP/UDP', 'MQTT', 'BLE', 'LoRa', 'ESP-NOW'],
    variant: 'core',
  },
  {
    category: 'Tools, Testing & Hardware',
    skills: ['Git / GitHub', 'Linux', 'GDB', 'Wireshark', 'JIRA / Confluence', 'CppUTest', 'Makefiles', 'PlatformIO', 'Altium', 'Oscilloscopes'],
    variant: 'exploring',
  },
]

export default function Skills() {
  const revealRef = useSectionReveal()

  return (
    <section id="skills" ref={revealRef} className="section skills reveal-on-scroll">
      <div className="container">
        <p className="section-label">03 / Skills</p>
        <h2 className="section-title">Tools I reach for</h2>
        <p className="skills__lede">
          Most of my recent work sits at the firmware and systems boundary, with day-to-day tooling across debugging,
          networking, and hardware validation.
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
