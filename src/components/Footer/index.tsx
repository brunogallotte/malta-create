import instagramIcon from '../../assets/images/icons/instagram.svg'
import linkedinIcon from '../../assets/images/icons/linkedin.svg'
import behanceIcon from '../../assets/images/icons/behance.svg'
import { FooterColumn, FooterContainer, FooterRights } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <>
    <FooterContainer>
      <div className="container centralizer">
        <FooterColumn>
          <h4>
            <span>_</span>projects
          </h4>
          <ul>
            <li>
              <Link to="/categories/kawasaki">Kawasaki</Link>
            </li>
            <li>
              <Link to="/categories/nike">Nike</Link>
            </li>
            <li>
              <Link to="/categories/powerpeak">Power Peak</Link>
            </li>
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
                <p>@maltaraphael</p>
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
