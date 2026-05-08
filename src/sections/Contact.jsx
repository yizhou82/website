import { useSectionReveal } from '../hooks/useSectionReveal'
import './Contact.css'

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/yizhou82',
    handle: '@yizhou82',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yizhou-zhou/',
    handle: 'yizhou-zhou',
  },
  {
    label: 'Email',
    href: 'mailto:yizhou82@student.ubc.ca',
    handle: 'yizhou82@student.ubc.ca',
  },
]

export default function Contact() {
  const revealRef = useSectionReveal()

  return (
    <section id="contact" ref={revealRef} className="section contact reveal-on-scroll">
      <div className="container contact__inner">
        <p className="section-label">05 / Contact</p>
        <h2 className="section-title">Say hello</h2>
        <p className="contact__intro">
          I&apos;m always open to new connections, opportunities, or just a good conversation. Reach out anytime.
        </p>

        <ul className="contact__links">
          {LINKS.map((link) => {
            const external = /^https?:\/\//i.test(link.href)
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="contact__link"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="contact__link-label">{link.label}</span>
                  <span className="contact__link-handle">
                    {link.handle} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
