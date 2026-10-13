import { useState } from 'react'
import hero1 from '../../assets/img/hero-1.jpg'
import hero2 from '../../assets/img/hero-2.jpg'

const SLIDES = [
  {
    image: hero1,
    alt: "Collega's in overleg op kantoor",
    title: <>Business <strong>Your Satisfaction</strong></>,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: hero2,
    alt: 'Team werkt samen aan een tafel',
    title: <>Creative <strong>Modern Design</strong></>,
    text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet.',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  function goToSlide(index) {
    setActiveSlide((index + SLIDES.length) % SLIDES.length)
  }

  const slide = SLIDES[activeSlide]

  return (
    <section className="hero">
      <div className="carousel">
        <img src={slide.image} className="hero-image" alt={slide.alt} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-title"><span className="highlight">{slide.title}</span></h1>
          <p className="hero-text"><span className="highlight highlight-dark">{slide.text}</span></p>
          <div className="hero-actions">
            <a href="#" className="btn btn-outline-light btn-square-lg">Login</a>
            <a href="#" className="btn btn-outline-light btn-square-lg">Register</a>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" aria-label="Vorige" onClick={() => goToSlide(activeSlide - 1)}>
          <i className="bi bi-chevron-left" />
        </button>
        <button className="carousel-control-next" type="button" aria-label="Volgende" onClick={() => goToSlide(activeSlide + 1)}>
          <i className="bi bi-chevron-right" />
        </button>

        <div className="carousel-indicators">
          {SLIDES.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              className={index === activeSlide ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === activeSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
