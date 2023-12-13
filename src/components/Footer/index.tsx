import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import instagramIcon from '../../assets/images/icons/instagram.svg'
import linkedinIcon from '../../assets/images/icons/linkedin.svg'
import behanceIcon from '../../assets/images/icons/behance.svg'
import { FooterColumn, FooterContainer, FooterRights } from './styles'

const Footer = () => (
  <>
    <FooterContainer>
      <div className="container centralizer">
        <FooterColumn>
          <h4>
            <span>_</span>projects
          </h4>
          <ul>
            <motion.li initial={{ x: 0 }} whileHover={{ x: 5 }}>
              <Link to="/categories/kawasaki">Kawasaki</Link>
            </motion.li>
            <motion.li initial={{ x: 0 }} whileHover={{ x: 5 }}>
              <Link to="/categories/nike">Nike</Link>
            </motion.li>
            <motion.li initial={{ x: 0 }} whileHover={{ x: 5 }}>
              <Link to="/categories/powerpeak">Power Peak</Link>
            </motion.li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <motion.div
            className="separator"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 2 }}
          />
        </FooterColumn>
        <FooterColumn>
          <div className="social-media">
            <h4>
              <span>_</span>follow-me
            </h4>
            <div>
              <motion.div
                className="social-box"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <img src={instagramIcon} />
                <p>@malta.create</p>
              </motion.div>
              <motion.div
                className="social-box"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <img src={linkedinIcon} />
                <p>@malta.raphael</p>
              </motion.div>
              <motion.div
                className="social-box"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <img src={behanceIcon} />
                <p>@maltaraphael</p>
              </motion.div>
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
