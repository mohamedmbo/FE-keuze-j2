import { useState } from 'react'

const MIN_QUERY_LENGTH = 2

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Pages', href: '#' },
  { label: 'Shop', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact us', href: '#' },
]

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  const isQueryValid = query.trim().length >= MIN_QUERY_LENGTH

  function handleSearchSubmit(event) {
    event.preventDefault()

    if (!isQueryValid) {
      setResult(null)
      return
    }

    setResult(`Je zocht op: "${query.trim()}". Er zijn nog geen resultaten beschikbaar.`)
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-row">
            <a className="brand" href="#">
              <i className="bi bi-gear-fill brand-icon" />
              <span className="brand-text">
                <span className="brand-name">Alteco</span>
                <span className="brand-tagline">Business Template</span>
              </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={isNavOpen}
              aria-label="Menu openen"
              onClick={() => setIsNavOpen((open) => !open)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className={`navbar-collapse ${isNavOpen ? 'is-open' : ''}`}>
            <ul className="main-nav">
              {NAV_LINKS.map(({ label, href }, index) => (
                <li key={label}>
                  <a className={`nav-link ${index === 0 ? 'active' : ''}`} href={href}>{label}</a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-square"
              type="button"
              aria-expanded={isSearchOpen}
              aria-label="Zoeken openen"
              onClick={() => setIsSearchOpen((open) => !open)}
            >
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="search-bar">
          <div className="container search-bar-inner">
            <form className="search-form" noValidate onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className={`form-control ${result === null && query ? 'is-invalid' : ''} ${result ? 'is-valid' : ''}`}
                placeholder="Waar ben je naar op zoek?"
                aria-label="Zoekterm"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  setResult(null)
                }}
              />
              <button className="btn btn-primary" type="submit">Zoeken</button>
              {query && !isQueryValid && (
                <p className="invalid-feedback">Vul minimaal 2 tekens in.</p>
              )}
              {result && <p className="search-result" aria-live="polite">{result}</p>}
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
