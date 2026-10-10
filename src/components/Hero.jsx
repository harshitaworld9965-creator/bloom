import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './Hero.css'

gsap.registerPlugin(useGSAP)

function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 },
      })

      tl.from('.hero__eyebrow', { opacity: 0, y: 20 })
        .from(
          '.hero__line-inner',
          { yPercent: 110, duration: 1.2, stagger: 0.12 },
          '-=0.6'
        )
        .from(
          '.hero__visual',
          { opacity: 0, scale: 0.9, duration: 1.4 },
          '<0.1'
        )
        .from(
          ['.hero__copy', '.hero__actions'],
          { opacity: 0, y: 20, stagger: 0.1 },
          '-=1'
        )
    },
    { scope: heroRef }
  )

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__text">
        <p className="hero__eyebrow">No. 04 — Night Jasmine</p>

        <h1 className="hero__title">
          <span className="hero__line">
            <span className="hero__line-inner">Bottled at</span>
          </span>
          <span className="hero__line">
            <span className="hero__line-inner">
              <em>9:40</em> PM
            </span>
          </span>
        </h1>

        <p className="hero__copy">
          Night jasmine opens only after dark. We gather it in the hour it
          blooms, so the scent you wear is the flower at its most alive.
        </p>

        <div className="hero__actions">
          <a href="#notes" className="hero__button">
            Discover the scent
          </a>
          <span className="hero__meta">Eau de Parfum · 50 ml</span>
        </div>
      </div>

      <div className="hero__visual">
        <div className="bottle">
          <div className="bottle__cap"></div>
          <div className="bottle__neck"></div>
          <div className="bottle__body">
            <span className="bottle__label">
              Bloom
              <small>No. 04</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero