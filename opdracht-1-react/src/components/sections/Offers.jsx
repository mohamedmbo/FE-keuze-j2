import { Grid, GridItem } from '../Grid/Grid'
import offersImage from '../../assets/img/offers.jpg'

const FEATURES = [
  {
    icon: 'bi-code-slash',
    title: 'Clean Modern Code',
    text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...',
  },
  {
    icon: 'bi-brush',
    title: 'Design To Brag About',
    text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...',
  },
]

function Offers() {
  return (
    <section className="section-flush" id="offers">
      <Grid flush>
        <GridItem lg={6} className="cover-wrap">
          <img src={offersImage} className="cover-image" alt="Lachende zakenvrouw op kantoor" />
        </GridItem>
        <GridItem lg={6}>
          <div className="section-body">
            <p className="subtitle">Elaborated code and creative design</p>
            <h2 className="section-title">What we offers</h2>
            <blockquote className="quote">
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsuy veli.
              Nam nec tellus a odio tincidunt auctor
            </blockquote>

            <Grid gap="1.5rem">
              {FEATURES.map(({ icon, title, text }) => (
                <GridItem key={title} sm={6} className="feature">
                  <i className={`bi ${icon} feature-icon`} />
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-text">{text}</p>
                  <a href="#" className="link-more">Read more <i className="bi bi-chevron-double-right" /></a>
                </GridItem>
              ))}
            </Grid>

            <a href="#" className="btn btn-dark btn-square-lg mt-3">
              View all offers <i className="bi bi-chevron-double-right" />
            </a>
          </div>
        </GridItem>
      </Grid>
    </section>
  )
}

export default Offers
