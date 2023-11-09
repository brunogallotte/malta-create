import instagramIcon from '../../assets/images/icons/instagram.svg'
import linkedinIcon from '../../assets/images/icons/linkedin.svg'
import behanceIcon from '../../assets/images/icons/behance.svg'
import { FooterColumn, FooterContainer, FooterRights } from './styles'

const Footer = () => (
  <>
    <FooterContainer>
      <div className="container">
        <FooterColumn>
          <h4>
            <span>_</span>About
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus dolor velit consectetur, aspernatur officia suscipit
            magnam asperiores ratione voluptatum mollitia sint.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h4>
            <span>_</span>personal works
          </h4>
          <ul>
            <li>Kawasaki</li>
            <li>Nike</li>
            <li>Power Peak</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>
            <span>_</span>pages
          </h4>
          <ul>
            <li>home</li>
            <li>personal</li>
            <li>contact</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <div className="social-media">
            <h4>
              <span>_</span>follow-me
            </h4>
            <div>
              <div className="social-box">
                <img src={instagramIcon} />
                <p>@malta.create</p>
              </div>
              <div className="social-box">
                <img src={linkedinIcon} />
                <p>@malta.raphael</p>
              </div>
              <div className="social-box">
                <img src={behanceIcon} />
                <p>@malta.raphael</p>
              </div>
            </div>
          </div>
        </FooterColumn>
      </div>
    </FooterContainer>
    <FooterRights>
      <p>&copy; 2023 all rights reserved to Malta Photography</p>
    </FooterRights>
  </>
)

export default Footer
