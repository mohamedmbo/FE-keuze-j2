const SOCIAL_LINKS = [
  { label: 'Facebook', icon: 'bi-facebook' },
  { label: 'Google', icon: 'bi-google' },
  { label: 'LinkedIn', icon: 'bi-linkedin' },
]

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-row">
          <ul className="topbar-list">
            <li><i className="bi bi-envelope-fill" /> infoyoursite@mail.com</li>
            <li><i className="bi bi-telephone-fill" /> +77 000 453</li>
          </ul>
          <ul className="topbar-list">
            {SOCIAL_LINKS.map(({ label, icon }) => (
              <li key={label}>
                <a href="#" aria-label={label}><i className={`bi ${icon}`} /></a>
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary btn-pill">
            Get a quote <i className="bi bi-chevron-double-right" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
