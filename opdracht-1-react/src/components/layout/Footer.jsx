import { Grid, GridItem } from '../Grid/Grid'

const FOOTER_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Contact us', href: '#' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Grid gap="2rem">
          <GridItem md={4}>
            <a className="brand" href="#">
              <i className="bi bi-gear-fill brand-icon" />
              <span className="brand-text">
                <span className="brand-name">Alteco</span>
                <span className="brand-tagline">Business Template</span>
              </span>
            </a>
            <p className="footer-text mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </GridItem>

          <GridItem span={6} md={4}>
            <h4 className="footer-title">Links</h4>
            <ul className="footer-links">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </GridItem>

          <GridItem span={6} md={4}>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><i className="bi bi-envelope-fill" /> infoyoursite@mail.com</li>
              <li><i className="bi bi-telephone-fill" /> +77 000 453</li>
            </ul>
          </GridItem>
        </Grid>

        <p className="footer-copy">&copy; 2026 Alteco. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  )
}

export default Footer
