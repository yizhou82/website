import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useSectionReveal } from '../hooks/useSectionReveal'
import './About.css'

const PROFILE_SRC = '/website/profile.png'

const PERSONAL_PHOTOS = [
  { src: '/website/personal-3.png', caption: 'Mountain close to Hope 2026' },
  { src: '/website/personal-2.png', caption: 'Elfin Lake 2025' },
  // { src: '/website/personal-4.png', caption: 'Chief 2025' },
  { src: '/website/personal-5.png', caption: 'Grouse Grind 2025' },
  { src: '/website/personal-6.png', caption: 'Eagle Bluffs 2025' },
  { src: '/website/personal-7.png', caption: 'Chief 2024' },
  { src: '/website/personal-9.png', caption: 'Lindeman Lake 2024' },
  { src: '/website/personal-1.png', caption: 'Tunnel Bluffs 2024' },
  { src: '/website/personal-8.png', caption: 'Lynn Canyon 2022' },
  { src: '/website/personal-10.png', caption: 'CCC Bellinis :)' },
]

export default function About() {
  const revealRef = useSectionReveal()
  const [profilePhotoFailed, setProfilePhotoFailed] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i
      const n = PERSONAL_PHOTOS.length
      return (i - 1 + n) % n
    })
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i
      const n = PERSONAL_PHOTOS.length
      return (i + 1) % n
    })
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  const openAt = (index) => setLightboxIndex(index)
  const activePhoto = lightboxIndex !== null ? PERSONAL_PHOTOS[lightboxIndex] : null

  return (
    <section
      id="about"
      ref={revealRef}
      className="section about reveal-on-scroll"
    >
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <p className="section-label">01 / About</p>
            <h2 className="section-title">Nice to meet you</h2>
            <div className="about__bio">
              <p>
                Hi! I&apos;m Yizhou, a
                Computer Engineering graduate from UBC who enjoys sitting where software, firmware, and hardware
                meet.
              </p>
              <p>
                I like problems that brush up against what&apos;s possible: a CPU from scratch, IoT that might actually
                help someone, or the rabbit holes inside operating systems. I learn fast, ask good questions, and
                care about the details that keep a system honest.
              </p>
              <p>
                Away from the desk, I&apos;m usually at the piano, the pool, or in the kitchen trying out new recipes.
              </p>
            </div>
            <a href="/website/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--ghost about__resume">
              View résumé ↗
            </a>
          </div>

          <div className="about__card">
            <div className="about__photo-wrapper">
              {!profilePhotoFailed && (
                <img
                  src={PROFILE_SRC}
                  alt="Yizhou"
                  className="about__photo"
                  loading="lazy"
                  onError={() => setProfilePhotoFailed(true)}
                />
              )}
              <div
                className="about__photo-fallback"
                style={{ display: profilePhotoFailed ? 'flex' : 'none' }}
                aria-hidden={!profilePhotoFailed}
              >
                YZ
              </div>
            </div>
            <ul className="about__quick-facts">
              <li>
                <span className="fact-label">Degree</span>
                <span>B.ASc. Computer Engineering, UBC</span>
              </li>
              <li>
                <span className="fact-label">Location</span>
                <span>Vancouver, BC</span>
              </li>
              <li>
                <span className="fact-label">Email</span>
                <a href="mailto:yizhou82@student.ubc.ca" className="about__fact-link">
                  yizhou82@student.ubc.ca
                </a>
              </li>
              <li>
                <span className="fact-label">Status</span>
                <span className="available">Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="about__life">
          <h3 className="about__life-title">Life outside code</h3>
          <ul className="about__life-strip" role="list">
            {PERSONAL_PHOTOS.map((photo, index) => (
              <li key={photo.src}>
                <button
                  type="button"
                  className="about__life-thumb"
                  onClick={() => openAt(index)}
                  aria-label={`Open photo: ${photo.caption}`}
                >
                  <img src={photo.src} alt="" loading="lazy" className="about__life-thumb-img" />
                  <span className="about__life-thumb-caption">{photo.caption}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {activePhoto &&
        createPortal(
          <div
            className="about-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.caption}
            onClick={closeLightbox}
          >
            <div className="about-lightbox__panel" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="about-lightbox__close" onClick={closeLightbox} aria-label="Close">
                ×
              </button>
              <button
                type="button"
                className="about-lightbox__nav about-lightbox__nav--prev"
                onClick={goPrev}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="about-lightbox__nav about-lightbox__nav--next"
                onClick={goNext}
                aria-label="Next photo"
              >
                ›
              </button>
              <figure className="about-lightbox__figure">
                <img src={activePhoto.src} alt={activePhoto.caption} className="about-lightbox__img" />
                <figcaption className="about-lightbox__caption">{activePhoto.caption}</figcaption>
              </figure>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
