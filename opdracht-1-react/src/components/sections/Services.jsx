import { Grid, GridItem } from '../Grid/Grid'

const SERVICES = [
  {
    icon: 'bi-cup-straw',
    title: 'Promotion Agency',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.',
  },
  {
    icon: 'bi-wrench',
    title: 'Constructions Building',
    text: 'Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.',
  },
  {
    icon: 'bi-book-half',
    title: 'Education Online',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore.',
  },
  {
    icon: 'bi-person-arms-up',
    title: 'Fashion Design',
    text: 'Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima.',
  },
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-intro">
          <p className="subtitle">Elaborated code and creative design</p>
          <h2 className="section-title">Our services</h2>
          <span className="divider-dots" aria-hidden="true" />
          <p className="section-text">
            Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum
          </p>
        </div>

        <Grid gap="2rem">
          {SERVICES.map(({ icon, title, text }) => (
            <GridItem key={title} sm={6} lg={3} className="service">
              <span className="icon-circle"><i className={`bi ${icon}`} /></span>
              <p className="subtitle">Tutorials to help</p>
              <h3 className="service-title">{title}</h3>
              <p className="service-text">{text}</p>
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default Services
