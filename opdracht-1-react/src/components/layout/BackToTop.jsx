import { useEffect, useState } from 'react'

const SHOW_AFTER_PX = 300

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > SHOW_AFTER_PX)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`btn btn-primary back-to-top ${isVisible ? 'is-visible' : ''}`}
      type="button"
      aria-label="Terug naar boven"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up" />
    </button>
  )
}

export default BackToTop
