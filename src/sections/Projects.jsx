import { useState } from 'react'
import { useSectionReveal } from '../hooks/useSectionReveal'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'ARM32 CPU',
    image: '/website/project-arm32.png',
    description:
      'Designed and implemented a 32-bit ARM CPU in SystemVerilog, then synthesized and validated the full fetch/decode/execute/memory/writeback pipeline on FPGA with ModelSim and Quartus.',
    tags: ['SystemVerilog', 'FPGA', 'Quartus', 'ModelSim', 'Computer Architecture'],
    github: 'https://github.com/yizhou82',
    live: null,
    inProgress: false,
  },
  {
    id: 2,
    title: 'AquaSentinel',
    image: '/website/project-aquasentinel.png',
    description:
      'Led a team of 5 to build a low-cost IoT water-quality platform for underserved regions, with ESP32 firmware, OTA updates, FreeRTOS scheduling, and mesh-to-gateway communication over ESP-NOW, BLE, LoRa, and MQTT.',
    tags: ['IoT', 'ESP32', 'FreeRTOS', 'MQTT', 'BLE', 'LoRa', 'Altium'],
    github: 'https://github.com/yizhou82',
    live: null,
    inProgress: false,
  },
  {
    id: 3,
    title: 'FreeRTOS Scheduler',
    image: '/website/project-freertos.png',
    description:
      'Implemented real-time scheduling concepts on Raspberry Pi with FreeRTOS, including Earliest Deadline First (EDF), Server Resource Policy (SRP), Constant Bandwidth Server (CBS), and multi-task management.',
    tags: ['FreeRTOS', 'Raspberry Pi', 'C', 'RTOS', 'Embedded Systems'],
    github: 'https://github.com/yizhou82',
    live: null,
    inProgress: false,
  },
  {
    id: 4,
    title: '2D Exploration Game',
    image: '/website/project-2dgame.png',
    description:
      'An in-progress Java game focused on open-world exploration, tile-based rendering, and clean architecture for smooth player movement and future feature expansion.',
    tags: ['Java', 'Game Development', 'In Progress'],
    github: 'https://github.com/yizhou82',
    live: null,
    inProgress: true,
  },
]

function GitHubIcon() {
  return (
    <svg className="project-card__github-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
      />
    </svg>
  )
}

export default function Projects() {
  const revealRef = useSectionReveal()
  const [imageFailedById, setImageFailedById] = useState({})

  const markImageFailed = (id) => {
    setImageFailedById((s) => ({ ...s, [id]: true }))
  }

  return (
    <section id="projects" ref={revealRef} className="section projects reveal-on-scroll">
      <div className="container">
        <p className="section-label">02 / Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="projects__lede">
          A mix of coursework depth, capstone hardware, and side experiments - each taught me something I still carry.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => {
            const imageFailed = Boolean(imageFailedById[p.id])
            return (
              <article key={p.id} className={`project-card ${p.inProgress ? 'project-card--wip' : ''}`}>
                {p.inProgress && <span className="project-card__badge">In progress</span>}
                <div
                  className={`project-card__image-wrapper ${imageFailed ? 'project-card__image-wrapper--empty' : ''}`}
                >
                  {!imageFailed && (
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      className="project-card__image"
                      loading="lazy"
                      onError={() => markImageFailed(p.id)}
                    />
                  )}
                  <div className="project-card__image-placeholder" aria-hidden="true">
                    {p.title[0]}
                  </div>
                </div>

                <div className="project-card__body">
                  <div className="project-card__top">
                    <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
                    <div className="project-card__links">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__gh"
                          title="View on GitHub"
                        >
                          <GitHubIcon />
                          <span className="project-card__gh-label">GitHub</span>
                          <span className="project-card__arrow" aria-hidden="true">
                            ?
                          </span>
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-card__live">
                          Live <span aria-hidden="true">?</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.description}</p>
                  <ul className="project-card__tags">
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <div className="projects__more">
          <a
            href="https://github.com/yizhou82"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            More on GitHub ?
          </a>
        </div>
      </div>
    </section>
  )
}
