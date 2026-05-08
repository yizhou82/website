import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">UBC Computer Engineering</p>
        <h1 className="hero__name">
          <span className="hero__name-wrap">
            <abbr title='Pronounced "Yee-zoo" — Chinese works too'>Yizhou</abbr>
          </span>
        </h1>
        <p className="hero__pronounce" aria-hidden="true">
          <span className="hero__pronounce-inner">“Yee-zoo”</span>
        </p>
        <p className="hero__tagline">
          Computer Engineering grad from UBC. I build things at the intersection of software, firmware, and
          hardware.
          <span className="hero__cursor" aria-hidden="true" />
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in Touch
          </a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          scroll <span className="hero__scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  )
}
