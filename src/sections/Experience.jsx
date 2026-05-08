import { useSectionReveal } from '../hooks/useSectionReveal'
import './Experience.css'

const WORK_EXPERIENCES = [
  {
    id: 1,
    role: 'Firmware Engineer Co-op',
    company: 'Arlo Technologies',
    period: 'Jan 2025 - Aug 2025',
    location: 'Richmond, BC',
    bullets: [
      'Developed and maintained embedded firmware in C/C++ across a Linux multi-submodule codebase, owning work from requirements and design through implementation, validation, and post-release support.',
      'Built privacy shutter and alert manager features and contributed bootloader updates by tracing system calls and adding robust error handling for secure, reliable startup.',
      'Resolved cross-subsystem defects using Linux logs and GDB core dump analysis, then documented root-cause findings to improve team debugging speed and release confidence.',
      'Executed 50+ branch deployments and cherry-picks across 6 submodules, resolving merge conflicts and partnering with firmware, hardware, and QA teams through JIRA and Confluence workflows.',
    ],
  },
  {
    id: 2,
    role: 'Embedded Software Engineer Co-op',
    company: 'Sarcomere Dynamics',
    period: 'May 2024 - Dec 2024',
    location: 'Vancouver, BC',
    bullets: [
      'Engineered firmware in C/C++ for robotic arm and hand control systems, integrating low-level drivers, hardware SDKs/APIs, and real-time sensor pipelines for teleoperation.',
      'Implemented FreeRTOS-based concurrent state-machine logic for a PLC adapter translating digital I/O and CAN bus traffic with deterministic scheduling.',
      'Programmed STM32 (ARM Cortex-M) GPIO and interrupt handlers, then debugged boards with oscilloscopes, multimeters, and logic analyzers against PCB schematics.',
      'Designed and validated a 150 m radio-link protocol in Python over UDP sockets, verified packet behavior in Wireshark, and strengthened reliability with CppUTest-based coverage on communication modules.',
    ],
  },
]

const EDUCATION = {
  id: 'education',
  role: 'B.ASc. Computer Engineering',
  company: 'University of British Columbia',
  period: 'Sep 2021 - May 2026',
  location: 'Vancouver, BC',
  bullets: [
    'Relevant coursework: Real-Time System Design, Operating Systems, Computer Architecture, Computer Networking, and Cybersecurity.',
    'Capstone: led AquaSentinel, a low-cost IoT water-quality platform with ESP32 firmware, OTA updates, and mesh plus gateway communication (ESP-NOW, BLE, LoRa, MQTT).',
    'Designed gateway and sensor-node PCB schematics/routing in Altium and prepared validation plans for field deployment.',
  ],
}

const ACADEMIC_PROJECTS = [
  {
    id: 'capstone',
    role: 'Project Manager / Firmware Developer',
    company: 'Water Monitoring Device (Capstone)',
    period: 'Sep 2025 - Apr 2026',
    location: 'Vancouver, BC',
    bullets: [
      'Led a team of 5 to deliver a low-cost IoT water-quality system for underserved communities, owning architecture and firmware from concept through field deployment.',
      'Developed ESP32 firmware in C with FreeRTOS scheduling, multi-sensor integration, and secure OTA updates over I2C/UART for reliable long-term maintainability.',
      'Built wireless node and gateway communication using ESP-NOW, BLE, LoRa, and MQTT, evaluating tradeoffs in range, power, and reliability for mesh-network behavior.',
      'Integrated TinyML inference on ESP32 edge devices to reduce uplink bandwidth by 40%, and designed gateway/sensor PCBs in Altium with validation plans and hardware test documentation.',
    ],
  },
  {
    id: 'agrobot',
    role: 'Software Developer',
    company: 'Autonomous Navigation System (UBC AgroBot)',
    period: 'Sep 2023 - Sep 2024',
    location: 'Vancouver, BC',
    bullets: [
      'Developed autonomous C++ path-planning with OpenCV on live video streams for real-time crop-row detection and navigation adjustment.',
      'Built a WebSocket service to stream and visualize LiDAR point-cloud telemetry for remote monitoring.',
      'Created Makefile-based build automation and modular C++ libraries to standardize integration across multiple sensor suites.',
    ],
  },
]

export default function Experience() {
  const revealRef = useSectionReveal()

  return (
    <section id="experience" ref={revealRef} className="section experience reveal-on-scroll">
      <div className="container">
        <p className="section-label">04 / Experience</p>
        <h2 className="section-title">Where I&apos;ve learned &amp; worked</h2>
        <p className="experience__lede">
          Industry co-ops and hands-on embedded projects where software quality and hardware constraints both matter.
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

          {ACADEMIC_PROJECTS.map((project) => (
            <div key={project.id} className="exp-item exp-item--education">
              <div className="exp-item__meta">
                <span className="exp-item__period">{project.period}</span>
                <span className="exp-item__location">{project.location}</span>
              </div>
              <div className="exp-item__body">
                <h3 className="exp-item__role">{project.role}</h3>
                <p className="exp-item__company">{project.company}</p>
                <ul className="exp-item__bullets">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
